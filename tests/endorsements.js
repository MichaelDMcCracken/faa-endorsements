import mocha from 'mocha'
import chai from 'chai'
import path from 'path'
const describe = mocha.describe
const expect = chai.expect
import FAAEndorsements from '../lib/faa-endorsements'

describe('Endorsements',() => {
  it('has endorsements',() => {
    let endorsements = FAAEndorsements.Endorsements
    expect(endorsements).to.be.a('array')
  })

  it('loads the titles into the endorsements',() => {
    let endorsements = FAAEndorsements.Endorsements
    expect(endorsements).to.include('Pre-solo aeronautical knowledge')
  })
})
