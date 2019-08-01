class Menu {
    constructor (name) {
        this.name = name,
        this.items = []
    }
     addItem(item) {
         this.items.push(item);
     }

    render(){
        var html = document.createElement('nav');
        var h2 = document.createElement('h2');
            h2.innerText = this.name;
        var ul = document.createElement('ul');
        
        this.items.forEach(item => ul.appendChild(item.render()));
        //ul.appendChild(this.items[0].render());

        html.appendChild(h2);
        html.appendChild(ul);

        return html;

    }
}