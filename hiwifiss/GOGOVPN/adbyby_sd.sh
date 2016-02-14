#!/bin/sh 

	echo -e "[\e[32m正在删除开机自动启动命令...\e[37m]"
	sed -i "/sleep 31/d" /etc/rc.local
	sed -i "/adbyby start/d" /etc/rc.local
	echo -e "[\e[32m正在停止监控任务...\e[37m]"
	sed -i '/MAD.sh/d' /etc/crontabs/root
	echo -e "[\e[32m正在停止自定义ABP更新任务...\e[37m]"
	sed -i '/abp.sh/d' /etc/crontabs/root
	touch /etc/crontabs/cron.update
	echo -e "[\e[32m正在关闭Adbyby...\e[37m]"
	/etc/init.d/adbyby stop
	echo -e "[\e[32m正在关闭ADbyby自启程序...\e[37m]"
	/etc/init.d/adbyby disable
	echo -e "[\e[32m正在删除ADbyby自启程序...\e[37m]"
	rm -f /etc/init.d/adbyby
	echo -e "[\e[32m正在删除Adbyby文件夹...\e[37m]"
	rm -rf /tmp/data/adbyby
	echo -e "[\e[32m已经成功卸载Adbyby...Good Luck!\e[37m]"
	echo -e "[\e[32m请按任意键继续\e[37m]"
	read -n1
    cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh