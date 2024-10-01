import { orderByProps } from '../js/orderByProps';

describe('orderByProps', () => {

    test('свойства отсортированы в правильном порядке', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const order = ['name', 'level'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
        ]);
    });

    test('обработка пустого объекта', () => {
        const obj = {};
        const order = [];
        const result = orderByProps(obj, order);

        expect(result).toEqual([]);
    });

    test('обработка пустого order', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const order = [];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'a', value: 1 },
            { key: 'b', value: 2 },
            { key: 'c', value: 3 },
        ]);
    });

    test('порядок сортировки с несуществующими свойствами', () => {
        const obj = { a: 1, b: 2 };
        const order = ['x', 'y'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'a', value: 1 },
            { key: 'b', value: 2 },
        ]);
    });

    test('порядок сортировки с несколькими значениями', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80 };
        const order = ['level', 'name'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'level', value: 2 },
            { key: 'name', value: 'мечник' },
            { key: 'attack', value: 80 },
            { key: 'health', value: 10 },
        ]);
    });

    test('обработка объекта с различными значениями', () => {
        const obj = { name: 'мечник', attack: 50, defence: 30, magic: 20 };
        const order = ['magic', 'attack'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'magic', value: 20 },
            { key: 'attack', value: 50 },
            { key: 'defence', value: 30 },
            { key: 'name', value: 'мечник' },
        ]);
    });

    test('свойства отсортированы в алфавитном порядке', () => {
        const obj = { b: 2, a: 1, c: 3 };
        const order = ['b'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'b', value: 2 },
            { key: 'a', value: 1 },
            { key: 'c', value: 3 },
        ]);
    });

    test('свойства с булевыми значениями', () => {
        const obj = { name: 'мечник', isActive: true, level: 5 };
        const order = ['isActive'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'isActive', value: true },
            { key: 'level', value: 5 },
            { key: 'name', value: 'мечник' },
        ]);
    });

    test('обработка объектов с массивами в качестве значений', () => {
        const obj = { name: 'мечник', skills: ['sword fighting', 'archery'], level: 5 };
        const order = ['name', 'level'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 5 },
            { key: 'skills', value: ['sword fighting', 'archery'] },
        ]);
    });

    test('обработка объектов с отсутствующими свойствами в order', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const order = ['a', 'd'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'a', value: 1 },
            { key: 'b', value: 2 },
            { key: 'c', value: 3 },
        ]);
    });

    test('сравнение с разными типами значений', () => {
        const obj = { name: 'лучник', health: null, level: 3 };
        const order = ['level', 'name'];
        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: 'level', value: 3 },
            { key: 'name', value: 'лучник' },
            { key: 'health', value: null },
        ]);
    });

});