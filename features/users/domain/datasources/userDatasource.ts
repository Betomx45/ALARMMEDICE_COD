import AddUsersResult from "../entities/addUserResult";
import User from "../entities/user";
import UsersResult from "../entities/usersResult";

abstract class UsersDatasource {
  abstract addUsers(user : User) : Promise<AddUsersResult>
  
  abstract getUsers() : Promise<UsersResult>
}

export default UsersDatasource;