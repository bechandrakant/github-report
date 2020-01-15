"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("../model/User");
var Repo_1 = require("../model/Repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var baseUrl = "https://api.github.com/users/";
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, callbackFunction) {
        request.get(baseUrl + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            callbackFunction(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, callbackFunc) {
        request.get(baseUrl + userName + "/repos", OPTIONS, function (error, response, body) {
            var repoArray = body;
            var repos = repoArray.map(function (repo) { return new Repo_1.Repo(repo); });
            callbackFunc(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
