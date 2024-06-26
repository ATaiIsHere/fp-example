import * as T from "fp-ts/Task";
import { pipe } from "fp-ts/function";
import axios from "axios";
import { printResult, prop } from "./utils";

const getUserTask = () => axios.get("https://randomuser.me/api/");

const result = pipe(
  getUserTask,
  T.map((x) => x.data),
  T.map((x) => x.results),
  T.map((x) => (console.log(x), x))
);
result();

const resultPointFree = pipe(
  getUserTask,
  T.map(prop("data")),
  T.map(prop("results")),
  T.map(printResult)
);
resultPointFree();
