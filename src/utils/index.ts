export const addMenu = ({title, path}: anyObject<string>, type: string) => {
  const realPath = path || `${title}.md`
  return {
    title,
    path: realPath,
    content: require(`/public/docs/${type}/${realPath}`).default.render()
  }
}