const baseUrl = process.env.NODE_ENV === 'development' ? '' : '';
export const fetchApi = (url: string, options: anyObject) => {
  const result = fetch(baseUrl + url, options);
  const {type = 'json'} = options;
  if (type === 'json') {
    return result.then(response => response.json())
  }
  if (type === 'text') {
    return result.then(response => response.text())
  }
  return result
}
export default fetchApi