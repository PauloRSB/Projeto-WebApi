function ArmsVerification() {
    var LeftElbow = $("#ReceiveLeftElbow").val();
    var RigthElbow = $("#ReceiveRigthElbow").val();
    var LeftPulse = $("#ReceiveLeftPulse").val();
    var RigthPulse = $("#ReceiveRigthPulse").val();

    var Rreceive = ArmVerification(RigthElbow, RigthPulse).split("|");
    var Lreceive = ArmVerification(LeftElbow, LeftPulse).split("|");

    $("#LElbow").val(Lreceive[0]);
    $("#LPulse").val(Lreceive[1]);
    $("#RElbow").val(Rreceive[0]);
    $("#RPulse").val(Rreceive[1]);
};

function ArmVerification(elbow, pulse) {
    var Relbow;
    var Rpulse;
    if (elbow == 0) {
        Relbow = "Repouso";
        if (pulse == 0) {
            Rpulse = "Repouso";
        } else {
            Rpulse = "Crash";
            Crash();
        }
    } else if (elbow == 1) {
        Relbow = "Levemente Contraido";
        if (pulse == 0) {
            Rpulse = "Repouso";
        } else {
            Rpulse = "Crash";
            Crash();
        }
    } else if (elbow == 2) {
        Relbow = "Contraido";
        if (pulse == 0) {
            Rpulse = "Repouso";
        } else {
            Rpulse = "Crash";
            Crash();
        }
    } else if (elbow == 3) {
        Relbow = "Fortemente Contraido";
        if (pulse == 0) {
            Rpulse = "Repouso";
        } else if (pulse == -45) {
            Rpulse = "Rotação -45";
        } else if (pulse == -90) {
            Rpulse = "Rotação -90";
        } else if (pulse == 45) {
            Rpulse = "Rotação 45";
        } else if (pulse == 90) {
            Rpulse = "Rotação 90";
        } else if (pulse == 135) {
            Rpulse = "Rotação 135";
        } else if (pulse == 180) {
            Rpulse = "Rotação 180";
        } else {
            Rpulse = "Crash";
            Crash();
        }
    } else {
        Relbow = "Crash";
        Rpulse = "Crash";
        Crash();
    }
    return (Relbow + "|" + Rpulse);
}

function HeadVerification() {
    var HeadR = $("#ReceiveHeadR").val();
    var Headi = $("#ReceiveHeadI").val();

    if (Headi == 0) {
        $("#IHead").val("Repouso");
        if (HeadR == 0) {
            $("#RHead").val("Repouso");
        } else if (HeadR == -45) {
            $("#RHead").val("Rotação -45");
        } else if (HeadR == -90) {
            $("#RHead").val("Rotação -90");
        } else if (HeadR == 45) {
            $("#RHead").val("Rotação 45");
        } else if (HeadR == 90) {
            $("#RHead").val("Rotação 90");
        } else {
            $("#RHead").val("Crash");
            Crash();
        }
    } else if (Headi == 1) {
        $("#IHead").val("Cima");
        if (HeadR == 0) {
            $("#RHead").val("Repouso");
        } else if (HeadR == -45) {
            $("#RHead").val("Rotação -45");
        } else if (HeadR == -90) {
            $("#RHead").val("Rotação -90");
        } else if (HeadR == 45) {
            $("#RHead").val("Rotação 45");
        } else if (HeadR == 90) {
            $("#RHead").val("Rotação 90");
        } else {
            $("#RHead").val("Crash");
            Crash();
        }
    } else if (Headi == -1) {
        $("#IHead").val("Baixo");
        if (HeadR == 0) {
            $("#RHead").val("Repouso");
        } else {
            $("#RHead").val("Crash");
            Crash();
        }
    } else {
        $("#RHead").val("Crash");
        $("#IHead").val("Crash");
        Crash();
    }
}