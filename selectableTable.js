/** 
 * jQuery Selectable Table
 * Author: Jan-Peter Krämer
 * Copyright 2012 - Jan-Peter Krämer
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $ */

!function ($) {

	var SelectableTable = function (element, options) {
		this.element = $(element);
		this.selectionClass = options.selectionClass;

		var lastClickedRow;

		var self = this;

		this.element.on("click", "tbody tr", function (event) {
			if (lastClickedRow === undefined) {
				lastClickedRow = self.element.find('tbody tr:first'); 
				if (lastClickedRow.length === 0) {
					lastClickedRow = undefined;
				} else {
					lastClickedRow = lastClickedRow[0];
				}
			}

			if (event.shiftKey) {
				if ((lastClickedRow !== undefined) && (lastClickedRow !== this)) {
					$(this).siblings().not(lastClickedRow).removeClass(self.selectionClass);

					if ($(lastClickedRow).nextAll().is(this)) {
						$(lastClickedRow).nextUntil(this).addClass(self.selectionClass);
					} else {
						$(this).nextUntil(lastClickedRow).addClass(self.selectionClass);
					}
				} 

				document.getSelection().removeAllRanges();
			} else {
				lastClickedRow = this;	
			} 

			$(this).toggleClass(self.selectionClass);		
		});
	};

	SelectableTable.prototype = {
		constructor: SelectableTable, 

		getSelection: function () {
			return this.element.find("tbody tr." + this.selectionClass);
		}
	};

	$.fn.selectableTable = function (option, val) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('selectableTable'),
				options = (typeof option === "object") && option;
			if (data === undefined) {
				data = new SelectableTable(this, $.extend({}, $.fn.selectableTable.defaults, options));
				$this.data('selectableTable', data);
			}
			if (typeof option === "string") {
				data[option] = val;
			}

		});
	};

	$.fn.selectableTable.defaults = {
		selectionClass: "selected"
	};


}(window.jQuery)