import { flow, pipe } from "fp-ts/lib/function";
import { getUser, getUserOption, User } from "./utils";
import * as O from "fp-ts/Option";

const getUserFirstNameImperative = (i: number) => {
  const user = getUser(i);
  if (user && user.names[0]) {
    console.log(user.names[0].name);
  } else {
    console.log("User Not Found!");
  }
};
getUserFirstNameImperative(0);
getUserFirstNameImperative(1);
getUserFirstNameImperative(5);

// fp-ts
const getName = (user: User) =>
  pipe(
    user,
    (x) => O.fromNullable(x.names[0]),
    O.map((x) => x.name)
  );
const getUserFirstName = flow(
  getUserOption,
  O.chain(getName),
  O.getOrElse(() => "User Not Found!"),
  console.log
);
getUserFirstName(0);
getUserFirstName(1);
getUserFirstName(5);
