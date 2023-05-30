import React, { useEffect, useState } from "react";
import "./style/Profile.scss";
import { Tab } from "@headlessui/react";
import { cv } from "../Model/cv";
// import userEvent from "@testing-library/user-event";

const Profile = () => {
  const [CVdata, setCVdata] = useState(cv);

  // useEffect(() => {
  //   console.log(CVdata);
  // });

  // const getCareer = (param) => param.map((p) => <p>{p}</p>);

  return (
    <div className="Profile">
      <h1>Profile Board</h1>
      {CVdata.career.map((c) => (
        <div>
          <h2>{c.company}</h2>
          <p>{c.period}</p>

          {/* Roles */}
          <h2>{c.roles.length > 1 ? "Roles" : null}</h2>
          {c.roles.map((elt) => (
            <div>
              <p>{elt}</p>
            </div>
          ))}

          {/* Achievements */}
          <h2>{c.achievements.length > 1 ? "Achievements" : null}</h2>
          {c.achievements}
          {c.achievements?.map((achievement) => (
            <div>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      ))}

      <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Profile;
