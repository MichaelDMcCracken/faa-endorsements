const Handlebars = require('handlebars')
const Templates = require('./templates')
const Endorsements = require('./endorsements')
const parse = require('date-fns/parse')
const _isObject = require('lodash.isobject')
const format = require('date-fns/format')
const merge = require('lodash.merge')

function render(i) {
  let template = this._endorsementTemplates[i]

  let handlebars = Handlebars.compile(template.body)

  let str = handlebars(prepareLocals(this,template))

  return str.trim()
}
module.exports = render

function prepareLocals(self,template) {
  // let locals = clone(self._locals)
  let locals = self._locals
  locals = formatDates(locals)
  locals = applyMissingToLocals(locals,self.options.missing)
  locals = mergeInternalsIntoLocals(locals,template)

  return locals
}

function formatDate(str) {
  if ( !str ) {
    return str
  }

  let date
  try {
    date = parse(str)
  }
  catch (e) {
    throw new Error(e)
  }

  return format(date,'MMMM Do, YYYY')
}

function formatDates(obj) {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    if ( !_isObject(obj[k]) ) {
      if ( k.endsWith('date') ) {
        newObj[k] = formatDate(obj[k])
      }
      else {
        newObj[k] = obj[k]
      }
    }
    else {
      newObj[k] = formatDates(obj[k])
    }
  })
  return newObj
}

function applyMissingToLocals(obj,missing) {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    if ( !obj[k] ) {
      newObj[k] = missing
    }
    else {
      if ( _isObject(obj[k]) ) {
        newObj[k] = applyMissingToLocals(obj[k],missing)
      }
      else {
        newObj[k] = obj[k]
      }
    }
  })
  return newObj
}

function mergeInternalsIntoLocals(locals,template) {
  let internals = {}
  if ( template.attributes.hasOwnProperty('title') ) {
    internals.title = template.attributes.title
  }
  if ( template.attributes.hasOwnProperty('regulation') ) {
    internals.regulation = template.attributes.regulation
  }
  return merge(internals,locals)
}
