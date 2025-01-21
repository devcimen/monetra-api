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

### Expense Filtering and Export
10. **Filter and Export Expenses**
    - **Method**: `GET`
    - **Endpoint**: `/api/expenses/filter`
    - **Description**: Filter expenses based on predefined or custom date ranges. The filtered results can also be exported to a CSV file.
    - **Query Parameters**:
      - `range`: Predefined ranges such as `past_week`, `past_month`, `last_3_months`.
      - `start_date`: Custom start date for filtering (e.g., `2025-01-01`).
      - `end_date`: Custom end date for filtering (e.g., `2025-01-31`).
      - `export`: Optional. If set to `true`, the filtered data will be exported as a CSV file.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```
    - **Example Request**:
      ```
      GET /api/expenses/filter?range=past_month
      GET /api/expenses/filter?start_date=2025-01-01&end_date=2025-01-31
      GET /api/expenses/filter?start_date=2025-01-01&end_date=2025-01-31&export=true
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


