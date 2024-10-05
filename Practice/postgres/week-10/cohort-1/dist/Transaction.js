"use strict";
/*
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails?
This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does
*/
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
const utils_1 = require("./utils");
function insertUserAndAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        try {
            // Start transaction
            yield client.query('BEGIN');
            // Insert into users
            const insertUserQuery = `
            INSERT INTO users (username, email, password)
            VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123')
            RETURNING id; -- Return the ID of the newly inserted user
        `;
            const userResult = yield client.query(insertUserQuery);
            const userId = userResult.rows[0].id; // Get the ID of the newly inserted user
            // Insert into addresses using the user ID
            const insertAddressQuery = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, 'New York', 'USA', '123 Broadway St', '10001');
        `;
            yield client.query(insertAddressQuery, [userId]); // Pass userId as parameter
            // Commit the transaction
            yield client.query('COMMIT');
            console.log("User and address inserted successfully!");
        }
        catch (error) {
            // Rollback in case of error
            yield client.query('ROLLBACK');
            console.error("Error inserting data:", error);
        }
        finally {
            // Always close the connection
            yield client.end();
            console.log("Client connection closed.");
        }
    });
}
// Call the function to insert user and address
insertUserAndAddress();
