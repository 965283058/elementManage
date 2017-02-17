

// 账号相关
export const LOGIN = '/manage/user/login' // post

export const STAFF_LOGIN = 'account/staff/login' // post
export const STAFF_RESET_PASSWORD = 'account/staff/forget_pw'


//贷前相关
export const CREDIT_POINT = 'preloan/credit_point'
export const PRELOAN_APPLY = 'preloan/post_apply_will'
export const APPLY_INFO = 'preloan/get_my_apply'
export const NEW_APPLY = 'preloan/new_apply_info'
export const APPLYLIST = 'preloan/get_customers_apply'
export const GET_APPLY_INFO = 'preloan/get_apply_info'
export const SUBMIT_AUTH = 'preloan/post_apply_auth'



//认证相关
export const FUND_AUTH = 'thirdpart/apply_fund_auth'  //post
export const FUND_RESULT = 'thirdpart/get_fund_result'  //get
export const FUND_CACHE = 'thirdpart/get_fund_is_authed'  //get

export const CREDIT_AUTH = 'thirdpart/apply_credit_auth'  //post
export const CREDIT_RESULT = 'thirdpart/get_credit_result'  //get
export const CREDIT_AUTHED = 'thirdpart/get_credit_is_authed'  //get

export const REALNAME_AUTH = 'account/customer/realname_auth'  //post




// 填写资料
export const UPLOAD = 'preloan/post_apply_attach_b64' // post  上传附件
export const UPLOAD_GROUP_PHOTO = 'preloan/upload_group_photo' // post 上传合影
export const SUBMIT_APPLY = 'preloan/post_apply_info' // post 提交贷款申请


// 验证码
export const SMS_CODE = 'service/snd_verify_code' // post

//获取下拉选择项
export const GET_MARRIAGE = 'service/get_marriage_state' // get  婚姻
export const GET_RELATION = 'service/get_relation_type' // get  家庭关系
export const GET_TYPE = 'service//get_item_no' // get  获取材料类型
export const GET_DISTRICT = 'service/get_district_list' // get  获取省市列表
export const GET_JOB_LEVEL = 'service/get_job_level' // get  获取职位级别
export const GET_EMPLOYEE = 'service/get_employee_type' // get  获取雇佣类型
export const GET_KNOWN_WAYS = 'service/get_known_ways' // get  获知产品的渠道
export const GET_FUND_CENTER = 'service/get_gjj_center' // get  公积金中心列表


