```java
Intent intent = new Intent(this, DisplayMessageActivity.class);
intent.putExtra(EXTRA_MESSAGE, message);

Intent intent = getIntent();
String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
```