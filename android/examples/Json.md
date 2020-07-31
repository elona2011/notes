```java
import org.json.JSONException;
import org.json.JSONObject;

try {
    JSONObject accessToken = new JSONObject(jsonStr);
    String access_token = accessToken.getString("access_token");
}catch (JSONException err){
    Log.i("Error", err.toString());
}
```