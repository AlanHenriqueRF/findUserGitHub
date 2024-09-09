import NavBar from '@/components/navBar';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { API_URL, GITHUB_TOKEN } from '@env';
import { RepoGetType } from '@/utils/protocols';
import { InfoBase } from '@/components/infoBase';
import { NumFollowersComponent } from '@/components/numFollowersComponent';

export default function UserScreen() {
  const {avatar_url, name, login, location, id, followers, public_repos, repos_url} = useLocalSearchParams();
  console.log(avatar_url, name, login, location, id, followers, public_repos, repos_url)

  const [repo, setRepo] = useState<RepoGetType>({
    name:  null,
    languages_url: null,
    description: null,
    created_at: null,
    pushed_at: null,
    html_url: null
  })

  useEffect(() => {
    axios.get(`${repos_url}?sort=updated`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
      .then((data) => {
        console.log(data.data)
        setRepo(data.data)
      })
      .catch(e => { console.log(e) })
  }, [repos_url])

  return (
    <ContainerScreen>
      <NavBar home={false} />

      <ContainerAvatarUser>
        <ImageUser source={{ uri: `${avatar_url}` }} />
      </ContainerAvatarUser>

      <InfoBase name={name.toString()} id={Number(id)} location={location.toString()} login={login.toString()} key={id.toString()} />

      <NumFollowersComponent followers={Number(followers)} public_repos={Number(public_repos)} />

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


