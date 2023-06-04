"use strict";

export class Form{
    constructor(data){
        this.form_Wrapper   = data;
        this.input_password = this.form_Wrapper.querySelector('.input_password');
        this.input_confirm  = this.form_Wrapper.querySelector('.input_confirmPassword');
        console.log(this.input_confirm)
        // this.modalWrapper.querySelector(".modal__close").addEventListener("click", () => {
        //     this.modalWrapper.classList.toggle("active")
        // })
    }
    printError = () => {
        let match_check = this.input_password.value.length >= 8 && this.input_confirm.value.length >= 8 ?
                                                        this.input_confirm.value == this.input_password.value: false;
        if (match_check){
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "none";
            this.input_password.style.border            = "1px solid green";
            this.input_confirm.style.border = "1px solid green";
        }else if(!this.input_confirm.value.length){
            document.querySelector(".label__confirmPassword").style.display = "none";
        }else{
            this.form_Wrapper.querySelector(".label__confirmPassword").style.display = "flex";
            this.input_password.style.border             = "1px solid #D0D5DD";
            this.input_confirm.style.border  = "1px solid #D0D5DD";
        }
    }
}