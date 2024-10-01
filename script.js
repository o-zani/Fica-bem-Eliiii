// Função para mostrar a tela de introdução
function showIntro() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'block';
}

// Função para começar a tela das perguntas
function startQuestions() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    loadQuestion(0);  // Carrega a primeira pergunta
}

const questions = [
    {
        question: "Você está confusa?",
        correctAnswer: "NÃO",
        wrongAnswer: "SIM"
    },
    {
        question: "Você sabe o que quer?",
        correctAnswer: "SIM",
        wrongAnswer: "NÃO"
    },
    {
        question: "As vezes pensa em desistir?",
        correctAnswer: "NÃO",
        wrongAnswer: "SIM"
    }
];

let currentQuestionIndex = 0;

// Função para carregar as perguntas
function loadQuestion(index) {
    const questionData = questions[index];
    document.getElementById("question-text").innerText = questionData.question;
    document.getElementById("option1").innerText = questionData.correctAnswer;
    document.getElementById("option2").innerText = questionData.wrongAnswer;

    // Resetando o estado do botão errado
    document.getElementById("option2").disabled = false; // Habilita o botão novamente
    document.getElementById("option2").classList.remove('error'); // Remove a classe de erro
    document.getElementById("option2").innerHTML = questionData.wrongAnswer; // Restaura o texto original do botão
}
// Função para verificar a resposta
function checkAnswer(isCorrect) {
    if (isCorrect) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);  // Avança para a próxima pergunta
        } else {
            showDreamsScreen();  // Avança para a tela dos sonhos
        }
    } else {
        // Desabilitando o botão de resposta errada
        const wrongButton = document.getElementById("option2");
        wrongButton.disabled = true; // Desabilita o botão
        wrongButton.classList.add('error'); // Adiciona a classe de erro
        wrongButton.innerHTML = 'Errado!'; // Altera o texto do botão
    }
}

// Função para mostrar a tela dos sonhos
function showDreamsScreen() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('dreams-screen').style.display = 'block';
}

// Função para habilitar o botão de avançar para sonhos
function checkDreamInput() {
    const dream1 = document.getElementById('dream1').value;
    const dream2 = document.getElementById('dream2').value;
    const dream3 = document.getElementById('dream3').value;
    const advanceButton = document.getElementById('advance-dreams');

    // Exibir o próximo campo quando o anterior estiver preenchido
    if (dream1) {
        document.getElementById('dream2').style.display = 'block';
    }
    if (dream2) {
        document.getElementById('dream3').style.display = 'block';
    }
    
    // Mostrar o botão de avançar somente se todos os campos estiverem preenchidos
    if (dream1 && dream2 && dream3) {
        advanceButton.style.display = 'block';  // Mostra o botão
    } else {
        advanceButton.style.display = 'none';   // Esconde o botão
    }
}

// Função para mostrar a tela das metas
function showGoals() {
    document.getElementById('dreams-screen').style.display = 'none';
    document.getElementById('goals-screen').style.display = 'block';
}

// Função para habilitar o botão de avançar para metas
function checkGoalInput() {
    const goal1 = document.getElementById('goal1').value;
    const goal2 = document.getElementById('goal2').value;
    const goal3 = document.getElementById('goal3').value;
    const advanceButton = document.getElementById('advance-goals');

    // Exibir o próximo campo quando o anterior estiver preenchido
    if (goal1) {
        document.getElementById('goal2').style.display = 'block';
    }
    if (goal2) {
        document.getElementById('goal3').style.display = 'block';
    }
    
    // Mostrar o botão de avançar somente se todos os campos estiverem preenchidos
    if (goal1 && goal2 && goal3) {
        advanceButton.style.display = 'block';  // Mostra o botão
    } else {
        advanceButton.style.display = 'none';   // Esconde o botão
    }
}

// Função para mostrar a tela de reflexão
function showReflection() {
    document.getElementById('goals-screen').style.display = 'none';
    document.getElementById('reflection-screen').style.display = 'block';
}

// Função para mostrar a tela de sentimentos
function showFeelings() {
    document.getElementById('reflection-screen').style.display = 'none';
    document.getElementById('feelings-screen').style.display = 'block';
}

// Função para mostrar a tela de qualidades
function showQualities() {
    document.getElementById('feelings-screen').style.display = 'none';
    document.getElementById('qualities-screen').style.display = 'block';
}

// Função para habilitar o botão de avançar para qualidades
function checkQualityInput() {
    const quality1 = document.getElementById('quality1').value;
    const quality2 = document.getElementById('quality2').value;
    const quality3 = document.getElementById('quality3').value;
    const advanceButton = document.getElementById('advance-qualities');

    // Exibir o próximo campo quando o anterior estiver preenchido
    if (quality1) {
        document.getElementById('quality2').style.display = 'block';
    }
    if (quality2) {
        document.getElementById('quality3').style.display = 'block';
    }
    
    // Mostrar o botão de avançar somente se todos os campos estiverem preenchidos
    if (quality1 && quality2 && quality3) {
        advanceButton.style.display = 'block';  // Mostra o botão
    } else {
        advanceButton.style.display = 'none';   // Esconde o botão
    }
}
function checkFinalQualityInput() {
    var input = document.getElementById('final-quality');
    var button = document.getElementById('advance-final');
    
    if (input.value.trim() !== '') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
// Função para mostrar a tela da última pergunta
function showLastQuestion() {
    document.getElementById('qualities-screen').style.display = 'none';
    document.getElementById('notice-last-question-screen').style.display = 'block';
}
// Função para mostrar a tela da última pergunta
function showFinalQuestion() {
    document.getElementById('notice-last-question-screen').style.display = 'none';
    document.getElementById('final-question-screen').style.display = 'block';
}

// Função para mostrar a tela final
function showFinalScreen() {
    document.getElementById('final-question-screen').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
}

// Função para mostrar o resumo das respostas
function showSummary() {
    document.getElementById('final-screen').style.display = 'none';
    document.getElementById('summary-screen').style.display = 'block';

    const summaryContent = `
        <p>Sonhos:</p>
        <ul>
            <li>${document.getElementById('dream1').value}</li>
            <li>${document.getElementById('dream2').value}</li>
            <li>${document.getElementById('dream3').value}</li>
        </ul>
        <p>Metas:</p>
        <ul>
            <li>${document.getElementById('goal1').value}</li>
            <li>${document.getElementById('goal2').value}</li>
            <li>${document.getElementById('goal3').value}</li>
        </ul>
        <p>Qualidades:</p>
        <ul>
            <li>${document.getElementById('quality1').value}</li>
            <li>${document.getElementById('quality2').value}</li>
            <li>${document.getElementById('quality3').value}</li>
        </ul>
        <p>Qualidade escolhida:</p>
        <ul>
            <li>${document.getElementById('final-quality').value}</li>
        </ul>
    `;
    document.getElementById('summary-content').innerHTML = summaryContent;
}


