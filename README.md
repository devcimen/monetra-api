# Monetra API

Monetra is a powerful and intuitive expense tracker API designed to help users manage and monitor their financial activities. Built with scalability and simplicity in mind, Monetra provides robust endpoints for tracking expenses, managing categories, generating reports, and more.

---

## Endpoints

### User Authentication
1. **Register User**
   - **Method**: `POST`
   - **Endpoint**: `/api/users/register`
   - **Description**: Create a new user account.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```

2. **Login User**
   - **Method**: `POST`
   - **Endpoint**: `/api/users/login`
   - **Description**: Authenticate a user and return a token.
   - **Request Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```

3. **Get User Profile**
   - **Method**: `GET`
   - **Endpoint**: `/api/users/profile`
   - **Description**: Retrieve the authenticated user's profile.
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

4. **Update User Profile**
   - **Method**: `PUT`
   - **Endpoint**: `/api/users/profile`
   - **Description**: Update the authenticated user's profile.
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

### Expense Management
5. **Create an Expense**
   - **Method**: `POST`
   - **Endpoint**: `/api/expenses`
   - **Description**: Add a new expense.
   - **Request Body**:
     ```json
     {
       "amount": 50.25,
       "category": "Food",
       "description": "Grocery shopping",
       "date": "2025-01-20"
     }
     ```
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

6. **Get All Expenses**
   - **Method**: `GET`
   - **Endpoint**: `/api/expenses`
   - **Description**: Retrieve all expenses for the authenticated user.
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

7. **Get Expense by ID**
   - **Method**: `GET`
   - **Endpoint**: `/api/expenses/:id`
   - **Description**: Retrieve a single expense by its ID.
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

8. **Update an Expense**
   - **Method**: `PUT`
   - **Endpoint**: `/api/expenses/:id`
   - **Description**: Update an expense by its ID.
   - **Request Body** (example):
     ```json
     {
       "amount": 60.00,
       "category": "Dining",
       "description": "Dinner with friends"
     }
     ```
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

9. **Delete an Expense**
   - **Method**: `DELETE`
   - **Endpoint**: `/api/expenses/:id`
   - **Description**: Remove an expense by its ID.
   - **Headers**:
     ```
     Authorization: Bearer <token>
     ```

### Expense Reporting
10. **Get Monthly Report**
    - **Method**: `GET`
    - **Endpoint**: `/api/reports/monthly`
    - **Description**: Get a summary of expenses grouped by category for the current month.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

11. **Get Yearly Report**
    - **Method**: `GET`
    - **Endpoint**: `/api/reports/yearly`
    - **Description**: Get a summary of expenses grouped by category for the current year.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

12. **Export Expenses to CSV**
    - **Method**: `GET`
    - **Endpoint**: `/api/expenses/export`
    - **Description**: Export all expenses to a CSV file.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

---

## Setup
### Prerequisites
- Node.js v16+
- MongoDB Atlas or local MongoDB instance

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/monetra-api.git
   cd monetra-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Testing
- To be added later.


