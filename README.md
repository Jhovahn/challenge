# SoFi Front-end Challenge

## Intro

Welcome! This challenge is designed to give us a better idea of how you
contribute to the front-end of a web product. We will be evaluating your work
based on attention to detail, craftsmanship of the UI, understanding of React,
and product mindset.

## The Challenge

At SoFi, we've decided to build some internal tools to empower our internal
operators. We've found that our operators work more effectively (close more
loans, handle more customer service requests, etc) when they share GIF
collections with each other.

Our task is to build an internal app for sharing GIF collections! It's kind of
like... Pinterest for GIFs!

Complete the [**Basic Requirements**](#basic-requirements), which make up the
MVP we will be showing operators to manage their GIF collections. This work will
allow for operators to search for GIFs and drag them into a collection.

A basic project setup is provided to get you started, and many things are
intentionally incomplete. When you're done, check out the
[submission guidelines](#submitting).

Best of luck!

# Basic Requirements

- Enable search against the [Giphy API](https://developers.giphy.com/docs/)
  - Use their public beta key
  - Efficiently make search requests as the user types in the search input
  - Populate an area on the page with results
  - Demonstrate ability to make full use of the API
- Enable dropping a search result onto the drop area to add it to a collection
  - Note: Basic drag'n'drop is already set up with
    [react-dnd](http://react-dnd.github.io/react-dnd/docs/overview)
- Implement styling and the search drag-and-drop layout
- Demonstrate product mindset
  - leave comments and/or add add a write-up to clarify why you did what you did

---

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the
console.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Check out the [React documentation](https://reactjs.org/).

## Submitting

When you are satisfied with your work, follow these instructions to submit:

1. `git format-patch master --stdout > your-name.patch`. Or, if you worked
   straight off of master, use the commit sha preceding your work in place of
   `master`.
2. Email the patch to your contact at SoFi.

## Feedback

We're always looking for ways to improve our processes at SoFi so let us know if
anything is especially frustrating (or fun)!
