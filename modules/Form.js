"use strict";

export class Form{
    constructor(data){
        this.form_Wrapper   = data;
        this.input_password = this.form_Wrapper.querySelector('.input_password');

        this.input_confirm  = this.form_Wrapper.querySelector('.input_confirmPassword');

        let event_list = ['keyup','keydown'];

        event_list.map(event => this.form_Wrapper.querySelector(".input__login").addEventListener(event, this.login_verification))
        event_list.map(event => this.form_Wrapper.querySelector(".input__email").addEventListener(event, this.check_email))

        if (this.input_confirm){
            event_list.map(event => this.input_password.addEventListener(event, (event) =>{
                this.fullness_check_password(event)
                this.printError()
            }))
            event_list.map(event => this.input_confirm.addEventListener(event,this.printError))
        }else{
            event_list.map(event => this.input_password.addEventListener(event, this.fullness_check_password))
        }
    }
    activate_button(){
        let inputs   = Array.from(this.form_Wrapper.querySelectorAll(".form__input")),
            form_btn = this.form_Wrapper.querySelector(".modalEntrance__btn");

        let confirmed_inputs = inputs.filter(input => {
            return input.style.boxShadow == "rgba(0, 0, 0, 0.75) 0px 5px 15px"
        })
        
        if(confirmed_inputs.length == inputs.length){
            form_btn.disabled = false;
            form_btn.style.cursor = "pointer";
        }else{
            form_btn.disabled = true;
            form_btn.style.cursor = "not-allowed";
        }
    }
    login_verification = (event) => {
        if(!event.target.value.length){
            event.target.classList.remove("correct__data")
        }else{
            event.target.classList.add("correct__data")
        }
        this.activate_button()
    }
    check_email = (event) =>{
        console.log(event.target.parentElement.querySelector(".label__email"))
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (EMAIL_REGEXP.test(event.target.value)) {
            event.target.parentElement.querySelector(".label__email").style.display = "none";
            event.target.classList.add("correct__data")
        } else {
            event.target.parentElement.querySelector(".label__email").style.display = "flex";
            event.target.classList.remove("correct__data")
        }
        this.activate_button()
    }
    printError = () => {
        let match_check = this.input_password.value.length >= 8 && this.input_confirm.value.length >= 8 ?
                                                this.input_confirm.value == this.input_password.value: false;
        if (match_check){
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "none";

            this.input_password.classList.add("correct__data")
            this.input_confirm.classList.add("correct__data")
        }else if(!this.input_confirm.value.length){
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "none";
        }else{
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "flex";

            this.input_password.classList.remove("correct__data")
            this.input_confirm.classList.remove("correct__data")
        }
        this.activate_button()

    }
    fullness_check_password(event){
        let label_password = event.target.closest(".form__item_password").querySelector(".label__password");
        label_password.style.display = "flex";
        if (!event.target.value.length){
            label_password.innerText = "Необходимо указать пароль";
        }else if(event.target.value.length < 8){
            label_password.innerText = "Пароль должен содержать не менее 8 символов";
        }else{
            label_password.style.display = "none";
        }
    }
}