const SERVER_URL = `http://api.animaltrackr.com`;

const METHOD = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

// Log outgoing requests
const logRequest = (method, url, body = undefined) => {
	let message = `${method} Request made to ${url}`;
	if (body) message += `\nWith body: ${JSON.stringify(body)}`;

	console.info(message);
};

// Log incoming responses
const logResponse = (method, url, body = undefined) => {
	let message = `${method} Response from ${url}`;
	if (body) message += `\nWith body: ${JSON.stringify(body)}`;

	console.info(message);
};

// Compose fetch with logging & JSON parsing
const myFetch = (url, options = {}) => {
	const method = options.method || METHOD.GET;
	logRequest(method, url, options);

	return fetch(url, {
		headers: {
			// 'Content-Type': 'application/json',
			...(options.headers || {}),
		},
		...options,
	})
		.then(response => response.json())
		.then(resBody => {
			logResponse(method, url, resBody);
			return resBody;
		});
};

export const createTracker = data => {
	const url = `${SERVER_URL}/animal/trackers`;
	return myFetch(url, {
		method: METHOD.POST,
		body: JSON.stringify(data),
	});
};

export const readTrackers = () => {
	const url = `${SERVER_URL}/animal/trackers`;
	return myFetch(url);
};

export const readTracker = trackerId => {
	const url = `${SERVER_URL}/animal/trackers/${trackerId}`;
	return myFetch(url);
};

export const updateTracker = (trackerId, data) => {
	const url = `${SERVER_URL}/animal/trackers/${trackerId}`;
	return myFetch(url, {
		method: METHOD.PUT,
		body: JSON.stringify(data),
	});
};

export const deleteTracker = trackerId => {
	const url = `${SERVER_URL}/animal/trackers/${trackerId}`;
	return myFetch(url, {
		method: METHOD.DELETE,
	});
};

export const createPoint = data => {
	const url = `${SERVER_URL}/animal/points`;
	return myFetch(url, {
		method: METHOD.POST,
		body: JSON.stringify(data),
	});
};

export const readPoints = () => {
	const url = `${SERVER_URL}/animal/points`;
	return myFetch(url);
};

export const readPoint = pointId => {
	const url = `${SERVER_URL}/animal/points/${pointId}`;
	return myFetch(url);
};

export const updatePoint = (pointId, data) => {
	const url = `${SERVER_URL}/animal/points/${pointId}`;
	return myFetch(url, {
		method: METHOD.PUT,
		body: JSON.stringify(data),
	});
};

export const deletePoint = pointId => {
	const url = `${SERVER_URL}/animal/points/${pointId}`;
	return myFetch(url, {
		method: METHOD.DELETE,
	});
};
