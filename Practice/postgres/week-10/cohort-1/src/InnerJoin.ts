import { getClient } from "./utils";

async function fetchUserAddresses(userId: number) {
    const client = await getClient();

    try {
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1;
        `;

        const res = await client.query(query, [userId]);

        if (res.rows.length > 0) {
            console.log("User and Address Details:");
            res.rows.forEach(row => {
                console.log(`ID: ${row.id}, Username: ${row.username}, Email: ${row.email}, City: ${row.city}, Country: ${row.country}, Street: ${row.street}, Pincode: ${row.pincode}`);
            });
        } else {
            console.log(`No addresses found for user with ID: ${userId}`);
        }
    } catch (error) {
        console.error("Error fetching user addresses:", error);
    } finally {
        await client.end();
        console.log("Client connection closed.");
    }
}

// Replace with the desired user ID
const userIdToFetch = 1; // Change this value as needed
fetchUserAddresses(userIdToFetch);
