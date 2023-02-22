const element = document.querySelectorAll('a')

let prevFetchLink = null

// function to fetch json data from @url.
const fetchData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow"
    })

    return response.json()
}

element.forEach(element => {
    element.addEventListener("click", (event) => {
        const link = element.dataset.link
        // prevent requesting for the same data frequently.
        if (prevFetchLink == null || prevFetchLink != link) {
            prevFetchLink = link
            fetchData(link).then((data) => {
                event.preventDefault()
                event.cancelable = true
                const output = document.querySelector("#output")
                output.innerText = JSON.stringify(data)
            })
        }
    })
});
