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
    const CustomerFName = document.getElementById("CustomerFName").value;
    const CustomerLName = document.getElementById("CustomerLName").value;
    const CustomerEmail = document.getElementById("CustomerEmail").value;
    const CustomerPhone = document.getElementById("CustomerPhone").value;
    const CustomerPassword = document.getElementById("CustomerPassword").value;

    fetch(postUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customer_first_name : CustomerFName,
            customer_last_name : CustomerLName,
            customer_email : CustomerEmail,
            customer_phone_no : CustomerPhone,
            customer_password : CustomerPassword,
        })
    })
    .then((response)=>{
        console.log(response);
        getCustomerAccounts();
    })
}
function getVendorAccounts(){
    const allPostsUrl = "https://localhost:5001/api/vendor";

    fetch(allPostsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });  
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
            vendor_first_name : VendorFName,
            vendor_last_name : VendorLName,
            vendor_email : VendorEmail,
            vendor_phone_no : VendorPhone,
            vendor_password : VendorPassword,
            business_name : BusinessName,
            business_type : BusinessType,
            business_description : BusinessDescription,
          
        })
    })
    .then((response)=>{
        console.log(response);
        getVendorAccount();
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