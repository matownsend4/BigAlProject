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
       // alert("Login Successful");
        hideAdminLogin();
        window.location.href = "../AdminEvents.html";
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


// Handling Customer Account info and purchasing tickets
var custobj;
function searchCustomer(){
    const customersUrl = "https://localhost:5001/api/customer";

    fetch(customersUrl).then(function(response){
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
    const customerphoneno = custobj[emailIndex].customerPhoneNo;
    const customerid = custobj[emailIndex].customerID;

    var found;
    if((emailIndex == passwordIndex) && (emailIndex != -1))
    {
        found = true;
    }
    else
    {
        found = false;
    }

    validateCustomer(found, customerfirstname, customerlastname, customeremail, customerid, customerphoneno);
}

function validateCustomer(found, _customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno)
{
    if(found)
    {
        alert("Login Successful");
        hideCustomerLogin();
        displayCustomerProfile(_customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno);
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

function displayCustomerProfile(_customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno)
{
    // Customer personal info
    let html = `<h1>CUSTOMER ACCOUNT</h1><br></br><h6>Full Name: ${_customerfirstname} ${_customerlastname}</h6>`
    html += `<h6>Email: ${_customeremail}</h6><h6>Phone Number: ${_customerphoneno}</h6>`;
    html+='<br></br>';

    // Purchase tickets section
    html+='<section class=\"page-section bg-light\" id=\"PurchaseTickets\">';
    html+='<div class =\"tickets\">';
    html+='<div class=\"container\">';
    html+='<div class=\"text-center\">';
    html+='<h2 class=\"section-heading text-uppercase\">Purchase Tickets</h2>'
    html+='<h3 class=\"section-subheading text-muted\"></h3>';
    html+='<div class="imgcontainer\">';
    html+='<img class=\"rounded-circle img-fluid\" src=\"../assets/img/Ticket.jpg\" alt=\"Avatar\" class=\"avatar\"></div>';     
    html+='<div class=\"container\"><br></br>';
    html+='<label for=\"TicketType\"><b>Choose a Ticket Type: &emsp;</b></label>';
    html+='<select id=\"TicketType\">';
    html+='<option  name=\"TicketType\" value=\"seniorchild\">Senior/Child Ticket ($3)</option>';
    html+='<option  name=\"TicketType\" value=\"adult\">Adult Ticket ($5)</option></select>';
    html+='<br></br>';
    html+='<label for=\"NumTickets\"><b>Enter number of tickets: &emsp;</b></label>';
    html+='<input type=\"number\" placeholder=\"Number of Tickets\" min=\"1\" id=\"numberOfTickets\">';
    html+='<div class=\"clearfix\">';
    html+='<br></br>';
    html+=`<input type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postTicket(${_customerid})\" value=\"Purchase\"/>`;
    html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>';
    html+='</div></div></div></div></div></section>';
    html+='<br></br>';

    // view past and currently registered for events
    html+='<br></br>';
    html+='<section class=\"page-section bg-light\">';
    html+='<div class =\"tickets\">';
    html+='<div class=\"container\">';
    html+='<div class=\"text-center\">';
    html+='<h2 class=\"section-heading text-uppercase\">View Events</h2>'
    html+='<h3 class=\"section-subheading text-muted\"></h3>';
    html+='<div class = \"row table-wrapper-scroll-y my-custom-scrollbar\">';
    html+='</div></div></div></section>';
   
    document.getElementById("customerlogout").innerHTML = "Logout";
    document.getElementById("customerprofileinfo").innerHTML = html;
}

function postTicket(_customerid){
    var x = document.getElementById("TicketType").selectedIndex;
    const selectedTicket = document.getElementsByName("TicketType")[x].value;
    console.log(selectedTicket);

    const numberOfTickets = document.getElementById("numberOfTickets").value;
    console.log(numberOfTickets);
    
    var intNumTickets = parseInt(numberOfTickets);

    if(selectedTicket == "adult")
    {
        postAdultTicket(selectedTicket, intNumTickets, _customerid);
    }
    else if(selectedTicket=="seniorchild")
    {
        postSenChildTicket(selectedTicket, intNumTickets, _customerid);
    }  
}

function postAdultTicket(selectedTicket, intNumTickets, _customerid){
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
                ticketType: selectedTicket,
                customerId: _customerid
            })
        })
        .then((response)=>{
            console.log(response);
            getTickets();
        })

        console.log("made it 2"); 
    }

    alert(`Purchase Confirmation\n\nTicket type: ${selectedTicket}\nQuantity: ${intNumTickets}`);
    
    const doc = new jsPDF();
    const receiptheader = "Customer Number: " + _customerid;
    const type = `Ticket type: ${selectedTicket}`;
    const qty = `Quantity: ${intNumTickets}`;
    const total = `Total: $${intNumTickets*5}`;

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.text(20,20, receiptheader);
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.text(20,30, type);
    doc.text(20,40, qty);
    doc.line(20, 43, 70, 43);
    doc.text(20,50, total);
    doc.save('receipt.pdf');  
}

function postSenChildTicket(selectedTicket, intNumTickets, _customerid){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

   // console.log("made it");

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
                ticketType: selectedTicket,
                customerId: _customerid
            })
        })
        .then((response)=>{
            console.log(response);
            getTickets();
        })
       // console.log("made it 2"); 
    }

    alert(`Purchase Confirmation\n\nTicket type: ${selectedTicket}\nQuantity: ${intNumTickets}`);

     const doc = new jsPDF();
    const receiptheader = "Customer Number: " + _customerid;
    const type = `Ticket type: ${selectedTicket}`;
    const qty = `Quantity: ${intNumTickets}`;
    const total = `Total: $${intNumTickets*5}`;

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.text(20,20, receiptheader);
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.text(20,30, type);
    doc.text(20,40, qty);
    doc.line(20, 43, 100, 43);
    doc.text(20,50, total);
    doc.save('receipt.pdf');  
}


// Handling Vendor Account info and booth purchases
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

        const vendoremail = vendobj[emailIndex].vendorEmail;
        const vendorpassword = vendobj[emailIndex].vendorPassword;

        const vendorfirstname = vendobj[emailIndex].vendorFName;
        console.log(vendorfirstname);
        const vendorlastname = vendobj[emailIndex].vendorLName;
        console.log(vendorlastname);
        const vendorphoneno = vendobj[emailIndex].vendorPhoneNo;
        console.log(vendorphoneno);
        const vendorid = vendobj[emailIndex].vendorID;
        console.log(vendorid);
        const vendorbusiness = vendobj[emailIndex].businessName;
        console.log(vendorbusiness);
        const businesstype = vendobj[emailIndex].businessType;
        console.log(businesstype);
        const businessdesc = vendobj[emailIndex].businessDescription;
        console.log(businessdesc);
    
        var vendorFound;
        if((emailIndex != -1) && (vendorEmailLogin == vendoremail) && (vendorPasswordLogin == vendorpassword))
        {
            vendorFound = true;
        }
        // if((emailIndex == passwordIndex) && (emailIndex != -1))
        // {
        //     vendorFound = true;
        // }
        else
        {
            vendorFound = false;
        }
    
       validateVendor(vendorFound, vendoremail, vendorfirstname, vendorlastname, vendorphoneno, vendorid, vendorbusiness, businesstype, businessdesc);
}

function validateVendor(vendorFound, _vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc)
{
    if(vendorFound)
    {
        alert("Login Successful");
        hideVendorLogin();
        displayVendorProfile(_vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc);
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

function displayVendorProfile(_vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc)
{
    let html = `<h1>VENDOR ACCOUNT</h1><h6>Full Name: ${_vendorfirstname} ${_vendorlastname}</h6>`
    html+=`<h6>Phone Number: ${_vendorphoneno}</h6>`;
    html+=`<h6>Email: ${_vendoremail}</h6>`;
    html+='<br></br>';
    html+=`<h6>Business: ${_vendorbusiness}</h6>`;
    html+=`<h6>Type of Business: ${_businesstype}</h6>`;
    html+=`<h6>Description: ${_businessdesc}</h6>`;
    html+='<br></br>';
    html+='<section class=\"page-section bg-light\" id=\"PurchaseBooth\">';
    html+= '<div class =\"tickets\">';
    html+='<div class=\"container\">';
    html+= '<div class=\"text-center\">';
    html+='<h2 class=\"section-heading text-uppercase\">Purchase Booth</h2>';
    html+='<div class=\"imgcontainer\">';
    html+='<img class=\"rounded-circle img-fluid\" src=\"../assets/img/Booth.png\" alt=\"Avatar\" class=\"avatar\"></div>';
    html+='<div class=\"container\">'
    html+='<br></br>';
    html+='<h3 class=\"section-subheading text-muted\">Each booth costs $50. Limit 1 booth per vendor.</h3></div>';                   
    html+='<div class=\"clearfix\">';
    html+="<input id = \"boot\" type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postBooth("+_vendorid+","+_vendorbusiness+","+_businesstype+","+_businessdesc+")\" value=\"Purchase\"/>";
    html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>'
    html+='</div></div></div></div></section>';
    
    document.getElementById("vendorlogout").innerHTML = "Logout";
    document.getElementById("vendorprofileinfo").innerHTML = html;
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

// _vendorid, _vendorbusiness, _businesstype, _businessdesc
function postBooth(_vendorid, _vendorbusiness, _businesstype, _businessdesc){
    const allBoothsUrl = "https://localhost:5001/api/vendorbooth";

    console.log("made it");
    fetch(allBoothsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            boothCost : '50',
           vendorID: _vendorid
        })
    })
    .then((response)=>{
        console.log(response);
        getBooths();
    })

    console.log("made it 2");

    alert(`You have purchased a booth\n\n`);

    const doc = new jsPDF();
    const receiptheader = "Vendor Number: " + _vendorid;
    const name = `Business Name: ${_vendorbusiness}`;
    const type = `Business Type: ${_businesstype}`;
    const desc = `Business Description: ${_businessdesc}`;
    const total = `Total: $$50`;

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.text(20,20, receiptheader);
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.text(20,30, name);
    doc.text(20,40, type);
    doc.text(20,50, desc);
    //doc.text(20,40, );
    doc.line(20, 43, 100, 43);
    doc.text(20,55, total);
    doc.save('receipt.pdf');  
}

// ${_vendorid}, ${_vendorbusiness},${_businesstype}, ${_businessdesc}

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
    var datetime = document.getElementById("fmeventdateandtime").value;
    console.log(datetime);
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

 // fm event  //
 function getFMEvents(){
    const eventsUrl = "https://localhost:5001/api/fmevent";

    fetch(eventsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        var eventobj = json;
        console.log(eventobj);
        console.log(json);
        displayEventTable(json);
        getBusinessTypeCount(json);
        return eventobj;
    }).catch(function(error){
        console.log(error);
    });  
}


function postFMEvent(){
    const eventUrl = "https://localhost:5001/api/fmevent";

    const datetime = document.getElementById("fmeventdateandtime").value;
    console.log(datetime);
    
    console.log("made it");

    fetch(eventUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fmDate : datetime
        })
    })
    .then((response)=>{
        console.log(response);
        getFMEvents();
    })

    console.log("made it 2");
}

function displayEventTable(json){
    var eventTable = document.getElementById("eventTable");
    var html = "<table class='table table-hover'><tr><th>Event ID</th><th>Event Date</th>";
   
    json.forEach(fmEvent=> {
        html+=`<tr><td>${fmEvent.fmEventID}</td><td>${fmEvent.fmDate}</td></tr>`;
    });
    
    html+= "</table>";

    eventTable.innerHTML = html;
}

function dataEvent1(){
    var x = document.getElementById("EventDate").selectedIndex;
    const selectedDate = document.getElementsByName("EventDate")[x].value;
    console.log(selectedDate);
}





