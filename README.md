# unin [![npm](https://img.shields.io/npm/v/unin.svg?maxAge=2592000)](https://www.npmjs.com/package/unin)

Uninstall your local bower components, wherever they are

## Installing

It's hosted on npm, so run `npm i -g unin`. You'll then have access to the `unin` command!

## Usage

`unin` takes no arguments.

It checks to see if a `.bowerrc` file exists. If it does, and has the `directory` option, it deletes that folder. Otherwise, it runs good old `rm -rf bower_components`. Regardless of your configuration, this'll clean you out.

Don't name something else `bower_components` and then run this command, because it'll erase your stuff.

## Contributing

I'm more than happy to entertain enhancements or suggestions on how to improve this tool. Open an issue or PR!
