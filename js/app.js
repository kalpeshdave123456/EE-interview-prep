const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const byId = (id) => document.getElementById(id);
const createBadge = (label, cls = '') => `<span class="badge ${cls}">${label}</span>`;
const getFavorites = () => storage.get('ee_favorites', []);

function initNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) toggle.onclick = () => nav.classList.toggle('open');
}

function updateHomeStats() {
  const favorites = getFavorites();
  const quizAttempts = storage.get('ee_quiz_attempts', []);
  const mockAttempts = storage.get('ee_mock_attempts', []);
  const companyAttempts = storage.get('ee_company_attempts', []);
  const analyticsAttempts = storage.get('ee_analytics_attempts', []);
  const totalScore = [
    ...quizAttempts.map(x => (100 * x.score) / x.total),
    ...mockAttempts.map(x => (100 * x.score) / x.total),
    ...companyAttempts.map(x => (100 * x.score) / x.total),
    ...analyticsAttempts.map(x => (100 * x.score) / x.total)
  ];
  const readiness = totalScore.length ? Math.round(totalScore.reduce((a, b) => a + b, 0) / totalScore.length) : 0;
  [['favoriteCount', favorites.length], ['quizAttempts', quizAttempts.length], ['mockAttempts', mockAttempts.length], ['readinessScore', `${readiness}%`], ['analyticsAttempts', analyticsAttempts.length]].forEach(([id, val]) => {
    const el = byId(id);
    if (el) el.textContent = val;
  });
}

function sample(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function toggleFavorite(questionText) {
  const favs = getFavorites();
  const next = favs.includes(questionText) ? favs.filter(q => q !== questionText) : [...favs, questionText];
  storage.set('ee_favorites', next);
  updateHomeStats();
  renderQuestions();
}

function fillCategorySelect(selectId, data, includeAll = true) {
  const select = byId(selectId);
  if (!select) return;
  const cats = [...new Set(data.map(q => q.category))];
  select.innerHTML = `${includeAll ? '<option value="All">All categories</option>' : ''}${cats.map(c => `<option value="${c}">${c}</option>`).join('')}`;
}

function renderQuestions() {
  const container = byId('questionsContainer');
  if (!container) return;
  fillCategorySelect('categoryFilter', questionBank);
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

    const count = byId('questionCount');
    if (count) count.textContent = `${filtered.length} results`;

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

function buildMcqMarkup(q, idx, groupName) {
  return `
    <article class="card quiz-card">
      <div class="meta-row">${createBadge(q.category || 'Mixed')}</div>
      <h3>Q${idx + 1}. ${q.question}</h3>
      <div class="quiz-options">
        ${q.options.map((option, optionIdx) => `
          <label class="option-row">
            <input type="radio" name="${groupName}-${idx}" value="${optionIdx}" />
            <span>${option}</span>
          </label>
        `).join('')}
      </div>
      <div class="score-panel hidden" id="exp-${groupName}-${idx}"><strong>Explanation:</strong> ${q.explanation}</div>
    </article>`;
}

function gradeQuizSet({ containerId, resultId, questions, groupName, storageKey }) {
  const container = byId(containerId);
  const resultBox = byId(resultId);
  if (!container || !resultBox) return;
  let score = 0;
  let answered = 0;

  questions.forEach((q, idx) => {
    const selected = container.querySelector(`input[name="${groupName}-${idx}"]:checked`);
    const labels = [...container.querySelectorAll(`input[name="${groupName}-${idx}"]`)].map(i => i.closest('.option-row'));
    const exp = byId(`exp-${groupName}-${idx}`);
    labels.forEach((label, i) => {
      label.classList.remove('correct', 'wrong');
      if (i === q.correct) label.classList.add('correct');
    });
    if (selected) {
      answered += 1;
      if (Number(selected.value) === q.correct) score += 1;
      else selected.closest('.option-row').classList.add('wrong');
    }
    exp.classList.remove('hidden');
  });

  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `<h3>Final score</h3><p>You answered ${answered}/${questions.length} questions and scored <strong>${score}/${questions.length}</strong>.</p><p class="muted">Review the explanations below and retry weak domains.</p>`;
  const attempts = storage.get(storageKey, []);
  attempts.push({ score, total: questions.length, ts: Date.now() });
  storage.set(storageKey, attempts);
  updateHomeStats();
}

function renderQuiz() {
  const container = byId('quizContainer');
  if (!container) return;
  const categorySelect = byId('quizCategoryFilter');
  const newQuizBtn = byId('newQuizBtn');
  const submitBtn = byId('submitQuizBtn');
  const cats = [...new Set(quizBank.map(q => q.category))];
  categorySelect.innerHTML = `<option value="All">All categories</option>${cats.map(c => `<option>${c}</option>`).join('')}`;
  let chosen = [];

  const buildQuiz = () => {
    byId('quizResultCard').classList.add('hidden');
    const category = categorySelect.value;
    const base = category === 'All' ? quizBank : quizBank.filter(q => q.category === category);
    chosen = sample(base, Math.min(10, base.length));
    container.innerHTML = chosen.map((q, idx) => buildMcqMarkup(q, idx, 'quiz')).join('');
  };

  submitBtn.onclick = () => gradeQuizSet({ containerId: 'quizContainer', resultId: 'quizResultCard', questions: chosen, groupName: 'quiz', storageKey: 'ee_quiz_attempts' });
  newQuizBtn.onclick = buildQuiz;
  buildQuiz();
}

function renderMock() {
  const container = byId('mockContainer');
  if (!container) return;
  const modeSelect = byId('mockModeSelect');
  const countInput = byId('mockQuestionCount');
  const startBtn = byId('startMockBtn');
  const submitBtn = byId('submitMockBtn');
  let chosen = [];

  const getPool = () => {
    const mode = modeSelect.value;
    if (mode === 'verilog') return quizBank.filter(q => q.category === 'Verilog');
    if (mode === 'digital') return quizBank.filter(q => q.category === 'Digital Logic');
    if (mode === 'analog') return quizBank.filter(q => q.category === 'Analog Design');
    if (mode === 'behavioral') {
      return behavioralQuestions.map((q, idx) => ({
        category: 'Behavioral',
        question: q.question,
        options: ['Well structured STAR answer', 'Very generic with no example', 'Only theory and no real scenario', 'Avoid answering directly'],
        correct: 0,
        explanation: `${q.framework} Tip: ${q.tip}`
      }));
    }
    return quizBank;
  };

  const buildMock = () => {
    byId('mockResultCard').classList.add('hidden');
    const count = Math.max(5, Math.min(15, Number(countInput.value) || 10));
    chosen = sample(getPool(), count);
    container.innerHTML = chosen.map((q, idx) => buildMcqMarkup(q, idx, 'mock')).join('');
  };

  startBtn.onclick = buildMock;
  submitBtn.onclick = () => gradeQuizSet({ containerId: 'mockContainer', resultId: 'mockResultCard', questions: chosen, groupName: 'mock', storageKey: 'ee_mock_attempts' });
  buildMock();
}

function renderFlashcards() {
  const container = byId('flashcardsContainer');
  if (!container) return;
  const select = byId('flashcardCategoryFilter');
  const btn = byId('shuffleFlashcardsBtn');
  fillCategorySelect('flashcardCategoryFilter', flashcards);

  const draw = () => {
    const category = select.value;
    const pool = category === 'All' ? flashcards : flashcards.filter(f => f.category === category);
    const chosen = sample(pool, pool.length);
    container.innerHTML = chosen.map((f) => `
      <article class="card flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-face">
            <div class="meta-row">${createBadge(f.category)}</div>
            <h3>${f.front}</h3>
            <p>Click to flip</p>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="meta-row">${createBadge('Answer')}</div>
            <p>${f.back}</p>
          </div>
        </div>
      </article>`).join('');
    container.querySelectorAll('.flashcard').forEach(card => card.onclick = () => card.classList.toggle('flipped'));
  };

  select.onchange = draw;
  btn.onclick = draw;
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
  const list = byId('companiesContainer');
  const testWrap = byId('companyTestWrap');
  if (!list || !testWrap) return;
  let currentCompany = companyTracks[0].id;

  const drawCards = () => {
    list.innerHTML = companyTracks.map(c => `
      <article class="card company-card ${currentCompany === c.id ? 'selected' : ''}">
        <h3>${c.name}</h3>
        <p>${c.focus}</p>
        <ul>${c.prep.map(item => `<li>${item}</li>`).join('')}</ul>
        <button class="btn btn-secondary full" data-company="${c.id}">Start 10-question paper</button>
      </article>
    `).join('');
    list.querySelectorAll('[data-company]').forEach(btn => btn.onclick = () => {
      currentCompany = btn.dataset.company;
      drawCards();
      drawTest();
      window.scrollTo({ top: testWrap.offsetTop - 80, behavior: 'smooth' });
    });
  };

  const drawTest = () => {
    const title = companyTracks.find(c => c.id === currentCompany)?.name || 'Company';
    const questions = companyTests[currentCompany] || [];
    testWrap.innerHTML = `
      <section class="card panel">
        <div class="section-head"><h2>${title} • 10-question paper</h2><span class="pill">Company-style practice</span></div>
        <div id="companyTestContainer">${questions.map((q, idx) => buildMcqMarkup(q, idx, 'company')).join('')}</div>
        <div class="card-actions">
          <button class="btn btn-primary" id="submitCompanyBtn">Submit paper</button>
        </div>
        <div id="companyResultCard" class="score-panel hidden"></div>
      </section>`;
    byId('submitCompanyBtn').onclick = () => gradeQuizSet({ containerId: 'companyTestContainer', resultId: 'companyResultCard', questions, groupName: 'company', storageKey: 'ee_company_attempts' });
  };

  drawCards();
  drawTest();
}

function renderVideos() {
  const container = byId('videosContainer');
  if (!container) return;
  container.innerHTML = videoSections.map(section => `
    <article class="card note-card video-card">
      <div class="meta-row">${createBadge('YouTube')}</div>
      <h3>${section.topic}</h3>
      <p>${section.summary}</p>
      <div class="action-list">
        ${section.links.map(link => `<a class="action-row" target="_blank" rel="noopener noreferrer" href="${link.url}">${link.title}<span>↗</span></a>`).join('')}
      </div>
    </article>`).join('');
}

function renderAnalytical() {
  const container = byId('analyticalContainer');
  if (!container) return;
  fillCategorySelect('analyticalCategoryFilter', analyticalQuestions);
  const categoryFilter = byId('analyticalCategoryFilter');
  const buildBtn = byId('buildAnalyticalBtn');
  const submitBtn = byId('submitAnalyticalBtn');
  let chosen = [];

  const draw = () => {
    byId('analyticalResultCard').classList.add('hidden');
    const category = categoryFilter.value;
    const pool = category === 'All' ? analyticalQuestions : analyticalQuestions.filter(q => q.category === category);
    chosen = sample(pool, Math.min(20, pool.length));
    container.innerHTML = chosen.map((q, idx) => buildMcqMarkup(q, idx, 'analytic')).join('');
  };
  buildBtn.onclick = draw;
  submitBtn.onclick = () => gradeQuizSet({ containerId: 'analyticalContainer', resultId: 'analyticalResultCard', questions: chosen, groupName: 'analytic', storageKey: 'ee_analytics_attempts' });
  draw();
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
  if (page === 'videos') renderVideos();
  if (page === 'analytical') renderAnalytical();
}

document.addEventListener('DOMContentLoaded', init);
