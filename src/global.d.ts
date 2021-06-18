type Menu = {
  title: string;
  path: string;
  content: any;
}
interface anyObject<T = any> {
  [prop: string]: T
}