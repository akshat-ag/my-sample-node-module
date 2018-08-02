export default function calculatePercentage(percent=100, amount) {
    const percentAmount = (percent/100) * amount;
    return percentAmount;
}