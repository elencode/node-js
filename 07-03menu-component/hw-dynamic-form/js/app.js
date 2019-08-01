var register_form = new Form("Create account");

register_form.addField( new TextInput('text','Your name') );
register_form.addField( new TextInput('email','Your email') );
register_form.addField( new TextInput('password','Your password') );

register_form.addField( new TextArea('Leave a message here') );

register_form.addField( new CheckboxInput('checkbox','I agree with Terms and Conditions  ') );

register_form.addField( new SelectOption(["Moldova","Anglia","Italia","Danemarca","Spania"]) );

register_form.addField(new Button('Submit','btn btn-primary'));
register_form.addField(new Button('Cancel','btn btn-secondary ml-3'));


register_form.render();

// Questions:
// 1. cum facem radio buttons?
// 2. cum facem select option?
// 3. return din render inca o data
// 4. cum optimizam cu extends de ex. TextInput vs CheckboxInput