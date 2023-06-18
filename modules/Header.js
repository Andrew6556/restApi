"use strict";


export class Header{
    constructor(){
        this.wrapper = document.createElement("header")
        this.wrapper.classList.add("header")
        this.wrapper.innerHTML = `
                <div class="header__top">
                    <div class="header__topContent container">
                        <div class="header__logo">Ваш любимый <br><span class="header__logoDecor">Кинотеатр</span></div>
                        <div class="header__filter">
                            <div class="header__filterText">
                                Сортировать фильмы
                            </div>
                            <div class="header__filterImg">
                                <img class="header__filterImg-item" src="./img/icon/down-arrow.png" alt="arrow">
                            </div>
                            <ul class="header__filterMenu form__active">
                                <li class="header__filterMenu-item header__filterMenu-item_growth">По возрастанию</li>
                                <li class="header__filterMenu-item header__filterMenu-item_decrease">По убыванию</li>
                            </ul>
                        </div>
                        <div class="header__group modalEntrance__group">
                            <button class="header__SignUp btn header__group_choice title">Sign Up</button>
                            <button class="header__logIn  btn header__group_choice title">Log In</button>
                        </div>
                        <nav class="nav">
                            <div class="nav__profile">
                                <div class="nav__profile-img">
                                    <img class="nav__profile-item" src="/img/icon/profile/avatar.svg" alt="profile">
                                </div>
                                <ul class="nav__menu">
                                    <li class="nav__item">
                                        <span>Signed in as</span>
                                        <p class="nav__userName">Andre9qsq2</p>
                                    </li>
                                    <li class="nav__item nav__item_fall">
                                        <p>Sort movies</p>
                                        <ul class="nav__list">
                                            <li class="nav__item nav__item_Descending">Descending</li>
                                            <li class="nav__item nav__item_Ascending">Ascending</li>
                                        </ul>
                                    </li>
                                    <li class="nav__item">View favorites</li>
                                    <li class="nav__item">Sign out</li>
                                </ul>
                                
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="header__content container">
                    <div class="header__title title">Смотрите фильмы <br> на вашей любимой платформе</div>
                    <div class="header__wrapper">
                        
                    </div>
                </div> `
    }
}
