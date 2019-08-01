class TextInput {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }

    render() {
        var p = document.createElement('p');
        var input = document.createElement('input');
            input.type = this.type;
            input.placeholder = this.text;
        
        p.appendChild(input);
        return p;
    }
}
