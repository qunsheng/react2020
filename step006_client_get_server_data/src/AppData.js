import axios from "axios";

class AppData {
  dataQuery(dataFile) {
    let url = `http://localhost:4000/api/data/${dataFile}`;
    return axios.get(url).then(r => r.data); // return data field of response object
  }
}

export default AppData;
