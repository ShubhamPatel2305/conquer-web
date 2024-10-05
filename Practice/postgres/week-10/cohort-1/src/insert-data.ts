import { getClient } from "./utils";

async function insertData() {
    const client = await getClient();

    try {
        const insertUserQuery = `
            INSERT INTO users (username, email, password)
            VALUES 
                ('john_doe', 'john.doe@example.com', 'password123'),
                ('jane_smith', 'jane.smith@example.com', 'pass456'),
                ('alice_jones', 'alice.jones@example.com', 'securePass789'),
                ('bob_brown', 'bob.brown@example.com', 'pass321'),
                ('charlie_clark', 'charlie.clark@example.com', 'password567'),
                ('dave_evans', 'dave.evans@example.com', 'superSecret234'),
                ('ella_white', 'ella.white@example.com', 'ellapass789'),
                ('frank_green', 'frank.green@example.com', 'greenPassword001'),
                ('george_black', 'george.black@example.com', 'blackPass999'),
                ('helen_gray', 'helen.gray@example.com', 'graySecret456');
        `;

        await client.query(insertUserQuery);
        console.log("Data inserted successfully into 'users' table!");

        const insertAddressesQuery = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES 
                (1, 'New York', 'USA', '123 Main St', '10001'),
                (2, 'Los Angeles', 'USA', '456 Elm St', '90001'),
                (3, 'Chicago', 'USA', '789 Maple St', '60601'),
                (4, 'Houston', 'USA', '101 Pine St', '77001'),
                (5, 'Phoenix', 'USA', '202 Cedar St', '85001'),
                (6, 'Philadelphia', 'USA', '303 Oak St', '19101'),
                (7, 'San Antonio', 'USA', '404 Birch St', '78201'),
                (8, 'San Diego', 'USA', '505 Walnut St', '92101'),
                (9, 'Dallas', 'USA', '606 Cherry St', '75201'),
                (10, 'San Jose', 'USA', '707 Spruce St', '95101');
        `;

        await client.query(insertAddressesQuery);
        console.log("Data inserted successfully into 'addresses' table!");

    } catch (error) {
        console.error("Error inserting data:", error);

    } finally {
        // Always close the connection, even if there is an error
        await client.end();
        console.log("Client connection closed.");
    }
}

// Call the function to insert data
insertData();
