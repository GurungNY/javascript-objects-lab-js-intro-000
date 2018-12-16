var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object, key) {
 // const new_obj = Object.asign({}, object)

 delete object[key]

 return object
}

function deleteFromObjectByKey(object, key) {

 return object
}

// function deleteFromObjectByKey(object, key) {
//   object.assign({}, object, key)
//
//   delete object.assign[key]
// }

function destructivelyDeleteFromObjectByKey(object, key) {
  obj = (object, key)
  newObj.assign({}, object, key)

  return newObj
}
