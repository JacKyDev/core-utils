# 3. Adoption of TypeScript as the Primary Programming Language

Date: 2024-03-23

Deciders: Jens Schreiber
Technical Story: https://github.com/JacKyDev/utils/issues/9

## Status

Status: Done (Last Updated: 2024-03-23)

## Context and Problem Statement

The project team needs to decide on the primary programming language for development. The choices include TypeScript and
JavaScript. Each language has its strengths and weaknesses, and the team needs to evaluate which
language best aligns with the project's goals and requirements.

## Considered Options

* TypeScript
* JavaScript

## Decision Outcome

After careful consideration and analysis, the team has decided to adopt TypeScript as the primary programming language
for the project. TypeScript offers several advantages that align well with our project needs:

* __Static Typing:__ TypeScript's static typing helps catch errors during development, reducing runtime issues and
  improving code quality.
* __Enhanced IDE Support:__ TypeScript provides better support in modern Integrated Development Environments (IDEs),
  enhancing developer productivity and code readability.
* __Readability and Maintainability:__ TypeScript's syntax and features promote clean, readable, and maintainable code,
  which is crucial for long-term project success.
* __Growing Ecosystem:__ TypeScript has a rapidly growing ecosystem, including libraries, frameworks (like Angular), and
  tooling, providing robust support for development tasks.
  While JavaScript is also a strong contender, TypeScript's additional features and benefits make it the preferred
  choice for this project.

### Positive Consequences

* Improved code quality and fewer runtime errors due to static typing.
* Better developer productivity and code readability with enhanced IDE support.
* Increased maintainability of codebase over time.
* Access to a growing ecosystem of libraries, frameworks, and tools specifically designed for TypeScript.

### Negative Consequences

* __Learning curve:__ Team members unfamiliar with TypeScript may require time to learn and adapt to its syntax and
  features.
* __Build complexity:__ TypeScript requires a build step to transpile code to JavaScript, adding complexity to the
  development process.
* __Potential tooling limitations:__ While TypeScript has robust tooling, there may be specific development needs where
  JavaScript-centric tools excel.
