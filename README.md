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
