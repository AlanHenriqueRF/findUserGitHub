import { styled } from "styled-components/native";
import * as Device from 'expo-device';
import { OsNameInfo } from '@/utils/protocols';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function NavBar() {
    const [osName, setosName] = useState<OsNameInfo>({
        osName: null
    });

    useEffect(() => {
        const info = {
            osName: Device.osName,
        };
        setosName(info);
    }, []);

    return (
        <>
            <ContainerNav $marginOs={osName.osName === "iOS" ? '55px 25px 25px 25px' : '20px'}>
                <Link href={'https://github.com/'}>
                    <Ionicons name="logo-github" size={50} color="#ffffff" />
                </Link>
            </ContainerNav>
        </>
    );
}

const ContainerNav = styled.View<{ $marginOs?: string; }>`
    background-color: #111111;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.$marginOs};
`