$(function() {
    var entrylist;
    $.get("https://nantou-shengeng-for-disaster.herokuapp.com/ncdr", function(data) {

        // var xmlDoc = $.parseXML(data)
        var $xml = $(data);

        $categoryList = $xml.find("category");
        var vals = [];
        $("#selectCategory").append("<option>全部</option>");
        // $("#selectCategory").append($categoryList.text());

        $.each($categoryList, function() {
            var category = $(this).attr("term");
            if (vals.length > 0 && vals.indexOf(category) == -1) {
                $("#selectCategory").append("<option>" + category + "</option>");
            }
            vals.push(category);
        });

        $entryList = $xml.find("entry");
        $.each($entryList, function() {
            var title = $(this).find("title").text();
            var updated = $(this).find("updated").text();
            var author = $(this).find("name").text();
            var link = $(this).find("link").attr("href");
            var summary = $(this).find("summary").text();
            var ramdomID = "d" + Math.floor(Math.random() * 111111).toString();
            var content = "發布單位: " + author + "<br/>" + "" + title + "<br/>" + "" + updated + "<br/>" + "" + link + "<br/>" + "<div id=" + ramdomID + "></div><br/>" + "" + summary + "<br/>" + "<hr/>"
            $("#DivContent").append(content);
        });

        entrylist = $entryList;

    });

    $('select').on('change', function() {
        var selectedItem = this.value;
        $("#DivContent").empty();
        $.each(entrylist, function() {
            var title = $(this).find("title").text();
            if (title == selectedItem) {
                var updated = $(this).find("updated").text();
                var author = $(this).find("name").text();
                var link = $(this).find("link").attr("href");
                var summary = $(this).find("summary").text();
                var ramdomID = "d" + Math.floor(Math.random() * 111111).toString();
                var content = "發布單位: " + author + "<br/>" + "" + title + "<br/>" + "" + updated + "<br/>" + "" + link + "<br/>" + "<div id=" + ramdomID + "></div><br/>" + "" + summary + "<br/>" + "<hr/>"
                $("#DivContent").append(content);
            }
        });
    })


});
