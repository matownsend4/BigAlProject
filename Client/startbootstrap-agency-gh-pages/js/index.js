// customers //
function getCustomerAccounts(){
    const allCustomersUrl = "https://localhost:5001/api/customer";

    fetch(allCustomersUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        var custobj = json;
        console.log(custobj);
        console.log(json);
        return custobj;
    }).catch(function(error){
        console.log(error);
    });  
}

function postCustomerAccount(){
    const customerUrl = "https://localhost:5001/api/customer";

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

    fetch(customerUrl, {
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
    const vendorUrl = "https://localhost:5001/api/vendor";

    fetch(vendorUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(vendobj); //test
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
    var x = document.getElementById("TicketType").selectedIndex;
    const selectedTicket = document.getElementsByName("TicketType")[x].value;
    console.log(selectedTicket);

    const numberOfTickets = document.getElementById("numberOfTickets").value;
    console.log(numberOfTickets);
    
    var intNumTickets = parseInt(numberOfTickets);

    if(selectedTicket == "adult")
    {
        postAdultTicket(selectedTicket, intNumTickets);
    }
    else if(selectedTicket=="seniorchild")
    {
        postSenChildTicket(selectedTicket, intNumTickets);
    }  
}


function postAdultTicket(selectedTicket, intNumTickets){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

    console.log("made it");

    console.log(intNumTickets);
    for(let i=0; i<intNumTickets; i++)
    {
    fetch(allTicketsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ticketPrice: '5', 
            ticketType: selectedTicket
        })
    })
    .then((response)=>{
        console.log(response);
        getTickets();
    })

        console.log("made it 2"); 
    }
    
}

function postSenChildTicket(selectedTicket, intNumTickets){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

    console.log("made it");

    console.log(intNumTickets);
    for(let i=0; i<intNumTickets; i++)
    {
    fetch(allTicketsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ticketPrice: '3', 
            ticketType: selectedTicket
        })
    })
    .then((response)=>{
        console.log(response);
        getTickets();
    })

        console.log("made it 2"); 
    }
    
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

    // const booth = document.getElementById("booth").value;
    // console.log(booth);

    console.log("made it");
    fetch(allBoothsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            boothCost : '50'
        })
    })
    .then((response)=>{
        console.log(response);
        getBooths();
    })

    console.log("made it 2");
}

function displayProfile()
{
    let html = "<h3>Customer Account</h3>";
    document.getElementById("profileinfo").innerHTML = html;
}

// function displayProfile()
// {
//     let html = "<h3>Customer Account</h3>";
//     document.getElementById("profileinfo").innerHTML = html;
// }

// function displayProfile()
// {
//     let html = "<h3>Customer Account</h3>";
//     document.getElementById("profileinfo").innerHTML = html;
// }


var adminobj;
function searchAdmin(){
    const adminUrl = "https://localhost:5001/api/admin";

    fetch(adminUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        adminobj = json;
        console.log(adminobj);
        console.log(json);
        return adminobj;
    }).catch(function(error){
        console.log(error);
    });

    var emailLogin = document.getElementById("adminemail").value;
    var passwordLogin = document.getElementById("adminpsw").value;

    var emailIndex = adminobj.findIndex(obj => obj.adminEmail==emailLogin);
    console.log(emailIndex);

    var passwordIndex = adminobj.findIndex(obj => obj.adminPassword==passwordLogin);
    console.log(passwordIndex);

    var foundAdmin;
    if((emailIndex == passwordIndex) && (emailIndex != -1))
    {
        foundAdmin = true;
    }
    else
    {
        foundAdmin = false;
    }

    validateAdmin(foundAdmin);
}

function validateAdmin(foundAdmin)
{
    // var adminEmailLogin = document.getElementById("adminemail").value;
    // var adminPasswordLogin = document.getElementById("adminpsw").value;

    if(foundAdmin)
    {
        alert("Login Successful");
        hideAdminLogin();
        window.location.href = "../indexAdmin.html";
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}

function hideAdminLogin()
{
    document.getElementById("adminloginheader").style.display="none";
    document.getElementById("adminemaillabel").style.display="none";
    document.getElementById("adminpswlabel").style.display="none";
    document.getElementById("adminemail").style.display="none";
    document.getElementById("adminpsw").style.display="none";
    document.getElementById("adminloginbtn").style.display="none";
}


var custobj;
// const customerfirstname;
// const customerlastname;
function searchCustomer(){
    const allPostsUrl = "https://localhost:5001/api/customer";

    fetch(allPostsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        custobj = json;
        console.log(custobj);
        console.log(json);
        return custobj;
    }).catch(function(error){
        console.log(error);
    });

    const customerEmailLogin = document.getElementById("customeremail").value;
    const customerPasswordLogin = document.getElementById("customerpsw").value;

    const emailIndex = custobj.findIndex(obj => obj.customerEmail==customerEmailLogin);
    console.log(emailIndex);

    const passwordIndex = custobj.findIndex(obj => obj.customerPassword==customerPasswordLogin);
    console.log(passwordIndex);

    console.log(custobj[emailIndex].customerID); //gets id of logged in customer

    console.log(custobj[emailIndex].customerFName);
    console.log(custobj[emailIndex].customerLName);

    const customerfirstname = custobj[emailIndex].customerFName;
    const customerlastname = custobj[emailIndex].customerLName;
    const customeremail = custobj[emailIndex].customerEmail;

    var found;
    if((emailIndex == passwordIndex) && (emailIndex != -1))
    {
        found = true;
    }
    else
    {
        found = false;
    }

    validateCustomer(found, customerfirstname, customerlastname, customeremail);
}

function validateCustomer(found, _customerfirstname, _customerlastname, _customeremail)
{
    // var customerEmailLogin = document.getElementById("customeremail").value;
    // var customerPasswordLogin = document.getElementById("customerpsw").value;

    //searchCustomer();
    if(found)
    {
        alert("Login Successful");
        hideCustomerLogin();
       // window.location.href = "../indexCustomer.html";
        let html = `<h1>CUSTOMER ACCOUNT</h1><h6>Full Name: ${_customerfirstname} ${_customerlastname}</h6>`
        html += `<h6>Email: ${_customeremail}</h6>`;
       
        html+='<section class=\"page-section bg-light\" id=\"PurchaseTickets\">';
        html+='<div class =\"tickets\">';
        html+='<div class=\"container\">';
        html+='<div class=\"text-center\">';
        html+='<h2 class=\"section-heading text-uppercase\">Purchase Tickets</h2>'
        html+='<h3 class=\"section-subheading text-muted\"></h3>';
        html+='<div class="imgcontainer\">';
        html+='<img class=\"rounded-circle img-fluid\" src=\"../assets/img/Ticket.jpg\" alt=\"Avatar\" class=\"avatar\"></div>';     
        html+='<div class=\"container\"><p></p><p></p><p></p>';
        html+='<label for=\"TicketType\"><b>Choose a Ticket Type: &emsp;</b></label>';
        html+='<select id=\"TicketType\">';
        html+='<option  name=\"TicketType\" value=\"seniorchild\">Senior/Child Ticket ($3)</option>';
        html+='<option  name=\"TicketType\" value=\"adult\">Adult Ticket ($5)</option></select>';
        html+='<p></p><p></p>';
        html+='<label for=\"NumTickets\"><b>Enter number of tickets: &emsp;</b></label>';
        html+='<input type=\"number\" placeholder=\"Number of Tickets\" min=\"1\" id=\"numberOfTickets\">';
        html+='<div class=\"clearfix\">';
        html+='<input type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postTicket()\" value=\"Purchase\"/>';
        html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>';
        html+='</div></div></div></div></div>';

        document.getElementById("customerprofileinfo").innerHTML = html;
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}

function hideCustomerLogin()
{
    document.getElementById("custloginheader").style.display="none";
    document.getElementById("custemaillabel").style.display="none";
    document.getElementById("custpswlabel").style.display="none";
    document.getElementById("customeremail").style.display="none";
    document.getElementById("customerpsw").style.display="none";
    document.getElementById("customerlogin").style.display="none";
}


var vendobj;

function searchVendor(){
    const vendorUrl = "https://localhost:5001/api/vendor";
  
    fetch(vendorUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        vendobj = json;
        console.log(vendobj);
        console.log(json);
        return vendobj;
    }).catch(function(error){
        console.log(error);
    });
    
        var vendorEmailLogin = document.getElementById("vendoremail").value;
        var vendorPasswordLogin = document.getElementById("vendorpsw").value;
    
        var emailIndex = vendobj.findIndex(obj => obj.vendorEmail==vendorEmailLogin);
        console.log(emailIndex);
    
        var passwordIndex = vendobj.findIndex(obj => obj.vendorPassword==vendorPasswordLogin);
        console.log(passwordIndex);
    
        var vendorFound;
        if((emailIndex == passwordIndex) && (emailIndex != -1))
        {
            vendorFound = true;
        }
        else
        {
            vendorFound = false;
        }
    
       validateVendor(vendorFound);
}

function validateVendor(vendorFound)
{
    // var vendorEmailLogin = document.getElementById("vendoremail").value;
    // var vendorPasswordLogin = document.getElementById("vendorpsw").value;

    if(vendorFound)
    {
        alert("Login Successful");
        hideVendorLogin();
        // window.location.href = "../indexVendor.html";

        let html = `<h1>VENDOR ACCOUNT</h1><h6>Full Name: $$</h6>`
        html+='<section class=\"page-section bg-light\" id=\"PurchaseBooth\">';
        html+= '<div class =\"tickets\">';
        html+='<div class=\"container\">';
        html+= '<div class=\"text-center\">';
        html+='<h2 class=\"section-heading text-uppercase\">Purchase Booth</h2>';
        html+='<div class=\"imgcontainer\">';
        html+='<img class=\"rounded-circle img-fluid\" src=\"../assets/img/Booth.png\" alt=\"Avatar\" class=\"avatar\"></div>';
        html+='<div class=\"container\">'
        html+='<h3 class=\"section-subheading text-muted\">Each booth costs $50. Limit 1 booth per vendor.</h3></div>';                   
        html+='<div class=\"clearfix\">';
        html+='<input id = \"boot\" type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postBooth()\" value=\"Purchase\"/>';
        html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>'
        html+='</div></div></div></div></section>';

        document.getElementById("vendorprofileinfo").innerHTML = html;

        return false;
    }
    else
    {
        alert("Login Failed");
    }

}

function hideVendorLogin()
{
    document.getElementById("vendorloginheader").style.display="none";
    document.getElementById("vendoremaillabel").style.display="none";
    document.getElementById("vendorpswlabel").style.display="none";
    document.getElementById("vendoremail").style.display="none";
    document.getElementById("vendorpsw").style.display="none";
    document.getElementById("vendorloginbtn").style.display="none";
}


function displayCalendar(){
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar').value;
        var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        });
        calendar.render();
    });
}

function getDate(){
    var date = document.getElementById("fmeventdate").value;
    var datetime = document.getElementById("fmeventdateandtime").value;
    var time = document.getElementById("fmeventtime").value;
    console.log(date);
    console.log(datetime);
    console.log(time);

}
function renderRows(){
    eventList.forEach(eventObj => {
        rendowRow(eventObj);
    })
    draw(todoList.map(obj=>{
        return {
            title : obj.todo,
            start : obj.date
        }
    }))
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

