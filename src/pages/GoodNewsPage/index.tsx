import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';
import { maxLenght } from '../../utils/index.js';

import Carousel from '../../components/Carousel';
import {
  Container,
  Card,
  CarouselContainer,
  SSkeletonLine,
  Footer,
} from './styles';
import 'react-multi-carousel/lib/styles.css';

import Logo from '../../assets/images/Logo.svg';
import ButtonNavigation from '../../components/ButtonNavigation';

interface GoodNewsInterface {
  id: string;
  tag: string;
  title: string;
  image: string;
}

const LandinPage: React.FC = () => {
  const [goodNews, setGoodNews] = useState<GoodNewsInterface[]>([]);

  useEffect(() => {
    async function loadgoodNews(): Promise<void> {
      await api.get('goodnews').then(res => setGoodNews(res.data));
    }

    loadgoodNews();
  }, []);

  return (
    <>
      <Container>
        <header>
          <main>
            <img src={Logo} alt="Good News" />
            <p>
              Um portal para você que ama ler e compartilhar boas notícias, bons
              exemplos de felicidade e esperança. Não noticiamos tragédias, só
              casos com final feliz. Torne o dia mais leve e inspirador, fique
              por dentro dos mais diversos temas: amor próprio, registros de
              generosidade, solidariedade e etc...
            </p>
          </main>
          <nav>
            <ButtonNavigation
              url="/posts"
              width="180px"
              height="60px"
              color="#005288"
            >
              PUBLICAR
            </ButtonNavigation>
          </nav>
        </header>
      </Container>
      <Footer>
        <CarouselContainer className="react-multi-carousel-list">
          {goodNews.length < 1 ? (
            <>
              <Carousel className="imagem-item" deviceType="desktop">
                {[...new Array(6)].map(index => (
                  <Card key={index + 1}>
                    <div className="center-cropped">
                      <img
                        src="https://dapp.dblog.org/img/default.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <section className="body">
                      <p>
                        <SSkeletonLine />
                      </p>
                      <h2>
                        <SSkeletonLine />
                        <SSkeletonLine />
                      </h2>
                      <footer>
                        <ButtonNavigation
                          url="/"
                          width="45px"
                          height="45px"
                          color="#005288"
                        >
                          <FiArrowRight />
                        </ButtonNavigation>
                      </footer>
                    </section>
                  </Card>
                ))}
              </Carousel>
            </>
          ) : (
            <>
              <Carousel className="imagem-item" deviceType="desktop">
                {goodNews
                  .slice(Math.max(goodNews.length - 5, 0))
                  .map(goodNew => (
                    <Card key={goodNew.id}>
                      <div className="center-cropped">
                        <img src={goodNew.image} alt={goodNew.title} />
                      </div>
                      <section className="body">
                        <p>{goodNew.tag}</p>
                        <h2>{maxLenght(goodNew.title)}</h2>
                        <footer>
                          <ButtonNavigation
                            url={`/posts/${goodNew.id}`}
                            width="45px"
                            height="45px"
                            color="#005288"
                          >
                            <FiArrowRight />
                          </ButtonNavigation>
                        </footer>
                      </section>
                    </Card>
                  ))}
              </Carousel>
            </>
          )}
        </CarouselContainer>
        <small>© Copyright 2020 - Good News</small>
      </Footer>
    </>
  );
};

export default LandinPage;
