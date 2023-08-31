# playwright_practice

[Playwright Documentation](https://playwright.dev/docs/intro)

## 1. Requirements

node.js
git

## 2. Running Tests

### 2.1. Run tests in headless mode

```
npx playwright test
```
```
npx percy exec -- playwright test
```

### 2.2. Run tests with UI Mode

```
npx playwright test --ui
```

### 2.3. Running a HTML Reporter

```
npx playwright show-report
```

### 2.4. Running tests via VS Code Marketplace
The extension is available on the VS Code Marketplace.

Record new – generating tests, recording user actions. Press the cancel button to stop the recording.

Pick locator – allows to pick the right locator.

Recorder at cursor – it allows us to record in a specific place in our test.

## 3. Setting Up Percy

[Documentation](https://docs.percy.io/docs/playwright)

### 3.1. Install Percy

```
npm install --save-dev @percy/cli @percy/playwright
```

### 3.2. Adding Percy Token

Create new project on the Percy website then set PERCY_TOKEN as an environment variable.
Windows CMD:

```
set PERCY_TOKEN="<your token here>"
```
