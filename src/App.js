import React, { Fragments } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';

function App() {
  return (
    <>
      <h1>Iteration 1</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1>Iteration 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>Iteration 4</h1>
      <BoxColor fontColor="white" r={255} g={0} b={0} />
      <BoxColor fontColor="black" r={128} g={255} b={0} />
    </>
  );
}

export default App;
