"use strict";

export default class Modal{
    constructor(data){
        this.modalWrapper = data;
        this.modalWrapper.querySelector(".modal__close").addEventListener("click", () => {
            this.modalWrapper.classList.toggle("active")
        })
    }
    
}