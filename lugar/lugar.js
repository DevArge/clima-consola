const axios = require('axios');

const getLugar = async (direccion) =>{
    let encodeUrl = encodeURI(direccion)
    
    let respuesta  = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    if(respuesta.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la cuidad ${direccion}`);
    }
            let location = respuesta.data.results[0].formatted_address;
            let longitud = respuesta.data.results[0].geometry.location.lng;
            let latitud = respuesta.data.results[0].geometry.location.lat;
            // console.log( JSON.stringify(resp.data, undefined, 2));
  
    return {
        direccion : location,
        lat : latitud,
        lng : longitud
    }
}

module.exports = {
    getLugar
}
