function postStatus(){
    const postUrl = "https://localhost:7200/api/posts";
    const text = document.getElementById("post").value;
    const date = document.getElementById("dateTime").innerHTML = new Date();

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postText: text,
            stamp: date
        })
    })
    .then((response)=>{
        console.log(response);
        getPosts();
    })
}


function editStatus(id){
   // const id = document.getElementById("edit").value;
    const putUrl = "https://localhost:7200/api/posts/" + id;
    const text = document.getElementById("update").value;
    // const date = document.getElementById("dateTime").innerHTML = new Date();

    fetch(putUrl, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postID: id,
            postText: text
            // stamp: date
        })
    })
    .then((response)=>{
        console.log(response);
        getPosts();
    })
}

function deleteStatus(id){
   // var id = document.getElementById("delete");
    const deleteUrl = "https://localhost:7200/api/posts/" + id;
   // postID: parseInt(text);

    fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postID: id
            // stamp: date
        })

    })
    .then((response)=>{
        console.log(response);
        getPosts();
    })
}