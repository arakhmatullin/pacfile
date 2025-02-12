// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#dnsdomainis
//
function FindProxyForURL(url, host) {
  PROXY = 'HTTP 172.29.172.1:3128'
//   PROXY = 'SOCKS5 186.179.62.135:9402; PROXY 172.29.172.1:3128'
  if (dnsDomainIs(host,'2ip.io')) {
    return PROXY;
  }
//   if (dnsDomainIs(host,'youtube.com') || dnsDomainIs(host,'*.youtube.com') ) {
//     return PROXY;
//   }
  return 'DIRECT';
}
