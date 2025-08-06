
`IPython` - interactive shell for python

#### documentation with `?`
- `?`: Python objects contain references to doc strings  - `help()` function can access info and print results. ex: `help(len)` will print documentation on the function `len()`
- `?` is a shorthand for accessing this documentation: `len?` will access the same docstring.
- To create your own docstrings:

```
	def square(a):
	"""Return the square of a."""
	return a **2
```

- Placing a string literal in the firsts line will create the docstring.
- """ triple quote notation is for multi-line strings.

#### Source code with `??`
- `??` will give shortcut to the source code.
- If the source code is not implemented in Python it will give the same output as `?`

#### Explore modules with Tab-completion

- To see all available attributes on an object: name of object with period and then tab: `NAME.<searchterm><TAB>`
- Tab completion can also be used for imports: `from itertools import co<TAB>` will show the list of searched objects from packages.
- Even flat `import` can be tab completed: `import <TAB>`
- You can use wildcard matching within IPython too: `*Warning` will get all objects which end in `Warning`
-