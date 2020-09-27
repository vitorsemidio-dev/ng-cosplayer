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
}

interface IResponseError extends IResponse {
}

@Injectable({
  providedIn: 'root',
})
export class FakeDbService {
  private users = USERS;

  constructor() {}

  createSession({
    email,
    password,
  }: IRequest): IResponse {
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
}

const USERS: User[] = [
  { id: '1', name: 'User 1', password: '123456', email: 'user01@email.com' },
];

const COSPLAYERS: Cosplayer[] = [];
