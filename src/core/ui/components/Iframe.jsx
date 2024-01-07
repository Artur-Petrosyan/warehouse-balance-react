import {useEffect, useState} from "react";

const Iframe = ({encodedURL}) => {
    const [geocode, setGeocode] = useState([{
        lon: "",
        lat: "",
    }])
    var requestOptions = {
        method: 'GET',
    };
   const address = encodeURI('ք․Երևան 20 իսակովի պողոտա ')
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=1c1f7f3bc4294fdfaa304684df9e188b`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // const getGeocode = async () => {
    //     const encodedAddress = encodeURIComponent('ք․Երևան,ԱՐՑԱԽԻ 41');
    //     const response = await fetch(
    //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`)
    //     const data = await response.json()
    //     setGeocode([{
    //         lon : data[0]?.lon,
    //         lat: data[0]?.lat
    //     }])
    // };
    // useEffect(() => {
    //     getGeocode()
    // }, []);
    console.log(geocode)
        return (
        <></>
    )
}

export default Iframe;