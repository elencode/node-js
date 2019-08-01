class MenuItem {
   constructor(text,url) {
       this.text = text,
       this.url = url
   }

   render() {
       var a = document.createElement('a');
           a.innerText = this.text;
           a.href = this.url;
       var li = document.createElement('li');
           li.appendChild(a);  
       return li;

   }

   }