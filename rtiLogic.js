function setup() {

    console.log("setup");

    $( "#txtName" ).focus(function() {
        $( "#tipText" ).empty();
        $( "#tipText" ).html("<ol><li>You should be a Citizen of India to file RTI Application</li><li>Legal entities can't file RTI.</li><li>But its possible for a citizen to apply RTI through address of a legal entity.</li><li>Unfortunately, this application is applicable only to the following regions: Tamil Nadu, Kerala, West Bengal, Chandigarh, Delhi, Himachal Pradesh, Karnataka, Uttarakhand, Tripura, Mizoram, Puducherry, Meghalaya, Noida, Andaman and Nicobar, Goa, Jharkhand, Manipur, Nagaland </li></ol>");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtAddress1" ).focus(function() {
        $( "#tipText" ).empty();
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
        $( "#tipText" ).text("OPTIONAL Field. In every Government office there is an officer designated as Public Information Officer (PIO) whose responsibility is to reply to RTI applications. The Designation of the PIO can be found by visiting corresponding department's web site and probing for links like 'RTI Contacts' / 'Right to Information;'. If you are not sure of the PIO, you can send it to your District Collector.");
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
        $( "#tipText" ).text("Pin code of Public Authority");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOState" ).focus(function() {
        $( "#tipText" ).text("State of the PIO's office. For Himachal Pradesh, For each subject in respect of each year different application should be made");
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

    $( "#radioPovertyYes" ).focus(function() {
        $( "#tipText" ).text("If the applicant is below poverty line. then all information will be given at free of cost");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
        $( "#feeSection" ).slideUp();
    });

    $( "#radioPovertyNo" ).focus(function() {
        $( "#tipText" ).text("If not, application charge of Rs. 10.00 has to be paid through means given below");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
        $( "#feeSection" ).slideDown();
    });

    $( "#radioFeeCourtFee" ).focus(function() {
        $( "#tipText" ).text("Court Fee Stamps can be bought in Courts, Stamp Vendor, shops near Taluk offices, Registrar offices, etc.,. Affix the Stamp at top right of the RTI application, below the date.");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeePostalOrder" ).focus(function() {
        $( "#tipText" ).text("A Postal order of Rs. 10.00 can be bought from Post Office and attached with the RTI Application.");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeeDD" ).focus(function() {
        $( "#tipText" ).text("Demand Draft can be drawn in favor of Public Authority and be attached with the RTI Application.");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#btnGenerate" ).click(function() {
        generate();
    }); 

    //generate();

};

function updateQuestions(index) {

    $( "#txtDetail" ).val("");
    $( "#txtDetail" ).attr("placeholder", listDetails[index]);

    for (i = 0; i < listQuestions[index].length; i++) {
        $( "#txtInfo" + (i+1) ).val("");
        $( "#txtInfo" + (i+1) ).attr("placeholder", listQuestions[index][i]);
    }

    for (i = i; i < 10; i++) {
        $( "#txtInfo" + (i+1) ).val("");
        $( "#txtInfo" + (i+1) ).attr("placeholder", "");
    }

};

function generate() {
    console.log("generate");
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var ddate = curr_date + "-" + curr_month + "-" + curr_year;
    var otherWindow             =   window.open("", "_blank");
    otherWindow.document.write("<!DOCTYPE html><html>");
    otherWindow.document.write("<head><style> h4 { padding: 0px; margin: 0px; } </style></head>")
    otherWindow.document.write("<body><h3><center>Application for Information under the Right to Information Act, 2005</center></h3>");
    otherWindow.document.write("<div style='text-align:right'>" + ddate + "</div>");
    otherWindow.document.write("<h4>From</h4>");
    otherWindow.document.write($("#txtName").val() + "<br/>");
    otherWindow.document.write($("#txtAddress1").val() + "<br/>");
    if ( $("#txtAddress2").val() != "") {
        otherWindow.document.write($("#txtAddress2").val() + "<br/>");
    }
    otherWindow.document.write($("#txtCity").val() + "<br/>");
    otherWindow.document.write($("#txtState").val() + " - " + $("#txtPIN").val()  + "<br/><br/>");
    otherWindow.document.write("<h4>To</h4>");
    otherWindow.document.write("Public Information Officer<br/>");
    otherWindow.document.write($("#txtPIODesignation").val() + "<br/>");
    otherWindow.document.write($("#txtPIOOffice").val() + "<br/>");
    otherWindow.document.write($("#txtPIOAddress1").val() + "<br/>");
    if ( $("#txtPIOAddress2").val() != "") {
        otherWindow.document.write($("#txtPIOAddress2").val() + "<br/>");
    }
    otherWindow.document.write($("#txtPIOCity").val() + "<br/>");
    otherWindow.document.write($("#txtPIOState").val() + " - " + $("#txtPIOPIN").val()  + "<br/><br/>");
    otherWindow.document.write("<h4>Subject</h4>");
    otherWindow.document.write("Application under Right to Information Act, 2005<br/>");
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
        otherWindow.document.write( strQues + "<br/>");
    }
    otherWindow.document.write("<br/>RTI Application fee of Rs. 10 ");

    if ( $( "#radioFeeCourtFee" ).is(":checked") ) {
        otherWindow.document.write("is affixed as court fee Stamp");
    } else if ( $( "#radioFeePostalOrder" ).is(":checked") ) {
        otherWindow.document.write("is enclosed in a Postal Order numbered __________________ and dated _____________");
    } else if ( $( "#radioFeeDD" ).is(":checked") ) {
        otherWindow.document.write("is enclosed in a Demand Draft numbered __________________ in the bank __________________");
    }

    otherWindow.document.write("<br/>");
    otherWindow.document.write("<br/>Applicant,<br/><br/><br/><br/>");
    otherWindow.document.write( $( "#txtName" ).val() );

    otherWindow.document.write("</body></html>");
}

var listQuestions = [
    [ //EPF Withdrawl
        "1. Copy of inward register showing the date on which my PF/EPF claim application (Form 10 C) was received by your office.",
        "2. Please let me know the balance in my account excluding interest.",
        "3. Please let me know the current balance in my account including interest.",
        "4. As of reply date; please inform me the Name, Designation, phone number and email address of all Officer(s) who are involved in processing of PF/EPF Form 10 C claims.",
        "5. File number of my PF/EPF claim application ( Form 10 C).",
        "6. Certified Copy of excerpts of the Rules / Regulation / Notification / Order / Circular / Memo / Norms / Guidelines / Direction, prescribing time frame for processing of Form 10 C claims.",
        "7. Name and Designation of the officer to complain, on non disposal of the application within the time frame.",
        "8. Certified copies of all correspondences sent / received for disposal of my application.",
        "9. Claim ID generated against my claim application.",
        "10. Please provide me the details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // Pending work in any govt department
        "1. Please provide the daily progress made on my complaint.",
        "2. Names and designations of the officials with whom my complaint was lying during this period. Please intimate the periods, when it was lying with which officer and what was the action taken by that official during that period.",
        "3. Certified copies of all correspondences sent / received for disposal of my complaint.",
        "4. According to your Rules / Regulation / Notification / Order / Circular / Memo / Norms / Guidelines / Direction / citizens charter, in how many days should such a matter be dealt with and resolved. Please provide me the certified copy of the relevant document.",
        "5. Provide me the certified copy of conduct service rule / regulation having provision to take disciplinary action for non adherence to the timeframe.",
        "6. Provide the certified copy of File Noting related to the complaint.",
        "7. Provide the certified copy of Work Order pertaining to my complaint, if any.",
        "8. Please provide me the details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // MLA Development Fund
        "1. Please intimate the constituency in which the following address falls: _______________ (YOUR ADDRESS).",
        "2. Please provide the following details in a tabular format for all the works / projects awarded during the period __________to ___________for my constituency out of the MLA Constituency Development Fund: a) Name of work / project b) Brief Description of work / project c) Amount sanctioned d) Date of sanction e) Status of Progress f) Name of agency / contractor g) Date of Initiation h) Date of completion i) Date of deadline j) Date of Extended deadline k) Certified copy of the Contracts Document l) Amount paid to the contractor m) Certified copy of the estimate document n) Copy of sketch o) Certified copy of documents / letters related to decision of start of  this work / project p) Name and Designation of Inspection officer.",
        "3. How much of money for MLA Constituency Development Fund was allotted to him during the current year and how much has been carried over from previous years?",
        "4. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // Street and road works carried out
        "1. Please give a list of all the works / projects related to improvement of roads or streets carried out in my area ____________________________ for past ________ (months / years). The list should contain the name of the work, Work Order No, actual date of start, actual date of completion, amount paid or payable, status of work, list of street / roads covered, Name of the Contractor.",
        "2. For each of these works, please mention the guarantee clause in contract, if any and whether it has been invoked so far.",
        "3. Names and designations of the officials to monitor and maintenance of the roads / streets .",
        "4. Provide me the certified copy of all Quotations submitted by all Bidders.",
        "5. Provide me the certified copy of Contract document, that is signed by contractor.",
        "6. Provide me the certified copy of Estimate document.",
        "7. Name, Designation and mobile number of Inspection Officer.",
        "8. Certified copy of Inspection report submitted by the Inspection Officer.",
        "9. After you have prepared the above information, I would like to inspect your measurement books, Work order registers, Quotations, Contract document, Estimate document and Inspection report related to these works to ensure that you have given the complete information.",
        "10. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // All corruption complaints
        "1. List of all complaints received by the CVC during the period __________(dd/mm/yyyy) to ___________(dd/mm/yyyy) containing brief description of complaint, whether complaint was anonymous, date of complaint, details (name and designation) of official or authority complained against.",
        "2. List of the above complaints that were rejected immediately and the ones that were taken up for subsequent investigations. Date of initiating investigations or brief reasons for rejecting, as the case may be.",
        "3. List of those taken up for subsequent investigations, have been closed? Brief reasons for closing each one of them.",
        "4. According to various laws, guidelines, rules, procedures, manuals etc, in how much time should an investigation be completed after its receipt at CVC? Please provide copies of such guidelines, which prescribe time limits for various stages starting from receipt of a complaint up to filing of prosecution or imposition of penalties.",
        "5. Number of corruption complaints received in last one year.",
        "6. Among the complaint received in last one year, how many cases are resolved and closed.",
        "7. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // School scholarship
        "1. List of available scholarships in this school / college under various schemes for my institution. Also provide Eligibility criteria, scholarship amount in a tabular format.",
        "2. Number of students who received the scholarship in the above mentioned school / college in last one year.  Provide a list of each such student with name, father’s name, class and  availed scholarship.",
        "3. Certified Copy of excerpts of the Rules / Regulation / Notification / Order / Circular / Memo / Norms / Guidelines / Direction, prescribing time frame for provision of scholarship amount from receipt of my Scholarship application.",
        "4. Number of students who received the scholarship in the year ______________ . Provide an certified copies of the receipt register which contains the signatures of the students or their parents.",
        "5. Are there any rules and regulations for distribution of scholarships among students? Provide certified copy of all related Rules / Regulation / Notification / Order / Circular / Memo / Norms / Guidelines / Direction.",
        "6. Has the department made any arrangement / system for the fair and just distribution of scholarships to the deserving students? Provide an attested copy of the related documents.",
        "7. Provide a list of students, who are rejected of scholarship, with the following particulars: 1. Name of the student 2. Father’s name 3. Reason for rejection of scholarship.",
        "8. Specify the names and designation of the officers responsible for the non payment of scholarships on time. Provide me the certified copy of conduct service rule / regulation having provision to take disciplinary action for non adherence to the timeframe.",
        "9. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // Ration Card
        "1. Provide the details/factual account of the ration and kerosene oil issued on my ration card per month, according to your records with the following particulars: 1) Month 2) Amount of ration and 3) kerosene oil issued 4) Date of providing the ration and kerosene oil 5) Amount paid for each of the above 6) Photocopy of the receipt of the above mentioned amount.", 
        "2. Provide an attested copy of the following records of the ration shop and kerosene oil depot of the last six months:1) Master card Register 2) Daily sale register 3) Daily stock register 4) Monthly stock register 5) Assessment book 6) Cash memo.",
        "3. How many complaints have been received against the above mentioned ration shop and the kerosene oil depot? Provide a list of such complaints with the following particulars: 1) Name of the complainant 2) Brief description of the complaint 3) Date of complaint 4) Description of the action taken on the complaint 5) Name, designation and address of the officer who took action on the complaint.",
        "4. Certified copies of last 3 inspection reports on the status of weights and measures, along with the date of Inspection.",
        "5. Name of the document to check the current stock of ration shop.",
        "6. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // Old Age / Widow Pension
        "1. How many times and when have I been paid the pension according to the departmental records in the last one year? Provide its monthly details with the following particulars: 1. Amount of pension payment 2. Date of payment 3. Certified copies of those pages of the records which contains the details of my payments.",
        "2. In ___________ (village/town/city) how many people are being paid the Old Age/Widow pension according to the departmental records? Provide a list of such people with the following details: 1. Name and address of the pension receivers(pensioners) 2. Age of the pension receiver(pensioner) 3. Amount of pension payment 4. The payment is being done in cash or through cheque 5. A copy of the payment registers containing the details of last one year.",
        "3. Who are the Officers/employees responsible for the pension payments in my ____________________(Village / Town/ City)? Provide their details with name, designation and Contact number.",
        "5. If my payment has not been done during ___________ . then which officer/employee is responsible for such discrepancy? Provide the details of those officers/employees with the details of their names, designation and addresses.",
        "6. Provide me the certified copies of Rules / Regulation / Notification / Order / Circular / Memo / Norms / Guidelines / Direction issued regarding the timeframe of issuing pension.",
        "7. Specify the names and designation of the officers responsible for the non payment of my pension on time. Provide me the certified copy of conduct service rule / regulation having provision to take disciplinary action for non adherence to the timeframe.",
        "8. Please provide details of First Appellate Authority u/s 7(8) of RTI Act, 2005 with detailed postal and email address."
    ],
    [ // Custom Blank Template
        ""
    ]
];

var listSubjects = [
    "Status of withdrawal of my Employees’ Provident Fund (EPF) Account",
    "Status of pending work in any government department on my complaint",
    "Enquiry on MLA Constituency Development Funds",
    "Complete list of all streets and road works carried out",
    "Status of all corruption complaints from Central Vigilance Commission",
    "Details of Scholarships in a School / College",
    "Details of Ration Card",
    "Details of Old age/Widow pensions",
    "Custom Blank Template"
];

var listDetails = [
    "I have an Employees’ Provident Fund (EPF) account with my previous employer ____________ (establishment name) establishment based in _____________ (City). I applied for withdrawal of my EPF account on _________ (dd/mm/yy), but I have been waiting for ____ (years) now. I would like to know the following information.",
    "I made a complaint dated __________ (dd/mm/yy) for the following reason ______________. (Copy of complaint is attached). But no satisfactory action has been taken on my complaint so far. The RPAD receipt number is ___________________ (RTXXXXXXXXXXIN).",
    "Enquiry on MLA Constituency Development Funds spent by my MLA.",
    "Complete list of all streets and road works carried out in ______________ ward / road / village.",
    "Status of all corruption complaints received by Central Vigilance Commission.",
    "Provide the following details relating to the Scholarships in ________________ School / College. I am student of ______________________ (class:school / dept:year:college), belongs to the community _______________ (community), and resident of __________ (village / town / city).",
    "I am a resident of ____________ Village / Town / City. I have been given Ration card, card number is __________.",
    "I receive Old Age/Widow pension. My account no. is __________. But I have not received my pension since __________. I want the following information under Right to Information regarding the same.",
    ""
];

