# 4 - Setting the Vision: Scenarios and Design Requirements

- How do we use the understanding of people to create solutions that satisfy and insprie users while addressing business goals and restraints?

## Bridging the Research-Design Gap

- Team often realizes they are missing critical link between research and actual product design
- Process for bridging gap: 4 major activities
  - Developing scenarios
  - Using scenarios to extract design requirements
  - Using requirements to define product's fundamental interaction framework
  - Filling in framework with increasing design detail
- Glue that holds process together: narrative

## Scenarios: Narrative as a Design Tool

- Stories are an effective way to imagine a new and better future for users
- Experiences designed around narrative are more comprehensible and engaging for users
- Focus on designing the action
- Interaction Design: Designing behavior that occurs over time
  - Interaction Design Narratives are like storyboards: design solutions should be created and rendered to follow a plot
- In early stages, focus on "plot points" to arrive at high level design solutions

### Scenarios versus use cases and user stories

- Goal directed scenarios describe product behavior from standpoint of users
  - Includes priority of functions and how functions are expressed
- Uses cases: Based on descriptions of system's functional requirements
  - Often transactional, low level
  - Precise behavior is not part of a convential use case
  - Biggest shortcoming: tendency to treat all possible user interactions as equally likely and important
- Scenarios are akin to epics: Not task level interactions but rather broader clusters of interactions to meet user goals. Focus on function and presentation of user interfaces and interactions

### Scenario-based design

- Scenarios encourage "what-if" thinking
- Describes how users accomplish tasks
  - Environmental setting + agents or actors
- Is missing empathy with users or references to goals and motivations
- USe of personas (tangible representation of user) adds exploration of user motivations in order to model goals

### Persona-based scenarios

- Conscise narrative descriptions of one or more personas using a product or service to achieve specific goals
- Allow to start a deesign from a story desribing an ideal experience from the persona's perspective
- Designers walk through scenario content and context, role playing personas through their future interactions with produt/service
- Used to test validity of design ideas and assumptions throughout process

### Three types of scenarios

- Three types of persona-based scenarios at different points in design process
  - Context scenario: High level - how product can serve needs of personas. Designer has most leverage here to imagine an ideal user experience
  - Key Path Scenario: Once funcational/data elements and design framework is laid down. Focus on most significant user interactions - paying attention to how a persona uses the product to achieve its goals
  - Validation Scenario: Test design solution in a variety of situations

## Design Requirements: The "What" of Interaction

- Determine the "what" of the design: What info and capabilities our rpersonas require to accomplish goals
- Define and agree on the what before we can move on to the "how"
- Proposing solutions without clearly defining and agreeing to problems lead to unobjective results - I like, you like

### Design requirements aren't features

- Design requirements are instead synonymous with `needs` - define human and business needs that must be satisfied

### Design requirements aren't specifications

- Marketing/Product requirement documents can confuse `what` of product with `how`
  - Don't presuppose solutions that could be inappropriate for users/workflows
  - Requirements documents are of little use to business stakeholders or developers
  - Designers are needed to visualize contents of lists

### Design Requirements are Stretegic

- By clearly defining user needs, enables finding best solutions without compromising product's ability to help people

### Design requirements come from Multiple Sources

- Business Needs, technical, legal constraints are gathered during interviews that will factor into design

## The Requirements Definition Process

![picture 1](https://s2.loli.net/2022/10/07/RHBG8J6r5ZIADms.png)  

- Requirement Definition = Broad questions about what a product is and what it should do
- Framework Definition = Answers questions about how a product behaves and how it is structured to meet user goals

### Step 1: Create Problem and Vision Statements

- Problem statment = defines purpose of design initiative
  - Example: “Company X’s customer satisfaction ratings are low. Market share has diminished by 10 percent over the past year because users have inadequate tools to perform tasks X, Y, and Z that would help them meet their goal of G.”
- Vision statement: High level design objective or mandate
  - Example: “The new design of Product X will help users achieve G by allowing them to do X, Y, and Z with greater [accuracy, efficiency, and so on], and without problems A, B, and C that they currently experience. This will dramatically improve Company X’s customer satisfaction ratings and lead to increased market share.”
- Contents come directly from research and user models
- Useful when redesigning existing products

### Step 2: Explore and Brainstorm

- Try to create context scenarios without prejudgements about solutions
- Record/get ideas out of head. Eliminate as much preconception as possible
- Cherry-pick exploratory concepts to share with clients in order to discover their mood for creative solutions
- A few hours to a couple days is more than sufficient - don't spend too much time

### Step 3: Identify persona expectations

- Important for represented model to match users' mental models
- Represented model should not reflect the impklementation model (technical model)
- Record expectations:
  - Attitudes, experiences, aspirations, other factors that influence expectations
  - General expectations and desires persona mya have about experience of using proeuct
  - Behaviors persona expects/wants
  - How persona thinks about basic elements of units of data
  - What do interview subjects mention first?
  - Which action words are used? Which nouns?
  - Which intermediate steps, tasks, etc are not mentioned?

### Step 4: Construct context scenarios

- Tells the story of a particular user persona
- establish touch points that each persona has with the system over a length of time
- Broad and shallow in scope

![picture 1](https://s2.loli.net/2022/10/09/Xi4saroF2EUdjKV.png)  

- Entirely textual, should not represent product behaviors as they are

#### A Sample context scenario

![picture 2](https://s2.loli.net/2022/10/09/9YZMz4idBj17Cb6.png)  

- Hgh level, not specific about interface or technologies
- Optimal yet still feasible experience
- Activieis tie back to goals, tryuing to eliminate tasks

#### Pretending it's magic

- If persona has goals and produuct has magiv powers to meet them, how simple could the interaction be?
- Helps designers think outsie the box

### Step 5: Identify Design requirements

- Using context scenario, analyze it to extract persona needs or design requirements
  - objects
  - actions
  - context

#### Data Requirements (Object)

- Objectas and info that must be represented in the system
- Objects and adjuectives related to those objects

### Functional requirements

- operations or actions performed on objects
- Translated to inerface control
- Product actions

### Contextual Requirements

- Relationships/dependencies between sets of objects in the system
- Include which objects in system need to be displayed together
- Considerations regarding physical environment product used in
- Skills/capabilities of personas using the product

### Other requirements

![picture 3](https://s2.loli.net/2022/10/09/odxmyrkMzwaeqhK.png)  

- Get idea of requirements of business and tech you are designing for
- Design requirements provide design/dev direction and provide scope of work to communicate to stakeholders
