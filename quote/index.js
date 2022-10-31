let apiQuotes = [];

// get quotes ffrom api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[]12);
    } catch (error) {
        // catch error here
    }

    getQuotes();
}