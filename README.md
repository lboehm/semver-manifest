# Semantic versioning for manifest.json

Semantic versioning? Never heard of it? Here you go: [https://semver.org/](https://semver.org/)

Semantic versioning is widely known and used in NPM, but for updating version information in `manifest.json` of a web application I couldn't find a npm package. So I wrote one myself.

# CLI Usage

To update the manifest, use `semver-manifest` on command line.

```
Usage: semver-manifest <version>

Versions:
    major               Updating first digit of version [X.0.0] 
    minor               Updating second digit of version [0.X.0]
    patch               Updating third digit of version [0.0.X]

```

# Contribute

Would be great if you contribute. There's lots of room for improvement. See [CONTRIBUTING.md](CONTRIBUTING.md).

# License

MIT © [Lukas Böhm](https://github.com/lboehm)