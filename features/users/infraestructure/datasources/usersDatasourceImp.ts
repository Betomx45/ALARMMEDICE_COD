import backendConfig from "../../../../config/backend/config";
import UsersDatasource from "../../domain/datasources/userDatasource";
import AddUsersResult from "../../domain/entities/addUserResult";
import User from "../../domain/entities/user";
import UsersResult from "../../domain/entities/usersResult";

class UsersDatasourceImp extends UsersDatasource {
  async addUsers(user : User) : Promise<AddUsersResult> {
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
      const result = new AddUsersResult(response.message, response.user || null);
      result.errors = response.errors || null;
      result.error = response.error || false;

      return result;
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