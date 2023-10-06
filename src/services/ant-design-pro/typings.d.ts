import { message } from '../../.umi/plugin-request/ui/noop';
// @ts-ignore
/* eslint-disable */

declare namespace API {
  // 当前用户信息
  type CurrentUser = {
    //不是必填项，就加上问号 ？
    //id
    id: number;
    // 用户名
    username: string;
    //账号
    userAccount: string;
    // 头像
    avatarUrl?: string;
    //性别
    gender: string;
    //密码
    userPassword: string;
    // 邮箱
    emial: string;
    // 用户状态
    userStaus: number;
    // 电话
    phone: string;
    // 用户角色
    userRole: number;
    //星球编号
    planeCode: string;
    // 创建时间
    createTime: Date;
  };

  // 登录结果
  type LoginResult = {
    // 状态
    status?: string;
    // 类型
    type?: string;
    // 当前权限
    currentAuthority?: string;
  };
  // 注册结果
  type RegisterResult = {
    // ID
    id?: number;
  };

  // 分页参数
  type PageParams = {
    // 当前页
    current?: number;
    // 每页数量
    pageSize?: number;
  };

  // 规则列表项
  type RuleListItem = {
    // 键
    key?: number;
    // 是否禁用
    disabled?: boolean;
    // 链接
    href?: string;
    // 头像
    avatar?: string;
    // 名称
    name?: string;
    // 拥有者
    owner?: string;
    // 描述
    desc?: string;
    // 编号
    callNo?: number;
    // 状态
    status?: number;
    // 更新时间
    updatedAt?: string;
    // 创建时间
    createdAt?: string;
    // 进度
    progress?: number;
  };

  // 规则列表
  type RuleList = {
    // 数据
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    /** 是否成功 */
    success?: boolean;
  };

  // 假验证码
  type FakeCaptcha = {
    // 码
    code?: number;
    // 状态
    status?: string;
  };

  // 登录参数
  type LoginParams = {
    // 用户账号
    userAccount?: string;
    // 用户密码
    userPassword?: string;
    // 是否自动登录
    autoLogin?: boolean;
    // 类型
    type?: string;
  };

  // 注册参数
  type RegisterParams = {
    // 用户账号
    userAccount?: string;
    // 用户密码
    userPassword?: string;
    // 确认密码
    checkPassword?: string;
    //星球编号
    planeCode?: string;
    // 类型
    type?: string;
  };

  // 错误响应
  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  // 通知列表
  type NoticeIconList = {
    // 数据
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    /** 是否成功 */
    success?: boolean;
  };

  // 通知类型
  type NoticeIconItemType = 'notification' | 'message' | 'event';

  // 通知项
  type NoticeIconItem = {
    // ID
    id?: string;
    // 额外信息
    extra?: string;
    // 键
    key?: string;
    // 是否已读
    read?: boolean;
    // 头像
    avatar?: string;
    // 标题
    title?: string;
    // 状态
    status?: string;
    // 日期时间
    datetime?: string;
    // 描述
    description?: string;
    // 类型
    type?: NoticeIconItemType;
  };
  
  /**
   * 通用返回类
   */
  type BaseResponse<T> = {
    code: number,
    data: T,
    message: string,
    description: string;
  }
}
