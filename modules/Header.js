"use strict";


export class Header{
    constructor(){
        this.wrapper = document.createElement("header")
        this.wrapper.classList.add("header")
        this.wrapper.innerHTML = `
                <div class="header__top">
                    <div class="header__topContent container">
                        <div class="header__logo">Ваш любимый <br><span class="header__logoDecor">Кинотеатр</span></div>
                        <div class="header__group modalEntrance__group">
                            <button class="header__SignUp btn header__group_choice title">Sign Up</button>
                            <button class="header__logIn  btn header__group_choice title">Log In</button>
                        </div>
                    </div>
                </div>
                <div class="header__content container">
                    <div class="header__title title">Смотрите фильмы <br> на вашей любимой платформе</div>
                    <div class="header__wrapper">
                        
                    </div>
                </div> `
    }
}
