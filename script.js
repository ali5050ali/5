const questions = [
    { question: 'نام پیامبر ما چیست؟', options: ['حضرت علی', 'حضرت محمد', 'امام زمان', 'حضرت موسی'], correct: 1 },
    { question: 'مدرسه ها در چه فصلی باز می شود؟', options: ['تابستان', 'بهار', 'پاییز', 'مهر'], correct: 2 },
    { question: 'رنگ زرد در چراغ راهنما چه معنی میدهد؟', options: ['سرعت', 'احتیاط', 'حرکت', 'توقف'], correct: 1 },
    { question: 'پیامبر در کدام شهر به دنیا آمد؟', options: ['سوریه', 'کربلا', 'مکه', 'مدینه'], correct: 2 },
    { question: 'هرسال چند فصل دارد؟', options: ['سه', 'چهار', 'دو', 'پنج'], correct: 1 },
     { question: 'نام یکی از شهر های شمال؟', options: ['تهران', 'آستارا', 'کرمان', 'شیراز'], correct: 1 },
     { question: 'مخالف خوشحال است؟', options: ['شاد', 'ناراحت', 'مهربان', 'مهر'], correct: 2 },
    { question: 'منزل یعنی چه؟', options: ['اتاق', 'خانه', 'حیاط', 'مدرسه'], correct: 2 },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        questionElement.innerHTML = 'آزمون تمام شد!';
        optionsElement.innerHTML = '';
        return;
    }

    let q = questions[currentQuestion];
    questionElement.innerHTML = q.question;
    optionsElement.innerHTML = '';

    q.options.forEach((option, index) => {
        let button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    let q = questions[currentQuestion];
    let buttons = optionsElement.getElementsByTagName('button');

    if (selected === q.correct) {
        buttons[selected].classList.add('correct');
        score++;
    } else {
        buttons[selected].classList.add('incorrect');
    }

    scoreElement.innerText = `امتیاز: ${score}`;
    currentQuestion++;
    setTimeout(loadQuestion, 1000);
}

loadQuestion();