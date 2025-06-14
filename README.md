# Name: Chandra Sekhar Dutta
# R.No: RA2211032020010
# Email: Chandrasekhardutta3@gmail.com , cd6071@srmist.edu.in
# College: SRM Institute of Science and Technology
# Description: Made changes in TODOS in frontend and backend. 
## Frontend changes
- added setSidebarVisible() in toggleSidebar(), added props in TopNavbar and made changes in TopNavbar.tsx.
- Added the line - { index: true, element: <Navigate to="/project" /> } in main.tsx 
- Updated onSubmit() in ProjectPage.tsx   

## Backend Changes
- First JSON is parsed
- Response is pushed in the list

## Bonus Challange 
- made a cross-platform chatting application using websocket 
- imported websocket
- Made object of Websocket and which is running on my local lan IP, if you want to test, replace the IP address with your local device IP address in the ChatPage of the frontend






## Errgo Code Assessment
This repo contains two directories:
1. Backend
2. Frontend

There are multiple `TODO`s scattered across both directories. The goal is to complete the TODOs to implement a full round trip scenario to populate and display the data on the front end. It's recommended to start with the `Frontend` directory to get a better understanding of the project and to help determine the necessary code to be added in the `Backend` directory.

Work will be graded taking into account the following aspects:
- Clean code
- Conciseness of solution
- TSDoc

Please read the respective `README.md` files found in each directory for more details.

# Highly Visibile Bonus Task (Optional)
Implement a chat system utilizing web sockets on both frontend and backend. This should just be a simple system where multiple users can chat to one another on one single session.
- For the frontend, create a new page and route to the page `/chat`
  - Bare minimum design, you dont need to show user names, just a new line for each message
  - Simple text field and send button
- No need to implement multiple rooms/sessions
- Utilize the web socket node package for backend and the client web socket for front end
- Messages should be displaying live
- Store the state of the chat on the backend (will be destroyed upon server restart/shut down)

# Submission
For submission, please upload your solution as a private repository on your GitHub profile and share it with `errgo.project@gmail.com`
