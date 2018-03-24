import filter from 'lodash/filter'
import merge from 'lodash/merge'
import each from 'lodash/each'
import Handlebars from 'handlebars'
import applyMissingToLocals from './lib/apply-missing-to-locals'

import {Templates,Endorsements} from 'Templates'

export class FAAEndorsements {
  constructor (options={}) {
    this.options = options
    setDefaults(this)
    this._endorsements = []
    this._endorsementTemplates = []
    this._locals = {}
    addEndorsementsFromOptions(this)
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
    setLocals(this)
  }

  set endorsements(es) {
    this._endorsements = es
    rebuildEndorsementsFromEndorsementsList(this)
    setLocals(this)
  }

  get endorsements() {
    return this._endorsements
  }

  set endorsementTemplates(ets) {
    this._endorsementTemplates = ets
  }

  get endorsementTemplates() {
    return this._endorsementTemplates
  }

  get locals() {
    return this._locals
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

function setLocals(self) {
  self._locals = {}

  self.endorsementTemplates.forEach(et => {
    self._locals = merge(et.attributes.locals,self._locals)
  })

  if ( self.options.missing ) {
    applyMissingToLocals(self)
  }
}

function setDefaults(self) {
  if ( !self.options.missing ) {
    self.options.missing = null
  }
}

function addEndorsementsFromOptions(self) {
  if ( Array.isArray(self.options.endorsements) )  {
    each(self.options.endorsements,title => self.addEndorsement(title))
  }
}

function rebuildEndorsementsFromEndorsementsList(self) {
  let list = self._endorsements
  self._endorsements = []
  self._endorsementTemplates = []
  list.forEach(en => {
    self.addEndorsement(en)
  })
}
