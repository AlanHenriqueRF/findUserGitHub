import NavBar from '@/components/navBar';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { GITHUB_TOKEN } from '@env';
import { RepoGetAllType } from '@/utils/protocols';
import { InfoBase } from '@/components/infoBase';
import { NumFollowersComponent } from '@/components/numFollowersComponent';
import { RepoComponent } from '@/components/repoComponent';


export default function UserScreen() {
  const { avatar_url, name, login, location, id, followers, public_repos, repos_url, key } = useLocalSearchParams();

  const [repo, setRepo] = useState<RepoGetAllType>([{
    id: 0,
    name: null,
    language: null,
    description: null,
    created_at: '',
    pushed_at: '',
    html_url: 'https://github.com/'
  }])

  useEffect(() => {
    axios.get(`${repos_url}?sort=updated`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
      .then((data) => {
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

      <InfoBase name={name ? name.toString() : null} id={Number(id)} location={location ? location.toString() : null} login={login.toString()} />

      <NumFollowersComponent followers={Number(followers)} public_repos={Number(public_repos)} />

      <ViewRepo>
        <RepoText>Repositories</RepoText>
        <RepoText></RepoText>
      </ViewRepo>

      {repo.length > 0 ?
        repo.map((repository) => {
          return (
            <RepoComponent key={Number(repository.id)} name={repository.name} language={repository.language} description={repository.description}
              created_at={repository.created_at} pushed_at={repository.pushed_at} html_url={repository.html_url} />
          )
        }) : <RepoComponent name={null} language={null} description={null} created_at={''} pushed_at={''} html_url={'https://github.com/'} />}
    </ContainerScreen >
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
  margin-bottom: 23px;
`
