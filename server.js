'use strict';

const http = require('http');
const metroBundler = require('metro');
const TerminalReporter = require('metro/src/lib/TerminalReporter');
const Terminal = require('metro-core/src/Terminal');

const metroBundlerServer = metroBundler.createServer({
  assetRegistryPath: __dirname,
  projectRoots: [__dirname],
  reporter: new TerminalReporter(new Terminal(process.stdout)),
});

const httpServer = http.createServer(
  metroBundlerServer.processRequest.bind(metroBundlerServer),
);

httpServer.listen(8081);