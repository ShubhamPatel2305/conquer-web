import { getClient } from "./utils";

async function updateData() {
    const client = await getClient();

    try {
        const updateUserQuery = `
            UPDATE users
            SET username = $1
            WHERE username = $2;
        `;

        const values = ['shubham', 'john_doe'];

        const res:any = await client.query(updateUserQuery, values);
        
        if (res.rowCount > 0) {
            console.log("Username updated successfully from 'john_doe' to 'shubham'!");
        } else {
            console.log("No user found with the username 'john_doe'.");
        }

    } catch (error) {
        console.error("Error updating data:", error);

    } finally {
        // Always close the connection, even if there is an error
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to update data
updateData();
