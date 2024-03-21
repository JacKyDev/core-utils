# 1. Runtime Environment for Library

Date: 2024-03-21

Deciders: Jens Schreiber
Technical Story: https://github.com/JacKyDev/utils/issues/5

## Status

Status: Done (Last Updated: 2024-03-21)

## Context and Problem Statement

The development runtime environment utilizes NodeJS along with NPM to facilitate the integration of necessary
dependencies. The project structure is based on NPM Workspaces, organizing the library and all related components into
separate spaces. This setup allows for the development and testing of new procedures within individual workspaces
without affecting existing packages. Additionally, all resources are available in the mono-repository, eliminating the
need for additional infrastructure.

The primary focus is on the project's compatibility with LTS versions of NodeJS to ensure security aspects and minimize
runtime errors outside of these versions. The architecture aims to reduce infrastructure to essentials to streamline the
development of new features.

## Considered Options

* Utilization of NodeJS and NPM
* Utilization of NodeJS and Yarn
* Utilization of NodeJS and Pnpm
* Utilization of Bun
* Utilization of Deno

## Decision Outcome

When considering the options, emphasis was placed on experience within the NodeJS and NPM ecosystem. Option 1 (NodeJS
and NPM) was prioritized due to extensive experience and to keep the runtime focus separate from library development.
Options 4 (Bun) and 5 (Deno) were not initially considered as guarantees for all dependencies could not be assured.
Options 2 (NodeJS and Yarn) and 3 (NodeJS and Pnpm) currently do not provide discernible advantages for the project but
may be re-evaluated in the future.

The positive aspect of this decision lies in the usual compatibility of dependencies with NodeJS and NPM, easing
developer work. However, NodeJS runtime speed is not comparable to Bun or Deno, which may lead to slower builds and
deployments with heavy scripting. Potential performance optimizations need consideration for the future.

Experience with NodeJS and NPM enables faster resolution of infrastructural issues, allowing a focus on package
development. Therefore, the decision favored these over other runtimes and package managers to prioritize development
itself. Consequently, other runtimes and package managers are currently not optimal solutions for the project.

### Positive Consequences

* Integration of necessary dependencies through NodeJS and NPM.
* Organized project structure via NPM Workspaces for development and testing in separate spaces.
* Availability of all resources in the mono-repository without additional infrastructure.
* Focus on compatibility with NodeJS LTS versions for security and error minimization.
* Reduction in infrastructure complexity for efficient development of new features.

### Negative Consequences

* Potential speed differences of NodeJS runtime compared to Bun or Deno.
* Potentially slower builds and deployments with heavy scripting.
* Need to consider future performance optimizations for the NodeJS runtime.
