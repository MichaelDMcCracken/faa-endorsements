const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')


describe('',() => {
  it('is a function',() => {
    expect(FAAEndorsements).to.be.a('function')
  })

  it('responds to .foo',() => {
    expect(new FAAEndorsements().foo).to.eql('foo')
  })

  it('loads A-3',() => {
    expect(new FAAEndorsements().bar).to.be.a('object')
    expect(new FAAEndorsements().bar.body).to.include('satisfactorily')

  })

})
