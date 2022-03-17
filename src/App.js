import './App.css';
import Countries from './components/Countries/Countries';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}





// function LoadCountries(){
//   const [countries,setCountries] = useState([])
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   },[])
//   console.log(countries)
//   return(
//     <div>
//       <h1>Visiting Every country of the world</h1>
//       <h3>Availabel countries: {countries.length}</h3>
//         {
//           countries.map(country => <Countries countryData={country}></Countries>)
//         }
//     </div>
//   )
// }

// function Countries(Props){
//   const {name,flags,area,population} = Props.countryData
//   console.log(Props.countryData)
//   return(
//     <div className='countries'>
//       <h1>Name: {name.common}</h1>
//       <img src={flags.png} alt="" />
//       <p>Area: {area}</p>
//       <p>Population: {population}</p>
//     </div>
//   )
// }

export default App;
