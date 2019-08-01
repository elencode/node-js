class CheckboxInput {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }

    render() {
        var p = document.createElement('p');
        var input = document.createElement('input');
            input.type = this.type;
        var label = document.createElement('label');
            label.innerText = this.text;
        
        label.appendChild(input);
        p.appendChild(label);
   
        return p;
    }
}