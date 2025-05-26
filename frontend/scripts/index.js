
"use strict";

const DEFAULT_STATE = { "date": null }
const STATE_KEY = 'level_up_state'

function start() {
    initializeState()
    updateDateTimeInStorage()
    console.log(localStorage.getItem(STATE_KEY))
    // updateDateTimeInDOM()
}



//! check against all state types
function isValidState() {
    return true // for now
}

function initializeState() {
    let state = getAppState()
    if (!state || typeof state !== 'object' || !('date' in state)) {
        updateAppState(DEFAULT_STATE)
    }
}

function getAppState() {
    const raw = localStorage.getItem(STATE_KEY)
    if (raw && raw !== 'undefined') {
        return JSON.parse(raw)
    } else {
        return null;
    }
}

function updateAppState(state) {
    try{
        if (!isValidState()) {
            throw new Error("Invalid or missing state")
        }
        localStorage.setItem('level_up_state', JSON.stringify(state))
    } catch (e)
    {
        localStorage.setItem('level_up_state', JSON.stringify(DEFAULT_STATE))
    }
}

//! WRAP in try catch block
function updateDateTimeInStorage() {
    const state = getAppState()
    try {
        if (!state || typeof state != 'object' | !('date' in state)) {
            throw new Error("Invalid or missing state")
        }

        const dateTime = new Date();
        state.date = dateTime.toISOString();
        updateAppState()
    }
    catch (e) {
        const state = DEFAULT_STATE
        localStorage.setItem(state)
    }

}

function updateDateTimeInDOM() {

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

//! Suggestion 4
// Use Unux Epoch time and converrt

