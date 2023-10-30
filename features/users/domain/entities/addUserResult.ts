import User from "../../../users/domain/entities/user";

class AddUsersResult {
  user : User;
  error? : boolean;
  message : string;
  errors? : {
    error : string;
    fiel : string;
  } [] | null;
  constructor (
    message : string,
    user : User,
  ) {
    this.message = message; 
    this.user = user;
  }
}

export default AddUsersResult;