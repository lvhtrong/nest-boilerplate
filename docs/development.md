# Setup and development

## Migrations

This boilerplate use [migrate-mongo](https://github.com/seppevs/migrate-mongo) library for mongodb migration

### Prerequisites
- Make sure you have an mongodb running on your machine
- Update ```config.mongodb.url``` property value on ```migrate-mongo-config.js``` or ```migrate-mongo-config.dev.js``` for dev environment.

### Check migration status
Run command:

``` bash
npm run migrate:status
```

### Create an migration
Run command:

``` bash
npm run migrate:create -- ${migration-name}
```

### Up migrations
Run command:

``` bash
npm run migrate:up
```

For development environment:
``` bash
npm run migrate:up:dev
```

### Down migrations
Run command:

``` bash
npm run migrate:up
```

For development environment:
``` bash
npm run migrate:up:dev
```