import { Container, Links } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

        <ButtonText title="Excluir nota"/>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>      
        </Section>

        <Section title="Marcadores">
          <Tags title="express" /> 
          <Tags title="nodejs" /> 

        </Section>

        <Button title="Voltar"/>
      </Container>
    )
}