import React from 'react';

type Props = {
  name: string;
  email: string;
  phone: string;
  linkedin: string
};

const ResumeHeader: React.FC<Props> = ({ name , email, phone, linkedin}) => {
  return <div className= "ResumeHeader">
      <p className = "NameHeader">{name}</p>
      <p className = "ContactInfo">{email} | {phone} | <a href = {linkedin}>LinkedIn</a></p>
  </div>;
};

export default ResumeHeader;
