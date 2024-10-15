import React from 'react';
import $ from 'jquery';
import 'reset-css';
import './App.css'
import './fonts/stylesheet.css'

function link(url: string) {
    return window.location.href = url;
}
const App = () => {
    return (
        <div className="main">
            <div className="left_block">
                <div className="logo_and_search">
                    <img className='cps_logo' src="./assets/cps.svg" />
                    <img className='search' src="./assets/search.svg" />
                </div>
                <div className="nav_items">
                    <div className="item">
                        <span>Ремонт техники</span>
                    </div>
                    <div className="item">
                        <span>Услуги и сервисы</span>
                    </div>
                    <div className="item">
                        <span>Корпоративным клиент</span>
                    </div>
                    <div className="item">
                        <span>Продавцам техники</span>
                    </div>
                    <div className="item">
                        <span>Партнерам</span>
                    </div>
                    <div className="item">
                        <span>Производителям</span>
                    </div>
                    <div className="item">
                        <span>Наши сервисные центр</span>
                    </div>
                    <div className="item">
                        <span>Контакты</span>
                    </div>
                </div>
                <div className="info_block">
                    <div className="icons">
                        <img className='icon_img' src="./assets/phone.svg" />
                        <img className='icon_img2' src="./assets/chat.svg" />
                        <img className='icon_img3' src="./assets/profile.svg" />
                    </div>
                    <div className="email">
                        <span className='info_block_email'>mail@cps.com</span>
                    </div>
                    <div className="number">
                        <span>8 800 890 8900</span>
                    </div>
                    <div className="language">
                        <span>RU</span>
                        <span className='EN'>EN</span>
                        <span>CH</span>
                    </div>
                </div>
            </div>
            <div className="main_block">
                <header>
                    <div className="main_header">
                        <div className="title">
                            <h1>Услуги и сервисы</h1>
                        </div>
                        <div className="navs">
                            <div className="block1">
                                <span className='header_text'>Статус ремонта</span>
                                <img src="./assets/repair.svg" />
                            </div>
                            <div className="block2">
                                <span className='header_text'>Статус ремонта</span>
                                <img src="./assets/checkstatus.svg" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main_main">
                    <div className="slider">
                        <div className="slider_buttons">
                            <button className="slider_button">
                                Ремонтируемые бренды
                            </button>
                            <button className="slider_button">
                                Ремонтируемые устрой
                            </button>
                            <button className="slider_button">
                                Цены на услуги
                            </button>
                            <button className="slider_button">
                                Адреса сервисных центров
                            </button>
                            <button className="slider_button">
                                Специальные цены
                            </button>
                            <button className="slider_button">
                                Отзывы
                            </button>
                        </div>
                    </div>
                    <main className="article">
                        <div className="article_text">
                            <span>Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. <br /><br />Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким</span>
                            <div className='article_next'>
                                <img className='article_next_img' src="./assets/expect.svg" alt="" />
                                <span>Читать дальше</span>
                            </div>
                        </div>
                        <img className='cps_img' src="./assets/ec28084f3de98850700667e14dbc02fd.png" />
                    </main>
                    <div className="repair_technique">
                        <span>Ремонт техники различных брендов</span>
                        <div className="brands_list1">
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/lenovo.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/samsung.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/apple.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/viewsonic.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                        </div>
                        <div className="brands_list2">
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/bosh.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/hp.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/acer.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/sony.png" />
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                        </div>
                    </div>
                    <div className='article_next'>
                        <img className='article_next_img' src="./assets/expect.svg" alt="" />
                        <span>Показать все</span>
                    </div>
                    <div className="repair_technique_dows">
                        <span>Ремонт различных видов техники</span>
                        <div className="brands_list1">
                            <div className="brand_block_down">
                                <span>Ремонт ноутбуков</span>
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block_down">
                                <span>Ремонт планшетов</span>
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block_down">
                                <span>Ремонт ПК</span>
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                            <div className="brand_block_down">
                                <span>Ремонт  мониторов</span>
                                <img className='borrow_img' src="./assets/borrow.svg" />
                            </div>
                        </div>
                    </div>
                    <span className='span_price'>ЦЕНЫ НА УСЛУГИ</span>
                    <div className="price_block">
                        <table>
                            <thead>

                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;
