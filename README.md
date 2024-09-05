## Login and Registration with Email Verification Project

This project is a web application that implements login and registration functionality with email verification, using **Laravel**, **Inertia.js**, and **React**.

## Technologies Used

- **Laravel**: PHP framework for backend management and API.
- **Inertia.js**: Allows the use of React with Laravel without the need for a separate API.
- **React**: JavaScript library for building interactive user interfaces.
- **Tailwind CSS (optional)**: For quick and customized styling.

## Main Features

- **User Registration**: Allows users to sign up with their email and password.
- **Login**: Authentication for registered users.
- **Email Verification**: After registration, an email is sent with a verification link.
- **Route Protection**: Only verified users can access certain sections of the application.
- **Password Reset**: Users can request a link to reset their password in process.

## Prerequisites

Before you begin, make sure you have the following tools installed on your system:

- **[PHP](https://www.php.net/downloads.php)**
- **[Composer](https://getcomposer.org/download/)**
- **[Node.js](https://nodejs.org/)**

## Instalación

1. Clone this repository to your local machine.
2. Run `composer install` to install Laravel dependencies.
3. Run `npm install` to install Node.js dependencies.
4. Copy the `.env.example` file and rename it to `.env`. Then, configure the environment variables according to your development setup.
5. Run `php artisan key:generate` to generate a new application key.
6. Run `php artisan storage:link` to create a symbolic link for storing images and other assets
7. Run `php artisan migrate --seed` to migrate the database and seed it with initial data.
8. Run `php artisan serve` to start the development server.

```sh
git clone https://github.com/Alexander-hub37/Inertia-Auth.git
cd Inertia-Auth
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
npm run dev
```
## Usage

1. Visit `http://localhost:8000` to access the application.
2. Register as a new user, and you will receive a verification email.
3. After verifying your email, you can access the protected routes in the application.

## Project Structure

1. Backend (Laravel): Handles authentication logic, email verification, and route protection.
2. Frontend (React): UI components for login, registration, and dashboard, rendered through Inertia.js.
3. Email Verification: Laravel sends email verification links to newly registered users.

## License

Feel free to use and re-use any way you want.