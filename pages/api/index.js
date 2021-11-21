// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({ message: 'hello' }))
  }