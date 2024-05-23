import { IUser } from '../IUser';

export interface AythResponce {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
