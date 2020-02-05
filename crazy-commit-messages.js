const exec = require('child_process').exec
module.exports = function getCommitMessage() {
    let keywords = ['shit', 'damn', 'wtf']
    let index = Math.round(Math.random() * 2)
    let command = ['curl -H "Accept: application/vnd.github.cloak-preview" https://api.github.com/search/commits?q=', keywords[index]].join(' ')
    return await exec(command, function(error, stderr, stdout) {
       return stdout
    })
}`
