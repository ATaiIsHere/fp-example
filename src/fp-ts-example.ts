import * as R from "fp-ts/Record";
import { pipe } from "fp-ts/lib/function";
import { User, getUser, getUsers } from "./utils";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";

// Record

const profileKeys: Array<keyof User> = ["name", "gender", "phone", "email"];
const keysFilter = (keys: string[]) =>
  A.filter((key: string) => keys.includes(key));
// const toUserEntries = (user: O.Option<User>) => O.map(R.toEntries)(user);

const getProfile = pipe(
  O.map(R.toEntries),
  keysFilter(profileKeys)
  // R.fromEntries
);

// console.log(pipe(getUser, O.map(getProfile))(1));

// console.log(profile);

console.log(getProfile(getUser(1) as any));
