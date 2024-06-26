import { flow } from "fp-ts/lib/function";
import { getUser, getUserOption, User } from "./utils";
import * as O from "fp-ts/Option";

const getUserFirstNameImperative = (i: number) => {
  const user = getUser(i);
  if (user) {
    console.log(user.name.first);
  } else {
    console.log("User Not Found!");
  }
};

getUserFirstNameImperative(0);
getUserFirstNameImperative(1);
getUserFirstNameImperative(5);

// fp-ts
const getFirstName = (user: User) => user.name.first;
const getUserFirstName = flow(
  getUserOption,
  O.map(getFirstName),
  O.getOrElse(() => "User Not Found!"),
  console.log
);

getUserFirstName(0);
getUserFirstName(1);
getUserFirstName(5);
