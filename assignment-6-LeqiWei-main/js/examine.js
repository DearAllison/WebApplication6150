// Check button
function examine(obj) {
    // open Check page
    document.getElementById('examineBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    // get select row
    var iTr = obj.parentNode.parentNode;

    // get everything in this tow
    var iTds = iTr.getElementsByTagName('td');

    // Set the content of the input box in the new frame to the content corresponding to the current line 
    document.getElementById('stuId3').value = iTds[2].innerText;
    document.getElementById('name3').value = iTds[3].innerText;
    document.getElementById('colg3').value = iTds[4].innerText;
    document.getElementById('profession3').value = iTds[5].innerText;
    document.getElementById('grade3').value = iTds[6].innerText;
    document.getElementById('stuClass3').value = iTds[7].innerText;
    document.getElementById('age3').value = iTds[8].innerText;
}

// Cancel button
function examineCancel() {
    // close check page
    document.getElementById('examineBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}