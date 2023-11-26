const quizQuestions = [
    {
      question: "What does the term AI stand for?",
      options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Augmented Intelligence"],
      correctAnswer: "Artificial Intelligence"
    },
    {
      question: "Which programming language is commonly used in AI development?",
      options: ["Java", "Python", "C++", "Ruby"],
      correctAnswer: "Python"
    },
    {
      question: "What is the primary goal of machine learning?",
      options: ["Replicating human intelligence", "Automating repetitive tasks", "Improving computer hardware", "Enhancing virtual reality"],
      correctAnswer: "Automating repetitive tasks"
    },
    {
      question: "Which type of AI is designed to perform a specific task without human intervention?",
      options: ["Narrow AI", "General AI", "Superintelligent AI", "Augmented AI"],
      correctAnswer: "Narrow AI"
    },
    {
      question: "What is the purpose of a neural network in AI?",
      options: ["Speech recognition", "Pattern recognition", "Algorithm optimization", "Databse management"],
      correctAnswer: "Pattern recognition"
    },
    {
      question: "Which AI technique is inspired by the structure and function of the human brain?",
      options: ["Genetic algorithms", "Neural networks", "Expert systems", "Fuzzy logic"],
      correctAnswer: "Neural networks"
    },
    {
      question: "What does the acronym NLP stand for in the context of AI?",
      options: ["Natural Language Processing", "Neural Learning Platform", "Nonlinear Programming ", "Networked Language Protocol"],
      correctAnswer: " Natural Language Processing"
    },
    {
      question: "Which AI application involves the use of algorithms to make predictions based on data?",
      options: ["Computer vision", "Speech recognition", "Predictive analytics", "Robotics"],
      correctAnswer: "Predictive analytics"
    },
    {
      question: "In reinforcement learning, what is the term for the reward signal that guides the learning process?",
      options: ["Gradients", "Q-value", "Reinforcement score", "Delta reward"],
      correctAnswer: "Q-value"
    },
    {
      question: "What is the Turing Test designed to assess in AI?",
      options: ["Speed of computation", "Emotional intelligence", "Natural language understanding", " Memory capacity"],
      correctAnswer: "Natural language understanding"
    },
    {
      question: "Which AI application involves the ability of a machine to visually interpret its surroundings?",
      options: ["Speech recognition", " Natural language processing", "Computer vision", "Expert systems"],
      correctAnswer: "Computer vision"
    },
    {
      question: "What is the main advantage of using ensemble learning in machine learning models?",
      options: ["Faster training time", "Increased model interpretability", "Improved predictive performance", "Reduced computational complexity"],
      correctAnswer: "Improved predictive performance"
    },
    {
      question: "Which technique in AI involves learning from experience and adapting to new data?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised learning"],
      correctAnswer: "Reinforcement learning"
    },
    {
      question: "What is the role of a chatbot in AI applications?",
      options: ["Image recognition", "Speech synthesis", "Natural language interaction", "Data encryption"],
      correctAnswer: "Natural language interaction"
    },
    {
      question: "Which ethical consideration is relevant to the development of AI systems?",
      options: ["Network latency", "Algorithmic bias", "File compression", "Hardware efficiency"],
      correctAnswer: "Algorithmic bias"
    },
  
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    questionText.innerHTML = currentQuestion.question;
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      document.getElementById("timer").textContent = timeLeft;
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
  
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  document.getElementById("start-button").addEventListener("click", startQuiz);