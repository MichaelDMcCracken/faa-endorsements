const mocha = require('mocha')
const chai = require('chai')
const path = require('path')
const describe = mocha.describe
const expect = chai.expect
const FAAEndorsements = require('../lib/faa-endorsements')
const _ = require('lodash')

describe('FAAEndorsements()',() => {
  it('is a function',() => {
    expect(FAAEndorsements).to.be.a('function')
  })

  it('is a constructor',() => {
    expect(new FAAEndorsements()).to.be.a('object')
  })

  context('endorsements',() => {
    context('#addEndorsement()',() => {
      it('adds endorsements',() => {
        let f = new FAAEndorsements()
        let es = FAAEndorsements.Endorsements
        f.addEndorsement(es[0])
        expect(f.endorsements[0]).to.eql(es[0])
      })
    })

    context('the endorsements setter',() => {
      it('adds an endorsement to the instance',() => {
        let f = new FAAEndorsements()
        let es = FAAEndorsements.Endorsements
        f.endorsements = es
        es.forEach((en,i) => {
          expect(f.endorsements[i]).to.eql(es[i])
        })
      })
    })

    context('upon instantiation via the options object',() => {
      it('adds endorsement',() => {
        let f = new FAAEndorsements()
        f.endorsements = [
          FAAEndorsements.Endorsements[0],
          FAAEndorsements.Endorsements[2],
          FAAEndorsements.Endorsements[3],
        ]
        let elist = f.endorsements
        let etlist = _.map(f._endorsementTemplates,en => en.attributes.title)
        expect(elist).to.eql(etlist)
      })
    })
  })

  context('locals',() => {
    it('merges locals from templates with differing requirements',() => {
      let f = new FAAEndorsements()
      let with_gender = templates_with_gender()
      let without_gender = templates_without_gender()
      f.addEndorsement(without_gender[0].attributes.title)
      expect(f.locals.student).to.not.include.keys('gender')
      f.addEndorsement(with_gender[0].attributes.title)
      expect(f.locals.student).to.include.keys('gender')
    })

    it('are removed when items that require them are removed from the endorsements list',() => {
      let f = new FAAEndorsements()
      let with_gender = templates_with_gender()
      let without_gender = templates_without_gender()
      f.endorsements = [with_gender[0].attributes.title]
      expect(f.locals.student).to.include.keys('gender')
      f.endorsements = [without_gender[0].attributes.title]
      expect(f.locals.student).to.not.include.keys('gender')
    })

    context('custom missing', () => {
      it('sets a custom missing string',() => {
        let f = new FAAEndorsements({ missing: 'foo' })
        f.addEndorsement(FAAEndorsements.Endorsements[0])
        expect(f.locals.date).to.eq('foo')
      })
    })
  })
})

function templates_with_gender() {
  return _.filter(FAAEndorsements.Templates,en => {
    if ( en.attributes.locals.student && en.attributes.locals.student.hasOwnProperty('gender') ) {
      return true
    }
    return false
  })
}

function templates_without_gender() {
  return _.filter(FAAEndorsements.Templates,en => {
    if ( en.attributes.locals.student && !en.attributes.locals.student.hasOwnProperty('gender') ) {
      return true
    }
    return false
  })
}
