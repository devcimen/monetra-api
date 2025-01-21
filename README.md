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
    - **Description**: Filter expenses based on predefined, custom date ranges, or any attribute. The filtered results can also be exported to a CSV file.
    - **Query Parameters**:
      - `range`: Predefined ranges such as `past_week`, `past_month`, `last_3_months`.
      - `start_date`: Custom start date for filtering (e.g., `2025-01-01`).
      - `end_date`: Custom end date for filtering (e.g., `2025-01-31`).
      - `category`: Filter expenses by category (e.g., `Food`, `Transport`).
      - `description`: Filter expenses by partial or full description match.
      - `min_amount`: Filter for expenses greater than or equal to a certain amount.
      - `max_amount`: Filter for expenses less than or equal to a certain amount.
      - `export`: Optional. If set to `true`, the filtered data will be exported as a CSV file.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```
    - **Example Request**:
      ```
      GET /api/expenses/filter?category=Food
      GET /api/expenses/filter?start_date=2025-01-01&end_date=2025-01-31
      GET /api/expenses/filter?min_amount=50&max_amount=100&export=true
      ```

---

### Category Management
11. **Create a Category**
    - **Method**: `POST`
    - **Endpoint**: `/api/categories`
    - **Description**: Add a new category for expenses.
    - **Request Body**:
      ```json
      {
        "name": "Food",
        "description": "Expenses related to food and dining"
      }
      ```
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

12. **Get All Categories**
    - **Method**: `GET`
    - **Endpoint**: `/api/categories`
    - **Description**: Retrieve all categories created by the user.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

13. **Update a Category**
    - **Method**: `PUT`
    - **Endpoint**: `/api/categories/:id`
    - **Description**: Update the details of a specific category.
    - **Request Body**:
      ```json
      {
        "name": "Transportation",
        "description": "Expenses related to travel and commuting"
      }
      ```
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

14. **Delete a Category**
    - **Method**: `DELETE`
    - **Endpoint**: `/api/categories/:id`
    - **Description**: Delete a specific category by its ID.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

### Income and Savings Management
15. **Add Income**
    - **Method**: `POST`
    - **Endpoint**: `/api/income`
    - **Description**: Add monthly income for the user.
    - **Request Body**:
      ```json
      {
        "amount": 5000.00,
        "currency": "USD"
      }
      ```
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

16. **Get Income**
    - **Method**: `GET`
    - **Endpoint**: `/api/income`
    - **Description**: Retrieve the user's income.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

17. **Update Income**
    - **Method**: `PUT`
    - **Endpoint**: `/api/income`
    - **Description**: Update the user's income.
    - **Request Body**:
      ```json
      {
        "amount": 6000.00,
        "currency": "EUR"
      }
      ```
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

18. **Add Recurring Expense**
    - **Method**: `POST`
    - **Endpoint**: `/api/recurring`
    - **Description**: Add a recurring expense.
    - **Request Body**:
      ```json
      {
        "amount": 200.00,
        "category": "Rent",
        "description": "Monthly rent",
        "interval": "monthly"
      }
      ```
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

19. **Get Recurring Expenses**
    - **Method**: `GET`
    - **Endpoint**: `/api/recurring`
    - **Description**: Retrieve all recurring expenses for the user.
    - **Headers**:
      ```
      Authorization: Bearer <token>
      ```

### Multi-Currency Support
20. **Supported Currencies**
    - USD, EUR, GBP, CHF (Swiss Franc)
    - All endpoints involving amounts will respect the selected currency.

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


