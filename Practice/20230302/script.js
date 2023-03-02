
class Calculator {


    constructor(displayElement) {

        this.displayElement = displayElement //인스턴스 변수 displayElement에 displayElement를 담는다.
        this.displayContent = '' //인스턴스 변수  displayContent에 빈 문자열을 담는 작업.
        this.clear()

    }
    appendNumber(number) {
        this.displayContent += number  // 복합대입연산자 +=는 문자열에 기호를 쓴 경우 덧셈을 하는 것이 아닌 문자열을 잇는 작업을 한다.

    }
    updateDisplay() {

        this.displayElement.value = this.displayContent // this.displayElemnet의 값(value)에 this.displayContent를 담는다.

    }

    appendOperator(operator) {

        this.displayContent += operator

    }

    updateDisplay() {

        this.displayElement.value = this.displayContent

    }

    compute() {

        this.displayContent = eval(this.displayContent.replace('\u00D7', '*')

            .replace('\u00F7', '/'))  // eval함수는 산술연산에서의 문자열의 식을 반환시켜주는 함수이다.
        //산술연산을 지워자바스크립트에서는 곱하기와 나누기가 html 토큰의 &divide; &times 가 아닌 * , / 를 사용하므로 replace를 사용하여 변경해준후 계산한다.

    }
    
    updateDel() {
        if (this.displayContent.length > 0) {
            this.displayContent = this.displayContent.substring(1)
        }  //길이가 0보다 커져야 첫 숫자를 제거한 결과값을 나오게 하는데 계산기는 애초에 숫자를 선입력하여 문자길이가 0이 될 수 없으니 if문은 과연 꼭 필요한 조건문인가?
    }


    clear() {

        this.displayContent = ''
        this.displayElement.value = 0 //초기화

    }

}

const buttons = document.querySelectorAll('button') //자바스크립트 코드에 "buttons"라는 변수를 선언한다. css문서의 buttons라는 선택자에 해당되는 모든 요소를 리스트값으로 반환한다.
const displayElement = document.querySelector('input') // displayElement라는 변수는 input이라는 선택자라는 모든 요소를 반환한다.
const calculator = new Calculator(displayElement)


buttons.forEach(button => {

    button.addEventListener('click', () => {

        switch (button.dataset.type) {

            case 'operator':

                calculator.appendOperator(button.innerText)

                calculator.updateDisplay()

                break

            case 'ac':

                calculator.clear()

                break

            case 'equals':

                calculator.compute()

                calculator.updateDisplay()

                break

            case 'First_Del':

                calculator.updateDel()

                calculator.updateDisplay()
                
                break

            default:

                calculator.appendNumber(button.innerText)

                calculator.updateDisplay()

                break

        }

    })

})