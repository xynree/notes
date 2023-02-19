# 1 - Hello World

`fn main() {
  println!("Hello World!");
}
`

- `println` is a macro that prints text to console
  - macros look like functions but are expanded into source code into AST's
    - can be created with `macro_rules!` macro
    - helps with keeping DRY
- `rustc hello.rs` to run the rust compiler

## 1.1 Comments

- comments: Rust uses `// Line comments` and `/* block comments */` (Regular Comments), and Doc comments (parsed into HTML library doc): `/// Generate lib docs for following item` or `//! Gen library docs for enclosing item`
  - Doc comments get compiled and support markdown when running `rustdoc`. Support inline links as well

## 1.2 Formatted Print

- printing is handled by `macros` defined in `std::fmt`, including: `format!` (format text to String), `print!`: (format text to console), `println!`: same as print but appends new line, `eprint!`: format text to stderr, `eprintln!` : eprint but new line appended

### 1.2.1 Debug

- `std::fmt` traits require an implementation to print
- `fmt:Debug`: All types can derive the implementation
- All `std` library types are printable with `{:?}`
- Pretty print with `{:#?}

### 1.2.2 Display

- `fmt::Display` will customize output after implementing it on a type

### 1.2.3 Formatting

- Formatting specified through format strings:
  
  `format!("{}", foo) -> "343423434"`
  `format!("0x{:X}", foo) -> "OxDEABDDF"`
  `format!("0o{:o{", foo) -> "0o3434343434"}`

- Same variables can be formatted differently depenting on which argument type (X) or (o) or (unspecified)
- there is one trait for each argument type
- Most common trait: `Display`
