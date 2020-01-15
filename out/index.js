"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./service/GithubApiService");
var _ = __importStar(require("lodash"));
var service = new GithubApiService_1.GithubApiService();
var userName = "ckdetected";
service.getUserInfo(userName, function (user) {
    service.getRepos(userName, function (repos) {
        var sortedRepo = _.sortBy(repos, function (repo) { return repo.size; });
        var reverseSortedRepo = _.reverse(sortedRepo);
        var topFive = _.take(reverseSortedRepo, 5);
        user.repos = topFive;
        console.log(user);
    });
});
