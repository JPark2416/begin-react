import React from "react";

const Profile = () => {
  const detail = {
    name: "Jinyoung Park",
    career: {
      company: "FMG Insurance",
      period: "Oct 2020 ~ Present",
      roles: [
        "Design, programme, test and execute programmes to support various FMG business activities.",
        "Develop and maintain Guidewire to meet the business needs of the organisation within timeframes and to the satisfaction of all specification requirements.",
        "Create documents about Guidewire codes and new solutions that could be reused in the future to support colleagues' learning and reduce time spent configuration solutions.",
      ],
      achievements: [
        "Successfully completed various user stories related to insurance business improvement by modifying Guidewire front-end configuration, business logic and mapping database in the suitable design.",
        "Adapted to the new web application team (FMG Connect) as a sole Guidewire representative and took responsibility for Guidewire and the business logic of the project. And gained proficiency in API structure, WSDL and SOAP, resulting in the successful release of new API end-points.",
      ],
    },
  };

  // const numbers = [1, 2, 3, 4, 5];
  // const test1 = numbers.map((number) => <li>{number}</li>);

  return (
    <div>
      <h1>{detail.name}</h1>
      <div className="companyModule">
        <h2>{detail.career.company}</h2>
        <p>{detail.career.period}</p>
        <p>Roles and Responsibilities</p>
        <ul>
          {detail.career.roles.map((role) => (
            <li>{role}</li>
          ))}
        </ul>
        <p>Key Achievements</p>
        <ul>
          {detail.career.achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
