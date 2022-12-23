import { stars } from '../../../data/stars'

export default function handler(req, res) {
  res.status(200).json(stars)
}
