function getCustomerAccounts(){
    const allPostsUrl = "https://localhost:5001/api/customer";

    fetch(allPostsUrl).then(function(response){
        console.log(response);
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
    const del = 'N';

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
            customer_password: psw,
            deleted: del
        })
    })
    .then((response)=>{
        console.log(response);
        getCustomerAccounts();
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