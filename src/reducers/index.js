
const initialState = {
    resturant: [],
    isLoading: true,
    type: "FETCH_MOVIES"
};


const FetchResturants=(state=initialState,action)=>{
    switch(action.type){
        default: return state;
    }

}

export default FetchResturants;