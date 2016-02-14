--[[
]]--

module("luci.controller.app.th", package.seeall)

function index()
	local page   = node("app", "th")
	page.target  = firstchild()
	page.title   = _("")
	page.order   = 10
	page.sysauth = "admin"
	page.sysauth_authenticator = "jsonauth"
	page.index = true
	
	entry({"app"}, firstchild(), _(""), 700)
	entry({"app", "th"}, firstchild(), _(""), 700)
	entry({"app", "th", "shadowsocks"}, template("app/th/shadowsocks"), _("status"), 700, true)
	entry({"app", "th", "shadowsocks_save"}, template("app/th/shadowsocks_save"), _("status"), 700, true)
end
