class TextArea {
    constructor(text) {
        this.text = text;
    }
    
    render() {
        var p = document.createElement('p');
        var textarea = document.createElement('textarea');
            textarea.placeholder = this.text;
        
        p.appendChild(textarea);
        return p;
    }
}