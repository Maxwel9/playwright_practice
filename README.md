# playwright_practice

[Playwright Documentation](https://playwright.dev/docs/intro)

## Requirements

node.js
git

## Running Tests

### Run tests in headless mode

```
npx playwright test
```

### Run tests with UI Mode

```
npx playwright test --ui
```

### Running a HTML Reporter

```
npx playwright show-report
```

## Setting Up Percy

[Documentation](https://docs.percy.io/docs/playwright)

### Install Percy

```
npm install --save-dev @percy/cli @percy/playwright
```

### Adding Percy Token

Create new project on the Percy website then set PERCY_TOKEN as an environment variable.
Windows CMD:

```
set PERCY_TOKEN="<your token here>"
```
