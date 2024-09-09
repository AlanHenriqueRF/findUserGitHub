import { Ionicons } from '@expo/vector-icons';
import { styled } from 'styled-components/native';
import { InfoUserBaseType } from '@/utils/protocols';

export function InfoBase({ name, location, id, login }: InfoUserBaseType) {
    return (
        <ContainerBaseInfo>
            <Name>{name ? name : "Error: No Name."}</Name>
            <Login>@{login}</Login>
            <ConatinerLocationId>
                <Ionicons name="locate-outline" size={16} color="#9CA3AF" />
                <Location>{location ? location : "Error: No location."}</Location>
                <Ionicons name="id-card" size={16} color="#9CA3AF" />
                <Id>{id}</Id>
            </ConatinerLocationId>
        </ContainerBaseInfo>
    )
}

const ContainerBaseInfo = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
`

const ConatinerLocationId = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Name = styled.Text`
  color: #E7E7E4;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  max-width: 250px;
  text-align: center;
`

const Login = styled.Text`
  color: #6E6E77;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
`

const Location = styled.Text`
  color: #9CA3AF;
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;
  margin-right: 10px;
`

const Id = styled.Text`
  color: #9CA3AF;
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;
`