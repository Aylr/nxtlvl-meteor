if(Cards.find().count() == 0){
	Cards.insert({
		title: 'CNC',
		level: 3,
		items: [{title: 'clean shop', star: false},{title: 'cut sign', star: true}],
		archived: false
	});

	Cards.insert({
		title: 'shop',
		level: 2,
		items: [{title: 'clean bins', star: false}],
		archived: false
	});
	Cards.insert({
		title: 'HAM',
		level: 2,
		items: [{title: 'clean desk', star: false},{title: 'get on net', star: true}],
		archived: false
	});
	Cards.insert({
		title: 'HAM',
		level: 2,
		items: [{title: 'clean desk', star: false},{title: 'get on net', star: true}],
		archived: true
	});
}