/**
 * 业务类型名称
 */
var tradeTypeName = {
	BOND_IN : '现券买入',
	BOND_DIS_IN : '贴现债现券买入',
	BOND_ABS_IN : '资产证券化债券现券买入',
	BOND_ABS_DIS_IN : '贴现资产证券化债券现券买入',	//贴现资产证券化债券现券买入
	BOND_CB_IN : '可转债现券买入',	//可转债现券买入
	BOND_CB_DIS_IN : '贴现可转债现券买入',	//贴现可转债现券买入
	
	BOND_OUT : '现券卖出',	//现券卖出
	BOND_DIS_OUT : '贴现债现券卖出',	//贴现债现券卖出
	BOND_ABS_OUT : '资产证券化债券现券卖出',	//资产证券化债券现券卖出
	BOND_ABS_DIS_OUT : '贴现资产证券化债券现券卖出',	//贴现资产证券化债券现券卖出
	BOND_CB_OUT : '可转债现券卖出',	//可转债现券卖出
	BOND_CB_DIS_OUT : '贴现可转债现券卖出',	//贴现可转债现券卖出
	
	BOND_RECEIVE_RI : '债券收息',//债券收息
	BOND_DIS_RECEIVE_RI : '贴现债债券收息',//贴现债债券收息
	BOND_ABS_RECEIVE_RI : '资产证券化债券债券收息',//资产证券化债券债券收息
	BOND_ABS_DIS_RECEIVE_RI : '贴现资产证券化债券债券收息',//贴现资产证券化债券债券收息
	BOND_CB_RECEIVE_RI : '可转债债券收息',//可转债债券收息
	BOND_CB_DIS_RECEIVE_RI : '贴现可转债债券收息',//贴现可转债债券收息
	
	BOND_END : '债券到期',//债券到期
	BOND_DIS_END : '贴现债债券到期',//贴现债债券到期
	BOND_ABS_END : '资产证券化债券债券到期',//资产证券化债券债券到期
	BOND_ABS_DIS_END : '贴现资产证券化债券债券到期',//贴现资产证券化债券债券到期
	BOND_CB_END : '可转债债券到期',//可转债债券到期
	BOND_CB_DIS_END : '贴现可转债债券到期',//贴现可转债债券到期
	
	BOND_RECEIVE_RI_WHENEVER : '债券随时收息',//债券随时收息
	BOND_DIS_RECEIVE_RI_WHENEVER : '贴现债债券随时收息',//贴现债债券随时收息
	BOND_ABS_RECEIVE_RI_WHENEVER : '资产证券化债券随时收息',//资产证券化债券随时收息
	BOND_ABS_DIS_RECEIVE_RI_WHENEVER : '贴现资产证券化债券随时收息',//贴现资产证券化债券随时收息
	BOND_CB_RECEIVE_RI_WHENEVER : '可转债债券随时收息',//可转债债券随时收息
	BOND_CB_DIS_RECEIVE_RI_WHENEVER : '贴现可转债债券随时收息',//贴现可转债债券随时收息
	
    BOND_RECEIVE_DUE : '债券收应收未收',//债券收应收未收
    BOND_DIS_RECEIVE_DUE : '贴现债债券收应收未收',//贴现债债券收应收未收
    BOND_ABS_RECEIVE_DUE : '资产证券化债券收应收未收',//资产证券化债券收应收未收
    BOND_ABS_DIS_RECEIVE_DUE : '贴现资产证券化债券收应收未收',//贴现资产证券化债券收应收未收
    BOND_CB_RECEIVE_DUE : '可转债债券收应收未收',//可转债债券收应收未收
    BOND_CB_DIS_RECEIVE_DUE : '贴现可转债债券收应收未收',//贴现可转债债券收应收未收
	
	BOND_TRANSFER_IN : '现券转入',//现券转入
	BOND_DIS_TRANSFER_IN : '贴现债现券转入',//贴现债现券转入
	BOND_ABS_TRANSFER_IN : '资产证券化债券现券转入',//资产证券化债券现券转入
	BOND_ABS_DIS_TRANSFER_IN : '贴现资产证券化债券现券转入',//贴现资产证券化债券现券转入
	BOND_CB_TRANSFER_IN : '可转债现券转入',//可转债现券转入
	BOND_CB_DIS_TRANSFER_IN : '贴现可转债现券转入',//贴现可转债现券转入
	
	BOND_TRANSFER_OUT : '现券转出',//现券转出
	BOND_DIS_TRANSFER_OUT : '贴现债现券转出',//贴现债现券转出
	BOND_ABS_TRANSFER_OUT : '资产证券化债券现券转出',//资产证券化债券现券转出
	BOND_ABS_DIS_TRANSFER_OUT : '贴现资产证券化债券现券转出',//贴现资产证券化债券现券转出
	BOND_CB_TRANSFER_OUT : '可转债现券转出',//可转债现券转出
	BOND_CB_DIS_TRANSFER_OUT : '贴现可转债现券转出',//贴现可转债现券转出
	
	DIRECT_FIN_IN : '直接融资买入',	//直接融资买入	
	DIRECT_FIN_DIS_IN : '贴现直接融资买入',	//贴现直接融资买入	
	DIRECT_FIN_ABS_IN : '资产证券化直接融资买入', //资产证券化直接融资买入	
	DIRECT_FIN_ABS_DIS_IN : '贴现资产证券化直接融资买入',	//贴现资产证券化直接融资买入	
	DIRECT_FIN_CB_IN : '可转直接融资买入',	//可转直接融资买入	
	DIRECT_FIN_CB_DIS_IN : '贴现可转直接融资买入',	//贴现可转直接融资买入

	DIRECT_FIN_OUT : '直接融资卖出',//直接融资卖出
	DIRECT_FIN_DIS_OUT : '贴现直接融资卖出',//贴现直接融资卖出
	DIRECT_FIN_ABS_OUT : '资产证券化直接融资卖出',//资产证券化直接融资卖出
	DIRECT_FIN_ABS_DIS_OUT : '贴现资产证券化直接融资卖出',//贴现资产证券化直接融资卖出
	DIRECT_FIN_CB_OUT : '可转直接融资卖出',//可转直接融资卖出
	DIRECT_FIN_CB_DIS_OUT : '贴现可转直接融资卖出',//贴现可转直接融资卖出
	
	DIRECT_FIN_RECEIVE_RI : '直接融资收息',//直接融资收息
	DIRECT_FIN_DIS_RECEIVE_RI : '贴现直接融资收息',//贴现直接融资收息
	DIRECT_FIN_ABS_RECEIVE_RI : '资产证券化直接融资收息',//资产证券化直接融资收息
	DIRECT_FIN_ABS_DIS_RECEIVE_RI : '贴现资产证券化直接融资收息',//贴现资产证券化直接融资收息
	DIRECT_FIN_CB_RECEIVE_RI : '可转直接融资收息',//可转直接融资收息
	DIRECT_FIN_CB_DIS_RECEIVE_RI : '贴现可转直接融资收息',//贴现可转直接融资收息
	
	DIRECT_FIN_END : '直接融资到期',//直接融资到期
	DIRECT_FIN_DIS_END : '贴现直接融资到期',//贴现直接融资到期
	DIRECT_FIN_ABS_END : '资产证券化直接融资到期',//资产证券化直接融资到期
	DIRECT_FIN_ABS_DIS_END : '贴现资产证券化直接融资到期',//贴现资产证券化直接融资到期
	DIRECT_FIN_CB_END : '可转直接融资到期',//可转直接融资到期
	DIRECT_FIN_CB_DIS_END : '贴现可转直接融资到期',//贴现可转直接融资到期
	
	DIRECT_FIN_TRANSFER_IN : '直接融资转入',//直接融资转入
	DIRECT_FIN_DIS_TRANSFER_IN : '贴现直接融资转入',//贴现直接融资转入
	DIRECT_FIN_ABS_TRANSFER_IN : '资产证券化直接融资转入',//资产证券化直接融资转入
	DIRECT_FIN_ABS_DIS_TRANSFER_IN : '贴现资产证券化直接融资转入',//贴现资产证券化直接融资转入
	DIRECT_FIN_CB_TRANSFER_IN : '可转直接融资转入',//可转直接融资转入
	DIRECT_FIN_CB_DIS_TRANSFER_IN : '贴现可转直接融资转入',//贴现可转直接融资转入
	
	DIRECT_FIN_TRANSFER_OUT : '直接融资转出',//直接融资转出
	DIRECT_FIN_DIS_TRANSFER_OUT : '贴现直接融资转出',//贴现直接融资转出
	DIRECT_FIN_ABS_TRANSFER_OUT : '资产证券化直接融资转出',//资产证券化直接融资转出
	DIRECT_FIN_ABS_DIS_TRANSFER_OUT : '贴现资产证券化直接融资转出',//贴现资产证券化直接融资转出
	DIRECT_FIN_CB_TRANSFER_OUT : '可转直接融资转出',//可转直接融资转出
	DIRECT_FIN_CB_DIS_TRANSFER_OUT : '贴现可转直接融资转出',//贴现可转直接融资转出
	
    CASHLB_IN : '非标债权买入',//非标债权买入
    CASHLB_OUT: '非标债权卖出',//非标债权卖出
    CASHLB_RECEIVE_RI : "非标债权收息",//非标债权收息
    CASHLB_RECEIVE_END : "非标债权到期",//非标债权到期
    CASHLB_RECEIVE_RI_WHENEVER : '非标债权随时收息',//非标债权随时收息
    CASHLB_TERMINATION : '非标债权提前终止',//非标债权提前终止
    CASHLB_RECEIVE_DUE : '非标债权收应收未收',//非标债权收应收未收
    
    
    PRODUCT_ISSUE : '理财产品发行',//理财产品发行
    PRODUCT_END : '理财产品到期',//理财产品到期
    
    PLEDGEREPO_OUT:'债券质押式正回购',//质押式正回购
    PLEDGEREPO_IN:'债券质押式逆回购',//质押式逆回购
    PLEDGEREPO_OUT_END:'质押式正回购到期',//质押式正回购到期
    PLEDGEREPO_IN_END:'质押式逆回购到期',//质押式逆回购到期
    PLEDGEREPO_OUT_RI_WHENEVER:'质押式正回购随时收息',//质押式正回购随时收息
    PLEDGEREPO_IN_RI_WHENEVER:'质押式逆回购随时收息',//质押式逆回购随时收息
    PLEDGEREPO_OUT_TERMINATION : '质押式正回购提前终止',//质押式正回购提前终止
    PLEDGEREPO_IN_TERMINATION : '质押式逆回购提前终止',//质押式逆回购提前终止
    PLEDGEREPO_OUT_RECEIVE_DUE : '质押式正回购收应收未收',//质押式正回购收应收未收
    PLEDGEREPO_IN_RECEIVE_DUE : '质押式逆回购收应收未收',//质押式逆回购收应收未收
    
    NOSTRO_IN : '存放同业活期存款',//存放同业存款
    NOSTRO_OUT : '存放同业活期取款',//存放同业取款
    NOSTRO_RECEIVE : "存放同业活期收息",//存放同业收息
    NOSTRO_RECEIVE_WHENEVER : "存放同业活期随时收息",//存放同业活期随时收息
    NOSTRO_CANCEL : '存放同业活期销户',//存放同业销户
    NOSTRO_CANCEL_ACC : '存放同业活期销户',//存放同业销户 销户分取本息和销账户2个不合并的指令包
    
    MONEYFUND_IN : '货币基金申购',//货币基金申购
    MONEYFUND_OUT : '货币基金赎回',//货币基金赎回

    HIGH_PRODUCT_ESTABLISH : '高频理财产品成立',// 成立
    HIGH_PRODUCT_PURCHASE :  '高频理财产品申购',// 申购
    HIGH_PRODUCT_REDEMPTION :'高频理财产品赎回',//赎回
    HIGH_PRODUCT_RECEIVE_RI :'高频理财产品付息',//付息
    HIGH_PRODUCT_RECEIVE_RI_WHENEVER :'高频理财产品随时付息',//随时付息

    PRODUCT_ESTABLISH : '理财产品成立',// 成立
    PRODUCT_PURCHASE : '理财产品申购',// 申购
    PRODUCT_REDEMPTION : '理财产品赎回',//赎回
    PRODUCT_RECEIVE_RI :'理财产品付息',//付息
    PRODUCT_RECEIVE_RI_WHENEVER :'理财产品随时付息',//随时付息
	PRODUCT_CARRY_FORWARD_IN :'理财产品利润结转',//利润结转
	PRODUCT_CARRY_FORWARD_OUT :'理财产品利润结转',//利润结转

    NOSTRO_DEPO : '存放同业定期', // 存放同业定期
    NOSTRO_DEPO_RECEIVE : '存放同业定期收息', // 存放同业定期收息
    NOSTRO_DEPO_RECEIVE_RI_WHENEVER : '存放同业定期随时收息', // 存放同业定期随时收息
    NOSTRO_DEPO_TERMINATION : '存放同业定期提前终止',//存放同业定期提前终止
    NOSTRO_DEPO_RECEIVE_DUE : '存放同业定期收应收未收',//存放同业定期收应收未收
    NOSTRO_DEPO_OUT : '存放同业定期到期', // 存放同业定期到期
    
    IBLEND_IN : '同业拆借 拆入', // 同业拆借 拆入
    IBLEND_OUT : '同业拆借 拆出', // 同业拆借 拆出
	IBLEND_IN_RECEIVE : '同业拆借拆入付息', //同业拆借拆入付息
	IBLEND_OUT_RECEIVE : '同业拆借拆出收息', //同业拆借拆出收息
	IBLEND_IN_RECEIVE_RI_WHENEVER : '同业拆借拆入随时付息', // 同业拆借拆入随时付息
	IBLEND_OUT_RECEIVE_RI_WHENEVER : '同业拆借拆出随时收息', // 同业拆借拆出随时收息
    IBLEND_IN_TERMINATION : '同业拆借拆入提前终止',//同业拆借拆入提前终止
    IBLEND_OUT_TERMINATION : '同业拆借拆出提前终止',//同业拆借拆出提前终止
    IBLEND_IN_RECEIVE_DUE : '同业拆借拆入收应收未收',//同业拆借拆入收应收未收
    IBLEND_OUT_RECEIVE_DUE : '同业拆借拆出收应收未收',//同业拆借拆出收应收未收
    
	IBLEND_IN_END : '同业拆借拆入到期', //同业拆借拆入到期
	IBLEND_OUT_END : '同业拆借拆出到期', //同业拆借拆出到期
	
	INNER_IBLEND_IN : '同业内部拆借 拆入', // 同业内部拆借 拆入
    INNER_IBLEND_OUT : '同业内部拆借 拆出', // 同业内部拆借 拆出
    INNER_IBLEND_IN_END : '同业内部拆借 拆入到期', // 同业内部拆借 拆入到期
    INNER_IBLEND_OUT_END : '同业内部拆借 拆出到期', // 同业内部拆借 拆出到期
    INNER_IBLEND_IN_RECEIVE : '同业内部拆借拆入付息', //同业内部拆借拆入付息
	INNER_IBLEND_OUT_RECEIVE : '同业内部拆借拆出收息', //同业内部拆借拆出收息
	INNER_IBLEND_IN_RECEIVE_RI_WHENEVER : '同业内部拆借拆入随时付息', // 同业内部拆借拆入随时付息
	INNER_IBLEND_OUT_RECEIVE_RI_WHENEVER : '同业内部拆借拆出随时收息', // 同业内部拆借拆出随时收息
    INNER_IBLEND_IN_TERMINATION : '同业内部拆借拆入提前终止',//同业内部拆借拆入提前终止
    INNER_IBLEND_OUT_TERMINATION : '同业内部拆借拆出提前终止',//同业内部拆借拆出提前终止
    INNER_IBLEND_IN_RECEIVE_DUE : '同业内部拆借拆入收应收未收',//同业内部拆借拆入收应收未收
    INNER_IBLEND_OUT_RECEIVE_DUE : '同业内部拆借拆出收应收未收',//同业内部拆借拆出收应收未收
    
    BILLREPO_OUT : '票据正回购', // 票据正回购
    BILLREPO_IN : '票据逆回购', // 票据逆回购
    BILLREPO_OUT_END : '票据正回购到期', // 票据正回购到期
    BILLREPO_IN_END : '票据逆回购到期', // 票据逆回购到期
    BILLREPO_OUT_RECEIVE_RI_WHENEVER : '票据正回购随时付息', // 票据正回购随时付息
    BILLREPO_IN_RECEIVE_RI_WHENEVER : '票据逆回购随时收息', // 票据逆回购随时收息
    BILL_IN : '票据买入', // 票据买入
    BILL_OUT : '票据卖出', // 票据卖出
    BILL_OUT_END : '票据到期', // 票据到期
    
    PRODUCT_FEE_ISSUE: '费用首期',//费用首期
    PRODUCT_FEE_END: '费用到期',//费用到期
    PRODUCT_FEE_RECEIVE: '费用支付',//费用支付
    PRODUCT_FEE_RECEIVE_WHENEVER: '提前支付费用',//提前支付费用
    
    ONE_OFF_FEE_IN : '一次性费用收取',//一次性费用收取
    ONE_OFF_FEE_OUT : '一次性费用支出',//一次性费用支出
    
    AGENCY_FEE_RECEIVE_OUT : '一次性费用代收开仓',//一次性费用代收开仓
    AGENCY_FEE_RECEIVE_IN : '一次性费用代收平仓',//一次性费用代收平仓
    AGENCY_FEE_PAY_IN : '一次性费用代付开仓',//一次性费用代付开仓
    AGENCY_FEE_PAY_OUT : '一次性费用代付平仓',//一次性费用代付平仓

    //CONTRACT_TRANSFER_LONG_IN: '012681',// 合约类:逆回购的转入,存放同业定期转出
    //CONTRACT_TRANSFER_LONG_OUT: '012680',// 合约类:逆回购的转出,存放同业定期转入
    //CONTRACT_TRANSFER_SHORT_IN: '012691',// 合约类:正回购的转入
    //CONTRACT_TRANSFER_SHORT_OUT: '012690',//合约类:正回购的转出

    PLEDGEREPO_TRANSFER_LONG_IN: '逆回购的转入',//逆回购的转入
    PLEDGEREPO_TRANSFER_LONG_OUT: '逆回购的转出',//逆回购的转出
    PLEDGEREPO_TRANSFER_SHORT_IN: '正回购的转入',//正回购的转入
    PLEDGEREPO_TRANSFER_SHORT_OUT: '正回购的转出',//正回购的转出
    OUTRIGHTREPO_TRANSFER_LONG_IN: '逆回购的转入',//逆回购的转入
    OUTRIGHTREPO_TRANSFER_LONG_OUT: '逆回购的转出',//逆回购的转出
    OUTRIGHTREPO_TRANSFER_SHORT_IN: '正回购的转入',//正回购的转入
    OUTRIGHTREPO_TRANSFER_SHORT_OUT: '正回购的转出',//正回购的转出
    BILLREPO_TRANSFER_LONG_IN: '逆回购的转入',// 逆回购的转入
    BILLREPO_TRANSFER_LONG_OUT: '逆回购的转出',//逆回购的转出
    BILLREPO_TRANSFER_SHORT_IN: '正回购的转入',//正回购的转入
    BILLREPO_TRANSFER_SHORT_OUT: '正回购的转出',//正回购的转出
    IBLEND_TRANSFER_SHORT_IN: '拆入转入',// 拆入转入
    IBLEND_TRANSFER_SHORT_OUT: '拆入转出',// 拆入转出
    IBLEND_TRANSFER_LONG_IN: '拆出转入',// 拆出转入
    IBLEND_TRANSFER_LONG_OUT: '拆出转出',//拆出转出

    NOSTRO_DEPO_TRANSFER_OUT: '存放同业定期转出',//存放同业定期转出
    NOSTRO_DEPO_TRANSFER_IN: '存放同业定期转入',//存放同业定期转入

    MONEYFUND_TRANSFER_OUT: '货币基金转出',//货币基金转出
    MONEYFUND_TRANSFER_IN: '货币基金转入',//货币基金转入

    NOSTRO_PREFIX_TRANSFER_OUT: '存放同业活期转出',//活期转出
    NOSTRO_PREFIX_TRANSFER_IN: '存放同业活期转入',//活期转入

    PRODUCT_FEE_TRANSFER_OUT: '费用转出',//费用转出
    PRODUCT_FEE_TRANSFER_IN: '费用转入',//费用转入
    
    OUTRIGHTREPO_OUT:'债券买断式正回购',//买断式正回购(债券)
    OUTRIGHTREPO_IN:'债券买断式逆回购',//买断式逆回购(债券)
    OUTRIGHT_OUT_RECEIVE:'买断式正回购标的券付息(债券)',//买断式正回购标的券付息(债券)
	OUTRIGHT_IN_RECEIVE:'买断式逆回购标的券付息(债券)',//买断式逆回购标的券付息(债券)
	OUTRIGHT_REPO_OUT_END:'买断式正回购到期(债券)',//买断式正回购到期(债券)
	OUTRIGHT_REPO_IN_END:'买断式逆回购到期(债券)',//买断式逆回购到期(债券)
    
    OUTRIGHTREPO_OUT_LBS:'其他资产买断式正回购(其他利率型项目资产)',//买断式正回购(其他利率型项目资产)
    OUTRIGHTREPO_IN_LBS:'其他资产买断式逆回购(其他利率型项目资产)',//买断式逆回购(其他利率型项目资产)
    OUTRIGHT_OUT_RECEIVE_LBS:'买断式正回购标的券付息(其他利率型项目资产)',//买断式正回购标的券付息(其他利率型项目资产)
	OUTRIGHT_IN_RECEIVE_LBS:'买断式逆回购标的券付息(其他利率型项目资产)',//买断式逆回购标的券付息(其他利率型项目资产)
	OUTRIGHT_REPO_OUT_END_LBS:'买断式正回购到期(其他利率型项目资产)',//买断式正回购到期(其他利率型项目资产)
	OUTRIGHT_REPO_IN_END_LBS:'买断式逆回购到期(其他利率型项目资产)',//买断式逆回购到期(其他利率型项目资产)
	
	FWD_BOND_IN:'债券远期买入',//债券远期买入
	FWD_BOND_IN_END:'债券远期买入到期',//债券远期买入到期
	FWD_BOND_OUT:'债券远期卖出',//债券远期卖出
	FWD_BOND_OUT_END:'债券远期卖出到期',//债券远期卖出到期
	
	FWD_BOND_TRANSFER_LONG_OUT:'债券远期多头转出',
	FWD_BOND_TRANSFER_LONG_IN:'债券远期多头转入',
	FWD_BOND_TRANSFER_SHORT_OUT:'债券远期空头转出',
	FWD_BOND_TRANSFER_SHORT_IN:'债券远期空头转入',
	
	FWD_IR_FST_L:'多头利率远期首期（支付固定）',
	FWD_IR_END_L:'多头利率远期到期',
	FWD_IR_FST_S:'空头利率远期首期（支付浮动）',
	FWD_IR_END_S:'空头利率远期到期',
	
	FWD_IR_TRANSFER_LONG_OUT:'利率远期多头(支付固定)转出',
	FWD_IR_TRANSFER_LONG_IN:'利率远期多头(支付固定)转入',
	FWD_IR_TRANSFER_SHORT_OUT:'利率远期空头(支付浮动)转出',
	FWD_IR_TRANSFER_SHORT_IN:'利率远期空头(支付浮动)转入',


	FWD_XR_IN:'外汇远期买入',
	FWD_XR_OUT:'外汇远期卖出',
	FWD_XR_IN_END:'外汇远期买入到期',
	FWD_XR_OUT_END:'外汇远期卖出到期',
	
	SWAP_XR_IN:'外汇掉期买/卖首期',
	SWAP_XR_OUT:'外汇掉期卖/买首期',
	SWAP_XR_IN_NEAR:'外汇掉期买/卖近端交割',
	SWAP_XR_IN_FAR:'外汇掉期买/卖远端交割',
	SWAP_XR_OUT_NEAR:'外汇掉期卖/买近端交割',
	SWAP_XR_OUT_FAR:'外汇掉期卖/买远端交割',

	
	SWP_IR_FST_L:'多头利率互换首期（支付浮动）',
	SWP_IR_FST_S:'空头利率互换首期（支付固定）',
	SWP_IR_RECEIVE_L:'多头利率互换收息',
	SWP_IR_RECEIVE_S:'空头利率互换收息',
	SWP_IR_END_L:'多头利率互换到期',
	SWP_IR_END_S:'空头利率互换到期',
    SWP_IR_TERMINATION_L : '多头利率互换(支付浮动收取固定)提前终止',
    SWP_IR_TERMINATION_S : '空头利率互换(支付固定收取浮动)提前终止',
	SWP_IR_TRANSFER_LONG_OUT:'利率互换多头(支付浮动)转出',
	SWP_IR_TRANSFER_LONG_IN:'利率互换多头(支付浮动)转入',
	SWP_IR_TRANSFER_SHORT_OUT:'利率互换空头(支付固定)转出',
	SWP_IR_TRANSFER_SHORT_IN:'利率互换空头(支付固定)转入',
	
	NTP_IN:'净值资产交易买入',
	NTP_OUT:'净值资产交易卖出',
	NTP_RECEIVE:'净值资产分红',
	CASHLB_TRANSFER_IN : '非标债权转入',	
	CASHLB_TRANSFER_OUT : '非标债权转出',	
	BILL_TRANSFER_IN : '票据转入', 
	BILL_TRANSFER_OUT : '票据转出', 
    NWM_PRODUCT_ESTABLISH:'净值型理财产品成立',
    NWM_PRODUCT_PURCHASE:'净值型理财产品申购',
    NWM_PRODUCT_REDEMPTION:'净值型理财产品赎回',
    NWM_PRODUCT_RECEIVE:'净值型理财产品分红',
	TRADE_INNER : '内部交易',
	DUE_TRAN_RCV_OUT : '应收款转出', 
	DUE_TRAN_RCV_IN : '应收款转入', 
	DUE_TRAN_PAY_IN : '应付款转出', 
	DUE_TRAN_PAY_OUT : '应付款转入',
	
	XR_IN : '即期买入',
	XR_OUT : '即期卖出',
	
	ASSETS_FEE_OUT : "资产费用卖出",
	ASSETS_FEE_IN : "资产费用买入",
	ASSETS_FEE_RECEIVE_RI : "资产费用收取",
    ASSETS_FEE_RECEIVE_RI_S : "资产费用支付",
    ASSETS_FEE_RECEIVE_END : "资产费用到期收取",
    ASSETS_FEE_RECEIVE_END_S : "资产费用到期支付",
    ASSETS_FEE_RECEIVE_RI_WHENEVER : "资产费用提前收取",
    ASSETS_FEE_RECEIVE_RI_WHENEVER_S : "资产费用提前支付",
    ASSETS_FEE_RECEIVE_DUE : "资产费用收应收未收",
    ASSETS_FEE_RECEIVE_DUE_S : "资产费用付应付未付",
    
    TRADE_MIXED : '合并',
    
    TRADE_MIXED_IN : '合并付',
    TRADE_MIXED_OUT : '合并收',
    
    TRADE_RECEIVE_DUE_IN_MIXED : '合并收应收未收',
	TRADE_RECEIVE_DUE_OUT_MIXED : '合并付应付未付'
};
/**
 * 业务类型代码
 */
var tradeTypeCode = {
	BOND_IN : '0000000',	//现券买入
	BOND_DIS_IN : '0001000',	//贴现债现券买入
	BOND_ABS_IN : '1100000',	//资产证券化债券现券买入
	BOND_ABS_DIS_IN : '1101000',	//贴现资产证券化债券现券买入
	BOND_CB_IN : '1200000',	//可转债现券买入
	BOND_CB_DIS_IN : '1201000',	//贴现可转债现券买入
	
	BOND_OUT : '0000001',	//现券卖出
	BOND_DIS_OUT : '0001001',	//贴现债现券卖出
	BOND_ABS_OUT : '1100001',	//资产证券化债券现券卖出
	BOND_ABS_DIS_OUT : '1101001',	//贴现资产证券化债券现券卖出
	BOND_CB_OUT : '1200001',	//可转债现券卖出
	BOND_CB_DIS_OUT : '1201001',	//贴现可转债现券卖出
	
	BOND_RECEIVE_RI : '0000201',//债券收息
	BOND_DIS_RECEIVE_RI : '0001201',//贴现债债券收息
	BOND_ABS_RECEIVE_RI : '1100201',//资产证券化债券债券收息
	BOND_ABS_DIS_RECEIVE_RI : '1101201',//贴现资产证券化债券债券收息
	BOND_CB_RECEIVE_RI : '1200201',//可转债债券收息
	BOND_CB_DIS_RECEIVE_RI : '1201201',//贴现可转债债券收息
	
	BOND_END : '0000301',//债券到期
	BOND_DIS_END : '0001301',//贴现债债券到期
	BOND_ABS_END : '1100301',//资产证券化债券债券到期
	BOND_ABS_DIS_END : '1101301',//贴现资产证券化债券债券到期
	BOND_CB_END : '1200301',//可转债债券到期
	BOND_CB_DIS_END : '1201301',//贴现可转债债券到期
	
	BOND_RECEIVE_RI_WHENEVER : '0000211',//债券随时收息
	BOND_DIS_RECEIVE_RI_WHENEVER : '0001211',//贴现债债券随时收息
	BOND_ABS_RECEIVE_RI_WHENEVER : '1100211',//资产证券化债券随时收息
	BOND_ABS_DIS_RECEIVE_RI_WHENEVER : '1101211',//贴现资产证券化债券随时收息
	BOND_CB_RECEIVE_RI_WHENEVER : '1200211',//可转债债券随时收息
	BOND_CB_DIS_RECEIVE_RI_WHENEVER : '1201211',//贴现可转债债券随时收息
	
    BOND_RECEIVE_DUE : '0000231',//债券收应收未收
    BOND_DIS_RECEIVE_DUE : '0001231',//贴现债债券收应收未收
    BOND_ABS_RECEIVE_DUE : '1100231',//资产证券化债券收应收未收
    BOND_ABS_DIS_RECEIVE_DUE : '1101231',//贴现资产证券化债券收应收未收
    BOND_CB_RECEIVE_DUE : '1200231',//可转债债券收应收未收
    BOND_CB_DIS_RECEIVE_DUE : '1201231',//贴现可转债债券收应收未收
	
	BOND_TRANSFER_IN : '0000400',//现券转入
	BOND_DIS_TRANSFER_IN : '0001400',//贴现债现券转入
	BOND_ABS_TRANSFER_IN : '1100400',//资产证券化债券现券转入
	BOND_ABS_DIS_TRANSFER_IN : '1101400',//贴现资产证券化债券现券转入
	BOND_CB_TRANSFER_IN : '1200400',//可转债现券转入
	BOND_CB_DIS_TRANSFER_IN : '1201400',//贴现可转债现券转入
	
	BOND_TRANSFER_OUT : '0000401',//现券转出
	BOND_DIS_TRANSFER_OUT : '0001401',//贴现债现券转出
	BOND_ABS_TRANSFER_OUT : '1100401',//资产证券化债券现券转出
	BOND_ABS_DIS_TRANSFER_OUT : '1101401',//贴现资产证券化债券现券转出
	BOND_CB_TRANSFER_OUT : '1200401',//可转债现券转出
	BOND_CB_DIS_TRANSFER_OUT : '1201401',//贴现可转债现券转出
	
	DIRECT_FIN_IN : '0005000',	//直接融资买入	
	DIRECT_FIN_DIS_IN : '0006000',	//贴现直接融资买入	
	DIRECT_FIN_ABS_IN : '1105000', //资产证券化直接融资买入	
	DIRECT_FIN_ABS_DIS_IN : '1106000',	//贴现资产证券化直接融资买入	
	DIRECT_FIN_CB_IN : '1205000',	//可转直接融资买入	
	DIRECT_FIN_CB_DIS_IN : '1206000',	//贴现可转直接融资买入

	DIRECT_FIN_OUT : '0005001',//直接融资卖出
	DIRECT_FIN_DIS_OUT : '0006001',//贴现直接融资卖出
	DIRECT_FIN_ABS_OUT : '1105001',//资产证券化直接融资卖出
	DIRECT_FIN_ABS_DIS_OUT : '1106001',//贴现资产证券化直接融资卖出
	DIRECT_FIN_CB_OUT : '1205001',//可转直接融资卖出
	DIRECT_FIN_CB_DIS_OUT : '1206001',//贴现可转直接融资卖出
	
	DIRECT_FIN_RECEIVE_RI : '0005201',//直接融资收息
	DIRECT_FIN_DIS_RECEIVE_RI : '0006201',//贴现直接融资收息
	DIRECT_FIN_ABS_RECEIVE_RI : '1105201',//资产证券化直接融资收息
	DIRECT_FIN_ABS_DIS_RECEIVE_RI : '1106201',//贴现资产证券化直接融资收息
	DIRECT_FIN_CB_RECEIVE_RI : '1205201',//可转直接融资收息
	DIRECT_FIN_CB_DIS_RECEIVE_RI : '1206201',//贴现可转直接融资收息
	
	DIRECT_FIN_END : '0005301',//直接融资到期
	DIRECT_FIN_DIS_END : '0006301',//贴现直接融资到期
	DIRECT_FIN_ABS_END : '1105301',//资产证券化直接融资到期
	DIRECT_FIN_ABS_DIS_END : '1106301',//贴现资产证券化直接融资到期
	DIRECT_FIN_CB_END : '1205301',//可转直接融资到期
	DIRECT_FIN_CB_DIS_END : '1206301',//贴现可转直接融资到期
	
	DIRECT_FIN_TRANSFER_IN : '0005400',//直接融资转入
	DIRECT_FIN_DIS_TRANSFER_IN : '0006400',//贴现直接融资转入
	DIRECT_FIN_ABS_TRANSFER_IN : '1105400',//资产证券化直接融资转入
	DIRECT_FIN_ABS_DIS_TRANSFER_IN : '1106400',//贴现资产证券化直接融资转入
	DIRECT_FIN_CB_TRANSFER_IN : '1205400',//可转直接融资转入
	DIRECT_FIN_CB_DIS_TRANSFER_IN : '1206400',//贴现可转直接融资转入
	
	DIRECT_FIN_TRANSFER_OUT : '0005401',//直接融资转出
	DIRECT_FIN_DIS_TRANSFER_OUT : '0006401',//贴现直接融资转出
	DIRECT_FIN_ABS_TRANSFER_OUT : '1105401',//资产证券化直接融资转出
	DIRECT_FIN_ABS_DIS_TRANSFER_OUT : '1106401',//贴现资产证券化直接融资转出
	DIRECT_FIN_CB_TRANSFER_OUT : '1205401',//可转直接融资转出
	DIRECT_FIN_CB_DIS_TRANSFER_OUT : '1206401',//贴现可转直接融资转出
	
    CASHLB_IN : '0100000',//非标债权买入
    CASHLB_OUT: '0100001',//非标债权卖出
    CASHLB_RECEIVE_RI : "0100201",//非标债权收息
    CASHLB_RECEIVE_END : "0100301",//非标债权到期
    CASHLB_RECEIVE_RI_WHENEVER : '0100211',//非标债权随时收息
    CASHLB_TERMINATION : '0100221',//非标债权提前终止
    CASHLB_RECEIVE_DUE : '0100231',//非标债权收应收未收
    
    
    PRODUCT_ISSUE : '0105000',//理财产品发行
    PRODUCT_END : '0105301',//理财产品到期
    
    PLEDGEREPO_OUT:'0123101',//质押式正回购
    PLEDGEREPO_IN:'0123100',//质押式逆回购
    PLEDGEREPO_OUT_END:'0123300',//质押式正回购到期
    PLEDGEREPO_IN_END:'0123301',//质押式逆回购到期
    PLEDGEREPO_OUT_RI_WHENEVER:'0123210',//质押式正回购随时收息
    PLEDGEREPO_IN_RI_WHENEVER:'0123211',//质押式逆回购随时收息
    PLEDGEREPO_OUT_TERMINATION : '0123220',//质押式正回购提前终止
    PLEDGEREPO_IN_TERMINATION : '0123221',//质押式逆回购提前终止
    PLEDGEREPO_OUT_RECEIVE_DUE : '0123230',//质押式正回购收应收未收
    PLEDGEREPO_IN_RECEIVE_DUE : '0123231',//质押式逆回购收应收未收
    
    NOSTRO_IN : '0300010',//存放同业存款
    NOSTRO_OUT : '0300011',//存放同业取款
    NOSTRO_RECEIVE : "0300201",//存放同业收息
    NOSTRO_RECEIVE_WHENEVER : "0300211",//存放同业活期随时收息
    NOSTRO_CANCEL : '0300311',//存放同业销户
    NOSTRO_CANCEL_ACC : '0300301',//存放同业销户 销户分取本息和销账户2个不合并的指令包，
    
    MONEYFUND_IN : '0400000',//货币基金申购
    MONEYFUND_OUT : '0400001',//货币基金赎回

    HIGH_PRODUCT_ESTABLISH : '0301100',// 成立
    HIGH_PRODUCT_PURCHASE :  '0301000',// 申购
    HIGH_PRODUCT_REDEMPTION :'0301001',//赎回
    HIGH_PRODUCT_RECEIVE_RI :'0301200',//付息
    HIGH_PRODUCT_RECEIVE_RI_WHENEVER :'0301210',//随时付息

    PRODUCT_ESTABLISH : '0105100',// 成立
    PRODUCT_PURCHASE : '0105000',// 申购
    PRODUCT_REDEMPTION : '0105001',//赎回
    PRODUCT_RECEIVE_RI :'0105200',//付息
    PRODUCT_RECEIVE_RI_WHENEVER :'0105210',//随时付息
	PRODUCT_CARRY_FORWARD_IN :'0105010',//利润结转
	PRODUCT_CARRY_FORWARD_OUT :'0105011',//利润结转

    NOSTRO_DEPO : '0121100', // 存放同业定期
    NOSTRO_DEPO_RECEIVE : '0121201', // 存放同业定期收息
    NOSTRO_DEPO_RECEIVE_RI_WHENEVER : '0121211', // 存放同业定期随时收息
    NOSTRO_DEPO_TERMINATION : '0121221',//存放同业定期提前终止
    NOSTRO_DEPO_RECEIVE_DUE : '0121231',//存放同业定期收应收未收
    NOSTRO_DEPO_OUT : '0121301', // 存放同业定期到期
    
    IBLEND_IN : '0122101', // 同业拆借 拆入
    IBLEND_OUT : '0122100', // 同业拆借 拆出
	IBLEND_IN_RECEIVE : '0122200', //同业拆借拆入付息
	IBLEND_OUT_RECEIVE : '0122201', //同业拆借拆出收息
	IBLEND_IN_RECEIVE_RI_WHENEVER : '0122210', // 同业拆借拆入随时付息
	IBLEND_OUT_RECEIVE_RI_WHENEVER : '0122211', // 同业拆借拆出随时收息
    IBLEND_IN_TERMINATION : '0122220',//同业拆借拆入提前终止
    IBLEND_OUT_TERMINATION : '0122221',//同业拆借拆出提前终止
    IBLEND_IN_RECEIVE_DUE : '0122230',//同业拆借拆入收应收未收
    IBLEND_OUT_RECEIVE_DUE : '0122231',//同业拆借拆出收应收未收
    
	IBLEND_IN_END : '0122300', //同业拆借拆入到期
	IBLEND_OUT_END : '0122301', //同业拆借拆出到期
	
	INNER_IBLEND_IN : '0132101', // 同业内部拆借 拆入
    INNER_IBLEND_OUT : '0132100', // 同业内部拆借 拆出
    INNER_IBLEND_IN_END : '0132300', // 同业内部拆借 拆入到期
    INNER_IBLEND_OUT_END : '0132301', // 同业内部拆借 拆出到期
    INNER_IBLEND_IN_RECEIVE : '0132200', //同业内部拆借拆入付息
	INNER_IBLEND_OUT_RECEIVE : '0132201', //同业内部拆借拆出收息
	INNER_IBLEND_IN_RECEIVE_RI_WHENEVER : '0132210', // 同业内部拆借拆入随时付息
	INNER_IBLEND_OUT_RECEIVE_RI_WHENEVER : '0132211', // 同业内部拆借拆出随时收息
    INNER_IBLEND_IN_TERMINATION : '0132220',//同业内部拆借拆入提前终止
    INNER_IBLEND_OUT_TERMINATION : '0132221',//同业内部拆借拆出提前终止
    INNER_IBLEND_IN_RECEIVE_DUE : '0132230',//同业内部拆借拆入收应收未收
    INNER_IBLEND_OUT_RECEIVE_DUE : '0132231',//同业内部拆借拆出收应收未收
    
    BILLREPO_OUT : '0124101', // 票据正回购
    BILLREPO_IN : '0124100', // 票据逆回购
    BILLREPO_OUT_END : '0124300', // 票据正回购到期
    BILLREPO_IN_END : '0124301', // 票据逆回购到期
    BILLREPO_OUT_RECEIVE_RI_WHENEVER : '0124210', // 票据正回购随时付息
    BILLREPO_IN_RECEIVE_RI_WHENEVER : '0124211', // 票据逆回购随时收息
    BILL_IN : '0103000', // 票据买入
    BILL_OUT : '0103001', // 票据卖出
    BILL_OUT_END : '0103301', // 票据到期
    
    PRODUCT_FEE_ISSUE: '0302101',//费用首期
    PRODUCT_FEE_END: '0302300',//费用到期
    PRODUCT_FEE_RECEIVE: '0302200',//费用支付
    PRODUCT_FEE_RECEIVE_WHENEVER: '0302210',//提前支付费用
    
    ONE_OFF_FEE_IN : '0802100',//一次性费用收取
    ONE_OFF_FEE_OUT : '0801101',//一次性费用支出
    
    AGENCY_FEE_RECEIVE_OUT : '0802001',//一次性费用代收开仓
    AGENCY_FEE_RECEIVE_IN : '0802000',//一次性费用代收平仓
    AGENCY_FEE_PAY_IN : '0801000',//一次性费用代付开仓
    AGENCY_FEE_PAY_OUT : '0801001',//一次性费用代付平仓

    //CONTRACT_TRANSFER_LONG_IN: '012681',// 合约类:逆回购的转入,存放同业定期转出
    //CONTRACT_TRANSFER_LONG_OUT: '012680',// 合约类:逆回购的转出,存放同业定期转入
    //CONTRACT_TRANSFER_SHORT_IN: '012691',// 合约类:正回购的转入
    //CONTRACT_TRANSFER_SHORT_OUT: '012690',//合约类:正回购的转出

    PLEDGEREPO_TRANSFER_LONG_IN: '0123410',//逆回购的转入
    PLEDGEREPO_TRANSFER_LONG_OUT: '0123411',//逆回购的转出
    PLEDGEREPO_TRANSFER_SHORT_IN: '0123420',//正回购的转入
    PLEDGEREPO_TRANSFER_SHORT_OUT: '0123421',//正回购的转出
    OUTRIGHTREPO_TRANSFER_LONG_IN: '0223410',//逆回购的转入
    OUTRIGHTREPO_TRANSFER_LONG_OUT: '0223421',//逆回购的转出
    OUTRIGHTREPO_TRANSFER_SHORT_IN: '0223420',//正回购的转入
    OUTRIGHTREPO_TRANSFER_SHORT_OUT: '0223421',//正回购的转出
    BILLREPO_TRANSFER_LONG_IN: '0124410',// 逆回购的转入
    BILLREPO_TRANSFER_LONG_OUT: '0124411',//逆回购的转出
    BILLREPO_TRANSFER_SHORT_IN: '0124420',//正回购的转入
    BILLREPO_TRANSFER_SHORT_OUT: '0124421',//正回购的转出
    IBLEND_TRANSFER_SHORT_IN: '0122420',// 拆入转入
    IBLEND_TRANSFER_SHORT_OUT: '0122421',// 拆入转出
    IBLEND_TRANSFER_LONG_IN: '0122410',// 拆出转入
    IBLEND_TRANSFER_LONG_OUT: '0122411',//拆出转出

    NOSTRO_DEPO_TRANSFER_OUT: '0121411',//存放同业定期转出
    NOSTRO_DEPO_TRANSFER_IN: '0121410',//存放同业定期转入

    MONEYFUND_TRANSFER_OUT: '0400411',//货币基金转出
    MONEYFUND_TRANSFER_IN: '0400410',//货币基金转入

    NOSTRO_PREFIX_TRANSFER_OUT: '0300411',//活期转出
    NOSTRO_PREFIX_TRANSFER_IN: '0300410',//活期转入

    PRODUCT_FEE_TRANSFER_OUT: '0302421',//费用转出
    PRODUCT_FEE_TRANSFER_IN: '0302420',//费用转入
    
    OUTRIGHTREPO_OUT:'0220101',//买断式正回购(债券)
    OUTRIGHTREPO_IN:'0220100',//买断式逆回购(债券)
    OUTRIGHT_OUT_RECEIVE:'0220200',//买断式正回购标的券付息(债券)
	OUTRIGHT_IN_RECEIVE:'0220201',//买断式逆回购标的券付息(债券)
	OUTRIGHT_REPO_OUT_END:'0220300',//买断式正回购到期(债券)
	OUTRIGHT_REPO_IN_END:'0220301',//买断式逆回购到期(债券)
    
    OUTRIGHTREPO_OUT_LBS:'1020101',//买断式正回购(其他利率型项目资产)
    OUTRIGHTREPO_IN_LBS:'1020100',//买断式逆回购(其他利率型项目资产)
    OUTRIGHT_OUT_RECEIVE_LBS:'1020200',//买断式正回购标的券付息(其他利率型项目资产)
	OUTRIGHT_IN_RECEIVE_LBS:'1020201',//买断式逆回购标的券付息(其他利率型项目资产)
	OUTRIGHT_REPO_OUT_END_LBS:'1020300',//买断式正回购到期(其他利率型项目资产)
	OUTRIGHT_REPO_IN_END_LBS:'1020301',//买断式逆回购到期(其他利率型项目资产)
	
	FWD_BOND_IN:'0204100',//债券远期买入
	FWD_BOND_IN_END:'0204301',//债券远期买入到期
	FWD_BOND_OUT:'0204101',//债券远期卖出
	FWD_BOND_OUT_END:'0204300',//债券远期卖出到期
	
	FWD_BOND_TRANSFER_LONG_OUT:'0204411',//债券远期多头转出
	FWD_BOND_TRANSFER_LONG_IN:'0204410',//债券远期多头转入
	FWD_BOND_TRANSFER_SHORT_OUT:'0204421',//债券远期空头转出
	FWD_BOND_TRANSFER_SHORT_IN:'0204420',//债券远期空头转入
	
	FWD_IR_FST_L:'0600100',//多头利率远期首期（支付固定）
	FWD_IR_END_L:'0600301',//多头利率远期到期
	FWD_IR_FST_S:'0600101',//空头利率远期首期（支付浮动）
	FWD_IR_END_S:'0600300',//空头利率远期到期
	
	FWD_IR_TRANSFER_LONG_OUT:'0600411',//利率远期多头(支付固定)转出
	FWD_IR_TRANSFER_LONG_IN:'0600410',//利率远期多头(支付固定)转入
	FWD_IR_TRANSFER_SHORT_OUT:'0600421',//利率远期空头(支付浮动)转出
	FWD_IR_TRANSFER_SHORT_IN:'0600420',//利率远期空头(支付浮动)转入
	
	SWP_IR_FST_L:'0500100',//多头利率互换首期（支付浮动）
	SWP_IR_FST_S:'0500101',//空头利率互换首期（支付固定）
	SWP_IR_RECEIVE_L:'0500201',//多头利率互换收息
	SWP_IR_RECEIVE_S:'0500200',//空头利率互换收息
	SWP_IR_END_L:'0500301',//多头利率互换到期
	SWP_IR_END_S:'0500300',//空头利率互换到期
    SWP_IR_TERMINATION_L : '0500221',//多头利率互换(支付浮动收取固定)提前终止
    SWP_IR_TERMINATION_S : '0500220',//空头利率互换(支付固定收取浮动)提前终止
	SWP_IR_TRANSFER_LONG_OUT:'0500411',//利率互换多头(支付浮动)转出
	SWP_IR_TRANSFER_LONG_IN:'0500410',//利率互换多头(支付浮动)转入
	SWP_IR_TRANSFER_SHORT_OUT:'0500421',//利率互换空头(支付固定)转出
	SWP_IR_TRANSFER_SHORT_IN:'0500420',//利率互换空头(支付固定)转入
	
	NTP_IN:'0700000',//净值资产交易买入
	NTP_OUT:'0700001',//净值资产交易卖出
	NTP_RECEIVE:'0700241',//净值资产分红
	
	CASHLB_TRANSFER_IN : '0100400',	//非标债权转入
	CASHLB_TRANSFER_OUT : '0100401',	//非标债权转出
	BILL_TRANSFER_IN : '0103410', // 票据转入
	BILL_TRANSFER_OUT : '0103411', // 票据转出

    NWM_PRODUCT_ESTABLISH:'0900101',//净值型理财产品成立
    NWM_PRODUCT_PURCHASE:'0900001',//净值型理财产品申购
    NWM_PRODUCT_REDEMPTION:'0900000',//净值型理财产品赎回
    NWM_PRODUCT_RECEIVE:'0900200',//净值型理财产品分红

	TRADE_INNER : '9999409',
	
	// 应收应付款转让
	DUE_TRAN_RCV_OUT : '9001411', // 应收款转出
	DUE_TRAN_RCV_IN : '9001410', // 应收款转入
	DUE_TRAN_PAY_IN : '9002420', // 应付款转出
	DUE_TRAN_PAY_OUT : '9002421', // 应付款转入
	XR_IN : '1301000', // 外汇买入
	XR_OUT : '1301001', // 外汇卖出
	
	ASSETS_FEE_RECEIVE_RI : "0141201",//资产费用收取
    ASSETS_FEE_RECEIVE_RI_S : "0141200",//资产费用支付
    ASSETS_FEE_RECEIVE_END : "0141301",//资产费用到期收取
    ASSETS_FEE_RECEIVE_END_S : "0141300",//资产费用到期支付
    ASSETS_FEE_RECEIVE_RI_WHENEVER : "0141211",//资产费用随时收取
    ASSETS_FEE_RECEIVE_RI_WHENEVER_S : "0141210",//资产费用随时支付
    ASSETS_FEE_RECEIVE_DUE : "0141231",//资产费用收应收未收
    ASSETS_FEE_RECEIVE_DUE_S : "0141230",//资产费用付应付未付
    ASSETS_FEE_OUT : "0141001",//资产费用卖出
    ASSETS_FEE_IN : "0141000",//资产费用买入
    
    TRADE_MIXED : '9999902',
    TRADE_MIXED_IN : '9999900',
    TRADE_MIXED_OUT : '9999901',
    
    TRADE_RECEIVE_DUE_IN_MIXED : '9999231',
    TRADE_RECEIVE_DUE_OUT_MIXED : '9999230',

	FWD_XR_IN:'1401100', //外汇远期买入
	FWD_XR_OUT:'1401101',//外汇远期卖出
	FWD_XR_IN_END:'1401300',//外汇远期买入到期
	FWD_XR_OUT_END:'1401301',//外汇远期卖出到期
	
	SWAP_XR_IN:'1501100',//外汇掉期买/卖首期
	SWAP_XR_IN_NEAR:'1501510',//外汇掉期买/卖近端交割
	SWAP_XR_IN_FAR:'1501520',//外汇掉期买/卖远端交割
	SWAP_XR_OUT:'1501101',//外汇掉期卖/买首期
	SWAP_XR_OUT_NEAR:'1501511',//外汇掉期卖/买近端交割
	SWAP_XR_OUT_FAR:'1501521',//外汇掉期卖/买远端交割
};
/**
 * 获取业务类型名称
 * @param code 业务类型代码
 * @returns
 */
function getTradeTypeName(code) {
	if (code == '收取' || code == '支付') {
    	return code;
    }
	for (var key in tradeTypeCode) {
		if (tradeTypeCode[key] == code) {
			return tradeTypeName[key];
		}
	}
};

/**
 * 获取余额类型名称
 * @param blcType 余额类型代码
 * @returns
 */
function getBlcTypeNameById(blcType) {
	switch (blcType) {
		case "211" :
			return "多头余额";
		case "212" :
			return "空头余额";
		case "231" :
			return "质入";
		case "232" :
			return "质出";
		case "221" :
			return "融入";
		case "222" : 
			return "融出";
		default :
			return blcType;
	}
}

/**
 * 息票类型代码
 */
var couponTypeCode = {
	FIXED : '1',
	FLOAT : '2',
	ZERO : '3'
};
/**
 * 息票类型名称
 */
var couponTypeName = {
	FIXED : '固定利率',
	FLOAT : '浮动利率',
	ZERO : '零息票'
};
/**
 * 获取息票类型名称
 * @param code
 * @returns
 */
function getCouponTypeName(code) {
	for (var key in couponTypeCode) {
		if(couponTypeCode[key] == code) {
			return couponTypeName[key];
		}
	}
};

/**
 * 取单个代码对应名称方法
 * @param code 单个代码
 * @param values "{代码} {名称},{···}"枚举
 * @returns
 */
function getValue(code, values) {
	if (!code) {
		return "";
	}
	var arr = values.split(",");
	var value = "";
	for (var index in arr) {
		if (code == arr[index].substring(0, code.length)) {
			value = arr[index].split(' ')[1];
			break;
		}
	}
	if (!value) {
		return code;
	}
	return value;
};

/**
 * 取多个代码对应名称方法
 * @param codes 多个代码，","隔开
 * @param values "{代码} {名称},{···}"枚举
 * @returns
 */
function getMultipleValue(codes, values) {
	if (!codes) {
		return "";
	}
	var codeArray = codes.split(",");
	var value = "";
	var valuesArray = values.split(",");
	for (var codeKey in codeArray) {
		for (var valuesKey in valuesArray) {
			if (codeArray[codeKey] == valuesArray[valuesKey].substring(0, codeArray[codeKey].length)) {
				value = value + valuesArray[valuesKey].split(' ')[1] + ",";
				continue;
			}
		}
	}
	if (!value) {
		return codes;
	}
	if (value.length >= 1) {
		value = value.substring(0, value.length - 1);
	}
	return value;
};
function getSn(code){
	return getValue(code,"0 核心,1 财管");
}
function getFlag(code){
	return getValue(code,"1 借,2 贷");
}
function getCatchPoint(code){
	return getValue(code,"0 利息提计,1 利息转结,2 公允价值损益计提,3 公允价值损益结转,4 收付");
}
function getIncomeType(code) {
	return getValue(code,"01 保证收益,02 保本浮动收益,03 非保本浮动收益");
};
function getTermType(code) {
	return getValue(code,"01 T+0产品,02 7天（含）以内,03 7天-1个月（含）,04 1-3个月（含）,05 3-6个月(含),06 6-12个月（含）,07 1年以上");
};
function getInvesterType(code) {
	return getValue(code,"01 私人银行专属,02 机构专属,03 个人,04 同业");
};
function getInvestArea(code) {
	return getValue(code,"01 境内,02 境外,03 境内和境外");
};
function getServiceMode(code) {
	return getValue(code,"01 综合理财服务,02 理财顾问服务,03 其他");
};
function getOperationMode(code) {
	return getValue(code,"01 封闭式净值型,02 封闭式非净值型,03 开放式净值型,04 开放式非净值型");
};
function getBookkeepingType(code) {
	return getValue(code,"01 表内,02 表外");
};
function getAssetAllocationType(code) {
	return getValue(code,"01 单一资产配置（一对一）,02 资产组合配置（一对多）,03 资产池配置（多对多）");
};
function getManagementMode(code) {
	return getValue(code,"01 银行为实际管理人,03 资产管理公司,04 特殊目的载体（SPV）,02 其他机构为实际管理人");
};
function getPricingMode(code) {
	return getValue(code,"01 公允价值定价,02 成本法定价,03 综合定价");
};
function getInvestType(code) {
	return getValue(code,"01 结构性理财产品,02 货币市场工具类,03 债券类,04 非标准化债权类,05 基金股票类,06 股权类,07 另类投资类,08 混合类,09 代客境外理财产品");
};
function getIsExpectedYtm(code) {
	return getValue(code,"01 有,02 无");
};
function getIsExpectedYtmBase(code) {
	return getValue(code,"01 是,02 否");
};
function getCurrency(code) {
	return getValue(code,"01 人民币(CNY),02 港元(HKD),03 美元(USD),04 欧元(EUR),05 日元(JPY),06 澳门元(MOP),07 瑞士法郎(CHF),08 英镑(GBP),09 俄罗斯卢布(RUR),10 加拿大元(CAD),11 丹麦克朗(DKK),12 澳大利亚元(AUD),13 瑞典克朗(SEK),00 多币种,99 其他");
};
function getCurrencyName(code) {
	return getValue(code,"CNY 人民币,HKD 港元,USD 美元,EUR 欧元,JPY 日元,MOP 澳门元,CHF 瑞士法郎,GBP 英镑,RUR 俄罗斯卢布,CAD 加拿大元,DKK 丹麦克朗,AUD 澳大利亚元,SEK 瑞典克朗");
};
function getRiskPreference(code) {
	return getValue(code,"01 保守型,02 稳健型,03 平衡型,04 成长型,05 进取型");
};
function getRiskRank(code) {
	return getValue(code,"01 一级（低）,02 二级（中低）,03 三级（中）,04 四级（中高）,05 五级（高）");
};
function getCooperationMode(code) {
	return getValue(code,"01 独立运作,02 银信,03 银保,04 银基,05 银证,06 其他,07 混合类");
};
function getRaiseType(code) {
	return getValue(code,"01 公募,02 私募");
};
function getTerminationMode(code) {
	return getValue(code,"01 T+0,02 T+1,03 T+2,04 T+3,05 T+4,06 T+5及以上");
};
function getCreditType(code) {
	return getValue(code,"01 内部增级,02 外部增级,03 内外增级");
};
function getSettleType(code) {
	return getValue(code, '0000 券款对付(DVP),0001 见券付款(PAD),0002 见款付券(DAP),0003 纯券过户(FOP),0004 净额券款对付(NDVP),0005 券券对付(BVB),0006 券费对付(BVP),0007 返券付费解券(BVBF)');
}
function getCouponTypeName(code) {
	return getValue(code, '1 固息,2 浮息,3 贴现');
}
/**
 * 付息频率
 */
function getPaymentFreq(code) {
	return getValue(code, '0D 利随本清,1Y 每年一次,6M 半年一次,3M 每季一次,1M 每月一次,-1 不结息');
};
/**
 * 债券付息频率
 */
function getBondFreq(code) {
	return getValue(code, '0 利随本清,1 每年一次,2 每半年一次,4 每季一次,12 每月一次');
};
function getCreditInstitutionType(codes) {
	return getMultipleValue(codes,"01 广义政府,02 非金融性公司,03 金融性公司,04 住户部门,05 国外部门");
};
function getInvestCountry(codes) {
	return getMultipleValue(codes,"AUS 澳大利亚,CAN 加拿大,CHN 中国,HKG 香港,MAC 澳门,TWN 台湾,DNK 丹麦,JPN 日本,RUS 俄罗斯联邦,SWE 瑞典,CHE 瑞士,GBR 英国,USA 美国,NA 其他");
};
function getArea(codes) {
	return getMultipleValue(codes,"110000 北京,120000 天津,130000 河北省,140000 山西省,150000 内蒙古自治区,210000 辽宁省,220000 吉林省,230000 黑龙江省,310000 上海市,320000 江苏省,330000 浙江省,340000 安徽省,350000 福建省,360000 江西省,370000 山东省,410000 河南省,420000 湖北省,430000 湖南省,440000 广东省,450000 广西壮族自治区,460000 海南省,500000 重庆市,510000 四川省,520000 贵州省,530000 云南省,540000 西藏自治区,610000 陕西省,620000 甘肃省,630000 青海省,640000 宁夏回族自治区,650000 新疆维吾尔自治区,210200 大连,330200 宁波,350200 厦门,370200 青岛,440300 深圳");
};
/**
 * 借贷标志名称
 */
function getDebitCreditFlagName(code) {
	return getValue(code, "1 借,2 贷,3 收,4 付");
};
/**
 * 计息基准转换
 * @param oldDate
 * @returns
 */
function getDayCount(dayCount) {
	if(dayCount == "Actual/360"){ 
		return "A/360";
	} else if(dayCount == "Actual/365") { 
		return "A/365F";
	} else if(dayCount == "Actual/365 (Fixed)") {
		return "A/365";
	} else if(dayCount == "Actual/Actual (ISMA)") { 
		return "A/A(ISMA)"
	} else if(dayCount == "30/360 (Bond Basis)") { 
		return "30/360" 
	}
}

function getFormatDate(oldDate) {
	if (oldDate) {
		return oldDate.replace(/-/g,"");
	} else {
		return oldDate;
	}
}

///**
// * 格式化数字
// * @param number 要格式化的数字
// * @param dn 小数位数，不够的补‘0’
// * @returns
// */
//function getDecimalFromInt(number, dn) {
//	var b = '';
//	if (!number) {
//		return "";
//	}
//	var m = (number+"").split('.');
//	if (m.length>1) {
//		b = m[1];
//		if (m[1].length<dn) {
//			for(var i=0; i<dn-m[1].length; i++) {
//				b += '0';
//			}
//		} else {
//			return number.toFixed(dn);
//		}
//	} else {
//		for (var i=0; i<dn; i++) {
//			b += '0';
//		}
//	}
//	return m[0]+"."+b;
//};
/**
 * 格式化数字
 * @param s 要格式化的数字
 * @param n 小数位数，不够的补‘0’,若n=0，则去掉小数部分，只保留整数部分
 * @returns
 */
function getDecimalFromInt(s, n)   
{   
	if (!s&&s!=0) {
//		if(n==2&&s==0) return '0.00';
//		else if(n==4&&s==0) return '0.0000';
//		else 
			return "";
	}
	var isNegative = false;
	if(s < 0 ){
		isNegative = true;
		s = -s;
	}
	var isOnlyInt = false;
	if(n == 0){
		isOnlyInt = true;
	}
	   n = n > 0 && n <= 20 ? n : 2;   
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
	   var l = s.split(".")[0].split("").reverse(),   
	   r = s.split(".")[1];   
	   t = "";   
	   for(i = 0; i < l.length; i ++ )   
	   {   
	      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	   }
	   if(isNegative){
		   t = t + "-";
	   }
	   if(isOnlyInt){
		   return t.split("").reverse().join(""); 
	   }
	   return t.split("").reverse().join("") + "." + r;   
} ;

function getInvestTypeFromAccName(accName) {
	if (accName) {
		return accName.split('_')[1];
	} else {
		return accName;
	}
};

//乘法函数，用来得到精确的乘法结果 
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
//调用：FloatMul(arg1,arg2) 
//返回值：arg1乘以arg2的精确结果 
function FloatMul(arg1,arg2) { 
	var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length;
	} catch(e) {} 
	try {
		m += s2.split(".")[1].length;
	} catch(e) {} 
	return Number(s1.replace(".","")) * Number(s2.replace(".","")) / Math.pow(10,m);
};

function digit_uppercase(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠': '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
    	if (i == (fraction.length - 1)) {
    		s += (digit[Math.floor(Math.round(n * Math.pow(10, i + 1))) % 10] + fraction[i]).replace(/零./, '');
    	} else {
    		s += (digit[Math.floor(n * Math.pow(10, i + 1)) % 10] + fraction[i]).replace(/零./, '');
    	}
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '')
            .replace(/^$/, '零')
            + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

function conectPer(value) {
	if(value) {
		return value+'%';
	} else {
		return '';
	}
};

/**
 * 根据传入值显示时间的中文
 * 如：1D返回1天
 */
function showTimeByZH(value) {
    if (!value) {
        return value;
    }
    value = value+'';
    var unit = value.substr(value.length - 1, 1);
    var time = value.substr(0, value.length - 1);
    if ('D' == unit) {
        return time + '天';
    } else if ('W' == unit) {
        return time + '周';
    } else if ('M' == unit) {
        return time + '月';
    } else if ('Y' == unit) {
        return time + '年';
    }
};

/**
 * 判断是否闰年
 * @param year
 * @returns {Boolean}
 */
function isLeapYear(year) {  
	return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
};

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate()+ 3;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
};
function getFormatDate(AddDayCount) { 
	var date = new Date(); 
    var seperator1 = "-";
	date.setDate(date.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = date.getFullYear(); 
	var m = date.getMonth()+1;//获取当前月份的日期 
	var d = date.getDate(); 
	if (m >= 1 && m <= 9) {
        m = "0" + m;
    }
    if (d >= 0 && d <= 9) {
        d = "0" + d;
    }
	return y+seperator1+m+seperator1+d; 
	} ;




/**
 * 判断外汇掉期,远期清算方式
 * 
 */
function getBND(code){
	if(code == '2000') return '双边清算';
	else
		return '净额清算';
};

/**
 * 外即期交易模式
 * @param code
 * @returns
 */
function getFxTrade(code){
	if(code == '1') return '询价';
	else if(code=='2') return '竞价';
	else if(code=='9') return '撮合';
	else 
		return node;
};

/**
 * 外汇掉期交易模式
 * @param code
 * @returns
 */
function getSwapTrade(code){
	if(code == '1') return '询价';
	else if(code=='2') return '竞价';
	else if(code=='9') return 'C-SWAP';
	else  
		return code;
};

/**
 * 外汇远期交易模式
 * @param code
 * @returns
 */
function getForwardTrade(code){
	if(code == '1') return '询价';
	else if(code=='2') return '竞价';
	else if(code=='9') return 'C-Forward';
	else  
		return code;
};

/**
 * 外汇交易期限
 * @param code
 * @returns
 */
function isSetDays(value){
	
	if(value == '0') return 'TODAY';
	else if(value == '1') return 'TOM';
	else if(value == '2') return 'SPOT';
	else 
		return value;
	
};
/**
 * 外汇远期交割方式
 * @param code
 * @returns
 */
function getSettleType(code){
	if(code == 'P') return '实物交割';
	else 
		return code;
}
/**
 * 外汇远期期限
 * @param code
 * @returns
 */
function getTerm(code){
	if(code == 'BROKEN') return '非标准期限';
	else
		return code;
}
/**
 * 审批单审批人
 * @param code
 * @returns
 */
function getRole(code){
	if(!code){
		return code;
	}
	var role = code.split(":")[1];
	return role;
}
/**
 * 返回币种
 * @param code
 * @returns
 */
function getCurr(code,num){
	if(!code){
		return ' ';
	}
	var currArr = code.split("/");
	if(num == 0 || num == 1)
		return currArr[num];
	else
		return ' ';
}
