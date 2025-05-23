# Pre-configured UI test automation framework

Pre-configured UI test automation framework based on Playwright + TypeScript + Allure Reporting
- Pre-Configured: Page object pattern
- Pre-Configured: Step desgin pattern
- @Step decorator
Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API.
### [Playwright official documentation](https://playwright.dev)

## Installation

### Prerequisites

The following software are required:

- nodejs : Download and Install Node.js from
  ```sh
  https://nodejs.org/en/download/
  ```

1. Clone the repo

2. To avoid components download issues is recommended to configure proxy:
```
$Env:HTTPS_PROXY=""
```

or specified for Node.js/npm only:
```
npm config set 
npm config set 
```

3. Navigate to folder and install npm packages using:

```sh
npm install
```

4. For first time installation run below command to download required browsers

```sh
npx playwright install
```

## Test execution

Tests are written with Page object model usage.

For test execution the following command should be used:

```sh
npx playwright test
```
