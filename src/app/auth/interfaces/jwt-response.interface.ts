import { UserPayload } from 'src/app/common/classes/UserPayload';
import { IMenu } from 'src/app/menus/interfaces/menus.interfaces';

export interface ITokenResponse {
  accessToken: string;
  menu: IMenu[];
  permissions: string[];
  payload?: UserPayload;
}
