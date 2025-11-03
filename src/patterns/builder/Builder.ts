// 피자 클래스
export class Pizza {
    size: string
    topping: string

    constructor(size: string, topping: string) {
        this.size = size
        this.topping = topping
    }

    desc(): string {
        return ` ${this.size} 사이즈 피자 (${this.topping}) 완성!`
    }
}


export class PizzaBuilder {
    private size = "중간";
    private topping = "치즈";

    setSize(size: string): this {
        this.size = size;
        return this;
    }

    setTopping(topping: string): this {
        this.topping = topping;
        return this;
    }

    build(): Pizza {
        return new Pizza(this.size, this.topping);
    }
}

