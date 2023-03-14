import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 100px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    `

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
    color: ${({ theme }) => theme.textSoft};
`

const Text = styled.span`

`

const Comment = () => {
    return (
        <Container>
            <Avatar src='https://picsum.photos/200/360' />
            <Details>
                <Name>Silvio Gerinald <Date> 1 dia atrás</Date></Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus temporibus optio provident, rem dolorum numquam iste totam facilis distinctio hic perferendis quaerat esse ipsam quod dolores laboriosam ab. Quia.
                </Text>
            </Details>
        </Container>
    )
}

export default Comment