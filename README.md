![alt tag](./assets/expo.png "Encryptor")

# Expo FrameWork

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

## Install

You can run By Excute `npx expo start -c `:
Scan QR Code On expo App on your Device
and wait bundle build

```
Ex: http://http://localhost:19002
[05:10:51]
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▄█▀  █ ▄█ ▄▄▄▄▄ █
█ █   █ █▄   ▄██  █ █   █ █
█ █▄▄▄█ █ ▀█▀█ ▀ ██ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ █ █▄█▄▄▄▄▄▄▄█
█  ▀ ██▄▄▀█ ▀█▄▀▄▄▀  ▄▀▄▄▀█
█▀▀▀ ▀█▄ ▀▄▄██ ▄▀▄▄▀ ▀▀█▄▄█
█▄▀▀█▀▀▄  ▀▀▀ ▄ █▀█ ▄█ ██▀█
█▄▀▀█▄▀▄▄▀▄██ ▀██ ▄▄ ▀▀██▄█
█▄▄█▄██▄▄▀ ▀▄█▀▄  ▄▄▄ █ ▄ █
█ ▄▄▄▄▄ █▄█▀▀██▄  █▄█  ▀▄ █
█ █   █ █▀ ▀   ▀▀▄ ▄▄ █▀█▄█
█ █▄▄▄█ █▀█▀    █  █▄  ▄█▄█
█▄▄▄▄▄▄▄█▄█▄▄▄█▄█▄███▄▄█▄▄█

[05:10:51] Your native app is running at exp://192.168.1.3:19000
Logs for your project will appear below. Press Ctrl+C to exit.

```

## Specs and Project roots

```
--Tree Folders
├───.expo-shared
├───.vscode
├───assets
│   ├───fonts
│   ├───images
│   │   └───icons
│   └───sounds
├───release
└───src
    ├───Components
    │   ├───DrawerContent
    │   ├───FloatingButton
    │   ├───MenuButton
    │   ├───ShoppingCart
    │   └───TabBar
    ├───Config
    ├───Containers
    │   ├───Contact
    │   ├───Home
    │   ├───Notifications
    │   └───Portfolio
    ├───i18n
    ├───lang
    ├───Navigation
    └───Reux
        ├───actions
        └───reducers
```

Installed Packages

```
-expo-notifications
-expo-permissions
-expo-status-bar
-i18next
-react-native-gesture-handler
-react-native-paper
-react-native-reanimated
-react-native-safe-area-context
-react-native-screens
-react-native-svg
-react-native-vector-icons
-reactotron-react-native
-reactotron-redux
-redux
-redux-logger
-redux-thunk
-react-navigation/native-stack
-react-navigation/stack
-react-navigation/drawer
-react-navigation/material-bottom-tabs
```

## Build Production Mode

you need to excute this command

```
npx expo export --public-url https://example.com/  must be real server with https

```

then after finsh bundle create you need to upload dist folder on th public url
finally excute this command

```
For All platform u assign in app.json

- npx expo build

For Options :
- npx expo build:android
- npx expo build:ios
- npx expo build:web

```

After That log at your expo account
Then download final release

## #License By:

####

$ Follow ME

> Developed by Dev Ahmed S. Ahmed [coder79](https://coder79.online/) ❤
