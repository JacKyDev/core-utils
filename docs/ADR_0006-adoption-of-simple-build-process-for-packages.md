# 6. Adoption of Simple Build Process for Packages

Date: 2024-03-25

Deciders: Jens Schreiber

## Status

Status: Accepted (Last Updated: 2024-03-27)

## Context and Problem Statement

In our development process, we use tsup as the build tool for our packages. While there are many other bundlers and
deployment tools like Vite, Rollup, and Webpack available, tsup provides a straightforward way to create CJS (CommonJS),
ESM (ECMAScript Module), and DTS (TypeScript Declaration) formats of the package.

## Considered Options

* tsup
* Vite
* Rollup
* Webpack

## Decision Outcome

We have chosen tsup due to its simple configuration for generating the required package formats. Additionally, it
seamlessly integrates into our existing development and build workflows.

### Consequences

By using tsup for the build process, we expect the following positive outcomes:

* Simple Configuration: The configuration in each project is streamlined to essential settings, ensuring an efficient
  build process.
* Support for Various Formats: tsup facilitates the creation of CJS, ESM, and DTS formats required for different
  environments and use cases.
* Consistent Project Configuration: The tsconfig in each project is adjusted to place sources in the src directory,
  leading to a consistent project structure and easing the development process.
