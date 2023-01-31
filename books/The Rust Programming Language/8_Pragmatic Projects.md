# 8. Pragmatic Projects

## __41. Pragmatic Teams__

- How can pragmatic techinques be applied to teams as whole?
- Teams as a whole should not tolerate broken windows
- Make sure everyone actively monitors environment for changes
  - Have someone check constantly for increased scope, additional features, etc
- Communicate: Generate a team brand and identity
- DRY: Group librarian?
- Orthogonality: Split teams functionally, each team has responsibilities to others in the project
- Automation: Tool builder members of team construct and deploy automation tools

## __42. Ubiquitous Automation__

- Compiling Projects: a chore that should be reliable and repeatable
- Build automation: A build takes an empty directory and builds product from scratch
  - Steps:
    - Check out source code
    - Build project. each build marked with release #
    Create distributable image
    Run specified tests
- Maintain automatic, unattended content-driven workflow
  - Internal website generation
  - Approval procedures
- Let computer do the repitious stuff

## __43. Ruthless Testing__

- Fine, small nets = unit tests
- Big, coarse nets = integration tests
- Automated tests have a better chance of success
- A good project might havem ore test code than production code
- What to Test
  - Unit Testing: Code that exercises a module. Foundation of all other forms of testing
  - Integration testing: Shows that major subsystems that make up the project work with each other
  - Validation and Verification: Does it meet functional requirements of system? Be conscious of end-user patterns
  - Resource Exhaustion, Errors, Recovery: Test limits of memory, disk space, resolution, etc.
  - Performance Testing: Does it meet performance requirements under real world conditions?
  - Useability Testing: Performed with real users. Does software fit the user?
- How to Test
  - Regression Testing: Compares output of current test with previous values. Ensures bugs fixed today don't break things that were working yesterday
  - Test Data: Real-world vs. Synthetic data(artificially generated)
  - Exercising GUI Systems: Testing GUI intensive systems
  - Testing the Tests: Cause bugs deliberately and make sure the test complains
  - Testing Thouroughly: Use Coverage Analysis
  - When to Test: As soon as production code exists, it needs to be tested. Most testing should be done automatically
- Tightening the Net
  - If a bug slips through the net of existing tests, you need to add a new one.
  - Once a human tester finds a bug, it should be the last time a human tester finds the bug. Automated tests shold be modified from then on.

## __44. It's All Writing__

- Documentation = integral part of development
- Not dichotomy: two views of the same model
- Two kinds of documentation: Internal/External

### Internal Documentation

- Comments in Code
  - Should discuss why something is done, not how it is done
  - Simple module-level header comments, significant data and type declarations
  - Names should be well chosen and meaningful
  - Things that should not appear in comments:
    - List of functions exported by code
    - Revision history
    - The name of the file
- Executable Documents
  - Find way to make a model for a process and then export its value as different views.
  - Produce all documeentation in a form that can be published online

## __45. Great Expectations__

- Success of project measured by how well it meets the expectations of its users

### Communicating Expectations

- Work with users to deliver accurate understanding
- Managing expectations: You can use Tracer Bullets and prototypes in order to let the team construct something the user can see

### The Extra Mile

- Give users a little bit more than they were expecting
- Listen to users as project progresses for clues about what features would delight them
  - Balloon help
  - Keyboard shortcuts
  - Reference guide
  - Colorization
  - Automated installation
  - Splash screen

## __46. Pride and Prejudice__

- Don't have "code ovwnership" - don't jealously defend code against interlopers
- Instead see pride of ownership.
