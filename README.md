# MoviesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# E-Commerce Playground

This repository serves as a playground for experimenting with different Angular change detection strategies, specifically comparing **Zone.js-based** and **Signal-based** (Zoneless) approaches. The application is a simple e-commerce frontend that demonstrates how change detection can impact performance in Angular applications.

## Branches

### 1. `zonejs-change-detection` (Zone.js-based Change Detection)

This branch uses the traditional Angular change detection mechanism that relies on Zone.js. In this setup, Angular automatically tracks and triggers change detection across the entire component tree in response to user events or asynchronous operations.

### 2. `signal-based-change-detection` (Signal-based Change Detection)

This branch experiments with a zoneless approach, where Angular signals are used for change detection instead of Zone.js. This method offers more granular control over change detection, potentially reducing the number of components that Angular needs to check and improving overall performance.

## Switching Between Branches

To fully explore the differences between these two approaches, you can switch between the `zonejs-change-detection` and `signal-based-change-detection` branches and observe how change detection is handled in each scenario.

### Steps to Switch Branches

1. Clone the repository:

   ```bash
   git clone https://github.com/ayuba-dn/ecommerce-playground.git
   cd ecommerce-playground
   ```

2. Checkout the desired branch:

   - For Zone.js-based change detection:

     ```bash
     git checkout zonejs-change-detection
     ```

   - For Signal-based (Zoneless) change detection:
     ```bash
     git checkout signal-based-change-detection
     ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200` to see the application in action.

## Purpose of the Experiment

This playground is designed to help Angular developers understand the impact of different change detection strategies on application performance. By comparing the Zone.js-based approach with a Signal-based approach, you can gain insights into:

- How Zone.js triggers change detection across components.
- How Angular signals provide more fine-grained control over change detection.
- The potential performance improvements when using a Zoneless approach.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. If you find any issues or have suggestions for improve
