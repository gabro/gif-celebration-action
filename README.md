# GIF Celebration Action

A GitHub action that celebrates your merges with a GIF.

## Inputs

### `github-token`

GitHub token to post the comment. It can be set to `${{ secrets.GITHUB_TOKEN }}`

### `giphy-api-key`

Giphy API key. It defaults to the public beta one if not provided.

## Example usage

```yml
on: [pull_request]

jobs:
  celebrate:
    runs-on: ubuntu-latest
    name: Celebrate merged PRs
    steps:
      - name: Celebrate
        id: celebrate
        uses: gabro/gif-celebration-action@master
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
