import * as R from "fp-ts/Record";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";
import { flow, pipe } from "fp-ts/lib/function";

type Item = {
  name: string;
  price: number;
};

type User = {
  money: number;
  items: string[];
};

const user = {
  money: 100,
  items: [],
};

const items = [
  {
    name: "apple",
    price: 50,
  },
  {
    name: "pen",
    price: 10,
  },
  {
    name: "pineapple",
    price: 99,
  },
];

const findItem = (name: string) =>
  pipe(
    items.find((x) => x.name === name),
    O.fromNullable
  );
const transaction = (item: Item) => (user: User) =>
  user.money >= item.price
    ? {
        money: user.money - (item?.price ?? 0),
        items: [...user.items, item.name],
      }
    : { ...user };
const buy = flow(findItem, O.orElse(), transaction);
const showBalance = (user: User) => (console.log(user), user);

pipe(
  user,
  buy("apple"),
  buy("pineapple"),
  buy("pen"),
  buy("pen"),
  buy("apple"),
  showBalance
);
