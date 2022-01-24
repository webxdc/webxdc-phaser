# Chat Fairy

This is an example project to show how to develop webxdc apps with
[Phaser](https://phaser.io/).

## Testing

To test the app you need to run an HTTP in the root of this project, you
can easily do it with Python, go to the project root and execute:

```sh
python -m http.server
```

then open in your browser the URL that is displayed in the shell.

## Packaging

To use the app in Delta Chat, you need to package it in a `.xdc` archive,
the `create-xdc.sh` script helps you to do that:

```sh
./create-xdc.sh
```

## Creating Custom Builds of Phaser

This project uses a custom build of Phaser including only the features
needed, it helps to keep your app size small, for more details check the
[Phaser documentation](https://photonstorm.github.io/phaser3-docs/index.html#toc10__anchor).
