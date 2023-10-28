let flag=0;
const values = JSON.parse(localStorage.getItem ("values"));
console.log(values);
document.getElementById('blah').src = values.photo;
document.getElementById('blah').classList.add('preview');
document.getElementById('blah').classList.remove('none');
document.querySelector('.profile_card_photo').classList.add('img-photo');
document.querySelector('.profile_card_photo').classList.remove('profile_card_photo');
document.querySelector('.first_last_name_1').innerHTML=values.name;
document.querySelector('#smalltext2').innerHTML=values.aboutuser;
document.querySelector('.profile_card_aboutuser').classList.add('input_img2');
function Age(date){
    const Bdate = new Date(date);
    let age = (Date.now() - Bdate)/31557600000;
    return Math.round(age);
}
document.querySelector('#smalltext3').innerHTML=(Age(values.date)+' лет');
document.querySelector('.profile_card_age').classList.add('input_img2');
if(values.gender=='MAN'){
        document.querySelector('#smalltext1').innerHTML="Парень";
        document.querySelector('.profile_row').classList.add('input_img2');
}
if(values.gender=='WOMAN'){
        document.querySelector('#smalltext1').innerHTML="Девушка";
        document.querySelector('.profile_row').classList.add('input_img2');
}

const form=document.querySelector('#registrationform');

document.querySelector('#a').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="1 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
}
document.querySelector('#b').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="2 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
}
document.querySelector('#c').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="3 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
}
document.querySelector('#d').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="4 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
}
document.querySelector('#e').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="5 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
}
document.querySelector('#f').onclick=function(){
    this.classList.add('labelvalidRadio');
    document.querySelector('#smalltext4').innerHTML="6 курс,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
}

document.querySelector('.multipy_form_checkbox').onclick=function(){
    this.classList.add('singlelabelvalidRadio');
    if(document.querySelector('#b').classList.contains('labelvalidRadio')){
        document.querySelector('#b').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#c').classList.contains('labelvalidRadio')){
        document.querySelector('#c').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#d').classList.contains('labelvalidRadio')){
        document.querySelector('#d').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#e').classList.contains('labelvalidRadio')){
        document.querySelector('#e').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#a').classList.contains('labelvalidRadio')){
        document.querySelector('#a').classList.remove('labelvalidRadio');
    }
    if(document.querySelector('#f').classList.contains('labelvalidRadio')){
        document.querySelector('#f').classList.remove('labelvalidRadio');
    }
    document.querySelector('#smalltext4').innerHTML="выпускник,";
    document.querySelector('.profile_card_row').classList.add('input_img2');
}

const svgs=document.querySelectorAll('.selectinput-indicators');
const content=document.querySelectorAll('.content');
const placeholders = document.querySelectorAll('.selectinput-placeholder')
svgs[0].onclick=function(){
    content[0].classList.add('contentafter');
    document.querySelector('.bac').onclick = function(){
        content[0].classList.remove('contentafter');
        placeholders[0].innerHTML='Бакалавриат';
        document.querySelector('#smalltext4').append(' бакалавриат');
        placeholders[0].classList.add('textcontent');
    }
    document.querySelector('.mag').onclick = function(){
        content[0].classList.remove('contentafter');
        placeholders[0].innerHTML='Магистратура';
        document.querySelector('#smalltext4').append(' магистратура');
        placeholders[0].classList.add('textcontent');
    }
}

svgs[1].onclick=function(){
    content[1].classList.add('contentafter');
    document.querySelector('.vshb').onclick = function(){
        content[1].classList.remove('contentafter');
        placeholders[1].innerHTML='Высшая школа бизнеса';
        document.querySelector('#smalltext4').append(' Высшая школа бизнеса');
        placeholders[1].classList.add('textcontent');
    }
    document.querySelector('.fp').onclick = function(){
        content[1].classList.remove('contentafter');
        placeholders[1].innerHTML='Факультет права';
        document.querySelector('#smalltext4').append(' Факультет права');
        placeholders[1].classList.add('textcontent');
    }
    document.querySelector('.fen').onclick = function(){
        content[1].classList.remove('contentafter');
        placeholders[1].innerHTML='Факультет экономических наук';
        document.querySelector('#smalltext4').append(' Факультет экономических наук');
        placeholders[1].classList.add('textcontent');
    }
}

svgs[2].onclick=function(){
    content[2].classList.add('contentafter');
    document.querySelector('.bi').onclick = function(){
        content[2].classList.remove('contentafter');
        placeholders[2].innerHTML='Бизнес-информатика';
        document.querySelector('#smalltext4').append(' БИ');
        placeholders[2].classList.add('textcontent');
    }
    document.querySelector('.p').onclick = function(){
        content[2].classList.remove('contentafter');
        placeholders[2].innerHTML='Право';
        document.querySelector('#smalltext4').append(' П');
        placeholders[2].classList.add('textcontent');
    }
    document.querySelector('.e').onclick = function(){
        content[2].classList.remove('contentafter');
        placeholders[2].innerHTML='Экономика';
        document.querySelector('#smalltext4').append(' Э');
        placeholders[2].classList.add('textcontent');
    }
}

const input1=document.querySelector('#job');
input1.oninput=function(){
    document.querySelector('#platetext').innerHTML=input1.value;
    document.querySelector('.textinput_label').classList.add('labelvalid');
}

function validation(form){
    // function removeError(index){
    //     const divs = document.querySelectorAll('.select-control');
    //     const divs2 = document.querySelectorAll('.select-input_wrapper');
    //     const paragraphs=document.querySelectorAll('.wrapper-text')
    //     for(let i=0;i<divs.length;i++){
    //         if(i==index-9 && divs[i].classList.contains('error')){
    //             divs[i].classList.remove('error');
    //             divs2[i].querySelector('.error-text').remove();
    //             paragraphs[i].classList.remove('error-text4');
    //         }
    //     }
    // }

    // function removeErrorR(input){
    //     const parent = document.querySelector('.radioinput_wrapper');
    //     if(parent.classList.contains('aftererror')){
    //         parent.classList.remove('aftererror');
    //         parent.querySelector('.error-text1').remove();
    //         input.classList.remove('error');
    //     }
    // }

    // function removeErrorR2(input){
    //     const parent = document.querySelector('.multipy_form');
    //     if(parent.classList.contains('errorRadio')){
    //         input.classList.remove('error');
    //         document.querySelector('#level').querySelector('.error-text3').remove();
    //         parent.classList.remove('errorRadio');
    //         document.querySelector('.educationtext').classList.remove('error-text4');
    //     }
    // }

    function createErrorRadio(input,text){
        const parent = document.querySelector('.radioinput_wrapper');
        const errorText = document.createElement('p');
        errorText.classList.add('error-text1');
        errorText.textContent=text;
        input.classList.add('error');
        parent.appendChild(errorText);
        parent.classList.add('aftererror');
    }

    function createErrorRadio2(input,text){
        const parent = document.querySelector('.multipy_form');
        const errorText = document.createElement('p');
        errorText.classList.add('error-text3');
        errorText.textContent=text;
        input.classList.add('error');
        document.querySelector('#level').append(errorText);
        parent.classList.add('errorRadio');
        document.querySelector('.educationtext').classList.add('error-text4');
    }

    let result = true;
    flag=0;
    let flag2=0;
    form.querySelectorAll('input').forEach((input,index) => {
        // if(index>8 && index<12) removeError(index);
        // if(index>1 && index<9) removeErrorR2(input);
        // if(index==0 || index ==1) removeErrorR(input);
        if((input.checked) && (index>1 && index<9) && flag==0){
            flag=1;
        }
        if(flag==0 && index==8){
            createErrorRadio2(input,"Обязательное поле");
            result =false;
        }
        if (index>8 && index<12 && input.value==""){
            const divs=document.querySelectorAll('.select-control');
            const divs2 = document.querySelectorAll('.select-input_wrapper');
            const paragraphs=document.querySelectorAll('.wrapper-text')
            console.log("Ошибка поля");
            const errorText = document.createElement('p');
            errorText.classList.add('error-text');
            errorText.textContent="Обязательное поле";
            for(let i=0;i<divs.length;i++){
                if(i==index-9){
                    divs[i].classList.add('error');
                    divs2[i].append(errorText);
                    paragraphs[i].classList.add('error-text4');
                }
            }
            result = false;
        }
        if((input.checked) && (index==1 || index==0) && flag2==0){
            flag2=1;
        }
        if(flag2==0 && index==1){
            createErrorRadio(input,"Выберите один вариант");
            result =false;
        }
        
    });
    return result;
}


document.getElementById('registrationform').addEventListener('submit', function(event){
    event.preventDefault();
    if(validation(this)==true){
        console.log("Форма успешно отправлена")
    }
})