// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js","model.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        // {
        //     card:{
        //         translation: [0, 3.023505159221866, -5.970223141259936],
        //         scale: [45.400086814993834, 45.400086814993834, 45.400086814993834],
        //         rotation: [0, 0, 0, 1],
        //         layers: ["pointer","walk"],
        //         name: "/Project _09_.glb",
        //         dataLocation: "3dvPLsLuN-LEJiKP8sPfmr6MS2gNoWpaTpKyYeTXaUScDBAQFBdeS0sCDQgBF0oRF0oHFgsVEQEQSg0LSxFLHjEQEzQrHiIRKzdVLw0DKT4NUVddHCIgI1xUVksNC0oHFgsVEQEQSgkNBxYLEgEWFwFKCAsHBQgAARIAAQIFEQgQSwwVIzcoFC4VJjNWLD4lXDAlIh0KLAsyLBYpIzEOAjwgCwUxXAUBPBJRMyFLAAUQBUtXMi4KNDYlFEkjJjALFAUKFgwRHR4SDCYISQlJBSUxAywTD1A9FwYiMyg1",
        //         dataScale: [0.011262856430825223, 0.011262856430825223, 0.011262856430825223],
        //         fileName: "/Project _09_.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",
            
        //     }
        // },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light",,"Model"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                toneMappingExposure: 1.2
            }
        },
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [20.18419446954859, -0.5459893967324243, -28.06123248295844],
                rotation: [0, -0.017396741947045723, 0, 0.9998486652337083],
                spawn: "default",
                // behaviorModules: ["Names"],
            }
        },
        ];
}
