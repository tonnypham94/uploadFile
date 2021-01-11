'use strict'

import supertest from 'supertest'
import dotenv from 'dotenv'
import { getGroupId, getAssetId } from './demo2.test'
dotenv.config()

const request = supertest.agent('http://derms-aggregator-api-groups-int-test.dev.gds.spdigital.sg/v1')

// describe('GET /assets/:id', () => {
//   var groupId = 38
//   var assetId = 0
//   before('get first group id', () => {
//     getAssetId(groupId, assetId)
//   })
//   it.only('should return 200 OK for valid group id request', () => {
//     const path = `/assets/${assetId}`
//     return request.get(path)
//       .expect(200)
//       .expect('Content-Type', /json/)
//       // .then(response => {
//       //   const responseBody = response.body
//       //   expect(responseBody).to.be.an('array')
//       //   if (responseBody.length === 0) {
//       //     return true
//       //   } else {
//       //     expect(responseBody[0].id).to.satisfy(Number.isInteger)
//       //     expect(responseBody[0].parent_id).to.satisfy(function (parentId) {
//       //       return parentId === null || Number.isInteger(parentId)
//       //     })
//       //     expect(responseBody[0].name).to.be.a('string')
//       //   }
//       // })
//   })
// })

describe('GET /assets/:id', () => {
  let groupId, assetId
  // before('get first group id', () => {
  //   getAssetId(groupId, assetId)
  // })
  it.only('should return 200 OK for valid group id request', () => {
    getAssetId(groupId, assetId).then()
    const path = `/assets/${assetId}`
    return request.get(path)
      .expect(200)
      .expect('Content-Type', /json/)
      // .then(response => {
      //   const responseBody = response.body
      //   expect(responseBody).to.be.an('array')
      //   if (responseBody.length === 0) {
      //     return true
      //   } else {
      //     expect(responseBody[0].id).to.satisfy(Number.isInteger)
      //     expect(responseBody[0].parent_id).to.satisfy(function (parentId) {
      //       return parentId === null || Number.isInteger(parentId)
      //     })
      //     expect(responseBody[0].name).to.be.a('string')
      //   }
      // })
  })
})