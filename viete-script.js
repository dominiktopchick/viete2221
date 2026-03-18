// Viète's Theorem Quiz Questions in Hungarian
const vieteQuizQuestions = [
    {
        id: 1,
        question: "Mi az x² - 7x + 12 = 0 egyenletben a gyökök összege (Viète-tétel szerint)?",
        options: [
            "7",
            "-7",
            "12",
            "-12"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "Mi az x² - 7x + 12 = 0 egyenletben a gyökök szorzata (Viète-tétel szerint)?",
        options: [
            "7",
            "-7",
            "12",
            "-12"
        ],
        correct: 2
    },
    {
        id: 3,
        question: "Ha az ax² + bx + c = 0 egyenlet gyökei x₁ és x₂, akkor x₁ + x₂ = ?",
        options: [
            "b/a",
            "-b/a",
            "c/a",
            "-c/a"
        ],
        correct: 1
    },
    {
        id: 4,
        question: "Ha az ax² + bx + c = 0 egyenlet gyökei x₁ és x₂, akkor x₁ · x₂ = ?",
        options: [
            "b/a",
            "-b/a",
            "c/a",
            "-c/a"
        ],
        correct: 2
    },
    {
        id: 5,
        question: "Mely másodfokú egyenletetnek a gyökei x₁ = 2 és x₂ = 3?",
        options: [
            "x² + 5x + 6 = 0",
            "x² - 5x + 6 = 0",
            "x² - 5x - 6 = 0",
            "x² + 5x - 6 = 0"
        ],
        correct: 1
    },
    {
        id: 6,
        question: "Az x² - 10x + q = 0 egyenletben ha x₁ = 3, akkor q értéke?",
        options: [
            "21",
            "7",
            "10",
            "30"
        ],
        correct: 0
    },
    {
        id: 7,
        question: "Mely időszakban élt François Viète?",
        options: [
            "15. század",
            "16. század",
            "17. század",
            "18. század"
        ],
        correct: 1
    },
    {
        id: 8,
        question: "Ha x₁ + x₂ = 8 és x₁ · x₂ = 15, akkor a másodfokú egyenlet?",
        options: [
            "x² + 8x + 15 = 0",
            "x² - 8x + 15 = 0",
            "x² + 8x - 15 = 0",
            "x² - 8x - 15 = 0"
        ],
        correct: 1
    },
    {
        id: 9,
        question: "A Viète-tétel fordított alkalmazása lényege?",
        options: [
            "Gyökökből az egyenlet felírása",
            "Egyenletből a gyökök meghatározása",
            "Diszkrimináns számítása",
            "Szorzattényezős alak felírása"
        ],
        correct: 0
    },
    {
        id: 10,
        question: "Az x² + px + 6 = 0 egyenlet gyökeire x₁ + x₂ = 5, akkor p = ?",
        options: [
            "5",
            "-5",
            "6",
            "-6"
        ],
        correct: 1
    }
];

// Initialize Quiz
function initializeQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const submitBtn = document.getElementById('submit-btn');
    
    // Clear previous content
    quizContent.innerHTML = '';
    
    // Create quiz questions
    vieteQuizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.setAttribute('data-question-id', q.id);
        
        let optionsHTML = '';
        q.options.forEach((option, optionIndex) => {
            optionsHTML += `
                <label class="option">
                    <input type="radio" name="question-${q.id}" value="${optionIndex}" required>
                    <label>${option}</label>
                </label>
            `;
        });
        
        questionDiv.innerHTML = `
            <div class="question-title">Kérdés ${index + 1}: ${q.question}</div>
            <div class="question-options">
                ${optionsHTML}
            </div>
        `;
        
        quizContent.appendChild(questionDiv);
    });
    
    // Add submit button event listener
    submitBtn.addEventListener('click', checkAnswers);
    
    // Add animation to questions
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach((q, index) => {
        q.style.opacity = '0';
        q.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
}

// Check Answers
function checkAnswers() {
    const resultsContainer = document.getElementById('results');
    let correctAnswers = 0;
    let totalQuestions = vieteQuizQuestions.length;
    let detailedResults = [];
    
    vieteQuizQuestions.forEach(q => {
        const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
        
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            const isCorrect = userAnswer === q.correct;
            
            if (isCorrect) {
                correctAnswers++;
            }
            
            detailedResults.push({
                question: q.question,
                userAnswer: q.options[userAnswer],
                correctAnswer: q.options[q.correct],
                isCorrect: isCorrect
            });
        } else {
            detailedResults.push({
                question: q.question,
                userAnswer: 'Nem válaszolt',
                correctAnswer: q.options[q.correct],
                isCorrect: false
            });
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Display results
    let resultClass = 'success';
    let resultMessage = '';
    
    if (percentage === 100) {
        resultMessage = `🎉 Kiváló! ${correctAnswers}/${totalQuestions} helyes válasz! Viète volna büszke rád!`;
        resultClass = 'success';
    } else if (percentage >= 80) {
        resultMessage = `⭐ Rendkívüli teljesítmény! ${correctAnswers}/${totalQuestions} helyes válasz (${percentage}%).`;
        resultClass = 'success';
    } else if (percentage >= 70) {
        resultMessage = `✨ Jó munka! ${correctAnswers}/${totalQuestions} helyes válasz (${percentage}%). Továbbra is tanulj!`;
        resultClass = 'success';
    } else if (percentage >= 50) {
        resultMessage = `👍 Rendben van! ${correctAnswers}/${totalQuestions} helyes válasz (${percentage}%). Még van mit tanulni!`;
        resultClass = 'partial';
    } else {
        resultMessage = `📚 Tanulmányozd részletesebben az anyagot! ${correctAnswers}/${totalQuestions} helyes válasz (${percentage}%).`;
        resultClass = 'partial';
    }
    
    let detailsHTML = `
        <div class="results-title">${resultMessage}</div>
        <div style="margin-top: 1.5rem;">
            <div style="font-weight: bold; margin-bottom: 1.5rem; color: var(--text-dark); font-size: 1.05rem;">Részletes Eredmények:</div>
    `;
    
    detailedResults.forEach((result, index) => {
        const statusIcon = result.isCorrect ? '✓' : '✗';
        const statusColor = result.isCorrect ? '#10b981' : '#dc2626';
        
        detailsHTML += `
            <div style="margin-bottom: 1.5rem; padding: 1.2rem; background: ${result.isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(220, 38, 38, 0.05)'}; border-radius: 8px; border-left: 4px solid ${statusColor};">
                <div style="font-weight: bold; margin-bottom: 0.8rem; color: var(--text-dark);">
                    <span style="color: ${statusColor}; font-size: 1.2rem; margin-right: 0.5rem;">${statusIcon}</span>
                    Kérdés ${index + 1}: ${result.question}
                </div>
                <div style="margin-left: 1.8rem; color: var(--text-light);">
                    <div style="margin-bottom: 0.5rem;">
                        <strong>Te:</strong> <span style="color: var(--text-dark);">${result.userAnswer}</span>
                    </div>
                    ${!result.isCorrect ? `<div style="color: ${statusColor}; margin-bottom: 0;"><strong>Helyes:</strong> <span style="color: var(--text-dark);">${result.correctAnswer}</span></div>` : ''}
                </div>
            </div>
        `;
    });
    
    detailsHTML += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(37, 99, 235, 0.1); border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.2); text-align: center;">
            <div style="font-weight: bold; color: var(--primary-blue); font-size: 1.1rem;">
                Eredmény: ${correctAnswers}/${totalQuestions} (${percentage}%)
            </div>
            <div style="margin-top: 0.5rem; color: var(--text-light);">
                ${percentage === 100 ? 'Teljesen megtanultad a Viète-tételt!' : 
                  percentage >= 80 ? 'Nagyon jól érted a témát!' :
                  percentage >= 70 ? 'Jó alapod van, de még van hova fejlődni!' :
                  percentage >= 50 ? 'Kezded megérteni, de több tanulásra van szükséged.' :
                  'Javasolt az anyag újbóli áttanulmányozása.'}
            </div>
        </div>
    `;
    
    detailsHTML += '</div>';
    
    resultsContainer.innerHTML = detailsHTML;
    resultsContainer.className = `results-container show ${resultClass}`;
    
    // Scroll to results with smooth animation
    setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll animation for elements
function handleScroll() {
    const elements = document.querySelectorAll('.property-card, .example-card-large, .formula-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.animation = 'fadeIn 0.8s ease-out 0.2s forwards';
    
    // Initialize quiz
    initializeQuiz();
    handleScroll();
    
    // Add welcome animation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.animation = 'slideDown 0.6s ease-out';
    }
});

// Add active state to nav links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-blue)';
        }
    });
});

// Prevent form submission on Enter key in quiz
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.target.closest('.quiz-section')) {
        event.preventDefault();
    }
});

// Add touch support for mobile
if (window.innerWidth <= 768) {
    document.addEventListener('touchstart', function() {
        // Touch event handler for mobile optimization
    });
}

// Add keyboard accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const results = document.getElementById('results');
        if (results && results.classList.contains('show')) {
            results.innerHTML = '';
            results.classList.remove('show', 'success', 'partial');
        }
    }
});

// Console welcome message
console.log('%c📐 Viète-Tétel Oktatási Weboldal', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cPolinomok és egyenletek mestere', 'font-size: 14px; color: #f59e0b;');
console.log('%cMagyar nyelvű matematikai enciklopédia', 'font-size: 12px; color: #999;');
console.log('%cFrançois Viète eredménye 16. századi francia matematikusnak', 'font-size: 11px; color: #666;');
