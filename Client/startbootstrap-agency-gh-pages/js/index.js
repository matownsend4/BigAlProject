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
<<<<<<< HEAD
    // const fname = document.getElementById("Fname").value;
    // const lname = document.getElementById("Lname").value;
    // const email = document.getElementById("email").value;
    // const phone = document.getElementById("phone").value;
    // const psw = document.getElementById("psw").value;

    const fname = document.getElementById("Fname").value;
    const lname = document.getElementById("Lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const psw = document.getElementById("psw").value;

    console.log("made it");
=======
    const CustomerFName = document.getElementById("CustomerFName").value;
    const CustomerLName = document.getElementById("CustomerLName").value;
    const CustomerEmail = document.getElementById("CustomerEmail").value;
    const CustomerPhone = document.getElementById("CustomerPhone").value;
    const CustomerPassword = document.getElementById("CustomerPassword").value;
>>>>>>> f8f823542d4e12dc1a912a17520d9332363edf00

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
<<<<<<< HEAD
            customer_first_name: fname,
            customer_last_name: lname,
            customer_email: email,
            customer_phone_no: phone,
            customer_password: psw,
=======
            customer_first_name : CustomerFName,
            customer_last_name : CustomerLName,
            customer_email : CustomerEmail,
            customer_phone_no : CustomerPhone,
            customer_password : CustomerPassword,
>>>>>>> f8f823542d4e12dc1a912a17520d9332363edf00
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
    const VendorFName = document.getElementById("VendorFName").value;
    const VendorLName = document.getElementById("VendorLName").value;
    const VendorEmail = document.getElementById("VendorEmail").value;
    const VendorPhone = document.getElementById("VendorPhone").value;
    const VendorPassword = document.getElementById("VendorPassword").value;
    const BusinessName = document.getElementById("BusinessName").value;
    const BusinessType = document.getElementById("BusinessType").value;
    const BusinessDescription = document.getElementById("BusinessDescription").value;

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
            vendor_first_name : VendorFName,
            vendor_last_name : VendorLName,
            vendor_email : VendorEmail,
            vendor_phone_no : VendorPhone,
            vendor_password : VendorPassword,
            business_name : BusinessName,
            business_type : BusinessType,
            business_description : BusinnessDescription,
          
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