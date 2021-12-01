gdjs.MainCode = {};
gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDTextObjects1= [];
gdjs.MainCode.GDTextObjects2= [];
gdjs.MainCode.GDskullPropObjects1= [];
gdjs.MainCode.GDskullPropObjects2= [];
gdjs.MainCode.GDskullObjects1= [];
gdjs.MainCode.GDskullObjects2= [];
gdjs.MainCode.GDNewObjectObjects1= [];
gdjs.MainCode.GDNewObjectObjects2= [];
gdjs.MainCode.GDNewObject2Objects1= [];
gdjs.MainCode.GDNewObject2Objects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainCode.GDPlayerObjects1.length !== 0 ? gdjs.MainCode.GDPlayerObjects1[0] : null), false, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(-(150), 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("run");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("run");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayerObjects1[i].hasNoForces() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("fall");
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDTextObjects1.length = 0;
gdjs.MainCode.GDTextObjects2.length = 0;
gdjs.MainCode.GDskullPropObjects1.length = 0;
gdjs.MainCode.GDskullPropObjects2.length = 0;
gdjs.MainCode.GDskullObjects1.length = 0;
gdjs.MainCode.GDskullObjects2.length = 0;
gdjs.MainCode.GDNewObjectObjects1.length = 0;
gdjs.MainCode.GDNewObjectObjects2.length = 0;
gdjs.MainCode.GDNewObject2Objects1.length = 0;
gdjs.MainCode.GDNewObject2Objects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
