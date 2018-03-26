const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const Templates = FAAEndorsements.Templates
const map = require('lodash/map')

describe('Templates',() => {
  it('is an Array of Templates',() => {
    expect(Templates).to.be.a('array')
  })

  it('are objects',() => {
    Templates.forEach(t => expect(t).to.be.an('object'))
  })

  it('have titles',() => {
    Templates.forEach(t => expect(t.attributes).to.include.key('title'))
  })

  it('successfully renders all templates',function () {
    let f = new FAAEndorsements()
    f.endorsements = FAAEndorsements.Endorsements
    let output = f.render()
    expect(output).to.be.an('array')
  })
})
