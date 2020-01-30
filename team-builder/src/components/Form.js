import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TeamForm = props => {
    const [member, setMember] = useState({
        name: "",
        role: "",
        email: "",
        quote: ""
    });
    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        // console.log(member);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", role: "", email: "", quote: "" });
    }
    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name="name" onChange={handleChanges} placeholder="Hulk Hogan" value={member.name} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="role">Role</Label>
                <Input id="role" type="select" name="role" onChange={handleChanges} value={member.role} >
                    <option>Wrestling Champion</option>
                    <option>Web Developer</option>
                    <option>UI Designer</option>
                    <option>Project Manager</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" name="email" onChange={handleChanges} placeholder="Hulkster@aol.com" value={member.email} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="quote">Quote</Label>
                <Input id="quote" type="textarea" name="quote" onChange={handleChanges} placeholder="Hulkamania is running wild!" value={member.quote} />
            </FormGroup>
            <Button type="submit">Join the Team</Button>
        </Form >
    );
};

export default TeamForm;