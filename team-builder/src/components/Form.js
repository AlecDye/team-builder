import React, { useState } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({
        name: ""
    });
    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(member);
    }
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" onChange={handleChanges} placeholder="Hulk Hogan" />
        </form>
    );
};

export default TeamForm;