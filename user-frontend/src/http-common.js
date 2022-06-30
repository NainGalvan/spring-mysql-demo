import axios from "axios";

export default axios.create({baseURL: "http://Userregistration-env.eba-df3mg2mr.us-west-1.elasticbeanstalk.com/api", headers: {
    "Content-type": "application/json"
},})