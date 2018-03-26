const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const Endorsements = FAAEndorsements.Endorsements

// this example title is expected to be correct
const example_title = 'Pre-solo aeronautical knowledge'

describe('Endorsements',() => {
  it('is an array',() => {
    expect(Endorsements).to.be.a('array')
  })

  it('is a list of Endorsement titles',() => {
    Endorsements.forEach(en => expect(en).to.be.a('string'))
  })

  it('loads the titles into the endorsements',() => {
    expect(Endorsements).to.include(example_title)
  })
})
