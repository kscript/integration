import fetchApi from '@/utils/fetch';

export const getMenus = () => fetchApi('/menus.json')
export const getList = ({listUrl, id}: anyObject<string>) => fetchApi(listUrl || `/docs/${id}/list.json`)
export const getMarkdownContext = ({url, type, path}: anyObject<string>) => {
  return fetchApi(url || `/docs/${type}/${path}`, Object.assign({type: 'text'}))
}