class RadioInput {
    constructor(values) {
        this.values = values;
    }
    
    render() {
        var div = document.createElement('div');
        var p = document.createElement('p');
            p.innerText = "Select your gender";

       // var select = document.createElement('select');
        for (var i in this.values) {
            var input = document.createElement('input');
            input.innerText = this.input[i];
          //  select.appendChild(input);
        }      
        
        div.appendChild(p);
        div.appendChild(input);
        return div;
    }
}