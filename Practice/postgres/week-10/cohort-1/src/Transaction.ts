/*
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does
*/

import { getClient } from "./utils";

async function insertUserAndAddress() {
    const client = await getClient();

    try {
        // Start transaction
        await client.query('BEGIN');

        // Insert into users
        const insertUserQuery = `
            INSERT INTO users (username, email, password)
            VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123')
            RETURNING id; -- Return the ID of the newly inserted user
        `;
        
        const userResult = await client.query(insertUserQuery);
        const userId = userResult.rows[0].id; // Get the ID of the newly inserted user

        // Insert into addresses using the user ID
        const insertAddressQuery = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, 'New York', 'USA', '123 Broadway St', '10001');
        `;
        
        await client.query(insertAddressQuery, [userId]); // Pass userId as parameter

        // Commit the transaction
        await client.query('COMMIT');
        console.log("User and address inserted successfully!");

    } catch (error) {
        // Rollback in case of error
        await client.query('ROLLBACK');
        console.error("Error inserting data:", error);

    } finally {
        // Always close the connection
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to insert user and address
insertUserAndAddress();
