export interface IUserMenu {
  id?: number;
  parent_id?: number;
  name: string;
  icon: string;
  type: string;
  url: string;
  children?: IUserMenu[];
}
