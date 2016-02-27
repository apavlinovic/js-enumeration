(function (window) {
    "use strict";

    function Enumeration(values) {
        for (var id in values) {
            if (values.hasOwnProperty(id)) {
                this.setValue(id, values[id]);
                this.setValue(convertToPascalCase(values[id].label || values[id]), parseInt(id));
            }
        }
        
        this.asList = this.toArray();
    }

    Enumeration.prototype.setValue = function (id, value) {
        if (!this[id]) {
            this[id] = value;
        } else {
            throw new Error("Enumeration overwrite attempt ocured for id [" + id + "] and value [" + value + "]!");
        }
    };

    Enumeration.prototype.toArray = function () {
        var result = [];
        for (var id in this) {
            if (this.hasOwnProperty(id) && !isNaN(parseInt(id))) {
                var obj = { id: parseInt(id) };
                
                if(typeof this[id] === 'string') {
                    obj['label'] = this[id];
                } else {
                    for (var key in this[id]) {
                        if (this[id].hasOwnProperty(key)) {
                            obj[key] = this[id][key];
                        }
                    }
                }
                
                result.push(obj);
            }
        }

        return result;
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function convertToPascalCase(label) {
        return label
            .trim()
            .split(/\s+/g)
            .map(capitalizeFirstLetter)
            .join('');
    }

    window.Enumeration = Enumeration;
}(window));