import { useEffect, useState } from 'react';
import axios from 'axios';
import AvatarGroup from '../components/AvatarGroup/AvatarGroup';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import { fileStorage } from '../hooks/helpers';
import '../assets/styles/pages/index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Index() {
    const [stars] = useState([
        'https://assets.vogue.com/photos/61d4a842c3cbd1197e7acb1b/1:1/w_2679,h_2679,c_limit/1352199751',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/20210923%E2%80%94Wi_Ha-joon_%EC%9C%84%ED%95%98%EC%A4%80%2C_Squid_Game_promo%2C_ELLE_Taiwan_screenshot_%2805m43s%29.jpg/1200px-20210923%E2%80%94Wi_Ha-joon_%EC%9C%84%ED%95%98%EC%A4%80%2C_Squid_Game_promo%2C_ELLE_Taiwan_screenshot_%2805m43s%29.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTAzYjFiN2EtOTc5YS00NzY4LTg5MWItMTU1YmFkZDdjZGMyXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg',
    ])
    const [movies, setMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const fetchPopularMovie = async () => {
        const { data: { results } } = await axios.get(`${process.env.REACT_APP_API_URI}/3/movie/popular`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                page: 1,
            }
        })
        setMovies(results);
    }

    const fetchTopRatedMovie = async () => {
        const { data: { results } } = await axios.get(`${process.env.REACT_APP_API_URI}/3/movie/top_rated`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                page: 1,
            }
        })
        setTopRated(results);
    }
    
    useEffect(() => {
        fetchPopularMovie();
        fetchTopRatedMovie();
    }, []);

    return (
        <div className="container" style={{ marginTop: '15px', paddingBottom: '20px' }}>
            {/* Banner */}
            <div className="banner-wrapper">
                <div className="banner-content">
                    {/* Starring */}
                    <div className="starring">
                        <h6>Starring</h6>
                        <AvatarGroup size={60} images={stars} />
                    </div>
                    <div className="title">
                        <span>Season 1</span>
                        <h1>Squid Game</h1>
                    </div>
                    <div className="watch">
                        <a href='/news'>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z"/></svg>
                            </div>
                            Watch now
                        </a>
                    </div>
                </div>
            </div>
            {/* Popular Section */}
            <section className="section">
                <div className="section-header">
                    <h1>Popular on Netflix</h1>
                </div>
                <Swiper
                    style={{ padding: '25px' }}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        1024: {
                            slidesPerView: 4, 
                        },
                        1440: {
                            slidesPerView: 6, 
                        },
                    }}
                >
                    {
                        movies.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Link to={`movie/${item.id}`}>
                                        <Card title={item.title} 
                                            star={item.vote_average} 
                                            seasons={item.seasons} 
                                            poster={fileStorage(item.poster_path)} 
                                        />
                                    </Link>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </section>
            <section className="section">
                <div className="section-header">
                    <h1>Top rated</h1>
                </div>
                <Swiper
                    style={{ padding: '25px' }}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        1024: {
                            slidesPerView: 4, 
                        },
                        1440: {
                            slidesPerView: 6, 
                        },
                    }}
                >
                    {
                        topRated.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card title={item.title} 
                                        star={item.vote_average} 
                                        seasons={item.seasons} 
                                        poster={fileStorage(item.poster_path)} 
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </section>
        </div>
    ); 
}