$(function () {

	// 變數
	var $tabList		= $('.tabs-nav'),			// Tabs 選單
			$tabAnchors = $tabList.find('a'),	// Tabs 選單連結
			$tabPanels	= $('.tabs-panel');		// Tabs 內容

	var bgc = ['red', 'green', 'blue', 'orange'];

	$tabList.on('click', 'a', function(event) {
		event.preventDefault();
		
		// 將目前所選的連結儲存
		var $this = $(this);

		// 如果是目前所選的　Tab 不做任何動作
		if ($this.hasClass('active')) {
			return;
		}

		$tabAnchors.removeClass('active');
		$this.addClass('active');

		$tabPanels.hide();
		$($this.attr('href')).show();

		$tabAnchors.not($this).css('backgroundColor', '#555');
		$this.css('backgroundColor', bgc[$this.parent().index()]);
	});

	$tabAnchors.eq(0).trigger('click');
});