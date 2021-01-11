'use strict'

import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest.agent(process.env.BASE_URL)

export function getGroupId (groupId) {
  return request.get('/groups')
    .then(response => {
      const responseBody = response.body
      groupId = responseBody[0].id
      console.log('groupId123', groupId)
    })
}

export function getAssetId (groupId, assetId) {
  request.get('/groups')
    .then(response => {
      const responseBody = response.body
      groupId = responseBody[0].id
      if (groupId) {
        const path = `/groups/${groupId}/assets`
        return request.get(path)
          .then(response => {
            const responseBody = response.body
            console.log('responseBody', responseBody)
            assetId = responseBody[0].id
          })
      }
    })
}