const pad = x => x.toString().padStart(2, '0')

export const formatCountDown = countDown =>
  `${pad(Math.floor(countDown / 60))}:${pad(countDown % 60)}`
