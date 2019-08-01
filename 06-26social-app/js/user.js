// acest fisier reprezinta un modul
// care contine o clasa

class User{
    constructor(fullname,avatar,gender,dob,country) {
        this.fullname = fullname || (faker.name.firstName()+ ' ' + faker.name.lastName() ),
        this.avatar = avatar || faker.image.avatar(),
        this.gender = gender || faker.helpers.randomize(['m', 'f']),
        this.dob = dob || faker.date.between('1900-01-01', '2000-01-01'),
        this.country = country || faker.address.country(),

        this.friends = []
    }

    render(){
        var div = document.createElement('div');
            div.className = 'user';
        var h3 = document.createElement('h3');
            h3.innerText = this.fullname;
        var small = document.createElement('small');
            small.innerText = this.country;
        var img = document.createElement('img');
            img.src = this.avatar;
        
            h3.appendChild(small);
            div.appendChild(h3);
            div.appendChild(img);
           
        if (this.friends.length > 0) {
            var p = document.createElement('p');
            p.innerText = `friends ${this.friends.length}`;
            div.appendChild(p);
        }
            return div;
    }

    hasFriend(user){
var found = this.friends.find(u => (u.fullname == user.fullname) || (u.dob == user.dob) || (u.gender == user.gender) );
        //+dob//+gen
        if (found != undefined) 
            return true;
        else
            return false;
    }

    addFriend(user){
        if (!this.hasFriend(user)) 
            this.friends.push(user);
    }

    removeFriend(){
        //sterge din array acel obiect
    }
}