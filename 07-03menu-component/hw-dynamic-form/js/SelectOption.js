class SelectOption {
    constructor(options) {
        this.options = options;
    }
    
    render() {
        var div = document.createElement('div');
        var p = document.createElement('p');
            p.innerText = "Select your country";

        var select = document.createElement('select');
        for (var i in this.options) {
            var option = document.createElement('option');
            option.innerText = this.options[i];
            select.appendChild(option);
        }      
        
        div.appendChild(p);
        div.appendChild(select);
        return div;
    }
}