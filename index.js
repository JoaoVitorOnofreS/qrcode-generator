function handleTextInput() {
  const input = document.getElementById('textInput').value.trim();
  const qrContainer = document.getElementById('qrcode');
  const loading = document.getElementById('loading');

  qrContainer.innerHTML = '';
  loading.style.display = 'flex';

  if (input !== '') {
    // Simula tempo de geração (pode remover o setTimeout se for instantâneo)
    setTimeout(() => {
      new QRCode(qrContainer, {
        text: input,
        width: 200,
        height: 200,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H,
      });

      loading.style.display = 'none';
    }, 700); // tempo artificial de loading
  } else {
    loading.style.display = 'none';
  }
}

function generateQRCode(text) {
  const qrCode = new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: 200,
    height: 200,
  });

  qrCode.makeCode(text);

  console.log(qrCode);
}
