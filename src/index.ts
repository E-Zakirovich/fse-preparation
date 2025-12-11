export function add(a: number, b: number): number {
    return a + b;
}

export function sumThree(a: number, b: number, c: number): number {
    return add(add(a, b), c);
}


