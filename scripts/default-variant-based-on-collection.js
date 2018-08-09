/**
select default Model base on 
handle list and condition list
**/

try {
    $(function () {
        $(window).bind('load', function () {
            collectionName = this.window.location.href.split('/')[4]

            console.log(collectionName)
            handle = [
                "iphone-6-plus-6s-plus-collection",
                "iphone-6-6s-collection",
                "iphone-7-collection",
                "iphone-7-plus-collection",
                "iphone-8-collection",
                "iphone-8-plus-collection",
                "iphone-se-5-5s-collection",
                "iphone-x-collection"
            ]
            condition = [
                "iPhone 6 Plus/6s Plus",
                "iPhone 6/6s",
                "iPhone 7",
                "iPhone 7 Plus",
                "iPhone 8",
                "iPhone 8 Plus",
                "iPhone SE/5/5s",
                "iPhone X"
            ]

            find_handle = handle.indexOf(collectionName)
            toClickText = condition[find_handle]

            selectId = $('div.selector-wrapper label')
                .filter(function () { return $(this).text() == 'Model' })
                .attr("for")

            $('select#' + selectId + ' option')
                .filter(function () {
                    return $(this).html() == toClickText;
                })
                .attr("selected", true)
                .trigger('change');
        });
    });
} catch (error) {
    console.log("Edited by dori.claudino, on templates/product.liquid to set change the default product variant")
    console.log(error)
}