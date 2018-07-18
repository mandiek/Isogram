(function(ones, tens, sep) {

    var input = document.getElementById('input'),
        output = document.getElementById('output');

    input.onkeyup = function() {
        var val = this.value,
            arr = [],
            str = '',
            i = 0;

        if (val.length === 0) {
            output.textContent = 'Please type a number into the text-box.';
            return;
        }

        val = parseInt(val, 10);
        if (isNaN(val)) {
            output.textContent = 'Invalid input.';
            return;
        }

        while (val) {
            arr.push(val % 1000);
            val = parseInt(val / 1000, 10);
        }

        while (arr.length) {
            str = (function(a) {
                var x = Math.floor(a / 100),
                    y = Math.floor(a / 10) % 10,
                    z = a % 10;

                return (x > 0 ? ones[x] + ' hundred ' : '') +
                    (y >= 2 ? tens[y] + ' ' + ones[z] : ones[10 * y + z]);
            })(arr.shift()) + sep[i++] + str;
        }

        output.textContent = str;
    };

})(NUMBER2TEXT.ones, NUMBER2TEXT.tens, NUMBER2TEXT.sep);