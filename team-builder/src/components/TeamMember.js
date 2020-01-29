import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

//* maps through props and grabs data to make a team member card
const TeamMember = props => {
    // console.log(props);
    return (
        <div>
            {props.member.map(member => (
                <div className="member-card" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                    <p>{member.quote}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;