### Alpha Beta test

This is a small module which shows the variation of the image on the modal popup. The variation is based on A/B test requirement.

### Quick Start

1. Clone this repository


1. Install gulp

    ```
    npm install -g gulp bower yarn
    ```

1. Install Dependencies
    ```
    yarn && bower install
    ```

1. Run the project
    ```
    gulp watch
    ```

### A/B testing strategy
- When user clicks on the "Price" button, the current UNIX timestamp is captured and stored in cookie as `session_id`
  Eg. `1476648723`

- When the modal popup opens, **based on the Odd or Even number of the timestamp**, the variation of the image is shown.

- This `variation` is set in the form

- During submission of the modal form, the User object will be logged in developer tool with Variation
  Eg.

    ```
    {
        address: "24 New York Ave",
        city:"Smith Town",
        email:"john@smith.com",
        name:"John Smith",
        phone:"234-324-2345",
        state:"AZ",
        variation: false,
        zipcode:"78678"
    }
    ```

### Technology used:

- Preprocessor: LESS with Bootstrap 3
- UI Framework: Angular 1.5
- Workflow: gulp, browser-sync
- Package Manager: yarn

