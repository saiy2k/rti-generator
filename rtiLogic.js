function setup() {

    $( "#txtName" ).focus(function() {
        $( "#tipText" ).text("You should be a Citizen of India to file RTI Application. Organisations, Private / Public Companies can't file RTI");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtAddress1" ).focus(function() {
        $( "#tipText" ).text("Enter your address");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtAddress2" ).focus(function() {
        $( "#tipText" ).text("Enter your address Line 2");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
        console.log("address 2");
    });

    $( "#txtCity" ).focus(function() {
        $( "#tipText" ).text("Enter your city");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtState" ).focus(function() {
        $( "#tipText" ).text("Enter your State");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIN" ).focus(function() {
        $( "#tipText" ).text("Pin code");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIODesignation" ).focus(function() {
        $( "#tipText" ).text("Every Government officer has an officer appointed with designation Public Information Officer (PIO) whose responsibility is to reply to RTI applications. The Designation of the PIO can be found by visiting the corresponding Public Authority's web site and probing for link title 'RTI Contacts'. If you are not sure of the PIO, you can send it to your District Collector. Eg., Police Inspector, Under Secretary, etc., ");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOOffice" ).focus(function() {
        $( "#tipText" ).text("Name of the office, Eg., Corporation of Chennai, TN Pollution Control Board, BSNL Office, etc.,");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOAddress1" ).focus(function() {
        $( "#tipText" ).text("Address 1");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOAddress2" ).focus(function() {
        $( "#tipText" ).text("Address 2");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOCity" ).focus(function() {
        $( "#tipText" ).text("City of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOPIN" ).focus(function() {
        $( "#tipText" ).text("Pin code of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPIOState" ).focus(function() {
        $( "#tipText" ).text("State of the PIO's office");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

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

    var listQuestions = [
        [ //EPF Withdrawl
            "Have you received my application for transfer of PF Account from city (PF A/C Number) to City (PF A/C Number) ? If answer is yes, please mention date of receipt of application(s) and its current status.",
            "Please let me know the current balance in my account and if the interest is accruing or not",
            "To know the status of a PF account in Noida, please mention the contact details of concernedperson/office with addresses, phone numbers and email addresses. Please also mention the officetimings; a contact/inquiry may be initiated.",
            "Please provide details of First Appellate Authority under RTI Act 2005 with detailed postal and emailaddress etc. for this RTI application.,"
        ],
        [ // Pending work in any govt department
            "Please provide the daily progress made on my application.",
            "Please give the names and designations of the officials with whom my application was lying during this period. Please intimate the periods when it was lying with which officer and what was the action taken by that official during that period.",
            "Please give the proof of receipt and dispatch of my application in the office of each of these officials.",
            "According to your rules or citizens charter or any other order, in how many days should such a matter be dealt with and resolved. Please provide a copy of these rules.",
            "The above officials have not adhered to the time limit mentioned in these rules. Are these officials guilty of violating these rules and hence guilty of misconduct under their conduct rules. Please give a copy of their conduct rule, which they have violated by violating the above mentioned rule.",
            "These officials have caused serious mental injury to me by making me run around all this while. Are these officials guilty of causing mental harassment to the public?",
            "What action can be taken against these officials for violating all the above rules and for causing mental agony to the public? By when this action would be taken?",
            "By when will my problem be resolved now?"
        ],
        [ // MLA Development Fund
            "Please intimate the constituency in which the following address falls: YOUR ADDRESS",
            "Please provide the following details for all the works awarded during the period __________to ___________for this whole constituency out of the MLA Constituency Development Fund: a. Name of workb. Brief Description of workc. Amount sanctionedd. Date of sanctione. Status of completionf. Name of agencyg. Date of starth. Date of completioni. Rate at which work awardedj. Amount paidk. Copy of sketchl. How was the decision taken to carry out this work?",
            "How much money was allotted to him during the current year and how much has been carried over from previous years?",
            "Out of the above, projects worth how much money have already been sanctioned?",
            "How many projects worth how much money are awaiting sanction?"
        ],
        [ // Street and road works carried out
            "Please give a list of all the works related to improvement of roads or streets carried out in my area (please specify your area) since 1st April 2000. The list should contain the name of the work, Work Order No, actual date of start, actual date of completion, amount paid or payable, status of work, name of contractor and mode of improvement of that road or street.",
            "In each of the above works, please give a list of the streets or roads (mentioning from which house no to which house no was it repaired), which were repaired under that work, the length of repair and average width of repair in each street or road.",
            "For each of these works, please mention what was the guarantee clause, if any and whether it has been invoked so far.",
            "After you have prepared the above information, I would like to inspect your measurement books andWork order registers related to these works to ensure that you have given complete information."
        ],
        [ // All corruption complaints
            "List of all complaints received by the CVC during the period 1.1.05 to 31.12.05 containing brief description of complaint, whether complaint was anonymous, date of complaint, details (name and designation) of official or authority complained against.",
            "Which of the above complaints were rejected immediately and which ones were taken up for subsequent investigations? Date of initiating investigations or brief reasons for rejecting, as the case may be.",
            "Which one of those taken up for subsequent investigations, have been closed? Brief reasons for closing each one of them.",
            "According to various laws, guidelines, rules, procedures, manuals etc, in how much time should an investigation be completed after its receipt at CVC? Please provide copies of such guidelines, which prescribe time limits for various stages starting from receipt of a complaint up to filing of prosecution or imposition of penalties.",
            "How many total cases have been received in the Commission since 1.4.02. How many of them were rejected immediately and which ones were taken up for subsequent investigations? In how many of those cases taken up for subsequent investigations, were the above time limits followed?"
        ],
        [ // School scholarship
            "My Son/Daughter is a student of class…………. Of the above mentioned school. His/Her name is …………. Is he/She eligible to get the scholarship this year according to your records? If yes, what is the amount of scholarship He/She should receive?",
            "Has He/She already been given the scholarship amount for the current year according to your records? If yes, then provide a copy of the related documents/registers which contain the above mentioned details.",
            "If He/She have not been given the scholarship, then specify the reason for the same. Provide an attested copy of the related documents.",
            "How many students receive the scholarship in the above mentioned school? Provide a list of each such student with name, father’s name, class etc.",
            "How many students receive the scholarship in the year ……….? Provide an attested copy of the receipt register which contains the signatures of the students and their parents.",
            "What is the basis on which the distribution of scholarships to the students is decided? Are there any rules and regulations for such scholarship distribution? Provide an attested copy of all related governing orders/directions and laws.",
            "What is the total amount of funds allotted by the Government for the distribution of scholarships to various students?",
            "Has the department made any arrangement/system for the fair and just distribution of scholarships to the deserving students? Provide an attested copy of the related documents.",
            "If a student has not received the scholarship yet, then specify the reason. Provide a list of all such students who have not been given the scholarship yet with the following particulars: 1. Name of the student 2. Father’s name 3. Reason for not being given the scholarship",
            "Specify the names and designation of the officers responsible for the non payment of scholarships on time. What action will be taken against such officers according to departmental rules and regulations? When will this action be taken?"
        ],
        [ // Ration Card
            "Provide the details/factual account of the ration and kerosene oil issued on my ration card per month, according to your records with the following particulars:MonthAmount of ration and kerosene oil issuedDate of providing the ration and kerosene oilAmount paid for each of the aboveA photocopy of the receipt of the above mentioned amount.",
            "Provide an attested copy of the following records of the ration shop and kerosene oil depot of the last six months:Master card RegisterDaily sale registerDaily stock registerMonthly stock registerAssessment bookCash memo",
            "How many complaints have been received against the above mentioned ration shop and the kerosene oil depot? Provide a list of such complaints with the following particulars:Name of the complainantBrief description of the complaintDate of complaintDescription of the action taken on the complaintName, designation and address of the officer who took action on the complaint"
        ],
        [ // Old Age Pension
            "How many times and when have I been paid the pension according to the departmental records in the last one year? Provide its monthly details with the following particulars: 1. Amount of pension payment 2. Date of payment 3. Photocopy of those pages of the records which contains the details of my payments.",
            "In……………. how many people are being paid the Old Age/Widow pension according to the departmental records? Provide a list of such people with the following details: 1. Name and address of the pension receivers(pensioners) 2. Age of the pension receiver(pensioner) 3. Amount of pension payment 4. The payment is being done in cash or through cheque 5. A copy of the payment registers containing the details of last one year",
            "Who are the Officers/employees responsible for the pension payments? Provide their details with name and designation.",
            "How many times are Old Age/Widow pension payments made in a year? What is the last date for the pension payments? When have the payments been made in the year 2005-2006?",
            "If my payment has not been done during………….. . then which officer/employee is responsible for such discrepancy? Provide the details of those officers/employees with the details of their names, addresses and designation.",
            "What action will be taken against such officer/employee who shirks from work and causes problems for the people? When will this action be taken?"
        ]
    ];

    var listDetails = [
        "I have an EPF account with my previous employer XYZ company based in Bangalore. I applied for withdrawal of my EPF account on dd/mm/yy, but I have been waiting for 2 yrs now. I would like to know the following things.",
        "I had made an application for the following reason (copy of application is attached) but no satisfactory action has been taken on my application so far.",
        "Enquiring the details on MLA Development fund",
        "Complete list of all streets and road works carried out",
        "Status of all corruption complaints",
        "Provide the following details relating to the distribution of Scholarships in …………… school.",
        "I am a resident of …………. Village. I have been given ………. Ration card, card number……….. My Ration Card shop number is …… and Kerosene oil depot number is ……….. in the register.",
        "I receive Old Age/Widow pension. My account no. is: ………. . But I have not received my pension since……………….. I want the following information under Right to Information regarding the same:"
    ];

    $( "#txtSubject" ).autocomplete({
        source: listSubjects,
        minLength: 0,
        select: function (event, ui) {
            var i = 0;
            var index = listSubjects.indexOf(ui.item.value);
            $( "#txtDetail" ).attr("placeholder", listDetails[index]);

            for (i = 0; i < listQuestions[index].length; i++) {
                $( "#txtInfo" + (i+1) ).attr("placeholder", listQuestions[index][i]);
            }

            for (i = i; i < 10; i++) {
                $( "#txtInfo" + (i+1) ).attr("placeholder", "");
            }
        }
    }).focus(function() {
        $(this).autocomplete("search", "");
    });

    $( "#txtSubject" ).focus(function() {
        $( "#tipText" ).text("Select from any of the predefined template or write your own");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtPeriod" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text("Time Range. For example, 2000 to 2010; last financial year; March, 2013 to May, 2013, date of my complaint to present");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( "#txtDetail" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text("Other details related to the RTI");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });

    $( ".txtInformation" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text("hiii");
        $( "#tipContainer" ).offset({top: $(this).offset().top});
    });


};
