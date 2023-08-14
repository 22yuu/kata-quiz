8월 10일 목요일 never type

1. [코드샌드박스 링크](https://codesandbox.io/s/never-type-dv660)를 열어 타입을 확인해주세요. 타입 힌트로 해당 함수의 타입 확인하고, never 타입이 void와 다른이유를 설명해주세요.

   `keepLogging` 함수의 리턴타입은 `never`입니다. `never` 타입은 일반적으로 함수의 리턴 타입으로 사용됩니다. 함수의 리턴 타입으로 `never`가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다. `keepLogging`에서는 `while` 루프의 조건이 `true` 이기 때문에 무한루프를 돌게 됩니다. 따라서 해당 함수는 애플리케이션이 종료되기 전까지 끝나지 않으므로 `never` 타입을 리턴합니다.

   `never` 타입과 `void` 타입의 차이점은 `void` 타입의 경우 함수의 리턴 값이 없다는 것을 의미하며 `never` 타입의 경우 리턴 값이 절대로 나올 수 없다는 것을 의미합니다. 그래서 보통 throw를 던지는 함수나 무한 루프를 돌게 되는 함수의 경우 리턴 타입이 `never` 가 됩니다.

2. never 타입을 사용하는 경우를 찾아봐주세요.

   ### 에러처리

   `never` 타입을 사용하는 경우는 이전 8/7 월요일 퀴즈 void 타입편에서 예시를 들었던 것처럼 에러를 던질 때 사용합니다.

   ```tsx
   function generateError(message: string, code: number): never {
     throw { message: message, errorCode: code };
   }

   const value = generateError("An error occurred!", 500);
   console.log("여긴 실행이 안되지롱");
   console.log(value);
   ```

   ### 타이핑을 부분적으로 허용하지 않는다.

   자바스크립트는 본질적으로 덕 타이핑 기반입니다. 하지만 타입스크립트를 활용한다면 타입스크립트의 타입 체커가 컴파일 단계에서 타입을 검사하기 때문에 **구조적 타이핑**이 가능합니다. 예를 들어 아래의 코드의 경우 타입스크립트에서 불평을 하지 않습니다.

   ```tsx
   type A = {
     a: string;
   };

   const input = { a: "hello", b: 1234 };

   function fn(arg: A): void {}

   fn(input);
   ```

   `input` 변수를 보면 `string` 타입의 a와 `number` 타입의 b를 가지고 있습니다. 하지만 함수 `fn`의 매개변수는 `A` 라는 타입을 가지고 있습니다. `A` 라는 타입에는 `number` 타입을 가진 속성이 없음에도 타입스크립트는 불평하지 않습니다.

   왜냐하면 타입스크립트는 타입 확장에 대해 열려있기 때문입니다. 즉, 타입에 선언된 속성 외에 임의의 속성을 추가하더라도 오류가 발생하지 않는다는 것입니다.

   아래의 코드를 보면 타입 A, B가 있고 유니언 타입을 활용해 함수 `fn` 에 전달인자로 `string` 또는 `number` 값을 넘겨주고자 합니다. 하지만 타입스크립트의 확장성 때문에 우리가 의도한대로 동작하지 않습니다.

   ```tsx
   type A = {
     a: string;
   };

   type B = {
     b: number;
   };

   const input = { a: "hello", b: 1234 };

   function fn(arg: A | B): void {}

   fn(input); // 오류가 발생하지 않음, 우리의 목적과 맞지 않음
   ```

   우리가 의도한대로 코드를 작성하도록 유도하려면 `never` 타입을 활용할 수 있습니다.

   ```tsx
   type A = {
     a: string;
     b?: never;
   };

   type B = {
     b: number;
     a?: never;
   };

   const input = { a: "hello", b: 1234 };

   function fn(arg: A | B): void {}

   fn(input); // 에러... 타입스크립트가 불평함.
   ```

   이 외에도 `never` 타입을 활용한 다양한 방법들이 존재하더라고요. 저는 Zhenghao He의 포스팅에서 더 많은 예제가 소개되어 있어요. → [링크](https://www.zhenghao.io/posts/ts-never)

   영어가 어려우신 분들은 TOAST UI의 기술블로그에 번역글이 있어요. → [링크](https://ui.toast.com/posts/ko_20220323)

3. 아래의 코드에서 default 문에 `function neverReached(never: never) {}` 을 추가해 완성해주세요.

   ```tsx
   type Status = "Pending" | "Working" | "Complete";

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

   답변:

   ```tsx
   type Status = "Pending" | "Working" | "Complete";

   function neverReached(never: never) {
     throw new Error("Never Reached...!");
   }

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
       default:
         return neverReached(status);
     }
   }

   doSomeAction("Pending");
   ```

출제: https://learntypescript.dev/03/l6-never
