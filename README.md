# fazt-code-prisma
Project made with [Prisma](https://www.prisma.io/docs/getting-started/quickstart) (5.7.1) and SQLite. In this project 
we understand how Prisma as [ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma) works, 
how [migrations](https://www.prisma.io/docs/orm/prisma-migrate/getting-started) are executed against the ddb (SQLite) 
and how to create a REST API using the [Prisma Client](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction).

_**Note:** this project is based on this [tutorial](https://www.youtube.com/watch?v=ESShhQmBjjY&t=699s) **"Nodejs y Prisma ORM REST API"** by Fazt._

_This project required Node 14+._

## Before to start
Create a file called `.env` with the environment variable `DATABASE_URL` for the database URL. 
If you want to use only SQLite, copy and paste this:

`DATABASE_URL="file:./dev.db"`

## Installation:
Install dependencies 
`npm install`

Migrate tables based on the Prisma's definition to the DDB and set a name for that migration.
`npx prisma migrate dev`

That will create a folder called `migrations` within the `./prisma` folder.

And, if you are using SQLite, that will create the SQLite DDB file in the path specified in the `DATABASE_URL`.

## Using the REST API
Execute:
`npm run dev`

## To test
There is a file called `testing_apis.http` with all the available endpoints.
