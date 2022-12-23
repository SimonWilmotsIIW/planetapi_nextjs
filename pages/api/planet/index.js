import { planets } from '../../../data/planets'

export default function handler(req, res) {
  res.status(200).json(planets)
}
