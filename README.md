# react-select-case

## A simple way to do select case logic inline in a react component

Frequently `react` components want to render different content based on a value of an expression. This can be done with if statements and variables, but that is often overkill for simple uses. This library provides a simple API for this kind of logic.

## Install

```bash
npm install --save react-select-case
```

## An Example

This will report whether the time in epoch millis was odd or even when the component was rendered.

```jsx
<Select on={ (+new Date) % 2 }>
  <Case when={ 0 }>
    Time is even
  </Case>
  <Case when={ 1 }>
    Time is odd
  </Case>
</Select>
```
