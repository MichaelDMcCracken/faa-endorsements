const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const _ = require('lodash')

describe('FAAEndorsements()',() => {
  context('looking up a template with .getTemplate()',() => {
    it('finds a template Endorsement title',() => {
      let en = FAAEndorsements.Endorsements[0]
      let t = FAAEndorsements.getTemplate(en)
      expect(t).to.be.an('object')
      expect(t).to.include.keys('attributes')
      expect(t.attributes.title).to.eq(en)
    })

    it('fails gracefully if it did not find a template',() => {
      expect(FAAEndorsements.getTemplate()).to.be.an('undefined')
    })
  })
})
