export async function getNews() {
    return (await fetch('http://localhost:8080/news')).json()
}
