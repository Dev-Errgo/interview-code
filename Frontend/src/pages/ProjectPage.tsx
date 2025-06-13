import React, { useState, type FormEvent } from 'react';
import { Eye, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assuming IProject is defined somewhere, for this example, we'll define it here
// In a real project, you would import it from './models/project.interface'
interface IProject {
  id?: string; // ID might be optional when creating, as the backend assigns it
  name: string;
  description: string;
}

// Simulate ProjectController.ts for API calls
// In a real app, this would be in a separate file like services/ProjectController.ts
const ProjectController = {
  createProject: async (project: { name: string; description: string }): Promise<Response> => {
    // Replace with your actual backend URL
    const API_BASE_URL = 'http://localhost:3000'; // Assuming your backend runs on this port
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      return response;
    } catch (error) {
      console.error('Error creating project:', error);
      // Return a custom Response object for consistent error handling,
      // or re-throw the error to be caught by a more global error handler
      return new Response(JSON.stringify({ error: 'Network error or server unreachable.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};


export const ProjectPage: React.FC = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // State to hold error messages
  const navigate = useNavigate();

  /**
   * Submits the form to create the project
   *
   * @param event The form event
   */
  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault(); // Prevent default form submission to handle it with JavaScript

    // --- BONUS: Add simple validation to the form inputs ---
    setError(null); // Clear previous errors

    if (!projectName.trim()) {
      setError("Project Name cannot be empty.");
      return;
    }

    if (!projectDescription.trim()) {
      setError("Project Description cannot be empty.");
      return;
    }
    // --- End Validation ---

    try {
      // Call the `createProject()` method in ProjectController.ts
      const response = await ProjectController.createProject({
        name: projectName,
        description: projectDescription,
      });

      // After creating project, verify that the server response is 2xx
      if (response.ok) { // `response.ok` checks if the status code is in the 200-299 range
        const createdProject: IProject = await response.json();
        alert(`Successfully created project: ${createdProject.name}`);
        navigate('/project-details'); // Redirect to the '/project-details' page
      } else {
        // Handle non-2xx responses (e.g., 400 Bad Request, 409 Conflict, 500 Internal Server Error)
        const errorData = await response.json();
        setError(errorData.error || `Failed to create project. Status: ${response.status}`);
        alert(`Failed to create project: ${errorData.error || 'Unknown error'}`); // Also show an alert
      }
    } catch (apiError) {
      // This catch block handles network errors or errors thrown by ProjectController.createProject
      console.error("API call failed:", apiError);
      setError("Failed to connect to the server or an unexpected error occurred.");
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      {/* Centered Content Container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-xl w-full">
          {/* Project Creation Form */}
          <form onSubmit={onSubmit}>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold">Begin your Project Journey</h1>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Project Name */}
              <div className="bg-gray-100 rounded-md p-3 flex items-center justify-between">
                <div className="w-full">
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
                  <input
                    type="text"
                    id="projectName"
                    className="bg-transparent w-full border-none focus:outline-none"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <Eye className="h-5 w-5 text-gray-500" />
              </div>

              {/* Project Description */}
              <div className="bg-gray-100 rounded-md p-3 flex items-start justify-between">
                <div className="w-full">
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
                  <textarea
                    rows={3}
                    id="projectDescription"
                    className="bg-transparent w-full border-none focus:outline-none"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
                <FileText className="h-5 w-5 text-gray-500 mt-1" />
              </div>

              {/* Create Project Button */}
              <input
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors cursor-pointer"
                type="submit"
                value="Create Project"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};