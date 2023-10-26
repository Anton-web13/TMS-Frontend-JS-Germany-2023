fetch('https://jsonplaceholder.typicode.com/posts/1', {
    body: JSON.stringify({
        title: "New Year",
        body: "New Year Decription",
    }),
    method: "PATCH",
    Headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})
    .then(response => response.json())
    .then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});

















