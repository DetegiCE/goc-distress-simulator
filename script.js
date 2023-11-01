let stage = 0;
let distresstype = 0;
let distressstr = ['UNDESIGNATED', 'FIRE AND EXPLOSION', 'FLOODING', 'COLLISION', 'GROUNDING',
                   'LISTING', 'SINKING', 'DISABLE', 'ABANDONING', 'PIRACY',
                   'MAN OVEBOARD'];
/*
STAGE
0: 초기상태
1: F 누름
2: 7 누름
3: 1/ENT 누름
4: 1/ENT 누름
*/

const prob1 = [`1) 선명 : HANWOORI<br>
2) 호출부호 : D8GF<br>
3) MMSI : 440123456<br>
4) 조난의 종류 : 침몰<br>
5) 조난위치 : S 23o 12.34', W 167o 23.45'<br>
6) 조난 통보문 : <br>
DISTRESS POSITION IS S 23o 12.34', W 167o 23.45'<br>
I AM SINKING AFTER COLLISION WITH ICE BERG.<br>
I REQUIRE IMMEDIATE ASSISTANCE. OVER`]

const prob2 = [`ENSURE THAT LIFE SAVING APPLIANCES OR ARRANGEMENTS ON SUCH SHIPS ARE REPLACED OR MODIFICATION`]

const el1 = document.getElementById("l1");
const el2 = document.getElementById("l2");
const el3 = document.getElementById("l3");
const el4 = document.getElementById("l4");
const el5 = document.getElementById("l5");
const el6 = document.getElementById("l6");
const el7 = document.getElementById("l7");
const el8 = document.getElementById("l8");
const elchan = document.getElementById("lchan");
const espeaker = document.getElementById("speaker");
const eannounce = document.getElementById("announce");
const enextbtn = document.getElementById("nextbtn");

function toggleClass(elem, className) {
    if(elem.classList.contains(className)) {
        elem.classList.remove(className);
    } else {
        elem.classList.add(className);
    }
}

function setInnerHTML(elem, inner) {
    elem.innerHTML = inner;
}

function bf() {
    if(stage == 0) {
        stage = 1;
        setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;&nbsp;<span class='colrev'>F</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01/11/23");;
        setInnerHTML(eannounce, prob1[Math.floor(Math.random() * prob1.length)])
    }
}

function b7() {
    if(stage == 1) {
        stage = 2;
        toggleClass(el1, "tright");
        toggleClass(el1, "tleft");
        toggleClass(el1, "colrev");
        setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DSC MENU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        
        toggleClass(el2, "thalf");
        toggleClass(el2, "tleft");
        setInnerHTML(el2, ">1.DISTRESS CALL");

        toggleClass(el3, "thalf");
        toggleClass(el3, "tleft");
        setInnerHTML(el3, "&nbsp;2.URGENCY CALL");

        toggleClass(el4, "thalf");
        toggleClass(el4, "tleft");
        setInnerHTML(el4, "&nbsp;3.SAFETY CALL");
        
        toggleClass(el5, "thalf");
        toggleClass(el5, "tleft");
        setInnerHTML(el5, "&nbsp;4.ROUTINE CALL");
        
        toggleClass(el6, "tleft");
        setInnerHTML(el6, "&nbsp;5.SEMI/AUTO VHF");

        toggleClass(el7, "tleft");
        setInnerHTML(el7, "&nbsp;6.RECEIVED CALL");

        toggleClass(el8, "colrev");
        setInnerHTML(el8, "");

        toggleClass(elchan, "displayNone");
    }
}

function b1() {
    if(stage == 2) {
        stage = 3;
        setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;DISTRESS  CALL&nbsp;&nbsp;&nbsp;");
        setInnerHTML(el2, ">1.ALERT");
        setInnerHTML(el3, "&nbsp;2.ACK.");
        setInnerHTML(el4, "&nbsp;3.RELAY-ALL SHIPS");
        setInnerHTML(el5, "&nbsp;4.RELAY-A STATION");
        setInnerHTML(el6, "&nbsp;5.RELAY ACK.");
        setInnerHTML(el7, "");
        setInnerHTML(el8, "");
    }
    else if(stage == 3) {
        stage = 4;
        setInnerHTML(el1, "&nbsp;ENTER DISTRESS MSG&nbsp;&nbsp;");
        setInnerHTML(el2, "&nbsp;NATURE:");

        toggleClass(el3, "colrev");
        toggleClass(el3, "tleft");
        toggleClass(el3, "tright");
        setInnerHTML(el3, "UNDESIGNATED");

        setInnerHTML(el4, "&nbsp;POSITION:");
        toggleClass(el5, "tleft");
        toggleClass(el5, "tright");
        setInnerHTML(el5, "LAT:&nbsp;&nbsp;--o--,-----");
        toggleClass(el6, "tleft");
        toggleClass(el6, "tright");
        setInnerHTML(el6, "LON:&nbsp;---o--,-----");
        toggleClass(el7, "tleft");
        toggleClass(el7, "tright");
        setInnerHTML(el7, "TIME:&nbsp;&nbsp;&nbsp;UTC --:--");
    }
}

function bent() {
    if(stage == 2) {
        stage = 3;
        setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;DISTRESS  CALL&nbsp;&nbsp;&nbsp;");
        setInnerHTML(el2, ">1.ALERT");
        setInnerHTML(el3, "&nbsp;2.ACK.");
        setInnerHTML(el4, "&nbsp;3.RELAY-ALL SHIPS");
        setInnerHTML(el5, "&nbsp;4.RELAY-A STATION");
        setInnerHTML(el6, "&nbsp;5.RELAY ACK.");
        setInnerHTML(el7, "");
        setInnerHTML(el8, "");
    }
    else if(stage == 3) {
        stage = 4;
        setInnerHTML(el1, "&nbsp;ENTER DISTRESS MSG&nbsp;&nbsp;");
        setInnerHTML(el2, "&nbsp;NATURE:");

        toggleClass(el3, "colrev");
        toggleClass(el3, "tleft");
        toggleClass(el3, "tright");
        setInnerHTML(el3, "UNDESIGNATED");

        setInnerHTML(el4, "&nbsp;POSITION:");
        toggleClass(el5, "tleft");
        toggleClass(el5, "tright");
        setInnerHTML(el5, "LAT:&nbsp;&nbsp;--o--,-----");
        toggleClass(el6, "tleft");
        toggleClass(el6, "tright");
        setInnerHTML(el6, "LON:&nbsp;---o--,-----");
        toggleClass(el7, "tleft");
        toggleClass(el7, "tright");
        setInnerHTML(el7, "TIME:&nbsp;&nbsp;&nbsp;UTC --:--");
    }
    else if(stage == 4) {
        stage = 5;
        setInnerHTML(el5, "LAT:&nbsp;&nbsp;23o12'3400<span class='colrev'>S</span>")
        setInnerHTML(el6, "LON:&nbsp;167o23'4500W")
        setInnerHTML(el7, "TIME:&nbsp;&nbsp;&nbsp;UTC 12:00");
    }
    else if(stage == 5) {
        stage = 6;
        setInnerHTML(el5, "LAT:&nbsp;&nbsp;23o12'3400S")
        setInnerHTML(el6, "LON:&nbsp;167o23'4500<span class='colrev'>W</span>")
    }
    else if(stage == 6) {
        stage = 7;
        setInnerHTML(el6, "LON:&nbsp;167o23'4500W")
        setInnerHTML(el7, "TIME:&nbsp;&nbsp;&nbsp;UTC <span class='colrev'>1</span>2:00");
    }
    else if(stage == 7) {
        stage = 8;
        setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEND&nbsp;&nbsp;DSC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        setInnerHTML(el2, "&nbsp;FORMAT:&nbsp;&nbsp;&nbsp;&nbsp;DISTRESS");
        
        toggleClass(el3, "colrev");
        toggleClass(el3, "tright");
        toggleClass(el3, "tleft");
        setInnerHTML(el3, "&nbsp;FROM:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;440123456");

        setInnerHTML(el4, "&nbsp;NATURE:");
        setInnerHTML(el5, distressstr[distresstype]+"&nbsp;&nbsp;&nbsp;&nbsp;");

        toggleClass(el6, "tright");
        toggleClass(el6, "tleft");
        setInnerHTML(el6, "POSITION:");

        setInnerHTML(el7, "LAT:&nbsp;&nbsp;23o12'3400S&nbsp;&nbsp;&nbsp;&nbsp;");
        
        toggleClass(el8, "tright");
        setInnerHTML(el8, "LON:&nbsp;167o23'4500Wv&nbsp;&nbsp;&nbsp;");
    }
    else if(stage == 8) {
        stage = 9;
    }
    else if(stage == 9) {
        stage = 10;
        setInnerHTML(el1, "");
        setInnerHTML(el2, "&nbsp;PRESS DISTRESS KEY");
        setInnerHTML(el3, "");
        setInnerHTML(el4, "&nbsp;AND HOLD FOR&nbsp;&nbsp;3");
        setInnerHTML(el5, "");
        setInnerHTML(el6, "&nbsp;SECONDS TO SEND");
        setInnerHTML(el7, "");

        toggleClass(el8, "tright");
        toggleClass(el8, "tleft");
        setInnerHTML(el8, "&nbsp;DISTRESS MSG!");
    }
}

function bup() {
    if(stage == 4) {
        if(distresstype == 0) {
            distresstype = 10;
        }
        else {
            distresstype--;
        }
        setInnerHTML(el3, distressstr[distresstype]);
    }
}

function bdown() {
    if(stage == 4) {
        if(distresstype == 10) {
            distresstype = 0;
        }
        else {
            distresstype++;
        }
        setInnerHTML(el3, distressstr[distresstype]);
    }
}

function afterdistressbtn() {
    stage = 11;
    toggleClass(speaker, "alerton");
    setInnerHTML(el1, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01/11/23");
        
    setInnerHTML(el3, "&nbsp;1W<span class='colrev'>DISTRESS</span>");
    setInnerHTML(el4, "ITU<span class='colrev'>&nbsp;&nbsp;04:00&nbsp;</span>");
    
    setInnerHTML(elchan, "16");
}

function bdistress() {
    if(stage == 10) {
        toggleClass(el1, "colrev");
        setInnerHTML(el1, "<span class='colrev'>TX</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01/11/23");
        
        toggleClass(el2, "tleft");
        toggleClass(el2, "thalf");
        setInnerHTML(el2, "UTC&nbsp;&nbsp;&nbsp;12:30");

        toggleClass(el3, "tleft");
        toggleClass(el3, "thalf");
        setInnerHTML(el3, "25W<span class='colrev'>SENDING&nbsp;</span>");

        toggleClass(el4, "tleft");
        toggleClass(el4, "thalf");
        setInnerHTML(el4, "ITU<span class='colrev'>&nbsp;&nbsp;DSC&nbsp;&nbsp;&nbsp;</span>");
        
        toggleClass(el5, "tleft");
        toggleClass(el5, "thalf");
        setInnerHTML(el5, "SIM");

        setInnerHTML(el6, "");

        toggleClass(el8, "colrev");
        setInnerHTML(el8, "&nbsp;&nbsp;ENTER POSITION!!!&nbsp;&nbsp;");

        toggleClass(elchan, "displayNone");
        setInnerHTML(elchan, "70");

        setTimeout(() => {
            afterdistressbtn();
        }, 2000);
    }
}

function bptt() {
    if(stage == 11) {
        stage = 12;
        toggleClass(speaker, "alerton");

        setInnerHTML(el3, "&nbsp;1W");
        setInnerHTML(el4, "ITU");

        document.getElementById("ptttextr").removeAttribute("readonly");
        document.getElementById("c1").setAttribute("style", "background-color: white");
        document.getElementById("c2").setAttribute("style", "background-color: limegreen");
    }
}

function bnextbtn() {
    if(stage == 12) {
        stage = 13;
        document.getElementById("c2").setAttribute("style", "background-color: white");
        document.getElementById("c3").setAttribute("style", "background-color: limegreen");
        document.getElementById("ptttextr").innerText = "";
    }
    else if(stage == 13) {
        stage = 14;
        document.getElementById("c3").setAttribute("style", "background-color: white");
        document.getElementById("c4").setAttribute("style", "background-color: limegreen");
        document.getElementById("ptttextr").innerText = "";
        setInnerHTML(eannounce, prob2[Math.floor(Math.random() * prob2.length)])
    }
    else if(stage == 14) {
        alert("시험이 종료되었습니다!");
    }
}