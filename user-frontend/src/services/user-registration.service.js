import http from '../http-common'

class UserDataService {
    getAllUsers = () => {
        return http.get("users");
    }

    createUser = (user) => {
        console.log("inside create user: " + user);
       return http.post("user/save", user);
    }

    deleteUser = (id) => {
        return http.delete(`user/delete/id/${id}`)
    }
}

export default new UserDataService()