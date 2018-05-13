const Reducer = (state, action) => {
    console.log("Reducer action.type = " + action.type + ", action.value = " + action.value);
    switch (action.type) {
        case 'show':
            return {text : action.value};
        default:
            return state;
    }
};

export default Reducer;