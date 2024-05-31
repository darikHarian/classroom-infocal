let postData = document.getElementById('post-data');
const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        info = '';
        data.forEach(post => {
            info += `
                <li>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </li>
            `;
        });
        postData.innerHTML = `
            <ul>
                ${info}
            </ul>
        `;
    } catch(error) {
        console.log('LA INFORMACIÓN SOLICITADA NO PUDO SER OBTENIDA', error);
    };
};