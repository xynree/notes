# 3 - Terminology

## Why this terminology is important

- Used to express and define concepts
- Used to define process
- Used anywhere a RDBM is discussed

## Value-Related Terms

### Data

- Values stored in database. Static until modified

### Information

- Data that is processed which makes it meaningful once worked with or viewed.
- Dynamically changing relative to data.
- Data is processed -> Information.
- Databased are designed to provide meaningful information. Infomraiton only available if appropriate data exists in the db.
- Data is what you store, information is what you retrieve

### Null

- Condiiton that represents a missing or null value.
- Does not represent zero or blank text string
- The value of null:
  - Missing values = human error
  - Unknown values = missing information = null
  - None of values applies to particular record = could be NULL
- The problem with null
  - Bad with math operations

## Structure-Related Terms

### Table

- Relations are perceived by users as tables
- Relations = tuples (records) and attributes (fields)
- Each table is a single specific subject
- Each table has a primary key that uniquely identifies each record
- Subject that the table represents could be an object (users, products, students) or event (surveys, clicks, elections)
- Table that stores data used to supply info: data table
  ![alt text](<CleanShot 2026-03-11 at 14.34.05@2x.jpg>)

- Table that stores data to implement data integrity: Validation table/Lookup Table
  ![alt text](<CleanShot 2026-03-11 at 14.33.04@2x.jpg>)

### Field

- Smallest structure in database / characteristic of subject of table
- Structures which actually store database
- Every field contains one and only one value, with name ID'ing the value it holds
- Poorly designed fields: - Multipart field (2+ distinct items in value) - Multivalued vield (multiple instances of same type of value) - Calculated field (concatenated value or result)
  ![alt text](<CleanShot 2026-03-11 at 14.35.50@2x.jpg>)

### Record

- Unique instance of the subject of the table
- Set of all fields in a table
- For a table of clients, a record is a unique client and all its fields in the table

### View

- Virtual table made of fields from 1+ base tables
- Does not store its own data
- Sometimes referred to as saved queries
- Why are views important?
  - Able to work with data from multiple tables at once
  - Prevent certain users from viewing/manipulating fields within a table
  - Can use them to implement data integrity (validation view)

### Keys

- Primary Key: Field or gorup of fields that uniquely identifies each record in a table
  - If made of 2+ fields: Composite primary key
  - PK Value Identifies a record throughout entire db
  - PK field identifies a given table throughout entire db
  - All tables should have a primary key
- Foreign Key
  - When 2 tables have a relationship, take copy of PK from 1st table and incorporate into the structure of the 2nd table
  - The second table already has a PK of its own
  - Ensures relationship integrity
  - Prevents orphan records

### Index

- Structure RDBMS provides to improve data processing

## Relationship-Related Terms

### Relationships

- Relationships exist between 2 tables when we can associate records of one with the other
- We can also make a relationship through a third table (linking table or associative table)
- The manner of establishing relationship depends on type of relationship
- Relationships allow you to create multitable views, reducing duplicate/redundant data

### Types of Relationships

#### 1:1 Relationships

- Single record in the first table is related to zero or 1 record in the second table and same vice versa
- Relationship established by taking a copy of first table's PK and incorporating it in the 2nd table where it becomes a FK.
  ![alt text](<CleanShot 2026-03-11 at 14.45.53@2x.jpg>)

#### 1:Many Relationships

- Single record in 1st table can be related to 0, 1 or many records in the second table
- Single record in second table can be related to only one record in the first table
- Ex: parent/child: Parent is "one" and children are "many"
  ![alt text](<CleanShot 2026-03-11 at 14.47.01@2x.jpg>)

#### Many:Many Relationships

- Single record on first table can be related to zero, one or many on 2nd table and vice versa
- Establish this relationship with a linking table
- Associative table: Take copies of PK or each table and use them to form structure of new table
  ![alt text](<CleanShot 2026-03-11 at 14.48.56@2x.jpg>)

### Types of Participation

- Mandatory or Optional
  - Table A is mandatory if you must enter at least 1 record into table A before entering records into table B
  - Table A is optional if you are not required to enter any records into Table A before entering into Talbe B
  - Example: Agents/Clients
    - Agents has mandatory participation if an agent must exist before entering new clients
    - Agent has optional participation if no requirement for an agent to exist before entering new client into Clients table

### Degree of Participation

- Min number of records that a table has associated with a single record in the related table

## Integrity-Related Terms

### Field Specification/ Domain

- All elements of a field
- Field specifications has 3 types of elements: General, physical, logical
- General: Fundamental info about field
  - Name
  - Description
  - Parent Table
- Physical: How field is built and represented to person using it
  - Data type
  - Length
- Logical: Values stored in field
  - Required
  - Range of Values
  - Null support

### Data Integrity

- The validitiy, consistency and accuracy of data in database
- 4 types of data integrity

1. Table level (Entity Integrity) Integrity: No duplicate records exist and field that identifies each record is unique and never null
2. Field-level integrity (Domain integrity): Strucutre of every field are sound and fields of same type are consistently defined
3. Relationship-Level Integrity (Referential Integrity): Relationships between a pair of tables is sound and records are synchronized on update
4. Business rules: Impose restrictions or limitations on ways oganiation can perceive and use data
