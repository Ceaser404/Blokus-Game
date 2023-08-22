const I = [
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	],
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const F = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];

const H = [
	[
		[0, 0, 1, 0, 0],		
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
	],
	[
		[0, 0, 0, 0, 0],		
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	]
];

const C = [
	[
		[1, 1, 0],
		[1, 0, 0],
		[1, 1, 0]
	],
	[
		[1, 1, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 0, 1],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 0, 1],
		[1, 1, 1]
	]
];

const Y = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 1]
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[1, 1, 0]
	],
	[
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[1, 1, 1]
	]
];

const B = [
	[
		[1, 0, 0],
		[1, 1, 0],
		[1, 1, 0]
	],
	[
		[1, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 1]
	]
];

const X = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0]
	]
];

const M = [
	[
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0]
	],
	[
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1]
	]
];

const G = [
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	]
];

const W = [
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 1],
		[1, 1, 0],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[1, 1, 0]
	]
];

const V = [
	[
		[1, 0, 0],
		[1, 0, 0],
		[1, 1, 1]
	],
	[
		[1, 1, 1],
		[1, 0, 0],
		[1, 0, 0]
	],
	[
		[1, 1, 1],
		[0, 0, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 1],
		[0, 0, 1],
		[1, 1, 1]
	]
];

const T = [
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1]
	],
	[
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	]
];

const P = [
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 1],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 1],
		[1, 1, 1],
		[1, 0, 0]
	]
];

const U = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 1],
		[1, 0, 0]
	]
];

const K = [
	[
		[1, 0],
		[1, 0],
	],
	[
		[1, 1],
		[0, 0],
	],
	[
		[0, 1],
		[0, 1],
	],
	[
		[0, 0],
		[1, 1],
	]
];

const D = [
	[
		[1]
	]
];

const A = [
	[
		[1, 1],
		[1, 0],
	],
	[
		[1, 1],
		[0, 1],
	],
	[
		[0, 1],
		[1, 1],
	],
	[
		[1, 0],
		[1, 1],
	]
];

const R = [
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	]
];

const E = [
	[
		[0, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	],
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	]
];

const Q = [
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
		[1, 0, 0, 0],
	],
	[
		[1, 1, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	],
	[
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 0],
	]
];





























	