const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const Endorsements = FAAEndorsements.Endorsements

describe('Endorsements',() => {
  it('has endorsements',() => {
    expect(Endorsements).to.be.a('array')
  })

  it('loads the titles into the endorsements',() => {
    expect(Endorsements).to.include('Pre-solo aeronautical knowledge')
  })
})
