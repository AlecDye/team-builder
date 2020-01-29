import React from 'react';
import TeamMember from './components/TeamMember';
import './App.css';

// id: number, name: string, occupation: string, quote: string (textarea)
function App() {
  // const [member, setMember] = useState([
  //   {
  //     id: 0,
  //     name: "Alec Dye",
  //     occupation: "Developer",
  //     quote: "Let's get it done!"
  //   }
  // ]);
  return (
    <div>
      <h1>Dream Team</h1>
      <TeamMember />
    </div>
  );
}

export default App;