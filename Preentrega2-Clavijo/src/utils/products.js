const products = [
	{
		id: 1,
		name: "El Castigador - Máquina de guerra",
		price: 350,
		description:
			"“Frank Castle: Máquina de Guerra”. En su guerra, El Castigador siempre ha estado limitado por el hecho de ser un único hombre. Pero ahora Frank tiene a su disposición las herramientas para hacer que su misión tenga carácter global. ¿Cómo va a negarse?",
		image: "https://m.media-amazon.com/images/I/81+GUKtcXmL.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 2,
		name: "Spiderman vs Morbius",
		price: 350,
		description:
			"Ante el salto a la gran pantalla de Morbius, te ofrecemos un volumen que recoge algunas de sus aventuras más destacadas, como antagonista de Spiderman. Desde su debut, en la legendaria saga de los brazos extra, hasta sus más recientes historias, pasando por la particular visión que de Michael Morbius diera Todd McFarlane.",
		image:
			"https://cdn11.bigcommerce.com/s-si4e0s8t1l/images/stencil/1280x1280/products/237919/238109/D_613791-MLA47017353990_082021-O__27845.1629857358.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 3,
		name: "Thor - El carnicero de dioses",
		price: 350,
		description:
			"A lo largo de los siglos, los dioses han estado desapareciendo, lo que condena al caos a sus adoradores. Ahora, Thor sigue el rastro de sangre que amenaza con consumir su pasado, presente y futuro.",
		image:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524559481l/39931985._SY475_.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 4,
		name: "Caballero Luna - Cuenta atrás hacia la oscuridad",
		price: 350,
		description:
			"Mercenario, cazador de hombres lobo, millonario, taxista… ¿fantasma? Descubre al Caballero Luna desde su debut y hasta meterse de lleno en la más recordada de las épocas que viviera jamás, en que se convirtió en una referencia indiscutible del cómic estadounidense.",
		image: "https://www.zonanegativa.com/imagenes/2016/02/MHCaballeroLuna1.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 5,
		name: "Ms. Marvel - Fuera de lo normal",
		price: 350,
		description:
			"¡La edición completa de la obra maestra de Busiek y Ross! Un emocionante recorrido por los momentos que sirvieron para forjar el Universo Marvel bajo la visión única del fotógrafo Phil Sheldon. Desde los orígenes de los superhéroes a la trágica muerte de Gwen Stacy, de la llegada de Galactus a la Guerra Kree-Skrull, de la irrupción de los mutantes a la boda de Reed Richards y Sue Storm… ¡Los Prodigios están aquí!",
		image:
			"https://www.zonanegativa.com/imagenes/2015/07/Ms_Marvel_01_Portada.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 6,
		name: "Daredevil - El hombre sin miedo",
		price: 350,
		description:
			"¡El Hombre Sin Miedo consigue su primer Omnigold! Descubre las aventuras de Daredevil desde el principio, en un cuidado volumen que recoge los dos primeros años de su existencia, con la presentación de algunos de sus peores villanos.",
		image:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1301974399l/10962629.jpg",
		category: {
			name: "Comics",
			id: 1,
		},
	},
	{
		id: 7,
		name: "Funko Pop! - WandaVision - Wanda Maximoff",
		price: 790,
		description: "Figura de Wanda referida a la serie WandaVision",
		image: "https://m.media-amazon.com/images/I/41jMj8D0ziS._AC_.jpg",
		category: {
			name: "Funko Pop!",
			id: 2,
		},
	},
	{
		id: 8,
		name: "Funko Pop! - Loki - Loki presidente",
		price: 790,
		description: 'Figura de Loki referida a la serie homónima "Loki"',
		image:
			"https://http2.mlstatic.com/D_NQ_NP_729682-MLU49566681665_042022-O.jpg",
		category: {
			name: "Funko Pop!",
			id: 2,
		},
	},
	{
		id: 9,
		name: "Funko Pop! - Dr. Strange In the Multiverse of Madness - Spiderman",
		price: 790,
		description: "Figura de Spiderman referida a la secuela de Dr. Strange",
		image: "https://pimpampun.com/wp-content/uploads/2021/09/889698568296.jpg",
		category: {
			name: "Funko Pop!",
			id: 2,
		},
	},
	{
		id: 10,
		name: "Funko Pop! - Thor: Love and Thunder - Thor",
		price: 790,
		description: "Figura de Thor en su tercer película dentro del MCU",
		image: "https://m.media-amazon.com/images/I/51Rk9AzLzmL._AC_SL1000_.jpg",
		category: {
			name: "Funko Pop!",
			id: 2,
		},
	},
	{
		id: 11,
		name: "Estatuilla Diamond - Marvel: Endgame - Thanos",
		price: 2500,
		description: "Figura de 40 cm de altura.",
		image: "https://www.sddistribuciones.com/Portadas/DIAMV192373.JPG",
		category: {
			name: "Estatuillas",
			id: 3,
		},
	},
	{
		id: 12,
		name: "Estatuilla Diamond - Marvel: Endgame - Capitán America con Mjolnir",
		price: 2500,
		description: "Figura de 23 cm de altura",
		image:
			"https://www.lacasadelfriki.es/30698-thickbox_default/estatua-capitan-america-pvc-diorama-avengers-endgame-marvel-diamond-gallery.jpg",
		category: {
			name: "Estatuillas",
			id: 3,
		},
	},
	{
		id: 13,
		name: "Estatuilla Diamond - Clásicos - Daredevil",
		price: 1800,
		description: "Figura de 28 cm de altura",
		image: "https://www.sddistribuciones.com/Portadas/DIAMV182583.JPG",
		category: {
			name: "Estatuillas",
			id: 3,
		},
	},
	{
		id: 14,
		name: "Estatuilla Diamond - Clásicos - Ironman",
		price: 1800,
		description: "Figura de 28 cm de altura",
		image:
			"https://http2.mlstatic.com/D_NQ_NP_794163-MLU43639683678_102020-O.jpg",
		category: {
			name: "Estatuillas",
			id: 3,
		},
	},
];

module.exports = {
	products,
};
