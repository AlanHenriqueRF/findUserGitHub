import { styled } from "styled-components/native"
import { Ionicons } from '@expo/vector-icons';
import { RepoGetType } from "@/utils/protocols";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { formatDate } from "@/utils/formatDate";

export function RepoComponent({ name, language, description, created_at, pushed_at, html_url }: RepoGetType) {
    const router = useRouter();
    return (
        <>
        {name ? 
            <Pressable onPress={() => router.push(html_url)}>
                <RepoContainer>
                    <NameRepoAndLanguageContainer>
                        <Ionicons name="git-branch-outline" size={22} color="#9CA3AF" />
                        <NameRepo>{name}</NameRepo>
                    </NameRepoAndLanguageContainer>

                    <NameRepoAndLanguageContainer>
                        <Ionicons name="terminal-outline" size={18} color="#6E6E77" />
                        <LanguageRepo>{language ? language : 'NO LANGUAGE DETECTED'}{ }</LanguageRepo>
                    </NameRepoAndLanguageContainer>

                    <NameRepoAndLanguageContainer>
                        <DescriptionText>{description ? description : 'NO DESCRIPTION'}</DescriptionText>
                    </NameRepoAndLanguageContainer>

                    <NameRepoAndLanguageContainer>
                        <LanguageRepo>Created at: {formatDate(created_at)}</LanguageRepo>
                    </NameRepoAndLanguageContainer>

                    <NameRepoAndLanguageContainer>
                        <LanguageRepo>Pushed at: {formatDate(pushed_at)}</LanguageRepo>
                    </NameRepoAndLanguageContainer>
                    
                </RepoContainer>
            </Pressable> : <></>}
        </>
    )
}

const RepoContainer = styled.View`
  margin: 0 40px 20px 40px ;
  border: 1px solid #E4E4E7;
  background-color: #1D1B1B;
  border-radius: 8px;
  padding-top: 26px;
  display:  flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`

const NameRepoAndLanguageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 8px;
`

const NameRepo = styled.Text`
  color: #9CA3AF;
  font-size: 16px;
  font-weight: 600;
  padding-top: 4px;
  margin-left: 3px;
`

const LanguageRepo = styled.Text`
  color: #6E6E77;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
`

const DescriptionText = styled.Text`
  color: #6E6E77;
  font-size: 16px;
  font-weight: 400;
  max-width: 250px;
  margin-top: 25px;
  margin-bottom: 35px;
  text-align: center;
`