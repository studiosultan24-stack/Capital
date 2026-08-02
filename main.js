/* ========================================================
   Capital — Capitalize Your Resources
   Shared script (used by index.html [AR] and en.html [EN])
   Expects a global `CAPITAL_LANG` = 'ar' | 'en' set in each page
   ======================================================== */

(function(){
  const LANG = window.CAPITAL_LANG === 'en' ? 'en' : 'ar';

  // ---- Core values data (periodic-table tiles) ----
  const values = [
    {n:1, sym:'C', ar:'الالتزام', en:'Commitment', d_ar:'ملتزمون برضاء العميل والالتزام طويل الأمد.', d_en:'Committed to delivering excellence and building long-term client relationships.'},
    {n:2, sym:'A', ar:'الدقة', en:'Accuracy', d_ar:'الدقة والجودة بكل تركيبة.', d_en:'Precision and reliability in every formulation.'},
    {n:3, sym:'P', ar:'الأداء', en:'Performance', d_ar:'ضمان جودة عالية ونتائج فعالة.', d_en:'Ensuring high quality, results-driven chemistry.'},
    {n:4, sym:'I', ar:'الابتكار', en:'Innovation', d_ar:'أفكار جديدة ومتطورة في الحلول الكيميائية.', d_en:'Pioneering new ideas in chemical solutions.'},
    {n:5, sym:'T', ar:'الدعم الفني', en:'Technical Support', d_ar:'دعم مستمر للتطبيق الأمثل.', d_en:'Expert guidance for optimal application.'},
    {n:6, sym:'A', ar:'التوافر', en:'Availability', d_ar:'توافر دائم وسرعة استجابة.', d_en:'Always accessible with responsive supply solutions.'},
    {n:7, sym:'L', ar:'الاستدامة', en:'Longevity', d_ar:'نتائج مستدامة مصممة لتدوم.', d_en:'Durable, sustainable results built to last.'},
  ];

  const row = document.getElementById('periodicRow');
  if(row){
    row.innerHTML = values.map(v => `
      <div class="elem">
        <span class="num">${String(v.n).padStart(2,'0')}</span>
        <div class="sym">${v.sym}</div>
        <div class="ename">${LANG === 'ar' ? v.ar : v.en}</div>
        <div class="desc">${LANG === 'ar' ? v.d_ar : v.d_en}</div>
      </div>
    `).join('');
  }

  // ---- Mobile menu ----
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if(burger && navLinks){
    burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
  }

  // ---- Contact form (static demo — wire up to a backend / mailto as needed) ----
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert(LANG === 'ar' ? 'شكراً لتواصلك! هنرد عليك قريب.' : 'Thanks for reaching out! We will get back to you soon.');
      this.reset();
    });
  }
})();
