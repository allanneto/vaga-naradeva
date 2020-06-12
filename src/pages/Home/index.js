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
import Astrologia from '../../assets/astrologiaVedica.jpg';
import Yotisha from '../../assets/learnjyotisha.jpg';
import Nutricao from '../../assets/Nutricao.jpg';
import HomeBanner from '../../assets/BannerHome.png';
import Sponsor1 from '../../assets/avp.png';
import Sponsor2 from '../../assets/escola.png';

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
            <span>Receba novidades do Instituto</span>
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
          <Styled.Article>
            <Styled.Image src={Astrologia} />
            <Styled.Title>
              Atendimento de Jyotisha - Astrologia Védica com Margaret Mahan
              (USA-Canadá)
            </Styled.Title>
            <Styled.Description>
              A leitura natal oferece um retrato dos karmas dominantes presentes
              em sua vida, e lhe dará uma perspectiva para poder explorar os
              pontos fortes e desafios do seu propósito de vida!
            </Styled.Description>
          </Styled.Article>
          <Styled.Article>
            <Styled.Image src={Yotisha} />
            <Styled.Title>
              Ferramentas para a Saúde e a Felicidade: Uma Introdução ao
              Jyotisha!
            </Styled.Title>
            <Styled.Description>
              O workshop está organizado de modo a apresentar ferramentas
              básicas que lhe servirão onde quer que você se encontre na vida.
            </Styled.Description>
          </Styled.Article>
          <Styled.Article>
            <Styled.Image src={Nutricao} />
            <Styled.Title>Consulta de Nutrição com Raissa Faro</Styled.Title>
            <Styled.Description>
              Raissa Faro é nutricionista, com aperfeiçoamento em Alimentação e
              Cultura, pós-graduanda em Ayurveda pelo Instituto Naradeva Shala.
            </Styled.Description>
          </Styled.Article>
        </Styled.Articles>
        <Styled.BannerHome src={HomeBanner} />
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
          <Styled.Article>
            <Styled.Image src={Astrologia} />
            <Styled.Title>
              Atendimento de Jyotisha - Astrologia Védica com Margaret Mahan
              (USA-Canadá)
            </Styled.Title>
            <Styled.Description>
              A leitura natal oferece um retrato dos karmas dominantes presentes
              em sua vida, e lhe dará uma perspectiva para poder explorar os
              pontos fortes e desafios do seu propósito de vida!
            </Styled.Description>
          </Styled.Article>
          <Styled.Article>
            <Styled.Image src={Yotisha} />
            <Styled.Title>
              Ferramentas para a Saúde e a Felicidade: Uma Introdução ao
              Jyotisha!
            </Styled.Title>
            <Styled.Description>
              O workshop está organizado de modo a apresentar ferramentas
              básicas que lhe servirão onde quer que você se encontre na vida.
            </Styled.Description>
          </Styled.Article>
          <Styled.Article>
            <Styled.Image src={Nutricao} />
            <Styled.Title>Consulta de Nutrição com Raissa Faro</Styled.Title>
            <Styled.Description>
              Raissa Faro é nutricionista, com aperfeiçoamento em Alimentação e
              Cultura, pós-graduanda em Ayurveda pelo Instituto Naradeva Shala.
            </Styled.Description>
          </Styled.Article>
        </Styled.Articles>
        <Styled.EbookBanner>
          <div>
            <h2>Oferecer aqui um Ebook</h2>
            <button type="button">Baixar Ebook</button>
          </div>
        </Styled.EbookBanner>
        <Styled.Box>
          <Styled.Profile>
            <img src="" alt="" />
            <div>
              <h3>Loja Online</h3>
              <p>
                Nós oferecemos uma gama completa de produtos de estilo de vida
                Ayurveda. Você pode encomendar por telefone ou online
              </p>
              <button type="button">COMPRAR</button>
            </div>
          </Styled.Profile>
          <Styled.Profile>
            <img src="" alt="" />
            <div>
              <h3>Revista</h3>
              <p>
                Nós oferecemos uma gama completa de produtos de estilo de vida
                Ayurveda. Você pode encomendar por telefone ou online.{' '}
              </p>
              <button type="button">ACESSAR</button>
            </div>
          </Styled.Profile>
        </Styled.Box>
      </Styled.Content>
      <Styled.Footer>
        <Styled.Sponsor>
          <img src={Sponsor1} alt="" />
          <img src={Sponsor2} alt="" />
        </Styled.Sponsor>
        <Styled.SocialInfo>
          <ul>
            <li>
              <strong>REDES SOCIAIS</strong>
            </li>
            <li>
              <FaInstagram size={20} color="black" />
              <span>Blog Naradeva Shala</span>
            </li>
            <li>
              <FaFacebook size={20} color="black" />
              <span>Youtube Naradeva Shala</span>
            </li>
            <li>
              <FaFacebook size={20} color="black" />
              <span>Facebook Naradeva Shala</span>
            </li>
            <li>
              <FaInstagram size={20} color="black" />
              <span>Instagram Naradeva Shala</span>
            </li>
          </ul>
        </Styled.SocialInfo>
        <Styled.About>
          <ul>
            <li>
              <strong>SOBRE</strong>
            </li>
            <li>Quem somos</li>
            <li>Termos de Uso</li>
            <li>Termos de Privacidade</li>
            <li>Propriedade Intelectual</li>
          </ul>
        </Styled.About>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Home;
