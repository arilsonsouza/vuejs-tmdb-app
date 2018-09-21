export function currency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD"
    }).format(value);
}