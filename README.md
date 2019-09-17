# GIF Celebration

A GitHub action that celebrates your merges with a GIF.

## Inputs

### `github-token`

### `giphy-api-key`

Giphy API key. It defaults to the public beta one if not provided.

## Example usage

```yml
uses: gabro/gif-celebration-action
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
```
