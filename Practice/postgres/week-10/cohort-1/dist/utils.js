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
exports.getClient = getClient;
const pg_1 = require("pg");
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://test_owner:fUS1usdiMBH3@ep-patient-lake-a506k544.us-east-2.aws.neon.tech/test?sslmode=require",
            ssl: {
                rejectUnauthorized: false // Enable SSL connection, which is required for Neon
            }
        });
        try {
            // Connect to the database
            yield client.connect();
            console.log("Client connected successfully");
            return client;
        }
        catch (error) {
            console.error("Error connecting to the database:", error);
            throw error;
        }
    });
}
