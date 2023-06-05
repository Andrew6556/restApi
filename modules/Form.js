"use strict";

export class Form{
    constructor(data){
        this.form_Wrapper   = data;
        this.input_password = this.form_Wrapper.querySelector('.input_password');

        this.input_confirm  = this.form_Wrapper.querySelector('.input_confirmPassword');
        if (this.input_confirm){
            let event_list = ['keyup','keydown'];

            event_list.map(event => this.input_password.addEventListener(event, (event) =>{
                this.fullness_check_password(event)
                this.printError()
            }))
            event_list.map(event =>  this.input_confirm.addEventListener(event, () =>{
                this.printError()
            }))
            this.form_Wrapper.querySelector(".input__email").addEventListener("input", this.check_email)
        }
    }
    check_email(){
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (EMAIL_REGEXP.test(this.value)) {
            this.parentElement.querySelector(".label__email").style.display = "none";
            this.style.border    = "2px solid rgb(0 128 0)";
            this.style.boxShadow = "rgba(0, 0, 0, 0.75) 0px 5px 15px";
        } else {
            this.parentElement.querySelector(".label__email").style.display = "flex";
            this.style.boxShadow = "none";
            this.style.border    = "1px solid #D0D5DD";
        }
    }
    printError = () => {
        let match_check = this.input_password.value.length >= 8 && this.input_confirm.value.length >= 8 ?
                                                this.input_confirm.value == this.input_password.value: false;
        if (match_check){
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "none";

            this.input_password.style.border    = "2px solid rgb(0 128 0)";
            this.input_password.style.boxShadow = "rgba(0, 0, 0, 0.75) 0px 5px 15px";

            this.input_confirm.style.border     = "2px solid rgb(0 128 0)";
            this.input_confirm.style.boxShadow = "rgba(0, 0, 0, 0.75) 0px 5px 15px";
        }else if(!this.input_confirm.value.length){
            document.querySelector(".label__confirmPassword").style.display = "none";
        }else{
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "flex";

            this.input_password.style.boxShadow = "none";
            this.input_password.style.border = "1px solid #D0D5DD";

            this.input_confirm.style.boxShadow = "none";
            this.input_confirm.style.border  = "1px solid #D0D5DD";
        }
    }
    fullness_check_password(event){
        document.querySelector(".label__password").style.display = "flex";
        if (!event.target.value.length){
            document.querySelector(".label__password").innerText = "Необходимо указать пароль";
        }else if(event.target.value.length < 8){
            document.querySelector(".label__password").innerText = "Пароль должен содержать не менее 8 символов";
        }else{
            document.querySelector(".label__password").style.display = "none";
        }
    }
}