Meteor.subscribe('cards');

Template.cardPage.events({
	'click button#deleteCard': function(){
		Cards.remove(this._id,function(){
			console.log("card deleted");
			Router.go("/");
		});
	},
	'click button#archiveCard': function(){
		Cards.update(this._id, {$set: {archived: true}}, function(){
			console.log("card archived");
			Router.go("/");
		});
	}
});

Template.cardDisplay.events({
	'click button.addItem': function(){
		var newItem = {_id: new Meteor.Collection.ObjectID(), title: "new item", star: false};
		this.items.push(newItem);							// add new item to array
		var tempItems = {items: this.items};				// save temporary array

		Cards.update(this._id, {$set: tempItems});			// mongo set new array

		update_editable();

		console.log({ID: this._id, items: tempItems});
	},
	'click button#archive_card': function(){
		Cards.update(this._id, {$set: {archived: true}});
	},
	'click button#unarchive_card': function(){
		Cards.update(this._id, {$set: {archived: false}});
	},
	'click li.item span.item_star': function(event, template){
		var temp_star = this.star;
		var temp_parent_id = template.data._id;
		var temp_item_id = this._id._str;

		temp_star = !temp_star			// toggle false <--> true


		// console.log("this.star");
		// console.log(this.star);
		// console.log("this");
		// console.log(this);
		// console.log("this._id._str");
		// console.log(this._id._str);
		// console.log("this.title");
		// console.log(this.title);
		// console.log("template.data._id");
		// console.log(template.data._id);

		var item_to_update = {parent_id: temp_parent_id, item_id: temp_item_id, star: temp_star};

		console.log("calling update_star method.");
		Meteor.call("update_star", item_to_update);
	}
});

Template.newCardTemplate.events({
	'submit form': function(event){
		event.preventDefault();

		Cards.insert({
			title: event.target.card_name.value,
			level: event.target.level.value,
			items: [],
			archived: false,
			time_created: new Date(),
			user_id: Meteor.user_id
		});

		Router.go('/');
	}
});