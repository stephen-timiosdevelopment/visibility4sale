/***********************************************
* Ultimate Fade In Slideshow v2.0- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/

var mygallery=new fadeSlideShow({
	wrapperid: "fadeshow1", //ID of blank DIV on page to house Slideshow
	dimensions: [549, 290], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["images/rotator/rotator001.jpg","","","The view north from the property"],
		["images/rotator/rotator002.jpg","","","The view south from the property"],
		["images/rotator/rotator003.jpg","","","The evening view from the property"],
		["images/rotator/rotator004.jpg","","","The view north from the property"],
		["images/rotator/rotator005.jpg","","","The view east and the exit sign"],
		["images/rotator/rotator006.jpg","","","The view east and near by businesses"],
		["images/rotator/rotator007.jpg","","","View looking directly at the property"] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:3000, cycles:0, wraparound:false},
	persist: false, //remember last viewed slide and recall within same session?
	fadeduration: 500, //transition duration (milliseconds)
	descreveal: "peekaboo",
	togglerid: ""
})


/* var mygallery2=new fadeSlideShow({
	wrapperid: "fadeshow2", //ID of blank DIV on page to house Slideshow
	dimensions: [250, 180], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["http://i26.tinypic.com/11l7ls0.jpg", "", "", "Nothing beats relaxing next to the pool when the weather is hot."],
		["http://i29.tinypic.com/xp3hns.jpg", "http://en.wikipedia.org/wiki/Cave", "_new", "Some day I'd like to explore these caves!"],
		["http://i30.tinypic.com/531q3n.jpg"],
		["http://i31.tinypic.com/119w28m.jpg", "", "", "What a beautiful scene with everything changing colors."] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'manual', pause:2500, cycles:0, wraparound:false},
	persist: false, //remember last viewed slide and recall within same session?
	fadeduration: 500, //transition duration (milliseconds)
	descreveal: "always",
	togglerid: "fadeshow2toggler"
})*/
