import filter from 'lodash/filter'
import merge from 'lodash/merge'
import each from 'lodash/each'
import Handlebars from 'handlebars'
import arrayToObjectTemplate from 'array-to-object-template'
import applyMissingToLocals from './lib/apply-missing-to-locals'

import {Templates,Endorsements} from 'Templates'

export class FAAEndorsements {
  constructor (options={}) {
    this.options = options
    setDefaults(this)
    this._endorsements = []
    this._endorsementTemplates = []
    this.locals = {}
    addEndorsementsFromOptions(this)
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
    rebuildEndorsementsFromEndorsementsList(this)
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

function setLocals(self,template) {
  self.locals = merge(arrayToObjectTemplate(template.attributes.locals),self.locals)
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
  self._endorsementTemplates = []
  self._endorsements.forEach(en => {
    let t = FAAEndorsements.getTemplate(en)
    self._endorsementTemplates.push(t)
  })
}
