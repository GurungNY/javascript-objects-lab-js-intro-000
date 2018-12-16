var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  mew_object = Object.assign({}, key, value)
  

  return new_object
}