/* Initialisation générale Afrique En Poche */
(function(){
  // AOS
  if (window.AOS) { AOS.init(); }

  // Feather icons
  if (window.feather && typeof window.feather.replace === 'function') {
    window.feather.replace();
  }

  // Swiper v8 init
  if (window.Swiper) {
    new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  }

  // Country switcher
  const switcher = document.querySelector('[data-country-switcher]');
  const dropdown = document.querySelector('[data-country-dropdown]');
  const selectedFlag = document.querySelector('[data-country-flag]');
  const selectedName = document.querySelector('[data-country-name]');

  function setCountry(code, name){
    localStorage.setItem('aep:country', code);
    if (selectedFlag) selectedFlag.src = `https://flagcdn.com/24x18/${code}.png`;
    if (selectedName) selectedName.textContent = name;
    document.documentElement.setAttribute('data-country', code);
  }

  // Restore
  const saved = localStorage.getItem('aep:country');
  if (saved) {
    const item = document.querySelector(`[data-country-option="${saved}"]`);
    if (item) setCountry(saved, item.getAttribute('data-name'));
  }

  if (switcher && dropdown){
    switcher.addEventListener('click', () => dropdown.classList.toggle('open'));
    document.addEventListener('click', (e)=>{
      if (!dropdown.contains(e.target) && !switcher.contains(e.target)) dropdown.classList.remove('open');
    });
    dropdown.querySelectorAll('[data-country-option]').forEach(btn => {
      btn.addEventListener('click', ()=>{
        setCountry(btn.getAttribute('data-country-option'), btn.getAttribute('data-name'));
        dropdown.classList.remove('open');
      });
    });
  }
})();


