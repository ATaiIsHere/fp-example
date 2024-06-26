import * as R from "fp-ts/Record";
import { pipe } from "fp-ts/lib/function";
import { User, getUser } from "./utils";
import * as O from "fp-ts/Option";

const partialUser: Partial<User> = {
  // name: 'John Doe',
  gender: "male",
  phone: "123-456-7890",
  email: "john.doe@example.com",
};

const keysToFilter: Array<keyof User> = ["name", "gender", "phone", "email"];

const filteredPartialUser = pipe(
  partialUser,
  R.filterWithIndex((key, _value) => keysToFilter.includes(key as keyof User))
);

console.log(filteredPartialUser);
