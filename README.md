<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 1: Concepts of NodeJS
</h3>

## :rocket: About the challenge

This repository is about the first challenge of RocketSeat course company.
The challenge is about create an application to store projects and their tasks from scratch using [Express](https://expressjs.com/pt-br/).


### Routes

- `POST /projects`: The route must receive `id` and` title` inside the body request and register a new project within an array in the following format: `{id:" 1 ", title: 'New project', tasks: []}`; Make sure to send both the project ID and the title in string format with double quotes.

- `GET /projects`: Route that lists all projects and their tasks;

- `PUT /projects/:id`: The route should only change the title of the project with the `id` present in the route parameters;

- `DELETE /projects/:id`: The route should delete the project only if the `id` is present in the route parameters;

- `POST /projects/:id/tasks`: The route must receive a `title` field and store a new task in the task array of a specific project chosen through the` id` present in the route parameters;


### Middlewares

- Create middleware that will be used on all routes that receive the project ID in the parameters of the URL that checks if the project with that ID exists. If it does not exist, return an error, otherwise allow the request to continue normally;

- Create a global middleware called on every request that prints (`console.log`) a count of how many requests have been made in the application so far;

## :link: Original challenge

The original challenge can be accessed through the link: https://github.com/Rocketseat/bootcamp-gostack-desafio-01

---
Made with ♥ by Rocketseat:wave: [Join the community!] (Https://discordapp.com/invite/gCRAFhc)
