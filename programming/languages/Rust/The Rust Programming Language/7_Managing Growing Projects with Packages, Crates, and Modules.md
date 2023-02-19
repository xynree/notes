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

## 7.2 - Defining modules to Control Scope and Privacy

- How modules, paths, and pub work in the copiler:
  - Compiler first looks in the crate root
  - In crate root, declare new modules
    - Compiiler looks for module code:
      - Inline with {}
      - In file sr./garden/rs
      - In file src/garden/mod.rs
  - Declaring Submodules
    - In any file other than crate root, can declare submodules
  - Paths to code in modules
    - Once a module is part of crate, refer to code in that module from anywhere else in the same crate, using path to the code
      - `crate::garden:;vegetables::Asparagus`
  - Within scope, the `use` keyword creates shortcuts to reduce repition of long paths
- Grouping related Code in modules
  - Modules allow us to organize code within a crate

```rust
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}
```

- Can group related definitions together and name why they're related

## 7.3 Paths for Referring to an Iterm in the Module Tree
