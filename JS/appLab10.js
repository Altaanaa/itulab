document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    const rssUrl = 'https://ikon.mn/rss';

    xhr.open('GET', rssUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
            displayNews(xmlDoc);
        } else {
            console.error('Failed to load RSS feed:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Request error');
    };

    xhr.send();
});

function displayNews(xmlDoc) {
    const items = xmlDoc.getElementsByTagName('item');
    const container = document.querySelector('.container');

    Array.from(items).forEach(item => {
        const title = item.getElementsByTagName('title')[0].textContent;
        const description = item.getElementsByTagName('description')[0].textContent;
        const pubDate = item.getElementsByTagName('pubDate')[0].textContent;

        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        newsItem.innerHTML = `
            <a href="#" class="news-title">${title}</a>
            <p class="news-description">${description}</p>
            <p class="news-date">${pubDate}</p>
        `;

        container.appendChild(newsItem);
    });
}
