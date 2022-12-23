import { planets } from '../../../data/planets'

export default function planetHandler(req, res) {
  const { query } = req
  const { slug } = query

  let filtered = [];


  if (slug[0]) { 
    switch (slug[0].toLowerCase()) {
      case "name":
        const name  = query.slug[1]
        filtered = planets.filter((p) => p.name === name)
        break;
      
      case "id":
        const id = query.slug[1]
        filtered = planets.filter((p) => p.id == id)
        break;
      
      case "diameter":
        const diameter = query.slug[1]

        filtered = planets.filter((p) => p.diameter == diameter)
        break;

      case "distancetosun":
        const distanceToSun = query.slug[1]
        filtered = planets.filter((p) => p.distanceToSun == distanceToSun)
        break;

      default:
        break;
    }
  }
  
  //const filtered = planets.filter((p) => p.id === id)
  //console.log(slug, query.slug[1], filtered)
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Planet not found.` })
}