$(function() {
	var rootPath = 'http://excel-inc.acmr.com.cn/master/';
	$('#fileupload')
		.fileupload({
			url: rootPath + "upload",
			dataType: 'json',
			singleFileUploads: false,
			maxFileSize: 999000,
			done: function(e, data) {
				if (data.returncode === 200) {
					$('.progress .progress-bar').css('width',
						'100%');
				}
			},
			success: function(data) {
				if (data.returncode === 200) {
					$('.progress .progress-bar').css('width',
						'100%');
					window.location = rootPath + "reopen/" + data.returndata;
				}
			},
			progressall: function(e, data) {
				var progress = parseInt(data.loaded / data.total * 70, 10);
				$('.progress .progress-bar').css('width',
					progress + '%');
			},

		});
});
