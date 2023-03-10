# GraphQL express server example

[Apollo server](https://www.apollographql.com/docs/apollo-server/) can be used as add-on to an existing node.js server. It then provides a new end-point (/graphql) that accepts and processes graphql requests from the front-end.

Currently, the [fakebase](https://www.npmjs.com/package/fakebase) database contains simply two tables in the /data folder, a list of consultants and a list of projects, where each consultant is asigned to one or more projects.

The important logic is contained in the /schema folder. typeDefs describe how e.g. a "consultant" or "project" object looks like, which fields it contains etc. Resolvers access the server data, perform filtering etc, to create the data that is returned to a query.

## Usage

`npm install` to install dependencies.
`npm start` will launch a local graphql sandbox in the browser to try out queries.

example:
```
query AllConsultants {
  consultants {
    name
    age
    projects {
      company
      year
    }
  }
}
```
will show all consultants with name and age, as well as their projects.

### Notes to myself:

Most tutorials are outdated, not using apollo server 4. This repo here is according to the official docs (Dec 2022), which also that contains some deprecated functions that are fixed hrere (e.g. body-parser.json() is replaced by express.json())

typeDefs.graphql file needs to be read as file since its not a .js file.
