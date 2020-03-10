import axios from "axios";

class AppData {
  dataQuery(dataFile) {
    let url = `http://localhost:4000/api/data/${dataFile}`;
    return axios.get(url).then(r => r.data); // return data field of response object
  }

  createObj() {
    return {
      test1: "test1",
      test2: "test2"
    };
  }
}

export default AppData;
