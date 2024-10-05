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
function updateData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        try {
            const updateUserQuery = `
            UPDATE users
            SET username = $1
            WHERE username = $2;
        `;
            const values = ['shubham', 'john_doe'];
            const res = yield client.query(updateUserQuery, values);
            if (res.rowCount > 0) {
                console.log("Username updated successfully from 'john_doe' to 'shubham'!");
            }
            else {
                console.log("No user found with the username 'john_doe'.");
            }
        }
        catch (error) {
            console.error("Error updating data:", error);
        }
        finally {
            // Always close the connection, even if there is an error
            yield client.end();
            console.log("Client connection closed.");
        }
    });
}
// Call the function to update data
updateData();
