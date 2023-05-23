
const $list = document.querySelector('.list');
const $closelistBtn = document.querySelector('.list .header span'); 


const $listBtn = document.querySelector('.acount .active span');

const $menu = document.querySelector('.top_menu');

const $closemenu = document.querySelector('.top_menu ul span');

const $openmenu = document.querySelector('.menu_icon li span');

const $nextbtn = document.querySelector('.buttons .next');

const $prevbtn = document.querySelector('.buttons .prev');

const h1 = document.getElementById('name');

const para = document.getElementById('text');

const $height = document.getElementById('taille');

const $weight = document.getElementById('poids');

const $calculbtn = document.querySelector('.calcul button');

const $bmi = document.querySelector('.calculate p span')


$listBtn.addEventListener('click', function () {
    $list.classList.toggle('open');
});

$closelistBtn.addEventListener('click', function () {
    $list.classList.remove('open');
});


$closemenu.addEventListener('click', function () {
    $menu.style.display = "none";
    console.log('cliqué');
});

$openmenu.addEventListener('click', function () {
    $menu.style.display = "flex";
    console.log('cliqué');
});


// $prevbtn.addEventListener('click', ChangeSlide(-1));
// $nextbtn.addEventListener('click', ChangeSlide(1));

const slide = ["https://gymate-iota.vercel.app/static/media/testimonial-new.4d49a58e5ec2cf3ec91a.jpg", "https://contents.mediadecathlon.com/p2169988/k$25a9758535f2316b78e1b5f3dddc4804/sq/brassieres-de-fitness.jpg?format=auto&f=800x0", "https://media.istockphoto.com/id/530580296/fr/photo/bel-homme-noir-muscl%C3%A9-exercices-avec-des-poids-dans-une-salle-de-sport.jpg?s=612x612&w=0&k=20&c=rbUUazNqJT-6KAgEeOkgUl_dnaRKNRC1Ie-nQmyctOY="];

const $H1 = ['Juliette ODO', 'Ema KODO', 'Sergio CHARS'];

const $para = ["“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”", '“Fantastic gym with friendly staff and a motivating atmosphere. Improved my fitness and health. Love it”', "“I've been a member of this gym for a year now, and I couldn't be happier. The trainers are incredibly knowledgeable and motivating, and the facilities are top-notch. Highly recommended!”"];


const $person = document.getElementById('person')
let numero = 0;

function ChangeSlide(i) {
    numero = numero + i;
    if (numero < 0){
        numero = slide.length - 1;
    }
    else if (numero > slide.length - 1){
        numero = 0;
    }
        $person.src = slide[numero];

    if (numero < 0){
        numero = $H1.length - 1;
    }
        else if (numero > $H1.length - 1){
        numero = 0;
        }

        h1.innerHTML = $H1[numero];


     if (numero < 0){
        numero = $para.length - 1;
    }
    else if (numero > $para.length - 1){
        numero = 0;
    }
    para.innerHTML = $para[numero];
}
setInterval("ChangeSlide(1)", 3000);


$calculbtn.addEventListener('click', function(){
    let x = $height.value / 100;
    let y = $weight.value;
    const bmi = y /(x*x)

    $bmi.innerHTML = bmi;
    // if( ($height.value = '') || ($weight.value = '') ){
    //     $bmi.innerHTML = '';
    // }
});
