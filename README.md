aoc24
=================

My Advent of Code solutions for 2024. Developed with oclif/Typescript/Node.

Displayed for research purposes only. **If you use these solutions, you are cheating!**


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aoc24
$ aoc24 COMMAND
running command...
$ aoc24 (--version)
aoc24/0.0.0 darwin-arm64 node-v20.15.0
$ aoc24 --help [COMMAND]
USAGE
  $ aoc24 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aoc24 day 1 [FILE]`](#aoc24-day-1-file)
* [`aoc24 day 2 [FILE]`](#aoc24-day-2-file)
* [`aoc24 day 3 [FILE]`](#aoc24-day-3-file)
* [`aoc24 day 4 [FILE]`](#aoc24-day-4-file)
* [`aoc24 day 5 [FILE]`](#aoc24-day-5-file)
* [`aoc24 help [COMMAND]`](#aoc24-help-command)
* [`aoc24 plugins`](#aoc24-plugins)
* [`aoc24 plugins add PLUGIN`](#aoc24-plugins-add-plugin)
* [`aoc24 plugins:inspect PLUGIN...`](#aoc24-pluginsinspect-plugin)
* [`aoc24 plugins install PLUGIN`](#aoc24-plugins-install-plugin)
* [`aoc24 plugins link PATH`](#aoc24-plugins-link-path)
* [`aoc24 plugins remove [PLUGIN]`](#aoc24-plugins-remove-plugin)
* [`aoc24 plugins reset`](#aoc24-plugins-reset)
* [`aoc24 plugins uninstall [PLUGIN]`](#aoc24-plugins-uninstall-plugin)
* [`aoc24 plugins unlink [PLUGIN]`](#aoc24-plugins-unlink-plugin)
* [`aoc24 plugins update`](#aoc24-plugins-update)

## `aoc24 day 1 [FILE]`

describe the command here

```
USAGE
  $ aoc24 day 1 [FILE] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force

DESCRIPTION
  describe the command here

EXAMPLES
  $ aoc24 day 1
```

_See code: [src/commands/day/1.ts](https://github.com/zenibako/aoc24/blob/v0.0.0/src/commands/day/1.ts)_

## `aoc24 day 2 [FILE]`

describe the command here

```
USAGE
  $ aoc24 day 2 [FILE] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force

DESCRIPTION
  describe the command here

EXAMPLES
  $ aoc24 day 2
```

_See code: [src/commands/day/2.ts](https://github.com/zenibako/aoc24/blob/v0.0.0/src/commands/day/2.ts)_

## `aoc24 day 3 [FILE]`

describe the command here

```
USAGE
  $ aoc24 day 3 [FILE] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force

DESCRIPTION
  describe the command here

EXAMPLES
  $ aoc24 day 3
```

_See code: [src/commands/day/3.ts](https://github.com/zenibako/aoc24/blob/v0.0.0/src/commands/day/3.ts)_

## `aoc24 day 4 [FILE]`

describe the command here

```
USAGE
  $ aoc24 day 4 [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ aoc24 day 4
```

_See code: [src/commands/day/4.ts](https://github.com/zenibako/aoc24/blob/v0.0.0/src/commands/day/4.ts)_

## `aoc24 day 5 [FILE]`

describe the command here

```
USAGE
  $ aoc24 day 5 [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ aoc24 day 5
```

_See code: [src/commands/day/5.ts](https://github.com/zenibako/aoc24/blob/v0.0.0/src/commands/day/5.ts)_

## `aoc24 help [COMMAND]`

Display help for aoc24.

```
USAGE
  $ aoc24 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aoc24.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.19/src/commands/help.ts)_

## `aoc24 plugins`

List installed plugins.

```
USAGE
  $ aoc24 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aoc24 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/index.ts)_

## `aoc24 plugins add PLUGIN`

Installs a plugin into aoc24.

```
USAGE
  $ aoc24 plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aoc24.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AOC24_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AOC24_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aoc24 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aoc24 plugins add myplugin

  Install a plugin from a github url.

    $ aoc24 plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aoc24 plugins add someuser/someplugin
```

## `aoc24 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aoc24 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aoc24 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/inspect.ts)_

## `aoc24 plugins install PLUGIN`

Installs a plugin into aoc24.

```
USAGE
  $ aoc24 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aoc24.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AOC24_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AOC24_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aoc24 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aoc24 plugins install myplugin

  Install a plugin from a github url.

    $ aoc24 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aoc24 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/install.ts)_

## `aoc24 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ aoc24 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aoc24 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/link.ts)_

## `aoc24 plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aoc24 plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc24 plugins unlink
  $ aoc24 plugins remove

EXAMPLES
  $ aoc24 plugins remove myplugin
```

## `aoc24 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ aoc24 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/reset.ts)_

## `aoc24 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aoc24 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc24 plugins unlink
  $ aoc24 plugins remove

EXAMPLES
  $ aoc24 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/uninstall.ts)_

## `aoc24 plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aoc24 plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc24 plugins unlink
  $ aoc24 plugins remove

EXAMPLES
  $ aoc24 plugins unlink myplugin
```

## `aoc24 plugins update`

Update installed plugins.

```
USAGE
  $ aoc24 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/update.ts)_
<!-- commandsstop -->
