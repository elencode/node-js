//cautam containerul header
var header = document.querySelector('header');

//cream obiectul unui meniu
var main_menu = new Menu ('Main Navigation');
    main_menu.addItem(new MenuItemIcon("Icon", "https://blah.com","&infin;"));
    main_menu.addItem(new MenuItem("ok", "https://ok.ru"));
    main_menu.addItem(new MenuItem("vk", "https://vk.com"));
    main_menu.addItem(new MenuItem("google", "https://google.com"));

//var item = new MenuItem("ok","https://ok.ru");

//adaugam meniul in header
header.appendChild(main_menu.render());
//header.appendChild(item.render());