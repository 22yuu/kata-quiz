1. https://codesandbox.io/s/never-type-dv660 코드샌드박스 링크를 열어 타입을 확인해주세요.
   타입 힌트로 해당 함수의 타입 확인하고, never 타입이 void와 다른이유를 설명해주세요.

2. never 타입을 사용하는 경우를 찾아봐주세요.

3. ```
   type Status = "Pending" | "Working" | "Complete";
   ```


    function doSomeAction(status: Status) {
    switch (status) {
    case "Pending":
    // some code
    break;
    case "Working":
    // some code
    break;
    case "Complete":
    // some code
    break;
    }
    }

    doSomeAction("Pending");
    ```

default 문에 function neverReached(never: never) {} 을 추가해 완성해주세요.
