import { Person } from './person.model';

interface Cosplay {
  name: string;
  price: number;
  imageUrl: string;
}

export class Cosplayer extends Person {
  cosplays: Cosplay[];
}
