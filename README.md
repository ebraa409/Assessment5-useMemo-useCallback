# Assessment 4: useMemo & useCallback

## About The Assessment

**Objective:** To assess understanding and practical implementation of the `useMemo` and `useCallback` hooks.

**Tasks:**

1. Optimize a list rendering application to prevent unnecessary re-renders using `useMemo`.
2. Implement a search filter feature and optimize its performance using `useCallback`.

## How to run the application

- Open up the project in vsCode
- run npx react-native start to start the server
- Open Android Studio, open the applications directory
- Run the app

## Features

- utilizing useMemo to prevent rerenders
- search filter feature using useCallback

## Demo

[Demo]()

### Preview

#### useMemo list rendering (console log example)

Included a console log inside the useMemo function so that we can see in our terminal if useMemo is rerendering. In our case, it should display the console log only once and it wont be affected by a change in state.

Terminal Example below:

![listRender](https://i.imgur.com/6nNDCAi.gif)

#### search filter

![videoPlayerGif](https://i.imgur.com/VloFyBG.gif)
