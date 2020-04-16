/**
 *
 * resourceRoutes factory
 *
 */

import React from 'react'
import { Resource } from 'react-admin'

export default function resourceRoutesFactory(resources) {
  console.log(resources)
  return Object.values(resources).map(item => (
    <Resource key={item.name} {...item} list={item.list || item.set} />
  ))
}
