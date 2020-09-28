var url = window.location.href;
url = url + "api/RoboApi";
var type = '';
var robo;

function Resetar() {
    type = 'GET';
    robo = {};

    $.ajax({
        url: url,
        type: type,
        success(receive) {
            ImagesHidden();
            SetValues(receive);
            Active();
            SetImages();
        }
    });
};

function SendSolicitation() {
    type = 'POST';

    var LeftElbow = parseInt($("#ReceiveLeftElbow").val());
    var RigthElbow = parseInt($("#ReceiveRigthElbow").val());
    var LeftPulse = parseInt($("#ReceiveLeftPulse").val());
    var RigthPulse = parseInt($("#ReceiveRigthPulse").val());
    var HeadI = parseInt($("#ReceiveHeadI").val());
    var HeadR = parseInt($("#ReceiveHeadR").val());

    robo = {
        "head": { "rotation": HeadR, "inclination": HeadI }, "rightElbow": { "contraction": RigthElbow }, "leftElbow": { "contraction": LeftElbow },
        "rightPulse": { "rotation": RigthPulse }, "leftPulse": { "rotation": LeftPulse }
    }
    $.ajax({
        url: url,
        type: type,
        contentType: 'application/json',
        data: JSON.stringify(robo),
        success(receive) {
            ImagesHidden();
            SetValues(receive);
            SetImages();
        }
    });
}

window.onload = function () {
    Resetar();
};

function SetValues(obj) {
    $("#ReceiveHeadR").val(obj.roboReturn.head.rotation);
    $("#ReceiveHeadI").val(obj.roboReturn.head.inclination);
    $("#ReceiveLeftElbow").val(obj.roboReturn.leftElbow.contraction);
    $("#ReceiveRigthElbow").val(obj.roboReturn.rightElbow.contraction);
    $("#ReceiveLeftPulse").val(obj.roboReturn.leftPulse.rotation);
    $("#ReceiveRigthPulse").val(obj.roboReturn.rightPulse.rotation);
    $("#Mensage").val(obj.mensageReturn);

    $("#link").val(url);
    $("#tipo").val(type);
    $("#BodySol").val(JSON.stringify(robo));
    $("#BodyRes").val(JSON.stringify(obj));



    if (obj.statusReturn == true)
        $("#Status").val("Ativo");
    else
        $("#Status").val("Robo Crashou");

    ArmsVerification();
    HeadVerification();
}