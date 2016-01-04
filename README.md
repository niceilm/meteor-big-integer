BigInteger.js wrapper
----

https://github.com/peterolson/BigInteger.js

```
meteor add flynn:big-integer
```

# Server Side
```
var test = bigInt(1234);
```

# Client Side
```
<script src="/packages/flynn_big-integer/client/BigInteger.js"></script>
```

# Test
**required [velocity](https://www.npmjs.com/package/velocity-cli)**
```
npm install -g velocity-cli
```
```
velocity test-package ./
```