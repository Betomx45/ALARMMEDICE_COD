import UsersDatasource from "../../domain/datasources/userDatasource";
import AddUsersResult from "../../domain/entities/addUserResult";
import User from "../../domain/entities/user";
import UserResult from "../../domain/entities/usersResult";
import UsersRepository from "../../domain/repositories/usersRepository";

class UsersRepositoryImp extends UsersRepository {
  datasource : UsersDatasource;

  constructor (datasource : UsersDatasource) {
    super();
    this.datasource = datasource;
  }

  addUsers(user : User) : Promise<AddUsersResult> {
    return this.datasource.addUsers(user);
  }

  getUsers() : Promise<UserResult> {
    return this.datasource.getUsers();
  }
}

export default UsersRepositoryImp;