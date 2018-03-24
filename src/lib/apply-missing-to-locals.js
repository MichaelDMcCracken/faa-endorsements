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

export default function applyMissingToLocals(_this) {
  _this.locals = _applyMissingToLocals(_this,_this.locals)
}
