import { createContext, useState } from "react";
import { CVProfile, Resume } from "../Types/ResumeTypes";
import { defaultResume } from "./DefaultResume";

type CVContextProviderProps = {
    children: React.ReactNode
}

// Define the shape of the context
interface CVContextProps {
  cvProfile: CVProfile;
  setCVProfile: React.Dispatch<React.SetStateAction<CVProfile>>;
  editField: (key: string, newValue: string) => void
}

const defaultCVProfile = new CVProfile(defaultResume.name, defaultResume.email, defaultResume.phone, defaultResume.linkedin, defaultResume.sections, defaultResume.footer, [defaultResume]);

// Initialize the context
export const CVContext = createContext<CVContextProps>({
  cvProfile: defaultCVProfile,
  setCVProfile: () => {},
  editField: () => {}
});

export const CVContextProvider = ({ children }: CVContextProviderProps) => {
    const [cvProfile, setCVProfile] = useState(defaultCVProfile);

    const editField = (targetKey: string, newValue: any) => {
      setCVProfile(prevProfile => {
        // Create a copy of the previous profile
        const updatedProfile = {...prevProfile};
        // Add the new section
        if(updatedProfile.currentEditing == 0){
            updatedProfile[targetKey as keyof Resume] = newValue
            updatedProfile.resumes.forEach((resume) => {
                resume[targetKey as keyof Resume] = newValue
            })
        } else {
            updatedProfile.resumes[updatedProfile.currentEditing][targetKey as keyof Resume] = newValue
        }
        return updatedProfile;
      });
    };

    return (
      <CVContext.Provider value={{ cvProfile, setCVProfile, editField}}>
        {children}
      </CVContext.Provider>
    );
}

