import * as R from "fp-ts/Record";
import { pipe, flow } from "fp-ts/lib/function";
import { User, getUser, getUsers } from "./utils";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";

// Record

const profileKeys: Array<keyof User> = ["name", "gender", "phone", "email"];
const keysFilter = (keys: string[]) => A.filter(([k, _v]) => keys.includes(k));
// const toUserEntries = (user: O.Option<User>) => O.map(R.toEntries)(user);

const getProfile = pipe(
  1,
  getUser,
  O.map(R.toEntries),
  O.map(keysFilter(profileKeys))
  // R.fromEntries
);

// console.log(pipe(getUser, O.map(getProfile))(1));

console.log(getProfile);
