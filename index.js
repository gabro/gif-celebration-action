const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("node-fetch");

try {
  const token = core.getInput("github-token");
  const octokit = new github.GitHub(myToken);
  const context = github.context;
  github.context.eventName === "PullRequestEvent";
  const giphyApiKey = core.getInput("giphy-api-key");
  const gifTags = ["happy", "excited", "win", "yes", "cheering", "thumbs-up"];
  const gifTag = gifTags[Math.floor(Math.random() * gifTags.length)];

  const gifUrl = (await (await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=${gifTag}`
  )).json()).data.image_url;

  if (
    github.context.payload.pull_request &&
    github.context.payload.pull_request.merged
  ) {
    octokit.issues.createComment({
      repo: github.context.repo,
      issue_number: github.context.issue.number,
      body: `![](${gifUrl})`
    });
  }
} catch (error) {
  core.setFailed(error.message);
}
