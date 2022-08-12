export interface IMenu {
  id?: number;
  name: string;
  short_name: string;
  url: string;
  icon: string;
  type: string;
  sort_orden?: number;
  parent_id?: number;
  parent_menu?: string;
  permissions_count: number;
}
