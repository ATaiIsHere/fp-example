import * as T from "fp-ts/Task";
import { pipe } from "fp-ts/function";
import axios from "axios";

const getUserTask = () => axios.get("https://randomuser.me/api/");
const printResult = (x: any) => (console.log(x), x);

const result = pipe(
  getUserTask,
  T.map((x) => x.data),
  T.map((x) => x.results),
  T.map(printResult)
)();
