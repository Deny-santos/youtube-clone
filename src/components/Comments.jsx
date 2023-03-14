import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`

`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`

const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
    color: ${({ theme }) => theme.text};
`

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://picsum.photos/200/360' />
                <Input placeholder='Adicionar Comentario ...' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />

        </Container>
    )
}

export default Comments