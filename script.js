
// display array of themes for the christmas ecard
const themes = [
    { name: 'Snowman', img: 'postcard1.jpg', link: 'ecard-theme1.html' },
    { name: 'Christmas Tree', img: 'postcard2.jpg', link: 'ecard-theme2.html' },
    { name: 'Presents', img: 'postcard3.jpg', link: 'ecard-theme3.html' }
];

// theme container from html file
const container = document.getElementById('themeContainer');
// create selection card for each theme
themes.forEach(theme => {
    const card = document.createElement('div');
    card.className = 'theme-card';
    // add the theme image, name and button
    card.innerHTML = `
      <img src="${theme.img}" alt="${theme.name}" width="200">
      <h3>${theme.name}</h3>
      <a href="${theme.link}"><button>🎄 Create Your E-Card 🎄</button></a>
    `;
    // add the card to the container
    container.appendChild(card);
});
