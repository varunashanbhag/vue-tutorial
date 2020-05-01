const state = {
	counter: 0
};

const getters = {
	doubleCounter: state => {
		return state.counter * 2;
	},
	stringCounter: state => {
		return state.counter + ' Clicks';
	}
};

const mutations = {
	increment: (state, payload) => {
		state.counter += payload;
	},
	decrement: (state, payload) => {
		state.counter -= payload;
	}	
};

const actions = {
	increment: ({commit}, payload) => {
		commit('increment', payload);
	},
	decrement: (context, payload) => {
		context.commit('decrement', payload);
	},
	asyncincrement: (context, payload) => {
		setTimeout( () => {
			context.commit('increment', payload.by);
		}, payload.duration);
	},
	asyncdecrement: (context, payload) => {
		setTimeout( () => {
			context.commit('decrement', payload.by);
		}, payload.duration);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}