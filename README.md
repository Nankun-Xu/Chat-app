# INFO6250 Final Project

Name: Nankun Xu   NUID: 002702634

## Topic

A chat app with login/logout, change theme and polling to see new messages functions

## How to start

Start with `npm install`, `npm run build` and then `npm start`.

## HomePage

When the page loads, it will make a fetch call to see if the user is already logged in.
If the user is logged in, he/she will see the chat page, else he/she will see the login page.

## Login Page

There is a login form, people need to input their username to login.
-If there is no username in the input field, the login button will be disabled.
-The username need to be valid

## Chat Page

There is a message list to show previous messages, a textarea to send new message and two contol buttons.
