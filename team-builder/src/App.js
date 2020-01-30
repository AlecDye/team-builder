import React, { useState } from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/Form';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';

// id: number, name: string, occupation: string, quote: string (textarea)
function App() {
  const [members, setMember] = useState([
    {
      id: 1,
      name: "Alec Dye",
      role: "Developer",
      email: "alec@internet.com",
      quote: "Let's get it done!"
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email,
      quote: member.quote
    };
    setMember([...members, newMember]);
  };
  // rendering components and passing props into components
  return (
    <div className="App">
      <Jumbotron fluid>Dream Team</Jumbotron>
      <Container fluid>
        <TeamMember member={members} />
        <Form addNewMember={addNewMember} />
      </Container>
    </div>
  );
}

export default App;