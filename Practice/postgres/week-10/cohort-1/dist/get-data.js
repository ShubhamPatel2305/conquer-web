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
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        try {
            const getUserQuery = `
            SELECT * FROM users
            WHERE username LIKE '%_%';
        `;
            const res = yield client.query(getUserQuery);
            if (res.rows.length > 0) {
                console.log("Users with an underscore in their username:");
                res.rows.forEach(user => {
                    console.log(`ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, Created At: ${user.created_at}`);
                });
            }
            else {
                console.log("No users found with an underscore in their username.");
            }
        }
        catch (error) {
            console.error("Error retrieving data:", error);
        }
        finally {
            // Always close the connection, even if there is an error
            yield client.end();
            console.log("Client connection closed.");
        }
    });
}
// Call the function to get data
getData();
