# 7 - Managing Growing Projects with Packages, Crates, and Modules

- As project grows, organize code by splitting into multiple modules and files
- Package can contain many binary crates and one library crate
- Cargo also has `workspaces` for very large projects
- Encapsulate implementation details
- Nested context in which code is written = scope
  - Can create scopes and change which names are in and out of scope
- Module System
  - Packages: Lets you build,test,share creates
  - Crates: Tree of modules that produces an executable
  - Modules and use: Let you control organization, scope, and privacy of paths
  - Paths: a Way of naming an item

## 7.1 - Packages and Crates

- crate: Smallest amount of code that rust compiler considers at a time
  - Can contain modules
  - Modules defined in other files that get compiled with crate
- Binary Crate or Library Crate
  - Binary Crate: Programs you can compile to executable
    - Must have a `main` function
  - Library Crate: No `main` function, don't compile to executable
    - Define functionality intedned to be shared with projects
      - Like a `C` headers file
- Crate Root: Source file that Rust compiler starts from and makes up root module of crate
- Package: Bundle of `+ crates tha tprovides a set of functionality
  - Contains a `cargo.toml` to describe how to build those creates
- Package can have as many binary crates as you want, but just one library crate
  - Package must have at least 1 create
- `main.rs` not listed in `Cargo.toml` (Cargo has main.rs as the convention)
- `lib.rs` same for library crates
- Package can have multiple binary crates by placing files in the `src/bin` directory
