export const findRelationship = (values, people, subjects) => {
	// selected person is a expert, return instantly
	if (people[values.person].subjects && people[values.person].subjects[values.subject]) {
		return 'This person is an expert at ' + subjects[values.subject].name;
	}

	// prepare people data and set up variables for bfs
	let graph = _.cloneDeep(people);
	let queue = [], result = [], curr, prev = {}, direction = [];
	graph[values.person].visited = true;

	queue.push(values.person);

	// using the friend link on unique keys between friends, find the direction to selected subject
	do {
		curr = queue.splice(0, 1);

		if (graph[curr].subjects && graph[curr].subjects[values.subject]) {
			break;
		} else {
			if (graph[curr].friends) {
				for (let friend in graph[curr].friends) {
					if (!graph[friend].visited) {
						graph[friend].visited = true;
						prev[friend] = curr;
						queue.push(friend);
					}
				}
			}
		}
	} while (queue.length)

	// no subjects found, there must not be a relationship from person -> subject
	if (!people[curr].subjects || !people[curr].subjects[values.subject]) {
		return 'There is no relationship between ' + people[values.person].name + ' and ' + subjects[values.subject].name;
	}

	// retrieve shortest path from person -> subject
	do {
		direction.push(people[curr].name);
		curr = prev[curr];
	} while (curr[0] !== values.person)

	// return formatted response
	return handleMessage(direction.reverse(), people[values.person].name, subjects[values.subject].name);
}

const handleMessage = (arr, person, subject) => {
	return _.reduce(arr, function(message, friend, i) {
		if (i < arr.length -1) {
			message += friend + ', who can introduce ' + person + ' to '
		} else {
			message += friend + ', who is an expert in ' + subject + '.'
		}
		return message;
	}, person + ' needs to talk to his friend ')
}
