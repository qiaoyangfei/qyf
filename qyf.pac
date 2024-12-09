//参考 https://github.com/zhiyi7/gfw-pac/blob/master/gfw.pac
var proxy = "PROXY 127.0.0.1:7890";

var direct = 'DIRECT';

var directDomains = [
    "laoqiaoa.eu.org",
	"52pojie.cn"
];

function FindProxyForURL(url, host) {
	
    for (var i = 0; i < domainsUsingProxy.length; i++) {
        var domain = domainsUsingProxy[i];
        if (host === domain || host.endsWith('.' + domain)) {
            return direct;
        }
    }
	
    //debug('未命中任何规则', host, ip);
    return proxy;
}
