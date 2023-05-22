export interface ResumeRole {
    title: string;
    dates: string;
    bullets: string[];
}
export interface ResumeItem {
    title: string;
    location: string;
    roles: ResumeRole[]
}
export interface ResumeSection {
    title: string;
    items: ResumeItem[]
}
export interface ResumeFooter {
    title: string;
    items: string[][];
}

export class Resume {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    sections: ResumeSection[];
    footer: ResumeFooter | undefined;

    constructor(name: string, email: string, phone: string, linkedin: string, sections: ResumeSection[], footer: ResumeFooter | undefined) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.linkedin = linkedin;
        this.sections = sections;
        this.footer = footer;
    }   
}

export class CVProfile extends Resume{
    resumes: Resume[]
    currentEditing: number = 0
    constructor(name: string, email: string, phone: string, linkedin: string, sections: ResumeSection[], footer: ResumeFooter | undefined, resumes: Resume[]) {
        super(name, email, phone, linkedin, sections, footer)
        this.resumes = [this,...resumes]
    }
}
