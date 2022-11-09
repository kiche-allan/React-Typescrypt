
import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';
import { Person } from './components/Person';
import { Status } from './components/Status';
import { Button } from './components/Button';

import { Container } from './components/Container';
import {ThemeContextProvier} from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext';
import { Box } from './components/context/Box';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';

function App() {
  const personName ={
    first : 'Allan',
    last : 'Kiche'
  }

  const nameList = [{
    first: 'Bruce',
    last: 'Wayne'}
    ,{
    first: 'Clark',
    last: 'Kent' 
    },{
    first: 'Diana',
    last: 'Prince'  
    },{
    first: 'Okuna',
    last: 'Kiche'  
    }
  ]
  return (
    <div className="App">
      <div>
        <ThemeContextProvier>
          <Box  />
        </ThemeContextProvier>
            <Greet name = 'Allan' messageCount={20} isLoggedIn = {false}/>
            <Person name= {personName} />
            <PersonList names= {nameList} />
            <Status status = 'error'/>
            <Button 
               handleClick={(event, id) => {
                console.log('Button Clicked', event, id)
               }}
            
             />
             <Container styles = {{border: '1 px solid black', padding: '1rem'}}/>
             <UserContextProvider>
                <User />
             </UserContextProvider>
        <Private isLoggedIn={true} Component={Profile} />
        </div>
    </div>
  );
}

export default App;
