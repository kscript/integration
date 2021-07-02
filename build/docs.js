const fs = require('fs');
const path = require('path');
const {fileLoader} = require('ks-file-loader');
const {extract, parseConfig} = require(path.resolve('./src/utils/yaml-md'));
const docsPath = path.resolve('./public/docs')
fileLoader({
  path: docsPath,
  showDir: true,
  readFile: false,
  deep: false,
  loader(stats, data, done) {
    const list = [];
    if (stats.type === 'dir') {
      const dir = stats.path;
      fileLoader({
        path: stats.path,
        showDir: false,
        readFile: true,
        deep: true,
        ext: 'md',
        loader(stats, data, done) {
          const {yaml, markdown} = extract(data);
          const config = parseConfig(yaml);
          let rewrite = !config.title || !config.date;
          if (!config.title) {
            Object.assign({
              title: stats.name
            }, config)
          }
          if (!config.date) {
            const t = new Date(stats.birthtime);
            const date = [t.getFullYear(), t.getMonth() + 1, t.getDate()].join('/');
            const time = [t.getHours(), t.getMinutes(), t.getSeconds()].join(':');
            Object.assign(config, {
              date: date + ' ' + time
            });
          }
          Object.assign(config, {
            path: stats.path.slice(dir.length)
          })
          list.push(config);
          if (rewrite) {
            const content = '---\n' + 
              Object.keys(config).sort((a, b) => a === 'title' ? -1 : 1).map(key => key + ': ' + config[key]).join('\n') 
              + '\n---\n' + markdown;
            fs.writeFile(stats.path, content, () => {
              done();
            });
          } else {
            done()
          }
          return false;
        },
        done() {
          const data = {
            type: stats.name
          }
          const newList = [];
          const maps = {};
          list.sort((a, b) => new Date(a.date) - new Date(b.date)).map(item => {
            if (item.categories) {
              Array().concat(item.categories).map(categorie => {
                if (!maps[categorie]) {
                  newList.push(maps[categorie] = {
                    title: categorie,
                    list: []
                  });
                }
                maps[categorie].list.push(item);
              });
            } else {
              newList.push(item);
            }
          });
          Object.assign(data, {
            list: newList
          });
          fs.writeFile(path.join(stats.path, 'list.json'), JSON.stringify({data}, null, 2), () => {
            done();
          });
          done();
        }
      });
      return false;
    }
  }
});