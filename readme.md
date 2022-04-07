# Learning React State

This repository forms a lesson around React state.

## Overview

We'll be starting with an React example which don't have any _state_.

When we talk about _state_, we mean changeable data.
This could be by the current user, or by an external source.
In our example, we're going to focus on how we can track changes to the data on our page due to user actions.

When we start, we have components in the view which do not change based on user actions.

### Running the code

To run the code in this example, clone the repository, then run

```sh
yarn
```

to install dependencies, then

```sh
yarn start
```

which will start the React server.

This should be familiar if you've used create-react-app or otherwise learnt React basics.

## Example One: Counter

A counter is the rosetta stone of state examples.

It's a simple example where we have one variable: a number.
This number can go up (or down) based on user clicks or other actions.

We want to change the displayed value based when the user clicks a button.

## Example Two: Toggle

A toggle flips a boolean variable from true to false and vice versa.

It's common to have toggles to enable features, hide parts of a page, or otherwise control something which can either be on or off.

## Example Three: Hello

Looking at a third data type, we have a greeting being displayed for the name Robin.
The user should be able to change this name to their own.

## Solution

If you'd like to see a solution, check out the branch _live-lesson_.

```sh
git checkout live-lesson
```
