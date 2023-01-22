# graphql-production-tutorial

- [graphql-production-tutorial](#graphql-production-tutorial)
  - [Step 1 - Initial Setup](#step-1---initial-setup)
  - [Getting Started](#getting-started)
  - [Running the server](#running-the-server)

## Step 1 - Initial Setup

This branch shows the very first steps to getting a production ready GraphQL server up and running, with full TypeScript support.

This server can function as a client-facing API or as an internal microservice, depending on how you ultimately deploy it.

## Getting Started

This repo was built against Node 18, you can install Node however you see fit but I recommend installing with NVM if on Mac or Linux:
https://github.com/nvm-sh/nvm

This repo uses Yarn 3, you can follow the Corepack setup here to install Yarn:
https://yarnpkg.com/getting-started/install

Or just run the following in your terminal:

```sh
corepack enable
corepack prepare yarn@stable --activate
yarn install
```

## Running the server

To run the server, just run the following in your terminal:

```sh
yarn start
```

You should see a message saying `Server ready at http://localhost:8000/`

Browse to http://localhost:8000 and you can see the built in Apollo Server editor.

Click the Query your Server button and try out the following query!

```graphql
query ExampleQuery {
  hello
}
```
