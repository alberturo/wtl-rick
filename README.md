# wtl-rick




:star: Test Task:
Create a react native project and use the following technologies to consume from an api and display the data as follows:
- [ ]  Tailwindcss for user interface design.
- [ ]  Redux-toolkit for state management.
- [ ]  RTK Query that already comes with Redux-Toolkit to consume the api and cache the requests
- [ ]  Api url -> https://rickandmortyapi.com/api
- [ ]  Add navigation where you can navigate to the detail of any character.

This is a sample application that demonstrates how to list data previusly loaded from an API (with RTK Query), manage the state (Redux toolkit), using of navigation, components and tailwingcss. The application loads characters of Rick and Morty from a API and displays them. The application uses hooks (useState, useNavigation) it is built in React Native.


## Import Data
I have import the data from [link](https://rickandmortyapi.com/api) as it was required.


## Demonstration


Here we can see the app running.


<p>
  <img alt="gif" src="https://user-images.githubusercontent.com/87784793/216501102-1cd58e9c-287f-47eb-84b1-a458e09fc79c.gif" width="330" height="650" />
</p>


## Getting Started
To get started  you can simply clone this `wtl-rick` repository and install the dependencies.

Clone the `wtl-rick` repository using git:

```bash
git clone git@github.com:alberturo/wtl-rick.git
cd wtl-rick
```

Installed dependencies Frontend with this command:
```bash
yarn install
yarn install @react-navigation/native
yarn install @react-navigation/stack
yarn install @reduxjs/toolkit
yarn install expo
yarn install expo-status-bar
yarn install nativewind
yarn install react-native-gesture-handler
yarn install react-native-safe-area-context
yarn install react-redux
yarn install tailwindcss

```


Run the application with this command:
```bash
yarn npx expo start

```

## Tech Stack
* React Native
* Expo

## Code Scalable
* Organization by components, Screens, Navigator, state manager
* Reusable component Card, functions
* Styles with Tailwindcss

## Extra (No required in the test)
* Dark mode 
