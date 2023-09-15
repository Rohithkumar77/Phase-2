var request = 
{
    showPage: function(path, targetDiv) 
    {
        var jqxhr = jQuery.get(path, function(data) 
        {
            jQuery("#" + targetDiv).html(data);
        });
    },
    showMenu: function() 
    {
        request.showPage("/html/menu.html", "menu");
    },
    showHome: function() 
    {
        request.showPage("/html/home.html", "body");
    },
    showFooter: function() 
    {
        request.showPage("/html/footer.html", "footer");
    }
};