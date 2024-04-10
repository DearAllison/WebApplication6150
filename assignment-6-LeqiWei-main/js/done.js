// Check all
function checkAll(obj) {
    var status = obj.checked;
    var items = document.getElementsByName('item');
    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    for (var i = (pageNum - 1) * 10; i < pageNum * 10; i++) {
        items[i].checked = status;
    }
}

// Finish button
function done() {
    // open finish page
    document.getElementById('DoneBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    var items = document.getElementsByName('item');
    var message = [];
    for (var j = 0; j < items.length; j++) {
        if (items[j].checked) //if item be chosen
        {
            var m = items[j].parentNode.parentNode.cells[3].innerText;
            message.push(m);
        }
    }

    var delNode = document.getElementById('DoneMessage');
    delNode.innerText = message.join('\t');
}

// confirm button
function confirm1() {
    // close finish page
    document.getElementById('DoneBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';

    var items = document.getElementsByName('item');
    var items_num = 0;
    for (var j = 0; j < items.length; j++) {
        if (items[j].checked) //if item be chosen
        {
            //same with add basic
            var iTable = document.getElementById('myTable1');
            // get input

            var stuId = items[j].parentNode.parentNode.cells[2].innerText;
            var name = items[j].parentNode.parentNode.cells[3].innerText;
            var colg = items[j].parentNode.parentNode.cells[4].innerText;
            var profession = items[j].parentNode.parentNode.cells[5].innerText;
            var nums = iTable.rows.length;

            var iTr = document.createElement('tr');

            if (nums % 2 != 0) {
                iTr.className = 'mainTbodyTr1';
            } else {
                iTr.className = 'mainTbodyTr2';
            }

            iTable.appendChild(iTr);

            var sel = document.createElement('input');
            sel.setAttribute('type', 'checkbox');
            sel.setAttribute('name', 'item');

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
            iTd10.appendChild(examine);
            iTd10.appendChild(update);


            iTr.appendChild(iTd1);
            iTr.appendChild(iTd2);
            iTr.appendChild(iTd3);
            iTr.appendChild(iTd4);
            iTr.appendChild(iTd5);
            iTr.appendChild(iTd6);
            iTr.appendChild(iTd10);


            var pageNum = document.getElementById('pageNum').innerText;
            pageNum = parseInt(pageNum);
            for (var i = 10 * pageNum + 1; i <= nums; i++) {
                iTable.rows[i].style.display = 'none';
            }

            items_num += 1;
            items[j].parentNode.parentNode.remove();
            j--;
        }
    }


    var iTable = document.getElementById('myTable');
    var iTrs = iTable.getElementsByTagName('tr');
    for (var i = 1; i < iTrs.length; i++) {
        if (i % 2 != 0)
            iTrs[i].className = 'mainTbodyTr1';
        else
            iTrs[i].className = 'mainTbodyTr2';
        var sort = iTrs[i].getElementsByTagName('td')[1];
        sort.innerText = i;
    }

    var nums = iTrs.length - 1;
    document.getElementById('nums').innerText = nums;
    nums = parseInt(nums);
    var pageSum = Math.ceil(nums / 10);
    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);

    if (pageNum <= pageSum) {
        for (var i = (pageNum - 1) * 10 + 1; i < pageNum * 10 + 1; i++) {
            iTable.rows[i].style.display = 'table-row';
        }
        for (var i = 1; i < (pageNum - 1) * 10 + 1; i++) {
            iTable.rows[i].style.display = 'none';
        }
        for (var i = pageNum * 10 + 1; i < nums + 1; i++) {
            iTable.rows[i].style.display = 'none';
        }
    }
    if (pageNum > pageSum) {
        for (var i = (pageNum - 2) * 10 + 1; i < nums + 1; i++) {
            iTable.rows[i].style.display = 'table-row';
        }
        for (var i = 1; i < (pageNum - 2) * 10 + 1; i++) {
            iTable.rows[i].style.display = 'none';
        }
        document.getElementById('pageNum').innerText = pageNum - 1;
    }



}

//Cancel button
function doneCancel() {
    // close finish page
    document.getElementById('DoneBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}