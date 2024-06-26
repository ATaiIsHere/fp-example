import * as O from "fp-ts/Option";
import { labelResult, printResult } from "./utils";
import { pipe } from "fp-ts/lib/function";

pipe(O.of(1), labelResult("Option(1)"));
pipe(O.of(0), labelResult("Option(0)"));
pipe(O.of(undefined), labelResult("Option(undefined)"));
pipe(O.of(null), labelResult("Option(undefined)"));
pipe(O.none, labelResult("Option()"));

const half = (x: number) => (x % 2 === 0 ? O.of(x / 2) : O.none);

pipe(O.of(2), O.map(half), labelResult("Option(2) map half"));
pipe(O.of(1), O.map(half), labelResult("Option(1) map half"));

pipe(O.of(half), labelResult("Option(half)"));

pipe(O.of(half), O.ap(O.of(2)), labelResult("Option(half) ap Option(2)"));
pipe(O.of(half), O.ap(O.of(2)), labelResult("Option(half) ap Option(1)"));

// pipe();
