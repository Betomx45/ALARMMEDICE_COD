import backendConfig from "../../../../config/backend/config";
import UsersDatasource from "../../domain/datasources/userDatasource";
import User from "../../domain/entities/user";
import UsersResult from "../../domain/entities/usersResult";

class UsersDatasourceImp extends UsersDatasource {
  async addUsers(user : User) : Promise<User> {
    return fetch(`${backendConfig.url}/api/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return user;
    });
  }

  async getUsers() : Promise<UsersResult> {
    return fetch(`${backendConfig.url}/api/users`)
    .then((response) => response.json())
    .then((response) => {
      const users = response.map((item : any) => new User(
        item.id,
        item.nombre,
        item.correo,
        item.password,
      ));
      return new UsersResult (users)
    });
  }
}

export default UsersDatasourceImp;