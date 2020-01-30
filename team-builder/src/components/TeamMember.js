import React from "react";
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody
} from "reactstrap";


//* maps through props and grabs data to make a team member card
const TeamMember = props => {
    // console.log(props);
    return (
        <CardGroup>
            {props.member.map(member => (
                <Card className="member-card" key={member.id}>
                    <CardTitle>{member.name}</CardTitle>
                    <CardSubtitle>{member.role}</CardSubtitle>
                    <CardText>{member.email}</CardText>
                    <CardText>{member.quote}</CardText>
                </Card>
            ))}
        </CardGroup>
    );
};

export default TeamMember;