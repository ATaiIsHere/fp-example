import { flow } from "fp-ts/lib/function";
import { getUser, User } from "./utils";

const getFirstName = (user: User) => user.name.first;
const getUserFirstName = flow(getUser, getFirstName, console.log);

getUserFirstName(0);
getUserFirstName(1);
getUserFirstName(5);

// const getName = (user: User) => user.names[0].name;
// const getUserName = flow(getUser, getName, console.log);
// getUserName(0);
// getUserName(1);
// getUserName(5);
