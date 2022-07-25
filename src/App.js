import logo from './logo.svg';
import './App.css';
import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Title from "./components/Title";



function App() {

    const color = {
        color:"red",
        fontSize:"80px"
    }

  return (
    <div className="App">
      <Task1/>
     <Task2/>
     <Title color={color} text={'Зоголовок'}/>
    </div>
  );
}

export default App;
