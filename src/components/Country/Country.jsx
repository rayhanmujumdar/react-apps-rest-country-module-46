import './Country.css'
const Country = (props) => {
    const {name,flags,area,population} = props.countryData
    return (
        <div className='country'>
            <h1 className=''>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>area: {area}</p>
            <p>Population: {population}</p>
           {/* <a href={maps.googleMaps} target={"_blank"}className="btn btn-primary">Google map</a> */}
        </div>
    );
};
export default Country;