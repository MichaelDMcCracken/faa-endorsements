const filter = require('lodash/filter')
const merge = require('lodash/merge')
const map = require('lodash/map')
const _Templates = require('./templates')
const _Endorsements = require('./lib/endorsements')
const _render = require('./lib/render')

class FAAEndorsements {
  constructor (_options={}) {
    this._initOptions(_options)
    this._initEndorsements()
    this._initLocals()
  }

  addEndorsement(title) {
    let template = FAAEndorsements.getTemplate(title)
    if ( template ) {
      this._endorsements.push(template.attributes.title)
      this._endorsementTemplates.push(template)
      this._prepLocals()
    }
    else {
      throw new Error(`template ${title} not be found`)
    }
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
    return _render.bind(this)(i)
  }

  renderAll() {
    return map(this._endorsements,(en,i) => this.renderOne(i))
  }

  render() {
    return this.renderAll()
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

  _initOptions(_options) {
    this.options = merge({ missing: null },_options)
  }

  _initEndorsements() {
    if ( this.options.hasOwnProperty('endorsements') ) {
      if ( Array.isArray(this.options.endorsements) )  {
        this._endorsements = this.options.endorsements
        delete this.options.endorsements
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
      this._locals = merge(this._locals,et.attributes.locals)
    })
  }

  _change() {
    this._prepEndorsements()
    this._prepLocals()
  }
}

module.exports = FAAEndorsements
