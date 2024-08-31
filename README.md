# Sales Admin Panel

**Sales Admin Panel** is a MERN fullstack admin panel that visualizes sales, revenues, and client data through infographics, tables, graphs, and maps. The project uses React.js for the frontend, Node.js for the backend, and MUI/CSS for styling, offering a responsive user experience.

## Screenshots

Here are some screenshots of the Sales Admin Panel:

#### Dashboard Overview and Sales Infographics
<p align="center">
  <img src="./screenshots/dashboard%20Screenshot.png" alt="Dashboard Overview" width="45%">
  <img src="./screenshots/sales%20screenshot.png" alt="Sales Infographics" width="45%">
</p>

#### Customers Data Table and Products Overview
<p align="center">
  <img src="./screenshots/customers%20screenshot.png" alt="Customer Data Table" width="45%">
  <img src="./screenshots/products%20overview.png" alt="Products Overview" width="45%">
</p>

#### Map Visualization
<p align="center">
  <img src="./screenshots/map%20screenshot.png" alt="Map Visualization" width="90%">
</p>

##### Live Demo
You can view the live version of the Sales Admin Panel here:
[**Live Demo Link**](https://admin-panel-client.onrender.com/)

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Project Structure

The project is organized into two main folders:

- **api/**: Contains the Node.js backend code.
- **client/**: Contains the React frontend code.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Ebukachuqz/fullstack-admin-panel-MERN.git
cd fullstack-admin-panel-MERN
```

### 2. Backend Setup (Node.js)

Navigate to the `api` folder:

```bash
cd api
```

#### 2.1 Environment Variables

Create a `.env` file in the `api` directory and add the following environment variables:

```env
MONGO_DB_URL=your_mongodb_connection_string
PORT=your_preferred_port_number
```
Example is in `.env.local` file

#### 2.2 Install Dependencies

Install the necessary packages:

```bash
npm install
```

#### 2.3 Load Mock Data

To load mock data into MongoDB, uncomment the following lines in the `index.js` file (lines 61-66):

```javascript
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
```

#### 2.4 Start the Backend Server

Run the following command to start the server locally:

```bash
npm run dev
```

Once the server is running, you can comment those lines back to prevent reloading mock data on every server start.

### 3. Frontend Setup (React.js)

Open a new terminal window, then navigate to the `client` folder:

```bash
cd ../client
```

#### 3.1 Install Dependencies

Install the necessary packages:

```bash
npm install
```

#### 3.2 Start the Frontend Server

Start the React frontend:

```bash
npm start
```

## Usage

- The backend server will be available at `http://localhost:<PORT> | 4004` (as defined in the `.env` file).
- The frontend will run on `http://localhost:3000`.

## Contribution Guidelines

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License.
