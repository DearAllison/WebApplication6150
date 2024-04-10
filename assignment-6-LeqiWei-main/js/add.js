// Add Button
function add() {
    // Open add page
    document.getElementById('addBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';
}

// Submit /button
function sumbit() {
    // Close add page
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';

    // Write in to the table
    // get table
    var iTable = document.getElementById('myTable');
    // get value
    var stuId = document.getElementById('stuId1').value;
    var name = document.getElementById('name1').value;
    var colg = document.getElementById('colg1').value;
    var profession = document.getElementById('profession1').value;
    var nums = iTable.rows.length;

    //validation check
    if (stuId == "") {
        alert("The Name is blank!!!");
        return false;
    }

    if (name == "") {
        alert("The Description is blank!!!");
        return false;
    }

    if (colg == "") {
        alert("The Appointment Date is blank!!!");
        return false;
    }

    var re = /^([0-3]{1}[0-9]{1}-)?[0-1]{1}[0-9]{1}-[0-9]{4}$/;
    if (re.test(colg) == false) {
        alert("The Appointment Date is not match DD-MM-YYYY")
        return false;
    }

    if (profession == "") {
        alert("The Time is blank!!!");
        return false;
    }

    var re1 = /^([0-2]{1}[0-9]{1}:)?[0-5]{1}[0-9]{1}$/;
    if (re1.test(profession) == false) {
        alert("The Time is not match HH:MM")
        return false;
    }

    // create tr
    var iTr = document.createElement('tr');

    // change color each row
    if (nums % 2 != 0) {
        iTr.className = 'mainTbodyTr1';
    } else {
        iTr.className = 'mainTbodyTr2';
    }

    // add tr into table
    iTable.appendChild(iTr);

    // create select button
    var sel = document.createElement('input');
    sel.setAttribute('type', 'checkbox');
    sel.setAttribute('name', 'item');

    // create each td，and add properties and content
    var iTd1 = document.createElement('td');
    iTd1.className = "col1";
    iTd1.appendChild(sel);
    var iTd2 = document.createElement('td');
    iTd2.className = "col2";
    iTd2.appendChild(document.createTextNode(nums));
    var iTd3 = document.createElement('td');
    iTd3.className = "col3";
    iTd3.appendChild(document.createTextNode(stuId));
    var iTd4 = document.createElement('td');
    iTd4.className = "col4";
    iTd4.appendChild(document.createTextNode(name));
    var iTd5 = document.createElement('td');
    iTd5.className = "col5";
    iTd5.appendChild(document.createTextNode(colg));
    var iTd6 = document.createElement('td');
    iTd6.className = "col6";
    iTd6.appendChild(document.createTextNode(profession));



    var iTd10 = document.createElement('td');
    iTd10.className = "col10";

    var examine = document.createElement('input');
    examine.id = 'examine';
    examine.setAttribute('type', 'button');
    examine.setAttribute('value', 'Details');
    examine.setAttribute('onclick', 'examine(this)');

    var update = document.createElement('input');
    update.id = 'update';
    update.setAttribute('type', 'button');
    update.setAttribute('value', 'Change');
    update.setAttribute('onclick', 'update(this)');


    var done = document.createElement('input');
    done.id = 'done1';
    //checkbox message
    done.setAttribute('type', 'checkbox');
    var textCom = document.createTextNode("Complete");
    // done.appendChild(textNode);
    
    // done.setAttribute('value', 'Complete');
    done.setAttribute('onclick', 'done(this)');
    iTd10.appendChild(examine);
    iTd10.appendChild(update);
    iTd10.appendChild(done);
    iTd10.appendChild(textCom);

    // var done = document.createElement('input');
    // done.id = 'done1';
    // done.setAttribute('type', 'button');
    // done.setAttribute('value', 'Done');
    // done.setAttribute('onclick', 'done(this)');
    // iTd10.appendChild(examine);
    // iTd10.appendChild(update);
    // iTd10.appendChild(done);


    // add cell to row
    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);
    iTr.appendChild(iTd10);

    // Initialize the value of the input box in the new frame 
    document.getElementById('stuId1').value = null;
    document.getElementById('name1').value = null;
    document.getElementById('colg1').value = null;
    document.getElementById('profession1').value = null;

    document.getElementById('nums').innerText = nums;

    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    for (var i = 10 * pageNum + 1; i <= nums; i++) {
        iTable.rows[i].style.display = 'none';
    }
}

// Cancel button
function addCancel() {
    // close add page
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}