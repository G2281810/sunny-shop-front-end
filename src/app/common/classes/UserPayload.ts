import { IUserPayload } from 'src/app/interfaces/user-payload.interface';

export class UserPayload implements IUserPayload {
  id: number;
  name: string = '';
  email: string = '';
  img?: string = '';
  iat: number;
  exp: number;

  constructor(userPayload: IUserPayload) {
    this.id = userPayload.id;
    this.name = userPayload.name;
    this.email = userPayload.email;
    this.img = userPayload.img;
    this.iat = userPayload.iat;
    this.exp = userPayload.exp;
  }

  getShortName() {
    const shortName = this.name.split(' ').shift();
    return shortName ?? '';
  }
}
