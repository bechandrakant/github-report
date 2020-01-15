import {GithubApiService} from "./service/GithubApiService";
import { User } from "./model/User";
import { Repo } from "./model/Repo";

const service = new GithubApiService();
const userName = "ckdetected";

service.getUserInfo(userName, (user: User) => {
  console.log(user);
});

service.getRepos(userName, (repos: Repo[]) => {
  console.log (repos);
});

