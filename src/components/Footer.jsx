
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components'
import { MailOutline, Phone, Room } from '@mui/icons-material';





const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;


const Title = styled.h3`
    margin-bottom: 30px;
`;


const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`;


const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
`;


const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
    return (
    <Container>
            <Left>
                <Logo>M&G</Logo>
                <Desc>Creating clothing patterns for mass production. Testing and deciding on fabrics, colors, patterns and textures for each design. Overseeing the production of designs, including carrying out fittings, determining prices and managing marketing. Maintaining relationships with vendors, suppliers and models.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="ff0000"> 
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    </SocialIcon>

                <SocialIcon color="3B5999">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </SocialIcon>

                <SocialIcon color="000">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </SocialIcon>

                <SocialIcon color="2dba4e">
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </SocialIcon>
                </SocialContainer>
        </Left>

    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>

            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 35 Ghorab Street , Queswena City , Egypt
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +20 0109 738 3935
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@mohamed.com
            </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
)
}

export default Footer
