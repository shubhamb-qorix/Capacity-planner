# Setup Instructions for Capacity Planner

## Backend Setup
1. **Clone the Repository**  
   Clone the repository using git:  
   ```bash  
   git clone https://github.com/shubhamb-qorix/Capacity-planner.git  
   cd Capacity-planner  
   ```  

2. **Install Dependencies**  
   Navigate to the backend directory and install the necessary dependencies:  
   ```bash  
   cd backend  
   npm install  
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the `backend` directory and add the necessary environment variables. Here’s an example:  
   ```bash  
   DATABASE_URL=your_database_url_here  
   JWT_SECRET=your_jwt_secret_here  
   PORT=3000  
   ```

4. **Run Migrations**  
   If applicable, run migrations to set up your database schema.  
   ```bash  
   npm run migrate  
   ```

5. **Start the Backend Server**  
   You can start the backend server with the following command:  
   ```bash  
   npm start  
   ```

## Frontend Setup
1. **Navigate to Frontend Directory**  
   In your terminal, navigate to the frontend directory:  
   ```bash  
   cd frontend  
   ```

2. **Install Dependencies**  
   Install the necessary dependencies:  
   ```bash  
   npm install  
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the `frontend` directory with the following example:  
   ```bash  
   REACT_APP_BACKEND_URL=http://localhost:3000  
   ```

4. **Start the Frontend Server**  
   Run the following command to start the frontend server:  
   ```bash  
   npm start  
   ```

## JIRA API Configuration
### For Cloud  
1. **Generate an API Token**  
   - Log in to your Atlassian account.  
   - Navigate to Account Settings > Security > API Token.  
   - Click on **Create API token** and follow the instructions to generate a new token.

2. **Set Up API Access**  
   Add the following to your environment variables:  
   ```bash  
   JIRA_API_TOKEN=your_generated_token  
   JIRA_EMAIL=your_email@example.com  
   ```

### For Server  
1. **Configure JIRA Server**  
   - Ensure your JIRA server is accessible and has API access enabled.
   - If required, create a dedicated user for API access with appropriate permissions.

2. **Set Up API Access**  
   Add the following to your environment variables:  
   ```bash  
   JIRA_BASE_URL=http://your_jira_server_url  
   JIRA_USERNAME=your_username  
   JIRA_PASSWORD=your_password  
   ```  

## Conclusion  
After completing the above steps, the backend and frontend should be set up, and you should be able to connect to your JIRA instance. Make sure to check the respective logs for any potential issues that may arise during the configuration.