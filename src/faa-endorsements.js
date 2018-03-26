const filter = require('lodash/filter')
const merge = require('lodash/merge')
const map = require('lodash/map')
const Handlebars = require('handlebars')
const applyMissingToLocals = require('./lib/apply-missing-to-locals')
const _Templates = require('./templates')
const _Endorsements = require('./lib/endorsements')

class FAAEndorsements {
  constructor (options={}) {
    this._initOptions(options)
    this._initEndorsements()
    this._initLocals()
  }

  addEndorsement(title) {
    let template = FAAEndorsements.getTemplate(title)
    if ( template ) {
      this._endorsementTemplates.push(template)
      this._endorsements.push(template.attributes.title)
    }
    else {
      throw new Error(`template ${title} not be found`)
    }
    this._prepLocals()
  }

  set endorsements(es) {
    this._endorsements = es
    this._change()
    return this._endorsements
  }

  get endorsements() {
    return this._endorsements
  }

  get locals() {
    return this._locals
  }

  renderOne(x) {
    let i
    if ( typeof x === 'number' ) {
      i = x
    }
    if ( typeof x === 'string' ) {
      i = map(this._endorsementTemplates,es => es.attributes.title)
        .indexOf(x)
    }
    return _render(i)
  }

  renderAll() {
    return map(this._endorsements,(en,i) => renderOne(i))
  }

  static getTemplate(title) {
    let found = filter(_Templates,t => {
      return t.attributes.title === title
    })
    if ( found.length ) {
      return found[0]
    }
  }

  static get Templates() {
    return _Templates
  }

  static get Endorsements() {
    return _Endorsements
  }

  _initOptions(options) {
    this.options = options
    if ( !this.options.missing ) {
      this.options.missing = null
    }
  }

  _initEndorsements() {
    if ( this.options.hasOwnProperty('endorsements') ) {
      if ( Array.isArray(this.options.endorsements) )  {
        this._endorsements = this.options.endorsements
      }
      else {
        throw new Error('endorsements option must be an array')
      }
    }
    this._prepEndorsements()
  }

  _prepEndorsements() {
    if ( !this.hasOwnProperty('_endorsements') ) {
      this._endorsements = []
    }
    let list = this._endorsements
    this._endorsements = []
    this._endorsementTemplates = []
    list.forEach(en => this.addEndorsement(en))
  }

  _initLocals() {
    this._prepLocals()
  }

  _prepLocals() {
    this._locals = {}

    this._endorsementTemplates.forEach(et => {
      this._locals = merge(et.attributes.locals,this._locals)
    })

    if ( this.options.missing ) {
      applyMissingToLocals(this)
    }
  }

  _change() {
    this._prepEndorsements()
    this._prepLocals()
  }

  _render(i) {
    return this._endorsementTemplates[i]
  }
}

module.exports = FAAEndorsements
