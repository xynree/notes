# 2 - Design Objectives

## Why Should you be concerned with DB Design?

- Crucial to consistency, integrity, accuracy of data
- Good designs are accurate, store data efficiently, easy to manage and maintain

## The Importance of Theory

- Relational DB's based on 2 branches of math: Set Theory & First-Order Predicate Logic

## The Advantage of Learning a Good Design Methodology

- Best approach is to learn good methodology and try it out on a real database
- Advantages for sticking to good design methodology:
  - Gives skills to design a sound database, invalid, redundant, or duplicated data
  - Gives techniques to guide step by step through dsign process
  - Helps keeps mistakes to a minimum
  - Makes design process easier
  - Helps understand RDBMS programs better

## Objectives of Good Design

1. Database supports both required and ad hoc info retrieval
2. Tables are constructed properly and efficiently: Each table is a single subject with distinct fields. Redundant data is minimal. Data identifiable with unique values.
3. Data integrity is imposed at field, table, relationship levels
4. Database supports meaningful business rules
5. Structure is modifiable and extensible.

## Database-Design Methods

### Traditional Design Methods

- 3 phases:

1. Requirements Analysis: Examination of business being modeled, interviews with users and management
2. Data Modeling: Modeling in DB structure using ERD diagrams, UML, etc. to visually represent db. Fields are also defined and associated with pk's and fk's.
3. Normalization: Process of decomposing large tables into smaller ones to eliminate redundant and deuplicate data. Tables tested against normal forms and modified.

### Design Method Presented in this book

- Only requirements analysis + ERD diagramming
- Normalization: can be confusing for people who have not studied formal relationsl db theory

### Normalization

- Purpose of normalization: Take poorly designed table and transform it into a sound structure
- Instead of learning normalization theory we can follow guidelines closely through the design process to reach a fully normalized database structure by default.
