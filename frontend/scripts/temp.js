"use strict";

const state = "level_up_state";

function start() {
    ensureStateExists();
    updateDateTimeInStorage();
    updateDateTimeDOM();
}

function ensureStateExists() {
    try {
        const raw = localStorage.getItem(state);
        const state = JSON.parse(raw);
        if (!state || typeof state !== 'object' || !('date' in state)) {
            throw new Error("Invalid or missing state");
        }
    } catch {
        const defaultState = { date: null };
        localStorage.setItem(state, JSON.stringify(defaultState));
    }
}

function getAppState() {
    return JSON.parse(localStorage.getItem(state));
}

function updateAppState(state) {
    localStorage.setItem(state, JSON.stringify(state));
}

function updateDateTimeInStorage() {
    try {
        const state = getAppState();
        state.date = new Date().toISOString();
        updateAppState(state);
    } catch (err) {
        console.error("Could not update date:", err);
    }
}

function updateDateTimeDOM() {
    const state = getAppState();
    document.getElementById("datetime").textContent = state.date ?? "No date set";
}

document.addEventListener("DOMContentLoaded", start);
