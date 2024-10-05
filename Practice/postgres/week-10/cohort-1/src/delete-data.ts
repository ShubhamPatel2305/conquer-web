import { getClient } from "./utils";

async function deleteUser(username: string) {
    const client = await getClient();

    try {
        // SQL query to delete the user with the specified username
        const deleteUserQuery = `
            DELETE FROM users
            WHERE username = $1;
        `;

        // Execute the query with the username as a parameter
        const result = await client.query(deleteUserQuery, [username]);
        console.log(`Deleted ${result.rowCount} user(s) with username: ${username}`);

    } catch (error) {
        console.error("Error deleting user:", error);

    } finally {
        // Always close the connection
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to delete the user with username "Mox"
deleteUser("Mox");
