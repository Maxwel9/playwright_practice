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
### 2.4. Code Generator
[Documentation](https://playwright.dev/docs/codegen)

#### 2.4.1. Running tests via VS Code Marketplace
The extension is available on the VS Code Marketplace.

Record new – generating tests, recording user actions. Press the cancel button to stop the recording.

Pick locator – allows to pick the right locator.

Recorder at cursor – it allows us to record in a specific place in our test.

#### 2.5.1. Running Codegen
```
npx playwright codegen
```
```
npx playwright codegen URL
```
Emulate viewport size:
```
npx playwright codegen --viewport-size=800,600 playwright.dev
```
Emulate devices:
```
npx playwright codegen --device="iPhone 13" playwright.dev
```
Emulate color scheme:
```
npx playwright codegen --color-scheme=dark playwright.dev
```
Emulate geolocation, language and timezone:
```
npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps
```
Preserve authenticated state:
```
npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json
```
After performing authentication and closing the browser, auth.json will contain the storage state which you can then reuse in your tests.
Load authenticated state:
```
npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright
```

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
