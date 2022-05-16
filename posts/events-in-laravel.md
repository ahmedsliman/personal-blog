---
title: Laravel Events For Newbies
date: '2022-03-15'
---

## What is Event-Driven Programming?

Simply put, events are actions that occur within an application. Coming from the world of JavaScript, you probably understand events as user actions such as mouse click, mouseover, key press etc. In Laravel, events can be various actions that occur within an application such as email notifications, logging, user sign up, CRUD operations etc. Laravel events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application.

## Why should we use Events?!

- Easier to maintain (SOLID).
- Less risk of regression,
- Make classes responsible for only one thing,
- Make team’s work easier,
- Expects the unexpected, If you ever need to add new functionality, all you need to do is create a new listener and register it with the event. Job is done!
- Your logic is separated and now the Controller has much - reduced responsibility
- Allow asynchronous tasks easily (queues in Laravel).
- Be ready for broadcasting

## Let's compare two pieces of code with/without events

### With
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/y7e2o0uesnkyxn8q7l4v.png)

### Without
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qdpjjp8cdroftvyn4yed.png)

## How do we create Events?

### Defining Our Events

```php artisan make:event UserRegistered```

Event has been created successfully

```php artisan make:listener SendWelcomeMail --event=UserRegistered```

Listener has been created successfully

```php artisan make:listener SignupForWeeklyNewsletter --event=UserRegistered```

Listener has been created successfully

```php artisan make:listener SendSMS --event=UserRegistered```

Listener has been created successfully

## ESP - EventServiceProvider

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/0svwe6ivibsptoew00nw.png)

```php artisan event:generate```

Events and Listeners generated successfully

## Stopping The Propagation Of An Event

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i1pjxkfyjxmvy95ct6f2.png)

## Eloquent Native Events

With his Eloquent model, Laravel will automatically fire **created**, **saved**, **updated** and **deleted** events respectively.

To start listening to model events, define a **$dispatchesEvents** property on your Eloquent model. This property maps various points of the Eloquent **model's** lifecycle to your own event classes. Each model event class should expect to receive an instance of the affected model via its constructor.

## Eloquent Native Events

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/z8l2njjzzyioogdrctx5.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3d7qwjxzpk4jm87ya0n0.png)
