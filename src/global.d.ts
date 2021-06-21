type Menu = {
  title: string;
  path: string;
  content: any;
}
type SubMenu = {
  title: string;
  menu: Menu[]
}
type MenuList = Array<Menu, SubMenu>
interface anyObject<T = any> {
  [prop: string]: T
}