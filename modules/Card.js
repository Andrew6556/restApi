"use strict";

export class Card{
    constructor(data){
        this.info_data = data;
        this.wrapper   = document.createElement("div");
        this.wrapper.classList.add("card");
        this.wrapper.innerHTML = `
                <div class="card__img">
                    <img class="card__img-item" src="${data.posterUrl}" alt="#">
                </div>
                <div class="card__title title">${data.nameRu}</div>
                <div class="card__inner">
                    <div class="card__wrapper">
                        <p class="card__text">Режиссер:<span class="card__decor">Классный</span></p>
                        <p class="card__text">Год выпуска:<span class="card__decor card__year">${data.year}</span></p>
                        <p class="card__text">Оценка зрителей:<span class="card__viewer-rating card__decor">${data.rating}</span></p>
                        <p class="card__text">Жанры:<span class="card__viewer-rating card__decor">${this.genres()}</span></p>
                    </div>
                </div>`;
    }
    genres = () => this.info_data.genres.splice(0, 3).map(item => item.genre).join(", ");
}
