# 3 - The Basic Tools

## __14. The Power of Plain Text__

- Best format for storing knowledge is plain text
- Keep knowledge in plain text: Name things in an understandable way
- Cons: 
  - Takes more space than compressed formats
  - When not able to convert to plaintext, consider storing metadata
- Pros:
  - Insurance against obsolescence, will outlive other forms of data
  - All tools can operate on plaintext
  - Easier to test

## __15. Shell Games__
- WYSIWYG: What you see is what you get
- Command line is better when you want to quickly combine commands to perform a query or sother task
- Being better at shell makes you more productive

## __16. Power Editing__
- Learn one editor really well, use it for all editing tasks...
  - emacs, vim, etc
- Should be configurable, extensible, programmable
  
## __17. Source Code Control__
- Always use source control, even if it's just a prototype or single person project
- Allows for product builds that are automatic and repeatable

## __18. Debugging__
- It's just problem solving
- Doesn't matter who the blame rests on, it's still your problem
- Use all debugging tools available to you: visualization, tracing, rubber ducking
- When surprised by a bug, determine why failure wasn't caught earlier
  
## __19. Text Manipulation__
- Learn a text maniuplation language for formatting, automating, etc

## __20. Code Generators__
- Passive: Run once to produce a result
  - Templates, copyright, standard blocks
  - One-off conversions between programming languages
  - Producing lookup tables/other resources
- Active: used each time results are required
  - ex. mirroring a scheme on db and on backend: Use active code generator to take the schema and use it to generate source code for structure. now it is DRY