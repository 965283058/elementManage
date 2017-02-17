import {get,post} from "./utils/index"
import * as urls from "./utils/urls"

export const login=function (params) {
   return post(urls.LOGIN,params)
}
