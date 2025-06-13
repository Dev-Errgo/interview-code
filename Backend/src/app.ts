import express from 'express';
import cors from 'cors';
import { IProject, projectSchema } from './models/project.interface';
import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// List of projects
const projects: IProject[] = [];

// Setup cors and express.json()
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Errgo Backend Interview Module Loaded Successfully!');
});

/**
 * TODO: Complete the method for creating a new project
 * The response should contain an object of type IProject
 * 
 * Hint: Utilize the projects to store the newly generated of project 
 * Hint: Utilize the uuid npm package to generate the unique ids for the project 
 */
app.post('/projects', (req: Request, res: Response): void => {
  const { project } = req.body;
  console.log('Project data received:', project);
  const parseResult = projectSchema.safeParse(project);

  if (!parseResult.success) {
    res.status(400).json({ error: parseResult.error.format() });
    return;
  }

  // Create new project with unique ID using uuid package
  const newProject: IProject = {
    id: uuid(), 
    name: project.name,
    description: project.description
  };


  projects.push(newProject);

  
  res.status(200).json(newProject);
});

/**
 * TODO: Complete the method for returning the current list of projects 
 * The response should contain a list of IProject
 * 
 * Hint: Utilize the projects to retrieve the list of projects 
 */
app.get('/projects', (_req, res) => {

  res.status(200).json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
