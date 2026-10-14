import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mediana } from '../src/estatistica.js'

test('mediana de uma lista ímpar', () => {
  assert.equal(mediana([3, 1, 2]), 2)
})
