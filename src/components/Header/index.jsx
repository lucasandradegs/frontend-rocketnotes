import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/lucasandradegs.png" alt="user picture" />
                <div>
                    <span>Bem vindo,</span>
                    <strong>Lucas Andrade</strong>
                </div>
            </Profile>
        
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}