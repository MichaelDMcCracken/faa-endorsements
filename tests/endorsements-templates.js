const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const Endorsements = FAAEndorsements.Endorsements
const Templates = FAAEndorsements.Templates

describe('Endorsements and Templates',() => {
  it('should match and be enumerable',() => {
    Endorsements.forEach((en,i) => {
      let endorsement_title = en
      let template_title = Templates[i].attributes.title
      expect(endorsement_title).to.eq(template_title)
    })
  })
})
