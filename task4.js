const API_KEY =
  'w8pmhthc8az3k0ay144ghvfzy8cyx8hbq7c1eptdxp5ur6aawuk2kvfdlyob5ggwbhghsg';
const BASE_URL = `https://whatcms.org/API/Tech?key=${API_KEY}&url=`;

const request_urls = [
  'vuejs.org',
  'vuex.vuejs.org',
  'vuetifyjs.com',
  'stackoverflow.com',
  'reddit.com',
  'github.com',
  'developer.mozilla.org',
  'foobaaaar123.foo',
  'fooooobar321.foo',
  'foo123baaar.fooo',
];

// helper
async function fetchData(url) {
  try {
    const response = await fetch(BASE_URL + url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`error for ${url}:`, error);
  }
}

async function fetchAllData() {
  try {
    const promises = request_urls.map((url) => fetchData(url));

    await Promise.all(promises);

    console.log('Выполнение завершено');
  } catch (error) {
    console.log('error:', error);
  }
}

fetchAllData();
