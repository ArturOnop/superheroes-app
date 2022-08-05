# Superheroes app

## Launching the app

The app is divided into client and server parts.

Install all dependencies.\
Run `npm i` in both terminals on server and client

Secondly, to launch server side run `npm start` in server terminal.\
It will launch server on port 7777.

Then, go to client side terminal and also run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing the app

Run `npm test` in client terminal.\
This launches the test runner in the interactive watch mode.

## App description

### Functionality

- Viewing list of superheroes (with pagination, 5 items at once).
- Viewing the details of superhero.
- Creating new superhero.
- Editing superhero.
- Deleting superhero.

### Extra info

- Responsive design for all types of screen.
- Jest tests for testing redux state.
- This app uses MongoDB Atlas which is configured on server side.

### Instructions

- Press on hero on *Super heroes list* page to view details of certain superhero.
- Press on delete / edit image on hero item on *Super heroes list* page to delete / edit certain superhero.
- You are able to assign / remove images from superhero by drag & drop and browsing files.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).