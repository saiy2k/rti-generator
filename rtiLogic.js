function setup() {

    $( "#txtName" ).focus(function() {
        $( "#tipText" ).text("You should be a Citizen of India to file RTI Application. Organisations, Private / Public Companies can't file RTI");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtAddress1" ).focus(function() {
        $( "#tipText" ).text("Enter your address");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtAddress2" ).focus(function() {
        $( "#tipText" ).text("Enter your address Line 2");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
        console.log("address 2");
    });

    $( "#txtCity" ).focus(function() {
        $( "#tipText" ).text("Enter your city");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtState" ).focus(function() {
        $( "#tipText" ).text("Enter your State");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIN" ).focus(function() {
        $( "#tipText" ).text("Pin code");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIODesignation" ).focus(function() {
        $( "#tipText" ).text("In every Government office there is an officer designated as Public Information Officer (PIO) whose responsibility is to reply to RTI applications. The Designation of the PIO can be found by visiting corresponding department's web site and probing for links like 'RTI Contacts' / 'Right to Information;'. If you are not sure of the PIO, you can send it to your District Collector.");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOOffice" ).focus(function() {
        $( "#tipText" ).text("Name of the office, Eg., Taluk Office, Collector Office, RTO, Corporation of Chennai, BSNL Office, etc.,");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOAddress1" ).focus(function() {
        $( "#tipText" ).text("Address 1");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOAddress2" ).focus(function() {
        $( "#tipText" ).text("Address 2");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOCity" ).focus(function() {
        $( "#tipText" ).text("City of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOPIN" ).focus(function() {
        $( "#tipText" ).text("Pin code of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOState" ).focus(function() {
        $( "#tipText" ).text("State of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });
    $( "#txtSubject" ).autocomplete({
        source: listSubjects,
        minLength: 0,
        select: function (event, ui) {
            var i = 0;
            var index = listSubjects.indexOf(ui.item.value);

            if ( $( "#txtDetail" ).val() == '' && 
                 $( "#txtInfo1" ).val() == '' &&
                 $( "#txtInfo2" ).val() == '' &&
                 $( "#txtInfo3" ).val() == '' &&
                 $( "#txtInfo4" ).val() == '' &&
                 $( "#txtInfo5" ).val() == '' &&
                 $( "#txtInfo6" ).val() == '' &&
                 $( "#txtInfo7" ).val() == '' &&
                 $( "#txtInfo8" ).val() == '' &&
                 $( "#txtInfo9" ).val() == '' &&
                 $( "#txtInfo10" ).val() == '' ) {

                updateQuestions(index);

             } else {
                $('<div></div>').appendTo('body')
                    .html('<div><h4>Change the questions as per the newly selected Subject:</h4></div>')
                    .dialog({
                        modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
                        width: 'auto', resizable: false,
                        buttons: {
                            "Yes": function () {
                                updateQuestions(index);
                                $(this).dialog("close");
                            },
                            "No": function () {
                                $(this).dialog("close");
                            }
                        },
                        close: function (event, ui) {
                            $(this).remove();
                        }
                    });
             }
        }
    }).focus(function() {
        $(this).autocomplete("search", "");
    });

    $( "#txtSubject" ).focus(function() {
        $( "#tipText" ).text("Select from any of the predefined template or write your own");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPeriod" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text("Time Range. For example, 2000 to 2010; last financial year; March, 2013 to May, 2013, date of my complaint to present");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtDetail" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text("Other details related to the RTI");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( ".txtInformation" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        var str, rnd;
        rnd = Math.random();
        if (rnd < 0.3) {
            str = "Inquilab Zindabad";
        } else if (rnd < 0.6) {
            str = "Vande Mataram";
        } else if (rnd < 1.0) {
            str = "Jai Hind";
        }
        $( "#tipText" ).text("Inquilab Zindabad");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });
/*
    $( "#radioPovertyYes" ).focus(function() {
        $( "#tipText" ).text("If the applicant is below poverty line. then all information will be given at free of cost");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioPovertyNo" ).focus(function() {
        $( "#tipText" ).text("If not, application charge of Rs. 10.00 has to be paid through means given below");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });
*/

    $( "#radioFeeCourtFee" ).focus(function() {
        $( "#tipText" ).text("Some states including Tamil Nadu, allow affixing Court Fee stamps to pay for RTI Application");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeePostalOrder" ).focus(function() {
        $( "#tipText" ).text("A Postal order of Rs. 10.00 can be taken from Post Office and attached with the RTI Application");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeeDD" ).focus(function() {
        $( "#tipText" ).text("Demand Draft can be drawn in favor of PIO and be attached with the RTI Application");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    //$( "#rtiGenerated" ).dialog({autoOpen: false});

    $( "#btnGenerate" ).click(function() {
        generate();
    }); 

    //generate();
};

function updateQuestions(index) {

        $( "#txtDetail" ).val("");
        $( "#txtDetail" ).attr("placeholder", listDetails[index]);

        for (i = 0; i < listQuestions[index].length; i++) {
            $( "#txtInfo" + (i+1) ).attr("placeholder", listQuestions[index][i]);
        }

        for (i = i; i < 10; i++) {
            $( "#txtInfo" + (i+1) ).attr("placeholder", "");
        }

};

function generate() {
    var otherWindow             =   window.open("", "_blank");
    otherWindow.document.write("<!DOCTYPE html><html><body>")
    otherWindow.document.write("<h3><center>Application for Information under the Right to Information Act, 2005</center></h3>");
    otherWindow.document.write("<h4>From</h4>");
    otherWindow.document.write($("#txtName").val() + "<br/>");
    otherWindow.document.write($("#txtAddress1").val() + "<br/>");
    otherWindow.document.write($("#txtAddress2").val() + "<br/>");
    otherWindow.document.write($("#txtCity").val() + "<br/>");
    otherWindow.document.write($("#txtState").val() + " - " + $("#txtPIN").val()  + "<br/>");
    otherWindow.document.write("<h4>To</h4>");
    otherWindow.document.write($("Public Information Officer - Right to Information Act, 2005").val() + "<br/>");
    otherWindow.document.write($("#txtPIODesignation").val() + "<br/>");
    otherWindow.document.write($("#txtPIOOffice").val() + "<br/>");
    otherWindow.document.write($("#txtPIOAddress1").val() + "<br/>");
    otherWindow.document.write($("#txtPIOAddress2").val() + "<br/>");
    otherWindow.document.write($("#txtPIOCity").val() + "<br/>");
    otherWindow.document.write($("#txtPIOState").val() + " - " + $("#txtPIOPIN").val()  + "<br/>");
    otherWindow.document.write("<h4>Subject</h4>");
    otherWindow.document.write("Application under Right to Information Act, 2005");
    otherWindow.document.write("<h4>Description of Information Required</h4>");
    otherWindow.document.write($("#txtSubject").val() + "<br/>");
    if ($("#txtDetail").val() != "") {
        otherWindow.document.write($("#txtDetail").val() + "<br/><br/>");
    } else {
        otherWindow.document.write("<br/>");
    }   
    for (var i = 0; i < 10; i++) {
        var strQues =  $( "#txtInfo" + (i+1) ).val();
        if (strQues == "") {
            break;
        }
        otherWindow.document.write($( strQues + "<br/>"));
    }
    otherWindow.document.write("RTI Application fee of Rs. 10 ");

    if ( $( "#radioFeeCourtFee" ).is(":checked") ) {
        otherWindow.document.write("is affixed as court fee Stamp");
    } else if ( $( "#radioFeePostalOrder" ).is(":checked") ) {
        otherWindow.document.write("is enclosed in a Postal Order numbered __________________ and dated _____________");
    } else if ( $( "#radioFeeDD" ).is(":checked") ) {
        otherWindow.document.write("is enclosed in a Demand Draft in favor of ______________________________");
    }

    otherWindow.document.write("<br/>");
    otherWindow.document.write("Regards,<br/><br/><br/><br/>");
    otherWindow.document.write( $( "#txtName" ).val() );

    otherWindow.document.write("</body></html>");
}

var listQuestions = [
    [ //EPF Withdrawl
        "1. Have you received my application for transfer of PF Account from city (PF A/C Number) to City (PF A/C Number) ? If answer is yes, please mention date of receipt of application(s) and its current status.",
        "2. Please let me know the current balance in my account and if the interest is accruing or not",
        "3. To know the status of a PF account in Noida, please mention the contact details of concernedperson/office with addresses, phone numbers and email addresses. Please also mention the office timings; a contact/inquiry may be initiated.",
        "4. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // Pending work in any govt department
        "1. Please provide the daily progress made on my application.",
        "2. Please give the names and designations of the officials with whom my application was lying during this period. Please intimate the periods when it was lying with which officer and what was the action taken by that official during that period.",
        "3. Please give the proof of receipt and dispatch of my application in the office of each of these officials.",
        "4. According to your rules or citizens charter or any other order, in how many days should such a matter be dealt with and resolved. Please provide a copy of these rules.",
        "5. The above officials have not adhered to the time limit mentioned in these rules. Are these officials guilty of violating these rules and hence guilty of misconduct under their conduct rules. Please give a copy of their conduct rule, which they have violated by violating the above mentioned rule.",
        "6. These officials have caused serious mental injury to me by making me run around all this while. Are these officials guilty of causing mental harassment to the public?",
        "7. What action can be taken against these officials for violating all the above rules and for causing mental agony to the public? By when this action would be taken?",
        "8. By when will my problem be resolved?"
        "9. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // MLA Development Fund
        "1. Please intimate the constituency in which the following address falls: YOUR ADDRESS",
        "2. Please provide the following details for all the works awarded during the period __________to ___________for this whole constituency out of the MLA Constituency Development Fund: a) Name of work b) Brief Description of work c) Amount sanctioned d) Date of sanction e) Status of completion f) Name of agency g) Date of start h) Date of completion i) Rate at which work awarded j) Amount paid k) Copy of sketch l) How was the decision taken to carry out this work?",
        "3. How much money was allotted to him during the current year and how much has been carried over from previous years?",
        "4. Out of the above, projects worth how much money have already been sanctioned?",
        "5. How many projects worth how much money are awaiting sanction?"
        "6. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // Street and road works carried out
        "1. Please give a list of all the works related to improvement of roads or streets carried out in my area (please specify your area) since 1st April 2000. The list should contain the name of the work, Work Order No, actual date of start, actual date of completion, amount paid or payable, status of work, name of contractor and mode of improvement of that road or street.",
        "2. In each of the above works, please give a list of the streets or roads (mentioning from which house no to which house no was it repaired), which were repaired under that work, the length of repair and average width of repair in each street or road.",
        "3. For each of these works, please mention what was the guarantee clause, if any and whether it has been invoked so far.",
        "4. After you have prepared the above information, I would like to inspect your measurement books andWork order registers related to these works to ensure that you have given complete information."
        "5. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // All corruption complaints
        "1. List of all complaints received by the CVC during the period 1.1.05 to 31.12.05 containing brief description of complaint, whether complaint was anonymous, date of complaint, details (name and designation) of official or authority complained against.",
        "2. Which of the above complaints were rejected immediately and which ones were taken up for subsequent investigations? Date of initiating investigations or brief reasons for rejecting, as the case may be.",
        "3. Which one of those taken up for subsequent investigations, have been closed? Brief reasons for closing each one of them.",
        "4. According to various laws, guidelines, rules, procedures, manuals etc, in how much time should an investigation be completed after its receipt at CVC? Please provide copies of such guidelines, which prescribe time limits for various stages starting from receipt of a complaint up to filing of prosecution or imposition of penalties.",
        "5. How many total cases have been received in the Commission since 1.4.02. How many of them were rejected immediately and which ones were taken up for subsequent investigations? In how many of those cases taken up for subsequent investigations, were the above time limits followed?"
        "6. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // School scholarship
        "1. My Son/Daughter is a student of class. Of the above mentioned school. His/Her name is ___________ Is he/She eligible to get the scholarship this year according to your records? If yes, what is the amount of scholarship He/She should receive?",
        "2. Has He/She already been given the scholarship amount for the current year according to your records? If yes, then provide a copy of the related documents/registers which contain the above mentioned details.",
        "3. If He/She have not been given the scholarship, then specify the reason for the same. Provide an attested copy of the related documents.",
        "4. How many students receive the scholarship in the above mentioned school? Provide a list of each such student with name, father’s name, class etc.",
        "5. How many students receive the scholarship in the year ______________ Provide an attested copy of the receipt register which contains the signatures of the students and their parents.",
        "6. What is the basis on which the distribution of scholarships to the students is decided? Are there any rules and regulations for such scholarship distribution? Provide an attested copy of all related governing orders/directions and laws.",
        "7. What is the total amount of funds allotted by the Government for the distribution of scholarships to various students?",
        "8. Has the department made any arrangement/system for the fair and just distribution of scholarships to the deserving students? Provide an attested copy of the related documents.",
        "9. If a student has not received the scholarship yet, then specify the reason. Provide a list of all such students who have not been given the scholarship yet with the following particulars: 1. Name of the student 2. Father’s name 3. Reason for not being given the scholarship",
        "10. Specify the names and designation of the officers responsible for the non payment of scholarships on time. What action will be taken against such officers according to departmental rules and regulations? When will this action be taken?"
    ],
    [ // Ration Card
        "1. Provide the details/factual account of the ration and kerosene oil issued on my ration card per month, according to your records with the following particulars: 1) Month 2) Amount of ration and 3) kerosene oil issued 4) Date of providing the ration and kerosene oil 5) Amount paid for each of the above 6) Photocopy of the receipt of the above mentioned amount.", 
        "2. Provide an attested copy of the following records of the ration shop and kerosene oil depot of the last six months:1) Master card Register 2) Daily sale register 3) Daily stock register 4) Monthly stock register 5) Assessment book 6) Cash memo",
        "3. How many complaints have been received against the above mentioned ration shop and the kerosene oil depot? Provide a list of such complaints with the following particulars: 1) Name of the complainant 2) Brief description of the complaint 3) Date of complaint 4) Description of the action taken on the complaint 5) Name, designation and address of the officer who took action on the complaint"
        "4. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ],
    [ // Old Age Pension
        "1. How many times and when have I been paid the pension according to the departmental records in the last one year? Provide its monthly details with the following particulars: 1. Amount of pension payment 2. Date of payment 3. Photocopy of those pages of the records which contains the details of my payments.",
        "2. In ___________ how many people are being paid the Old Age/Widow pension according to the departmental records? Provide a list of such people with the following details: 1. Name and address of the pension receivers(pensioners) 2. Age of the pension receiver(pensioner) 3. Amount of pension payment 4. The payment is being done in cash or through cheque 5. A copy of the payment registers containing the details of last one year",
        "3. Who are the Officers/employees responsible for the pension payments? Provide their details with name and designation.",
        "4. How many times are Old Age/Widow pension payments made in a year? What is the last date for the pension payments? When have the payments been made in the year 2005-2006?",
        "5. If my payment has not been done during ___________ . then which officer/employee is responsible for such discrepancy? Provide the details of those officers/employees with the details of their names, addresses and designation.",
        "6. What action will be taken against such officer/employee who shirks from work and causes problems for the people? When will this action be taken?"
        "7. Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and email address etc. for this RTI application.,"
    ]
];

var listSubjects = [
    "Status of withdrawl of my EPF Account",
    "Status of pending work in any government department",
    "Enquiry on MLA Development Funds",
    "Complete list of all streets and road works carried out",
    "Status of all corruption complaints",
    "Details of Scholarships in a school",
    "Details of Ration Card",
    "Details of Old age/Widow pensions"
];

var listDetails = [
    "I have an EPF account with my previous employer ____________ company based in _____________ (City). I applied for withdrawal of my EPF account on _________ (dd/mm/yy), but I have been waiting for ____ (2 yrs) now. I would like to know the following things.",
    "I had made an application for the following reason (copy of application is attached) but no satisfactory action has been taken on my application so far.",
    "",
    "",
    "",
    "Provide the following details relating to the distribution of Scholarships in ________________ school.",
    "I am a resident of ____________ Village. I have been given Ration card, card number is __________. My Ration Card shop number is _________ and Kerosene oil depot number is ____________ in the register",
    "I receive Old Age/Widow pension. My account no. is __________. But I have not received my pension since __________. I want the following information under Right to Information regarding the same"
];


