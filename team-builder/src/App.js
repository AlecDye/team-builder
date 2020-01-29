import React, { useState } from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/Form';
import './App.css';

// id: number, name: string, occupation: string, quote: string (textarea)
function App() {
  const [member, setMember] = useState([
    {
      id: 0,
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
    };
    setMember([...member, newMember]);
  };
  return (
    <div className="App">
      <h1>Dream Team</h1>
      <TeamMember member={member} />
      <Form />
    </div>
  );
}

export default App;