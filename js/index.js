"use strict";

import {Card} from "../modules/Card.js";
import {Header} from "../modules/Header.js";
import {Slider} from "../modules/Slider.js";
import {Form} from "../modules/Form.js";


const path_films = `http://kinopoiskapiunofficial.tech/api/v2.2/films/top`,
    options = {
        headers: {
            'X-API-KEY': '4dc0fb6b-92e7-4e5d-b3c6-960b4ce6443d',
            'Content-Type': 'application/json; charset=UTF-8',
        }
}

    // #00ff6a9a color для label когда поля заполнили верно
document.querySelectorAll(".modalEntrance__group_choice").forEach(button => {
    button.addEventListener("click", function (event){
        if(!button.classList.contains("modalEntrance__group_active")){
            event.target.parentElement.querySelector(".modalEntrance__group_active").classList.remove("modalEntrance__group_active")
            event.target.classList.add("modalEntrance__group_active")
            if (event.target.innerText == "Log In"){
                document.querySelector('.form__SignUp').classList.add("form__active")
                document.querySelector('.form__LogIn').classList.remove("form__active")
            }else{
                document.querySelector('.form__SignUp').classList.remove("form__active")
                document.querySelector('.form__LogIn').classList.add("form__active")
            }
        }
    })
})

let users_rg = []
document.querySelectorAll(".form").forEach(item =>{
    let form = new Form(item);
    
    form.form_Wrapper.addEventListener("submit", (link) =>{
        link.preventDefault();
        console.log(form.get_data())
        let form_data = form.get_data();
        
        let form_email    = form_data[0],
            form_login    = form_data[1],
            form_password = form_data[2];

        if (form.form_Wrapper.classList.contains("form__SignUp")){
            users_rg.push({
                email:form_email,
                login:form_login,
                password:form_password,
            })
            link.target.reset()
        }else{
            let check_data = users_rg.email === form_email && users_rg.login === form_login
                                        && +users_rg.password === +form_password ? true:false;
            console.log(check_data)
        }
        
        // if (modal.validation(link.target, data.add_card) !== false){
        //     link.target.reset()
        // }
    })
})



let header = new Header().wrapper;
document.querySelector(".wrapper").appendChild(header);

document.querySelector(".nav__item_out").addEventListener("click",(event) =>{
    event.target.closest(".nav").classList.toggle("form__active")
    // document.querySelector(".header__group").classList.toggle("profile_active")
})

let slider = create_slider();
slider.then(data => data())

document.querySelector(".modal__close").addEventListener("click", () =>{
    document.querySelector(".modalEntrance").classList.toggle("active")
    document.querySelector(".modalEntrance__group_active").classList.remove("modalEntrance__group_active")
})
document.querySelectorAll(".header__group_choice").forEach(button => {
    button.addEventListener("click", function (){
        document.querySelector(".modalEntrance").classList.toggle("active")
        if(button.classList.contains("header__SignUp")){
            document.querySelector(".modalEntrance__SignUp").classList.add("modalEntrance__group_active")
            
            document.querySelector('.form__SignUp').classList.remove("form__active")
            document.querySelector('.form__LogIn').classList.add("form__active")
        }else{
            document.querySelector(".modalEntrance__logIn").classList.add("modalEntrance__group_active")

            document.querySelector('.form__SignUp').classList.add("form__active")
            document.querySelector('.form__LogIn').classList.remove("form__active")
        }
    })
})

async function create_slider(){
    // Получаем 20 фильмов из кинопоиска
    let response_films = await fetch(path_films, options),
        initial_films  = await response_films.json();
    // Используем замыкание!Чтоб не делать один и тот же запрос
    return function(sorted=false){
        // получаем divs на основе полученной информации о фильмах
        let div_cards = initial_films.films.map(film  => new Card(film).wrapper);
        //Если надо сортируем фильмы: 1.По убыванию 2.По возрастанию
        sorted ? div_cards:div_cards.sort((card_one, card_two) => {
            return (+card_one.querySelector(".card__viewer-rating").innerText -
                +card_two.querySelector(".card__viewer-rating").innerText)
            })
        document.querySelector(".header__wrapper").appendChild(new Slider(div_cards).wrapper)
    }
    
}

document.querySelectorAll(".nav__sorted").forEach(div =>{
    div.addEventListener("click", (event) =>{
         // удаляем начальный слайдер на странице
        document.querySelector(".slider").remove()
        // При клике создаем слайдер на основе выбранного пункта сортировки
        if(event.target.classList.contains("nav__item_best")){
            slider.then(data => data(true))
        }else{
            slider.then(data => data())
        }
    })
})




async function c(){
    let r = await fetch("http://kinopoiskapiunofficial.tech/api/v2.2/films/326", options);
    let q = await r.json();
    console.log(q)
}
c()





