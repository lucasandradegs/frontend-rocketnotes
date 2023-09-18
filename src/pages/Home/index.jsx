import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'


export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    function handleTagsSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName)
        
        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags();
    }, [])

    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        onClick={() => handleTagsSelected("all")}
                        $isactive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagsSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'Introdução ao Node + React',
                        tags: [{ id: '1', name: 'React' },
                        { id: '2', name: 'nodejs' }]
                    }} />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}