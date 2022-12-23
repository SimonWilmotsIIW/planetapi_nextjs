import { stars } from '../../../data/stars'

export default function starHandler(req, res) {
  const { query } = req
  const { slug } = query

  let filtered = [];


  if (slug[0]) { 
    switch (slug[0].toLowerCase()) {
      case "name":
        const name  = query.slug[1]
        filtered = stars.filter((p) => p.name === name)
        break;
      
      case "id":
        const id = query.slug[1]
        filtered = stars.filter((p) => p.id == id)
        break;

      case "distancetoearth":
        const distanceToEarth = query.slug[1]
        filtered = stars.filter((p) => p.distanceToEarth == distanceToEarth)
        break;

      default:
        break;
    }
  }
  
  //const filtered = stars.filter((p) => p.id === id)
  //console.log(slug, query.slug[1], filtered)
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Star not found.` })
}