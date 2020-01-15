import * as request from "request";
import { User } from "../model/User";
import { Repo } from "../model/Repo";

const OPTIONS = {
  headers: {
    "User-Agent": "request"
  },
  json: true
};

const baseUrl = "https://api.github.com/users/";

export class GithubApiService {
  getUserInfo (userName: string, callbackFunction: (user: User) => any) {
    request.get(baseUrl + userName, OPTIONS, 
                (error: any, response: any, body: any) => {
                  const user = new User(body);
                  callbackFunction(user);
                });
  }

  getRepos(userName: string, callbackFunc: (repos: Repo[]) => any) {
    request.get(baseUrl + userName + "/repos", OPTIONS, (error: any, response:any, body: any) => {
      let repoArray = body;
      let repos = repoArray.map ((repo: any) => new Repo(repo));
      callbackFunc(repos);
    });
  }
}