import {GithubApiService} from "./service/GithubApiService";
import { User } from "./model/User";
import { Repo } from "./model/Repo";
import * as _ from "lodash";

const service = new GithubApiService();
const userName = "ckdetected";

service.getUserInfo(userName, (user: User) => {
  service.getRepos(userName, (repos: Repo[]) => {
    let sortedRepo = _.sortBy(repos, (repo: Repo) => repo.size);
    let reverseSortedRepo = _.reverse(sortedRepo);
    let topFive = _.take(reverseSortedRepo, 5);
    user.repos = topFive;
    console.log (user);
  });
});


