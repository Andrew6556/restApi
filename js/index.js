"use strict";

import {Card} from "../modules/Card.js";
import {Header} from "../modules/Header.js";
import {Slider} from "../modules/Slider.js";
import {Form} from "../modules/Form.js";


let path_films = `http://kinopoiskapiunofficial.tech/api/v2.2/films/top`;


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

// console.log(document.querySelectorAll(".form"))
document.querySelectorAll(".form").forEach(item =>{
    let form = new Form(item);
    form.form_Wrapper.addEventListener("submit", (link) =>{
        link.preventDefault();
        console.log(form.get_data())
        // if (modal.validation(link.target, data.add_card) !== false){
        //     link.target.reset()
        // }
    })
})





















let options = {
    headers: {
        'X-API-KEY': '4ed6a4de-1c65-48b4-9d9b-922f9cfbd78e',
        'Content-Type': 'application/json; charset=UTF-8',
    }
}


let header = new Header().wrapper;
document.querySelector(".wrapper").appendChild(header);

document.querySelector(".modal__close").addEventListener("click", () =>{
    document.querySelector(".modalEntrance").classList.toggle("active")
})
// document.querySelector

// document.querySelector(".form").addEventListener("submit", async function(link){
//     link.preventDefault();
//     let value_search = this.querySelector(".header__searchBox").value;
        
//     let result_search = await fetch(keyword_search(value_search), options),
//         found_movies  = await result_search.json();
        
//     if (found_movies.films.length != 0){
//         document.querySelector(".header__NothingFound").classList.add("header__NothingFound_active")
//         if(document.querySelector(".slider") != null){
//             document.querySelector(".slider").remove()
//         }
//         create_slider(films_videos, films_img, keyword_search(value_search))
//             .then(div_cards => document.querySelector(".header__films").appendChild(new Slider(div_cards).wrapper))

//     }else{
//         document.querySelector(".slider").remove()
//         document.querySelector(".header__NothingFound").classList.remove("header__NothingFound_active")
//     }
// })

async function create_slider(sorted=true){
    let response_films = await fetch(path_films, options),
        initial_films  = await response_films.json();

    let div_cards = initial_films.films.map(film  => new Card(film).wrapper);
    if (sorted){
        div_cards.sort((card_one, card_two) => {
            return +card_one.querySelector(".card__viewer-rating").innerText - +card_two.querySelector(".card__viewer-rating").innerText
        })
    }   
    document.querySelector(".header__wrapper").appendChild(new Slider(div_cards).wrapper)
}

create_slider()


async function c(){
    let r = await fetch("http://kinopoiskapiunofficial.tech/api/v2.2/films/326", options);
    let q = await r.json();
    console.log(q)
    // "http://kinopoiskapiunofficial.tech/api/v1/staff/435"
    // /api/v1/persons
    // console.log(q.films[0].genres.map(item => item.genre).join(", "))
}
c()





