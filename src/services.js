import TaskData from './form/taskData'
import CardData from './app/cardsData'

export function getTasksFromStorage() {
  return getFromStorage('tasks') || TaskData
}

export function saveTasksToStorage(tasks) {
  saveToStorage('tasks', tasks)
}

export function getCardsFromStorage() {
  return getFromStorage('cards') || CardData
}

export function saveCardsToStorage(cards) {
  saveToStorage('cards', cards)
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  return JSON.parse(dataString)
}
