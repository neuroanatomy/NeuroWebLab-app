import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5001/api";

export default {

    session: {
        loginWithGitHub: async function () {

            return await axios.get(`/auth/github`).then((response) => {
                console.log("response : ", response.status)
                //return response.status == 200 ? response.data : false
            }).catch();

        }

    }

}