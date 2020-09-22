```py
"""
This example shows how to send a reply from the proxy immediately
without sending any data to the remote server.
"""
from mitmproxy import http


def request(flow: http.HTTPFlow) -> None:
    # pretty_url takes the "Host" header of the request into account, which
    # is useful in transparent mode where we usually only have the IP otherwise.

    if "jquery-1.4.4.js" in flow.request.pretty_url:
        file = open("jquery-1.4.4.js", "r")
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            file.read(),  # (optional) content
            {"Content-Type": "application/javascript"}  # (optional) headers
        )

```

mitmproxy -s proxy.py