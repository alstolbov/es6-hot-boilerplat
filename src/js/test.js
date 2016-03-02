export default {
  a: () => {
    const n = document.createElement('div');
    n.innerHTML = 'test';
    const root = document.getElementById('game');
    root.appendChild(n);
  }
};
