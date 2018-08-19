request break point

```
bpu www.abc.com
```

# Matching Rules

```
regex:http://mmdspre.cnsuning.com/mmds/js21/mmds.*js
```

https://docs.telerik.com/fiddler/KnowledgeBase/AutoResponder

# modify request or response

```java
static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		
		if (oSession.uriContains("fwcim._CB471568891_.js")){
			oSession.oResponse.headers.Add("Access-Control-Allow-Origin", "*");	
		}
}
```

https://docs.telerik.com/fiddler/KnowledgeBase/FiddlerScript/ModifyRequestOrResponse

https://gist.github.com/fhfaa/4501be75121cae2da45f

# mac

```
mono --arch=32 Fiddler.exe
```
