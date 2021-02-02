
import axios from "axios";

let cache = {helloData: null, lastUpdate: null};

const CACHE_REFRESH_INTERVAL = 30*60*1000; // refresh every half hour

class HelloData {
    
    dataQuery(dataFile) {
        let url = `http://localhost:4000/api/data/${dataFile}`;
        return axios.get(url).then(r => r.data); // return data field of response object
    }

    getData () {
        let now = new Date().getTime();

        // return cache if exist
        if(cache.lastUpdate && now - cache.lastUpdate < CACHE_REFRESH_INTERVAL) {
            console.log("get data from cache");
            return Promise.resolve(cache);
        }

        return this.dataQuery("hello.json").then (data => {
            console.log("data query get data");
            let helloData = data;
            this.setCache ({helloData});
            return cache;
        })
    }

    setCache(newCache) {
        cache = {...cache, ...newCache, lastUpdate: new Date().getTime()};
    }

    getHelloData () {
        return this.getData().then(cache => {
          return cache.helloData;
        })
    }
}

export default HelloData;
