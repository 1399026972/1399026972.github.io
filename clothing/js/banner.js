/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-16 14:17:26
 * @version $Id$
 */

	CHIppt(".banner","ul li",{
		prev:".prev",
        next:".next"
	},{
		delay: 5e3
	},{
		show:function(){
			$(this).addClass('cur');
		},
		hide:function(){
			$(this).removeClass('cur');
		}
	});
	CHIppt(".tan","ol li",{
	indices:".tan ul li",
	    prev:".left",
        next:".right"
},{
	delay:1e3
},{
	show: function(index) {
		$(this).addClass('cur');
		
	},hide:function(index){
		$(this).removeClass("cur")
	}
});
$(".tan .tanright small").click(function(event) {
	$(".cp div").css("display","none");
});
$(".cp ul li").click(function(event) {
	$(".cp div").css("display","block");
	return false;
});
$.ajax({
	url: 'index.json',
	type: 'GET',
	dataType: 'json',
	data: {},
})
.done(function(data) {
	console.log(data);
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
