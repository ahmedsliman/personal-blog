---
title: 'Why MobX?'
date: '2022-06-09'
---

**Why MobX?**

- MobX get you an ability to handle multiple data-structures of states
- Sync render by tracking  observable pieces of state
- Help on scalable applications with manage state easily

**What is State?**

Application state refers to the entire model of an application and can contain different data types including arrays, numbers, and objects. In MobX, actions are methods that manipulate and update the state. These methods can be [bound to a JavaScript event handler](https://blog.logrocket.com/how-to-dynamically-create-javascript-elements-with-event-handlers/) to ensure a UI event triggers them.

**MobX concepts**

- MobX has four principle concepts that we should learn, to understand how it works: **observables**, **computed values**, **reactions** and **actions**.
- MobX also introduces a few concepts: state, actions, and derivations (including reactions and computed values).
- By wrapping the component with an observer, it will now automatically become aware of changes in the store
