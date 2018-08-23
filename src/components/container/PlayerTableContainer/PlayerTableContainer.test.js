import { sortPlayers } from './PlayerTableContainer'

it('sorts players by weight in descending order', () => {
  const players = [
    { weight: '65', height: '5', id: 1 },
    { weight: '75', height: '3', id: 4 },
    { weight: '55', height: '8', id: 3 },
    { weight: '60', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'weight', 'desc')
  const expectedFirst = 4
  const actualFirst = result[0].id
  const expectedLast = 3
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by height in descending order', () => {
  const players = [
    { weight: '65', height: '5', id: 1 },
    { weight: '75', height: '3', id: 4 },
    { weight: '55', height: '8', id: 3 },
    { weight: '60', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'height', 'desc')
  const expectedFirst = 3
  const actualFirst = result[0].id
  const expectedLast = 2
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by height in ascending order', () => {
  const players = [
    { weight: '65', height: '5', id: 1 },
    { weight: '75', height: '3', id: 4 },
    { weight: '55', height: '8', id: 3 },
    { weight: '60', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'height', 'asc')
  const expectedFirst = 2
  const actualFirst = result[0].id
  const expectedLast = 3
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by weight in ascending order', () => {
  const players = [
    { weight: '65', height: '5', id: 1 },
    { weight: '75', height: '3', id: 4 },
    { weight: '55', height: '8', id: 3 },
    { weight: '60', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'weight', 'asc')
  const expectedFirst = 3
  const actualFirst = result[0].id
  const expectedLast = 4
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by name in ascending order', () => {
  const players = [
    { name: 'Dan', height: '5', id: 1 },
    { name: 'Bill', height: '3', id: 4 },
    { name: 'Mike', height: '8', id: 3 },
    { name: 'Bastos', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'name', 'asc')
  const expectedFirst = 2
  const actualFirst = result[0].id
  const expectedLast = 3
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by name in descending order', () => {
  const players = [
    { name: 'Dan', height: '5', id: 1 },
    { name: 'Bill', height: '3', id: 4 },
    { name: 'Mike', height: '8', id: 3 },
    { name: 'Bastos', height: '1', id: 2 },
  ]
  const result = sortPlayers(players, 'name', 'dsc')
  const expectedFirst = 3
  const actualFirst = result[0].id
  const expectedLast = 2
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('Players array does not get mutated', () => {
  const players = [
    { weight: '65', height: '5', id: 1 },
    { weight: '75', height: '3', id: 4 },
    { weight: '55', height: '8', id: 3 },
    { weight: '60', height: '1', id: 2 },
  ]
  const expectedFirst = 1
  sortPlayers(players)
  expect(expectedFirst).toEqual(players[0].id)
})
