var private = function(){
  return "Private output"
}
module.exports = {
  export: function(){
   return private()
  }
}