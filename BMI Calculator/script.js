let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let weight = document.querySelector('.w').value;
    let height = document.querySelector('.h').value;

    let bmi = (weight/(height*height)).toFixed(3);

    let output = document.querySelector('.output p');
    output.innerHTML = "BMI : " + bmi;
});