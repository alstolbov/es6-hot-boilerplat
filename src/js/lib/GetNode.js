export default function(selector) {
    var FUNCT = {
        _getElement: function(selector) {
            var key = selector[0];
            this.OBJ = false;
            switch(key) {
                case '#': this.OBJ = document.getElementById(selector.slice(1)); break;
                case '.': this.OBJ = document.querySelector(selector); break;
                case '@': this.OBJ = document.getElementsByName(selector.slice(1)); break;
                case '=': this.OBJ = document.getElementsByTagName(selector.slice(1)); break;
                case '?': this.OBJ = document.querySelectorAll(selector); break;
            }
            return FUNCT;
        },
        click: function(done) {
            this.OBJ.addEventListener('click', function(e) {
                e.preventDefault();
                done(e);
            }, false);
            return FUNCT;
        },
        keydown: function(done) {
            this.OBJ.addEventListener("keydown", function(e) {
                done(e);
            }, false);
        },
        setClass: function(newClass) {
            this.OBJ.className = newClass;
            return FUNCT;
        },
        value: function(newVal) {
            this.OBJ.value = newVal;
            return FUNCT;
        },
        hide: function() {
            this.OBJ.style.display = 'none';
            return FUNCT;
        },
        show: function() {
            this.OBJ.style.display = 'block';
            return FUNCT;
        },
        html: function(html) {
            this.OBJ.innerHTML = html;
            return FUNCT;
        },
    };

    return FUNCT._getElement(selector);
};