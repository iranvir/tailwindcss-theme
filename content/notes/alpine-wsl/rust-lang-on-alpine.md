---
title: "Part 3: Installing Rust Lang on Alpine (With just LLVM Dependencies)"
tags: ["linux","wsl","Rust Lang"]
date: 2020-11-04
feature_image: "/images/rust-lang-on-alpine.jpg"
summary: "Let's install Rust Programming Language on Alpine Linux, with almost
no GNU Dependencies. We will use the offical Rust Lang installer (rustup) and we
will use LLVM toolchain when we need C toolchain for things like linking, etc."
---
Setting up Rust Lang on Alpine is relatively straight-forward. You get the
dependencies that includes clang and lld from the apk repositories and curl to
download and install the [Rust
Toolchain](https://www.rust-lang.org/tools/install).

## 1. Getting the dependencies
We will need a C compiler and a Linker. Actually only the linker will be used to
link your binaries against the standard C library unless your Rust project is
explicitly called C programs. I will be using the LLVM Project's `lld` linker
and `clang` compiler.
```
$ apk add clang lld
```
I would also need curl to actually download the Rust comiler toolchain in the
second step.
## 2. Getting Rust
I will just use the standard Rust installation method as shown in the official
website.
```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
I will go ahead and select all the defaults, which in case of Alpine will look
something like below:
```
Current installation options:

default host triple: x86_64-unknown-linux-musl
    default toolchain: stable (default)
            profile: default
modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

You can change the defaults if you like. Make sure to add ~/.cargo/bin to your
`PATH` variable.

```
$ source ~/.cargo/env
```

## 3. Compiling a Rust Program
To get started with Rust, let's try running a simple "Hello, World!" program:
```
$ cargo new hello
$ cd ./hello
$ RUSTFLAGS="-C linker=clang -C link-arg=-fuse-ld=lld" cargo build
```

Notice, we have to pass `RUSTFLAGS` variable so that the `rustc` compiler would
know which C compiler and linker to invoke.

## 4. Static binaries
That's it. Now you have a barely working Rust Lang environment. Have fun fellow
Rustaceans. If you want to build static binaries for some targets with glibc
defaults, you can use the flag `--target x86_64-unknown-linux-musl`.
