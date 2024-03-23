# 2. Isolation of Dependency and Native Function Calls through Encapsulation

Date: 2024-03-21

Deciders: Jens Schreiber
Technical Story: https://github.com/JacKyDev/utils/issues/6

## Status

Status: Done (Last Updated: 2024-03-23)

## Context and Problem Statement

In modern software development, managing dependencies and native function calls is crucial 
for maintaining code integrity, scalability, and ease of maintenance. Dependencies can introduce complexities, 
and native function calls may have system-level impacts that need careful handling.

The current project involves numerous dependencies and native function calls, 
leading to potential issues such as tight coupling, difficulty in testing, and challenges 
in swapping or upgrading components. There is a need to isolate these calls effectively to improve modularity, 
enhance testing capabilities, and streamline future updates.

## Decision Drivers
* __Modularity:__ Encapsulating dependency and native function calls promotes modularity by reducing interdependencies between components.
* __Testability:__ Isolating these calls facilitates easier unit testing and integration testing, leading to better code quality.
* __Flexibility:__ Encapsulation allows for easier swapping or updating of dependencies and native functions without affecting the entire system.
* __Code Maintenance:__ Clear encapsulation improves code readability, maintainability, and overall developer productivity.

## Considered Options

* __Manual Encapsulation:__ Writing custom wrappers or adapters to encapsulate dependency and native function calls manually.
* __Automated Code Generation:__ Leveraging tools or scripts to automate the generation of encapsulation layers based on predefined configurations.

## Decision Outcome

The decision is to employ __Manual Encapsulation__ due to the project's specific requirements, development team expertise, and the need for fine-grained control over encapsulation logic. This approach aligns with the project's architecture and allows for tailored encapsulation strategies based on unique use cases.

### Positive Consequences

* Improved modularity and code organization.
* Enhanced testability and easier maintenance.
* Flexibility in managing dependencies and native function behaviors.

### Negative Consequences

* Increased development time for creating and maintaining encapsulation layers.
* Potential overhead in managing custom encapsulation logic.
* Dependency on developer expertise in crafting effective encapsulation strategies.
