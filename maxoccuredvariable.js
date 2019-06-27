var a = 'how do you do?';
a = a.replace('?','');
var b = a.split(' ');
var arrlen = b.length;
var countarr = {};
var max_count_element = '';
var max_count_value =0;
for(let i=0;i<arrlen;i++) {
    if(b[i] in countarr) {
        countarr[b[i]] = ++countarr[b[i]];
        if(countarr[b[i]] > max_count_value) {
            max_count_element = b[i];
            max_count_value = countarr[b[i]];
        }
    } else {
        countarr[b[i]] = 1;
        if(countarr[b[i]] > max_count_value) {
            max_count_element = b[i];
            max_count_value = countarr[b[i]];
        }
    }
}
document.write(max_count_element);
document.write(max_count_value);
