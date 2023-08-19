1.  실습링크 https://codesandbox.io/s/interfaces-ctqw1?file=/src/index.ts:0-87 실습링크를 열고 ButtonProps 타입 interface로 정의해주세요.
    ```tsx
    interface ButtonProps {
    text: string;
    onClick: () => void;
    }

        const buyButton: ButtonProps = {
          text: "Buy",
          onClick: () => console.log("Buy")
        };
        ```

2.  onClick 을 옵션가능하도록 만들고, buyButton에 onClick을 삭제해보세요.
    ```tsx
    interface ButtonProps {
    text: string;
    onClick?: () => void;
    }

        const buyButton: ButtonProps = {
          text: "Buy"
        };
        ```

3.  extends 구문을 사용해 새로운 타입을 만들어주세요. (`interface ColoredButtonProps extends ButtonProps`) 예시 코드도 알려주세요.
    ```tsx
    interface ButtonProps {
    text: string;
    onClick?: () => void;
    }

        interface ColoredButtonProps extends ButtonProps {
          color: string;
        }

        const buyButton: ColoredButtonProps = {
          text: "Buy",
          color: "blue",
          onClick: () => console.log("Buy")
        };

        ```

4 . interface 을 사용해 아래 코드의 함수 타입을 정의하는 방법을 알려주세요.

    ```tsx
    const log = (message: string) => {
      console.log(message);
    };
    ```
    답변:

    ```tsx
    interface Log {
        (message:string): void
    }

    const log:Log = (message: string) => {
      console.log(message);
    };

    Log('hello!');
    ```

5. 인터페이스는 병합(declaration merging)이 가능한가요?

   네, 가능합니다! 인터페이스 병합은 아래의 코드와 같이 사용할 수 있습니다. 코드는 타입스크립트 공식문서에서 발췌했습니다.

   ```tsx
   interface Box {
     height: number;
     width: number;
   }
   interface Box {
     scale: number;
   }
   let box: Box = { height: 5, width: 6, scale: 10 };

   console.log(box.scale);
   ```

   동일한 인터페이스끼리 병합할 경우 같은 속성의 이름과 타입을 그대로 사용할 수 있습니다.

   ```tsx
   interface Box {
     height: number;
     width: number;
   }
   interface Box {
     scale: number;
     height: number;
     width: number;
   }
   let box: Box = { height: 5, width: 6, scale: 10 };

   console.log(box.scale);
   ```

   타입을 다르게 사용한다면 오류가 발생합니다.

   ```tsx
   interface Box {
     height: number;
     width: number;
   }
   interface Box {
     scale: number;
     height: number;
     width: string; // error! Property 'height' must be of type 'number', but here has type 'string'
   }
   let box: Box = { height: 5, width: 6, scale: 10 };

   console.log(box.scale);
   ```

   이름이 동일한 인터페이스를 병합할 경우 마지막으로 선언된 인터페이스가 가장 높은 우선순위를 가집니다.

   ```tsx
   interface Cloner {
     clone(animal: Animal): Animal;
   }
   interface Cloner {
     clone(animal: Sheep): Sheep;
   }
   interface Cloner {
     clone(animal: Dog): Dog;
     clone(animal: Cat): Cat;
   }

   // --- 병합 후 인터페이스 Cloner는 아래와 같은 구조를 가집니다.
   interface Cloner {
     clone(animal: Dog): Dog;
     clone(animal: Cat): Cat;
     clone(animal: Sheep): Sheep;
     clone(animal: Animal): Animal;
   }
   ```

   이 외에도 네임스페이스 병합, 네임 스페이스와 클래스 병합 등 다양한 병합 방법을 타입스크립트 공식문서 [“Declaration Merging”](https://www.typescriptlang.org/ko/docs/handbook/declaration-merging.html#%EC%86%8C%EA%B0%9C-introduction) 파트에서 소개하고 있습니다.
