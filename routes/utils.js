/**
 * Creates a resource from a given model, extending it with an id property
 * with the given value.
 * @param {*} id 
 * @param {*} model 
 */
module.exports = function createIdentifiableResource(id, model) {
  return Object.assign({id: id}, model);
}