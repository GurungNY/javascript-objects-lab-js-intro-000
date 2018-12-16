var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

function undateObjectWithKeyAndValue(object, key, value ) {
  object[key] = value

  return
}
