import { v4 as uuidv4 } from 'uuid';
import {validation} from '../../../shared/services/validation/validation';
import {userEntitySchema} from './validation/userEntitySchema';



export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string, id?: string)  {
    !id ? this.id = uuidv4() : this.id = id;
    this.name = name;
    console.log(this.name);
    console.log(name);
    this.email = email;
    this.password = password;

  }

  async validation() {
    return await validation(this, userEntitySchema);
  }
}