
"use strict";

function start() {
    createState()
    updateDateTimeInStorage()
    updateDateTimeDOM()
}

//! check if state is valid and wrap in try block
//! check against all state types
function createState() {
    const raw = localStorage.getItem('level_Up_state');
    let state = JSON.parse(raw);

    if (!state || typeof state !== 'object' || !('date' in state)) {
        state = { dateTime: null }
        localStorage.setItem("level_up_state", JSON.stringify(state))
    }
}

function getAppState() {
    let raw = localStorage.getItem("level_up_state")
    return JSON.parse(raw)
}

function updateAppState(state){
    localStorage.setItem('level_up_state', JSON.stringify(state))
}

//! WRAP in try catch block
function updateDateTimeInStorage() {

    const state = getAppState()
    if (!state || typeof state != 'object' | !('date' in state)) {
        console.log("error")
    }

    const dateTime = new Date();
    state.date = dateTime.toISOString();
    updateAppState()
}

function updateDateTimeDOM() {

}

document.addEventListener('DOMContentLoaded', start)


// note when retrieving datetime
// const date = new Date(stateJSON.date); // restores Date object

//!Suggestion 2
// Extract a helper for local Storage interatction
// This is standard practice to reduce repetitive JSON parsing /
// serialization and give you a central place to handle errors or versioning later:
// function getAppState() {
//     const raw = localStorage.getItem("level_up_state");
//     return raw ? JSON.parse(raw) : null;
// }

// function setAppState(state) {
//     localStorage.setItem("level_up_state", JSON.stringify(state));
// }
// let state = getAppState();
// state.date = new Date().toISOString();
// setAppState(state);

//!Suggestion 3
// consider using sessionStorage

