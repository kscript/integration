import fetchApi from '@/utils/fetch';

export const scriptList = (options = {}) => fetchApi('/docs/script/list.json', options)
export const pluginList = (options = {}) => fetchApi('/docs/plugin/list.json', options)
export const toolList = (options = {}) => fetchApi('/docs/tool/list.json', options)
export const snippetList = (options = {}) => fetchApi('/docs/snippet/list.json', options)
export const getMarkdownContext = (options = {}, {type, path}: anyObject<string>) => {
  return fetchApi(`/docs/${type}/${path}`, Object.assign({type: 'text'}, options))
}