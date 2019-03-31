/* declare module '*.json' {
  const value: GeoJSON.FeatureCollection<GeoJSON.Point>
  export default value
} */

/* declare module './whc.json' {
  export const geojson: GeoJSON.GeoJSON
} */

/**
 * Groups the specified array of values into a Map from key to array of value.
 * @param a The array to group.
 * @param key The key function.
 */
//export function group<TObject, TKey>(a: ArrayLike<TObject>, key: (value: TObject) => TKey): Map<TKey, TObject[]>;

/**
 * Groups and reduces the specified array of values into a Map from key to value.
 *
 * @param a The array to group.
 * @param reduce The reduce function.
 * @param key The key function.
 */
//export function rollup<TObject, TKey, TReduce>(a: ArrayLike<TObject>, reduce: (value: TObject[]) => TReduce, key: (value: TObject) => TKey): Map<TKey, TReduce>;
