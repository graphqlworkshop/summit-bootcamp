<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png" width="100" alt="graphql logo"/>
</p>

# GraphQL Summit Bootcamp

Welcome to the GraphQL Summit Bootcamp! We're really glad that you're here. Below you'll find all of the resources that we'll use throughout this course. If you're looking for slides, samples, links, etc., this is the place to look.

## Topics

- [GraphQL Subscriptions](https://github.com/graphqlworkshop/summit-bootcamp#graphql-subscriptions-)
- [Apollo Tooling](https://github.com/graphqlworkshop/summit-bootcamp#apollo-tooling-)
- [Apollo Federation](https://github.com/graphqlworkshop/summit-bootcamp#apollo-federation-)
- [Apollo Federation Lab](https://github.com/graphqlworkshop/summit-bootcamp#apollo-federation-lab-)

## Instructor Info

- **Alex Banks**: [Twitter](https://twitter.com/moontahoe) | [Email](mailto:alex@moonhighway.com)
- **Eve Porcello**: [Twitter](https://twitter.com/eveporcello) | [Email](mailto:eve@moonhighway.com)
- **Moon Highway Training**: [Moon Highway Website](https://www.moonhighway.com) | [Mailing List](http://bit.ly/moonhighway) | [Articles](https://www.moonhighway.com/articles)

## GraphQL Subscriptions 🎧

_In this section, we'll demonstrate some best practices for working with GraphQL Subscriptions and how to use them at scale._

**Slides**

- [Intro Slides](https://slides.com/moonhighway/summit-bootcamp)

**Samples**

- [Intro Slides](https://slides.com/moonhighway/summit-bootcamp)

**Resources**

- [TypeScript & Apollo - Apollo Docs](https://www.apollographql.com/docs/react/development-testing/static-typing/)
- [React TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

## Apollo Tooling 🛠

_In this section, we'll discuss tips and tricks for powering up your workflow with Apollo Tooling._

**Slides**

- [TypeScript & GraphQL](https://slides.com/moonhighway/typescript-graphql)

**Samples**

- [Intro Slides](https://slides.com/moonhighway/summit-bootcamp)

**Commands to Copy/Paste**

_Sample Engine API Key_

`ENGINE_API_KEY=`

_Download the Schema_

`npx apollo schema:download --endpoint=https://snowtooth.moonhighway.com graphql-schema.json`

_Generate Types_

`npx apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types`

**Resources**

- [Graph Manager - Docs](https://www.apollographql.com/docs/graph-manager/)
- [Graph Manager Website](https://engine.apollographql.com)
- [TypeScript & Apollo - Apollo Docs](https://www.apollographql.com/docs/react/development-testing/static-typing/)
- [React TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

## Apollo Federation 🚀

_In this section, we'll talk about Apollo Federation and how you can use this architecture to scale GraphQL projects and work more productively as a team._

**Slides**

- [GraphQL at Scale](https://slides.com/moonhighway/scale-cube/)

**Samples**

- [Intro Slides](https://slides.com/moonhighway/summit-bootcamp)

**Resources**

- [Apollo Federation - Apollo Docs](https://www.apollographql.com/docs/apollo-server/federation/introduction/)
- [egghead Playlist - Apollo Federation by Alex Banks](https://egghead.io/playlists/getting-started-with-apollo-federation-60ad0165)
- [Apollo Federation Blog](https://blog.apollographql.com/apollo-federation-f260cf525d21)
- [Managed Federation Blog](https://blog.apollographql.com/announcing-managed-federation-265c9f0bc88e)

## Apollo Federation Lab 👩🏻‍🔬

_In this section, we'll put our skills to work with a lab on Apollo Federation._

## Survey

Please take a moment to complete this survey to share your experience in the course: [Survey](https://docs.google.com/forms/d/e/1FAIpQLSexotaIbdUJv_8UIuS2qOlUNU8k8QkWGH6owoX0PcQBhp9Duw/viewform?usp=sf_link)
