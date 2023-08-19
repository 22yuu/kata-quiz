1.  string literal union types인 Fruit 타입이 있습니다. `type Fruit = "Banana" | "Apple" | "Pear";` 아래 코드에 타입에러가 있나요?

    ```tsx
    let fruit: Fruit;
    fruit = "Apple";
    fruit = "pear";
    fruit = "strawberry";
    ```

    3, 4번째 줄 `fruit = "pear"` `fruit = "strawberry"` 코드에서 에러가 발생합니다. Fruit 타입은 “Banana”, “Apple”, “Pear”의 string 리터럴 타입을 유니온 형태로 선언되어 있습니다. 따라서 위의 코드가 에러 없이 동작하려면 아래 코드처럼 작성되어져야 합니다.

    ```tsx
    let fruit: Fruit;
    fruit = "Apple";
    fruit = "Pear";
    fruit = "Banana";
    ```

2.  Object union types - 아래 코드는 타입 에러가 있나요?

    ```tsx
    type Actions =
      | { type: "loading" }
      | { type: "loaded"; data: { name: string } };

    const loadingAction: Actions = { type: "loading" };

    console.log(loadingAction.type);
    ```

    아니요, 선언된 Actions 타입에 맞게 올바른 값이 할당되었기 때문에 타입 에러는 발생하지 않습니다.

3.  enum 타입 vs string literal union 타입 - 문자열 union으로 타입을 만드는 것과 enum 타입을 사용하는 것에 대해 의견을 알려주세요.

    두 타입 선언 방식 모두 상수 값을 관리할 때 정말 유용하게 사용가능합니다. 지금 저의 수준에서 생각해봤을 때 문자열 리터럴를 사용한 유니온 타입은 타입을 좁혀 타입 가드로 사용하거나 보통 리액트에서 버튼 컴포넌트와 같은 활성, 비활성 상태를 가지는 컴포넌트를 만들 때 `type Status = 'active' | 'finish'` 이런 형태로 많이 사용할 것 같습니다.

    솔직히 저는 enum 타입보다는 문자열 리터럴을 이용한 유니온 타입을 더 선호하는 편입니다. 만약 enum을 사용해야 한다면 enum의 특징인 인덱싱이 가능하다는 것을 활용할 것 같아요.

    ```tsx
    enum Role {
      ADMIN = "ADMIN",
      READ_ONLY = "READ_ONLY",
      AUTHOR = "AUTHOR",
    }
    ```

    위의 코드처럼 문자열 형태로 매핑해 저장할 수도 있지만 아래 코드처럼 저장을 한다면

    ```tsx
    enum Role {
      ADMIN,
      READ_ONLY,
      AUTHOR,
    }
    ```

    기본적으로 0, 1, 2 인덱스 값으로 사용할 수 있습니다. 그래서 뭔가 배열과 같이 인덱싱이 필요한 상황에서 enum을 활용하면 유용하게 사용할 것 같아요! 그리고 관리를 해야될 데이터가 많은 경우에도 enum 타입이 더 좋을 것 같아요. union 타입으로 관리하게 되면 코드 가독성이 떨어질 수도 있을 것 같네요.

    그럼에도 불구하고 enum 타입에는 많은 단점들이 존재하고 이러한 단점을 보완하는 enum 대체재들이 존재하기 때문에 모던 타입스크립트에서는 권장되지 않는 것 같네요. [타입스크립트 공식문서: Objects vs Enums](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)

**enum 단점들**

- 확장이 불가능함. `enum`과 다른 `enum`을 합치려면 `union` 타입을 사용하면 됩니다.
- enum을 대체 가능한 방법들을 모두 비교했을 때 enum의 번들 크기가 가장 큼
- Tree-shaking이 안됨
