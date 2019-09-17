const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("node-fetch");

try {
  const token = core.getInput("github-token");
  const octokit = new github.GitHub(token);
  const context = github.context;
  const giphyApiKey = core.getInput("giphy-api-key");
  const gifTags = ["happy", "excited", "win", "yes", "cheering", "thumbs-up"];
  const gifTag = gifTags[Math.floor(Math.random() * gifTags.length)];

  console.log(github

  fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=${gifTag}`
  )
    .then(res => res.json())
    .then(res => {
      const gifUrl = res.data.image_url;
      octokit.issues.createComment({
        ...github.context.repo,
        issue_number: github.context.issue.number,
        body: `![](${gifUrl})`
      });
    })
    .catch(e => core.setFailed(e.message));
} catch (error) {
  core.setFailed(error.message);
}
