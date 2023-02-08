import fs from 'fs';
import axios from 'axios';


class Busquedas{
    historial = [];
    dbpath = './db/database.json';

    constructor(){
        this.leerDB();
    }

    get historialCapitalizado(){
        const ary = [];
        this.historial.forEach( (lugar) =>{
            let a = lugar.charAt(0).toUpperCase();
            let b = lugar.slice(1);
            ary.push( a + b );
        });
        return ary;
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es' 
        }
    }

    async ciudad(lugar = ''){
        try{
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));            
        }catch(error){
            console.log(error);
        }
    }

    async clima(lat, lon){
        try{

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9e67aba38e87a3dc6b81f860ebf5920c`,
                params: {
                    lat,
                    lon,
                    'access_token': process.env.OPENWEATHER_KEY,
                    'units': 'metric',
                    'lang': 'es'
                }
            });
            
            const main = []
            const resp = await instance.get()
            const desc = resp.data.weather.map(r => ({
                desc:  r.description
            }));

            main.push(resp.data.main)
            const temp = main.map(t => ({
                temp: t.temp,
                temp_min: t.temp_min,
                temp_max: t.temp_max,
            }));

            const clima = {
                desc: desc[0].desc,
                temp: temp[0].temp,
                temp_min: temp[0].temp_min,
                temp_max: temp[0].temp_max,
            };
            
            return clima

        }catch(error){
            console.log(error);
        }
    }

    agregarHistorial(lugar = ''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }else{
            this.historial.unshift(lugar.toLocaleLowerCase());
            this.guardarDB();
        }

    }

    guardarDB(){
        const payload = {
            historial : this.historial
        };

        fs.writeFileSync(this.dbpath, JSON.stringify(payload));
    }

    leerDB(){
        let info = fs.readFileSync(this.dbpath, {encoding: 'utf8'});
        let data = JSON.parse(info);
        this.historial = data.historial;
    }


}

export {Busquedas}
