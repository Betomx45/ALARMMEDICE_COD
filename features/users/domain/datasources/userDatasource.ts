import User from "../entities/user";
import UsersResult from "../entities/usersResult";

abstract class UsersDatasource {
  abstract addUsers(user : User) : Promise<User>
  
  abstract getUsers() : Promise<UsersResult>
}

export default UsersDatasource;