#!/bin/sh
dnurl="http://www.gogovpn.org/"
undeadubootfn="hiwifi/geetool/HC5761/uboot.bin"
undeadubootMD5fn="hiwifi/geetool/HC5761/undeaduboot.md5"

          
updateuboot()
{

    echo -e "备份uboot-----------------------------------------\c"
    if [ -d /tmp/data/filetransit0 ]; then
        rm -rf /tmp/data/filetransit0/mtd0.bin
        cat /dev/mtd0 > /tmp/data/filetransit0/mtd0.bin
        echo -e "[\e[32m完成\e[37m]"
        echo "备份文件名为mtd0.bin"
        echo "存放在/tmp/data/filetransit0 电脑打开\\\hiwifi.com可见"
    else
        rm -rf /root/mtd0.bin
        cat /dev/mtd0 > /root/mtd0.bin
        echo -e "[\e[32m完成\e[37m]"
        echo "备份文件名为mtd0.bin"
        echo "存放在/root,请及时取走"
    fi
    cd /tmp
    rm -rf ThirdFlameTemp
    mkdir ThirdFlameTemp
    cd ThirdFlameTemp
    echo "下载uboot文件-------------------------------------"

    curl -o uboot.bin -m 120 $dnurl$ubootfn
    if [ -f uboot.bin ]; then
        echo -e "--------------------------------------------------[\e[32m完成\e[37m]"
        echo "下载ubootMD5验证文件------------------------------"
        curl -o uboot.md5 -m 120 $dnurl$ubootMD5fn
        if [ -f uboot.md5 ]; then
            echo -e "--------------------------------------------------[\e[32m完成\e[37m]"
            find *.bin -print|xargs md5sum|sort > uboot.md5.local
            FILE=$( md5sum uboot.md5 |awk '{print $1 }' )
            FILE_1=$( md5sum uboot.md5.local |awk '{print $1 }' )
            echo -e "Uboot文件MD5验证----------------------------------\c"
            if [ $FILE = $FILE_1 ];then
                echo -e "[\e[32m完成\e[37m]"
                read -n1 -p "MD5验证通过，是否刷入Breed,请输入[Y/N]?" yn
                if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
                    echo ""
                    echo "开始刷入Breed"
                    mtd write uboot.bin u-boot
                    echo -e "Breed刷入完成------------------------------------[\e[32m完成\e[37m]"
                    UpdateUboot=1
                else
                    echo ""
                    UpdateUboot=0
                fi
            else
                echo -e "[\e[31m失败\e[37m]"
                UpdateUboot=0
            fi
        else
            echo -e "[\e[31m失败\e[37m]"
            UpdateUboot=0
        fi
    else
        echo -e "[\e[31m失败\e[37m]"
        UpdateUboot=0
    fi
    cd /tmp
    rm -rf ThirdFlameTemp
    if [ "$UpdateUboot" == "1" ]; then
        echo -e "替换uboot操作--------------------------------[\e[32m全部完成\e[37m]"
    else
        echo -e "替换uboot操作-------------------------------------[\e[31m失败\e[37m]"
    fi
    echo ""
    echo ""

}



#verify flash possibility of device
machine=$(lua -e "print(require 'tw'.get_model())")
if [ "$machine" == "HC5761" ]; then
echo 机型验证中。。。
sleep 2
echo 机型验证通过！
else 
echo 检测到你的机器型号不对，当前机器的型号是：$machine 刷了必砖，故终止操作！注意：如果你的系统不是HIWIFI OS，那么，型号是识别不了的！是空白的！
cd /tmp
rm -rf ThirdFlameTemp
exit
fi

rm -rf alphatoolset.sh
rm -rf $0
selectnum=""
until [ "$selectnum" == "0" ]
do
echo "*********************************************************"
echo "*                                                       *"
echo "*                                                       *"
echo "*              -----breed for HC5761-----                    *"
echo "*                                                       *"
echo "*********************************************************"
echo "                                                         "
echo "请选择，并操作"
echo "1、刷入极2的breed"
echo "0、退出" 
read -n1 -p "请选择需要进行的操作[1、0]?" selectnum
echo ""
echo "---------------------------------------------------------"
case $selectnum in

   



	   
	 
     
     1) 
     		read -n1 -p "开始将官方Uboot替换成Breed，是否继续,请输入[Y/N]?" yn
        echo ""
        if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
      		  ubootfn=$undeadubootfn
						ubootMD5fn=$undeadubootMD5fn
				    updateuboot
				else
				    echo -e "\e[31m未进行替换uboot操作\e[37m"
        fi
        ;;
    
	 
	 
     0)
        echo "退出"
		cd /tmp && rm -rf *.sh && wget http://www.gogovpn.org/hiwifi/sstool.sh && sh ./sstool.sh && rm -rf *.sh
        ;;
     
   nodaoban)
        echo "无效"
        
	
        ;;
	*)
        echo "输入错误"
esac
done
exit 0 
