"use strict";

export class Form{
    constructor(data){
        this.form_Wrapper     = data;
        this.input_password   = this.form_Wrapper.querySelector('.input_password');
        // this.password_symbols = this.input_password.value.length;

        this.input_confirm    = this.form_Wrapper.querySelector('.input_confirmPassword');

        
        if (this.input_confirm){
            let event_list = ['keyup','keydown'];

            event_list.map(event => this.input_password.addEventListener(event, () =>{
                this.fullness_check_password()
                this.printError()
            }))
            event_list.map(event =>  this.input_confirm.addEventListener(event, () =>{
                this.printError()
            }))
        }
        
    }
    printError = () => {
        let match_check = this.input_password.value.length >= 8 && this.input_confirm.value.length >= 8 ?
                                                this.input_confirm.value == this.input_password.value: false;
        console.log(match_check)
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
    fullness_check_password = () => {
        document.querySelector(".label__password").style.display = "flex";
        if (!this.input_password.value.length){
            document.querySelector(".label__password").innerText = "Необходимо указать пароль";
        }else if(this.input_password.value.length < 8){
            document.querySelector(".label__password").innerText = "Пароль должен содержать не менее 8 символов";
        }else{
            document.querySelector(".label__password").style.display = "none";
        }
    }
}