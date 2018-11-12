/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : selectionpool3

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2018-11-09 16:45:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cf_enterprise_info
-- ----------------------------
DROP TABLE IF EXISTS `cf_enterprise_info`;
CREATE TABLE `cf_enterprise_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `sn` varchar(255) NOT NULL COMMENT '企业uuid',
  `detail_url` varchar(255) NOT NULL COMMENT '详情链接',
  `promoters` varchar(255) DEFAULT NULL COMMENT '发起人公司或个人',
  `promoters_url` varchar(255) DEFAULT NULL COMMENT '发起人的链接',
  `enterprise_name` varchar(255) DEFAULT NULL COMMENT '无公司用 个人-promoters',
  `address` varchar(255) DEFAULT NULL COMMENT '公司或个人地址',
  `telphone` varchar(255) DEFAULT NULL COMMENT '联系电话',
  `mail` varchar(255) DEFAULT NULL COMMENT '联系邮箱',
  `shop_name` varchar(255) DEFAULT NULL COMMENT '店铺名称',
  `shop_url` varchar(255) DEFAULT NULL COMMENT '店铺url',
  `twitter` varchar(255) DEFAULT NULL COMMENT 'twitter',
  `facebook` varchar(255) DEFAULT NULL COMMENT 'facebook',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '信息创建时间（第一次爬取时间）',
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of cf_enterprise_info
-- ----------------------------
INSERT INTO `cf_enterprise_info` VALUES ('1', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306p', '1', '张三', '1', '深圳市幻日西姆科技发展有限公司', '深圳市幻日西姆科技广东深圳市福田区  南湾街道南岭村健民路文城商业广场五楼E25', '0755-83932037', null, null, null, null, null, '2018-10-26 06:24:12', '2018-10-26 06:24:12');

-- ----------------------------
-- Table structure for cf_package_info
-- ----------------------------
DROP TABLE IF EXISTS `cf_package_info`;
CREATE TABLE `cf_package_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `sn` varchar(255) NOT NULL COMMENT '套餐uuid',
  `product_sn` varchar(255) NOT NULL COMMENT '关联产品sn',
  `product_name` varchar(255) NOT NULL COMMENT '产品名称',
  `detail_url` varchar(255) NOT NULL COMMENT '详情链接',
  `title` varchar(255) DEFAULT NULL COMMENT '套餐标题',
  `price` decimal(10,2) NOT NULL COMMENT '套餐价格',
  `unit` varchar(255) DEFAULT NULL COMMENT '价格单位',
  `limit_support` int(255) NOT NULL COMMENT '套餐限额',
  `surplus_support` int(255) NOT NULL COMMENT '套餐剩余',
  `supporter` int(255) NOT NULL COMMENT '支持者数量',
  `info` text COMMENT '套餐说明',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '信息创建时间（第一次爬取时间）',
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of cf_package_info
-- ----------------------------
INSERT INTO `cf_package_info` VALUES ('1', '000', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e3123', '苹果手机双卡云双待适配器', '000000000', null, '79.00', '人民币', '4000', '0', '3755', '您将以老用户专享价79元获得SIMHUB双卡适配器1套,赠SIM卡分离器。众筹后恢复市场价168元/套。', '2018-10-26 06:34:09', '2018-10-26 06:34:09');
INSERT INTO `cf_package_info` VALUES ('2', '111', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e3126', '苹果手机双卡云双待适配器', '000000000', '', '99.00', '人民币', '10000', '8857', '1043', '您将以首发特惠价99元获得SIMHUB双卡适配器1套,赠SIM卡分离器。众筹后恢复市场价168元/套。', '2018-10-26 06:34:09', '2018-10-26 06:34:09');

-- ----------------------------
-- Table structure for cf_product_info
-- ----------------------------
DROP TABLE IF EXISTS `cf_product_info`;
CREATE TABLE `cf_product_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id自增长',
  `sn` varchar(255) NOT NULL COMMENT '产品uuid',
  `enterprise_sn` varchar(255) NOT NULL COMMENT '关联企业sn',
  `scene_sn` varchar(255) NOT NULL COMMENT '场景编号',
  `keyword` varchar(255) NOT NULL COMMENT '搜索关键字',
  `source` varchar(255) NOT NULL COMMENT '来源',
  `project_status` varchar(255) NOT NULL COMMENT '项目状态',
  `detail_url` varchar(255) NOT NULL COMMENT '详情url',
  `product_name` varchar(255) NOT NULL COMMENT '产品名称',
  `raise_target` decimal(10,2) NOT NULL COMMENT '众筹目标金额',
  `raised_amount` decimal(10,2) NOT NULL COMMENT '已筹金额',
  `unit` varchar(255) NOT NULL COMMENT '金额单位',
  `progress` decimal(5,2) NOT NULL COMMENT '众筹进度',
  `supporter` int(255) NOT NULL COMMENT '支持者数量',
  `ad_img` varchar(255) DEFAULT NULL COMMENT '主宣传图',
  `introduction` text COMMENT '产品介绍',
  `introduction_video_url` text COMMENT '产品视频url',
  `introduction_img_url` text COMMENT '产品图片',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '信息创建时间（第一次爬取时间）',
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of cf_product_info
-- ----------------------------
INSERT INTO `cf_product_info` VALUES ('1', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e3123', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306p', 'ec36fa3f_a42c_11e8_9425_fa163e7f691a', '手机', '京东', '众筹结束', 'https://z.jd.com/project/details/105035.html', '苹果手机双卡云双待适配器', '200000.00', '445143.00', '人民币', '223.00', '5306', 'https://img30.360buyimg.com/cf/jfs/t27496/145/280970103/85531/fdced771/5b8d05b1N0fac72c3.jpg', 'F1 -Max负离子香氛扩香气，氧吧与香氛的魔幻调和，复古与潮流的温情交融，只为独一无二的你', 'https://jdvod.300hu.com/4c1f7a6atransbjngwcloud1oss/2518b79989056293020504065/v.f30.mp4', 'https://img30.360buyimg.com/cf/jfs/t25177/176/1121790807/162795/29b604e1/5b89051cNfff3939f.jpg', '2018-10-26 05:19:09', '2018-10-26 05:19:09');

-- ----------------------------
-- Table structure for cf_product_source
-- ----------------------------
DROP TABLE IF EXISTS `cf_product_source`;
CREATE TABLE `cf_product_source` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(255) NOT NULL,
  `source_name` varchar(255) NOT NULL COMMENT '来源名称',
  `is_deleted` int(1) NOT NULL DEFAULT '0' COMMENT '0正常；1删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cf_product_source
-- ----------------------------
INSERT INTO `cf_product_source` VALUES ('1', '1', '京东', '0');
INSERT INTO `cf_product_source` VALUES ('2', '2', '淘宝', '0');
INSERT INTO `cf_product_source` VALUES ('3', '3', '唯品会', '0');

-- ----------------------------
-- Table structure for cr_enterprise_industry
-- ----------------------------
DROP TABLE IF EXISTS `cr_enterprise_industry`;
CREATE TABLE `cr_enterprise_industry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `industry_sn` varchar(50) NOT NULL DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1707 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_enterprise_industry
-- ----------------------------
INSERT INTO `cr_enterprise_industry` VALUES ('1686', 'ietig_3d0eab13_b726_476e_b806_d255718c2930', '0', '2018-10-26 03:11:01', null, '0.00000', '1', '1', '0', '0', '7446271b_a42a_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_industry` VALUES ('1687', 'ietig_80f5a4f8_8918_42b7_b76c_c6105f81b111', '0', '2018-10-26 03:11:06', null, '0.00000', '1', '1', '0', '0', '7442d08b_a42a_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_industry` VALUES ('1688', 'ietig_97d319db_778d_414f_a62d_b5828419d618', '0', '2018-10-26 03:11:09', null, '0.00000', '1', '1', '0', '0', '7441ec5a_a42a_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_industry` VALUES ('1689', 'ietig_120fb2a4_afd7_423e_92fa_fdf3d0e4109d', '0', '2018-10-26 03:11:11', null, '0.00000', '1', '1', '0', '0', '7440a6bb_a42a_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_industry` VALUES ('1690', 'ietig_4faeaf6d_0e6a_48dc_87d8_d0b24fd37bd6', '0', '2018-10-26 03:11:13', null, '0.00000', '1', '1', '0', '0', '7443978a_a42a_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_industry` VALUES ('1691', 'ietig_8f6749c7_de91_47ae_8b0a_ac4d5f1e56bc', '0', '2018-10-26 07:09:42', null, '0.00000', '1', '1', '0', '0', '7442d08b_a42a_11e8_9425_fa163e7f691a', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d');
INSERT INTO `cr_enterprise_industry` VALUES ('1692', 'ietig_a0d8ca08_f824_4c52_8220_e1ed0b8bd5d2', '0', '2018-10-26 07:09:46', null, '0.00000', '1', '1', '0', '0', '7441ec5a_a42a_11e8_9425_fa163e7f691a', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d');
INSERT INTO `cr_enterprise_industry` VALUES ('1693', 'ietig_96d94ba2_db6f_4bfb_9cb3_334650df108e', '0', '2018-10-26 07:12:29', null, '0.00000', '0', '0', '0', '0', '7442d08b_a42a_11e8_9425_fa163e7f691a', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d');
INSERT INTO `cr_enterprise_industry` VALUES ('1694', 'ietig_7651036c_c347_49b8_ae3a_a61f046d712c', '0', '2018-10-26 08:38:12', null, '0.00000', '1', '1', '0', '0', '7441ec5a_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1695', 'ietig_f2f6d34e_1030_4f90_b976_af6b48232468', '0', '2018-10-26 08:38:13', null, '0.00000', '1', '1', '0', '0', '743f61f8_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1696', 'ietig_66738e5b_d5d5_436d_8a70_d0c178adb09b', '0', '2018-10-27 03:45:44', null, '0.00000', '1', '1', '0', '0', '7442d08b_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1697', 'ietig_c783289a_c68e_4f0f_8bd1_f6a9cf4efca0', '0', '2018-10-27 03:45:47', null, '0.00000', '1', '1', '0', '0', '7440a6bb_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1698', 'ietig_bbff213b_43e5_4cf4_8062_9966bfbd0639', '0', '2018-10-27 03:45:51', null, '0.00000', '1', '1', '0', '0', '7441ec5a_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1699', 'ietig_e2546e1a_c813_45c2_83d1_3e96db7d01dc', '0', '2018-10-27 03:45:51', null, '0.00000', '1', '1', '0', '0', '743f61f8_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1700', 'ietig_3b041aae_b5b2_46f5_b441_b4f0239edc5b', '0', '2018-10-27 03:45:51', null, '0.00000', '1', '1', '0', '0', '743e150d_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1701', 'ietig_4253c3b2_e907_487d_98f4_916a31cb4d5b', '0', '2018-10-27 03:45:52', null, '0.00000', '1', '1', '0', '0', '743d41c1_a42a_11e8_9425_fa163e7f691a', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532');
INSERT INTO `cr_enterprise_industry` VALUES ('1706', 'ietig_eb0a9f75_17c0_4c51_9cb3_97114aca9790', '0', '2018-11-09 16:41:37', null, '0.00000', '0', '0', '0', '0', 'ietig_ff980524_5617_4bbd_85f0_527ee6414b8d', 'ietig_488f7fb8_e60f_4426_8a1d_e0e575eb71d0');
INSERT INTO `cr_enterprise_industry` VALUES ('1705', 'ietig_e76dce54_62a8_4d1a_83f1_a212c7339243', '0', '2018-11-09 16:41:14', null, '0.00000', '0', '0', '0', '0', 'ietig_6837f9ba_4e3a_4799_bf51_be744cfaa445', 'ietig_488f7fb8_e60f_4426_8a1d_e0e575eb71d0');

-- ----------------------------
-- Table structure for cr_enterprise_scene
-- ----------------------------
DROP TABLE IF EXISTS `cr_enterprise_scene`;
CREATE TABLE `cr_enterprise_scene` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `scene_sn` varchar(50) NOT NULL DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1361 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_enterprise_scene
-- ----------------------------
INSERT INTO `cr_enterprise_scene` VALUES ('1356', 'ietig_1911031f_5ee4_4640_8369_157d406ffd49', '0', '2018-10-26 03:11:19', null, '0.00000', '1', '1', '0', '0', 'ec21a727_a42c_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_scene` VALUES ('1357', 'ietig_e8e2d566_a064_4af4_82a9_d0280934cdfa', '0', '2018-10-26 03:11:20', null, '0.00000', '1', '1', '0', '0', 'ec27848c_a42c_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_scene` VALUES ('1358', 'ietig_bcb8b809_07df_4502_996a_ba3fb70be30b', '0', '2018-10-26 03:11:22', null, '0.00000', '1', '1', '0', '0', 'ec251c8f_a42c_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_scene` VALUES ('1359', 'ietig_a6db28fd_7bc3_4570_82c8_13ce93c49e45', '0', '2018-10-26 03:11:24', null, '0.00000', '1', '1', '0', '0', 'ec2ca3a9_a42c_11e8_9425_fa163e7f691a', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9');
INSERT INTO `cr_enterprise_scene` VALUES ('1360', 'ietig_70801974_caec_434b_8094_7772718b1c6d', '0', '2018-10-26 07:10:06', null, '0.00000', '1', '1', '0', '0', 'ec26b04e_a42c_11e8_9425_fa163e7f691a', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d');

-- ----------------------------
-- Table structure for cr_enterprise_user
-- ----------------------------
DROP TABLE IF EXISTS `cr_enterprise_user`;
CREATE TABLE `cr_enterprise_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  `user_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1355 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_enterprise_user
-- ----------------------------
INSERT INTO `cr_enterprise_user` VALUES ('1346', 'ietig_bbd8aeec_6597_40a0_bcc7_e8a46bb56e6e', '0', '2018-10-16 03:27:19', null, '0.00000', '0', '0', '0', '0', 'ietig_e2eea172_0a74_449b_886e_ca639ce2ccd3', 'ietig_cfd0c4e8_fe53_45b3_81d9_4646608902f5');
INSERT INTO `cr_enterprise_user` VALUES ('1347', 'ietig_a6bb47d2_bd5a_40a5_a9d8_b70e9e9c9753', '0', '2018-10-18 06:11:08', null, '0.00000', '0', '0', '0', '0', 'ietig_e2eea172_0a74_449b_886e_ca639ce2ccd3', 'ietig_21981736_a47c_4cb9_af2f_fa1ac794c342');
INSERT INTO `cr_enterprise_user` VALUES ('1348', 'ietig_a6bb47d2_bd5a_40a5_a9d8_b70e9e9c9753', '0', '2018-10-18 06:11:08', null, '0.00000', '0', '0', '0', '0', 'ietig_c6eadfa9_b1b7_4c19_87f2_38789c586bc0', 'ietig_21981736_a47c_4cb9_af2f_fa1ac794c342');
INSERT INTO `cr_enterprise_user` VALUES ('1349', 'ietig_81a906f0_f251_42d4_8a2d_282a47f45bfa', '0', '2018-10-18 06:20:22', null, '0.00000', '0', '0', '0', '0', 'ietig_e2eea172_0a74_449b_886e_ca639ce2ccd3', 'ietig_2cad1d0d_477f_441c_b121_66cac7995d40');
INSERT INTO `cr_enterprise_user` VALUES ('1350', 'ietig_81a906f0_f251_42d4_8a2d_282a47f45bfa', '0', '2018-10-18 06:20:22', null, '0.00000', '0', '0', '0', '0', 'ietig_feb16ef5_b55d_4a98_8a5b_c4de1de61afb', 'ietig_2cad1d0d_477f_441c_b121_66cac7995d40');
INSERT INTO `cr_enterprise_user` VALUES ('1351', 'ietig_b59a06dc_9880_42dc_be6c_330d01067841', '0', '2018-10-18 06:55:29', null, '0.00000', '0', '0', '0', '0', 'ietig_b098c073_7f0c_49e0_8793_b7318f6e774e', 'ietig_3defde0e_c2a7_4949_80fe_8107786ecadb');
INSERT INTO `cr_enterprise_user` VALUES ('1352', 'ietig_fc2c1d5b_a250_4baa_930a_ec782cb67e68', '0', '2018-10-19 09:30:23', null, '0.00000', '0', '0', '0', '0', 'ietig_6ee93562_3f7f_4196_86e7_56db4d0e93c7', 'ietig_12f938e6_ea05_4ec1_8307_2de4e0b66564');
INSERT INTO `cr_enterprise_user` VALUES ('1353', 'ietig_4f594253_a969_4ea5_886a_2606c88936d8', 'sa', '2018-10-26 06:34:30', null, '0.00000', '0', '0', '0', '0', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532', 'ietig_8fe0099a_7486_4b23_921d_6fd4132ee936');
INSERT INTO `cr_enterprise_user` VALUES ('1354', 'ietig_81db35e7_3c3d_4cfc_9e7b_02dbf0df137f', 'sa', '2018-10-26 08:17:54', null, '0.00000', '0', '0', '0', '0', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532', 'ietig_9596c8a8_90ab_40fd_8e84_42ebea50f6f6');

-- ----------------------------
-- Table structure for cr_product_industry
-- ----------------------------
DROP TABLE IF EXISTS `cr_product_industry`;
CREATE TABLE `cr_product_industry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `industry_sn` varchar(50) NOT NULL DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4378 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_product_industry
-- ----------------------------

-- ----------------------------
-- Table structure for cr_product_para
-- ----------------------------
DROP TABLE IF EXISTS `cr_product_para`;
CREATE TABLE `cr_product_para` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  `template_sn` varchar(50) NOT NULL DEFAULT '0',
  `para_sn` varchar(50) NOT NULL DEFAULT '0',
  `para_value` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_product_para
-- ----------------------------

-- ----------------------------
-- Table structure for cr_product_scene
-- ----------------------------
DROP TABLE IF EXISTS `cr_product_scene`;
CREATE TABLE `cr_product_scene` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `scene_sn` varchar(50) NOT NULL DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3928 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_product_scene
-- ----------------------------
INSERT INTO `cr_product_scene` VALUES ('3921', 'ietig_e8913201_77c6_4065_8aa4_dc42033c096c', '0', '2018-10-24 07:02:03', null, '0.00000', '1', '1', '0', '0', 'ec251c8f_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3922', 'ietig_50febcb0_a420_4411_8a67_48da509e1954', '0', '2018-10-24 07:02:05', null, '0.00000', '1', '1', '0', '0', 'ec2286f2_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3923', 'ietig_f559b847_615a_49fd_8178_91d7490264d1', '0', '2018-10-24 07:02:06', null, '0.00000', '1', '1', '0', '0', 'ec2404e0_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3924', 'ietig_8556b107_857e_4ed0_9b81_8dc24d865492', '0', '2018-10-24 07:02:07', null, '0.00000', '1', '1', '0', '0', 'ec2ca3a9_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3925', 'ietig_509161f5_b8db_4f61_8368_dcc7917c8c92', '0', '2018-10-24 07:02:26', null, '0.00000', '0', '0', '0', '0', 'ec2b16a8_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3926', 'ietig_441ba689_90cd_4a00_86d0_50c7358fcf7c', '0', '2018-10-24 07:02:28', null, '0.00000', '1', '1', '0', '0', 'ec2bd07b_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');
INSERT INTO `cr_product_scene` VALUES ('3927', 'ietig_33e16912_2f30_4c7c_92c5_73d19c8d7bb2', '0', '2018-10-24 07:02:43', null, '0.00000', '0', '0', '0', '0', 'ec287a11_a42c_11e8_9425_fa163e7f691a', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4');

-- ----------------------------
-- Table structure for cr_user_product
-- ----------------------------
DROP TABLE IF EXISTS `cr_user_product`;
CREATE TABLE `cr_user_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `user_sn` varchar(50) NOT NULL DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  `is_favor` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cr_user_product
-- ----------------------------
INSERT INTO `cr_user_product` VALUES ('7', 'ietig_14c51820_853e_4ace_88b6_2ebdb8068f6e', '0', '2018-10-23 03:29:35', '2018-10-25 09:30:58', '0.00000', '0', '0', '0', '0', 'sa', 'ietig_c9f05766_3cc5_4478_83b6_fff0a8fa40e4', '1');

-- ----------------------------
-- Table structure for data_collection_list
-- ----------------------------
DROP TABLE IF EXISTS `data_collection_list`;
CREATE TABLE `data_collection_list` (
  `id` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `source` varchar(100) DEFAULT NULL COMMENT '来源',
  `company_name` varchar(100) DEFAULT NULL COMMENT '企业名称',
  `industry_involved` varchar(100) DEFAULT NULL COMMENT '所属行业',
  `category` varchar(100) DEFAULT NULL COMMENT '场景',
  `state` varchar(100) DEFAULT NULL COMMENT '众筹状态',
  `progressing` varchar(100) DEFAULT NULL COMMENT '进展',
  `supporter` varchar(255) DEFAULT NULL COMMENT '支持人数',
  `url` varchar(100) DEFAULT NULL COMMENT '地址',
  `is_deleted` varchar(10) NOT NULL DEFAULT '0',
  `last_update_dt` datetime DEFAULT NULL,
  `create_dt` datetime DEFAULT NULL,
  `ad_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of data_collection_list
-- ----------------------------
INSERT INTO `data_collection_list` VALUES ('1', '苹果手机双卡云双待适配器', '京东', '深圳市幻日西姆科技发展有限公司', '手机相关', '手机周边', '众筹结束', '223%', '5306', 'baidu', '0', '2018-10-25 09:32:22', null, 'https://img30.360buyimg.com/cf/jfs/t1/3387/1/4261/56657/5b9b919dE503931f1/1d01cf26c4e1f4d0.jpg');
INSERT INTO `data_collection_list` VALUES ('ietig_40400682_a911_4019_ba19_c544278daf1d', '蓝牙耳机', '京东', '深圳市幻日西姆科技发展有限公司', '耳机相关', '耳机周边', '众筹中', '50%', '100', 'Chrome', '0', '2018-10-25 09:33:47', '2018-10-20 08:41:12', 'https://img30.360buyimg.com/cf/jfs/t1/3115/9/5493/69290/5b9f85eaEce2ef5cf/3376c7c134391b61.jpg');
INSERT INTO `data_collection_list` VALUES ('ietig_43960497_ff81_4f47_b679_7e8fab55d8ee', '抗寒服', '京东', '深圳市幻日西姆科技发展有限公司', '服装相关1', '服装周边', '众筹中', '90%', '500', 'IE', '0', '2018-10-25 09:38:13', '2018-10-24 07:00:56', 'https://img30.360buyimg.com/cf/jfs/t1/7811/28/222/80174/5bc9935dEd56d9540/1d95207ef2d4ac4a.jpg');
INSERT INTO `data_collection_list` VALUES ('ietig_7f062f7d_51a7_43ff_aa74_fad95b6f01d4', '9995', '6666', '6666', '199', '678', '众筹中', '6', '6', '6', '1', '2018-10-23 14:47:16', null, 'https://img30.360buyimg.com/cf/jfs/t24661/93/912468445/150797/200b4d73/5b7fae1eN08fc19d6.jpg');
INSERT INTO `data_collection_list` VALUES ('ietig_aac5f127_0eb5_4ec8_897b_1244be17b3fb', '1', '1', '1', '1', '1', '众筹中', '1', '1', '', '1', '2018-10-24 09:24:11', '2018-10-25 01:24:13', null);
INSERT INTO `data_collection_list` VALUES ('ietig_da9704bc_30bb_46ac_8c8a_972f7437eda2', '', '', '', '5', '5', '', '', '', '', '1', '2018-10-24 16:51:02', '2018-10-25 08:51:00', null);

-- ----------------------------
-- Table structure for dic_class
-- ----------------------------
DROP TABLE IF EXISTS `dic_class`;
CREATE TABLE `dic_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_class
-- ----------------------------
INSERT INTO `dic_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:29', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for dic_file
-- ----------------------------
DROP TABLE IF EXISTS `dic_file`;
CREATE TABLE `dic_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `dic_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_file
-- ----------------------------

-- ----------------------------
-- Table structure for dic_info
-- ----------------------------
DROP TABLE IF EXISTS `dic_info`;
CREATE TABLE `dic_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_info
-- ----------------------------
INSERT INTO `dic_info` VALUES ('3', '0', '默认内置', '0', '2018-06-13 10:39:32', null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `dic_info` VALUES ('4', 'credit_iso9000', 'ISO9000', '0', '2018-06-13 10:40:48', null, '0.00000', '0', '0', '0', 'enterprise_credit', '0', '0', '0', '0');
INSERT INTO `dic_info` VALUES ('5', 'world_500', '世界500强', '0', '2018-06-13 10:40:48', null, '0.00000', '0', '0', '0', 'enterprise_tag', '0', '0', '0', '0');
INSERT INTO `dic_info` VALUES ('6', 'cn_500', '中国500强', '0', '2018-06-13 10:40:57', null, '0.00000', '0', '0', '0', 'enterprise_tag', '0', '0', '0', '0');
INSERT INTO `dic_info` VALUES ('7', 'enterprise_match_status_no', '未对接', '0', '2018-06-13 10:43:16', null, '0.00000', '0', '0', '0', 'enterprise_match_status', '0', '0', '0', '0');
INSERT INTO `dic_info` VALUES ('8', 'enterprise_match_status_ok', '已对接', '0', '2018-06-13 10:43:23', null, '0.00000', '0', '0', '0', 'enterprise_match_status', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for dic_level
-- ----------------------------
DROP TABLE IF EXISTS `dic_level`;
CREATE TABLE `dic_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_level
-- ----------------------------
INSERT INTO `dic_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:35', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for dic_process
-- ----------------------------
DROP TABLE IF EXISTS `dic_process`;
CREATE TABLE `dic_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `dic_sn` varchar(50) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_process
-- ----------------------------

-- ----------------------------
-- Table structure for dic_status
-- ----------------------------
DROP TABLE IF EXISTS `dic_status`;
CREATE TABLE `dic_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_status
-- ----------------------------
INSERT INTO `dic_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:39', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for dic_type
-- ----------------------------
DROP TABLE IF EXISTS `dic_type`;
CREATE TABLE `dic_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dic_type
-- ----------------------------
INSERT INTO `dic_type` VALUES ('2', '0', '默认内置', '0', '2018-06-13 10:42:17', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `dic_type` VALUES ('3', 'enterprise_tag', '企业标签', '0', '2018-06-13 10:42:18', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `dic_type` VALUES ('4', 'enterprise_match_status', '企业对接状态', '0', '2018-06-13 10:42:36', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `dic_type` VALUES ('5', 'enterprise_credit', '企业资质', '0', '2018-06-13 10:42:47', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for enterprise_class
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_class`;
CREATE TABLE `enterprise_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_class
-- ----------------------------
INSERT INTO `enterprise_class` VALUES ('1', '0', '默认内置', '0', '2018-06-13 10:34:21', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for enterprise_connect_status
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_connect_status`;
CREATE TABLE `enterprise_connect_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_connect_status
-- ----------------------------
INSERT INTO `enterprise_connect_status` VALUES ('10', 'before', '待对接', '0', '2018-10-19 11:02:16', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_connect_status` VALUES ('11', 'after', '已对接', '0', '2018-10-19 11:02:16', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_connect_status` VALUES ('12', 'inprocess', '对接中', '0', '2018-10-19 11:02:16', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_connect_status` VALUES ('13', 'KO', '已KO', '0', '2018-10-19 11:02:16', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for enterprise_file
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_file`;
CREATE TABLE `enterprise_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=466 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_file
-- ----------------------------

-- ----------------------------
-- Table structure for enterprise_info
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_info`;
CREATE TABLE `enterprise_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(255) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL COMMENT '项目编号',
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0' COMMENT '公司类型',
  `status_sn` varchar(50) NOT NULL DEFAULT '0' COMMENT '经营状态',
  `level_sn` varchar(50) NOT NULL DEFAULT '0' COMMENT '企业等级',
  `more_info` varchar(255) DEFAULT '0' COMMENT '备注',
  `seo_tag` varchar(255) DEFAULT '0' COMMENT '企业标签',
  `default_contact_user_sn` varchar(50) NOT NULL DEFAULT '0',
  `current_lenovo_user_sn` varchar(50) NOT NULL DEFAULT '0',
  `basic_dic_match_status_sn` varchar(50) NOT NULL DEFAULT 'enterprise_match_status_no' COMMENT '对接状态',
  `basic_is_lenovo` int(1) NOT NULL DEFAULT '0' COMMENT '是否合作过',
  `basic_cn_uid` varchar(50) DEFAULT '' COMMENT '统一信用代码',
  `basic_setup_dt` date DEFAULT NULL COMMENT '成立日期',
  `basic_latest_reg_dt` date DEFAULT NULL COMMENT '最新变更日期',
  `basic_org_sn` varchar(255) DEFAULT '' COMMENT '组织机构代码',
  `basic_reg_sn` varchar(255) DEFAULT '' COMMENT '注册号',
  `basic_reg_address` varchar(255) DEFAULT '' COMMENT '总部地点',
  `basic_legal_rep` varchar(255) DEFAULT '' COMMENT '法人代表',
  `basic_reg_capital` decimal(18,6) DEFAULT '100.000000' COMMENT '注册资本',
  `basic_biz_keywords` varchar(255) DEFAULT NULL COMMENT '主营业务',
  `basic_biz_range` text COMMENT '经营范围',
  `basic_biz_dt_range` varchar(255) DEFAULT '' COMMENT '营业期限',
  `basic_biz_address` varchar(255) DEFAULT '' COMMENT '企业地址',
  `basic_biz_tel` varchar(255) DEFAULT '' COMMENT '办公电话',
  `basic_nda` varchar(50) DEFAULT NULL COMMENT 'NDA签署',
  `basic_charge_office` varchar(255) DEFAULT '' COMMENT '登记机关',
  `acc_bank` varchar(255) DEFAULT '' COMMENT '收款银行',
  `acc_bank_branch` varchar(255) DEFAULT '' COMMENT '支行名称',
  `acc_bank_sn` varchar(255) DEFAULT '' COMMENT '账号',
  `acc_asset` decimal(18,2) NOT NULL DEFAULT '0.00',
  `acc_debt` decimal(18,2) NOT NULL DEFAULT '0.00',
  `acc_sales` decimal(18,2) NOT NULL DEFAULT '0.00',
  `acc_profit` decimal(18,2) NOT NULL DEFAULT '0.00',
  `acc_debt_rate` decimal(18,2) NOT NULL DEFAULT '0.00',
  `acc_year` varchar(50) NOT NULL DEFAULT '-',
  `acc_asset_last` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '资产总额',
  `acc_debt_last` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '负债总额',
  `acc_sales_last` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '销售收入',
  `acc_profit_last` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '净利润',
  `acc_debt_rate_last` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '资产负债率（%）',
  `acc_year_last` varchar(50) NOT NULL DEFAULT '-',
  `other_credits` text COMMENT '资质认证',
  `other_website` varchar(255) DEFAULT '' COMMENT '公司网站',
  `other_email` varchar(255) DEFAULT '' COMMENT '公司邮箱',
  `other_size` varchar(255) DEFAULT '' COMMENT '公司规模',
  `other_deliver_days` int(8) NOT NULL DEFAULT '1' COMMENT '最短交货期',
  `other_deliver_address` varchar(255) DEFAULT NULL COMMENT '交货地点',
  `other_transport` varchar(255) DEFAULT '' COMMENT '运输方式',
  `other_insured_num` varchar(50) DEFAULT NULL COMMENT '参保人数',
  `other_taxpayer_aptitude` varchar(255) DEFAULT NULL COMMENT '纳税人资质',
  `other_tax_level` varchar(255) DEFAULT NULL COMMENT '税级',
  `is_partner` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2899 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_info
-- ----------------------------
INSERT INTO `enterprise_info` VALUES ('2673', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d', '基山', '0', '2018-10-06 20:35:56', '', '2018-11-07 16:33:05', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', 'ietig_460c7c1f_1656_4ffe_a8f4_80eb713a31d2', 'ietig_2a4ffd45_19fd_4393_930c_55f8d7d8ae1b', 'before', '1', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', '', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '否', '高新工商局', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', '', '', null, null, null, '');
INSERT INTO `enterprise_info` VALUES ('2873', 'ietig_f8bea90f_8401_4ce6_8b28_9bfdc187b9f9', '华为', 'sa', '2018-10-23 09:18:31', '', '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'before', '0', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '否', '高新工商局', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '资质认证', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', '', '', null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2872', 'ietig_59964f8d_07a9_449b_81d9_26052dc8c298', '陆友', 'sa', '2018-10-23 09:01:11', '', '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'before', '0', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', '', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '是', '高新工商局', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', '', '', null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2874', 'ietig_488f7fb8_e60f_4426_8a1d_e0e575eb71d0', '成都谛听科技股份有限公司', 'sa', '2018-10-24 06:57:45', '', '2018-11-09 16:45:00', '0.00000', '0', '0', '0', 'ietig_e4355de8_d811_4468_b572_7ee098e4b761', 'normal', 'no_ipo', '2009年11月13日,公司前身成都谛听科技有限公司成立。    2015年10月09日,公司名称由“成都谛听科技有限公司”变更为“成都谛听科技股份有限公司”。', '高新企业', '0', '0', 'after', '1', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', '', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', null, '高新工商局', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '2016', '0.00', '0.00', '0.00', '0.00', '0.00', '2017', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '11', '', '', '45', '-', '', null);
INSERT INTO `enterprise_info` VALUES ('2876', 'ietig_a4ddf08b_7081_439f_86ba_bb6546368659', '腾讯', 'sa', '2018-10-24 08:02:55', null, '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'after', '1', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', null, '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '是', '高新工商局', null, null, null, '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', null, null, null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2879', 'ietig_9aa0816a_1877_4485_a1b7_70d2bca64532', '百度', 'sa', '2018-10-24 08:42:56', null, '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'after', '1', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', null, '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '是', '高新工商局', null, null, null, '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', null, null, null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2887', 'jd', '阿里巴巴', '0', '2018-11-02 13:33:04', '', '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'before', '0', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', null, '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '是', '高新工商局', null, null, null, '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', null, null, null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2892', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306p', '京东', '0', '2018-11-06 14:12:00', null, '2018-11-07 16:32:28', '0.00000', '0', '0', '0', '其他股份有限公司(非上市)', '存续', '0', '0', '高新企业', '0', '0', 'before', '0', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', null, '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', '是', '高新工商局', null, null, null, '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', null, null, null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2893', 'ietig_7ed3bf5a_9378_4a19_9f3a_d1dbf924561b', '小米', 'sa', '2018-11-06 16:41:17', '', '2018-11-08 09:58:33', '0.00000', '0', '0', '0', '0', '0', '0', '0', '高新企业', '0', '0', 'before', '0', '91510100696253881L', '2009-11-13', '2018-09-24', '696253881', '510109000098372', '中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号', '李程', '41666670.000000', '', '开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。', '2009-11-13至3999-01-01', '\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\"', '028-85980925', null, '高新工商局', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'http://www.newifi.com', 'dt@cloud.cc', '小于50人', '1', '', '', null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2894', 'f49633b1b766af4c', '上海翰博国际贸易有限公司', '0', '2018-11-08 10:59:51', '', '2018-11-08 14:22:39', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'before', '0', '', '1970-01-01', '1970-01-01', '', '', '', '', '100.000000', '', '', '', '上海闵行区颛桥镇--上海市闵行区剑川路951号零号湾1号楼南708A-B', '021-64755216', '', 'null', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'null', '', '少于50人', '1', '', '', null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2895', 'e8b887c172c7c7d7', '雅松家具', '0', '2018-11-08 13:25:48', 'null', '2018-11-08 16:28:57', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'before', '0', 'null', '1970-01-01', '1970-01-01', 'null', 'null', 'null', 'null', '100.000000', 'null', 'null', 'null', '', '', null, 'null', 'null', 'null', 'null', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '', 'null', '', 'null', '1', 'null', '1', null, null, null, null);
INSERT INTO `enterprise_info` VALUES ('2898', 'a427d9b90f15b116', '我播科技', '0', '2018-11-08 17:26:27', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'enterprise_match_status_no', '0', '', null, null, '', '', '', '', '100.000000', null, null, '', '', '', null, '', '', '', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0', '0.00', '0.00', '0.00', '0.00', '0.00', '0', null, '', '', '', '1', null, '', null, null, null, '');

-- ----------------------------
-- Table structure for enterprise_level
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_level`;
CREATE TABLE `enterprise_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_level
-- ----------------------------
INSERT INTO `enterprise_level` VALUES ('1', '0', '默认内置', '0', '2018-06-13 09:14:30', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_level` VALUES ('2', 'ipo', '已上市', '0', '2018-06-13 09:14:32', '2018-10-25 17:28:40', '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_level` VALUES ('3', 'no_ipo', '未上市', '0', '2018-06-13 09:14:37', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for enterprise_process
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_process`;
CREATE TABLE `enterprise_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_process
-- ----------------------------

-- ----------------------------
-- Table structure for enterprise_status
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_status`;
CREATE TABLE `enterprise_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_status
-- ----------------------------
INSERT INTO `enterprise_status` VALUES ('1', '0', '默认内置', '0', '2018-06-13 10:20:11', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_status` VALUES ('2', 'normal', '存续(再营、开业、在册)', '0', '2018-06-13 10:20:22', '2018-10-25 17:33:53', '1.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_status` VALUES ('3', 'fault', '异常', '0', '2018-06-13 10:20:42', null, '2.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_status` VALUES ('4', 'dead', '注销', '0', '2018-06-13 10:20:53', null, '3.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_status` VALUES ('5', 'kill', '吊销', '0', '2018-06-13 10:21:02', null, '4.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for enterprise_type
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_type`;
CREATE TABLE `enterprise_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise_type
-- ----------------------------
INSERT INTO `enterprise_type` VALUES ('2', '0', '默认内置', '0', '2018-06-13 10:31:12', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_type` VALUES ('3', 'single', '独资公司', '0', '2018-06-13 10:31:24', null, '3.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_type` VALUES ('4', 'ltd', '有限责任公司', '0', '2018-06-13 10:31:35', '2018-10-25 17:22:49', '1.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_type` VALUES ('5', 'share', '股份有限公司', '0', '2018-06-13 10:31:46', null, '2.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `enterprise_type` VALUES ('7', 'ietig_e4355de8_d811_4468_b572_7ee098e4b761', '其他股份有限公司', '0', '2018-11-09 16:06:23', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for file_class
-- ----------------------------
DROP TABLE IF EXISTS `file_class`;
CREATE TABLE `file_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_class
-- ----------------------------
INSERT INTO `file_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:38:40', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for file_file
-- ----------------------------
DROP TABLE IF EXISTS `file_file`;
CREATE TABLE `file_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_a_sn` varchar(50) NOT NULL DEFAULT '0',
  `file_b_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_file
-- ----------------------------

-- ----------------------------
-- Table structure for file_info
-- ----------------------------
DROP TABLE IF EXISTS `file_info`;
CREATE TABLE `file_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `file_bytes` decimal(18,0) NOT NULL DEFAULT '0',
  `file_postfix` varchar(50) NOT NULL DEFAULT 'txt',
  `file_md5` varchar(50) NOT NULL DEFAULT '-',
  `file_save_path` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=461 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_info
-- ----------------------------
INSERT INTO `file_info` VALUES ('459', '18e3eef10246944117da0bf9e3156c63', '666', '0', '2018-10-23 05:59:20', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '60', '.png', '-', './upload/product/ietig_c9f05766_3cc5_4478_83b6_fff0a8fa40e4/666');
INSERT INTO `file_info` VALUES ('460', 'd381fa9e4d53eae8431a4a3e95ac1a49', '5566', '0', '2018-10-24 06:53:50', 'null', '2018-10-23 14:54:17', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '1611', '.mp4', '-', './upload/product/ietig_878782e1_dc55_4ded_8c3c_3679202660b4/5566');

-- ----------------------------
-- Table structure for file_level
-- ----------------------------
DROP TABLE IF EXISTS `file_level`;
CREATE TABLE `file_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_level
-- ----------------------------
INSERT INTO `file_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:38:46', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for file_process
-- ----------------------------
DROP TABLE IF EXISTS `file_process`;
CREATE TABLE `file_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime NOT NULL,
  `display_code` decimal(18,5) DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_process
-- ----------------------------

-- ----------------------------
-- Table structure for file_status
-- ----------------------------
DROP TABLE IF EXISTS `file_status`;
CREATE TABLE `file_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_status
-- ----------------------------
INSERT INTO `file_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:38:50', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for file_type
-- ----------------------------
DROP TABLE IF EXISTS `file_type`;
CREATE TABLE `file_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_type
-- ----------------------------
INSERT INTO `file_type` VALUES ('2', '0', '默认内置', '0', '2018-06-26 08:38:56', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for industry_class
-- ----------------------------
DROP TABLE IF EXISTS `industry_class`;
CREATE TABLE `industry_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_class
-- ----------------------------
INSERT INTO `industry_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:00', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for industry_file
-- ----------------------------
DROP TABLE IF EXISTS `industry_file`;
CREATE TABLE `industry_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `industry_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_file
-- ----------------------------

-- ----------------------------
-- Table structure for industry_info
-- ----------------------------
DROP TABLE IF EXISTS `industry_info`;
CREATE TABLE `industry_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_info
-- ----------------------------
INSERT INTO `industry_info` VALUES ('18', '7442d08b_a42a_11e8_9425_fa163e7f691a', '车载', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('17', '7441ec5a_a42a_11e8_9425_fa163e7f691a', '户外', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('16', '7440a6bb_a42a_11e8_9425_fa163e7f691a', '可穿戴', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('15', '743f61f8_a42a_11e8_9425_fa163e7f691a', '健康', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('14', '743e150d_a42a_11e8_9425_fa163e7f691a', '母婴', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('13', '743d41c1_a42a_11e8_9425_fa163e7f691a', '家居', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('19', '7443978a_a42a_11e8_9425_fa163e7f691a', '智能办公', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('20', '74446e6f_a42a_11e8_9425_fa163e7f691a', '关键部件', '0', '2018-08-20 11:38:08', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('21', '7445306b_a42a_11e8_9425_fa163e7f691a', 'ODM', '0', '2018-08-20 11:38:08', 'null', '2018-10-25 16:32:33', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `industry_info` VALUES ('41', 'ietig_ff980524_5617_4bbd_85f0_527ee6414b8d', '研究和试验发展', '0', '2018-11-09 16:41:37', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for industry_level
-- ----------------------------
DROP TABLE IF EXISTS `industry_level`;
CREATE TABLE `industry_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_level
-- ----------------------------
INSERT INTO `industry_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:06', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for industry_process
-- ----------------------------
DROP TABLE IF EXISTS `industry_process`;
CREATE TABLE `industry_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `industry_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_process
-- ----------------------------

-- ----------------------------
-- Table structure for industry_status
-- ----------------------------
DROP TABLE IF EXISTS `industry_status`;
CREATE TABLE `industry_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_status
-- ----------------------------
INSERT INTO `industry_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:39:11', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for industry_type
-- ----------------------------
DROP TABLE IF EXISTS `industry_type`;
CREATE TABLE `industry_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of industry_type
-- ----------------------------
INSERT INTO `industry_type` VALUES ('2', '0', '默认内置', '0', '2018-06-26 08:39:16', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for master_info
-- ----------------------------
DROP TABLE IF EXISTS `master_info`;
CREATE TABLE `master_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) DEFAULT NULL,
  `creator_sn` varchar(50) DEFAULT '0',
  `create_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) DEFAULT '0.00000',
  `is_deleted` bit(1) DEFAULT b'0',
  `is_na` bit(1) DEFAULT b'0',
  `class_sn` varchar(50) DEFAULT '0',
  `type_sn` varchar(50) DEFAULT '0',
  `status_sn` varchar(50) DEFAULT '0',
  `level_sn` varchar(50) DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `login_name` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL DEFAULT '52C69E3A57331081823331C4E69D3F2E',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of master_info
-- ----------------------------
INSERT INTO `master_info` VALUES ('1', '0', '开发者', '0', null, null, '0.00000', '\0', '\0', '0', '0', '0', '0', '0', '0', 'dev', '52C69E3A57331081823331C4E69D3F2E');
INSERT INTO `master_info` VALUES ('2', 'sa', '超级管理员', '0', null, null, '0.00000', '\0', '\0', '0', '0', '0', '0', '0', '0', 'sa', '52C69E3A57331081823331C4E69D3F2E');

-- ----------------------------
-- Table structure for para_class
-- ----------------------------
DROP TABLE IF EXISTS `para_class`;
CREATE TABLE `para_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_class
-- ----------------------------

-- ----------------------------
-- Table structure for para_file
-- ----------------------------
DROP TABLE IF EXISTS `para_file`;
CREATE TABLE `para_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `para_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_file
-- ----------------------------

-- ----------------------------
-- Table structure for para_info
-- ----------------------------
DROP TABLE IF EXISTS `para_info`;
CREATE TABLE `para_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `template_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_info
-- ----------------------------

-- ----------------------------
-- Table structure for para_level
-- ----------------------------
DROP TABLE IF EXISTS `para_level`;
CREATE TABLE `para_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_level
-- ----------------------------

-- ----------------------------
-- Table structure for para_process
-- ----------------------------
DROP TABLE IF EXISTS `para_process`;
CREATE TABLE `para_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `para_sn` varchar(50) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_process
-- ----------------------------

-- ----------------------------
-- Table structure for para_status
-- ----------------------------
DROP TABLE IF EXISTS `para_status`;
CREATE TABLE `para_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_status
-- ----------------------------

-- ----------------------------
-- Table structure for para_type
-- ----------------------------
DROP TABLE IF EXISTS `para_type`;
CREATE TABLE `para_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of para_type
-- ----------------------------

-- ----------------------------
-- Table structure for partner_contract
-- ----------------------------
DROP TABLE IF EXISTS `partner_contract`;
CREATE TABLE `partner_contract` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `partner_sn` varchar(50) DEFAULT NULL COMMENT '合作伙伴sn',
  `contract_position` varchar(50) DEFAULT NULL COMMENT '联系人姓名',
  `contract_name` varchar(50) NOT NULL COMMENT '联系人姓名',
  `contract_phone` varchar(12) DEFAULT NULL COMMENT '联系人电话',
  `contract_wechat` varchar(100) DEFAULT NULL COMMENT '联系人微信',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COMMENT='合作伙伴联系人表';

-- ----------------------------
-- Records of partner_contract
-- ----------------------------
INSERT INTO `partner_contract` VALUES ('1', '7442d08b_a42a_11e8_9425_fa163e7f691a', '总裁', '雷军', '13355556666', 'leijun', '2018-11-01 15:29:20');
INSERT INTO `partner_contract` VALUES ('2', '7442d08b_a42a_11e8_9425_fa163e7f691a', '副总裁', '洪锋', '13322223333', 'hongfeng', '2018-11-05 15:29:20');
INSERT INTO `partner_contract` VALUES ('14', '7442d08b_a42a_11e8_9425_fa163e7f691a', '副总', '陈彤', '13377779999', 'chentong', '2018-11-06 17:16:04');
INSERT INTO `partner_contract` VALUES ('19', 'ietig_11088632_2d08_4e48_85f5_62446684098f', '总裁', '李彦宏', '13344445555', 'liyanhong', '2018-11-06 17:17:17');
INSERT INTO `partner_contract` VALUES ('22', 'ietig_59f0d1fc_e628_4d2d_aa4f_5051859f09c5', '总裁', '马云', '13333338888', 'mayun', '2018-11-07 11:28:26');

-- ----------------------------
-- Table structure for partner_developer_evaluation
-- ----------------------------
DROP TABLE IF EXISTS `partner_developer_evaluation`;
CREATE TABLE `partner_developer_evaluation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `partner_sn` varchar(50) DEFAULT NULL COMMENT '合作伙伴id',
  `problem_demand` varchar(1000) DEFAULT NULL COMMENT '主要问题及需求',
  `strategy_plan` varchar(255) DEFAULT NULL COMMENT '合作策略及下一步计划',
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='开发者综合评估';

-- ----------------------------
-- Records of partner_developer_evaluation
-- ----------------------------

-- ----------------------------
-- Table structure for partner_info
-- ----------------------------
DROP TABLE IF EXISTS `partner_info`;
CREATE TABLE `partner_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL COMMENT '公司名称',
  `industry_info_id` int(11) NOT NULL,
  `product_info_id` int(11) NOT NULL COMMENT '产品id',
  `contract_name` varchar(50) NOT NULL COMMENT '联系人姓名',
  `contract_phone` varchar(11) NOT NULL COMMENT '联系人电话',
  `contract_position` varchar(50) NOT NULL COMMENT '联系人职务',
  `first_visit_date` varchar(30) DEFAULT NULL,
  `first_visit_people` varchar(30) DEFAULT NULL COMMENT '首次拜访人姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of partner_info
-- ----------------------------
INSERT INTO `partner_info` VALUES ('1', '测试', '18', '2867', '联想', '13366688888', '总裁', '2018-10-18', '小贾');

-- ----------------------------
-- Table structure for partner_list
-- ----------------------------
DROP TABLE IF EXISTS `partner_list`;
CREATE TABLE `partner_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `sn` varchar(50) CHARACTER SET utf8 NOT NULL,
  `company_name` varchar(100) NOT NULL COMMENT '公司名称',
  `company_address` varchar(500) DEFAULT NULL COMMENT '公司地址',
  `industry_id` int(11) NOT NULL COMMENT '行业类别id',
  `product_id` int(11) NOT NULL COMMENT '主要产品id',
  `first_visit_time` varchar(50) NOT NULL COMMENT '首次拜访时间',
  `first_visitor` varchar(50) NOT NULL COMMENT '首次拜访联想人员姓名',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `type_sn` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0' COMMENT '公司类型',
  `status_sn` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0' COMMENT '经营状态',
  `create_dt` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of partner_list
-- ----------------------------
INSERT INTO `partner_list` VALUES ('1', '7442d08b_a42a_11e8_9425_fa163e7f691a', '小米', '北京市朝阳区', '13', '2877', '2018-10-22', '赵某某', '0', '0', '0', '0', '0', '2018-11-03 10:07:14');
INSERT INTO `partner_list` VALUES ('23', 'ietig_11088632_2d08_4e48_85f5_62446684098f', '百度', '北京中关村', '18', '2870', '2018-11-05', '某某某', '0', '0', '0', '0', '0', '2018-09-07 10:07:14');
INSERT INTO `partner_list` VALUES ('24', 'ietig_59f0d1fc_e628_4d2d_aa4f_5051859f09c5', '阿里巴巴', '浙江省  杭州市余杭区文一西路969号（高教路口），杭州未来科技城核心区域五常街道', '13', '2870', '2018-09-11', '刘某某', '0', '0', '0', '0', '0', '2018-10-07 10:07:14');

-- ----------------------------
-- Table structure for partner_score
-- ----------------------------
DROP TABLE IF EXISTS `partner_score`;
CREATE TABLE `partner_score` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `partner_sn` varchar(50) NOT NULL COMMENT '合作伙伴id',
  `product_concept` double(10,1) DEFAULT '0.0' COMMENT '产品概念满分10',
  `product_concept_des` varchar(1000) DEFAULT NULL,
  `just_need` double(10,1) DEFAULT '0.0' COMMENT '刚需度满分15',
  `just_need_des` varchar(1000) DEFAULT NULL,
  `appearance_materia` double(10,1) DEFAULT '0.0' COMMENT '外观设计/材质满分5分',
  `appearance_materia_des` varchar(1000) DEFAULT NULL,
  `holistic_experience` double(10,1) DEFAULT '0.0' COMMENT '整体体验满分10',
  `holistic_experience_des` varchar(1000) DEFAULT NULL,
  `technology_maturity` double(10,1) DEFAULT '0.0' COMMENT '技术成熟度（10）',
  `technology_maturity_des` varchar(1000) DEFAULT NULL,
  `batch_production` double(10,1) DEFAULT '0.0' COMMENT '量产性满分10',
  `batch_production_des` varchar(1000) DEFAULT NULL,
  `product_experience` double(10,1) DEFAULT '0.0' COMMENT '产品经验10',
  `product_experience_des` varchar(1000) DEFAULT NULL,
  `team_background` double(10,1) DEFAULT '0.0' COMMENT '成员/团队背景满分10',
  `team_background_des` varchar(1000) DEFAULT NULL,
  `resource_capacity` double(10,1) DEFAULT '0.0' COMMENT '资源能力5',
  `resource_capacity_des` varchar(1000) DEFAULT NULL,
  `communication_cooperation` double(10,1) DEFAULT '0.0' COMMENT '沟通合作满分5',
  `communication_cooperation_des` varchar(1000) DEFAULT NULL,
  `planning_interaction` double(10,1) DEFAULT '0.0' COMMENT '包装策划及互动满分5',
  `planning_interaction_des` varchar(1000) DEFAULT NULL,
  `investment_situation` double(10,1) DEFAULT '0.0' COMMENT '资金/投资情况5',
  `investment_situation_des` varchar(1000) DEFAULT NULL,
  `total_score` double(10,1) DEFAULT '0.0' COMMENT '总分',
  `create_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='合作伙伴评分';

-- ----------------------------
-- Records of partner_score
-- ----------------------------
INSERT INTO `partner_score` VALUES ('1', '7442d08b_a42a_11e8_9425_fa163e7f691a', '7.0', '5分', '11.0', '11分', '3.0', '10分', '10.0', '12分', '3.0', '3分', '4.0', '4分', '5.0', '5分', '6.0', '6分', '12.0', '12分', '5.0', '11分', '4.0', '4分', '8.0', '8分', '87.0', '2018-11-08 17:19:03');
INSERT INTO `partner_score` VALUES ('2', 'ietig_11088632_2d08_4e48_85f5_62446684098f', '9.0', '9分', '10.0', '10分', '3.0', '3分', '9.0', '9分', '8.0', '8分', '7.0', '7分', '6.0', '6分', '5.0', '5分', '4.0', '4分', '3.0', '3分', '2.0', '2分', '1.0', '1分', '67.0', '2018-11-06 18:27:22');
INSERT INTO `partner_score` VALUES ('3', 'ietig_59f0d1fc_e628_4d2d_aa4f_5051859f09c5', '9.0', '9分', '10.0', '10分', '3.0', '3分', '9.0', '9分', '9.0', '9分', '8.0', '8分', '7.0', '7分', '6.0', '6分', '5.0', '5分', '3.0', '3分', '3.0', '', '4.0', '', '76.0', '2018-11-07 11:30:27');

-- ----------------------------
-- Table structure for partner_visit_record
-- ----------------------------
DROP TABLE IF EXISTS `partner_visit_record`;
CREATE TABLE `partner_visit_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `partner_sn` varchar(50) DEFAULT NULL COMMENT '合作伙伴sn',
  `visitor` varchar(20) DEFAULT NULL COMMENT '负责人',
  `content` varchar(2000) DEFAULT NULL COMMENT '跟踪纪要',
  `visit_date` varchar(100) DEFAULT NULL COMMENT '跟踪日期',
  `create_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录创建日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='合作伙伴后续跟踪记录';

-- ----------------------------
-- Records of partner_visit_record
-- ----------------------------
INSERT INTO `partner_visit_record` VALUES ('1', '7442d08b_a42a_11e8_9425_fa163e7f691a', '某某', '和客户进行沟通', '2018-10-25', '2018-11-06 20:04:24');
INSERT INTO `partner_visit_record` VALUES ('2', '7442d08b_a42a_11e8_9425_fa163e7f691a', '王某某', '维护客户关系', '2018-10-28', '2018-10-31 01:51:18');
INSERT INTO `partner_visit_record` VALUES ('4', 'ietig_11088632_2d08_4e48_85f5_62446684098f', '张某某', '继续需求讨论', '2018-11-06', '2018-11-06 19:27:27');
INSERT INTO `partner_visit_record` VALUES ('6', 'ietig_59f0d1fc_e628_4d2d_aa4f_5051859f09c5', '单某某', '签合同', '2018-11-07', '2018-11-07 13:02:05');

-- ----------------------------
-- Table structure for process_class
-- ----------------------------
DROP TABLE IF EXISTS `process_class`;
CREATE TABLE `process_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_class
-- ----------------------------

-- ----------------------------
-- Table structure for process_file
-- ----------------------------
DROP TABLE IF EXISTS `process_file`;
CREATE TABLE `process_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_file
-- ----------------------------

-- ----------------------------
-- Table structure for process_info
-- ----------------------------
DROP TABLE IF EXISTS `process_info`;
CREATE TABLE `process_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_info
-- ----------------------------

-- ----------------------------
-- Table structure for process_level
-- ----------------------------
DROP TABLE IF EXISTS `process_level`;
CREATE TABLE `process_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_level
-- ----------------------------

-- ----------------------------
-- Table structure for process_process
-- ----------------------------
DROP TABLE IF EXISTS `process_process`;
CREATE TABLE `process_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_a_sn` varchar(50) NOT NULL DEFAULT '0',
  `process_b_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_process
-- ----------------------------

-- ----------------------------
-- Table structure for process_status
-- ----------------------------
DROP TABLE IF EXISTS `process_status`;
CREATE TABLE `process_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_status
-- ----------------------------

-- ----------------------------
-- Table structure for process_type
-- ----------------------------
DROP TABLE IF EXISTS `process_type`;
CREATE TABLE `process_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of process_type
-- ----------------------------

-- ----------------------------
-- Table structure for product_class
-- ----------------------------
DROP TABLE IF EXISTS `product_class`;
CREATE TABLE `product_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_class
-- ----------------------------
INSERT INTO `product_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:31:47', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for product_file
-- ----------------------------
DROP TABLE IF EXISTS `product_file`;
CREATE TABLE `product_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_file
-- ----------------------------
INSERT INTO `product_file` VALUES ('2', 'ietig_340ba1c3_7eb2_4376_8378_1b298728ceb3', 'sa', '2018-10-23 05:59:21', '2018-10-22 13:59:32', '0.00000', '1', '0', '18e3eef10246944117da0bf9e3156c63', 'ietig_c9f05766_3cc5_4478_83b6_fff0a8fa40e4', '0', '0');
INSERT INTO `product_file` VALUES ('3', 'ietig_c9aa7e90_0ae0_467f_8b76_6018db5bfe46', 'sa', '2018-10-24 06:53:50', '2018-10-23 14:54:19', '0.00000', '1', '0', 'd381fa9e4d53eae8431a4a3e95ac1a49', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4', '0', '0');

-- ----------------------------
-- Table structure for product_info
-- ----------------------------
DROP TABLE IF EXISTS `product_info`;
CREATE TABLE `product_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(255) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `sku` varchar(255) DEFAULT NULL,
  `moq` decimal(18,2) NOT NULL DEFAULT '100.00',
  `moq_unit` varchar(50) NOT NULL DEFAULT '件',
  `price_sale` decimal(18,2) NOT NULL DEFAULT '0.00',
  `price_out` decimal(18,2) NOT NULL DEFAULT '0.00',
  `img_file_sn` varchar(50) NOT NULL DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  `project_sn` varchar(50) NOT NULL DEFAULT '0',
  `detail_info` text,
  `sample_provided` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2878 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_info
-- ----------------------------
INSERT INTO `product_info` VALUES ('2867', 'ietig_7b3dcdef_1a30_41c8_b636_0086a12cea82', '路由器', '0', '2018-10-06 20:36:20', 'undefined', '2018-10-25 10:35:29', '0.00000', '0', '0', '0', '0', '0', 'mature', '挖矿', '路由器的一些介绍性文字', 'newifi3', '0.00', '', '0.00', '0.00', '0', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e306d', '0', null, '1');
INSERT INTO `product_info` VALUES ('2872', 'ietig_878782e1_dc55_4ded_8c3c_3679202660b4', '', 'sa', '2018-10-24 06:38:03', '', '2018-10-25 09:30:05', '0.00000', '1', '0', '0', '0', '0', '0', '0', '0', '', '0.00', '', '0.00', '0.00', '0', '0', '0', null, '0');
INSERT INTO `product_info` VALUES ('2870', 'ietig_c9f05766_3cc5_4478_83b6_fff0a8fa40e4', '电脑', 'sa', '2018-10-20 09:22:06', '', '2018-10-25 10:59:29', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', 'computer', '0.00', '', '0.00', '0.00', '0', 'undefined', '0', null, '0');
INSERT INTO `product_info` VALUES ('2873', 'ietig_ec6f8dcc_3d7e_49cf_85b4_d59f1b2522cc', '鼠标', 'sa', '2018-10-26 02:39:03', '', '2018-10-25 14:01:12', '0.00000', '0', '0', '0', '0', '0', '0', '0', '对鼠标的一些介绍性文字', 'mouse', '0.00', '', '0.00', '0.00', '0', '0', '0', null, '0');
INSERT INTO `product_info` VALUES ('2874', 'ietig_cf990a6c_3dc4_47f3_95cc_1f68d35371d0', '手机', 'sa', '2018-10-26 05:25:29', '', '2018-10-25 14:08:57', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1.00', '1', '1.00', '1.00', '0', 'ietig_59964f8d_07a9_449b_81d9_26052dc8c298', '0', null, '0');
INSERT INTO `product_info` VALUES ('2875', 'ietig_7e916fa5_c064_483e_84a8_f7d31bc870eb', '键盘', 'sa', '2018-10-26 06:39:20', 'undefined', '2018-10-30 13:24:39', '0.00000', '0', '0', '0', '0', '0', '0', '0', '产品特性关键字', '产品SKU', '0.00', '个', '0.00', '0.00', '0', 'ietig_59964f8d_07a9_449b_81d9_26052dc8c298', '0', null, '0');
INSERT INTO `product_info` VALUES ('2877', 'ietig_a8b8b606_9e55_4ecd_8dc0_1a2df10e3123', '苹果手机双卡云双待适配器', '0', '2018-10-31 06:55:22', '', '2018-10-31 17:42:24', '0.00000', '0', '0', '0', '0', '0', '0', '0', '手机', 'null', '0.00', '', '0.00', '0.00', '0', 'undefined', '0', null, '0');

-- ----------------------------
-- Table structure for product_level
-- ----------------------------
DROP TABLE IF EXISTS `product_level`;
CREATE TABLE `product_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_level
-- ----------------------------
INSERT INTO `product_level` VALUES ('1', '0', '默认内置', '0', '2018-06-13 09:07:45', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_level` VALUES ('2', 'mature', '已上市', '0', '2018-06-13 09:07:46', '2018-08-19 22:41:57', '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_level` VALUES ('3', 'developed', '开发中', '0', '2018-06-13 09:07:58', '2018-08-19 22:42:02', '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_level` VALUES ('4', 'plan', '规划中', '0', '2018-06-13 09:08:03', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_level` VALUES ('5', 'unkown', '未知', '0', '2018-10-06 19:48:20', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for product_process
-- ----------------------------
DROP TABLE IF EXISTS `product_process`;
CREATE TABLE `product_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `product_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_process
-- ----------------------------

-- ----------------------------
-- Table structure for product_status
-- ----------------------------
DROP TABLE IF EXISTS `product_status`;
CREATE TABLE `product_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_status
-- ----------------------------
INSERT INTO `product_status` VALUES ('9', 'after', '已对接', '0', '2018-08-20 11:55:32', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_status` VALUES ('8', 'going', '对接中', '0', '2018-08-20 11:55:32', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_status` VALUES ('7', 'before', '待对接', '0', '2018-08-20 11:55:32', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `product_status` VALUES ('6', 'KO', '已KO', '0', '2018-08-20 11:55:32', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for product_type
-- ----------------------------
DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_type
-- ----------------------------
INSERT INTO `product_type` VALUES ('2', '0', '默认内置', '0', '2018-06-26 08:34:30', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for project_class
-- ----------------------------
DROP TABLE IF EXISTS `project_class`;
CREATE TABLE `project_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_class
-- ----------------------------
INSERT INTO `project_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:35:17', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for project_file
-- ----------------------------
DROP TABLE IF EXISTS `project_file`;
CREATE TABLE `project_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `project_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_file
-- ----------------------------

-- ----------------------------
-- Table structure for project_info
-- ----------------------------
DROP TABLE IF EXISTS `project_info`;
CREATE TABLE `project_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(255) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL COMMENT '项目编号',
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `enterprise_sn` varchar(50) NOT NULL DEFAULT '0',
  `lenovo_user_sn` varchar(50) NOT NULL DEFAULT '0',
  `contact_dt` datetime DEFAULT NULL,
  `total_budget` decimal(10,0) NOT NULL DEFAULT '0',
  `main_content` text,
  `plan_start_dt` date DEFAULT NULL,
  `plan_end_dt` date DEFAULT NULL,
  `real_start_dt` date DEFAULT NULL,
  `real_end_dt` date DEFAULT NULL,
  `total_real_investment` decimal(10,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_info
-- ----------------------------
INSERT INTO `project_info` VALUES ('3', '0', '默认内置', '0', '2018-06-13 08:43:27', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', null, null, null, null, null, '0');
INSERT INTO `project_info` VALUES ('4', '1', '测试项目1', '0', '2018-07-18 12:31:46', null, '2018-08-24 15:16:14', '0.00000', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-07-05 12:32:15', '222', '测试', '2018-07-17', '2018-08-04', '2018-07-11', '2018-08-05', '555');

-- ----------------------------
-- Table structure for project_level
-- ----------------------------
DROP TABLE IF EXISTS `project_level`;
CREATE TABLE `project_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `creator_sn` varchar(50) DEFAULT '0',
  `create_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) DEFAULT '0.00000',
  `is_deleted` int(1) DEFAULT '0',
  `is_na` int(1) DEFAULT '0',
  `father_sn` varchar(50) DEFAULT '0',
  `root_sn` varchar(50) DEFAULT '0',
  `class_sn` varchar(50) DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_level
-- ----------------------------
INSERT INTO `project_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:36:08', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for project_process
-- ----------------------------
DROP TABLE IF EXISTS `project_process`;
CREATE TABLE `project_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `project_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_process
-- ----------------------------

-- ----------------------------
-- Table structure for project_status
-- ----------------------------
DROP TABLE IF EXISTS `project_status`;
CREATE TABLE `project_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_status
-- ----------------------------
INSERT INTO `project_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:36:17', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for project_type
-- ----------------------------
DROP TABLE IF EXISTS `project_type`;
CREATE TABLE `project_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project_type
-- ----------------------------
INSERT INTO `project_type` VALUES ('2', '0', '默认内置', '0', '2018-06-26 08:36:25', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for sa
-- ----------------------------
DROP TABLE IF EXISTS `sa`;
CREATE TABLE `sa` (
  `field1` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of sa
-- ----------------------------
INSERT INTO `sa` VALUES (0x6964223B22736E223B226C6162656C223B2263726561746F725F736E223B226372656174655F6474223B22637573746F6D5F636F6465223B226C6173745F7570646174655F6474223B22646973706C61795F636F6465223B2269735F64656C65746564223B2269735F6E61223B22636C6173735F736E223B22747970655F736E223B227374617475735F736E223B226C6576656C5F736E223B226D6F72655F696E666F223B2273656F5F746167223B226C6F67696E5F6E616D65223B22707764223B22706F736974696F6E223B226D6F62696C65223B2274656C223B22656D61696C223B22636E5F6964223B226C656E6F766F5F636F756E74223B2269735F6E6F746963655F737973223B2269735F6E6F746963655F656E7465727072697365223B2269735F6E6F746963655F70726F64756374223B2269735F6E6F746963655F75736572223B2269735F6E6F746963655F70726F6A656374);
INSERT INTO `sa` VALUES (0x32223B227361223B22E8B49FE8B4A3E4BABA32223B2230223B22323031382D30362D31322032333A35393A3132223B223B223B22302E3030303030223B2230223B2230223B2230223B227361223B2230223B2230223B2230223B2230223B227361223B223532633639653361353733333130383138323333333163346536396433663265223B22313131223B223B223B223B223B2230223B2230223B2230223B2230223B2230223B2230);

-- ----------------------------
-- Table structure for scene_class
-- ----------------------------
DROP TABLE IF EXISTS `scene_class`;
CREATE TABLE `scene_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_class
-- ----------------------------
INSERT INTO `scene_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:37:31', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for scene_file
-- ----------------------------
DROP TABLE IF EXISTS `scene_file`;
CREATE TABLE `scene_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `scene_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_file
-- ----------------------------

-- ----------------------------
-- Table structure for scene_info
-- ----------------------------
DROP TABLE IF EXISTS `scene_info`;
CREATE TABLE `scene_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_info
-- ----------------------------
INSERT INTO `scene_info` VALUES ('14', 'ec26b04e_a42c_11e8_9425_fa163e7f691a', '智能影音', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('11', 'ec2404e0_a42c_11e8_9425_fa163e7f691a', '清洁', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('13', 'ec25e60c_a42c_11e8_9425_fa163e7f691a', '照明', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('12', 'ec251c8f_a42c_11e8_9425_fa163e7f691a', '健康饮食', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('10', 'ec2286f2_a42c_11e8_9425_fa163e7f691a', '智能管家', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('9', 'ec21a727_a42c_11e8_9425_fa163e7f691a', '智能网络', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('15', 'ec27848c_a42c_11e8_9425_fa163e7f691a', '卧室', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('16', 'ec287a11_a42c_11e8_9425_fa163e7f691a', '家居环境', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('17', 'ec296243_a42c_11e8_9425_fa163e7f691a', '厨房', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('18', 'ec2a438d_a42c_11e8_9425_fa163e7f691a', '浴室', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('19', 'ec2b16a8_a42c_11e8_9425_fa163e7f691a', '阳台', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('20', 'ec2bd07b_a42c_11e8_9425_fa163e7f691a', '个护', '0', '2018-08-20 11:55:48', 'null', '2018-10-25 16:40:31', '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('21', 'ec2ca3a9_a42c_11e8_9425_fa163e7f691a', '影音', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('22', 'ec2da2f6_a42c_11e8_9425_fa163e7f691a', '亲子', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('23', 'ec2e762c_a42c_11e8_9425_fa163e7f691a', '备孕', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('24', 'ec2f40ca_a42c_11e8_9425_fa163e7f691a', '大健康', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('25', 'ec300ffc_a42c_11e8_9425_fa163e7f691a', '穿戴-腕带类', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('26', 'ec30d7e4_a42c_11e8_9425_fa163e7f691a', '车安全', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('27', 'ec31d3a5_a42c_11e8_9425_fa163e7f691a', '车娱乐', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('28', 'ec32a082_a42c_11e8_9425_fa163e7f691a', '车生活', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('29', 'ec33636f_a42c_11e8_9425_fa163e7f691a', '服务', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('30', 'ec342950_a42c_11e8_9425_fa163e7f691a', '宠物生活', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('31', 'ec353956_a42c_11e8_9425_fa163e7f691a', '酷玩', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('32', 'ec362971_a42c_11e8_9425_fa163e7f691a', '出行', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('33', 'ec36fa3f_a42c_11e8_9425_fa163e7f691a', '手机周边', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('34', 'ec380ebb_a42c_11e8_9425_fa163e7f691a', '支付', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('35', 'ec38d64f_a42c_11e8_9425_fa163e7f691a', '教育', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('36', 'ec398ee1_a42c_11e8_9425_fa163e7f691a', '问诊', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `scene_info` VALUES ('37', 'ec3aa6eb_a42c_11e8_9425_fa163e7f691a', '慢性病管理', '0', '2018-08-20 11:55:48', null, null, '0.00000', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for scene_level
-- ----------------------------
DROP TABLE IF EXISTS `scene_level`;
CREATE TABLE `scene_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_level
-- ----------------------------
INSERT INTO `scene_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:37:41', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for scene_process
-- ----------------------------
DROP TABLE IF EXISTS `scene_process`;
CREATE TABLE `scene_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `scene_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_process
-- ----------------------------

-- ----------------------------
-- Table structure for scene_status
-- ----------------------------
DROP TABLE IF EXISTS `scene_status`;
CREATE TABLE `scene_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `creator_sn` varchar(50) DEFAULT '0',
  `create_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) DEFAULT '0.00000',
  `is_deleted` int(1) DEFAULT '0',
  `is_na` int(1) DEFAULT '0',
  `father_sn` varchar(50) DEFAULT '0',
  `root_sn` varchar(50) DEFAULT '0',
  `class_sn` varchar(50) DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_status
-- ----------------------------
INSERT INTO `scene_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:37:46', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for scene_type
-- ----------------------------
DROP TABLE IF EXISTS `scene_type`;
CREATE TABLE `scene_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scene_type
-- ----------------------------
INSERT INTO `scene_type` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:37:51', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for template_class
-- ----------------------------
DROP TABLE IF EXISTS `template_class`;
CREATE TABLE `template_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_class
-- ----------------------------
INSERT INTO `template_class` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:37:57', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for template_file
-- ----------------------------
DROP TABLE IF EXISTS `template_file`;
CREATE TABLE `template_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `template_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_file
-- ----------------------------

-- ----------------------------
-- Table structure for template_info
-- ----------------------------
DROP TABLE IF EXISTS `template_info`;
CREATE TABLE `template_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `entity_key` varchar(50) NOT NULL DEFAULT '0',
  `entity_class_sn` varchar(50) NOT NULL DEFAULT '0',
  `entity_type_sn` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_info
-- ----------------------------

-- ----------------------------
-- Table structure for template_level
-- ----------------------------
DROP TABLE IF EXISTS `template_level`;
CREATE TABLE `template_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_level
-- ----------------------------
INSERT INTO `template_level` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:38:03', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for template_process
-- ----------------------------
DROP TABLE IF EXISTS `template_process`;
CREATE TABLE `template_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `template_sn` varchar(50) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_process
-- ----------------------------

-- ----------------------------
-- Table structure for template_status
-- ----------------------------
DROP TABLE IF EXISTS `template_status`;
CREATE TABLE `template_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_status
-- ----------------------------
INSERT INTO `template_status` VALUES ('1', '0', '默认内置', '0', '2018-06-26 08:38:07', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for template_type
-- ----------------------------
DROP TABLE IF EXISTS `template_type`;
CREATE TABLE `template_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template_type
-- ----------------------------
INSERT INTO `template_type` VALUES ('2', '0', '默认内置', '0', '2018-06-26 08:38:12', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for user_class
-- ----------------------------
DROP TABLE IF EXISTS `user_class`;
CREATE TABLE `user_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_class
-- ----------------------------
INSERT INTO `user_class` VALUES ('1', '0', '默认内置', '0', '2018-06-25 06:22:13', null, '0.00000', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for user_file
-- ----------------------------
DROP TABLE IF EXISTS `user_file`;
CREATE TABLE `user_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `file_sn` varchar(50) NOT NULL DEFAULT '0',
  `user_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_file
-- ----------------------------

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `custom_code` varchar(50) DEFAULT NULL,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `type_sn` varchar(50) NOT NULL DEFAULT '0',
  `status_sn` varchar(50) NOT NULL DEFAULT '0',
  `level_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  `login_name` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) NOT NULL DEFAULT '52c69e3a57331081823331c4e69d3f2e',
  `position` varchar(50) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cn_id` varchar(50) DEFAULT NULL,
  `lenovo_count` int(11) NOT NULL DEFAULT '0',
  `is_notice_sys` int(1) NOT NULL DEFAULT '0',
  `is_notice_enterprise` int(1) NOT NULL DEFAULT '0',
  `is_notice_product` int(1) NOT NULL DEFAULT '0',
  `is_notice_user` int(1) NOT NULL DEFAULT '0',
  `is_notice_project` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=443 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('437', 'sa', '负责人2', '0', '2018-10-19 10:58:16', null, null, '0.00000', '0', '0', '0', 'sa', '0', '0', '0', '0', 'sa', '52c69e3a57331081823331c4e69d3f2e', '111', null, null, null, null, '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('442', 'ietig_9596c8a8_90ab_40fd_8e84_42ebea50f6f6', '李富贵', 'sa', '2018-10-26 08:17:54', null, null, '0.00000', '0', '0', '0', 'lenovo', '0', '0', '0', '0', null, '52c69e3a57331081823331c4e69d3f2e', '33', '2222222222222', '222222222', '22', null, '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('441', 'ietig_c3946fd6_90b0_4998_a48a_1f4274818817', '张晓光', 'sa', '2018-10-26 07:26:05', null, null, '0.00000', '0', '0', '0', 'lenovo', '0', '0', '0', '0', 'undefined', '52c69e3a57331081823331c4e69d3f2e', '经理', '18242063659', '0412-8610737', '666@126.com', null, '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('440', 'ietig_8fe0099a_7486_4b23_921d_6fd4132ee936', '李飞', 'sa', '2018-10-26 06:34:30', 'null', '2018-10-25 16:10:24', '0.00000', '0', '0', '0', 'lenovo', '0', '0', '0', '0', '88', '52c69e3a57331081823331c4e69d3f2e', '22', '11111111111', '11111111', '11', '211', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for user_level
-- ----------------------------
DROP TABLE IF EXISTS `user_level`;
CREATE TABLE `user_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_level
-- ----------------------------
INSERT INTO `user_level` VALUES ('1', '0', '默认内置', '0', '2018-06-25 06:22:23', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_level` VALUES ('2', '1', '1星', '0', '2018-08-20 07:16:41', null, '1.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_level` VALUES ('3', '2', '2星', '0', '2018-08-20 07:16:46', null, '2.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_level` VALUES ('4', '3', '3星', '0', '2018-08-20 07:16:52', null, '3.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_level` VALUES ('5', '4', '4星', '0', '2018-08-20 07:16:58', null, '4.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for user_process
-- ----------------------------
DROP TABLE IF EXISTS `user_process`;
CREATE TABLE `user_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `process_sn` varchar(50) NOT NULL DEFAULT '0',
  `user_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_process
-- ----------------------------

-- ----------------------------
-- Table structure for user_status
-- ----------------------------
DROP TABLE IF EXISTS `user_status`;
CREATE TABLE `user_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_status
-- ----------------------------
INSERT INTO `user_status` VALUES ('1', '0', '默认内置', '0', '2018-06-25 06:21:56', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_status` VALUES ('2', 'normal', '正常', '0', '2018-08-20 07:15:01', null, '1.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_status` VALUES ('3', 'uncheck', '待审核', '0', '2018-08-20 07:15:12', null, '2.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for user_type
-- ----------------------------
DROP TABLE IF EXISTS `user_type`;
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `creator_sn` varchar(50) NOT NULL DEFAULT '0',
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_dt` datetime DEFAULT NULL,
  `display_code` decimal(18,5) NOT NULL DEFAULT '0.00000',
  `is_deleted` int(1) NOT NULL DEFAULT '0',
  `is_na` int(1) NOT NULL DEFAULT '0',
  `father_sn` varchar(50) NOT NULL DEFAULT '0',
  `root_sn` varchar(50) NOT NULL DEFAULT '0',
  `class_sn` varchar(50) NOT NULL DEFAULT '0',
  `more_info` varchar(255) DEFAULT '0',
  `seo_tag` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_type
-- ----------------------------
INSERT INTO `user_type` VALUES ('1', '0', '默认内置', '0', '2018-06-12 23:56:46', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_type` VALUES ('2', 'contact', '联系人', '0', '2018-06-13 09:23:22', '2018-08-20 07:13:56', '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_type` VALUES ('3', 'lenovo', '联想负责人', '0', '2018-06-13 09:23:31', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_type` VALUES ('4', 'master', '管理员', '0', '2018-06-25 06:22:57', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_type` VALUES ('5', 'user', '普通用户', '0', '2018-06-25 06:24:04', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_type` VALUES ('6', 'sa', '超级管理员', '0', '2018-06-25 08:47:50', null, '0.00000', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- View structure for v_enterprise
-- ----------------------------
DROP VIEW IF EXISTS `v_enterprise`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_enterprise` AS select `selectionpool3`.`enterprise_info`.`id` AS `id`,`selectionpool3`.`enterprise_info`.`sn` AS `sn`,`selectionpool3`.`enterprise_info`.`label` AS `label`,`selectionpool3`.`enterprise_info`.`creator_sn` AS `creator_sn`,`selectionpool3`.`enterprise_info`.`create_dt` AS `create_dt`,`selectionpool3`.`enterprise_info`.`last_update_dt` AS `last_update_dt`,`selectionpool3`.`enterprise_info`.`display_code` AS `display_code`,`selectionpool3`.`enterprise_info`.`is_deleted` AS `is_deleted`,`selectionpool3`.`enterprise_info`.`is_na` AS `is_na`,`selectionpool3`.`enterprise_info`.`class_sn` AS `class_sn`,`selectionpool3`.`enterprise_info`.`type_sn` AS `type_sn`,`selectionpool3`.`enterprise_info`.`status_sn` AS `status_sn`,`selectionpool3`.`enterprise_info`.`level_sn` AS `level_sn`,`selectionpool3`.`enterprise_info`.`more_info` AS `more_info`,`selectionpool3`.`enterprise_info`.`seo_tag` AS `seo_tag`,`selectionpool3`.`enterprise_info`.`current_lenovo_user_sn` AS `current_lenovo_user_sn`,`selectionpool3`.`enterprise_info`.`basic_dic_match_status_sn` AS `basic_dic_match_status_sn`,`selectionpool3`.`enterprise_info`.`basic_is_lenovo` AS `basic_is_lenovo`,`selectionpool3`.`enterprise_info`.`basic_cn_uid` AS `basic_cn_uid`,`selectionpool3`.`enterprise_info`.`basic_setup_dt` AS `basic_setup_dt`,`selectionpool3`.`enterprise_info`.`basic_latest_reg_dt` AS `basic_latest_reg_dt`,`selectionpool3`.`enterprise_info`.`basic_org_sn` AS `basic_org_sn`,`selectionpool3`.`enterprise_info`.`basic_reg_sn` AS `basic_reg_sn`,`selectionpool3`.`enterprise_info`.`basic_reg_address` AS `basic_reg_address`,`selectionpool3`.`enterprise_info`.`basic_legal_rep` AS `basic_legal_rep`,`selectionpool3`.`enterprise_info`.`basic_reg_capital` AS `basic_reg_capital`,`selectionpool3`.`enterprise_info`.`basic_biz_keywords` AS `basic_biz_keywords`,`selectionpool3`.`enterprise_info`.`basic_biz_range` AS `basic_biz_range`,`selectionpool3`.`enterprise_info`.`basic_biz_dt_range` AS `basic_biz_dt_range`,`selectionpool3`.`enterprise_info`.`basic_biz_address` AS `basic_biz_address`,`selectionpool3`.`enterprise_info`.`basic_biz_tel` AS `basic_biz_tel`,`selectionpool3`.`enterprise_info`.`basic_charge_office` AS `basic_charge_office`,`selectionpool3`.`enterprise_info`.`acc_bank` AS `acc_bank`,`selectionpool3`.`enterprise_info`.`acc_bank_branch` AS `acc_bank_branch`,`selectionpool3`.`enterprise_info`.`acc_bank_sn` AS `acc_bank_sn`,`selectionpool3`.`enterprise_info`.`acc_asset` AS `acc_asset`,`selectionpool3`.`enterprise_info`.`acc_debt` AS `acc_debt`,`selectionpool3`.`enterprise_info`.`acc_sales` AS `acc_sales`,`selectionpool3`.`enterprise_info`.`acc_profit` AS `acc_profit`,`selectionpool3`.`enterprise_info`.`acc_debt_rate` AS `acc_debt_rate`,`selectionpool3`.`enterprise_info`.`acc_asset_last` AS `acc_asset_last`,`selectionpool3`.`enterprise_info`.`acc_debt_last` AS `acc_debt_last`,`selectionpool3`.`enterprise_info`.`acc_sales_last` AS `acc_sales_last`,`selectionpool3`.`enterprise_info`.`acc_profit_last` AS `acc_profit_last`,`selectionpool3`.`enterprise_info`.`acc_debt_rate_last` AS `acc_debt_rate_last`,`selectionpool3`.`enterprise_info`.`other_credits` AS `other_credits`,`selectionpool3`.`enterprise_info`.`other_website` AS `other_website`,`selectionpool3`.`enterprise_info`.`other_email` AS `other_email`,`selectionpool3`.`enterprise_info`.`other_size` AS `other_size`,`selectionpool3`.`enterprise_info`.`other_deliver_days` AS `other_deliver_days`,`selectionpool3`.`enterprise_info`.`other_deliver_address` AS `other_deliver_address`,`selectionpool3`.`enterprise_info`.`other_transport` AS `other_transport`,`selectionpool3`.`enterprise_status`.`label` AS `status_label`,`selectionpool3`.`enterprise_type`.`label` AS `type_label`,`selectionpool3`.`enterprise_class`.`label` AS `class_label`,`selectionpool3`.`enterprise_level`.`label` AS `level_label`,`selectionpool3`.`enterprise_info`.`default_contact_user_sn` AS `default_contact_user_sn`,`selectionpool3`.`enterprise_info`.`custom_code` AS `custom_code`,`user_info_creator`.`label` AS `creator_label`,`user_info_contact`.`label` AS `contact_label`,`user_info_lenovo`.`label` AS `lenovo_label`,`selectionpool3`.`enterprise_connect_status`.`label` AS `basic_dic_match_status_label`,`selectionpool3`.`enterprise_info`.`basic_nda` AS `basic_nda`,`selectionpool3`.`enterprise_info`.`is_partner` AS `is_partner`,`selectionpool3`.`enterprise_info`.`acc_year_last` AS `acc_year_last`,`selectionpool3`.`enterprise_info`.`other_insured_num` AS `other_insured_num`,`selectionpool3`.`enterprise_info`.`other_taxpayer_aptitude` AS `other_taxpayer_aptitude`,`selectionpool3`.`enterprise_info`.`other_tax_level` AS `other_tax_level`,`selectionpool3`.`enterprise_info`.`acc_year` AS `acc_year` from ((((((((`selectionpool3`.`enterprise_info` left join `selectionpool3`.`enterprise_class` on((`selectionpool3`.`enterprise_info`.`class_sn` = `selectionpool3`.`enterprise_class`.`sn`))) left join `selectionpool3`.`enterprise_level` on((`selectionpool3`.`enterprise_info`.`level_sn` = `selectionpool3`.`enterprise_level`.`sn`))) left join `selectionpool3`.`enterprise_status` on((`selectionpool3`.`enterprise_info`.`status_sn` = `selectionpool3`.`enterprise_status`.`sn`))) left join `selectionpool3`.`enterprise_type` on((`selectionpool3`.`enterprise_info`.`type_sn` = `selectionpool3`.`enterprise_type`.`sn`))) left join `selectionpool3`.`user_info` `user_info_creator` on((`selectionpool3`.`enterprise_info`.`creator_sn` = `user_info_creator`.`sn`))) left join `selectionpool3`.`enterprise_connect_status` on((`selectionpool3`.`enterprise_info`.`basic_dic_match_status_sn` = `selectionpool3`.`enterprise_connect_status`.`sn`))) left join (select `selectionpool3`.`user_info`.`sn` AS `sn`,`selectionpool3`.`user_info`.`label` AS `label` from `selectionpool3`.`user_info` where (`selectionpool3`.`user_info`.`type_sn` = 'lenovo')) `user_info_lenovo` on((`selectionpool3`.`enterprise_info`.`current_lenovo_user_sn` = `user_info_lenovo`.`sn`))) left join (select `selectionpool3`.`user_info`.`sn` AS `sn`,`selectionpool3`.`user_info`.`label` AS `label` from `selectionpool3`.`user_info` where (`selectionpool3`.`user_info`.`type_sn` = 'contact')) `user_info_contact` on((`selectionpool3`.`enterprise_info`.`default_contact_user_sn` = `user_info_contact`.`sn`))) ;

-- ----------------------------
-- View structure for v_enterprise_file
-- ----------------------------
DROP VIEW IF EXISTS `v_enterprise_file`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_enterprise_file` AS select `file_info`.`id` AS `id`,`file_info`.`label` AS `label`,`file_info`.`creator_sn` AS `creator_sn`,`file_info`.`create_dt` AS `create_dt`,`file_info`.`custom_code` AS `custom_code`,`file_info`.`last_update_dt` AS `last_update_dt`,`file_info`.`display_code` AS `display_code`,`file_info`.`is_deleted` AS `is_deleted`,`file_info`.`is_na` AS `is_na`,`file_info`.`class_sn` AS `class_sn`,`file_info`.`type_sn` AS `type_sn`,`file_info`.`status_sn` AS `status_sn`,`file_info`.`level_sn` AS `level_sn`,`file_info`.`more_info` AS `more_info`,`file_info`.`seo_tag` AS `seo_tag`,`file_info`.`file_bytes` AS `file_bytes`,`file_info`.`file_postfix` AS `file_postfix`,`file_info`.`file_md5` AS `file_md5`,`file_info`.`file_save_path` AS `file_save_path`,`enterprise_file`.`file_sn` AS `file_sn`,`enterprise_file`.`enterprise_sn` AS `enterprise_sn`,`enterprise_file`.`is_deleted` AS `ef_is_deleted`,`enterprise_file`.`is_na` AS `ef_is_na`,`enterprise_file`.`display_code` AS `ef_display_code` from (`enterprise_file` join `file_info` on((`enterprise_file`.`file_sn` = `file_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_enterprise_industry
-- ----------------------------
DROP VIEW IF EXISTS `v_enterprise_industry`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_enterprise_industry` AS select `cr_enterprise_industry`.`id` AS `id`,`cr_enterprise_industry`.`sn` AS `sn`,`cr_enterprise_industry`.`creator_sn` AS `creator_sn`,`cr_enterprise_industry`.`create_dt` AS `create_dt`,`cr_enterprise_industry`.`last_update_dt` AS `last_update_dt`,`cr_enterprise_industry`.`display_code` AS `display_code`,`cr_enterprise_industry`.`is_deleted` AS `is_deleted`,`cr_enterprise_industry`.`is_na` AS `is_na`,`cr_enterprise_industry`.`more_info` AS `more_info`,`cr_enterprise_industry`.`seo_tag` AS `seo_tag`,`cr_enterprise_industry`.`industry_sn` AS `industry_sn`,`cr_enterprise_industry`.`enterprise_sn` AS `enterprise_sn`,`industry_info`.`label` AS `industry_label` from (`cr_enterprise_industry` join `industry_info` on((`cr_enterprise_industry`.`industry_sn` = `industry_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_enterprise_scene
-- ----------------------------
DROP VIEW IF EXISTS `v_enterprise_scene`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_enterprise_scene` AS select `cr_enterprise_scene`.`id` AS `id`,`cr_enterprise_scene`.`sn` AS `sn`,`cr_enterprise_scene`.`creator_sn` AS `creator_sn`,`cr_enterprise_scene`.`create_dt` AS `create_dt`,`cr_enterprise_scene`.`last_update_dt` AS `last_update_dt`,`cr_enterprise_scene`.`display_code` AS `display_code`,`cr_enterprise_scene`.`is_deleted` AS `is_deleted`,`cr_enterprise_scene`.`is_na` AS `is_na`,`cr_enterprise_scene`.`more_info` AS `more_info`,`cr_enterprise_scene`.`seo_tag` AS `seo_tag`,`cr_enterprise_scene`.`scene_sn` AS `scene_sn`,`cr_enterprise_scene`.`enterprise_sn` AS `enterprise_sn`,`scene_info`.`label` AS `scene_label` from (`cr_enterprise_scene` join `scene_info` on((`cr_enterprise_scene`.`scene_sn` = `scene_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_enterprise_user
-- ----------------------------
DROP VIEW IF EXISTS `v_enterprise_user`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_enterprise_user` AS select `cr_enterprise_user`.`id` AS `id`,`cr_enterprise_user`.`sn` AS `sn`,`cr_enterprise_user`.`creator_sn` AS `creator_sn`,`cr_enterprise_user`.`create_dt` AS `create_dt`,`cr_enterprise_user`.`last_update_dt` AS `last_update_dt`,`cr_enterprise_user`.`display_code` AS `display_code`,`cr_enterprise_user`.`is_deleted` AS `is_deleted`,`cr_enterprise_user`.`is_na` AS `is_na`,`cr_enterprise_user`.`more_info` AS `more_info`,`cr_enterprise_user`.`seo_tag` AS `seo_tag`,`cr_enterprise_user`.`enterprise_sn` AS `enterprise_sn`,`cr_enterprise_user`.`user_sn` AS `user_sn`,`user_info`.`label` AS `user_label`,`user_info`.`type_sn` AS `user_type_sn`,`enterprise_info`.`label` AS `enterprise_label`,`enterprise_info`.`type_sn` AS `enterprise_type_sn`,`user_info`.`position` AS `position`,`user_info`.`mobile` AS `mobile`,`user_info`.`tel` AS `tel`,`user_info`.`email` AS `email`,`user_info`.`cn_id` AS `cn_id`,`user_info`.`id` AS `user_id` from ((`cr_enterprise_user` join `user_info` on((`cr_enterprise_user`.`user_sn` = `user_info`.`sn`))) join `enterprise_info` on((`cr_enterprise_user`.`enterprise_sn` = `enterprise_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_file
-- ----------------------------
DROP VIEW IF EXISTS `v_file`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_file` AS select `file_info`.`id` AS `id`,`file_info`.`sn` AS `sn`,`file_info`.`label` AS `label`,`file_info`.`creator_sn` AS `creator_sn`,`file_info`.`create_dt` AS `create_dt`,`file_info`.`custom_code` AS `custom_code`,`file_info`.`last_update_dt` AS `last_update_dt`,`file_info`.`display_code` AS `display_code`,`file_info`.`is_deleted` AS `is_deleted`,`file_info`.`is_na` AS `is_na`,`file_info`.`class_sn` AS `class_sn`,`file_info`.`type_sn` AS `type_sn`,`file_info`.`status_sn` AS `status_sn`,`file_info`.`level_sn` AS `level_sn`,`file_info`.`more_info` AS `more_info`,`file_info`.`seo_tag` AS `seo_tag`,`file_info`.`file_bytes` AS `file_bytes`,`file_info`.`file_postfix` AS `file_postfix`,`file_info`.`file_md5` AS `file_md5`,`file_info`.`file_save_path` AS `file_save_path`,`file_class`.`label` AS `class_label`,`file_level`.`label` AS `level_label`,`file_status`.`label` AS `status_label`,`file_type`.`label` AS `type_label`,`user_info`.`label` AS `creator_label` from (((((`file_info` join `file_class` on((`file_info`.`class_sn` = `file_class`.`sn`))) join `file_level` on((`file_info`.`level_sn` = `file_level`.`sn`))) join `file_status` on((`file_info`.`status_sn` = `file_status`.`sn`))) join `file_type` on((`file_info`.`type_sn` = `file_type`.`sn`))) join `user_info` on((`file_info`.`creator_sn` = `user_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_product
-- ----------------------------
DROP VIEW IF EXISTS `v_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product` AS select `product_info`.`id` AS `id`,`product_info`.`sn` AS `sn`,`product_info`.`label` AS `label`,`product_info`.`creator_sn` AS `creator_sn`,`product_info`.`create_dt` AS `create_dt`,`product_info`.`custom_code` AS `custom_code`,`product_info`.`last_update_dt` AS `last_update_dt`,`product_info`.`display_code` AS `display_code`,`product_info`.`is_deleted` AS `is_deleted`,`product_info`.`is_na` AS `is_na`,`product_info`.`class_sn` AS `class_sn`,`product_info`.`type_sn` AS `type_sn`,`product_info`.`status_sn` AS `status_sn`,`product_info`.`level_sn` AS `level_sn`,`product_info`.`more_info` AS `more_info`,`product_info`.`seo_tag` AS `seo_tag`,`product_info`.`sku` AS `sku`,`product_info`.`moq` AS `moq`,`product_info`.`price_sale` AS `price_sale`,`product_info`.`price_out` AS `price_out`,`product_info`.`img_file_sn` AS `img_file_sn`,`product_info`.`enterprise_sn` AS `enterprise_sn`,`product_info`.`project_sn` AS `project_sn`,`product_info`.`detail_info` AS `detail_info`,`product_class`.`label` AS `class_label`,`product_level`.`label` AS `level_label`,`product_status`.`label` AS `status_label`,`product_type`.`label` AS `type_label`,`product_info`.`moq_unit` AS `moq_unit`,`product_info`.`sample_provided` AS `sample_provided`,`user_info`.`label` AS `creator_label`,`enterprise_info`.`label` AS `enterprise_label`,`project_info`.`label` AS `project_label` from (((((((`product_info` left join `product_level` on((`product_info`.`level_sn` = `product_level`.`sn`))) left join `product_class` on((`product_info`.`class_sn` = `product_class`.`sn`))) left join `product_status` on((`product_info`.`status_sn` = `product_status`.`sn`))) left join `product_type` on((`product_info`.`type_sn` = `product_type`.`sn`))) left join `enterprise_info` on((`product_info`.`enterprise_sn` = `enterprise_info`.`sn`))) left join `user_info` on((`product_info`.`creator_sn` = `user_info`.`sn`))) left join `project_info` on((`product_info`.`project_sn` = `project_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_product_file
-- ----------------------------
DROP VIEW IF EXISTS `v_product_file`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product_file` AS select `file_info`.`id` AS `id`,`file_info`.`label` AS `label`,`file_info`.`creator_sn` AS `creator_sn`,`file_info`.`create_dt` AS `create_dt`,`file_info`.`custom_code` AS `custom_code`,`file_info`.`last_update_dt` AS `last_update_dt`,`file_info`.`display_code` AS `display_code`,`file_info`.`is_deleted` AS `is_deleted`,`file_info`.`is_na` AS `is_na`,`file_info`.`class_sn` AS `class_sn`,`file_info`.`type_sn` AS `type_sn`,`file_info`.`status_sn` AS `status_sn`,`file_info`.`level_sn` AS `level_sn`,`file_info`.`more_info` AS `more_info`,`file_info`.`seo_tag` AS `seo_tag`,`file_info`.`file_bytes` AS `file_bytes`,`file_info`.`file_postfix` AS `file_postfix`,`file_info`.`file_md5` AS `file_md5`,`file_info`.`file_save_path` AS `file_save_path`,`product_file`.`file_sn` AS `file_sn`,`product_file`.`product_sn` AS `product_sn`,`product_file`.`is_deleted` AS `ef_is_deleted`,`product_file`.`is_na` AS `ef_is_na`,`product_file`.`display_code` AS `ef_display_code` from (`product_file` join `file_info` on((`product_file`.`file_sn` = `file_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_product_industry
-- ----------------------------
DROP VIEW IF EXISTS `v_product_industry`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product_industry` AS select `cr_product_industry`.`id` AS `id`,`cr_product_industry`.`sn` AS `sn`,`cr_product_industry`.`creator_sn` AS `creator_sn`,`cr_product_industry`.`create_dt` AS `create_dt`,`cr_product_industry`.`last_update_dt` AS `last_update_dt`,`cr_product_industry`.`display_code` AS `display_code`,`cr_product_industry`.`is_deleted` AS `is_deleted`,`cr_product_industry`.`is_na` AS `is_na`,`cr_product_industry`.`more_info` AS `more_info`,`cr_product_industry`.`seo_tag` AS `seo_tag`,`cr_product_industry`.`industry_sn` AS `industry_sn`,`cr_product_industry`.`product_sn` AS `product_sn`,`industry_info`.`label` AS `industry_label` from (`cr_product_industry` join `industry_info` on((`cr_product_industry`.`industry_sn` = `industry_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_product_scene
-- ----------------------------
DROP VIEW IF EXISTS `v_product_scene`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product_scene` AS select `cr_product_scene`.`id` AS `id`,`cr_product_scene`.`sn` AS `sn`,`cr_product_scene`.`creator_sn` AS `creator_sn`,`cr_product_scene`.`create_dt` AS `create_dt`,`cr_product_scene`.`last_update_dt` AS `last_update_dt`,`cr_product_scene`.`display_code` AS `display_code`,`cr_product_scene`.`is_deleted` AS `is_deleted`,`cr_product_scene`.`is_na` AS `is_na`,`cr_product_scene`.`more_info` AS `more_info`,`cr_product_scene`.`seo_tag` AS `seo_tag`,`cr_product_scene`.`scene_sn` AS `scene_sn`,`cr_product_scene`.`product_sn` AS `product_sn`,`scene_info`.`label` AS `scene_label` from (`cr_product_scene` join `scene_info` on((`cr_product_scene`.`scene_sn` = `scene_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_project
-- ----------------------------
DROP VIEW IF EXISTS `v_project`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_project` AS select `project_info`.`id` AS `id`,`project_info`.`sn` AS `sn`,`project_info`.`label` AS `label`,`project_info`.`creator_sn` AS `creator_sn`,`project_info`.`create_dt` AS `create_dt`,`project_info`.`custom_code` AS `custom_code`,`project_info`.`last_update_dt` AS `last_update_dt`,`project_info`.`display_code` AS `display_code`,`project_info`.`is_deleted` AS `is_deleted`,`project_info`.`is_na` AS `is_na`,`project_info`.`class_sn` AS `class_sn`,`project_info`.`type_sn` AS `type_sn`,`project_info`.`status_sn` AS `status_sn`,`project_info`.`level_sn` AS `level_sn`,`project_info`.`more_info` AS `more_info`,`project_info`.`seo_tag` AS `seo_tag`,`project_info`.`enterprise_sn` AS `enterprise_sn`,`project_info`.`lenovo_user_sn` AS `lenovo_user_sn`,`project_info`.`contact_dt` AS `contact_dt`,`project_info`.`total_budget` AS `total_budget`,`project_info`.`main_content` AS `main_content`,`project_info`.`plan_start_dt` AS `plan_start_dt`,`project_info`.`plan_end_dt` AS `plan_end_dt`,`project_info`.`real_start_dt` AS `real_start_dt`,`project_info`.`real_end_dt` AS `real_end_dt`,`project_info`.`total_real_investment` AS `total_real_investment`,`project_class`.`label` AS `class_label`,`project_level`.`label` AS `level_label`,`project_status`.`label` AS `status_label`,`project_type`.`label` AS `type_label`,`user_info_creator`.`label` AS `creator_label`,`user_info_lenovo`.`label` AS `lenovo_label`,`enterprise_info`.`label` AS `enterprise_label` from (((((((`project_info` join `project_class` on((`project_info`.`class_sn` = `project_class`.`sn`))) join `project_level` on((`project_info`.`level_sn` = `project_level`.`sn`))) join `project_status` on((`project_info`.`status_sn` = `project_status`.`sn`))) join `project_type` on((`project_info`.`type_sn` = `project_type`.`sn`))) join `user_info` `user_info_creator` on((`project_info`.`creator_sn` = `user_info_creator`.`sn`))) join `user_info` `user_info_lenovo` on((`project_info`.`lenovo_user_sn` = `user_info_lenovo`.`sn`))) join `enterprise_info` on((`project_info`.`enterprise_sn` = `enterprise_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_project_file
-- ----------------------------
DROP VIEW IF EXISTS `v_project_file`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_project_file` AS select `file_info`.`id` AS `id`,`file_info`.`label` AS `label`,`file_info`.`creator_sn` AS `creator_sn`,`file_info`.`create_dt` AS `create_dt`,`file_info`.`custom_code` AS `custom_code`,`file_info`.`last_update_dt` AS `last_update_dt`,`file_info`.`display_code` AS `display_code`,`file_info`.`is_deleted` AS `is_deleted`,`file_info`.`is_na` AS `is_na`,`file_info`.`class_sn` AS `class_sn`,`file_info`.`type_sn` AS `type_sn`,`file_info`.`status_sn` AS `status_sn`,`file_info`.`level_sn` AS `level_sn`,`file_info`.`more_info` AS `more_info`,`file_info`.`seo_tag` AS `seo_tag`,`file_info`.`file_bytes` AS `file_bytes`,`file_info`.`file_postfix` AS `file_postfix`,`file_info`.`file_md5` AS `file_md5`,`file_info`.`file_save_path` AS `file_save_path`,`project_file`.`file_sn` AS `file_sn`,`project_file`.`project_sn` AS `project_sn`,`project_file`.`is_deleted` AS `ef_is_deleted`,`project_file`.`is_na` AS `ef_is_na`,`project_file`.`display_code` AS `ef_display_code` from (`project_file` join `file_info` on((`project_file`.`file_sn` = `file_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_user
-- ----------------------------
DROP VIEW IF EXISTS `v_user`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_user` AS select `user_info`.`id` AS `id`,`user_info`.`sn` AS `sn`,`user_info`.`label` AS `label`,`user_info`.`creator_sn` AS `creator_sn`,`user_info`.`create_dt` AS `create_dt`,`user_info`.`last_update_dt` AS `last_update_dt`,`user_info`.`display_code` AS `display_code`,`user_info`.`is_deleted` AS `is_deleted`,`user_info`.`is_na` AS `is_na`,`user_info`.`class_sn` AS `class_sn`,`user_info`.`type_sn` AS `type_sn`,`user_info`.`status_sn` AS `status_sn`,`user_info`.`level_sn` AS `level_sn`,`user_info`.`more_info` AS `more_info`,`user_info`.`seo_tag` AS `seo_tag`,`user_info`.`login_name` AS `login_name`,`user_info`.`pwd` AS `pwd`,`user_info`.`position` AS `position`,`user_info`.`mobile` AS `mobile`,`user_info`.`tel` AS `tel`,`user_info`.`email` AS `email`,`user_info`.`cn_id` AS `cn_id`,`user_class`.`label` AS `class_label`,`user_type`.`label` AS `type_label`,`user_status`.`label` AS `status_label`,`user_level`.`label` AS `level_label`,`user_info`.`custom_code` AS `custom_code`,`user_info`.`lenovo_count` AS `lenovo_count`,`user_info`.`is_notice_sys` AS `is_notice_sys`,`user_info`.`is_notice_enterprise` AS `is_notice_enterprise`,`user_info`.`is_notice_product` AS `is_notice_product`,`user_info`.`is_notice_user` AS `is_notice_user`,`user_info`.`is_notice_project` AS `is_notice_project` from ((((`user_info` join `user_class` on((`user_info`.`class_sn` = `user_class`.`sn`))) join `user_status` on((`user_info`.`status_sn` = `user_status`.`sn`))) join `user_type` on((`user_info`.`type_sn` = `user_type`.`sn`))) join `user_level` on((`user_info`.`level_sn` = `user_level`.`sn`))) ;

-- ----------------------------
-- View structure for v_user_file
-- ----------------------------
DROP VIEW IF EXISTS `v_user_file`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_user_file` AS select `file_info`.`id` AS `id`,`file_info`.`label` AS `label`,`file_info`.`creator_sn` AS `creator_sn`,`file_info`.`create_dt` AS `create_dt`,`file_info`.`custom_code` AS `custom_code`,`file_info`.`last_update_dt` AS `last_update_dt`,`file_info`.`display_code` AS `display_code`,`file_info`.`is_deleted` AS `is_deleted`,`file_info`.`is_na` AS `is_na`,`file_info`.`class_sn` AS `class_sn`,`file_info`.`type_sn` AS `type_sn`,`file_info`.`status_sn` AS `status_sn`,`file_info`.`level_sn` AS `level_sn`,`file_info`.`more_info` AS `more_info`,`file_info`.`seo_tag` AS `seo_tag`,`file_info`.`file_bytes` AS `file_bytes`,`file_info`.`file_postfix` AS `file_postfix`,`file_info`.`file_md5` AS `file_md5`,`file_info`.`file_save_path` AS `file_save_path`,`user_file`.`file_sn` AS `file_sn`,`user_file`.`user_sn` AS `user_sn`,`user_file`.`is_deleted` AS `ef_is_deleted`,`user_file`.`is_na` AS `ef_is_na`,`user_file`.`display_code` AS `ef_display_code` from (`user_file` join `file_info` on((`user_file`.`file_sn` = `file_info`.`sn`))) ;

-- ----------------------------
-- View structure for v_user_product
-- ----------------------------
DROP VIEW IF EXISTS `v_user_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_user_product` AS select `cr_user_product`.`id` AS `id`,`cr_user_product`.`sn` AS `sn`,`cr_user_product`.`creator_sn` AS `creator_sn`,`cr_user_product`.`create_dt` AS `create_dt`,`cr_user_product`.`last_update_dt` AS `last_update_dt`,`cr_user_product`.`display_code` AS `display_code`,`cr_user_product`.`is_deleted` AS `is_deleted`,`cr_user_product`.`is_na` AS `is_na`,`cr_user_product`.`more_info` AS `more_info`,`cr_user_product`.`seo_tag` AS `seo_tag`,`cr_user_product`.`user_sn` AS `user_sn`,`cr_user_product`.`product_sn` AS `product_sn`,`user_info`.`label` AS `user_label`,`product_info`.`label` AS `product_label`,`cr_user_product`.`is_favor` AS `is_favor`,`user_info`.`type_sn` AS `user_type_sn`,`product_info`.`price_out` AS `price_out`,`product_info`.`price_sale` AS `price_sale`,`product_info`.`moq_unit` AS `moq_unit`,`product_info`.`moq` AS `moq`,`product_info`.`sku` AS `sku`,`product_info`.`id` AS `product_id`,`product_info`.`type_sn` AS `product_type_sn`,`product_info`.`status_sn` AS `product_status_sn`,`product_info`.`level_sn` AS `product_level_sn`,`product_level`.`label` AS `product_level_label`,`product_status`.`label` AS `product_status_label`,`product_type`.`label` AS `product_type_label`,`user_info`.`position` AS `position`,`user_info`.`mobile` AS `mobile`,`user_info`.`tel` AS `tel`,`user_info`.`email` AS `email`,`user_info`.`cn_id` AS `cn_id` from (((((`cr_user_product` join `user_info` on((`cr_user_product`.`user_sn` = `user_info`.`sn`))) join `product_info` on((`cr_user_product`.`product_sn` = `product_info`.`sn`))) join `product_level` on((`product_info`.`level_sn` = `product_level`.`sn`))) join `product_status` on((`product_info`.`status_sn` = `product_status`.`sn`))) join `product_type` on((`product_info`.`type_sn` = `product_type`.`sn`))) ;
