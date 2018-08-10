let mix = require('laravel-mix')
const path = require('path')

class Stylelint {
  dependencies () {
    this.requiresReload = `
            Dependencies have been installed. Please run "npm run dev" again.
        `

    return ['stylelint']
  }

  register (options = {}) {
    let defaults = {
      configBasedir: path.join(__dirname, '../../../'),
      configFile: '.stylelintrc.json',
      context: './resources',
      failOnError: false,
      files: ['**/*.scss', '**/*.vue', '**/*.blade.php'],
      quiet: false,
      syntax: 'scss'
    }

    this.config = Object.assign(defaults, options)
  }

  webpackPlugins () {
    let StyleLintPlugin = require('stylelint-webpack-plugin')

    return new StyleLintPlugin(this.config)
  }
}

mix.extend('stylelint', new Stylelint())
