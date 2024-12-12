import React from 'react';
import $ from 'jquery';
import 'reset-css';
import './App.css'
import './fonts/stylesheet.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function link(url: string) {
    return window.location.href = url;
}
const App = () => {
    return (
        <div className="main">
            <div className="left_block">
                <div className="logo_and_search">
                    <img className='logo' src="./assets/Group (1).png" />
                    <img className='search' src="./assets/search.svg" />
                </div>
                <div className="uslugi">
                    <a href="" className="link_uslugi">Ремонт техники</a>
                    <a href="" className="link_uslugi">Услуги и сервисы</a>
                    <a href="" className="link_uslugi">Корпоративным клиентам</a>
                    <a href="" className="link_uslugi">Продавцам техники</a>
                    <a href="" className="link_uslugi">Партнерам</a>
                    <a href="" className="link_uslugi">Производителям</a>
                    <a href="" className="link_uslugi">Наши сервисные центры</a>
                    <a href="" className="link_uslugi">Контакты</a>
                </div>
                <div className="contacts">
                    <div className="contacts_icons">
                        <img src="./assets/chat copy.png" />
                        <img src="./assets/chat.png" />
                        <img src="./assets/chat copy.png" />
                    </div>
                    <div className="email">
                        <span>mail@cps.com</span>
                    </div>
                    <div className="number">
                        <span>8 800 890 8900</span>
                    </div>
                    <div className="lang">
                        <a href="">RU</a>
                        <a href="">EN</a>
                        <a href="">CH</a>
                    </div>
                </div>
            </div>
            <div className="gl">
                <div className="sd_header">
                    <h2>Услуги и сервисы</h2>
                    <div className="rem_and_status">
                        <div className="rem">
                            <span>Оставить заявку</span>
                            <img src="./assets/repair.png" />
                        </div>
                        <div className="status">
                            <span>Статус ремонта</span>
                            <img src="./assets/checkstatus.png" />
                        </div>
                    </div>
                </div>
                <div className="s_r">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <a className="swiper_link first">
                                Ремонтируемые бренды
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Дополнительные услуги
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Цены на услуги
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Адреса сервисных центров
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Специальные цены
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Отзывы
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="asd">
                    <div className="text_sajd">
                        <span>
                            Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                            <br />   <br />
                            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                        </span>
                        <div className="next">
                            <img src="./assets/expand.png" />
                            <span>Читать далее</span>
                        </div>
                    </div>
                    <img className='sdfaa' src="./assets/_MG_3223.png" alt="" />
                </div>
                <div className="rem_raz">
                    <h3>РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h3>
                    <div className="rem_raz_brand">
                        <div className="block1">
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (1).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (2).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (3).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>
                        <div className="block2">
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (4).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (5).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (6).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap.svg" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>
                        <div className="block3">
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/aoc-logo.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/asus-logo.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1699016410-0-red-sol.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1699019750-0-itel_pn.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>
                        <div className="block4">
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1730818628-0-Artel-02.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1657285728-0-nw-xerox-logo.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1699020139-0-sber_dev_pn.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo' src="./assets/1699888133-0-soon-logo.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="rem_raz_brand_swiper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1150: {
                                    slidesPerView: 3,
                                },
                                1398: {
                                    slidesPerView: 4,
                                },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (1).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (2).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (3).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (4).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (5).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (6).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap.svg" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/aoc-logo.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/asus-logo.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1699016410-0-red-sol.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1699019750-0-itel_pn.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1730818628-0-Artel-02.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1657285728-0-nw-xerox-logo.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1699020139-0-sber_dev_pn.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo' src="./assets/1699888133-0-soon-logo.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="vidi_tex">
                    <h3>РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h3>
                    <div className="rem_sada">
                        <div className="jksdfk">
                            <span>Ремонт ноутбуков</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт планшетов</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт ПК</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт мониторов</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                    </div>
                    <div className="rem_sada_swiper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1.2}
                        >
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт ноутбуков</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт планшетов</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт ПК</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт мониторов</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="next">
                        <img src="./assets/expand.png" />
                        <span>Показать все</span>
                    </div>
                </div>
                <div className="usl">
                    <h3>ЦЕНЫ НА УСЛУГИ</h3>
                    <table className="services_table">
                        <thead>
                            <tr>
                                <th>Ремонтные услуги</th>
                                <th>Цена</th>
                                <th>Срок</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Диагностика</td>
                                <td>Бесплатно</td>
                                <td>30 мин</td>
                                <td><button className="knopka">Заказать</button></td>
                            </tr>
                            <tr>
                                <td>Замена дисплея</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать</button></td>
                            </tr>
                            <tr>
                                <td>Замена полифонического динамика</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать</button></td>
                            </tr>
                            <tr>
                                <td>Тестирование с выдачей технического заключения</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать</button></td>
                            </tr>
                            <tr>
                                <td>Замена программного обеспечения</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default App;
