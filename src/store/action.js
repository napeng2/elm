import {getUser,getAddressList} from '../service/getData'
import {GET_SUERINFO,SAVE_ADDRESS} from './mutation-types'

export default {
  async getUserinfo({
    commit,
    state
  }){
    let res=await getUser();
    commit(GET_SUERINFO,res)
  }
}