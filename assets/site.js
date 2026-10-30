(() => {
  const filters = document.querySelector('.research-filters');
  if (!filters) return;
  const groups = [...document.querySelectorAll('.research-group')];
  const buttons = [...filters.querySelectorAll('button')];
  const status = document.getElementById('filter-status');
  function select(category) {
    let count = 0;
    for (const group of groups) {
      group.hidden = category !== 'all' && group.dataset.category !== category;
      if (!group.hidden) count += group.querySelectorAll('.paper').length;
    }
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    status.textContent = `Showing ${count} research ${count === 1 ? 'project' : 'projects'}.`;
  }
  for (const button of buttons) button.addEventListener('click', () => select(button.dataset.filter));
  function revealHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if (!id) return;
    const paper = document.getElementById(id);
    if (!paper?.classList.contains('paper')) return;
    select('all');
    paper.querySelector('details').open = true;
    paper.scrollIntoView({block:'start'});
  }
  filters.hidden = false;
  select('all');
  revealHash();
  window.addEventListener('hashchange', revealHash);
})();
