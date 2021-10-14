
import axios from "axios";

class UserData {
    readData(page) {
        let url = `https://randomuser.me/api?page=${page}`;
        return axios.get(url).then(r => r.data); // return data field of response object
    }
}

export default UserData;