if(Cards.find().count() == 0){
	Cards.insert({
		title: 'CNC',
		level: 3,
		items: [
			{_id: new Meteor.Collection.ObjectID(), title: 'clean shop', star: false},
			{_id: new Meteor.Collection.ObjectID(), title: 'cut sign', star: true}
		],
		archived: false
	});

	Cards.insert({
		title: 'shop',
		level: 2,
		items: [
			{_id: new Meteor.Collection.ObjectID(), title: 'clean bins', star: false}

		],
		archived: true
	});
	Cards.insert({
		title: 'HAM',
		level: 2,
		items: [
			{_id: new Meteor.Collection.ObjectID(), title: 'clean desk', star: false},
			{_id: new Meteor.Collection.ObjectID(), title: 'get on net', star: true}
		],
		archived: true
	});
	Cards.insert({
		title: 'Meteor',
		level: 2,
		items: [
			{_id: new Meteor.Collection.ObjectID(), title: 'Subdocument updating', star: false},
			{_id: new Meteor.Collection.ObjectID(), title: 'find out about using _id in subdocs', star: false}
		],
		archived: false
	});
}