// Registering component in box-component.js
AFRAME.registerComponent('box', {
    schema:{
        boxX:{type:"number", default:1}
    },
    tick:function () {
    this.data.boxX = this.data.boxX+0.01;
    var pos = this.el.getAttribute("position");
    pos.x = this.data.boxX;
    this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z}) 
    }
});