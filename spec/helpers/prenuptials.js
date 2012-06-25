var util = require('util')

exports.one = function(fn){
  return function(err, result) { fn(err) }
}

exports.failWithDump = function(){
  util.puts(util.inspect(arguments))
}
