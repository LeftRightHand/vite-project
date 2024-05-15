import request from "@/utils/request";
import { TradeMarkResponseData } from "./type";

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

export const requestHasTrademark = (page: number, limit: number) => 
    request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`);