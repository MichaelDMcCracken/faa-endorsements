import filter from 'lodash/filter'
import merge from 'lodash/merge'
import each from 'lodash/each'
import Handlebars from 'handlebars'

import {Templates,Endorsements} from 'Templates'

export class FAAEndorsements {
  constructor (options={}) {
    this._endorsements = []
    this.endorsements = []
    this.locals = {}

    if ( typeof options.missing !== 'undefined' ) {
      this.missing = options.missing
    }
    else {
      this.missing = '<span class="missing"></span>'
    }

    if ( options.endorsements ) {
      each(options.endorsements,title => addEndorsement(title))
    }
  }

  addEndorsement(title) {
    let template = getTemplate(title)
    if ( template ) {

    }
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
