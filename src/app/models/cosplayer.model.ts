import { User } from './user.model';

interface Cosplay {
  name: string;
  price: number;
  imageUrl: string;
}

export class Cosplayer extends User {
  cosplays: Cosplay[];
}
