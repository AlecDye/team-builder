import React, { useState } from "react";

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
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" onChange={handleChanges} placeholder="Hulk Hogan" value={member.name} />
            <label htmlFor="role">Role: </label>
            <input id="role" type="text" name="role" onChange={handleChanges} placeholder="Wrestling Champion" value={member.role} />
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" name="email" onChange={handleChanges} placeholder="Hulkster@AOL.com" value={member.email} />
            <label htmlFor="quote">Quote: </label>
            <textarea id="quote" type="text" name="quote" onChange={handleChanges} placeholder="Hulkamania is running wild!" value={member.quote} />
            <button type="submit">Join the Team</button>
        </form>
    );
};

export default TeamForm;