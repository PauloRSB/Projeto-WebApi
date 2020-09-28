function Crash() {
    $("#LElbowUp").attr("disabled", true);
    $("#LElbowDown").attr("disabled", true);
    $("#LPulseAdd").attr("disabled", true);
    $("#LPulseRemove").attr("disabled", true);
    $("#RElbowUp").attr("disabled", true);
    $("#RElbowDown").attr("disabled", true);
    $("#RPulseAdd").attr("disabled", true);
    $("#RPulseRemove").attr("disabled", true);
    $("#IHeadUp").attr("disabled", true);
    $("#IHeadDown").attr("disabled", true);
    $("#RHeadUp").attr("disabled", true);
    $("#RHeadDown").attr("disabled", true);
}
function Active() {
    $("#LElbowUp").attr("disabled", false);
    $("#LElbowDown").attr("disabled", false);
    $("#LPulseAdd").attr("disabled", false);
    $("#LPulseRemove").attr("disabled", false);
    $("#RElbowUp").attr("disabled", false);
    $("#RElbowDown").attr("disabled", false);
    $("#RPulseAdd").attr("disabled", false);
    $("#RPulseRemove").attr("disabled", false);
    $("#IHeadUp").attr("disabled", false);
    $("#IHeadDown").attr("disabled", false);
    $("#RHeadUp").attr("disabled", false);
    $("#RHeadDown").attr("disabled", false);
}

$("#LElbowUp").click(function () {
    var num = parseInt($("#ReceiveLeftElbow").val());
    num++;
    $("#ReceiveLeftElbow").val(num);
    SendSolicitation();
});
$("#LElbowDown").click(function () {
    var num = parseInt($("#ReceiveLeftElbow").val());
    num--;
    $("#ReceiveLeftElbow").val(num);
    SendSolicitation();
});
$("#RElbowUp").click(function () {
    var num = parseInt($("#ReceiveRigthElbow").val());
    num++;
    $("#ReceiveRigthElbow").val(num);
    SendSolicitation();
});
$("#RElbowDown").click(function () {
    var num = parseInt($("#ReceiveRigthElbow").val());
    num--;
    $("#ReceiveRigthElbow").val(num);
    SendSolicitation();
});


$("#LPulseAdd").click(function () {
    var num = parseInt($("#ReceiveLeftPulse").val());
    num = num + 45;
    $("#ReceiveLeftPulse").val(num);
    SendSolicitation();
});
$("#LPulseRemove").click(function () {
    var num = parseInt($("#ReceiveLeftPulse").val());
    num = num - 45;
    $("#ReceiveLeftPulse").val(num);
    SendSolicitation();
});
$("#RPulseAdd").click(function () {
    var num = parseInt($("#ReceiveRigthPulse").val());
    num = num + 45;
    $("#ReceiveRigthPulse").val(num);
    SendSolicitation();
});
$("#RPulseRemove").click(function () {
    var num = parseInt($("#ReceiveRigthPulse").val());
    num = num - 45;
    $("#ReceiveRigthPulse").val(num);
    SendSolicitation();
});

$("#IHeadUp").click(function () {
    var num = parseInt($("#ReceiveHeadI").val());
    num++;
    $("#ReceiveHeadI").val(num);
    SendSolicitation();
});
$("#IHeadDown").click(function () {
    var num = parseInt($("#ReceiveHeadI").val());
    num--;
    $("#ReceiveHeadI").val(num);
    SendSolicitation();
});
$("#RHeadUp").click(function () {
    var num = parseInt($("#ReceiveHeadR").val());
    num = num + 45;
    $("#ReceiveHeadR").val(num);
    SendSolicitation();
});
$("#RHeadDown").click(function () {
    var num = parseInt($("#ReceiveHeadR").val());
    num = num - 45;
    $("#ReceiveHeadR").val(num);
    SendSolicitation();
});

function ImagesHidden() {
    //cabeça
    $("#HBaixo").attr("hidden", true);

    $("#HRepouso").attr("hidden", true);
    $("#HRepouso_45").attr("hidden", true);
    $("#HRepouso_90").attr("hidden", true);
    $("#HRepouso45").attr("hidden", true);
    $("#HRepouso90").attr("hidden", true);

    $("#HCima").attr("hidden", true);
    $("#HCima_45").attr("hidden", true);
    $("#HCima_90").attr("hidden", true);
    $("#HCima45").attr("hidden", true);
    $("#HCima90").attr("hidden", true);

    //lado esquerdo
    $("#LERepouso").attr("hidden", true);
    $("#LELeve").attr("hidden", true);
    $("#LEContraido").attr("hidden", true);

    $("#LEForteR").attr("hidden", true);
    $("#LEForte45").attr("hidden", true);
    $("#LEForte90").attr("hidden", true);
    $("#LEForte135").attr("hidden", true);
    $("#LEForte180").attr("hidden", true);
    $("#LEForte_45").attr("hidden", true);
    $("#LEForte_90").attr("hidden", true);

    //lado direito
    $("#RERepouso").attr("hidden", true);
    $("#RELeve").attr("hidden", true);
    $("#REContraido").attr("hidden", true);

    $("#REForteR").attr("hidden", true);
    $("#REForte45").attr("hidden", true);
    $("#REForte90").attr("hidden", true);
    $("#REForte135").attr("hidden", true);
    $("#REForte180").attr("hidden", true);
    $("#REForte_45").attr("hidden", true);
    $("#REForte_90").attr("hidden", true);
}
function SetImages() {
    var headR = parseInt($("#ReceiveHeadR").val());
    var headI = parseInt($("#ReceiveHeadI").val());
    var ElbowL = parseInt($("#ReceiveLeftElbow").val());
    var ElbowR = parseInt($("#ReceiveRigthElbow").val());
    var PulseL = parseInt($("#ReceiveLeftPulse").val());
    var PulseR = parseInt($("#ReceiveRigthPulse").val());

    //Cabeca
    if (headI == -1) {
        $("#HBaixo").attr("hidden", false);
    } else if (headI == 0) {
        if (headR == 0) {
            $("#HRepouso").attr("hidden", false);
        } else if (headR == -90) {
            $("#HRepouso_90").attr("hidden", false);
        } else if (headR == -45){
            $("#HRepouso_45").attr("hidden", false);
        } else if (headR == 45) {
            $("#HRepouso45").attr("hidden", false);
        } else if (headR == 90) {
            $("#HRepouso90").attr("hidden", false);
        }
    } else if (headI == 1) {
        if (headR == 0) {
            $("#HCima").attr("hidden", false);
        }else if (headR == -90) {
            $("#HCima_90").attr("hidden", false);
        } else if (headR == -45) {
            $("#HCima_45").attr("hidden", false);
        } else if (headR == 45) {
            $("#HCima45").attr("hidden", false);
        } else if (headR == 90) {
            $("#HCima90").attr("hidden", false);
        }
    }
    // lado esquerdo
    if (ElbowL == 0) {
        $("#LERepouso").attr("hidden", false);
    } else if (ElbowL == 1) {
        $("#LELeve").attr("hidden", false);
    } else if (ElbowL == 2) {
        $("#LEContraido").attr("hidden", false);
    } else if (ElbowL == 3) {
        if (PulseL == 0) {
            $("#LEForteR").attr("hidden", false);
        } else if (PulseL == -90) {
            $("#LEForte_90").attr("hidden", false);
        } else if (PulseL == -45) {
            $("#LEForte_45").attr("hidden", false);
        } else if (PulseL == 45) {
            $("#LEForte45").attr("hidden", false);
        } else if (PulseL == 90) {
            $("#LEForte90").attr("hidden", false);
        } else if (PulseL == 135) {
            $("#LEForte135").attr("hidden", false);
        } else if (PulseL == 180) {
            $("#LEForte180").attr("hidden", false);
        }
    }
    // lado direito
    if (ElbowR == 0) {
        $("#RERepouso").attr("hidden", false);
    } else if (ElbowR == 1) {
        $("#RELeve").attr("hidden", false);
    } else if (ElbowR == 2) {
        $("#REContraido").attr("hidden", false);
    } else if (ElbowR == 3) {
        if (PulseR == 0) {
            $("#REForteR").attr("hidden", false);
        } else if (PulseR == -90) {
            $("#REForte_90").attr("hidden", false);
        } else if (PulseR == -45) {
            $("#REForte_45").attr("hidden", false);
        } else if (PulseR == 45) {
            $("#REForte45").attr("hidden", false);
        } else if (PulseR == 90) {
            $("#REForte90").attr("hidden", false);
        } else if (PulseR == 135) {
            $("#REForte135").attr("hidden", false);
        } else if (PulseR == 180) {
            $("#REForte180").attr("hidden", false);
        }
    }


}