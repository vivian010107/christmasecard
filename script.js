// script.js (JavaScript)
const themes = [
    { name: 'Snowman', img: 'postcard1.jpg', link: 'ecard-theme1.html' },
    { name: 'Christmas Tree', img: 'postcard2.jpg', link: 'ecard-theme2.html' },
    { name: 'Presents', img: 'postcard3.jpg', link: 'ecard-theme3.html' }
];

const container = document.getElementById('themeContainer');
themes.forEach(theme => {
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.innerHTML = `
      <img src="${theme.img}" alt="${theme.name}" width="200">
      <h3>${theme.name}</h3>
      <a href="${theme.link}"><button>🎄 Create Your E-Card 🎄</button></a>
    `;
    container.appendChild(card);
});