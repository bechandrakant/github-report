import {GithubApiService} from "./service/GithubApiService";
import { User } from "./model/User";
import { Repo } from "./model/Repo";
import * as _ from "lodash";

const service = new GithubApiService();

if (process.argv.length < 3) {
  console.log ("Please pass username as an argument");
} else {
  const userName = process.argv[2];
  
  service.getUserInfo(userName, (user: User) => {
    service.getRepos(userName, (repos: Repo[]) => {
      let sortedRepo = _.sortBy(repos, (repo: Repo) => repo.size);
      let reverseSortedRepo = _.reverse(sortedRepo);
      let topFive = _.take(reverseSortedRepo, 5);
      user.repos = topFive;
      console.log (user);
    });
  });
}


