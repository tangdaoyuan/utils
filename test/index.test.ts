import { describe, expect, it } from 'vitest'
import { recursiveFind, recursiveSort } from '@/collection'

describe('test', () => {
  it('sort collections recursively by KEY', () => {
    const collections = [
      { id: 5, children: [{ id: 2 }, { id: 1 }] },
      { id: 1, children: [{ id: 2 }] },
      { id: 3, children: [{ id: 4 }] },
    ]

    const ans = recursiveSort(collections, 'id', 'children')
    expect(ans).not.toBeNull()
    expect(ans).toMatchInlineSnapshot(`
      [
        {
          "children": [
            {
              "id": 2,
            },
          ],
          "id": 1,
        },
        {
          "children": [
            {
              "id": 4,
            },
          ],
          "id": 3,
        },
        {
          "children": [
            {
              "id": 1,
            },
            {
              "id": 2,
            },
          ],
          "id": 5,
        },
      ]
    `)
  })
  it('find target recursively from collections', () => {
    const collections = [
      { id: 5, children: [{ id: 2 }, { id: 1 }] },
      { id: 1, children: [{ id: 2 }] },
      { id: 3, children: [{ id: 4 }] },
    ]

    const ans = recursiveFind(collections, 5, 'id', 'children')
    expect(ans).not.toBeNull()
    expect(ans).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "id": 2,
          },
          {
            "id": 1,
          },
        ],
        "id": 5,
      }
    `)
  })
})
