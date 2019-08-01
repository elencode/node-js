class Button {
    constructor(text, className) {
        this.text = text;
        this.className = className;
    }
    
    render() {
        var button = document.createElement('button');
            button.innerText = this.text;
            button.className = this.className;
        
   
        return button;
    }
}