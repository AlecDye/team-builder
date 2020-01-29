import React from "react";

//* maps through props and grabs data to make a team member card
const TeamMember = props => {
    return (
        <div>
            {props.member.map(member => (
                <div className="member-card" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.occupation}</p>
                    <p>{member.quote}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;