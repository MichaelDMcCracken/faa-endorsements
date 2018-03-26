import filter from 'lodash/filter'
import merge from 'lodash/merge'
import map from 'lodash/map'
import Handlebars from 'handlebars'
import applyMissingToLocals from './lib/apply-missing-to-locals'
import {_Templates,_Endorsements} from 'Templates'

export const Templates = _Templates

export const Endorsements = _Endorsements

export class FAAEndorsements {
  constructor (options={}) {
    initOptions(this,options)
    initEndorsements(this)
    initLocals(this)
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
    prepLocals(this)
  }

  set endorsements(es) {
    this._endorsements = es
    change(this)
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
    return _render(this,i)
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
}

function initOptions(self,options) {
  self.options = options
  if ( !self.options.missing ) {
    self.options.missing = null
  }
}

function initEndorsements(self) {
  if ( self.options.hasOwnProperty('endorsements') ) {
    if ( Array.isArray(self.options.endorsements) )  {
      self._endorsements = self.options.endorsements
    }
    else {
      throw new Error('endorsements option must be an array')
    }
  }
  prepEndorsements(self)
}

function prepEndorsements(self) {
  if ( !self.hasOwnProperty('_endorsements') ) {
    self._endorsements = []
  }
  let list = self._endorsements
  self._endorsements = []
  self._endorsementTemplates = []
  list.forEach(en => self.addEndorsement(en))
}

function initLocals(self) {
  prepLocals(self)
}

function prepLocals(self) {
  self._locals = {}

  self._endorsementTemplates.forEach(et => {
    self._locals = merge(et.attributes.locals,self._locals)
  })

  if ( self.options.missing ) {
    applyMissingToLocals(self)
  }
}

function change(self) {
  prepEndorsements(self)
  prepLocals(self)
}

function _render(self,i) {
  return self._endorsementTemplates[i]
}
