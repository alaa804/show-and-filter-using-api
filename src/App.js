import React ,{ useState , useEffect  } from 'react';
import Header from './components/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import axios from 'axios'
import Search from './components/Search'
import './App.css';



const App = () => {
   const [ items , setItems ] =useState([]);
   const [ isloading , setIsLoading ] =useState(true);
   const [query , setQuery] = useState('');
  
   useEffect(() => {
       const fetchItems = async () => {
           const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
           
          //  console.log(result.data)

           setItems(result.data)
           setIsLoading(false);
       }
           fetchItems();
   },[query])

  return (
    <div className="container">
        <Header />
        <Search  getQuery = {(q) => setQuery(q)}/>
        <CharacterGrid items={items} isloading ={isloading}  />
    </div>
  );
}

export default App;
