function _applyMissingToLocals(self,obj) {
  let newObj = {}
  Object.keys(obj).forEach(k => {
    if ( !obj[k] ) {
      newObj[k] = self.options.missing
    }
    else {
      newObj[k] = _applyMissingToLocals(self,obj[k])
    }
  })
  return newObj
}

function applyMissingToLocals(self) {
  self._locals = _applyMissingToLocals(self,self._locals)
}

module.exports = applyMissingToLocals
