$(document).ready(function()
{
	$(".playlist").audioControls(
{
	autoPlay:false,
	timer:'increment',
	onAudioChange:function(datos)
	{
		$(".nomp3").text(datos.title);

	}
	

	});
});
