// customers //
function getCustomerAccounts(){
    const allCustomersUrl = "https://farmersmarketapi1.herokuapp.com/api/customer";
    //const allCustomersUrl = "https://localhost:5001/api/customer";

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
    const customerUrl = "https://farmersmarketapi1.herokuapp.com/api/customer";
    //const customerUrl = "https://localhost:5001/api/customer";

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
    alert("Account was successfully created.");
    window.location.href = "../Logins/CustomerLogin.html";
    
}

// vendors //
function getVendorAccounts(){
    const vendorUrl = "https://farmersmarketapi1.herokuapp.com/api/vendor";
    //const vendorUrl = "https://localhost:5001/api/vendor";

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
    const vendorUrl = "https://farmersmarketapi1.herokuapp.com/api/vendor";
    //const vendorUrl = "https://localhost:5001/api/vendor";

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
    alert("Account was successfully created.");
    window.location.href = "../Logins/VendorLogin.html";
}

// tickets //
function getTickets(){
    const allTicketsUrl = "https://farmersmarketapi1.herokuapp.com/api/ticket";
    //const allTicketsUrl = "https://localhost:5001/api/ticket";

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
    const adminUrl = "https://farmersmarketapi1.herokuapp.com/api/admin";
    //onst adminUrl = "https://localhost:5001/api/admin";

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
    if(foundAdmin)
    {
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
var ticketobj;
var eventobj;
function searchCustomer(){
    getFMEvents();
    document.getElementById("eventTable").style.display = "none";
    document.getElementById("pastEventTable").style.display = "none";

    const customersUrl = "https://farmersmarketapi1.herokuapp.com/api/customer";
    //const customersUrl = "https://localhost:5001/api/customer";

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

    //gets tickets
    const allTicketsUrl = "https://farmersmarketapi1.herokuapp.com/api/ticket";
    //const allTicketsUrl = "https://localhost:5001/api/ticket";

    fetch(allTicketsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        ticketobj = json;
        console.log(ticketobj);
        console.log(json);
    }).catch(function(error){
        console.log(error);
    }); 

    //const eventsUrl = "https://localhost:5001/api/fmevent";
    const eventsUrl = "https://farmersmarketapi1.herokuapp.com/api/fmevent";

    fetch(eventsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        eventobj = json;
        console.log(eventobj);
        console.log(json);
        return eventobj;
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

    // retrieve logged in customer's info using found index
    const customerfirstname = custobj[emailIndex].customerFName;
    const customerlastname = custobj[emailIndex].customerLName;
    const customeremail = custobj[emailIndex].customerEmail;
    const customerphoneno = custobj[emailIndex].customerPhoneNo;
    const customerid = custobj[emailIndex].customerID;

      
  
    const ticketIndex = ticketobj.findIndex(x => x.customerID==customerid);

    console.log("hey");
    console.log(ticketIndex);
    console.log("bye");
    let fmid;
    let fmdate;
    if(ticketIndex == -1)
    {
        fmid = -1;
        fmdate = -1;
    }
    else
    {
        const foundTicketEventID = ticketobj[ticketIndex].eventID;
        console.log(foundTicketEventID);

        const eventIndex = eventobj.findIndex(y => y.fmEventID==foundTicketEventID);
        console.log(eventIndex);

        console.log(eventobj[eventIndex].fmEventID);
        console.log(eventobj[eventIndex].fmDate);

        fmid = eventobj[eventIndex].fmEventID;
        fmdate = eventobj[eventIndex].fmDate;
    }
    


    var found;
    if((emailIndex == passwordIndex) && (emailIndex != -1))
    {
        found = true;
    }
    else
    {
        found = false;
    }

    validateCustomer(found, customerfirstname, customerlastname, customeremail, customerid, customerphoneno, fmid, fmdate);
}

function validateCustomer(found, _customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno, _fmid, _fmdate)
{
    if(found)
    {
        //alert("Login Successful");
        hideCustomerLogin();
        displayCustomerProfile(_customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno, _fmid, _fmdate);
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

function displayCustomerProfile(_customerfirstname, _customerlastname, _customeremail, _customerid, _customerphoneno, _fmid, _fmdate)
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
    html+='<br></br>';
    html+='<label for=\"fmeventid\"><b>Enter Event ID: &emsp;</b></label>';
    html+='<input type=\"number\" placeholder=\"Event ID\" min=\"1\" id=\"eventid\">';
    html+='<div class=\"clearfix\">';
    html+='<br></br>';
    html+=`<input type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postTicket(${_customerid})\" value=\"Purchase\"/>`;
    html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>';
    html+='</div></div></div></div></div></section>';
    html+='<br></br>';

    // view past and currently registered for events
    html+='<h2 class="section-heading text-uppercase">Upcoming Event</h2>';
    html+='<div class = "row table-wrapper-scroll-y my-custom-scrollbar"><div class = "col-md-12"><div id = "eventTable"></div></div>';
    html+='</div><div class = "row"><div class = "col-md-12">';


    if(_fmid != -1 && _fmdate != -1)
    {
        html+='<h2 class="section-heading text-uppercase">Previous Event Attended</h2>';
        html+='<div class = "row table-wrapper-scroll-y my-custom-scrollbar"><div class = "col-md-12"><div id = "pastEventTable"></div></div>';
        html+='</div><div class = "row"><div class = "col-md-12">';
    }
    
    
    document.getElementById("customerlogout").innerHTML = "Logout";
    document.getElementById("customerprofileinfo").innerHTML = html;

    if(_fmid != -1 && _fmdate != -1)
    {
        var pastEventTable = document.getElementById("pastEventTable");
        var tablehtml = "<table class='table table-hover'><tr><th>Event ID</th><th>Event Date</th>";
        tablehtml+=`<tr><td>${_fmid}</td><td>${_fmdate}</td>`;
        tablehtml+= "</table>";
        pastEventTable.innerHTML = tablehtml;    
    }
}

function postTicket(_customerid){
    var x = document.getElementById("TicketType").selectedIndex;
    const selectedTicket = document.getElementsByName("TicketType")[x].value;
    console.log(selectedTicket);

    const numberOfTickets = document.getElementById("numberOfTickets").value;
    console.log(numberOfTickets);

    const eventID = document.getElementById("eventid").value;
    console.log(eventID); 
    
    var intNumTickets = parseInt(numberOfTickets);

    if(selectedTicket == "adult")
    {
        postAdultTicket(selectedTicket, intNumTickets, _customerid, eventID);
    }
    else if(selectedTicket=="seniorchild")
    {
        postSenChildTicket(selectedTicket, intNumTickets, _customerid, eventID);
    }  
}

function postAdultTicket(selectedTicket, intNumTickets, _customerid, eventID){
    const allTicketsUrl = "https://localhost:5001/api/ticket";

   

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
                customerId: _customerid,
                eventId: eventID
            })
        })
        .then((response)=>{
            console.log(response);
            getTickets();
        })

       
    }

    alert(`Purchase Confirmation\n\nEvent ID: ${eventID}\nTicket type: ${selectedTicket}\nQuantity: ${intNumTickets}`);
    
    const doc = new jsPDF();
    const receiptheader = "Customer Number: " + _customerid;
    const eventfor = "Event ID: " + eventID;
    const type = `Ticket type: ${selectedTicket}`;
    const qty = `Quantity: ${intNumTickets}`;
    const total = `Total: $${intNumTickets*5}`;

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.setFontSize(20);
    doc.text(20,30, eventfor);
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.text(20,40, type);
    doc.text(20,50, qty);
    doc.line(20, 53, 100, 53);
    doc.text(20,60, total);
    doc.save('receipt.pdf');  
}

function postSenChildTicket(selectedTicket, intNumTickets, _customerid, eventID){
    const allTicketsUrl = "https://localhost:5001/api/ticket";
   //const allTicketsUrl = "https://farmersmarketapi1.herokuapp.com/api/ticket";

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
                customerId: _customerid,
                eventId: eventID
            })
        })
        .then((response)=>{
            console.log(response);
            getTickets();
        })
       
    }

    alert(`Purchase Confirmation\n\nEvent ID: ${eventID}\nTicket type: ${selectedTicket}\nQuantity: ${intNumTickets}`);

    const doc = new jsPDF();
    const receiptheader = "Customer Number: " + _customerid;
    const eventfor = "Event ID: " + eventID;
    const type = `Ticket type: ${selectedTicket}`;
    const qty = `Quantity: ${intNumTickets}`;
    const total = `Total: $${intNumTickets*5}`;

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.text(20,20, receiptheader);
    doc.setFontSize(20);
    doc.text(20,30, eventfor);
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.text(20,40, type);
    doc.text(20,50, qty);
    doc.line(20, 53, 100, 53);
    doc.text(20,60, total);
    doc.save('receipt.pdf');  
}


// Handling Vendor Account info and booth purchases
var vendobj;
var boothobj;
var eventobj;
function searchVendor(){
        getFMEvents();
        document.getElementById("eventTable").style.display = "none";
        document.getElementById("pastEventTable").style.display = "none";

        //const vendorUrl = "https://localhost:5001/api/vendor";
        const vendorUrl = "https://farmersmarketapi1.herokuapp.com/api/vendor";

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

        // to access booth id
        //const allBoothsUrl = "https://localhost:5001/api/vendorbooth";
        const allBoothsUrl = "https://farmersmarketapi1.herokuapp.com/api/vendorbooth";


        fetch(allBoothsUrl).then(function(response){
            console.log(response);
            return response.json();
        }).then(function(json){
            boothobj = json;
            console.log(boothobj);
            console.log(json);
        }).catch(function(error){
            console.log(error);
        });  


        // to access event ID
        //const eventsUrl = "https://localhost:5001/api/fmevent";
        const eventsUrl = "https://farmersmarketapi1.herokuapp.com/api/fmevent";

        fetch(eventsUrl).then(function(response){
            console.log(response);
            return response.json();
        }).then(function(json){
            eventobj = json;
            console.log(eventobj);
            console.log(json);
            return eventobj;
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

        const boothIndex = boothobj.findIndex(x => x.vendorID==vendorid);
        console.log("hey");
        console.log(boothIndex);
        console.log("bye");
        
        let fmid;
        let fmdate;
        if(boothIndex == -1)
        {
            fmid = -1;
            fmdate = -1;
        }
        else
        {
            const foundBoothEventID = boothobj[boothIndex].eventID;
            console.log(foundBoothEventID);
        
            const eventIndex = eventobj.findIndex(y => y.fmEventID==foundBoothEventID);
            console.log(eventIndex);
        
            console.log(eventobj[eventIndex].fmEventID);
            console.log(eventobj[eventIndex].fmDate);
        
            fmid = eventobj[eventIndex].fmEventID;
            fmdate = eventobj[eventIndex].fmDate;
        }
    
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
    
       validateVendor(vendorFound, vendoremail, vendorfirstname, vendorlastname, vendorphoneno, vendorid, vendorbusiness, businesstype, businessdesc, fmid, fmdate);
}

function validateVendor(vendorFound, _vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc, _fmid, _fmdate)
{
    if(vendorFound)
    {
        //alert("Login Successful");
        hideVendorLogin();
        displayVendorProfile(_vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc, _fmid, _fmdate);
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

function displayVendorProfile(_vendoremail, _vendorfirstname, _vendorlastname, _vendorphoneno, _vendorid, _vendorbusiness, _businesstype, _businessdesc, _fmid, _fmdate)
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
    html+='<label for=\"fmeventid\"><b>Enter Event ID: &emsp;</b></label>';
    html+='<input type=\"number\" placeholder=\"Event ID\" min=\"1\" id=\"eventid\">';     
    html+='<br></br><br></br>';             
    html+='<div class=\"clearfix\">';
    html+="<input id = \"boot\" type=\"submit\" class=\"login-button\" class=\"signupbtn\" onclick = \"postBooth("+_vendorid+")\" value=\"Purchase\"/>";
    html+='<button class=\"login-button\" type=\"button\" class=\"cancelbtn\" onclick=\" window.location.href = \'../index.html\';\">Cancel</button>'
    html+='</div></div></div></div></section>';
    
    html+='<h2 class="section-heading text-uppercase">Upcoming Events</h2>';
    html+='<div class = "row table-wrapper-scroll-y my-custom-scrollbar"><div class = "col-md-12"><div id = "eventTable"></div></div>';
    html+='</div><div class = "row"><div class = "col-md-12">';    


    if(_fmid != -1 && _fmdate != -1)
    {
        html+='<h2 class="section-heading text-uppercase">Previous Event Attended</h2>';
        html+='<div class = "row table-wrapper-scroll-y my-custom-scrollbar"><div class = "col-md-12"><div id = "pastEventTable"></div></div>';
        html+='</div><div class = "row"><div class = "col-md-12">';
    }
    
    document.getElementById("vendorlogout").innerHTML = "Logout";
    document.getElementById("vendorprofileinfo").innerHTML = html;

    if(_fmid != -1 && _fmdate != -1)
    {
        var pastEventTable = document.getElementById("pastEventTable");
        var tablehtml = "<table class='table table-hover'><tr><th>Event ID</th><th>Event Date</th>";
        tablehtml+=`<tr><td>${_fmid}</td><td>${_fmdate}</td>`;
        tablehtml+= "</table>";
        pastEventTable.innerHTML = tablehtml;
    }
}

 // booth //
 function getBooths(){
    //const allBoothsUrl = "https://localhost:5001/api/vendorbooth";
    const allBoothsUrl = "https://farmersmarketapi1.herokuapp.com/api/vendorbooth";


    fetch(allBoothsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });  
}

function postBooth(_vendorid){
    const allBoothsUrl = "https://farmersmarketapi1.herokuapp.com/api/vendorbooth";
    //const allBoothsUrl = "https://localhost:5001/api/vendorbooth";
    const eventID = document.getElementById("eventid").value;
    console.log(eventID);

    console.log("made it");
    fetch(allBoothsUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            boothCost : '50',
            vendorID : _vendorid,
            eventId: eventID
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
    const eventfor = "Event ID: " + eventID;
    const total = "Total: $50";

    doc.setFontSize(25);
    doc.setTextColor(85, 107, 47);
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.text(20,20, receiptheader);
    doc.setFontSize(20);
    doc.text(20,30, eventfor);
    doc.setFontSize(18);
    doc.text(20,40, "Purchase confirmation");
    doc.setTextColor(0);
    doc.setFontType('normal');
    doc.setFontSize(16);
    doc.line(20, 45, 100, 45);
    doc.text(20,55, total);
    doc.save('receipt.pdf');  
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
    var datetime = document.getElementById("fmeventdateandtime").value;
    console.log(datetime);
}

 // fm event  //
 function getFMEvents(){
    //const eventsUrl = "https://localhost:5001/api/fmevent";
    const eventsUrl = "https://farmersmarketapi1.herokuapp.com/api/fmevent";

    fetch(eventsUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        var eventobj = json;
        console.log(eventobj);
        console.log(json);
        displayEventTable(json);
        return eventobj;
    }).catch(function(error){
        console.log(error);
    });  
}

function postFMEvent(){
    //const eventUrl = "https://localhost:5001/api/fmevent";
    const eventUrl = "https://farmersmarketapi1.herokuapp.com/api/fmevent";

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
}

//display upcoming events
function displayEventTable(json){
    var eventTable = document.getElementById("eventTable");
    var html = "<table class='table table-hover'><tr><th>Event ID</th><th>Event Date</th>";

    html+=`<tr><td>${json[0].fmEventID}</td><td>${json[0].fmDate}</td></tr>`;
    html+= "</table>";

    eventTable.innerHTML = html;
}
