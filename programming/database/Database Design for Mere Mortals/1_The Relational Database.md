# 1 - The Relational Database

## What is a database?

- Two types of databases:
  - Operational Database:
    - Need to collect, modify, maintain data
    - Data is dynamic and changes constantly, reflecting up to date information
  - Analytical Databases:
    - Need to store, track historical and time dependant ata
    - Stores mostly static data, data rarely modified

- This text focuses on Operational databases.

## The Relational Database

- 1969: Conceived by Dr. Edgar Codd (IBM Research scientist)
- Relational model published in June 1970, based on set theory and predicate logic
- "Relation" term comes from set theory.
- If a user understands relationships among db tables, can access data in an unlimited number of ways
- Data stored in relations (perceived as tables)
- Types of relationships:
  - 1:1
  - 1:Many
  - Many:Many

### Retrieving Data

- SQL is the standard langauge for querying relational db's
- 3 components of basic SQL Query:
  - SELECT....FROM
  - WHERE
  - ORDER BY

### Advantages of a Relational Database

- Built-in multilevel integrity
  - At the field level for accurate data
  - At table level (missing PK, ensures records are not duplicated)
  - Relationship level: Relationship between tables are valid
  - Business: Data accurate in terms of business itself
- Independence from database applications: Database structure does not depend on vendor software
- Guaranteed data consistency/accuracy
- Easy data retrieval

### Relational Database Management Systems (RDBMS)

- Application used to create, maintain, modify databases
- Examples: PostgreSQL, SAP, SQLite
