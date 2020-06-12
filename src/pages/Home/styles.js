import styled from 'styled-components';

import bgHeader from '../../assets/bgHeader.png';
import bgBanner from '../../assets/bgBanner.png';
import adBanner from '../../assets/banner-item-one.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactBar = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 200px;

  background: #80200c;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }
`;

export const Phones = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0px 20px 0 5px;
    color: #fff;
    font-size: 18px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 10px;
    cursor: pointer;

    &:last-child {
      margin: 0;
    }
  }
`;

export const Panel = styled.div`
  display: flex;
  padding: 0px 200px;

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }

  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-bottom: 1px solid #000000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
`;

export const Banner = styled.div`
  background-image: url(${bgHeader});

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 200px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: 5px;
    margin-right: 5px;
    border-right: 2px solid #000;
  }

  span {
    font-weight: bold;
  }
`;

export const BannerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    span {
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;

export const BannerBar = styled.div`
  width: 100%;
  margin-top: 48px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    li {
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WellcomePannel = styled.div`
  background-image: url(${bgBanner});

  height: 200px;
  display: flex;

  color: #80200c;

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }

  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    margin: 20px 0 10px 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;

export const NewsletterBar = styled.div`
  height: 60px;
  padding: 0px 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  height: 35px;
  width: 300px;
  padding: 0 10px;
  margin: 0 20px;
  font-size: 18px;
`;

export const Button = styled.button`
  height: 35px;
  width: 150px;
  border: 0;

  background: #2d8597;

  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const Articles = styled.div`
  margin-top: 40px;
  padding: 0px 200px;

  @media (max-width: 1200px) {
    padding: 0px 100px;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const Article = styled.div`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img`
  height: 250px;
`;

export const Title = styled.h3`
  padding: 10px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

export const Description = styled.p`
  padding: 10px;
  font-size: 18px;
`;

export const BannerHome = styled.img`
  margin: 50px 200px;
  border: 1px solid #ccc;
`;

export const EbookBanner = styled.div`
  margin: 50px 200px;
  height: 400px;
  background: url(${adBanner}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 1200px) {
    margin: 50px 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 200px;

    @media (max-width: 1200px) {
      margin: 50px 100px;
    }

    h2 {
      margin-bottom: 20px;
    }

    button {
      height: 50px;
      width: 300px;
      border-radius: 4px;
      border: 0;

      color: #fff;
      font-size: 18px;
      font-weight: bold;
      background: #df6116;

      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 0 200px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 0 100px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 200px;
    width: 200px;
    border: 1px solid #000;
    background: #ccc;
    border-radius: 50%;
  }

  div {
    display: flex;
    max-width: 500px;

    margin-left: 20px;

    align-items: flex-start;
    flex-direction: column;

    h3 {
      color: #9b1d31;
    }

    p {
      padding: 20px 0px;
      font-size: 18px;
    }
    button {
      display: flex;
      align-items: center;

      padding: 10px 20px;

      border-radius: 4px;
      border: 0;

      color: #fff;
      font-size: 18px;
      font-weight: bold;
      background: #df6116;

      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  background: #eeeeee;
  margin-top: 40px;

  padding: 50px 200px;
  align-items: center;
  justify-content: space-between;
`;

export const Sponsor = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 20px;
  }
`;

export const SocialInfo = styled.div`
  strong {
    font-size: 20px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    cursor: pointer;

    font-size: 20px;

    svg {
      margin-right: 5px;
    }

    &:first-child {
      margin-bottom: 20px;
    }
  }
`;

export const About = styled.div`
  strong {
    font-size: 20px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    cursor: pointer;

    font-size: 20px;

    svg {
      margin-right: 5px;
    }

    &:first-child {
      margin-bottom: 20px;
    }
  }
`;
