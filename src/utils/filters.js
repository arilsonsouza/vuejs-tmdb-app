export function currency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD"
    }).format(value);
}

export function duration(time) {
    console.log(time);
    const minutes = time % 60;
    const hour = Math.floor(time / 60);
    return `${hour}h e ${minutes}`;
}