Selectable Table
======================

A simple jQuery plugin to make an HTML table selectable. Row selection can be toggled by clicking. Multiple rows can be selected by holding the shift key, following the same rules as the Mac OS X Finder. Selected rows are NOT deselected when clicking a row without any modifier keys, though, as this would make multi-row selections on touch devices impossible.

!!! Usage
To make a table with the id "table" selectable, just put `$("#table").selectableTable({ selectionClass: "warning" });` somewhere in your JS. The selectionClass is added as a class to all selected rows. The options parameter can be omitted, causing the plugin to use the default selectionClass "selected". 

When the selection changes, the selectableTable triggers a "selectionChanged" event, you can observe using `$("#table").on('selectionChanged', function...)`.

To get the selected rows (as a jQuery object containing trs) use `$("#table").data('selectableTable').getSelection()`.