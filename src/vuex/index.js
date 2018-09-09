import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMEMT , FATCH } from './mutation-types'
Vue.use(Vuex)

//创建仓库

var store = new  Vuex.Store({

	state : {
		count : 100 ,
		list:[]
	},
	getters : {//格式化
		alsDreiGrossen : (state) => {
			return state.list.filter((drei)=>{
				return drei.name <= 3
			})

		}
	}, 
	mutations : {//修改state
		[INCREMEMT]:( state , num)=>{
			state.count += num
		},
		[FATCH] : (state , list) => {
			state.list = list
		}
	},
	actions : {//异步
		getFaTCH: function({commit}){
			setTimeout(()=>{
				commit('FATCH',[{ name:'0001' }])
			},1000)

		}
	}

})


export default store