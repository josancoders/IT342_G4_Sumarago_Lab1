2/4/2026

DONE (Completed)
Project Structure: Created the main folders backend (Spring Boot) and web (React + Vite).

Backend Dependencies: Updated pom.xml with Spring Security, JPA, MySQL, and JWT libraries.

Database Configuration: Set up application.properties to connect to medlink_db in MySQL.

Backend Logic (The "N-Tier" Architecture):

Model: Created the User entity (Email, Password, Role).

Repository: Created UserRepository to talk to the database.

Security: Implemented TokenProvider (JWT generation) and SecurityConfig (Password Hashing).

Service: Created AuthService to handle registration and login logic.

Controller: Created AuthController to expose API endpoints (/register, /login).

IN PROGRESS (Current Focus)
Backend Testing: You are currently verifying that the API works using Postman or Thunder Client (checking if users are actually saved to the database).

Database Verification: Checking phpMyAdmin to confirm the users table was created automatically.

TO DO (Next Steps)
Frontend UI (React):

Create a Login Page (inputs for email/password).

Create a Registration Page.

Create a Dashboard (that only shows up if you have a token).

API Integration:

Connect the React Frontend to the Spring Boot Backend using fetch or axios.

Save the JWT Token in the browser (localStorage) after logging in.

Logout Function: Implement the button to clear the token and redirect the user.