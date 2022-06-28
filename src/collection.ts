import { cloneDeep } from './lang'

/**
 *
 * @param items 用于遍历的数组
 * @param key 用于排序的关键字
 * @param childKey 子节点关键字
 * @returns
 */
export function recursiveSort<T>(
  items: T[],
  key: keyof T,
  childKey: keyof T,
): T[] {
  const _items = cloneDeep(items)

  function _recursive(children: T[]) {
    if (!children.length)
      return

    children.forEach((item) => {
      const itemChildren = (item?.[childKey] as unknown) as T[]
      if (Array.isArray(itemChildren) && itemChildren.length)
        _recursive(itemChildren)
    })
    children.sort(
      (a, b) =>
        ((a[key] as unknown) as number) - ((b[key] as unknown) as number),
    )
  }
  try {
    _recursive(_items)
  }
  catch (error) {
    console.error(error)
    return items
  }
  return _items
}

/**
 *
 * @param items 用于遍历的数组
 * @param search 查询内容
 * @param key 查询字段
 * @param childKey 子节点关键字
 * @returns
 */
export function recursiveFind<T>(
  items: T[],
  search: string | number,
  key: keyof T,
  childKey: keyof T,
): T | null {
  function _recursive(children: T[]): T | null {
    for (const item of children) {
      if (((item[key] as unknown) as string | number) === search)
        return item

      if (Array.isArray(item?.[childKey])) {
        const ret = _recursive((item[childKey] as unknown) as T[])
        if (ret)
          return ret
      }
    }
    return null
  }
  return _recursive(items)
}
