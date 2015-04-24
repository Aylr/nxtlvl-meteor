if(Cards.find().count() == 0){
	Cards.insert({
		title: 'CNC',
		level: 3,
		items: [{title: 'clean shop', star: false},{title: 'cut sign', star: true}]
	});

	Cards.insert({
		title: 'shop',
		level: 2,
		items: [{title: 'clean bins', star: false}]
	});
	Cards.insert({
		title: 'HAM',
		level: 2,
		items: [{title: 'clean desk', star: false},{title: 'get on net', star: true}]
	});
}

// if(Items.find().count() == 0){
// 	Items.insert({
// 		title: 'clean out shop',
// 		star: false
// 	});
// 	Items.insert({
// 		title: 'cut blitsy',
// 		star: true
// 	});
// 	Items.insert({
// 		title: 'prep blitsy files',
// 		star: true
// 	})
// }