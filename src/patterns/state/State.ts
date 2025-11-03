export interface LightState {
    toggle(): string;
}

export class OnState implements LightState {
    toggle(): string {
        return "전등이 꺼졌습니다.";
    }
}

export class OffState implements LightState {
    toggle(): string {
        return "전등이 켜졌습니다.";
    }
}

export class Light {
    private state: LightState;

    constructor(initialState: LightState) {
        this.state = initialState;
    }

    setState(state: LightState) {
        this.state = state;
    }

    pressButton(): string {
        const message = this.state.toggle();
        if (this.state instanceof OnState) {
            this.setState(new OffState());
        } else {
            this.setState(new OnState());
        }
        return message;
    }
}
