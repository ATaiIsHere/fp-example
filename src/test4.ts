import { flow, pipe } from "fp-ts/lib/function";
import { getUser, getUserOption, User } from "./utils";
import * as O from "fp-ts/Option";
import * as E from "fp-ts/Either";

const getUserFirstNameImperative = (i: number) => {
  const user = getUser(i);
  if (user) {
    if (user.names[0]) {
      console.log(user.names[0].name);
    } else {
      console.log("User Name Not Found!");
    }
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
    E.fromOption(() => "User Name Not Found!"),
    E.map((x) => x.name)
  );
const getUserFirstName = flow(
  getUserOption,
  E.fromOption(() => "User Not Found!"),
  E.chain(getName),
  E.getOrElse((e) => e),
  console.log
);
getUserFirstName(0);
getUserFirstName(1);
getUserFirstName(5);
