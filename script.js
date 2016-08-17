var Script = function() {
	return {
		init: function() {
			initVariables();
			initButton();
			console.log("Initialized.");
		}
	};

	var currentPage, lastPage, lockControl;

	function initVariables() {
		currentPage = 1;
		lastPage = 1;
		lockControl = false;
	}

	function initButton() {
		$("#nav-bar a").on("click", function(event) {
			turnToPage(event.currentTarget.dataset.navLink);
		});
	}

	function turnToPage(pageNum) {
		if(pageNum != lastPage && !lockControl) {
			currentPage = pageNum;
			lockControl = true;
			console.log("Turning to page " + currentPage);

			//Exit animation
			$("#page" + lastPage).animate({
				top: "-100%"
			}, 400, finishedExit);

			//Entry animation
			$("#page" + currentPage).animate({
				top: "0"
			}, 400, finishedEntry);
		}
	}

	function finishedEntry() {
		// console.log("finishedEntry");
	}

	function finishedExit() {
		// console.log("finishedExit");
		//Reset the position of the <div> element to the starting position.
		document.getElementById("page" + lastPage).style.top = "100%";
		lastPage = currentPage;
		lockControl = false;
	}
}();
