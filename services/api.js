const axios = require("axios");

exports.baseApi = axios.default.create({
    baseURL: "https://na1.api.riotgames.com/lol",
    params: {
        api_key: "RGAPI-a81cf8ec-3f4b-40f8-9f0d-dcf6ef52b944"
    }
});

//return user basic info
exports.getSummonerByName = async (name, server = "na1") => {
    try {
        let response = await this.baseApi.get(
            "/summoner/v4/summoners/by-name/" + name
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

//Note: timeStamp in millisecond from big to small
exports.getMatchListById = async (accId, server = "na1") => {
    try {
        let response = await this.baseApi.get(
            "/match/v4/matchlists/by-account/" + accId,
            {
                params: {}
            }
        );

        return response.data;
    } catch (err) {
        return err;
    }
};

//exports.baseApi = baseApi;
