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


document.querySelector(".form").addEventListener("submit", async function(link){
    link.preventDefault();
    let value_search = this.querySelector(".header__searchBox").value;
        
    let result_search = await fetch(keyword_search(value_search), options),
        found_movies  = await result_search.json();
        
    if (found_movies.films.length != 0){
        document.querySelector(".header__NothingFound").classList.add("header__NothingFound_active")
        if(document.querySelector(".slider") != null){
            document.querySelector(".slider").remove()
        }
        create_slider(films_videos, films_img, keyword_search(value_search))
            .then(div_cards => document.querySelector(".header__films").appendChild(new Slider(div_cards).wrapper))

    }else{
        document.querySelector(".slider").remove()
        document.querySelector(".header__NothingFound").classList.remove("header__NothingFound_active")
    }
})

async function create_slider(path_trailer, path_img, path_films){
    let response_films = await fetch(path_films, options),
        initial_films  = await response_films.json();

    let div_card = initial_films.films.map(film  => new Card(film).wrapper);

    div_card.forEach(card => {
        card.querySelector(".card__btn").addEventListener("click", async (event) => {
            let div_title = event.target.closest(".card").querySelector(".card__title").innerText,
                film_year = event.target.closest(".card").querySelector(".card__year").innerText,
                card_info = initial_films.films.find(film => film.nameRu == div_title && film.year == film_year);
                //нахождения того обьекта ,по которому был клик
                let [response_trailer, response_pictures] = await Promise.all([
                                fetch(path_trailer(card_info.filmId), options),
                                fetch(path_img(card_info.filmId),     options)])

                let movie_trailer = await response_trailer.json(),
                    movie_picture = await response_pictures.json();
                
                adding_pictures_modal(movie_picture)
                
                document.querySelector(".modalFilm__title").innerText        = card_info.nameRu;
                document.querySelector(".modalFilm__description").innerText  = card_info.description;
                document.querySelector(".modalFilm__video-item").src         = get_working_link(movie_trailer);
        })
    })
    return div_card
}


create_slider(films_videos, films_img, films)
    .then(div_cards => document.querySelector(".header__films").appendChild(new Slider(div_cards).wrapper))


// async function deduce_random_fact(){
//     return await new Promise(resolve => setInterval(async function(){
//         let get_data   = await fetch(path_facts, options),
//             facts_films = await get_data.json();

//         let rm_fact_index = mtRandom(0,facts_films.length - 1);
//         resolve(get_formatted_fact(facts_films[rm_fact_index]))
//     }, 1000));
// }
// deduce_random_fact().then(random_fact =>{
//     if (random_fact){
//         document.querySelector(".FactLoading").classList.add("FactLoading_active");
//     }
//     document.querySelector(".header__FactFilm-text").innerText = random_fact;
// })




