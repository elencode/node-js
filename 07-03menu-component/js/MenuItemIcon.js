class MenuItemIcon extends MenuItem {
   constructor(text,url,icon) {
       super(text,url);
       this.icon = icon;
   }

   render() {

        var li = super.render();

        var span = document.createElement('span');  
            span.innerHTML = this.icon;  
            li.firstElementChild.appendChild(span);
       return li;

   }

   }