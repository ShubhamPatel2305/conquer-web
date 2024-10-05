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
const utils_1 = require("./utils");
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        try {
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
            yield client.query(insertAddressesQuery);
            console.log("Data inserted successfully into 'addresses' table!");
        }
        catch (error) {
            console.error("Error inserting data:", error);
        }
        finally {
            // Always close the connection, even if there is an error
            yield client.end();
            console.log("Client connection closed.");
        }
    });
}
// Call the function to insert data
insertData();
