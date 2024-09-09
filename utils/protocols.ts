import { Href } from "expo-router";

export type OsNameInfo = {
    osName: string | null;
  };

export type InfoUserBaseType = {
  name: string | null; 
  location: string | null; 
  id: number;
  login: string; 
}

export type FollowersNumType = {
  followers: number | null; 
  public_repos: number | null; 
}

export type UserGetType = {
  avatar_url: string | null;
  name: string | null;
  login: string;
  location: string | null;
  id: number;
  followers: number | null;
  public_repos: number | null;
  repos_url: string | null;
}

export type UserRecentsType = {
  avatar_url: string | null;
  name: string | null;
  login: string;
  location: string | null;
  id: number;
  followers: number | null;
  public_repos: number | null;
  repos_url: string | null;
}

export type RepoGetAllType = {
  id: number;
  name: string | null;
  language: string | null;
  description: string | null;
  created_at: string;
  pushed_at: string;
  html_url: Href ;
}[]

export type RepoGetType = {
  name: string | null;
  language: string | null;
  description: string | null;
  created_at: string;
  pushed_at: string;
  html_url: Href;
}