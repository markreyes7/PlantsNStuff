import Header from './Components/Header';
import HPHeader from './Components/HPHeader';
import "./scss/custom.scss"
import './App.css';
import HPContent from './Components/HPContent';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <HPHeader></HPHeader>
     <HPContent plant="succulents" plantName="Succulents" plantDescription="Wow this is a pretty cool mothafucken plant that I would love to take care of and all of it's species."></HPContent>
     
    </div>
  );
}

export default App;
