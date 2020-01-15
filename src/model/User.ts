import { Repo } from "./Repo";

class User {
  login?: string;
  fullName?: string;
  repoCount?: number;
  followerCount?: number;
  repos?: Repo[];
}