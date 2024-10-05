import { getClient } from "./utils";

async function getData() {
    const client = await getClient();

    try {
        const getUserQuery = `
            SELECT * FROM users
            WHERE username LIKE '%_%';
        `;

        const res = await client.query(getUserQuery);
        
        if (res.rows.length > 0) {
            console.log("Users with an underscore in their username:");
            res.rows.forEach(user => {
                console.log(`ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, Created At: ${user.created_at}`);
            });
        } else {
            console.log("No users found with an underscore in their username.");
        }

    } catch (error) {
        console.error("Error retrieving data:", error);

    } finally {
        // Always close the connection, even if there is an error
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to get data
getData();
