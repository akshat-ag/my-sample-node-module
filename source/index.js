export default function calculatePercentage(percent=100, amount) {
    const percentAmount = (percent/100) * amount;
    return percentAmount;
}

export class Foo {
    state = {
        test: 1
    };

    doSomething = () => {
        const test = {
            ...this.state
        };
    }
}