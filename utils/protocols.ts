export type OsNameInfo = {
    osName: string | null;
  };

export type InfoUserBaseType = {
  name: string | null; 
  location: string | null; 
  id: number | null; 
  login: string | null; 
}

export type FollowersNumType = {
  followers: number | null; 
  public_repos: number | null; 
}

export type UserGetType = {
  avatar_url: string | null;
  name: string | null;
  login: string | null;
  location: string | null;
  id: number | null;
  followers: number | null;
  public_repos: number | null;
  repos_url: string | null;
}

export type RepoGetType = {
  name: string | null;
  languages_url: string | null;
  description: string | null;
  created_at: string | null;
  pushed_at: string | null;
  html_url: string | null;
}