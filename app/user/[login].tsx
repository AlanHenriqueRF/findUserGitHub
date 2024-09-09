import NavBar from '@/components/navBar';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { API_URL, GITHUB_TOKEN } from '@env';
import { RepoGetType, UserGetType } from '@/utils/protocols';
import { InfoBase } from '@/components/infoBase';
import { NumFollowersComponent } from '@/components/numFollowersComponent';

export default function UserScreen() {
  const { login } = useLocalSearchParams();
  const [user, setUser] = useState<UserGetType>({
    avatar_url: null,
    name: null,
    login: null,
    location: null,
    id: null,
    followers: null,
    public_repos: null,
    repos_url: null
  });

  const [repo, setRepo] = useState<RepoGetType>({
    name:  null,
    languages_url: null,
    description: null,
    created_at: null,
    pushed_at: null,
    html_url: null
  })

  useEffect(() => {
    axios.get(`${API_URL}/users/${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
      .then((data) => {
        console.log(data.data)
        setUser(data.data)
      })
      .catch(e => { console.log(e) })
  }, [login])

  return (
    <ContainerScreen>
      <NavBar home={false} />

      <ContainerAvatarUser>
        <ImageUser source={{ uri: `${user.avatar_url}` }} />
      </ContainerAvatarUser>

      <InfoBase name={user.name} id={user.id} location={user.location} login={user.login} key={user.id} />

      <NumFollowersComponent followers={user.followers} public_repos={user.public_repos} />

      <ViewRepo>
        <RepoText>Repositories</RepoText>
        <RepoText></RepoText>
      </ViewRepo>
      
    </ContainerScreen>
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1d1b1b;
`

const ContainerAvatarUser = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 17px;
`

const ImageUser = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 9999px;
`

const ViewRepo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const RepoText = styled.Text`
  color: #9CA3AF;
  font-size: 18px;
  font-weight: 700;
  width: 140px;
  margin-bottom: 16px;
`


