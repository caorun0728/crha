#!/bin/sh
cd /tmp
echo "**********************************************************"
echo "请选择需要的操作" 
echo "1、将官方Uboot替换为Breed（不死Uboot的更新版，极路由1S专用！！）"
echo "2、将官方Uboot替换为Breed（不死uboot的更新版，极路由2专用！！！!）"
echo "3、将官方Uboot替换为Breed（不死uboot的更新版，极路由3专用！！！!）"
echo "4、将官方Uboot替换为Breed（不死uboot的更新版，极路由5661A专用！）"
echo "5、将官方Uboot替换为Breed（不死uboot的更新版，极路由5761A专用！）"
echo "0、返回上一级" 
read num
		
if [ "${num}" == "1" ]
then
echo "开始执行！"
cd /tmp && rm -rf breed-1s.sh && wget http://www.gogovpn.org/hiwifi/breed-1s.sh &&chmod 755 breed-1s.sh&&./breed-1s.sh && rm -rf breed-1s.sh
echo "执行完毕！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
fi

if [ "${num}" == "2" ]
then
echo "开始执行！"
cd /tmp && rm -rf breed-2.sh && wget http://www.gogovpn.org/hiwifi/breed-2.sh &&chmod 755 breed-2.sh&&./breed-2.sh && rm -rf breed-2.sh
echo "执行完毕！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
fi
	 
if [ "${num}" == "3" ]
then
echo "开始执行！"
cd /tmp && rm -rf breed-3.sh && wget http://www.gogovpn.org/hiwifi/breed-3.sh &&chmod 755 breed-3.sh&&./breed-3.sh && rm -rf breed-3.s
echo "执行完毕！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
fi
	   
	   
if [ "${num}" == "4" ]
then
echo "开始执行！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/breed-5661a.sh &&chmod 755 breed-5661a.sh&&./breed-5661a.sh && rm -rf breed-5661a.sh
echo "执行完毕！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
fi
	   
if [ "${num}" == "5" ]
then
echo "开始执行！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/geetool/breed-5761a.sh &&chmod 755 breed-5761a.sh&&./breed-5761a.sh && rm -rf breed-5761a.sh
echo "执行完毕！"
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
fi

if [ "${num}" == "6" ]
then
cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/ssbox.sh && sh ./ssbox.sh && rm -rf *.sh
fi
