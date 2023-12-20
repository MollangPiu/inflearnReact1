import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "searchFormView";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view"));


        this.inputElement = qs("[type=text]", this.element);
        this.resetElement = qs("[type=reset]", this.element);

        this.showResetButton(false);
        this.bindEvent();   //keyup 이벤트 삽입
    }


    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvent() {
        console.log(this.inputElement);
        on(this.inputElement, "keyup", () => this.handleKeyup());
        //console.log('test');
    }


    handleKeyup() {
        console.log(tag, "handleKeyup", this.inputElement.value);
        const {value} = this.inputElement;
        this.showResetButton(value.length > 0);
    }
}