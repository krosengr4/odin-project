/*
 * Static methods and fields
 *
 * Static properties are defined on the class itself instead of each instance.
 * They are used to create utility functions for an application
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(2, 5);
const p2 = new Point(10, 7);

console.log(Point.displayName); // Point
console.log(Point.distance(p1, p2)); // 8.246211251235321
