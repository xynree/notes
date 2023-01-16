# 14 - Rethinking Data Entry, Storage, Retrieval

## Rethinking Data Entry

- Interactive products often fail at being considerate/intelligent when user is required to enter data

### Data integrity versus data immunity

- Don't allow tained data to touch an application
- Software maintains vigilant watch for bad data
  - This approach places needs of db before needs of users
- Developers can work to make system immune to inconsistencies and gaps in information - creating `data immunity`
- Apps have to be built to look before leaping

### Handling Missing Data

- Applications should provide flexibility
- Make sure users are aware of required fields that are missing information
  - Rich modeless feedback
- Data items that must be valid shouldn't use free input fields
  - Autocomplete
  - Bounded controls
  - Smart fields that can parse data formats

### Data entry and fudgeability

- Let users do what they want
- Keep detailed records of actions so that accountability and recovery is possible

### Auditing versus editing

- Warnings should modelessly tell users what they have done, but not stop proceedings
- In order to protect user, make it clear that there is a problem
  - Unobtrusively!
  - Let users figure out how to solve situation
  - Application should remember actions and ensure action can be reversed.
- Audit, don't edit.
- Maintain clear trail of actions

## Rethinking Data Storage

### The Problem of Data Storage

- Problem lies with implementation model != mental model
  - Most mental models are of a single document that is directly being altered, not multiple sources of memory

#### Saving changes

- Save dialogs - dialogs that are always answered the same way are redundant and should be eliminated
- In most cases, querying user is unnecessary - yes can be assumed
- Many applications do not need to be concerned with doc or file management

#### Closing documents without saving

- Proper time to reject changes are when changes are made: Undo function
- What is missing: Session Level Undo
- There's more discoverable ways to address problems of making big unwanted changes

#### Save As

- Save As does two jobs at once badly, and can introduce more problems

#### Archiving

- No explicit archive - users accomplish with Save As dialog but this leads to more problems
- Save as Dialog is wrong tool for making and manageing copies

### Fixing Data Storage: A Unified File Model

- Software should treat a document as a single thing, not as a copy on disk and a copy in memory

#### Automatic Save

- Apps should automatically save documents at intervals during the user's session
- Ideally app will save every change -- or keep track of small changes in memory and write them to disk at reasonable intervals
- Saving should be background or performed when user has stoped interacting with application

#### Creating a Copy

- Should have explicit `Create a Copy` function
- Should be identical to original but not tied to original in any way

#### Naming and Renaming

- Name should be shown in title bar, and if user decides to rename a doc, he should be able to click to edit in place. (Like Figma!)

#### Placing and positioning

- Put files in a place where users can find them - don't hide inside file system
- Should allow users to move document to any location

#### Specifying File Type

- Shouldn't be associated with saving file to disk - belongs in document properties dialog

#### Reversing Changes

- Undo! File system should not be surrogate for Undo
- A version function can be implemented so it works well with unified file model

#### Disarding All Changes

- Discard Changes function in main menu or `Revert to Version`
- Use clear warning signs
- Making this undoable would be desirable as well

#### Creating a Version

- Similar to copy - managed by application and presented to users as the document instance after made
- Users should be able to see list of versions along with statistics about them

#### A New File Menu

- Closes closes document without any dialog
- Rename/Move allows user to rename file or move to different dir
- Create a copy - copies dociument
- Print: all printer related controls
- Create version
- Absandon Changes
- Properties
- Exit

#### A New Name for the File Menu

- We can label according to types of documents: Sheet, Invoice, Document

#### Communicating Status

- There should be indicators with tooltips to show that files cannot be changed because they are in use elsewhere

### Time For a change

- Remaking `represented model` according to users' mental models will help users become more effective
- We can structure commands in application according to users' goals

## Rethinking Data Retrieval

- How do we make it easy for people to find what they're looking for and what they need?
- Solution starts with good understading of users' mental models and usage contexts

### Storage versus retrieval

- Storage system = method of keeping things in a repository
- Retrieval system = method of finding things in a repository according to some associated value
- Traditionally based in "folders" or "directories" concept
- Metaphorical nature of this pattern is limiting: requires users know where an item has been stored in order to locate it

### Retrieval in the physical world

#### Retrieval by location

- Remembering address of where we put something is vital to finding it and putting it away again
- We don't find objects by referring to characteristics of the object or by association
- In this model = storage system is = retrieval system: based on remembering locations

#### Indexed Retrieval

- Limited in scale by human memory
- In real libraries, use classification systems
- How to discover # for a given book ? Use the `index`. Allows to find location by looking up an attribute of the item
- physically retrieve book but logically find the book by participating in system of retrieval
  
### Retrieval in the digital world

- We often ignore the abilitiy to add indices to files on disk
- Failure due to interdependence of files and organizational systems
- We've failed at designing good disk file retrieval systems for humans

#### Digital retrieval methods

- Three fundamental ways to find a document in a digital system:
  - Positional Retrieval: Remembering where you left it
  - Identity Retrieval: Remembering its identifying name
  - Associative/Attribute-Based Retrieval: Based on ability to search through some quality of the document itself
- Most systems do not provide an associative method for storage

#### Attribute-based retrieval systems

- Enable users to find docuements by contents and meaningful properties
- Provide a way for users to express what they're looking for according to how they think about it
- Enables users to find by synonyms or related topics
- System can remember certain things for the user:
  - User that created document
  - Device createed
  - Document's contents and type
  - Which application last opened
  - Doc size and whether it is large or small
  - Whether doc has been untouched for a long time
  - How long doc was last open
  - How much info added or deleted during last edit
  - Was doc created from scratch?
  - Is doc frequently edited? Frequently viewed but rarely edited?
  - Whether doc has been printed, how often, and where - same for fax and email
- Also value in allowing users to tag or manually specify attributes about documents

### Relational databases versus digital soup

- 2 facts about human users: can rarely express what they want, and more often than not they change their minds

#### Organizing the unorganizable

- We can't define info in advance or stick to any definition we might conjure up

#### Problems with Databases

- All records are of single type and all instances are grouped
- Must be able to add and change identity at will even after record is stored

#### The attribute-based alternative

- Separating storage and retrieval systems
- Storage facility - digital soup where we put records
- Attribute based retrieval: Create index that stores key values along with tokens
  - Can create infinite number of indices, each one with its own key and copy of token
- 2 components: System must be able to messages and automatically extract and index information, system must make it easy for user to add ad hoc pointers to messages

#### Constrained natural-language output

- Requires a fronte end that allows users to make sense of what could be complex and related sets of attributes
- Constrained natural-language output: app provides array of boudned controls for users to choose from

![picture 1](https://s2.loli.net/2022/12/18/8X1NsxnT9gIZFSD.png)  

- Hard to program but readable and intuitive for users
