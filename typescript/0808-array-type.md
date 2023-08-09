8월 8일 화요일 배열 타입에 대한 문제입니다.

1. 아래 링크에서 아무런 타입 오류가 발생하지 않는 이유가 무엇인가요?
   코드샌드박스 링크를 열어주세요
   https://codesandbox.io/s/arrays-nsfjo

   `const items = []` 코드가 `any[]` 타입으로 추론되었기 때문입니다. `any` 타입의 배열이기 때문에 어떤 타입의 데이터가 배열의 요소가 되어도 타입 체커는 불평하지 않습니다.

2. 제네릭 Array 타입

```ts
const numbers: Array<number> = [];
numbers.push(1);
numbers.push("two");
numbers.push(false);
```

```ts
const numbers: Array<number> = [1, "two", false];
console.log(numbers);
```

타입 오류가 나는 이유는 무엇인가요?

제네릭 타입은 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있습니다. 사용자는 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있습니다. 제네릭 타입에 관한 자세한 내용은 [타입스크립트 공식 문서](https://www.typescriptlang.org/ko/docs/handbook/2/generics.html#%EC%A0%9C%EB%84%A4%EB%A6%AD-%EC%A0%9C%EC%95%BD%EC%A1%B0%EA%B1%B4-generic-constraints)를 확인해주세요!

변수 `numbers`에 할당되어져 있는 타입 `Array<number>`의 의미는 `number` 타입의 요소를 갖는 `Array`를 의미합니다. 따라서 `string` 타입인 '"two"'와 `boolean` 타입인 'false'는 타입이 부합하지 않으므로 타입 체커가 불평합니다.

3.  [] 표기 사용한 타입

```ts
const strings = ["one", "two", "three"];
```

[]표기법을 사용해 strings의 타입을 정의해주세요

제시된 코드의 변수 `strings`의 타입을 아래와 같이 설정해줄 수 있습니다.

```ts
const strings: string[] = ["one", "two", "three"];
```

하지만 타입스크립트의 타입 추론으로 직접 타입을 설정해줄 필요는 없어보입니다.

4. 타입 유추

```ts
const array = [1, 2, 3];
console.log(array);
```

array의 타입이 무엇인지 타입 힌트를 확인해서 유추해보세요. 타입을 지정할 필요가 있을지 고민해보세요.

변수 `array`의 타입은 `number[]`로 추론이 됩니다. 타입스크립트에서는 할당된 값을 통해 타입을 추론하기 때문에 따로 타입을 지정해줄 필요는 없어 보입니다.

5.

```ts
function logScores(firstName, ...scores) {
  console.log(firstName, scores);
}
```

...scores타입을 정의하세요. 타입 힌트를 통해 타입을 정의해보세요.

```ts
logScores("Mike", 90, 65, "65");
```

에서 오류가 발생하나요? 이유에 대해 알려주세요.

`...scores` 매개변수는 Rest 파라미터입니다. Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받습니다. 카타 퀴즈 채널에서 준석님이 답변해주신 것처럼 함수와 매개변수의 이름으로 유추해보았을 때 `...scores`의 타입은 `number[]`여야 할 것 같네요.
