import filter from 'lodash/filter'
import merge from 'lodash/merge'
import each from 'lodash/each'
import Handlebars from 'handlebars'
import arrayToObjectTemplate from 'array-to-object-template'

import {Templates,Endorsements} from 'Templates'

export class FAAEndorsements {
  constructor (options={}) {
    this.options = options
    setDefaults(this)
    this._endorsements = []
    this.endorsementTemplates = []
    this.locals = {}

    if ( Array.isArray(options.endorsements) )  {
      each(options.endorsements,title => addEndorsement(title))
    }
  }

  addEndorsement(title) {
    let template = FAAEndorsements.getTemplate(title)
    if ( template ) {
      this.endorsementTemplates.push(template)
      this.endorsements.push(template.attributes.title)
      setLocals(this,template)
    }
    else {
      throw new Error(`template ${title} not be found`)
    }
  }

  set endorsements(es) {
    this._endorsements = es
  }

  get endorsements() {
    console.log('foo')
    return this._endorsements
  }

  static get Templates() {
    return Templates;
  }

  static getTemplate(title) {
    let found = filter(Templates,t => {
      return t.attributes.title === title
    })
    if ( found.length ) {
      return found[0]
    }
  }

  static get Endorsements() {
    return Endorsements;
  }
}

function setLocals(_this,template) {
  _this.locals = merge(arrayToObjectTemplate(template.attributes.locals),_this.locals)
  if ( _this.options.missing ) {
    applyMissingToLocals(_this)
  }
}

function _applyMissingToLocals(_this,obj) {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    if ( !obj[k] ) {
      newObj[k] = _this.options.missing
    }
    else {
      newObj[k] = _applyMissingToLocals(_this,obj[k])
    }
  })
  return newObj
}

function applyMissingToLocals(_this) {
  _this.locals = _applyMissingToLocals(_this,_this.locals)
}

function setDefaults(_this) {
  if ( !_this.options.missing ) {
    _this.options.missing = null
  }
}
