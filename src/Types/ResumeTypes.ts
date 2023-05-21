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
export interface Resume {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    sections: ResumeSection[]
    footer: ResumeFooter | undefined
}
