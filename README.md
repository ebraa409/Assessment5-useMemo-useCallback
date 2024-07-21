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

[Demo](https://codesandbox.io/p/github/ebraa409/Assessment5-useMemo-useCallback/main?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyveawtw0006356jcwjl6a6t%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyveawtv0002356j5zn9c54a%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyveawtv0004356j2ao2ll70%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyveawtw0005356jhxpjilj1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyveawtv0002356j5zn9c54a%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyveawtv0001356j1wmpt1kc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clyveawtv0002356j5zn9c54a%2522%252C%2522activeTabId%2522%253A%2522clyveawtv0001356j1wmpt1kc%2522%257D%252C%2522clyveawtw0005356jhxpjilj1%2522%253A%257B%2522id%2522%253A%2522clyveawtw0005356jhxpjilj1%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clyveaxjs000a356jh6x6ul1g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clyveaxjs000a356jh6x6ul1g%2522%257D%252C%2522clyveawtv0004356j2ao2ll70%2522%253A%257B%2522id%2522%253A%2522clyveawtv0004356j2ao2ll70%2522%252C%2522activeTabId%2522%253A%2522clyveazms003u356jjfu1laff%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyveawtv0003356j20sq8l3j%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clyveawql002sdkgr1fuy5dk6%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clyveazms003u356jjfu1laff%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

### Preview

#### useMemo list rendering (console log example)

Included a console log inside the useMemo function so that we can see in our terminal if useMemo is rerendering. In our case, it should display the console log only once and it wont be affected by a change in state.

Terminal Example below:

![listRender](https://i.imgur.com/6nNDCAi.gif)

#### search filter

![videoPlayerGif](https://i.imgur.com/VloFyBG.gif)
