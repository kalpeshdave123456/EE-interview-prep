const byId = (id) => document.getElementById(id);
const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function initNav() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
}

function updateHomeStats() {
  const favs = storage.get('ee_favorites', []);
  const quizAttempts = storage.get('ee_quiz_attempts', []);
  const mockAttempts = storage.get('ee_mock_attempts', []);
  const readiness = Math.min(100, Math.round((favs.length * 5) + (quizAttempts.length * 8) + (mockAttempts.length * 10)));
  if (byId('favoriteCount')) byId('favoriteCount').textContent = favs.length;
  if (byId('quizAttempts')) byId('quizAttempts').textContent = quizAttempts.length;
  if (byId('mockAttempts')) byId('mockAttempts').textContent = mockAttempts.length;
  if (byId('readinessScore')) byId('readinessScore').textContent = `${readiness}%`;
}

function createBadge(text, cls='') {
  return `<span class="badge ${cls}">${text}</span>`;
}

function getFavorites() { return storage.get('ee_favorites', []); }
function toggleFavorite(questionText) {
  const favs = getFavorites();
  const next = favs.includes(questionText) ? favs.filter(q => q !== questionText) : [...favs, questionText];
  storage.set('ee_favorites', next);
  updateHomeStats();
  renderQuestions();
}

function fillCategorySelect(selectId, includeAll=true) {
  const select = byId(selectId);
  if (!select) return;
  const cats = [...new Set(questionBank.map(q => q.category))];
  select.innerHTML = `${includeAll ? '<option value="All">All categories</option>' : ''}${cats.map(c => `<option value="${c}">${c}</option>`).join('')}`;
}

function renderQuestions() {
  const container = byId('questionsContainer');
  if (!container) return;
  fillCategorySelect('categoryFilter');
  const params = new URLSearchParams(window.location.search);
  const categoryFilter = byId('categoryFilter');
  const difficultyFilter = byId('difficultyFilter');
  const searchInput = byId('questionSearch');
  if (params.get('category')) categoryFilter.value = params.get('category');

  const draw = () => {
    const favs = getFavorites();
    const category = categoryFilter.value;
    const difficulty = difficultyFilter.value;
    const term = searchInput.value.trim().toLowerCase();

    const filtered = questionBank.filter(q => {
      const combined = `${q.question} ${q.answer} ${(q.tags || []).join(' ')}`.toLowerCase();
      return (category === 'All' || q.category === category) &&
             (difficulty === 'All' || q.difficulty === difficulty) &&
             (!term || combined.includes(term));
    });
    if (byId('questionCount')) byId('questionCount').textContent = `${filtered.length} results`;

    container.innerHTML = filtered.map((q, idx) => `
      <article class="card question-card">
        <div class="meta-row">
          ${createBadge(q.category)}
          ${createBadge(q.difficulty, q.difficulty.toLowerCase())}
          ${(q.tags || []).map(tag => createBadge(tag)).join('')}
        </div>
        <h3>Q${idx + 1}. ${q.question}</h3>
        <div class="card-actions">
          <button class="small-btn" data-reveal="answer-${idx}">Reveal answer</button>
          <button class="small-btn" data-favorite="${encodeURIComponent(q.question)}">${favs.includes(q.question) ? '★ Favorited' : '☆ Favorite'}</button>
        </div>
        <div class="reveal-box" id="answer-${idx}"><strong>Suggested answer:</strong><p>${q.answer}</p></div>
      </article>
    `).join('');

    container.querySelectorAll('[data-reveal]').forEach(btn => btn.onclick = () => byId(btn.dataset.reveal).classList.toggle('show'));
    container.querySelectorAll('[data-favorite]').forEach(btn => btn.onclick = () => toggleFavorite(decodeURIComponent(btn.dataset.favorite)));
  };

  ['change', 'input'].forEach(evt => {
    categoryFilter.addEventListener(evt, draw);
    difficultyFilter.addEventListener(evt, draw);
    searchInput.addEventListener(evt, draw);
  });
  draw();
}

function sample(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function renderQuiz() {
  const container = byId('quizContainer');
  if (!container) return;
  const categorySelect = byId('quizCategoryFilter');
  const newQuizBtn = byId('newQuizBtn');
  const resultCard = byId('quizResultCard');
  const scoreText = byId('quizScoreText');
  const cats = [...new Set(quizBank.map(q => q.category))];
  categorySelect.innerHTML = `<option value="All">All categories</option>${cats.map(c => `<option>${c}</option>`).join('')}`;

  const buildQuiz = () => {
    resultCard.classList.add('hidden');
    const category = categorySelect.value;
    const base = category === 'All' ? quizBank : quizBank.filter(q => q.category === category);
    const chosen = sample(base, Math.min(5, base.length));
    container.innerHTML = chosen.map((q, idx) => `
      <article class="card quiz-card" data-correct="${q.correct}">
        <div class="meta-row">${createBadge(q.category)}</div>
        <h3>Q${idx + 1}. ${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map((option, optionIdx) => `<button class="option-btn" data-option="${optionIdx}">${option}</button>`).join('')}
        </div>
        <div class="score-panel hidden"><strong>Explanation:</strong> ${q.explanation}</div>
      </article>
    `).join('');

    let answered = 0;
    let score = 0;
    container.querySelectorAll('.quiz-card').forEach(card => {
      const correct = Number(card.dataset.correct);
      const optionBtns = [...card.querySelectorAll('.option-btn')];
      const panel = card.querySelector('.score-panel');
      optionBtns.forEach((btn, idx) => {
        btn.onclick = () => {
          if (card.dataset.answered === 'yes') return;
          card.dataset.answered = 'yes';
          answered += 1;
          optionBtns.forEach((b, i) => {
            if (i === correct) b.classList.add('correct');
          });
          if (idx === correct) score += 1;
          else btn.classList.add('wrong');
          panel.classList.remove('hidden');
          if (answered === chosen.length) {
            resultCard.classList.remove('hidden');
            scoreText.textContent = `You scored ${score} / ${chosen.length}. Keep revising weak categories and retry another quiz.`;
            const attempts = storage.get('ee_quiz_attempts', []);
            attempts.push({ score, total: chosen.length, ts: Date.now() });
            storage.set('ee_quiz_attempts', attempts);
            updateHomeStats();
          }
        };
      });
    });
  };
  newQuizBtn.addEventListener('click', buildQuiz);
  buildQuiz();
}

function renderMock() {
  const container = byId('mockContainer');
  if (!container) return;
  const modeSelect = byId('mockModeSelect');
  const countInput = byId('mockQuestionCount');
  const startBtn = byId('startMockBtn');

  const getPool = () => {
    const mode = modeSelect.value;
    if (mode === 'behavioral') return behavioralQuestions.map(q => ({ type: 'Behavioral', question: q.question, answer: `${q.framework} Tip: ${q.tip}` }));
    if (mode === 'technical') return questionBank.map(q => ({ type: q.category, question: q.question, answer: q.answer }));
    if (mode === 'verilog') return questionBank.filter(q => q.category === 'Verilog').map(q => ({ type: q.category, question: q.question, answer: q.answer }));
    if (mode === 'digital') return questionBank.filter(q => q.category === 'Digital Logic').map(q => ({ type: q.category, question: q.question, answer: q.answer }));
    if (mode === 'analog') return questionBank.filter(q => q.category === 'Analog Design').map(q => ({ type: q.category, question: q.question, answer: q.answer }));
    return [
      ...questionBank.map(q => ({ type: q.category, question: q.question, answer: q.answer })),
      ...behavioralQuestions.map(q => ({ type: 'Behavioral', question: q.question, answer: `${q.framework} Tip: ${q.tip}` }))
    ];
  };

  const draw = () => {
    const count = Math.max(3, Math.min(15, Number(countInput.value) || 6));
    const chosen = sample(getPool(), count);
    container.innerHTML = chosen.map((item, idx) => `
      <article class="card mock-card">
        <div class="meta-row">${createBadge(item.type)}</div>
        <h3>Round ${idx + 1}. ${item.question}</h3>
        <p>Speak your answer out loud. Structure it clearly and keep it focused.</p>
        <div class="card-actions"><button class="small-btn" data-reveal="mock-${idx}">Reveal coach notes</button></div>
        <div class="reveal-box" id="mock-${idx}">${item.answer}</div>
      </article>
    `).join('') + `
      <article class="card panel">
        <h3>Self-review</h3>
        <div class="filters three">
          <select id="mockRating">
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Needs work">Needs work</option>
          </select>
          <input id="mockMinutes" type="number" value="30" min="5" max="90" />
          <button id="saveMockReview" class="btn btn-primary">Save session</button>
        </div>
      </article>`;

    container.querySelectorAll('[data-reveal]').forEach(btn => btn.onclick = () => byId(btn.dataset.reveal).classList.toggle('show'));
    byId('saveMockReview').onclick = () => {
      const attempts = storage.get('ee_mock_attempts', []);
      attempts.push({ rating: byId('mockRating').value, minutes: Number(byId('mockMinutes').value) || 30, ts: Date.now() });
      storage.set('ee_mock_attempts', attempts);
      updateHomeStats();
      byId('saveMockReview').textContent = 'Saved';
    };
  };
  startBtn.addEventListener('click', draw);
}

function renderFlashcards() {
  const container = byId('flashcardsContainer');
  if (!container) return;
  const select = byId('flashcardCategoryFilter');
  const btn = byId('shuffleFlashcardsBtn');
  const cats = [...new Set(flashcards.map(f => f.category))];
  select.innerHTML = `<option value="All">All categories</option>${cats.map(c => `<option>${c}</option>`).join('')}`;

  const draw = () => {
    const category = select.value;
    const pool = category === 'All' ? flashcards : flashcards.filter(f => f.category === category);
    const chosen = sample(pool, pool.length);
    container.innerHTML = chosen.map((f, idx) => `
      <article class="card flashcard" data-index="${idx}">
        <div class="flashcard-inner">
          <div class="flashcard-face">
            <div class="meta-row">${createBadge(f.category)}</div>
            <h3>${f.front}</h3>
            <p>Tap to flip</p>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="meta-row">${createBadge('Answer')}</div>
            <p>${f.back}</p>
          </div>
        </div>
      </article>
    `).join('');
    container.querySelectorAll('.flashcard').forEach(card => card.onclick = () => card.classList.toggle('flipped'));
  };
  select.addEventListener('change', draw);
  btn.addEventListener('click', draw);
  draw();
}

function renderNotes() {
  const container = byId('notesContainer');
  if (!container) return;
  container.innerHTML = revisionNotes.map(note => `
    <article class="card note-card">
      <h3>${note.title}</h3>
      <ul class="clean-list">${note.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderBehavioral() {
  const container = byId('behavioralContainer');
  if (!container) return;
  container.innerHTML = behavioralQuestions.map((q, idx) => `
    <article class="card behavior-card">
      <div class="meta-row">${createBadge('Behavioral')}</div>
      <h3>${idx + 1}. ${q.question}</h3>
      <p><strong>Framework:</strong> ${q.framework}</p>
      <p><strong>Interview tip:</strong> ${q.tip}</p>
    </article>
  `).join('');
}

function renderCompanies() {
  const container = byId('companiesContainer');
  if (!container) return;
  container.innerHTML = companyTracks.map(c => `
    <article class="card company-card">
      <h3>${c.name}</h3>
      <p>${c.focus}</p>
      <ul>${c.prep.map(item => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function init() {
  initNav();
  updateHomeStats();
  const page = document.body.dataset.page;
  if (page === 'questions') renderQuestions();
  if (page === 'quiz') renderQuiz();
  if (page === 'mock') renderMock();
  if (page === 'flashcards') renderFlashcards();
  if (page === 'notes') renderNotes();
  if (page === 'behavioral') renderBehavioral();
  if (page === 'companies') renderCompanies();
}

document.addEventListener('DOMContentLoaded', init);
