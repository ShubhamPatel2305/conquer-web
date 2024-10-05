import { Client } from 'pg';

export async function getClient() {
    const client = new Client({
        connectionString: "postgresql://test_owner:fUS1usdiMBH3@ep-patient-lake-a506k544.us-east-2.aws.neon.tech/test?sslmode=require",
        ssl: {
            rejectUnauthorized: false // Enable SSL connection, which is required for Neon
        }
    });

    try {
        // Connect to the database
        await client.connect();
        console.log("Client connected successfully");
        return client;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}
