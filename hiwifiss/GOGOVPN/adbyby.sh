#!/bin/sh 
	read -p "安装ADbyby之前请您确定安装好Hiwifi App Engine软件，安装后请重启进行相关操作,请输入小写 y 进行安装，输入n 返回主菜单：" KEY
	case $KEY in
	y)
	echo -e "[\e[32m正在/tmp/data/目录下新建adbyby文件夹\e[37m]"
	mkdir /tmp/data/adbyby
	cd /tmp/data/adbyby
	echo -e "正在下载ADbyby主程序..."
	wget http://www.gogovpn.org/hiwifi/7620n.tar.gz
	tar -xzvf 7620n.tar.gz
	echo -e "给adbyby程序最高权限...."
	chmod 777 adbyby
	echo -e "正在删除下载来的压缩包..."
	rm -f 7620n.tar.gz
	echo -e "正在打开tmp目录..."
	cd /tmp
	echo -e "正在下载adbyby自动启动程序...."
	wget http://www.gogovpn.org/hiwifi/adb.tar.gz
	tar -xzvf adb.tar.gz
	echo -e "正在给解压文件777权限"
	chmod 777 adbyby
	chmod 777 start
	chmod 777 stop
	chmod 777 show
	echo -e "正在把show文件复制到/tmp/data/adbyby/目录下"
	cp -f /tmp/show /tmp/data/adbyby/show
	echo -e "正在把start文件复制到/tmp/data/adbyby/目录下"
	cp -f /tmp/start /tmp/data/adbyby/start
	echo -e "正在把stop文件复制到/tmp/data/adbyby/目录下"
	cp -f /tmp/stop /tmp/data/adbyby/stop
	echo -e "正在把show文件复制到/etc/init.d/目录下"
	cp -f /tmp/adbyby /etc/init.d/adbyby
	echo -e "正在删除下载的压缩软件adb.tar.gz"
	rm -f adb.tar.gz
	rm -f adbyby
	rm -f start
	rm -f stop
	rm -f show
	echo -e "正在做开机启动链接..."
	/etc/init.d/adbyby enable
	echo -e "正在打开adbyb主程序并打开代理...."
	/etc/init.d/adbyby start
	sed -i "/exit 0/d" /etc/rc.local
	sed -i "/sleep 31/d" /etc/rc.local
	sed -i "/adbyby start/d" /etc/rc.local
	echo -e "在rc.local删除旧的adbyby启动程序------------------------------------[\e[32m完成\e[37m]"
	echo -e "sleep 31 \n/etc/init.d/adbyby start \nexit 0">>/etc/rc.local
	echo -e "在rc.local建立新的adbyby启动程序------------------------------------[\e[32m完成\e[37m]"
	ps | grep adbyby | grep -v "grep" 
	echo -e "[\e[32m如果显示/tmp/data/adbyby/adbyby 则运行正常，如果没有显示，则没有运行成功\e[37m]"
	cd /tmp/data/adbyby/
	echo -e "[\e[32m正在删除MAD.sh...\e[37m]"
	rm -f MAD.sh
	echo -e "[\e[32m正在下载MAD.sh主程序...\e[37m]"
	wget http://www.gogovpn.org/hiwifi/MAD.sh
	chmod 777 MAD.sh
	echo -e "[\e[32m正在添加监控任务...\e[37m]"
	sed -i '/MAD.sh/d' /etc/crontabs/root
	echo "*/1 * * * * sh /tmp/data/adbyby/MAD.sh">>/etc/crontabs/root
	touch /etc/crontabs/cron.update
	echo -e "[\e[32m每1分钟进行检查一次,如果没有发现adbyby进程，则自动重启adbyby。完成\e[37m]"
	ps | grep adbyby
	echo -e "[\e[32m如果显示/tmp/data/adbyby/adbyby 则运行正常，如果没有显示，则没有运行成功\e[37m]"
	iptables -t nat -nvL PREROUTING
	echo -e "[\e[32m如果发现tcp dpt:80 redir ports 8118端口，则代理启动成功，看不到则没有启动透明代理\e[37m]"
		cd /tmp/data/adbyby/
	echo "[\e[32m正在删除abp.sh...\e[37m]"
	rm -f abp.sh
	echo -e "[\e[32m正在下载abp.sh主程序...\e[37m]"
	wget http://www.gogovpn.org/hiwifi/abp.sh
	chmod 777 abp.sh
	echo -e "[\e[32m打开abp.sh\e[37m]"
	./abp.sh
	echo -e "[\e[32m正在添加定制更新任务...\e[37m]"
	sed -i '/abp.sh/d' /etc/crontabs/root
	echo "30 06 * * * sh /tmp/data/adbyby/abp.sh">>/etc/crontabs/root
	touch /etc/crontabs/cron.update
	echo -e "[\e[32m每天凌晨6点半会定时更新ABP规则,并自动重启adbyby。完成\e[37m]"
	ps | grep adbyby
	echo -e "[\e[32m如果显示/tmp/data/adbyby/adbyby 则运行正常，如果没有显示，则没有运行成功\e[37m]"
	iptables -t nat -nvL PREROUTING
	echo -e "[\e[32m如果发现tcp dpt:80 redir ports 8118端口，则代理启动成功，看不到则没有启动透明代理\e[37m]"
	echo -e "[\e[32m请按任意键继续\e[37m]"
	read -n1	
	cd /root
	echo -e "[\e[32m请按任意键继续\e[37m]"
	read -n1
	cd /root
    cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
	esac


