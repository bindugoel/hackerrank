var a = [3, 5, 7, 9, 11, 13];
var b =  [3, 5, 7, 11, 13];
var length = a.length;

checkElement(0, length);
function checkElement(start, len) {
    var mid = 0;
    if(len % 2 == 0) { //even
        mid = length /2;
    } else {
        mid = (length + 1)/2;
    }
    if(a[mid] == b[mid]) {
        checkElement(mid+1,len);
    } else {
        document.write(a[mid]);
    }
}
