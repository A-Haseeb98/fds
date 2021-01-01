function createPost() {
    post = (
        {
            head: document.getElementById('head').value,
            date: new Date().getTime(),
            text: document.getElementById('text').value
        }
    )
    //  console.log(post.heading);

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000';

    Http.open("POST", url + '/post');
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(post));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    }
    // console.log(Http.responseText);
    return false;
}

function getPosts() {

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000';

    Http.open("GET", url + '/get');
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send();
    Http.onreadystatechange = (e) => {

        var iposts = JSON.parse((Http.responseText));
        if (Http.readyState === 4) {
            for (let i = 0; i < iposts.length; i++) {
                // console.log(iposts[i]);
                var eachPost = document.createElement("div")
                eachPost.innerHTML =
                 `<h1 > ${iposts[i].head} </h1> 
                    <p> ${iposts[i].date} </p>
                    <p >${iposts[i].text} </p>`;
                document.getElementById("main").appendChild(eachPost)
            }
        }
    }
}

socket.on("NEW_POST", (newPost) => {

    
    var iposts = JSON.parse((Http.responseText));
    if (Http.readyState === 4) {
        for (let i = 0; i < iposts.length; i++) {
            // console.log(iposts[i]);
            var eachPost = document.createElement("div")
            eachPost.innerHTML =
             `<h1 > ${iposts[i].head} </h1> 
                <p> ${iposts[i].date} </p>
                <p >${iposts[i].text} </p>`;
            document.getElementById("main").appendChild(eachPost)
        }
    }
})