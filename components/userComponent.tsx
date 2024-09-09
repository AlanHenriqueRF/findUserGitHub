import { UserGetType } from "@/utils/protocols"
import { Link } from "expo-router"
import { View } from "react-native"
import { styled } from "styled-components/native"
import { Ionicons } from '@expo/vector-icons';

export function UserComponent({ avatar_url, name, login, location, id, followers, public_repos, repos_url }: UserGetType) {
    return (
        <Link
            href={{
                pathname: `/user/[login]`,
                params: {
                    avatar_url: avatar_url, name: name, login: login?.toString(),
                    location: location, id: id, followers: followers,
                    public_repos: public_repos, repos_url: repos_url
                }
            }}
            style={{ marginLeft: 20, marginBottom: 20, marginRight: 20 }}>
            <ContainerUser $user={true} >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <ImageUser
                        source={{ uri: `${avatar_url}` }}
                    />
                    <View>
                        <NameSearched>{name ? name : "Error: No name."}</NameSearched>
                        <UserLoginSearched>{login}</UserLoginSearched>
                        <CitySearched>{location ? location : "Error: No location."}</CitySearched>
                    </View>
                </View>
                <IconUser>
                    <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
                </IconUser>
            </ContainerUser>
        </Link>
    )
}

const ContainerUser = styled.View<{ $user: boolean; }>`
  height: 116px;
  ${props => props.$user ? 'width: 100%' : ""};
  border: 0.3px solid #9CA3AF;
  border-radius: 10px;
  background-color: #111111;
  margin: ${props => props.$user ? '0px' : "0px 20px 20px 20px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const ImageUser = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 9999px;
  margin: 0 16px;
`

const NameSearched = styled.Text`
  color: #E7E7E4;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
  margin-right: 20px;
  max-width: 160px;
`

const UserLoginSearched = styled.Text`
  color: #6B7280;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 2px;
`

const CitySearched = styled.Text`
  color: #9CA3AF;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 2px;
`

const IconUser = styled.View`
  margin-right: 16px;
`
