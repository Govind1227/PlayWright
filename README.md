---

# Playwright Login Test Suite

This project demonstrates an **automated login test framework** using [Playwright](https://playwright.dev/) for testing the [Sauce Demo](https://www.saucedemo.com) application with multiple user accounts.

It uses a **Page Object Model (POM)** structure for better code reusability and maintainability.

---

## 📂 Project Structure

```
.
├── data
│   └── UserData.ts          # Test users' credentials
├── pages
│   └── LoginPage.ts         # Page Object for the Login page
├── services
│   └── LoginService.ts      # Service layer for login workflow
├── tests
│   └── login.spec.ts        # Login test case
├── package.json
└── README.md
```

---

## 📦 Dependencies

* [Playwright](https://playwright.dev/) – browser automation framework
* [@playwright/test](https://playwright.dev/docs/test-intro) – Playwright's built-in test runner

---

## ⚙️ Installation

1. **Clone this repository**

   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## 🚀 Running the Tests

Run the test suite with:

```bash
npx playwright test
```

To run in headed mode (see the browser UI):

```bash
npx playwright test --headed
```

To run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

---

## 🧩 Code Overview

### **1. User Data**

`data/UserData.ts`
Contains a list of users with email and password credentials to test different login scenarios.

```ts
export interface User {
  email: string;
  password: string;
}

export const users: User[] = [
  { email: "performance_glitch_user", password: "secret_sauce" },
  { email: "standard_user", password: "secret_sauce" },
  { email: "locked_out_user", password: "secret_sauce" },
  { email: "problem_user", password: "secret_sauce" }
];
```

---

### **2. Login Page**

`pages/LoginPage.ts`
Implements locators and actions for the login page using the **Page Object Model**.

* **`goto()`** – Navigates to the Sauce Demo login page
* **`login(email, password)`** – Fills credentials and clicks login
* **`assertion()`** – Placeholder for post-login verification

---

### **3. Login Service**

`services/LoginService.ts`
Acts as a workflow service layer that combines page actions for clean test scripts.

---

### **4. Login Test**

`tests/login.spec.ts`
Loops through all test users from `UserData.ts` and attempts login for each one.

---

## 📸 Reports & Screenshots

On login, a screenshot is saved at:

```
Reports/Login.png
```

---

## 🔮 Future Improvements

* Add proper `assertionText` locator for login success or error validation.
* Integrate **Allure** or **HTML reports** for better test reporting.
* Parameterize URLs via config files.
* Add test tags for filtering execution.

---

## 📝 Notes

* Currently, the `assertionText` locator is empty (`""`) in `LoginPage.ts`, so `assertion()` will not work until updated.
* All users share the same password in this demo, but you can extend the dataset for more realistic testing.

---
