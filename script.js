const products = [
    { name: 'Air Max SNDR GORE-TEX', url: 'Pag1.html' },
    { name: 'Air Jordan 1 Low x Travis Scott', url: 'Pag2.html' },
    { name: 'Nike SB Dunk Low Pro x Verdy', url: 'Pag3.html' },
    { name: 'Nike SB Dunk Low Sandy', url: 'Pag4.html' },
    { name: 'Kobe 5 Protro x Undefeated', url: 'Pag5.html' },
    { name: 'Air Jordan 1 Low OG x Travis Scott Canary', url: 'Pag6.html' },
    { name: 'Nike Dunk High Wu-Tang', url: 'Pag7.html' },
    { name: 'Air Jordan 1 High x off white (unc)', url: 'Pag8.html' },
    { name: 'Air Jordan 4 SB Pine Green', url: 'Pag9.html' },
    { name: 'Nike Dunk Low Ben & Jerry Chunky Dunky', url: 'Pag10.html' },
    { name: 'Orange Lobster Nike SB Dunk Low', url: 'Pag11.html' },
    { name: 'Nike Air AIR FORCE 1', url: 'Pag12.html' },
    { name: 'Orange Lobster Nike SB Dunk Low', url: 'Pag13.html' },
    { name: 'Nike Blazer', url: 'Pag14.html' },
];

document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (query) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const resultLink = document.createElement('a');
                resultLink.textContent = product.name;
                resultLink.href = product.url;
                resultsContainer.appendChild(resultLink);
            });
        } else {
            resultsContainer.innerHTML = '<p>Nessun prodotto trovato</p>';
        }
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkModeActive = document.body.classList.contains('dark-mode');
    document.getElementById('toggleDarkMode').textContent = isDarkModeActive ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkModeActive);
}

document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggleDarkMode').textContent = '☀️';
}