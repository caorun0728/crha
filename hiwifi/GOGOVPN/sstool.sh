bakall()
{
        echo -e "备份MTD0到mtd0.bin--------------------------------\c"
        cat /dev/mtd0 > mtd0.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD1到mtd1.bin--------------------------------\c"
        cat /dev/mtd1 > mtd1.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD2到mtd2.bin--------------------------------\c"
        cat /dev/mtd2 > mtd2.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD3到mtd3.bin--------------------------------\c"
        cat /dev/mtd3 > mtd3.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD4到mtd4.bin--------------------------------\c"
        cat /dev/mtd4 > mtd4.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD5到mtd5.bin--------------------------------\c"
        cat /dev/mtd5 > mtd5.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD6到mtd6.bin--------------------------------\c"
        cat /dev/mtd6 > mtd6.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD7到mtd7.bin--------------------------------\c"
        cat /dev/mtd7 > mtd7.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD8到mtd8.bin--------------------------------\c"
        cat /dev/mtd8 > mtd8.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份MTD9到mtd9.bin--------------------------------\c"
        cat /dev/mtd9 > mtd9.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份编程器固件到fullflash.bin---------------------\c"
        cat /dev/mtd0 /dev/mtd1 /dev/mtd2 /dev/mtd9 /dev/mtd6 /dev/mtd7 /dev/mtd8 > fullflash.bin
        echo -e "[\e[32m完成\e[37m]"
        echo -e "备份SD卡第一分区加密秘钥到sd-crypt-key.txt--------\c"
        /sbin/hi_crypto_key device-crypt-key > sd-crypt-key.txt
        echo -e "[\e[32m完成\e[37m]"
}
    
#!/bin/sh
cd /tmp
echo "*********************************************************"
echo "*                                                       *"
echo "*                                                       *"
echo "*                                                       *"
echo "*             插件安装器(插件来源 www.xinbiaoge.com)    *"
echo "*            安装前请关闭极路由自带SSH/VPN功能          *"
echo "*         购买SS帐号请联系 QQ:2030455800                *"
echo "*             技术支持  QQ:2030455800                   *"
echo "*             官网  www.gogovpn.org                     *"
echo "*             微信公众号 hellogoogle123                 *"
echo "*********************************************************"
echo "                                                         "
echo "请选择需要的操作（按下对应数字后回车确认）"
echo -e "\e[31m警告！你目前使用的是公开版工具箱！\e[37m"
echo -e "\e[31m如果获得技术支持，请加技术支持QQ：2030455800！\e[37m"
echo "1：安装完美版SS插件（针对9018及以下固件）"
echo "2：卸载完美版SS插件"
echo "3：安装adblock广告过滤功能"
echo "4：卸载adblock广告过滤功能"
echo "5：安装breed（支持包括HC5761A在内的所有版本）"
echo "6：备份可以备份的一切（需安装局域网共享中转站插件）"
# echo "7：安装百度云同步插件"
# echo "8：安装python2.7（只能极路由官方系统下使用）"
echo "0:退出"
read num



if [ "${num}" == "1" ]
then
cd /tmp
rm -rf *.sh
wget http://www.gogovpn.org/hiwifi/install9017.sh
chmod -R 777 install9017.sh
./install9017.sh
fi

if [ "${num}" == "2" ]
then
cd /tmp
rm -rf *.sh
wget http://www.gogovpn.org/hiwifi/end.sh
chmod 777 end.sh
sh end.sh
fi


if [ "${num}" == "3" ]
then
cd /tmp
rm -rf *.sh
wget http://www.gogovpn.org/hiwifi/adbyby.sh
chmod 777 adbyby.sh
sh adbyby.sh
fi

if [ "${num}" == "4" ]
then
cd /tmp
rm -rf *.sh
wget http://www.gogovpn.org/hiwifi/adbyby_sd.sh
chmod 777 adbyby_sd.sh
sh adbyby_sd.sh
fi


if [ "${num}" == "5" ]
then
cd /tmp
rm -rf *.sh
wget http://www.gogovpn.org/hiwifi/breed.sh
chmod 777 breed.sh
sh breed.sh
fi

if [ "${num}" == "6" ]
then
echo "开始备份可备份的一切"
cd /tmp/data/filetransit0/
rm -rf *.bin
bakall
echo "备份完成"			
echo "备份文件名为mtd0.bin-mtd9.bin、sd-crypt-key.txt"
echo "本次备份的编程器固件fullflash.bin由mtd0 1 2 9 6 7 8 顺序组成，可直接通过不死uboot刷入。"
echo "在浏览器打开\\hiwifi.com\你局域网共享中转站插件设置的文件夹里面的文件就是备份文件"
fi

if [ "${num}" == "7" ]
then
read -n1 -p "请确保内存卡可以使用，请在有网络的情况下使用，网址和验证码手动输入，出现任何后果本人概不负责。暂时不提供卸载命令，如需删除请删除/etc/init.d/syncy文件。默认只添加了下载功能，下载云盘中的我的应用数据/syncy/目录下的文件。安装吗？请输入[Y/N]?" yn
echo ""
if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
cd /tmp && wget http://www.gogovpn.org/hiwifi/baiduyun.tar.gz && tar xzvf baiduyun.tar.gz -C / && ./install.sh && rm -rf baiduyun.tar.gz	
else
echo -e "\e[31m未进行操作\e[37m"
fi
fi

if [ "${num}" == "8" ]
then
read -n1 -p "请确保内存卡可以使用，请在有网络的情况下使用，出现任何后果本人概不负责。暂时不提供卸载命令。安装吗？请输入[Y/N]?" yn
echo ""
if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
cd /tmp && wget http://www.gogovpn.org/hiwifi/python.tar.gz && tar xzvf python.tar.gz -C / && ./install.sh && rm -rf python.tar.gz	
else
echo -e "\e[31m未进行操作\e[37m"
fi
fi


if [ "${num}" == "0" ]
then
exit
fi
