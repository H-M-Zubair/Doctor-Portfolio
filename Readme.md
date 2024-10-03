# Doctor Portfolio (Doctor Appointment)

This is a **Single Page Application** (SPA) designed for managing doctor appointments and Electronic Health Records (EHR). Instead of traditional routing, the application uses **modals** for toggling between login and register functionalities. The app provides both **patient** and **doctor dashboards**, allowing users to schedule appointments and manage patient records seamlessly.

## Features

### General Features
- **Modal-based login and registration**: Users can toggle between login and registration forms without navigating to different pages.
- **Doctor Appointment Scheduling**: 
  - Users can schedule a meeting with the doctor by selecting a date and time.
  - Fill out additional information, including required and optional fields.
  - Assessment forms for patients to fill before the appointment.
- **Responsive Design**: UI is optimized for various screen sizes for better user experience.
- **Glamorous UI**: Implemented using **Toaster**, **ShadCN**, and **Prisma** to enhance aesthetics and interactivity.

### Frontend Features
- **Next.js**: The frontend is built using Next.js to ensure efficient server-side rendering and smooth client-side navigation.
- **Separate Interfaces for Patients and Doctors**:
  - **Patient Dashboard**:
    - Schedule appointments.
    - Fill in assessment forms (some fields are optional, while others are required).
  - **Doctor Dashboard**: (Another Repository fo)
    - View a list of all patient requests.
    - View and manage patient appointment requests.
    - Access patient-filled assessment forms and update them as necessary.

  
  
### Technologies Used
- **Frontend**: 
  - Next.js
  - ShadCN UI components
  - Toaster notifications
- **Backend**: 
  - Node.js with Express


## How to Run the Project
1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/doctor-portfolio.git
   cd doctor-portfolio
2. Install dependencies:

bash
Copy code
npm install
Set up the environment variables by creating a .env file and configuring the following:

3. Set up the environment variables by creating a .env file and configuring the following:
bash
Copy code
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
Run the development server:

4. Run the development server:
bash
Copy code
npm run dev
The app will be running at http://localhost:3000.
