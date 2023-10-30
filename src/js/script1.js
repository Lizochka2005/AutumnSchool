const labels=[0,'.first_last_name',0,0, '.date', '.telegram', '.number_'];
let flag=0;
function validation(form){
    function removeError(input,index){
        const parent=input.parentNode;
        if(input.classList.contains('error')){
            for(let i=0;i<labels.length;i++){
                if(i==index){
                    form.querySelector(labels[i]).classList.remove('errorlabel');
                }
            }
            parent.querySelector('.error-text').remove();
            input.classList.remove('error');
        }
    }

    function removeErrorR(input){
        const parent=document.querySelector('.sex');
        if(input.classList.contains('error')){
            parent.classList.remove('aftererror');
            parent.querySelector('.error-text1').remove();
            input.classList.remove('error');
        }
    }

    function removeErrorT(textarea){
        const parent=textarea.parentNode;
        if(textarea.classList.contains('error')){
            form.querySelector('.aboutme').classList.remove('errorlabel');
            parent.querySelector('.error-text').remove();
            textarea.classList.remove('error');
        }
    }

    function removeErrorA(input){
        const parent=input.parentNode;
        if(parent.classList.contains('errorAvatar')){
            parent.classList.remove('errorAvatar');
            form.querySelector('.input_img').classList.remove('errorlabel');
        }
    }

    function createError(input,text){
        const parent = input.parentNode;
        const errorText = document.createElement('p');
        errorText.classList.add('error-text');
        errorText.textContent=text;
        input.classList.add('error');
        parent.append(errorText);
    }

    function createErrorRadio(input,text){
        const parent = document.querySelector('.sex');
        const errorText = document.createElement('p');
        errorText.classList.add('error-text1');
        errorText.textContent=text;
        input.classList.add('error');
        parent.appendChild(errorText);
        parent.classList.add('aftererror');
    }

    function createErrorTextarea(textarea,text){
        const parent = textarea.parentNode;
        const errorText = document.createElement('p');
        errorText.classList.add('error-text');
        errorText.textContent=text;
        textarea.classList.add('error');
        parent.append(errorText);
    }

    function createErrorAvatar(input){
        const parent = input.parentNode;
        parent.classList.add('errorAvatar');
    }

    let result = true;
    form.querySelectorAll('input').forEach((input,index) => {
        if (index>0 && index !=2 && index !=3) removeError(input,index);
        if(index==2 || index ==3) removeErrorR(input);
        if(index<1) removeErrorA(input);
        if (index<1 && input.value==""){
            console.log("Ошибка поля");
            createErrorAvatar(input);
            form.querySelector('.input_img').classList.add('errorlabel');
            result = false;
        }
        if(index>0 && input.value == "" && index!=2 && index!=3){
            console.log("Ошибка поля");
            createError(input,"Обязательное поле");
            for(let i=0;i<labels.length;i++){
                if(i==index){
                    form.querySelector(labels[i]).classList.add('errorlabel');
                }
            }
            result = false;
        }
        if((input.checked) && (index==2 || index==3) && flag==0){
            flag=1;
        }
        if(flag==0 && index==3){
            createErrorRadio(input,"Выберите один вариант");
            result =false;
        }
        
    });
    form.querySelectorAll('textarea').forEach(textarea => {
        removeErrorT(textarea);
        if(textarea.value == ""){
            console.log("Ошибка поля");
            createErrorTextarea(textarea,"Обязательное поле");
            form.querySelector('.aboutme').classList.add('errorlabel');
            result = false;
        }
    });
    return result
}
const form=document.getElementById('registrationform');

function readURL(){
    let image = document.getElementById("input_img").files[0];
    let reader = new FileReader();
    document.querySelector('.input_img').classList.add('input_img2');
    document.querySelector('.input_img').classList.remove('input_img');
    document.querySelector('#input_img').classList.add('input_img2');
    document.querySelector('.img').classList.add('img2');
    document.querySelector('.img').classList.remove('img');
    document.querySelector('#come').classList.remove('none');
    document.getElementById('come').classList.add('photo');
    document.getElementById('come2').classList.add('avatarinput-remove');
    document.getElementById('removeimg').src= '../src/icons/krestik.svg';
    document.querySelector('.profile_card_photo').classList.add('img-photo');
    document.querySelector('.profile_card_photo').classList.remove('profile_card_photo');
    document.getElementById('blah').classList.add('preview');
    document.getElementById('blah').classList.remove('none');

    reader.onload = function(elem) {
      document.getElementById('blah').src = elem.target.result;
      document.getElementById('bla').src = elem.target.result;
    }
    reader.readAsDataURL(image);  
} 

document.querySelector('#come2').onclick =function(){
    document.querySelector('.input_img2').classList.add('input_img');
    document.querySelector('.input_img2').classList.remove('input_img2');
    document.querySelector('#input_img').classList.remove('input_img2');
    document.querySelector('.img2').classList.add('img');
    document.querySelector('.img2').classList.remove('img2');
    document.querySelector('#come').classList.add('none');
    document.getElementById('come').classList.remove('photo');
    document.getElementById('come2').classList.remove('avatarinput-remove');
    document.getElementById('removeimg').src= '#';
    document.querySelector('.img-photo').classList.add('profile_card_photo');
    document.querySelector('.img-photo').classList.remove('img-photo');
    document.getElementById('blah').classList.remove('preview');
    document.getElementById('blah').classList.add('none');
    document.getElementById('blah').src = '#';
    document.getElementById('bla').src = '#';
}

function Age(date){
    const Bdate = new Date(date);
    let age = (Date.now() - Bdate)/31557600000;
    return Math.round(age);
}

function Gender(){
    const elem = document.querySelectorAll('.input_sex1');
    let num;
    for(i=0;i<elem.length;i++){
        if (elem[i].checked)
            num=elem[i].value;
    }
    return num;
}

form.querySelectorAll('input').forEach((input,index) => {
    if (index==1){
        input.oninput = function(){
            document.querySelector('.first_last_name_1').innerHTML=input.value;
            document.querySelector('.first_last_name').classList.add('labelvalid');
        }
    }
    if(index==4){
        input.oninput = function(){
            document.querySelector('#smalltext3').innerHTML=(Age(input.value)+' лет');
            document.querySelector('.profile_card_age').classList.add('input_img2');
            document.querySelector('.date').classList.add('labelvalid');
        }
    }
    if(index==5){
        input.oninput = function(){
            document.querySelector('.telegram').classList.add('labelvalid');
        }
    }
    if(index==6){
        input.oninput = function(){
            document.querySelector('.number_').classList.add('labelvalid');
        }
    }
    if(index==2 || index==3){
        const elem = document.querySelectorAll('.input_sex1');
        let num;
        for(i=0;i<elem.length;i++){
            if (elem[i].checked)
                num=elem[i].value;
        }
        if(num=='MAN'){
            input.oninput = function(){
                document.querySelector('#smalltext1').innerHTML="Парень";
                document.querySelector('.profile_row').classList.add('input_img2');
            }
        }
        if(num=='WOMAN'){
            input.oninput = function(){
                document.querySelector('#smalltext1').innerHTML="Девушка";
                document.querySelector('.profile_row').classList.add('input_img2');
            }
        }
    }
});

form.querySelectorAll('textarea').forEach(textarea => {
    textarea.oninput = function(){
        document.querySelector('#smalltext2').innerHTML=textarea.value;
        document.querySelector('.profile_card_aboutuser').classList.add('input_img2');
        document.querySelector('.aboutme').classList.add('labelvalid');
    }
});

document.getElementById('registrationform').addEventListener('submit', function(event){
    event.preventDefault();
    const  name= form.querySelector('[name="name"]'),
            date= form.querySelector('[name="date"]'),
            telegram= form.querySelector('[name="telegram"]'),
            number = form.querySelector('[name = "phone"]'),
            aboutuser= form.querySelector('[name="aboutme"]');
    const values = {
        photo: document.getElementById('blah').src,
        name: name.value,
        gender: Gender(),
        date: date.value,
        telegram: telegram.value,
        phone: number.value,
        aboutuser: aboutuser.value
    };
    console.log(values);
    localStorage.setItem('values', JSON.stringify(values));
    if(validation(this)==true){
        console.log("Форма успешно отправлена")
        document.location.href="../src/index2.html";
    }
})

