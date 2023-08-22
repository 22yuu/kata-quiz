8월 21일 월요일 인터페이스 v 타입 별칭

인터페이스와 타입 별칭을 사용에 대한 의견을 알려주세요.
예시는 아래를 참고하셔도 되고 안하셔도 됩니다. (자유)

1. 배열 표현

   ```
   type Names = string[];
   interface Names {
   [index: number]: string;
   }
   ```

2. 튜플표현

   ```
   type Point = [number, number];
   ```

3. 함수표현

   ```
   type Log = (message: string) => void;
   interface Log {
   (message: string): void;
   }
   ```

4. 유니온타입

   ```
   type Status = "pending" | "working" | "complete";
   ```

5. 객체 표현

   ```
   복사
   type Person = {
   name: string;
   score: number;
   };
   interface Person {
   name: string;
   score: number;
   }
   ```

6. 객체 재구성

   ```
   type Name = {
   firstName: string;
   lastName: string;
   };
   interface PhoneNumber {
   landline: string;
   mobile: string;
   }
   type Contact = Name & PhoneNumber;
   ```

TypeScript 팀은 기본적으로 interface를 사용하고 type은 필요한 경우에만 사용하도록 권장합니다. 하지만 많은 개발자 들은 이를 반대하며, 인터페이스의 선언 병합을 사용하는 것보다. 기본적으로 type을 사용하는 것을 더 선호합니다. 인터페이스는 여전히 객체 상속에 권장되지만, 조금 더 유연하고 예상치 못한 결과를 피하기 위해 type을 사용하는 것도 좋은 방법이라고 생각합니다.

또한 인터페이스를 사용하면 `extends` 키워드를 이용해서 인터페이스를 만들면 타입스크립트 내부 레지스트리에 해당 인터페이스를 이름으로 캐시할 수 있어서 최적화에 아주 조금 도움이 된다고 합니다. 그래서 타입스크립트 성능 위키에서 객체 상속을 위해서 타입보다는 인터페이스를 사용하는 것을 권장한다고 합니다.

저 또한 인터페이스보다는 타입 별칭을 이용해 타입 선언하는 것을 더 선호하는 편입니다. 인터페이스는 주로 타입이 확장될 가능성이 있을 때 사용하는 것 같아요.
