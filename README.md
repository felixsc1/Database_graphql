# GaphQL express server example

Using the Apollo server 4 code.
Most tutorials are outdated, this is according to the official docs (Dec 2022), which also that contains some deprecated functions that are fixed hrere (e.g. body-parser.json() is replaced by express.json())

typeDefs.graphql file needs to be read as file since its not a .js file.

## Usage

`npm start` will launch a local graphql sandbox to make queries.
Currently, the fakebase database contains simply two tables, a list of consultants and a list of projects, where each consultant is asigned to one or more projects.
