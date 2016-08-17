# jQueryPageTransitionAnimation
Page transition animation using jQuery

This is a simple transition animation using jQuery <code>.animate()</code> function.
To change the animation, simply change the lines:<br/>
<code>
$("#page" + lastPage).animate({
	top: "-100%"
}, 400, finishedExit);
</code>

AND/OR

<code>
$("#page" + currentPage).animate({
	top: "0"
}, 400, finishedEntry);
</code>

as you require.
