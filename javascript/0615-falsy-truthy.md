### 2023년 6월 14일 수요일 자바스크립트 퀴즈 입니다.

```
var object1 = { same: 'same' };
var object2 = { same: 'same' };

console.log(object1 === object2, object1 == object2)
```

console.log 에서 무엇을 출력할까요?
(보기 중 선택)

- [1] true false
- [2] false true
- [3] true true
- [4] false false

> 정답은 [4] false, false입니다. 자바스크립트에서 객체 데이터의 경우 참조 자료형으로 독립된 별도의 메모리 공간에 데이터가 저장됩니다. 따라서 객체를 저장하는 변수의 경우 객체안에 들어 있는 값이 아닌 해당 데이터를 저장하고 있는 메모리의 주소를 가리킵니다. 그러므로 object1, object2의 두 변수는 코드 상으로는 동일한 데이터를 가지고 있지만 실제로는 서로 다른 주소 값을 가지고 있기 때문에 `false, false`가 출력됩니다.

이어서 다음 문제가 나갑니다~

```
var val1 = false;
var val2 = 0
console.log(val1 === val2, val1 == val2)
```

다음 위 코드는 무엇을 출력할까요?

> 정답은 `false, true`입니다. 먼저 `==` 연산자의 경우 동등 연산자라고 합니다. 해당 연산자의 경우 값을 비교할 때 강제 형변환이 일어납니다. 따라서 다음 식은 `true`를 반환합니다. `'2' == 2` 문자열 2와 정수형 2를 비교했을 때 서로 다른 타입임에도 불구하고 형변환이 일어나 결국은 `2 == 2` 두 정수형으로 값을 비교하게 됩니다. `==` 연산자는 한쪽이 문자열이고 한쪽이 정수형일 때 문자열을 정수형으로 형변환해 값을 비교합니다. 그 근거는 ECMAScript 명세서 `IsLooselyEqual` 부분에서 정의하고 있습니다. 더 자세한 내용은 [링크](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal)에서 확인할 수 있으며 5,6번 문항을 보시면 됩니다. <br>
> 다음으로 `===` 연산자는 일치 연산자로 엄격한 검사를 합니다. 해당 연산자의 경우 형변환이 일어나지 않기 때문에 문자열과 정수형으로 비교하므로 `false`를 반환합니다.

마지막 질문입니다. 자바스크립트 falsy값 목록에는 무엇이 있는지 알려주세요.

> 자바스크립트에서 falsy 값은 `undefined`, `null`, `NaN`, `0`, `-0`, `0n`, `""`, `document.all`이 있습니다. 추가로 truthy 값은 `true`, `{}`, `[]`, `0이 아닌 정수형`, `빈 문자열이 아닌 문자열`, `Infinity`, `-Infinity` 더 자세한 내용은 아래의 MDN 링크를 참고해주세요.

[MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[MDN - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
