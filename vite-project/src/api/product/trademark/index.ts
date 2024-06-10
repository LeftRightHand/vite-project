import request from "@/utils/request";
import { TradeMark, TradeMarkResponseData } from "./type";
import { FOCUS_AFTER_RELEASED } from "element-plus/es/components/focus-trap/index.mjs";
import { id } from "element-plus/es/locales.mjs";

enum API {
      //获取已有品牌接口
      TRADEMARK_URL = "/admin/product/baseTrademark/",
      //添加品牌
      ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
      //修改已有品牌
      UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
      //删除已有品牌
      DELETE_URL = '/admin/product/baseTrademark/remove/'
}

//获取已有品牌的接口方法
//page:获取第几页 ---默认第一页
//limit:获取几个已有品牌的数据
export const requestHasTrademark = (page: number, limit: number) =>
      request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`);

//添加和修改品牌的接口
export const requestAddOrUpdateTrademark = (data: TradeMark) => {
      if (data) {
            return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
      } else {
            return request.post<any, any>(API.ADDTRADEMARK_URL, data)
      }
}
//删除某一个已有的品牌
export const requestDeleteTrademark = () => request.delete<any, any>(API.DELETE_URL + id)


