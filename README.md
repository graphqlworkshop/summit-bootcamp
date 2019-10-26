# summit-bootcamp



## Things You Probably Don't Want to Type

```
ENGINE_API_KEY=
```

### Downloading the Schema
```
npx apollo schema:download --endpoint=https://snowtooth.moonhighway.com graphql-schema.json
```

### Generating Types
```
npx apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types
```
