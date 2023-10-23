import User from "../entities/user";
import UsersResult from "../entities/usersResult";

abstract class UsersRepository {
  abstract addUsers(user : User) : Promise<User>

  abstract getUsers() : Promise<UsersResult>
}

export default UsersRepository;