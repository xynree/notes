# 4. Pragmatic Paranoia

## __21. Design by Contract__

- Define a contract with rights/responsibilities
- DBC (Design By Contract)
  - Expectiations of state of world routine:
    - Preconditions: What must be true in order for routine to be called
    - Postconditions: What routine is guaranteed to do
    - Class invariants
- If all routine's preconditions are met, routine should guarantee that all postconditions and invariants are true when it completes
  - If anything fails to live up to contract, exception is raised
- Write lazy code - Be strict with what you will accept before you begin, and promise as little as possible in return
- Important for inheritance/polymorphism
  - Make sure new subtypes really are a kind of the base type & supports same methods with same meanings
  - Contracts can be specified just once in the base class to have them be applied to subclasses automatically
- Forces the issues of requirements/guarantees to the front
  
## __22. Dead Programs__
- Code defensively
- All errors give information. Crash earlier
- Make sure all exceptions are handled yourself, even if library doesn't auto do it
- Dead programs do less damage than crippled ones

## __23. Assertive Programming__
- Use assertions to check "of course that could never happen" (testing)
- Assertions can be turned off at run time - don't put code that must be executed into an assert
- Assertions should not replace real error handling - checks for things that SHOULD NEVER happen
- Turn off only assertions that really slow down performance

## __24. When To Use Exceptions__
- If language supports exceptions, use `try` and `catch` for neater code. All error handling moved to diff polace
- Exceptions only should be used for unexpected events
  - Normal errors - conventional error return
  - Exception breaks transfor of control, like a goto startement
- Error handlers for categories of errors

## __25. How To Handle Resources__
- Routines that allocate resources sshould be responsible for deallocating it: "Finish what ou start"
- Opening and closing variables should be done in the same place - for every open, corresponding close
- Reduces global variables
- Nest allocations
  - Deallocate resources in the opposite order to that which you allocate them
    - That way, resources won't orphan
  - Always allocate same set of resources in the same order in different places in your code.
- Allocation/Deallocation is like constructor / deconstructor
- When objects go out of scope  or are reclaimed, object's destructor is in charge of deallocating resources.
- When you can't balance resources
  - Programs that use dynamic data structures
- 3 options for deallocating top level structures
  - Top level structure responsible for freeing substructures, then recursively delete
  - Top level structure simply deallocated. Structures they are pointed to are orphaned
  - Top level structure refuses to deallocate if it has any subsources.
- Make choice explicit and consistent for each
- Checking the balance
  - Build code that actual checks resourdes are freed appropriately
