// 動態生成符號格子
Object.keys(symbols).forEach(gridId => {
  const grid = document.getElementById(gridId);
  symbols[gridId].forEach(item => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = typeof item === 'string' ? item : item.symbol;
    if (typeof item === 'object') cell.title = item.title;
    
    // Add click event listener to copy content
    cell.addEventListener('click', () => {
      const textToCopy = cell.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        // 在格子上方顯示提示
        const toast = document.createElement('div');
        toast.textContent = '已複製';
        toast.style.cssText = `
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #4CAF50;
          color: white;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 12px;
          white-space: nowrap;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
        `;
        
        cell.style.position = 'relative';
        cell.appendChild(toast);
        
        // 顯示提示
        toast.style.opacity = '1';
        // 2秒後移除
        setTimeout(() => toast.remove(), 2000);
      });
    });
    grid.appendChild(cell);
  });
});

    // TOP 按鈕功能
    const toTopButton = document.querySelector('.to-top');
    window.addEventListener('scroll', () => {
      toTopButton.classList.toggle('show', window.scrollY > 200);
    });
    toTopButton.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });