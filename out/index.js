"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./service/GithubApiService");
var service = new GithubApiService_1.GithubApiService();
var userName = "ckdetected";
service.getUserInfo(userName, function (user) {
    console.log(user);
});
service.getRepos(userName, function (repos) {
    console.log(repos);
});
