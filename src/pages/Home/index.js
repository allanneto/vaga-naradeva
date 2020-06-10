import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaHome,
  FaGlobe,
  FaRegPlayCircle,
  FaCalendar,
} from 'react-icons/fa';

import LogoNara from '../../assets/logoNaradevaShalaTransp.png';
import Yoga from '../../assets/ioga.jpg';

import * as Styled from './styles';

function Home() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ContactBar>
          <Styled.Phones>
            <FaPhone size={25} color="white" />
            <span>(11) 3862.7321</span>
            <FaWhatsapp size={30} color="white" />
            <span>(11) 94748.9690</span>
          </Styled.Phones>
          <Styled.Socials>
            <FaYoutube size={35} color="white" />
            <FaFacebook size={35} color="white" />
            <FaTwitter size={35} color="white" />
            <FaInstagram size={35} color="white" />
          </Styled.Socials>
        </Styled.ContactBar>
        <Styled.Panel>
          <Styled.Banner>
            <Styled.Logo>
              <img src={LogoNara} alt="" />
              <span>
                Escola <br />
                Latino Americana <br />
                de Ayurveda
              </span>
            </Styled.Logo>
            <Styled.BannerMenu>
              <li>
                <FaHome size={40} color="#80200c" />
                <span>Cursos Presenciais</span>
              </li>
              <li>
                <FaGlobe size={40} color="#80200c" />
                <span>Cursos Online</span>
              </li>
              <li>
                <FaRegPlayCircle size={40} color="#80200c" />
                <span>Vídeos</span>
              </li>
              <li>
                <FaCalendar size={40} color="#80200c" />
                <span>Calendário</span>
              </li>
            </Styled.BannerMenu>
          </Styled.Banner>
          <Styled.BannerBar>
            <ul>
              <li>Quem Somos</li>
              <li>Atendimentos e Tratamentos</li>
              <li>Profissionais</li>
              <li>Programação</li>
              <li>Cursos</li>
              <li>Aulas de Yoga</li>
              <li>Viagens e Retiro</li>
              <li>Artigos</li>
              <li>Localização</li>
              <li>Fale conosco</li>
            </ul>
          </Styled.BannerBar>
        </Styled.Panel>
      </Styled.Header>
      <Styled.Content>
        <Styled.Section>
          <Styled.WellcomePannel>
            <h2>Bem-vindo ao</h2>
            <h1>Instituto de Culta Hindu Naradeva Shala</h1>
          </Styled.WellcomePannel>
          <Styled.NewsletterBar>
            <span>Receba Novidades do Instituto</span>
            <Styled.Input placeholder="Digite seu nome" />
            <Styled.Input placeholder="Digite seu email" />
            <Styled.Button>Receber</Styled.Button>
          </Styled.NewsletterBar>
        </Styled.Section>
        <Styled.Articles>
          <Styled.Article>
            <Styled.Image src={Yoga} />
            <Styled.Title>
              Formação e Aprimoramento em Yoga - São Paulo / SP
            </Styled.Title>
            <Styled.Description>
              Curso Livre de Formação e Aprimoramento em Yoga e PósGraduação
              Lato Sensu em Yoga (MEC) - Nova turma em março de 2019. Vagas
              limitadas
            </Styled.Description>
          </Styled.Article>
        </Styled.Articles>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Home;
