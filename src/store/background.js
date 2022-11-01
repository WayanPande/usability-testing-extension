import { createStore } from "redux";
import { wrapStore } from 'webext-redux';

const counterReducer = (state = { counter: 0, timer: 0, isReady: false, showDialog: false, data: [], page: 0, identity: {}, questionnaire: {} }, action) => {
    if (action.type === 'click') {
        return {
            counter: state.isReady && state.counter + 1,
            timer: state.timer,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }

    if (action.type === 'identity') {
        return {
            counter: state.counter,
            timer: state.timer,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page + 1,
            identity: action.identity,
            questionnaire: { ...state.questionnaire }
        }
    }

    if (action.type === 'questionnaire') {
        return {
            counter: state.counter,
            timer: state.timer,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: action.questionnaire
        }
    }

    if (action.type === 'page') {
        return {
            counter: state.counter,
            timer: state.timer,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page + 1,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }

    if (action.type === 'ready') {
        return {
            counter: state.counter,
            timer: state.timer,
            isReady: !state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }

    if (action.type === 'finishQuestion') {

        return {
            counter: 0,
            timer: 0,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data, action.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }


    if (action.type === 'dialog') {
        return {
            counter: 0,
            timer: 0,
            isReady: false,
            showDialog: !state.showDialog,
            data: [...state.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }

    if (action.type === 'default') {
        return {
            counter: 0,
            timer: 0,
            isReady: false,
            showDialog: false,
            data: [],
            page: 0,
            identity: {},
            questionnaire: {}
        }
    }

    if (action.type === 'timer') {
        return {
            counter: state.counter,
            timer: state.timer + 1,
            isReady: state.isReady,
            showDialog: state.showDialog,
            data: [...state.data],
            page: state.page,
            identity: { ...state.identity },
            questionnaire: { ...state.questionnaire }
        }
    }

    return state;
}

const store = createStore(counterReducer);

wrapStore(store, {
    portName: "RSC"
});


// export default store;