
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var menuItem1 = new cc.MenuItemFont("Play", play);
        var menuItem2 = new cc.MenuItemFont("Highscores", highscores);
        var menuItem3 = new cc.MenuItemFont("Settings", settings);

        menuItem1.setPosition(cc.p(size.width / 2, (size.height / 4) * 3));
        menuItem2.setPosition(cc.p(size.width / 2, (size.height / 4) * 2));
        menuItem3.setPosition(cc.p(size.width / 2, (size.height / 4) * 1));

        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);

        return true;
    }
});

var play = function()
{
	cc.log("Play Game");
}

var highscores = function()
{
	cc.log("Highscores");
}

var settings = function()
{
	cc.log("Go To Settings");
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

