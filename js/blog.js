/* global Backendless, Posts, Handlebars, moment */

$(function () {
    var APPLICATION_ID = "291AF3D8-BFD8-D246-FFEC-B57EC2F81200",
        SECRET_KEY = "58A3D718-B1CD-308E-FF5E-2C57691F4300",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function(time) {
        return moment(time).format("dddd, MMMM do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
        var blogScript = $("#post-title-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('#post-title').html(blogHTML);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.context || "";
    this.authorEmail = args.authorEmail || "";
}

