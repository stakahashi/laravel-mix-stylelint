# Laravel Mix Eslint

[![npm version](https://badge.fury.io/js/%40stakahashi%2Flaravel-mix-stylelint.svg)](https://badge.fury.io/js/%40stakahashi%2Flaravel-mix-stylelint)

## Install

```
npm i @stakahashi/laravel-mix-stylelint
```

## Usage

Create a stylelintrc.json.

```
$ touch stylelintrc.json
```

Import package into laravel webpack config file.

```
require('@stakahashi/laravel-mix-stylelint');
...
mix.stylelint();
```

### Default Configuration
```
configBasedir: path.join(__dirname, '../../../'),
configFile: '.stylelintrc.json',
context: './resources',
failOnError: false,
files: ['**/*.scss', '**/*.vue', '**/*.blade.php'],
quiet: false,
syntax: 'scss'
```

#### [License](LICENSE)

