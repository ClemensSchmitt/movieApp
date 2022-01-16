import React from "react";
import {proxy, useSnapshot} from "valtio";

//Stores email after login
//Required to build reference paths for requests for firebase
const state = proxy({
    email: "default",
});

export default state;