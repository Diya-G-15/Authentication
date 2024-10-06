# React Registration and Login Form

This project is a **React.js-based registration and login form** that allows users to create an account, store their details locally, and log in with their registered credentials. User information is stored in the **localStorage** of the browser, ensuring persistence across sessions.

## Features

- **User Registration**: Users can sign up by providing their name, email, and password.
- **LocalStorage Integration**: The registered user data (name, email, password) is saved to the browser's `localStorage` to maintain information even after a page reload or browser restart.
- **User Login**: Registered users can log in using their email and password.
- **Form Validation**: Basic client-side validation is implemented to ensure all fields are filled out correctly.
- **Responsive Design**: The form layout adjusts for various screen sizes, including desktops, tablets, and mobile devices.
- **Modern Styling**: The form uses a split-screen design, with a background image on one side and the registration/login form on the other side. Gradient backgrounds and a clean UI are used for better visual appeal.

## Demo
![image](https://github.com/user-attachments/assets/20d810fc-52bb-47ee-8787-9ae804e7a226)

![image](https://github.com/user-attachments/assets/0b51f65e-2d34-49ed-9da5-4ef295f3de5a)

![image](https://github.com/user-attachments/assets/1b367be7-6179-4922-8fd6-bb3b55404042)


*A sample screenshot of the registration form.*

## Technologies Used

- **React.js**: For building the user interface and managing the component state.
- **JavaScript (ES6+)**: For handling logic and interactions.
- **CSS**: For styling and layout.
- **localStorage**: To persist user registration data.
- **HTML5**: For form elements.

## Setup Instructions

To get the project running locally on your machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Diya-G-15/Authentication.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Authentication
   ```

3. **Install dependencies:**

   Make sure you have Node.js installed. Then, install the required dependencies by running:

   ```bash
   npm install
   ```

4. **Run the project locally:**

   Start the development server:

   ```bash
   npm start
   ```

5. **Open your browser:**

   Navigate to `http://localhost:3000` to view the application.

## localStorage Functionality

- When a user registers, their **name, email, and password** are stored in the browser’s `localStorage`.
- On login, the user’s credentials are checked against the stored data in `localStorage`.
- **Logout** functionality can easily be added by clearing the stored session or data.

## How It Works

1. **Registration**:
   - User fills out the registration form with name, email, and password.
   - On successful form submission, the data is stored in `localStorage`.
   - User gets redirected to the login page.

2. **Login**:
   - The login form checks the entered credentials against the stored data.
   - If correct, the user is successfully logged in and can be redirected to the protected dashboard.

## Customization

To customize the form design, you can modify the `styles.css` file. The background image, gradient colors, and button styles are all configurable from the CSS file.

## Future Enhancements

- **Form Validation**: Implement more robust validation (e.g., checking for password strength, email formats, etc.).
- **Backend Integration**: Store user data on a server for a full-stack solution.
- **Forgot Password**: Implement password recovery functionality.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and submit pull requests. All contributions are welcome!
