import axios from "axios";
import * as O from "fp-ts/Option";

export type User = {
  gender: "female" | "male";
  names: { lang: string; name: string }[];
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

export const printResult = <T>(x: T): T => (console.log(x), x);
export const labelResult =
  (label: string) =>
  <T>(x: T): T => (console.log(`${label}:`, x), x);

export const getUsersTask = () =>
  axios.get("https://randomuser.me/api/?results=5");

export const getUsers: () => User[] = () => [
  {
    gender: "male",
    names: [
      {
        lang: "en_US",
        name: "Joona",
      },
    ],
    name: {
      title: "Mr",
      first: "Joona",
      last: "Korhonen",
    },
    location: {
      street: {
        number: 4859,
        name: "Rautatienkatu",
      },
      city: "Teuva",
      state: "Päijät-Häme",
      country: "Finland",
      postcode: 75398,
      coordinates: {
        latitude: "-24.7712",
        longitude: "-173.8747",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "joona.korhonen@example.com",
    login: {
      uuid: "5567ad9b-18d1-4cf7-8ad3-cf1a34c33c90",
      username: "ticklishelephant786",
      password: "papa",
      salt: "dGZgV7EX",
      md5: "4a806c356c666b9595c127b0d3c16450",
      sha1: "1a518fde22beb34f297422a4f7784538906e60c6",
      sha256:
        "e416dec234e3d6f52ee0d62fdf96e19480407d8a83ca26d4d7e35be876284ab4",
    },
    dob: {
      date: "2000-11-03T17:20:45.746Z",
      age: 23,
    },
    registered: {
      date: "2003-12-13T22:28:21.465Z",
      age: 20,
    },
    phone: "03-272-275",
    cell: "040-710-09-47",
    id: {
      name: "HETU",
      value: "NaNNA183undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    names: [],
    name: {
      title: "Ms",
      first: "Carla",
      last: "Carrasco",
    },
    location: {
      street: {
        number: 1668,
        name: "Calle de Segovia",
      },
      city: "Pamplona",
      state: "Cantabria",
      country: "Spain",
      postcode: 96677,
      coordinates: {
        latitude: "45.4567",
        longitude: "-140.4215",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "carla.carrasco@example.com",
    login: {
      uuid: "10f7c1c4-5922-4aa2-9a4f-e9f82be4868a",
      username: "happyleopard694",
      password: "laser",
      salt: "3M0IlS6r",
      md5: "6d4ccd00c7d46f92c09a56b348323fab",
      sha1: "531e32a6bb2114cf00859417ebf7351b2b4426ff",
      sha256:
        "ea3826e4de400e0d51275c0e9cbfb68a1700beeaff604d012db0ba5795234e05",
    },
    dob: {
      date: "1947-01-30T10:50:57.603Z",
      age: 77,
    },
    registered: {
      date: "2015-08-26T16:50:23.155Z",
      age: 8,
    },
    phone: "939-824-358",
    cell: "633-070-869",
    id: {
      name: "DNI",
      value: "26761643-C",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    },
    nat: "ES",
  },
  {
    gender: "male",
    names: [],
    name: {
      title: "Monsieur",
      first: "Fabian",
      last: "Da Silva",
    },
    location: {
      street: {
        number: 6130,
        name: "Rue Bony",
      },
      city: "Luins",
      state: "Graubünden",
      country: "Switzerland",
      postcode: 8625,
      coordinates: {
        latitude: "-82.2921",
        longitude: "59.7072",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "fabian.dasilva@example.com",
    login: {
      uuid: "45ed4769-d650-4c0e-bf4a-ca2a6612142e",
      username: "angryfrog104",
      password: "yeah",
      salt: "60Vh0Zbe",
      md5: "70f2de7a59b2beeb63eb9e23ffff6b2b",
      sha1: "15b7b8aeb3bd428e1a00e71e3ef95207dd383b03",
      sha256:
        "8e5e26184b4c4dec2b95f77fae3d65e3764b492b1eea1ace9b053b58a2947fff",
    },
    dob: {
      date: "1985-02-20T23:14:16.472Z",
      age: 39,
    },
    registered: {
      date: "2013-01-13T21:51:10.552Z",
      age: 11,
    },
    phone: "077 227 98 05",
    cell: "075 750 80 11",
    id: {
      name: "AVS",
      value: "756.8835.6564.09",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    names: [],
    name: {
      title: "Mr",
      first: "Mauri",
      last: "da Cunha",
    },
    location: {
      street: {
        number: 99,
        name: "Rua São Paulo ",
      },
      city: "São Bernardo do Campo",
      state: "Goiás",
      country: "Brazil",
      postcode: 10069,
      coordinates: {
        latitude: "20.3498",
        longitude: "-28.1393",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "mauri.dacunha@example.com",
    login: {
      uuid: "85eefc1f-d01f-4050-b8bd-634cfe180b90",
      username: "sadwolf970",
      password: "studly",
      salt: "wKafZJQQ",
      md5: "b8b65432a3be96e891db8789d05e2d0c",
      sha1: "2fd009ad50ce67dd2be981a1440666f4972104e1",
      sha256:
        "515054cbde41df38c8553fba33511b7e755a2feeea9b5dffcdc9b67e9b3f5a9d",
    },
    dob: {
      date: "1973-12-24T00:33:43.112Z",
      age: 50,
    },
    registered: {
      date: "2013-08-28T03:22:41.954Z",
      age: 10,
    },
    phone: "(81) 4425-5831",
    cell: "(60) 2220-3734",
    id: {
      name: "CPF",
      value: "507.596.619-52",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
    },
    nat: "BR",
  },
  {
    gender: "female",
    names: [],
    name: {
      title: "Ms",
      first: "Peyton",
      last: "Sims",
    },
    location: {
      street: {
        number: 3214,
        name: "Washington Ave",
      },
      city: "Geelong",
      state: "Victoria",
      country: "Australia",
      postcode: 5239,
      coordinates: {
        latitude: "71.0609",
        longitude: "-151.5971",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "peyton.sims@example.com",
    login: {
      uuid: "22cd5899-a70f-412a-8c0c-d405901d9bad",
      username: "ticklishtiger953",
      password: "heng",
      salt: "KQmrQNue",
      md5: "da66d43509f629906c386a96784cd3b1",
      sha1: "9af83d7bda1ca33f0432a2e57ae8c1535be4bf01",
      sha256:
        "290827126d0dcdc8691620450031f502683e9158292cc4329019939befaeb88d",
    },
    dob: {
      date: "1952-06-03T11:34:21.028Z",
      age: 72,
    },
    registered: {
      date: "2013-06-24T21:26:03.901Z",
      age: 11,
    },
    phone: "05-1257-9808",
    cell: "0427-055-035",
    id: {
      name: "TFN",
      value: "613348679",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/41.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
    },
    nat: "AU",
  },
];

export const getUser = (i: number) => getUsers()[i];
export const getUserOption = (i: number) => O.fromNullable(getUsers()[i]);
export const prop =
  <M>(key: keyof M) =>
  (map: M) =>
    map[key];
