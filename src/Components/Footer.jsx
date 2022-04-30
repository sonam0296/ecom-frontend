import React from 'react'
import styled from 'styled-components'
import {Facebook, Instagram, Mail, MailOutline, Phone, Room, Twitter} from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
    backgroundColor: black
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20px
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`
const Title = styled.h3`
    margin-bottom: 30px
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#eee'})}
`
const Payment = styled.img`
    width: 50%
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SONAM..</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Woman's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/>
                    ABC, Mumbai, Maharastra 
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/>
                    +123456795 
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/>
                    contact@gmail.com 
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
