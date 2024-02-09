import { fetchUserData } from "./index.ts" with {type:"macro"};
const userName=fetchUserData();
console.log(userName);