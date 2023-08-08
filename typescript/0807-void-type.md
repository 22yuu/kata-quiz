8월 7일 월요일 void 타입에 대한 문제입니다.

코드샌드박스 링크를 열어주세요.

https://codesandbox.io/s/void-type-ef052

1. 아무것도 리턴하지 않는 함수의 타입은 무엇이나요?

   `void`, `never`, `undefined`가 있는 것으로 알고 있습니다.

   보통 아무것도 리턴하지 않는 경우 `void` 타입을 주는 것으로 알고 있습니다. 하지만 아무것도 반환하지 않는 함수를 콘솔로 찍어보면 `undefined`가 출력됩니다. 그렇기 때문에 `undefined`로 타입을 줄 수도 있을 것 같네요. 다만 `undefined`로 타입을 명시해준다면 반드시 `undefined` 가 리턴되어야 하므로 `return` 키워드도 함께 사용해줘야 합니다.

   ```tsx
   // undefined를 반환타입으로 명시해줄 경우
   function logMessage(message: string): undefined {
     console.log(message);
     return;
   }

   logMessage("Hello!");
   ```

   `never` 같은 경우 throw 던질 때 명시해주는 것으로 알고 있습니다. 에러를 던진다는 것은 결국 스크립트를 취소 혹은 스크립트 충돌로 인해 강제적으로 코드를 중단하는 상황이 발생될 때 never라는 타입을 개발자에게 읽을 수 있는 코드로 명시해주는 것일 뿐 크게 의미는 없으며 `void` 타입으로 설정해도 상관없습니다. 저는 가독성을 위해 `never`라는 타입을 사용하는 것으로 이해했습니다.

   ```tsx
   function generateError(message: string, code: number): never {
     throw { message: message, errorCode: code };
   }

   const value = generateError("An error occurred!", 500);
   console.log("여긴 실행이 안되지롱");
   console.log(value);
   ```

2. logMessage의 리턴 타입을 명시해주세요.

   ```tsx
   function logMessage(message: string): void {
     console.log(message);
   }

   logMessage("Hello!");
   ```

3. 코드에디터에 아래 부분을 추가해 타입을 확인해부세요. 타입에러가 있나요?

   ```
   let whatCanIHold: void;
   whatCanIHold = undefined;
   whatCanIHold = "something";
   ```

   3번째 줄에서 타입 에러가 발생합니다. `whatCanIHold`의 타입은 `void`로 명시되어 있습니다. `string` 타입의 문자열을 재할당하기 때문에 오류가 발생하는 것 같습니다.

   2번째 줄의 경우 `whatCanIHold` 가 `undefined`의 값으로 재할당이 되었음에도 오류가 발생하지 않습니다. 타입스크립트 공식문서 “More on Functions”의 void 부분에서 `void`는 `undefined`와 동일하지 않다고 합니다. 정확한 이유는 모르겠지만 아마 기본적으로 자바스크립트에서 값이 할당되어 있지 않고 선언만 될 경우 `undefined` 가 할당되므로 타입스크립트가 유연하게(?) 처리하는 것 같아요.

4. 함수의 리턴타입을 void로 사용하는 것에 대한 의견을 알려주세요.

   만약 함수의 리턴 값이 없다면 `void`를 명시함으로써 해당 함수에 `return` 키워드를 사용할 경우 타입스크립트가 불평을 하며 피드백을 줍니다. 따라서 `void`를 명시해줄 경우 개발자의 실수를 줄이고, 다른 개발자가 코드를 봤을 때 “이 함수는 리턴 값이 없구나”라는 것을 즉각적으로 판단할 수 있으므로 가독성에 도움이 된다고 생각합니다.

   다만 콜백으로 함수를 넘겨줄 경우 `void`로 명시해줬음에도 불구하고 리턴값을 반환하는 경우가 있더라고요.

   ```tsx
   function add(n1: number, n2: number, cb: (num: number) => void): void {
     const result = n1 + n2;
     const value = cb(result);
     console.log(value);
   }

   add(1, 2, (res) => {
     return `결과는 : ${res}입니다.`;
   }); // 결과는 : 3입니다. 출력됨.
   ```

   `:void`와 `()=> void`에는 차이가 있는 것 같습니다. 전자의 경우 `return` 키워드를 사용하는 것조차 허용하지 않는 반면 후자의 경우 `return`키워드가 존재해도 상관없더라고요. 왜 그런지는… 아직까지 더 공부가 필요할 것 같네요 :(
