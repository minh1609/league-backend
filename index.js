const api = require("./services/api");

let summonerList = [
    "youichity",
    "minh",
    "killme1fyoucan",
    "jnin",
    "khemistrii"
];

let testAccId = "AbNY9twkfAs6AglYyi5IM2nHqaBqRU2_NucuYGG-7rGpkvE";

const fetchData = async () => {
    let matchList = await api.getMatchListById(testAccId);
    console.log(matchList);
};

fetchData();
