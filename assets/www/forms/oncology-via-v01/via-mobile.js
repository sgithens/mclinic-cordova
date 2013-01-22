var muzima = muzima || {};
muzima.via = muzima.via || {};

var mtrh = mtrh || {}


/**
 * This is a stub implementation, that should eventually be
 * implemented by our cordova bindings.
 *
 * @param formId The Unique ID of the form in our system.
 * @param data A Javascript Object which should follow JSON
 * conventions containing the form data to be submitted.
 */
muzima.submitForm = function(formId, data) {
    console.log("Muzima Submission FormID: " + formId);
    console.log(data);
};

mtrh.assemblePerson = function() {
    var person = {
        "patient.amrs_universal_id": 12345,
        "patient.family_name": "Poppins",
        "patient.first_name": "Mary"
    };
    return person;
};

mtrh.assembleEncounter = function() {
    var encounter = {
        "form_id": 56789,
        "provider_id": "999-3",
        "location_id": 5,
        "encounter_datetime": new Date()
    };
    return encounter;
};

mtrh.assembleObs = function() {
    var obs = [
        {
            "name": "Impression: Cervix",
            "code": 7484,
            "value": $("input[name=7484]:checked").val(),
            "type": "numeric",
        }
    ];
    return obs;
};

/** 
  * Return Payload to submit to muzima
  */
mtrh.assembleVIA = function() {
    var togo = {};
    togo.person = mtrh.assemblePerson();
    togo.encounter = mtrh.assembleEncounter();
    togo.obs = mtrh.assembleObs();
    return togo;
};

$(document).ready(function() {
    $("#submit-button").click(function(e) {
        var togo = mtrh.assembleVIA();
        muzima.submitForm("mtrh.via.mobile",togo);
        $.mobile.changePage("../../patient.html");
    });
});


