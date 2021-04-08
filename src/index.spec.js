import sum from 'index'

test('should 2 + 1 be 3', () => {
  expect(sum(2, 1)).toBe(3)
})

test('should 0.1 + 0.2 be 0.3', () => {
  expect(sum(0.1, 0.2)).toBe(0.3)
})
