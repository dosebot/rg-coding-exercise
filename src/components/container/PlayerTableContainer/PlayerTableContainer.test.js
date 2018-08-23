import {
  sortPlayersByDescHeight,
  sortPlayersByAscHeight,
  sortPlayersByAscWeight,
  sortPlayersByDescWeight,
} from './PlayerTableContainer'

it('sorts players by height by descending order', () => {
  const players = [
    { height: '65', id: 1 },
    { height: '75', id: 4 },
    { height: '55', id: 3 },
    { height: '60', id: 2 },
  ]
  const result = sortPlayersByDescHeight(players)
  const expectedFirst = 4
  const actualFirst = result[0].id
  const expectedLast = 3
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by height by ascending order', () => {
  const players = [
    { height: '65', id: 1 },
    { height: '75', id: 4 },
    { height: '55', id: 3 },
    { height: '60', id: 2 },
  ]
  const result = sortPlayersByAscHeight(players)
  const expectedFirst = 3
  const actualFirst = result[0].id
  const expectedLast = 4
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by weight by ascending order', () => {
  const players = [
    { weight: '65', id: 1 },
    { weight: '75', id: 4 },
    { weight: '55', id: 3 },
    { weight: '60', id: 2 },
  ]
  const result = sortPlayersByAscWeight(players)
  const expectedFirst = 3
  const actualFirst = result[0].id
  const expectedLast = 4
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})

it('sorts players by weight by descending order', () => {
  const players = [
    { weight: '65', id: 1 },
    { weight: '75', id: 4 },
    { weight: '55', id: 3 },
    { weight: '60', id: 2 },
  ]
  const result = sortPlayersByDescWeight(players)
  const expectedFirst = 4
  const actualFirst = result[0].id
  const expectedLast = 3
  const actualLast = result[result.length - 1].id

  expect(expectedFirst).toEqual(actualFirst)
  expect(expectedLast).toEqual(actualLast)
})
