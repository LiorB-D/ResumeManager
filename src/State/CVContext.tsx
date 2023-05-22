import { createContext, useState } from "react";
import { CVProfile } from "../Types/ResumeTypes";
import { defaultResume } from "./DefaultResume";

type CVContextProviderProps = {
    children: React.ReactNode
}

// Define the shape of the context
interface CVContextProps {
  cvProfile: CVProfile;
  setCVProfile: React.Dispatch<React.SetStateAction<CVProfile>>;
  editEmail: (newEmail: string) => void
}

const defaultCVProfile = new CVProfile(defaultResume.name, defaultResume.email, defaultResume.phone, defaultResume.linkedin, defaultResume.sections, defaultResume.footer, [defaultResume]);

// Initialize the context
export const CVContext = createContext<CVContextProps>({
  cvProfile: defaultCVProfile,
  setCVProfile: () => {},
  editEmail: () => {}
});

export const CVContextProvider = ({ children }: CVContextProviderProps) => {
    const [cvProfile, setCVProfile] = useState(defaultCVProfile);

    const editEmail = (newEmail: string) => {
      setCVProfile(prevProfile => {
        // Create a copy of the previous profile
        const updatedProfile = {...prevProfile};
        // Add the new section
        updatedProfile.email = newEmail;
        
        return updatedProfile;
      });
    };

    return (
      <CVContext.Provider value={{ cvProfile, setCVProfile, editEmail}}>
        {children}
      </CVContext.Provider>
    );
}

