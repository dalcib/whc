import wc from 'which-country'
import fs from 'fs'
import tokml from 'tokml'
import whc from './whc.json'
import { FeatureCollection, Point } from 'geojson'

type Props = {
  name: string
  styleUrl: string
  styleHash: string
  description: string
  visibility: string
  country?: string
}

type Geo = FeatureCollection<Point, Props>

const whcg: Geo = <Geo>whc

const whcINFeautures = whcg.features.map(location => {
  const country = wc(location.geometry.coordinates)
  location.properties.country = country
  return location
})

//console.log(whc.features[0].geometry.coordinates)
console.log(whcINFeautures.filter(loc => loc.properties.country === 'IND').length)

const whcIN = {
  type: 'FeatureCollection',
  features: whcINFeautures.filter(loc => loc.properties.country === 'IND'),
}

var whcInKml = tokml(whcIN, {
  name: 'name',
  description: 'description',
})

fs.writeFileSync('whc-in.kml', whcInKml) //JSON.stringify(whcIN))

console.log('Done')
