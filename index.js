const express = require('express');

const server = express();

//Global Middleware
server.use(express.json());

/**
 * The `projects` variable can be` const` because an `array`
 * can receive additions or exclusions even though it is a constant.
 */
const projects = [];

/**
 * Local Middleware to show number of requests (log)
 */
function logRequests(req, res, next)  {
  console.count("Número de requisições");

  return next();
}

server.use(logRequests);

/**
 * Local Middleware to check if the project exists
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  
  const project = projects.find(obj => obj.id == id);

  if(!project) {
    return res.status(400).json({ error: 'Project does not exist' });
  }

  return next();
}

/**
 * List all Projects
 */
server.get('/projects', (req, res) => {
  return res.json(projects);
});

/**
 * Create Project
 * Request body: id, title
 */
server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  
  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

/**
 * Update Project
 * Route params: id
 * Request body: title
 */
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(obj => obj.id == id);

  project.title = title;

  return res.json(project);
});

/**
 * Delete Project
 * Route params: id
 */
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(obj => obj.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

/**
 * Add task into project
 * Route params: id
 */
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const {title} = req.body;

  const project = projects.find(obj => obj.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);