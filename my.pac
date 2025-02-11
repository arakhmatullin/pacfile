// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#dnsdomainis

function FindProxyForURL(url, host) {
  PROXY = 'PROXY 172.29.172.1:3128'
  if (host='2ip.io') {
    return PROXY
  }
  if (dnsDomainIs(host,'youtube.com')) {
    return PROXY
  }
  if (dnsDomainIs(host,'.2ip.io')) {
    return PROXY
  }
  return 'PROXY 172.29.172.1:3128';
}s