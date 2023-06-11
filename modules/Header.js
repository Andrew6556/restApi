"use strict";


export class Header{
    constructor(){
        this.wrapper = document.createElement("header")
        this.wrapper.classList.add("header")
        this.wrapper.innerHTML = `
                <div class="header__top">
                    <div class="header__topContent container">
                        <div class="header__logo">Ваш любимый <br><span class="header__logoDecor">Кинотеатр</span></div>
                        <form class="form" action="#">
                            <input class="header__searchBox" type="text" name="Search" placeholder="Фильмы, сериалы, персоны">
                            <button type="submit" class="form__btn"><img class="form__btn-svg" src="./img/icon/searchBox/search.svg" alt="search"></button>
                        </form>
                    </div>
                    <!-- header__topContent -->
                </div>
                <div class="header__content container">
                    <div class="header__title title">Смотрите фильмы <br> на вашей любимой платформе</div>
                    <div class="header__wrapper">
                        <div class="header__films">
                            <div class="header__NothingFound header__NothingFound_active">Ничего не найдено</div>
                        </div>
                    </div>
                </div> `
    }
}