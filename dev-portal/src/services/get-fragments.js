const loadingHtml = ''

export const fragments = {}

loadHtml('/content-fragments/GettingStarted.md', 'GettingStarted')
loadHtml('/content-fragments/Home.md', 'Home')

function loadHtml(path, fragment) {
  fragments[fragment] = { content: loadingHtml }

  fetch(path).then(() => {
    let frontMatter = {}

    fragments[fragment] = {
      content: '',
      ...frontMatter
    }
  })
}
