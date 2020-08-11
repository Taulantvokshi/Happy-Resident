import React from 'react'

import {
  Dishwasher,
  AirConditioner,
  Bathtub,
  Fridge,
  Microwave,
  Oven,
  Shower,
  Stairs,
  Tap,
  Toilet,
  Ventilator,
  WashingMachine,
  LightBulb,
  Trash,
  Windows,
  Keys,
  Roach,
  Swipe,
  Mice
} from '../icons/maintenance_icons'

let NotHere = () => {
  return (
    <div>
      <h1>NOT</h1>
      <h1>HERE</h1>
    </div>
  )
}
const icons = [
  Dishwasher,
  AirConditioner,
  Bathtub,
  Fridge,
  Microwave,
  Oven,
  Shower,
  Stairs,
  Tap,
  Toilet,
  Ventilator,
  WashingMachine,
  LightBulb,
  Trash,
  Windows,
  Keys,
  Roach,
  Swipe,
  Mice
]

export const names = [
  'dishwasher',
  'air conditioner',
  'bathtub',
  'fridge',
  'microwave',
  'oven',
  'shower',
  'stairs',
  'water',
  'toilet',
  'ventilator',
  'washing machine',
  'lightbulb',
  'trash',
  'windows',
  'Keys',
  'roach',
  'swipe',
  'mice'
]

export const selectedIcon = name => {
  const obj = names.reduce((object, el, i) => {
    object[el] = icons[i]
    return object
  }, {})
  return obj[name]
}

export default () => {
  let results = icons.reduce((arr, el, i) => {
    arr.push({
      iconComponent: el,
      boxIcon: 'box-icons',
      iconText: 'icon-text',
      iconName: names[i].toLowerCase(),
      classNames: `maintenance_box-icons--${i}`
    })
    return arr
  }, [])
  results.push({
    iconComponent: NotHere,
    boxIcon: 'box-icons',
    iconText: 'icon-text'
  })
  return results
}
