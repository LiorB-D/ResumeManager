import React from "react";
import { Resume } from "../Types/ResumeTypes";
import ResumeHeader from "./ResumeHeader";

type Props = {
  resume: Resume;
};

const ResumeDisplay: React.FC<Props> = ({ resume }) => {
  return (
    <div className="ResumePage">
      <ResumeHeader
        name={resume.name}
        email={resume.email}
        phone={resume.phone}
        linkedin={resume.linkedin}
      />
      {resume.sections.map((sect) => {
        return (
          <div className="ResumeSection">
            <p className="SectionHeader">{sect.title}</p>
            {sect.items.map((item) => {
              return (
                <div className="ResumeItem">
                  <div className="ItemHeader">
                    <p className="OrganizationTitle">{item.title}</p>
                    <p className="LocationTitle">{item.location}</p>
                  </div>
                  {item.roles.map((role) => {
                    return (
                      <div className="ResumeRole">
                        <div className="RoleHeader">
                          <p className="RoleTitle">{role.title}</p>
                          <p className="RoleDates">{role.dates}</p>
                        </div>
                        <ul className="ResumeBulletList">
                          {role.bullets.map((bullet) => {
                            return <li className="ResumeBullet">{bullet}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
      {resume.footer && (
        <div className="ResumeSection">
          <p className="SectionHeader">{resume.footer.title}</p>
          {resume.footer.items.map((item) => {
            return (
              <p className = "FooterBullet">
                <i>{item[0]}</i>: {item[1]}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ResumeDisplay;
