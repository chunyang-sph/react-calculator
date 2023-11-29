# Rocket Academy Calculator Testing

You and your partner are tasked with testing Rocket Academy's Calculator app from Workshop 1. This branch contains Rocket Academy's app implementation for you to write tests for.

### App Features

1. Basic inputs to be entered and displayed on a screen
2. Inputs can be calculated after a click of an "equal" sign
3. Users are able to "clear" the screen if mistakes were made
4. Input validation to ensure users do not enter double operations (i.e. \*/ or -\*) that will cause errors
5. Detects keypresses for users to interact with calculator with keyboard

### App Components

1. Calculator body to contain the calculator
2. Screen components to display the inputs and the calculations when needed
3. re-usable button component that can be used dynamically to trigger inputs

### Suggested Tests to Write

- Digits render on calculator screen
- Clear button clears screen
- Operators render on calculator screen
- Operators and decimal replace each other if entered in succession
- Equals button evaluates expressions correctly
- Equals button clears screen on invalid expressions
- Operators can be combined with numbers on either side
- Operators can be chained with numbers in between
- Order of operations prioritises `/` and `*` before `-` and `+`
- Order of operations prioritises first operator when both operators are same priority
- Numbers with decimals are parsed and evaluated correctly
- Keyboard interactions work as expected

### Deployed App for Reference

https://rocket-calc-comfy.netlify.app
