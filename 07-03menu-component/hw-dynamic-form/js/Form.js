class Form {
    constructor(title) {
        this.title = title;
        this.fields = []; //toate campurile din formular
    }

    addField(field) { //obiecte care corespund diferitor campuri
       this.fields.push(field); 
    }
    
    render() {
        var form = document.getElementById('form');
            form.className = 'container';
        var h1 = document.createElement('h1');
            h1.innerText = this.title;

        form.appendChild(h1);

        this.fields.forEach( field => form.appendChild(field.render() ) );

        return form;
    }
}