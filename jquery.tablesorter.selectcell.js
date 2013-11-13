/*
 *
 * selectCell widget for jQuery TableSorter 2.0
 * Version 1.0
 *
 * Copyright (c) 2013 Grigoryan George
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

$.tablesorter.addWidget({
    id: "selectCell",
    format: function(table) {
        if(table.config.debug) { var time = new Date(); }

        var sorted_th=false;
        if($("th",table).hasClass(table.config.cssAsc))
            sorted_th=$("."+table.config.cssAsc, table);

        if(!sorted_th&&$("th",table).hasClass(table.config.cssDesc))
            sorted_th=$("."+table.config.cssDesc, table);

        if(sorted_th){
            var num=sorted_th.data(table.config.widgetSelectCell[0]);
    
            if(num!==false&&sorted_th){
                $("td",table.tBodies[0]).removeClass(table.config.widgetSelectCell[1]);
                $("tr", table).each(function(){
                    $(this).find('td:eq('+num+')').addClass(table.config.widgetSelectCell[1]);
                });
            }
        }

        if(table.config.debug) { $.tablesorter.benchmark("Applying selectCell widget", time); }
    }
});