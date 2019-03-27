import axios from 'axios'
const IP = process.env.REACT_APP_BACKEND_IP
const cardsPath = `http://${IP}:4000/cards`

export function getAllCards() {
  return axios.get(cardsPath)
}
