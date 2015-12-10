export default {
    setSVG: function(){
        this.iconList = (!this.iconList) ? {
            'black-chevron-down': require('./black-chevron-down.svg')
            //'twitter' : require('babel!svg-react-0.13!./icons/twitter.svg?name=twitter'),
            //'facebook' : require('babel!svg-react-0.13!../../css/icons/facebook.svg?name=facebook'),
            //'youtube' : require('babel!svg-react-0.13!../../css/icons/youtube.svg?name=youtube')
        } : this.iconList;
    },

    getSVG: function(name) {
        return this.iconList[name];
    }
}
