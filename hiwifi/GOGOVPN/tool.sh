#!/bin/sh

cd /tmp
wget http://www.gogovpn.org/hiwifi/adv_menu.htm
rm -f /usr/lib/lua/luci/view/admin_web/menu/adv_menu.htm
mv /tmp/adv_menu.htm /usr/lib/lua/luci/view/admin_web/menu
wget http://www.gogovpn.org/hiwifi/shadowsocks.htm
rm -f /usr/lib/lua/luci/view/app/th/shadowsocks.htm
mv /tmp/shadowsocks.htm /usr/lib/lua/luci/view/app/th
fi
