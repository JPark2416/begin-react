import React from "react";
import "../Style/Home.scss";
import { cv } from "../Model/cv";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <img src="images/JP.jpg" alt="profile" className="rounded-2xl" />
        <h className="">Jinyoung Park</h>
      </div>
      <div>
        {cv.career.map((c) => (
          <div>
            <p>{c.company}</p>
            <p>{c.period}</p>
            <p>Roles</p>
            {/* <p>{c.roles.map((role) => ({ role.length<1? }))}</p> */}
            {c.roles.length > 0 ? c.roles.map((role) => <p>{role}</p>) : <br />}
            {/* {c.achievements.length > 0 ? (
              c.achievements.map((achievement) => <p>{achievement}</p>)
            ) : (
              <br />
            )} */}
            {/* <p>{c.achievements.length}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
