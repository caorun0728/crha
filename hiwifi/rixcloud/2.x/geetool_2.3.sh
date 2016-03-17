#!/bin/sh
URL="http://xiazai.u.qiniudn.com/2.x/"
HARDWARE="$(lua -e "print(require 'tw'.get_model())")"
WEBSITE="echo -e "CRProxy云加速""
SORRY="echo "很抱歉，该功能暂时无法提供！""

reset
echo "欢迎使用CRProxy！"
echo ""
$WEBSITE
echo ""
echo "请输入访问密码"
read -s -p "密码输入过程不可见！" passwd
if [ "$passwd" == "caorun" ]; then
rm -rf $0
num=""
until [ "$num" == "0" ]
do
reset
echo "*********************************************************"
echo "*                                                       *"
echo "*                                                       *"
echo "*            ----CRProxy  极路由工具箱-----             *"
echo "*                由CRProxy  云加速提供                  *"
echo "*                                                       *"
echo "*                 http://caorun.net                     *"
echo "*                       CRProxy                         *"
echo "*                  CRProxy 云加速服务                   *"
echo "*                                                       *"
echo "*********************************************************"
echo "                                                         "
echo "请选择一个功能"
echo "1、CRProxy 云加速插件管理"
echo "2、极路由管理"
echo "3、辅助插件管理"
echo "0、退出"
echo ""
echo -e "\e[31mCRProxy （https://www.caorun.net）\e[37m"
echo ""
read -n1 -p "请选择需要进行的操作[1-3、0]?" num
echo ""
echo "---------------------------------------------------------"
case $num in
		
     1)
		num1=""
		until [ "$num1" == "0" ]
		do
		$WEBSITE
		echo -e "正在启动CRProxy 云加速插件管理功能"
		sleep 3
		reset
		echo "请选择一个功能"
		echo "1、安装CRProxy 云加速插件"
		echo "2、修复CRProxy 云加速插件"
		echo "3、卸载CRProxy 云加速插件"
		echo "4、更新CRProxy 云加速插件"
		echo "5、重新启动极路由并完成安装"
		echo "0、退出"
		echo ""
		read -n1 -p "请选择需要的操作[1-5、0]?" num1
		echo ""
		echo "---------------------------------------------------------"
		case $num1 in
	 
			1)
				$WEBSITE
				echo -e "正在准备安装CRProxy 云加速插件"
				sleep 3
					echo ""
					echo -e "\e[31m--------------------------------警告！-------------------------------------\e[37m"
					echo -e "\e[31m刷入新版本CRProxy  云加速插件之前请务必确保之前安装的任何插件已经完成卸载！\e[37m"
					echo -e "\e[31m                       建议恢复极路由出厂设置！                            \e[37m"
					echo -e "\e[31m-------------CRProxy 不对因为刷入插件造成的问题负任何责任！----------------\e[37m"
					echo ""平台
					echo 你的极路由硬件版本为 $HARDWARE ，是否确认无误？
					read -s -n 1 -p "是否刷入CRProxy 云加速插件？请输入[Y/N]?" yn
					if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
					echo ""
					if [ -f /usr/sbin/ipset ]; then
							echo -e "检测到你的固件版本大于或等于 [\e[32m9017\e[37m] 将会在安装前自动为你执行极路由固件更新操作！"
							sleep 3
							opkg remove pdnsd
							opkg update
							opkg install pdnsd
							echo -e "更新路由器固件--------------------------------------[\e[32m完成\e[37m]"
							sleep 1
							echo "继续安装！"
						fi
					sleep 3
					echo ""
					echo "开始配置配置文件"
					if [ -f /etc/config/ss-redir ]; then
						if [ "$?" == "0" ] && [ "$uci_get_configfn_version" == "2.3" ]; then
						cp -a /etc/config/ss-redir /etc/config/ss-redir.2.3.bak
							echo -e "备份配置文件--------------------------------------[\e[32m完成\e[37m]"
						else
							echo -e "备份配置文件--------------------------------------[\e[31m失败\e[37m]"
							echo "失败原因：配置文件与当前安装版本不兼容"
						fi
					fi
					if [ -f /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm.bak ]; then
						echo -e "[\e[31m失败、备份文件已存在\e[37m]"
					else
						echo -e "----------------[\e[32m完成\e[37m]"
					fi

					echo "开始安装CRProxy 云加速插件"
					echo "正在下载所需文件---------------------------------"
					cd /tmp
					wget ${URL}ss-redir-2.3.tar.gz
					if [ -f ss-redir-2.3.tar.gz ]; then
					echo -e "--------------------------------------------------[\e[32m完成\e[37m]"
					echo -n "开始复制文件--------------------------------------"
					rm -f /usr/lib/lua/luci/view/admin_web/menu/adv_menu.html
					tar xvzf ss-redir-2.3.tar.gz -C /tmp
					cp -a -r /tmp/ss-redir/* /
					if [ "$?" == "0" ]; then
					echo -e "[\e[32m完成\e[37m]"
					echo -n "修正配置界面--------------------------------------"
					sed -i 's/height:590/height:620/g' /usr/lib/lua/luci/view/admin_web/home.htm;
					sed -i 's/.setup_box{ margin-left: 169px; height: 460px;/.setup_box{ margin-left: 169px; height: 496px;/g' /www/turbo-static/turbo/web/css/style.css;
					echo -e "[\e[32m完成\e[37m]"
					echo -n "清除LUCI缓存--------------------------------------"
					rm -rf /tmp/luci-indexcache
					echo -e "[\e[32m完成\e[37m]"
					/etc/init.d/pdnsd disable
					if [ -f /etc/config/ss-redir.2.3.bak ]; then
							echo -n "恢复配置文件--------------------------------------"
							cp -a /etc/config/ss-redir.2.3.bak /etc/config/ss-redir
							rm -rf /etc/config/ss-redir.2.3.bak
							cp -a /tmp/white_domain_list.conf /usr/bin/vendor/config/white_domain_list.conf 1>/dev/null 2>&1
							cp -a /tmp/black_domain_list.conf /usr/bin/vendor/config/black_domain_list.conf 1>/dev/null 2>&1
							cp -a /tmp/black_mac_list.conf /usr/bin/vendor/config/black_mac_list.conf 1>/dev/null 2>&1

							echo -e "[\e[32m完成\e[37m]"
					fi

					else
					echo -e "CRProxy 云加速插件-------------------------[\e[31m失败\e[37m]"
					fi

					else
					echo -e "[\e[31m未能下载所需文件，刷入中断！\e[37m]"
					fi

					else
					echo -e "[\e[31m安装取消\e[37m]"
					fi

					uci set ss-redir.ssgoabroad.ss_version=2.3 && uci commit ss-redir
					rm -rf /usr/local/ss-redir.tar.gz
					rm -rf /tmp/ss-redir-2.0.tar.gz
					rm -rf /tmp/data/ss-redir.tar.gz
					rm -rf /usr/lib/lua/luci/view/app/th
					rm -rf /usr/lib/lua/luci/controller/app/th.lua
					rm -rf /tmp/ss_update_tmp
					echo -e "CRProxy 云加速插件--------------[\e[32m全部完成\e[37m]"
					echo ""
					read -s -n 1 -p "是否检查是否有数据更新？[Y/N]" updateatinstall
					if [ "$updateatinstall" == "Y" ] || [ "$updateatinstall" == "y" ]; then
							sleep 1
							$WEBSITE
							echo -e "准备检查更新！"
							sleep 2
							if grep -Fxq "2016-03-13" /lib/upgrade/version_check
								then
									echo "目前已经是最新版本！"
								else
									echo "检测到更新，正在准备更新！"
									sleep 3
									echo "无法更新，最新版本极路由插件无法兼容你的当前版本，请卸载后重新安装"
								fi	
						else
							echo "不进行更新检查！"
						fi
					;;
		
			2)
				echo ""
				$WEBSITE
				echo -e "正在准备启动CRProxy 云加速插件修复功能（适用于9017及以上固件版本）"
				sleep 3
					echo 你的极路由硬件版本为 $HARDWARE
					sleep 1
					opkg remove pdnsd
					opkg update
					opkg install pdnsd
				echo -e "[\e[32m修复完成！\e[37m]"
				sleep 3
				;;
		
			3)
				echo ""
				$WEBSITE
				echo -e "准备卸载CRProxy 云加速插件"
				sleep 3
				echo "注意！该工具只能卸载CRProxy云加速插件，不能卸载其他加速插件！"
				read -n1 -p "是否确认要卸载CRProxy 云加速插件[Y/N]？" removeyn
				if [ "$removeyn" == "Y" ] || [ "$removeyn" == "y" ]; then
							echo ""
							echo "开始卸载CRProxy 云加速插件"
								echo -e "停止相关进程--------------------------------------\c"
								/etc/init.d/ss-redir stop 1>/dev/null 2>&1
								/etc/init.d/ss-redir disable 1>/dev/null 2>&1
								/etc/init.d/ss.sh stop 1>/dev/null 2>&1
								/etc/init.d/ss.sh disable 1>/dev/null 2>&1
								/etc/init.d/pdnsd stop 1>/dev/null 2>&1
								rm -rf /etc/dnsmasq.d/* 1>/dev/null 2>&1
								/etc/init.d/dnsmasq restart 1>/dev/null 2>&1
								cp -a /usr/bin/vendor/config/white_domain_list.conf /tmp/white_domain_list.conf 1>/dev/null 2>&1
								cp -a /usr/bin/vendor/config/black_domain_list.conf /tmp/black_domain_list.conf 1>/dev/null 2>&1
								cp -a /usr/bin/vendor/config/black_mac_list.conf /tmp/black_mac_list.conf 1>/dev/null 2>&1 
								echo -e "[\e[32m完成\e[37m]"
								echo -e "删除相关文件--------------------------------------\c"
								rm -rf /etc/init.d/ss-redir
								rm -rf /etc/init.d/ss.sh
								rm -rf /usr/bin/ss-redir
								rm -rf /etc/SSdiyDNS.conf
								rm -rf /etc/THPdnsd-part.conf
								rm -rf /etc/ThirdFlameDNS.conf
								rm -rf /etc/antixxxdns.conf
								rm -rf /usr/lib/lua/luci/view/app/th/shadowsocks.htm
								rm -rf /usr/lib/lua/luci/controller/app/th.lua
								rm -rf /lib/upgrade/keep.d/ss-redir
								rm -rf /usr/lib/lua/luci/controller/app/vendor.lua
								rm -rf /usr/lib/lua/luci/view/app/vendor
								rm -rf /usr/bin/vendor
								echo -e "[\e[32m完成\e[37m]"
								echo -e "清除IPTABLES规则----------------------------------\c"
								/etc/init.d/firewall restart 1>/dev/null 2>&1
								echo -e "[\e[32m完成\e[37m]"
								echo -e "还原系统文件--------------------------------------\c"
								if [ -f /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm.bak ]; then
								rm -rf /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm
								mv /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm.bak /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm
								fi
								echo -e "[\e[32m完成\e[37m]"
								echo -n "修正配置界面--------------------------------------"
								sed -i 's/height:629/height:590/g' /usr/lib/lua/luci/view/admin_web/home.htm;
								sed -i 's/.setup_box{ margin-left: 169px; height: 496px;/.setup_box{ margin-left: 169px; height: 460px;/g' /www/turbo-static/turbo/web/css/style.css;
								echo -e "[\e[32m完成\e[37m]"
								echo -n "清除LUCI缓存--------------------------------------"
								rm -rf /tmp/luci-indexcache
								echo -e "[\e[32m完成\e[37m]"
								mkdir -p /usr/bin/vendor/config
								cp -a /tmp/white_domain_list.conf /usr/bin/vendor/config/white_domain_list.conf 1>/dev/null 2>&1
								cp -a /tmp/black_domain_list.conf /usr/bin/vendor/config/black_domain_list.conf 1>/dev/null 2>&1
								cp -a /tmp/black_mac_list.conf /usr/bin/vendor/config/black_mac_list.conf 1>/dev/null 2>&1
								echo "卸载CRProxy 云加速插件完成"
								fi
								;;
						
			4)
				echo ""
				$WEBSITE
				echo -e "准备检查更新！"
				sleep 2
				echo "开始检查是否有更新"
				sleep 3
				if grep -Fxq "2016-03-13" /lib/upgrade/version_check
					then
						echo "目前已经是最新版本！"
					else
						echo "检测到更新，正在准备更新！"
						sleep 3
						echo "无法更新，最新版本极路由插件无法兼容你的当前版本，请卸载后重新安装"
					fi
				;;
				
			5)
				echo ""
				$WEBSITE
				echo -e "\e[31m--------------------------------警告！-------------------------------------\e[37m"
				echo ""
				echo -e "\e[31m              是否保存了你正在进行的工作并重启路由器？                           "
				echo ""
				echo -e "\e[31m---------------------------------------------------------------------------\e[37m"
				sleep 3
				read -n1 -p "请输入Y/y来确认重启，如果尚未保存工作，请输入N/n" reboot
				echo ""
				if [ "$reboot" == "Y" ] || [ "$reboot" == "y" ]; then
						echo ""
						echo "开始重新启动路由器，请等待3秒"
						sleep 3
						echo -e "\e[31m路由器已经重新启动\e[37m"
					else
						echo ""
						echo -e "\e[31m路由器尚未重新启动！\e[37m"
					fi
				reboot
				
				;;
		
			nodaoban)
				echo ""
				$WEBSITE
				echo "无效的指令"
				;;
			
			*)
				echo ""
				$WEBSITE
				echo "输入错误"
		esac
	done
		;;
	
	2)
	num2=""
	until [ "$num2" == "0" ]
	do
		reset
		echo ""
		$WEBSITE
		echo "请选择一个功能"
		echo "1、极路由Breed安装"
		echo "2、极路由ROM在线安装"
		echo "3、安装本地极路由ROM"
		echo "0、返回上一级菜单"
		echo ""
		read -n1 -p "请选择需要的操作[1-3、0]" num2
		echo ""
		echo "---------------------------------------------------------"
		case $num2 in
	
	
		1)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		2)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		3)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		nodaoban)
			echo ""
			$WEBSITE
			echo "无效的指令"
			;;
			
		*)
			echo ""
			$WEBSITE
			echo "输入错误"
			;;
		esac
	done
		;;
		
	
	3)
	num3=""
	until [ "$num3" == "0" ]
	do
		reset
		echo ""
		$WEBSITE
		echo "请选择一个功能"
		echo "1、Python安装"
		echo "2、迅雷快鸟插件安装"
		echo "3、百度云共享插件安装"
		echo "0、返回上一级菜单"
		echo ""
		read -n1 -p "请选择需要的操作[1-3、0]" num3
		echo ""
		echo "---------------------------------------------------------"
		case $num3 in
		
		1)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		2)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		3)
			echo ""
			$WEBSITE
			$SORRY
			;;
			
		nodaoban)
			echo ""
			$WEBSITE
			echo "无效的指令"
			;;
			
		*)
			echo ""
			$WEBSITE
			echo "输入错误"
			;;
		esac
	done
		;;
	
		
     nodaoban)
		echo ""
		$WEBSITE
        echo "无效的指令"
        ;;

	*)
		echo""
		$WEBSITE
        echo "退出"
esac
done
exit 0 

else
echo "密码错误！拒绝访问！"
fi
exit 0
