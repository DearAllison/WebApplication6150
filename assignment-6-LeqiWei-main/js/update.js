// Update button
function update(obj) {
    // open update page
    document.getElementById('updateBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    // get select row
    var iTr = obj.parentNode.parentNode;

    // get every thing in this row
    iTds = iTr.getElementsByTagName('td');

    // set the content of the input box in the new frame to the content corresponding to the current line 
    document.getElementById('stuId2').value = iTds[2].innerText;
    document.getElementById('name2').value = iTds[3].innerText;
    document.getElementById('colg2').value = iTds[4].innerText;
    document.getElementById('profession2').value = iTds[5].innerText;
}

// Save button
function preservation() {
    // write the new things in
    iTds[2].innerText = document.getElementById('stuId2').value;
    iTds[3].innerText = document.getElementById('name2').value;
    iTds[4].innerText = document.getElementById('colg2').value;
    iTds[5].innerText = document.getElementById('profession2').value;
    // close update button
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

// Cancel button
function updateCancel() {
    // close update button
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}