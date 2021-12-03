// customers //
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

// vendors //
function getVendorAccounts(){
    const allVendorsUrl = "https://localhost:5001/api/vendor";

    fetch(allVendorsUrl).then(function(response){
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
    console.log(VendorFName);
    const VendorLName = document.getElementById("VendorLName").value;
    console.log(VendorLName);
    const VendorEmail = document.getElementById("VendorEmail").value;
    console.log(VendorEmail);
    const VendorPhone = document.getElementById("VendorPhone").value;
    console.log(VendorPhone);
    const VendorPassword = document.getElementById("VendorPassword").value;
    console.log(VendorPassword);
    const BusinessName = document.getElementById("BusinessName").value;
    console.log(BusinessName);
    var x = document.getElementById("BusinessType").selectedIndex;
    const selectedBusiness = document.getElementsByName("BusinessType")[x].value;
    console.log(selectedBusiness);


    const BusinessDescription = document.getElementById("BusinessDescription").value;
    console.log(BusinessDescription);

    console.log("made it"); 

    fetch(vendorUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vendorFName : VendorFName,
            vendorLName : VendorLName,
            vendorEmail : VendorEmail,
            vendorPassword : VendorPassword,
            vendorPhoneNo : VendorPhone,
            businessName : BusinessName,
            businessType : selectedBusiness,
            businessDescription : BusinessDescription
        })
    })
    .then((response)=>{
        console.log(response);
        getVendorAccounts();
    })
}

// tickets //
function getTickets(){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

    fetch(allTicketsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });  
}

function postTicket(){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

    const adultTickets = document.getElementById("adultTickets").value;
    console.log(adultTickets);
    const scTickets = document.getElementById("scTickets").value;
    console.log(scTickets);
    

    console.log("made it");

    fetch(allTicketsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ticketPrice: adultTickets, 
            ticketType: scTickets
        })
    })
    .then((response)=>{
        console.log(response);
        getTickets();
    })

    console.log("made it 2");
}

 // booth //
 function getBooths(){
    const allBoothsUrl = "https://localhost:5001/api/vendorbooth";

    fetch(allBoothsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });  
}

function postBooth(){
    const allBoothsUrl = "https://localhost:5001/api/vendorbooth";

    const booth = document.getElementById("booth").value;
    console.log(booth);


    console.log("made it");
    fetch(allBoothsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            boothID: booth,
            boothCost : '50'
        })
    })
    .then((response)=>{
        console.log(response);
        getBooths();
    })

    console.log("made it 2");
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