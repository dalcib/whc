import * as wc from 'which-country'
import * as fs from 'fs'
import * as tokml from 'tokml'
const whc = require('./whc.json')

const whcINFeautures = whc.features.map(location => {
  const country = wc(location.geometry.coordinates)
  location.country = country
  return location
})

//console.log(whc.features[0].geometry.coordinates)
console.log(whcINFeautures.filter(loc => loc.country === 'IND').length)

const whcIN = {
  type: 'FeatureCollection',
  features: whcINFeautures.filter(loc => loc.country === 'IND'),
}

var whcInKml = tokml(whcIN, {
  name: 'name',
  description: 'description',
})

fs.writeFileSync('whc-in.kml', whcInKml) //JSON.stringify(whcIN))

console.log('Done')
