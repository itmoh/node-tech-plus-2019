var cluster = require('cluster')
var numCPUs = require('os').cpus().length
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
} else if (cluster.isWorker) {
  // your server code
}
