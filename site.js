document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('[data-copy-status]');
    try {
      await navigator.clipboard.writeText('ludo.pia49@gmail.com');
      status.textContent = 'E-posta adresi kopyalandı.';
    } catch {
      status.textContent = 'Otomatik kopyalama yapılamadı. Adresi seçip kopyalayabilirsin: ludo.pia49@gmail.com';
    }
  });
});
