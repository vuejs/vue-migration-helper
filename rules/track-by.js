'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[^>]+\b(?:v-for=["']\(?(\w+)[^>]+?["'][^>]+?\b(track-by=["']([\w\.]+)["'])|(track-by=["']([\w\.]+)["'])[^>]+?v-for=["']\(?(\w+)[^>]+?["'])[^>]*?>/,
  warning: function (match, vForItemBefore, trackByAfter, trackByValueAfter, trackByBefore, trackByValueBefore, vForItemAfter) {
    const vForItem = vForItemBefore || vForItemAfter
    const trackBy = trackByBefore || trackByAfter
    const trackByValue = trackByValueBefore || trackByValueAfter
    return {
      reason: '',
      fix: (
        'Update ' + chalk.red(trackBy) + ' to ' +
        chalk.green(
          'v-bind:key="' +
            vForItem + '.' + trackByValue +
          '"'
        )
      ),
      docsHash: 'track-by'
    }
  }
}
