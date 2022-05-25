import './App.css';
import { useState} from "react";
function App() {

  const [animals, setanimals] = useState([]);
  const search = async(q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({q})
    );
    const data = await response.json();
    setanimals(data);
  };


  return (
    <div className="App">
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => { search(e.target.value) }}
      />
      <ul>
      { animals.map((animal)=>(
        <li key={animal.id}>
          <strong> {animal.type} </strong> {animal.name}
        </li>
      ))}
      
      {animals.length === 0 && 'No animals found'}  
      </ul>
    </div>
  );
}

export default App;
