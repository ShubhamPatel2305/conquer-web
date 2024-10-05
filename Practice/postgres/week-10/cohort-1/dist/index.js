"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Function to get the client using your Neon connection string
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://test_owner:fUS1usdiMBH3@ep-patient-lake-a506k544.us-east-2.aws.neon.tech/test?sslmode=require",
            ssl: {
                rejectUnauthorized: false // Enable SSL connection, which is required for Neon
            }
        });
        // Connect to the database
        yield client.connect();
        return client;
    });
}
// Function to create the dummy table
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield getClient();
        try {
            // Create the dummy table
            const createTableQuery = `
            CREATE TABLE IF NOT EXISTS dummy_table (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                age INT NOT NULL
            );
        `;
            yield client.query(createTableQuery);
            console.log("Dummy table created successfully!");
        }
        catch (error) {
            console.error("Error creating the table:", error);
        }
        finally {
            // Always close the client connection
            yield client.end();
        }
    });
}
// Call the createTable function to run the table creation
createTable();
