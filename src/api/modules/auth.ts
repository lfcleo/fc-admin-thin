import http from "@/api";
import { AuthRequestModel, AuthModel, MenuPermissionsModel } from "@/models/authModel";

// 用户登录
export const loginApi = (params: AuthRequestModel) => {
    return http.post<AuthModel>('/v1/token', params);
};

// 获取菜单列表及权限
export const getMenuApi = () => {
    return http.get<MenuPermissionsModel>('/v1/token/menu-thin');
};

// 退出登录
export const logoutApi = () => {
    return http.post('/v1/token/logout');
};