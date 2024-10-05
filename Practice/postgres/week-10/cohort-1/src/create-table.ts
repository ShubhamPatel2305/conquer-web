import { getClient } from "./utils";

async function createTable() {
    const client = await getClient();

    try {
        const createUserTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await client.query(createUserTableQuery);
        console.log("Table 'users' created successfully!");

        const createAddressTableQuery = `
            CREATE TABLE addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(20),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `;

        await client.query(createAddressTableQuery);
        console.log("Table 'addresses' created successfully!");

    } catch (error) {
        console.error("Error creating table:", error);

    } finally {
        // Always close the connection, even if there is an error
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to create the table
createTable();
