/**
 * 山东农信报表公共js
 */
/**
 * 获取审批单或者交易单标题
 * trdType 业务类型代码
 * sheetType ORD|TRD审批单或交易单
 */
function getOrdOrTrdTitle(trdType, sheetType) {
	if (!trdType) {
		return '';
	}
	var titlePrefix, titlePostfix;
	// 按单据类型取后缀
	switch (sheetType) {
		case 'ORD': 
			titlePostfix = '业务审批表'; break; 
		case 'TRD': 
			titlePostfix = '业务成交单'; break; 
		default:
			titlePostfix = '{不支持的单据}'; break; 
	} 
	switch (trdType) {
		case '0000000': 
		case '0000001': 
		case '0000710': 
		case '0000711': 
		case '0000720': 
		case '0000721': 
			titlePrefix = '现券买卖'; break; 
		case '0000021': 
			titlePrefix = '债券发行'; break; 
		case '0000031': 
		case '0000771': 
		case '0000781': 
			titlePrefix = '债券行权'; break; 
		case '0000061': 
			titlePrefix = '债券代码转换'; break; 
		case '0000451': 
			titlePrefix = '债券重分类'; break; 
		case '0100000': 
		case '0100001': 
			titlePrefix = '其他固定收益类产品'; break; 
		case '0100531': 
		case '0121531': 
		case '0121751': 
		case '0121761': 
		case '0122530': 
		case '0122531': 
		case '0128531': 
		case '0142530': 
		case '0142531': 
		case '0143530': 
		case '0143531': 
		case '0144530': 
		case '0144531': 
			titlePrefix = '提前/逾期支取'; break; 
		case '0121271': 
		case '0143270': 
		case '0143271': 
		case '0144270': 
		case '0144271': 
			titlePrefix = '临时支取'; break; 
		case '0121280': 
		case '0143280': 
		case '0143281': 
		case '0144280': 
		case '0144281': 
			titlePrefix = '临时支取回存'; break; 
		case '0121100': 
		case '0121730': 
		case '0121740': 
		case '0128100': 
			titlePrefix = '存放同业定期'; break;
		case '0122100': 
		case '0122101': 
			titlePrefix = '同业拆借'; break;
		case '0123100': 
		case '0123101': 
		case '0123730': 
		case '0123731': 
		case '0123740': 
		case '0123741': 
			titlePrefix = '质押式回购'; break; 
		case '0124100': 
		case '0124101': 
			titlePrefix = '质押式票据回购'; break; 
		case '0142100': 
		case '0142101': 
			titlePrefix = '资金调剂'; break; 
		case '0143100': 
		case '0143101': 
			titlePrefix = '约期存款'; break;
		case '0144100': 
		case '0144101': 
			titlePrefix = '协议存款'; break;
		case '0143790': 
		case '0143791': 
			titlePrefix = '活期约期存款转定期'; break;
		case '0201100': 
			titlePrefix = '债券承销'; break; 
		case '0202100': 
		case '0202730': 
		case '0202740': 
			titlePrefix = '债券分销买入'; break; 
		case '0202101': 
			titlePrefix = '债券分销卖出'; break; 
		case '0220100': 
		case '0220101': 
		case '0220730': 
		case '0220731': 
		case '0220740': 
		case '0220741': 
			titlePrefix = '买断式回购'; break; 
		case '0230101': 
		case '0230530': 
			titlePrefix = '债券质押解押'; break; 
		case '0300010': 
		case '0300011': 
			titlePrefix = '存放同业活期'; break; 
		case '0305010': 
		case '0305011': 
			titlePrefix = '存放同业保证金活期'; break;
		case '0300311': 
			titlePrefix = '存放同业活期销户'; break; 
		case '0305311': 
			titlePrefix = '存放同业保证金活期销户'; break; 
		case '0308010': 
		case '0308011': 
		case '0309010': 
		case '0309011': 
			titlePrefix = '活期约期存款'; break; 
		case '0801101': 
		case '0802100': 
			titlePrefix = '其他收付款'; break;
		case '2000100': 
		case '2000101': 
			titlePrefix = '债券借贷'; break; 
		case '2000220': 
		case '2000221': 
		case '2000330': 
		case '2000331': 
		case '2000400': 
			titlePrefix = '债券借贷变更'; break; 
		case '0123400': 
			titlePrefix = '债券质押式回购置换'; break; 
		case '0230400': 
			titlePrefix = '债券质押置换'; break; 
		default : 
			titlePrefix = '{不支持的业务类型}'; break; 
	}
	
	return titlePrefix + titlePostfix;
}
/**
 * 获取打印凭证标题
 */
function getVoucherTitle(trdType, trdTypeName, actingType, actingTypeName) {
	if (!trdType) {
		return '';
	}
	var titlePrefix, titlePostfix = '记账凭证'; 
	switch (trdType) {
		// 现券买入
		case '0000000': 
			switch (actingType) {
				case '1': 
					titlePrefix = '交易性金融资产买入'; break; 
				case '2': 
					titlePrefix = '可供出售金融资产买入'; break; 
				case '3': 
					titlePrefix = '持有至到期投资买入'; break; 
				case '4': 
					titlePrefix = '应收款项投资买入'; break; 
				default:
					titlePrefix = actingTypeName + '买入'; break;
			} 
			break; 
		// 现券卖出
		case '0000001': 
			switch (actingType) {
				case '1': 
					titlePrefix = '交易性金融资产卖出'; break; 
				case '2': 
					titlePrefix = '可供出售金融资产卖出'; break;
				case '3': 
					titlePrefix = '持有至到期投资卖出'; break; 
				case '4': 
					titlePrefix = '应收款项投资卖出'; break; 
				default:
					titlePrefix = actingTypeName + '卖出'; break;
			}
			break;
		case '0100000': 
			titlePrefix = '其他固定收益类产品买入'; break;
		case '0100001': 
			titlePrefix = '其他固定收益类产品卖出'; break; 
		case '0000451': 
			titlePrefix = '债券重分类业务'; break; 
		case '0000031': 
		case '0000771': 
		case '0000781': 
			titlePrefix = '债券行权'; break; 
		case '0202100': 
		case '0202730': 
		case '0202740': 
			titlePrefix = '债券分销买入'; break; 
		case '0202101': 
			titlePrefix = '债券分销卖出'; break; 
		case '0000201': 
		case '0100201': 
			titlePrefix = '债券/同业存单/其他固定收益类产品结息'; break; 
		case '2000100': 
		case '2000101': 
			titlePrefix = '债券借贷'; break; 
		case '0121100': 
		case '0121730': 
		case '0121740':  
		case '0300010': 
			titlePrefix = '存放同业存入'; break; 
		case '0121301':  
			titlePrefix = '存放同业定期本息到期'; break; 
		case '0121201': 
		case '0300201': 
			titlePrefix = '存放同业收息'; break; 
		case '0300011':  
			titlePrefix = '存放同业支取'; break; 
		case '0121271':  
			titlePrefix = '存放同业临时支取回存'; break; 
		case '0128100': 
			titlePrefix = '存放同业保证金定期'; break; 
		case '0305010': 
		case '0305011': 
			titlePrefix = '存放同业保证金活期'; break; 
		case '0142300': 
		case '0142301': 
			titlePrefix = '资金调剂还本付息'; break; 
		case '0122100':  
			titlePrefix = '同业拆借拆出'; break; 
		case '0122101':  
			titlePrefix = '同业拆借拆入'; break; 
		case '0122300': 
		case '0122301': 
			titlePrefix = '同业拆借还款'; break; 
		case '0801101': 
		case '0802100': 
			titlePrefix = '其他收付款'; break; 
			
		case '0123100': 
		case '0123730': 
		case '0123740': 
		case '0220100': 
		case '0220730': 
		case '0220740': 
			titlePrefix = '逆回购首期'; break; 
		case '0123301':
		case '0220301': 
			titlePrefix = '逆回购到期'; break; 
		case '0123101': 
		case '0123731': 
		case '0123741': 
		case '0220101': 
		case '0220731': 
		case '0220741': 
			titlePrefix = '正回购首期'; break; 
		case '0123300': 
		case '0220300': 
			titlePrefix = '正回购到期'; break; 
			
		case '0124100': 
			titlePrefix = '票据逆回购首期'; break; 
		case '0124301':  
			titlePrefix = '票据逆回购到期'; break; 
		case '0124101':   
			titlePrefix = '票据正回购首期'; break; 
		case '0124300':  
			titlePrefix = '票据正回购到期'; break; 
		default :
			titlePrefix = trdTypeName; break; 
	}
	
	return titlePrefix + titlePostfix;
}
/**
 * 业务类型是否代理
 * @param trdType 业务类型代码
 */
function checkIsEntrust(trdType) {
	var isEntrust = false;
	if (trdType === '0000720' || 
			trdType === '0000721' || 
			trdType === '0000781' || 
			trdType === '0121740' || 
			trdType === '0121761' || 
			trdType === '0123740' || 
			trdType === '0123741' || 
			trdType === '0202740' || 
			trdType === '0220740' || 
			trdType === '0220741') {
		isEntrust = true;
	}
	return isEntrust;
}