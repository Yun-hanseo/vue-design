// ✅ 여러 개의 복잡한 서브시스템들
class TV {
    turnOn() {
        return "TV가 켜졌습니다";
    }
}
class Light {
    turnOn() {
        return "조명이 켜졌습니다";
    }
}
class Speaker {
    playMusic() {
        return "스피커에서 음악이 재생됩니다";
    }
}

// ✅ 퍼사드 클래스: 복잡한 서브시스템을 단일 인터페이스로 묶음
export class SmartHomeFacade {
    private tv = new TV();
    private light = new Light();
    private speaker = new Speaker();

    startEveningMode(): string {
        return [
            this.tv.turnOn(),
            this.light.turnOn(),
            this.speaker.playMusic(),
        ].join(" / ");
    }
}

