/*
 * Copyright 2012 Muzima Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var session = (function ($) {
    var session = {};
    var sessionInformation = {};

    var updateWindowName = function () {
        window.name = JSON.stringify(sessionInformation);
    };

    var parseWindowName = function () {
        if (window.name.length)
            sessionInformation = JSON.parse(window.name);
    };

    session.putValue = function (name, value) {
        parseWindowName();
        if (typeof name !== "undefined" && name.length && typeof value !== "undefined") {
            sessionInformation[name] = value;
            updateWindowName();
        }
    };

    session.getValue = function (name) {
        parseWindowName();
        return sessionInformation [name];
    };

    session.removeValue = function (name) {
        parseWindowName();
        if (typeof name !== "undefined" && typeof sessionInformation [name] !== "undefined") {
            delete sessionInformation [name];
            updateWindowName();
        }
    };

    return session;
}(jQuery));

var adminService =  (function ($) {
    var service = {};

    service.downloadAllCohorts = function (successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "AdminPlugin", "downloadAllCohorts", []);
    };

    service.downloadAllPatients = function (cohortUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "AdminPlugin", "downloadAllPatients", [cohortUuid]);
    };

    service.downloadAllObservations = function (patientUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "AdminPlugin", "downloadAllObservations", [patientUuid]);
    };

    return service;
}(jQuery));

var cohortService = (function ($) {
    var service = {};

    service.getAllCohorts = function (successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "CohortPlugin", "getAllCohorts", []);
    };

    service.getCohortByName = function (partialName, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "CohortPlugin", "getCohortByName", [partialName]);
    };

    service.getCohortByUuid = function (cohortUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "CohortPlugin", "getCohortByUuid", [cohortUuid]);
    };

    return service;
}(jQuery));

var patientService = (function ($) {
    var service = {};

    service.getAllPatients = function (successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "PatientPlugin", "getAllPatients", []);
    };

    service.getPatientsByName = function(partialName, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "PatientPlugin", "getPatientsByName", [partialName]);
    };

    service.getPatientByIdentifier = function(identifier, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "PatientPlugin", "getPatientByIdentifier", [identifier]);
    };

    service.getPatientByUuid = function(patientUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "PatientPlugin", "getPatientByUuid", [patientUuid]);
    };

    return service;
}(jQuery));

var observationService = (function ($) {
    var service = {};

    service.getAllObservations = function (patientUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "ObservationPlugin", "getAllObservations", [patientUuid]);
    };

    service.getPatientByUuid = function(observationUuid, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function (result) {
            successCallback(result);
        };
        var error = typeof errorCallback !== 'function' ? null : function (code) {
            errorCallback(code);
        };
        cordova.exec(success, error, "PatientPlugin", "getPatientByUuid", [observationUuid]);
    };

    return service;
}(jQuery));
