# 1 - Getting Started

## 1.1 Installation

- Install Rust with `rustup`
  - `rustc --version` to see which version number
  - `rustup update` to update to new release
  - `rustup self uninstall` to uninstall Rust and `rustup`

## 1.2 Hello World

- Anatomy of A rust Program

```rs
fn main() {
  println!("Hello, world!");
}
```

- Rust requires curly brackets around all function bodies
  - `rustfmt` to format code (included with Rust distribution)
- Indent with 4 spaces
- `println` is a Rust macro - not same rules as functions
- Most lines in Rust end with semicolon
- Compiling and running are different steps (Use Cargo)

## 1.3 Hello Cargo

Creating a Project with Cargo

- Cargo = Rusts's build system and package manager
- Cargo handles building code, downloading libs, and building libs
- Creating a New Project with Cargo
  - `cargo new hello_cargo && cd hello_cargo`
  - Cargo generates `Cargo.toml` and `src/main.rs` along with initializing a gt repo with a `.gitignore`
- `toml` is Cargo's config format
- `[package] - configures a package, setting config info needed to compile program
- `[dependencies]` - lists project dependencies (crates)
- Cargo expects source files to live inside `src` directory. Top level directory is for README's, config, license, etc.

Building and Running a Cargo Project

- `cargo build` to build the project from the `hello_cargo` directory
- Default build is a debug build. Cargo pusts binary into a dir called `debug`
- Running build also creates a new file: `Cargo.lock` to keep track of versions of dependencies
- `cargo run` will compile code and run executable all in one command
- `cargo check` checks code to make sure it compiles but doesn't provide an executable

Building for Release

- When project is ready for release, use `cargo build --release` to compile with optimizations
- If benchmarking code, use the release build and run the executable in `target/release`
  
Cargo as Convention

- Larger programs will benefitfrom using Cargo to coordinate a build
