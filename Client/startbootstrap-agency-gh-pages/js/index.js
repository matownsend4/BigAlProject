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
    console.log(fname);
    const lname = document.getElementById("Lname").value;
    console.log(lname);
    const email = document.getElementById("email").value;
    console.log(email);
    const phone = document.getElementById("phone").value;
    console.log(phone);
    const psw = document.getElementById("psw").value;
    console.log(psw);

    console.log("made it");

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerFName: fname,
            customerLName: lname,
            customerEmail: email,
            customerPassword: psw,
            customerPhoneNo: phone
        })
    })
    .then((response)=>{
        console.log(response);
        getCustomerAccounts();
    })

    console.log("made it 2");
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