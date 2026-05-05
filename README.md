# Playwright Quote Automation — System-Level Test Framework

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This repository contains a system-level test automation framework built with Playwright and TypeScript to validate real-world application behavior across integrated components.

The framework is designed to test a live SaaS application as a **System Under Test (SUT)**, focusing on end-to-end workflows, integration behavior, and system reliability under realistic conditions.

---

## System Under Test

This framework validates the Quoting App:

👉 https://github.com/matthewlarck-portfolio/QuotingApp  
👉 Live: https://designerblinds-c482a.web.app  

---

## Testing Approach

This project emphasizes **system-level validation** rather than isolated UI checks.

Key focus areas include:

- End-to-end workflow validation (authentication, quote creation, pricing, persistence)  
- Integration testing across UI, API, and Firestore database layers  
- Validation of business logic and system state transitions  
- Debugging and root cause analysis across application layers  
- Reliability testing under real-world user conditions  

Test scenarios are designed to simulate realistic user behavior and validate how the system behaves as a whole.

---

## Tech Stack

- Playwright (TypeScript)  
- Node.js  
- GitHub Actions (CI/CD)  

---

## Test Coverage

Current automated coverage includes:

- Authentication workflows and session handling  
- Quote creation and data persistence  
- Required field validation and error handling  
- Pricing logic validation  
- Critical-path smoke tests for system stability  

Additional regression and API validation coverage is in progress.

---

## Test Architecture

- Playwright Test Runner  
- Modular test design with reusable helpers  
- Fixture-driven test setup for consistent state  
- Environment-based configuration (local vs CI)  
- Scalable structure for system-level test coverage  

```text
tests/
 ├── auth/
 └── quotes/

utils/
fixtures/
