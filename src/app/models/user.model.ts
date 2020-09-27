import { Person } from './person.model';

export class User extends Person {
  id: string;
  email: string;
  password: string;
}
