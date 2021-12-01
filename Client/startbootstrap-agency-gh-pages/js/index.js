// function getPosts(){
//     const allPostsUrl = "https://localhost:7200/api/posts";

//     fetch(allPostsUrl).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(json){
//         let html = "<ul>";
//         json.slice().reverse().forEach((post)=>{
//             html += "<li><div class = \"avatar\"></div><span>" + "&emsp;" + "&emsp;" +
//             post.postText + "</span></li></div><div class = \"editbutton\">" + 
//             "<form id=\"submission\" onsubmit = \"return false\"; method = \"put\">" +
//             "<input type = \"text\" name = \"update\"  placeholder = \"Edit Status\" id = \"update\"/>" +
//             "<input type = \"submit\" value = \"Edit\" onclick = \"editStatus("+post.postID+")\"/>"  
//             + "</form></div>" 
//             + "<div class = \"deletebutton\">" + 
//             "<form id=\"submission\" onsubmit = \"return false\"; method = \"delete\">" +
//             "<button  onclick = \"deleteStatus("+post.postID+");\">Delete</button>" +
//             "</form>" + "</div>"

//             // "<form id=\"submission\" onsubmit = \"return false\"; method = \"put\">" +
//             // "<input type = \"text\" name = \"edit\" placeholder = \"Enter ID to Edit\" id = \"edit\"/>" +
//             // "<input type = \"text\" name = \"update\"  placeholder = \"What would you like to say?\" id = \"update\"/>" + 
//             // "<input type = \"submit\" value = \"Edit Post\" onclick = \"editStatus()\"/>" + 
//             // + "</form>" +
            
//         })
//         html += "</ul>";
//         document.getElementById("posts").innerHTML = html;
//         console.log(json);
//     }).catch(function(error){
//         console.log(error);
//     });  
// }
function handleOnLoad()
{
    const postUrl = "https://localhost:5001/api/customer";
    console.log(postUrl);

    fetch(postUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });
}

function postCustomerAccount(){
    const postUrl = "https://localhost:5001/api/customer";
    const fname = document.getElementById("Fname").value;
    const lname = document.getElementById("Lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const psw = document.getElementById("psw").value;
    const pswrepeat = document.getElementById("psw-repeat").value;

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customer_first_name: fname,
            customer_last_name: lname,
            customer_email: email,
            customer_phone_no: phone,
            customer_password: psw
        })
    })
    .then((response)=>{
        console.log(response);
        // getPosts();
    })
}

function postVendorAccount(){
    const vendorUrl = "https://localhost:5001/api/vendor";
    const businessUrl = "https://localhost:5001/api/vendorbooth";
    const text = document.getElementById("post").value;
    const date = document.getElementById("dateTime").innerHTML = new Date();

    fetch(vendorUrl, {
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
        // getPosts();
    })

    fetch(businessUrl, {
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
        // getPosts();
    })
}


// function editStatus(id){
//    // const id = document.getElementById("edit").value;
//     const putUrl = "https://localhost:7200/api/posts/" + id;
//     const text = document.getElementById("update").value;
//     // const date = document.getElementById("dateTime").innerHTML = new Date();

//     fetch(putUrl, {
//         method: "PUT",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             postID: id,
//             postText: text
//             // stamp: date
//         })
//     })
//     .then((response)=>{
//         console.log(response);
//         getPosts();
//     })
// }

// function deleteStatus(id){
//    // var id = document.getElementById("delete");
//     const deleteUrl = "https://localhost:7200/api/posts/" + id;
//    // postID: parseInt(text);

//     fetch(deleteUrl, {
//         method: "DELETE",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             postID: id
//             // stamp: date
//         })

//     })
//     .then((response)=>{
//         console.log(response);
//         getPosts();
//     })
// }