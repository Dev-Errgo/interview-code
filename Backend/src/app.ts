import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
import { IProject } from './models/project.interface'; // Assumed to exist and be correct

const app = express();
const PORT = 3000;

const projects: IProject[] = [];

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true // Keeping this as per your original code
}));

app.use(express.json());

app.get('/', (_req: Request, res: Response) => { // Removed explicit ': Response' return type
  res.send('Errgo Backend Interview Module Loaded Successfully!');
  return; // Add return to explicitly end the function
});

app.post('/projects', (req: Request, res: Response) => { // Removed explicit ': Response' return type
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400).json({ error: 'Name and description are required.' });
    return; // Add return to explicitly end the function
  }

  const newProject: IProject = {
    id: uuid(),
    name,
    description
  };

  projects.push(newProject);
  res.status(201).json(newProject);
  return; // Add return to explicitly end the function
});

app.get('/projects', (_req: Request, res: Response) => { // Removed explicit ': Response' return type
  res.status(200).json(projects);
  return; // Add return to explicitly end the function
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});