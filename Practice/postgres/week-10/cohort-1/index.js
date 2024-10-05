const { Client } = require('pg');

// Function to get the client using your Neon connection string
async function getClient() {
    const client = new Client({
        connectionString: "postgresql://test_owner:fUS1usdiMBH3@ep-patient-lake-a506k544.us-east-2.aws.neon.tech/test?sslmode=require",
        ssl: {
            rejectUnauthorized: false // Enable SSL connection, which is required for Neon
        }
    });

    // Connect to the database
    await client.connect();
    return client;
}

// Function to create the dummy table
async function createTable() {
    const client = await getClient();
    
    try {
        // Create the dummy table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS dummy_table (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                age INT NOT NULL
            );
        `;
        await client.query(createTableQuery);

        console.log("Dummy table created successfully!");

    } catch (error) {
        console.error("Error creating the table:", error);
    } finally {
        // Always close the client connection
        await client.end();
    }
}

// Call the createTable function to run the table creation
createTable();
