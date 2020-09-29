import { Injectable } from '@angular/core';

import { Cosplayer } from './../models/cosplayer.model';
import { User } from './../models/user.model';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  message: string;
  statusCode: number;
}

interface IResponseSuccess extends IResponse {
  statusCode: 200 | 201;
}

interface IResponseError extends IResponse {
  statusCode: 400 | 401 | 403 | 404;
}

@Injectable({
  providedIn: 'root',
})
export class FakeDbService {
  private users = USERS;
  private cosplayers = COSPLAYERS;

  constructor() {}

  createSession({ email, password }: IRequest): IResponse {
    const user = this.users.find((userItem) => userItem.email === email);

    if (!user) {
      return this._messageInvalidMatch();
    }

    const passwordMatched = this._matchPassword(user, password);

    if (!passwordMatched) {
      return this._messageInvalidMatch();
    }

    return this._messageValidMatch();
  }

  private _matchPassword(user: User, password: string) {
    return user.password === password;
  }

  private _messageInvalidMatch(): IResponseError {
    return {
      message: 'Combinação de usuário e senha incorreta',
      statusCode: 401,
    };
  }

  private _messageValidMatch(): IResponseSuccess {
    return {
      statusCode: 201,
      message: 'Combinação de usuário e senha válida',
    };
  }

  // Cosplayers

  getCosplayers() {
    return this.cosplayers;
  }

  getCosplayerById(idCosplay: string) {
    const cosplayer = this.cosplayers.find(
      (cosplayerItem) => cosplayerItem.id === idCosplay
    );
    return cosplayer;
  }
}

// const baseUrlImage = './../../assets';

const USERS: User[] = [
  { id: '1', name: 'User 1', password: '123456', email: 'user01@email.com' },
];

const COSPLAYERS: Cosplayer[] = [
  {
    id: '1',
    name: 'Asuna',
    avatarUrl: './../../assets/cosplayers/Asuna/Asuna.png',
    cosplays: [
      {
        name: 'Asuna Alicization',
        price: 100.0,
        imageUrl: './../../assets/cosplayers/Asuna/Asuna-alicization.jpg',
      },
      {
        name: 'Asuna Alicization',
        price: 100.0,
        imageUrl: './../../assets/cosplayers/Asuna/Asuna-alo.png',
      },
      {
        name: 'Asuna Alicization',
        price: 100.0,
        imageUrl: './../../assets/cosplayers/Asuna/Asuna-ordinal-scale.png',
      },
      {
        name: 'Asuna Alicization',
        price: 100.0,
        imageUrl: './../../assets/cosplayers/Asuna/Asuna-sao.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Ichigo',
    avatarUrl: './../../assets/cosplayers/Ichigo/Ichigo.jpg',
    cosplays: [
      {
        name: 'Ichigo Bankai',
        price: 10,
        imageUrl: './../../assets/cosplayers/Ichigo/Ichigo-bankai.jpg',
      },
      {
        name: 'Ichigo Getsuga',
        price: 10,
        imageUrl: './../../assets/cosplayers/Ichigo/Ichigo-getsuga.png',
      },
      {
        name: 'Ichigo Hollow',
        price: 10,
        imageUrl: './../../assets/cosplayers/Ichigo/Ichigo-hollow.jpg',
      },
      {
        name: 'Ichigo Inner',
        price: 10,
        imageUrl: './../../assets/cosplayers/Ichigo/Ichigo-inner.jpg',
      },
      {
        name: 'Ichigo Vasto Lord',
        price: 10,
        imageUrl: './../../assets/cosplayers/Ichigo/Ichigo-vasto-lord.jpg',
      },
    ],
  },
  {
    id: '3',
    name: 'Kirito',
    avatarUrl: './../../assets/cosplayers/Kirito/Kirito.jpg',
    cosplays: [
      {
        name: 'Kirito Alicization',
        price: 123,
        imageUrl: './../../assets/cosplayers/Kirito/Kirito-alicization.jpg',
      },
      {
        name: 'Kirito ALO',
        price: 123,
        imageUrl: './../../assets/cosplayers/Kirito/Kirito-alo.png',
      },
      {
        name: 'Kirito GGO',
        price: 123,
        imageUrl: './../../assets/cosplayers/Kirito/Kirito-ggo.jpg',
      },
      {
        name: 'Kirito Ordinal Scale',
        price: 123,
        imageUrl: './../../assets/cosplayers/Kirito/Kirito-ordinal-scale.jpg',
      },
      {
        name: 'Kirito SAO',
        price: 123,
        imageUrl: './../../assets/cosplayers/Kirito/Kirito-sao.png',
      },
    ],
  },
  {
    id: '4',
    name: 'Leafa',
    avatarUrl: './../../assets/cosplayers/Leafa/Leafa.jpg',
    cosplays: [
      {
        name: 'Leafa ALO',
        price: 125,
        imageUrl: './../../assets/cosplayers/Leafa/Leafa-alo.png',
      },
    ],
  },
];
