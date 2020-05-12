#!/usr/bin/env node
//const colors = require('colors')
const program = require("commander");
const pkg = require("../package.json")

program.version(pkg.version)
  .command("key", 'Manage API Key -- https://nomics.com')
  .parseAsync(process.argv);


//console.log("Hello from coindex 2");
