# graphql-production-tutorial

- [graphql-production-tutorial](#graphql-production-tutorial)
  - [Description](#description)
  - [Running](#running)
  - [Notes](#notes)

## Description

This project shows how to setup a production ready GraphQL server using Apollo Server and GraphQL Code Generator.

There goals of this tutorial are:

1. Learn how to build a strongly typed GraphQL server with custom models and a real service layer.
2. Learn how to keep your GraphQL API performant with DataLoader.
3. Learn how to deploy your GraphQL server to AWS as either an internal microservice or a public facing API.
4. Lock down and secure your server.
5. See how to keep the local development workflow fast and convenient, with modern tools like Docker, SWC, yarn plug'n'play, concurrently, nodemon, constant typechecking, autoformatting with prettier, eslint, and the AWS CDK for deploys.

## Running

Ensure you have yarn setup with:

```sh
corepack enable
corepack prepare yarn@stable --activate
yarn install
```

Then run `yarn start`.

View the Apollo Server editor at http://localhost:8000

## Notes

TODO:

1. Setup tsc and Node.
2. Setup env.
3. Setup absolute paths.
4. Setup prettier on save
5. Setup SWC
