import mocha from 'mocha'
import chai from 'chai'
import path from 'path'
const describe = mocha.describe
const expect = chai.expect
import FAAEndorsements from '../lib/faa-endorsements'

describe('Templates',() => {
  it('has templates',() => {
    let templates = FAAEndorsements.Templates
    expect(templates).to.be.a('array')
  })

  it('templates are objects',() => {
    let templates = FAAEndorsements.Templates
    expect(templates[0]).to.be.a('object')
  })

  it('is loading from the md source',() => {
    expect(FAAEndorsements.Templates[0].attributes.title).to.eq('Pre-solo aeronautical knowledge')
  })
})
