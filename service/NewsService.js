const request = require('request')

class NewsService {
  getNews (id) {
    console.log('id', id)
    const fetchData = async function () {
      let r1 = await request.get({url: 'http://localhost:8080/', json: true})
      let r2 = await request.get({url: 'http://localhost:8080/', json: true})
      console.log(r1)
      console.log(r2)
      return {
        r1: r1,
        r2: r2
      }
    }

    return fetchData()
  }
}

module.exports = NewsService
