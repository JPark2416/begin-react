import React from "react";
import Career from "./Career";
import styled from "styled-components";
import "../Style/profile.css";

const Button = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

function Profile() {
  return (
    <div>
      <h1 className="title">Jinyoung Park</h1>
      <img src="../images/JP.jpg" alt="myPhoto" />
      <h2>
        Experienced software developer with three years of experience creating
        and maintaining complex insurance systems. Excellent knowledge of OOP
        development techniques and deep understanding of the Agile development
        process. Always eager to learn and expand the diversity of knowledge and
        skills.
      </h2>
      <Career />
      <Button>TEST</Button>
    </div>
  );
}

export default Profile;
