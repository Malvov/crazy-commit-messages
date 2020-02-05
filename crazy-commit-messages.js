var execSync = require('child_process').execSync
var getCommitMessage = function getCommitMessage() {
    let keywords = ['shit', 'damn', 'wtf']
    let index = Math.round(Math.random() * 2)
    let command = ['curl -H "Accept: application/vnd.github.cloak-preview" https://api.github.com/search/commits?q=', keywords[index]].join('')
    let response = execSync(command)
    let commitObject =  JSON.parse(response)
    return buildCommitObject(commitObject)
   
};

var buildCommitObject = function buildCommitObject(response) {
    let items = response.items;
    let index = Math.round(Math.random() * (items.length - 1));
    let commit = items[index]; 
    let commitObject = { author: { avatar_url: commit.author.avatar_url, name: commit.commit.author.name }, message: commit.commit.message, date: commit.commit.author.date, url: commit.html_url };
    return commitObject;
};

module.exports.getCommitMessage = getCommitMessage;
