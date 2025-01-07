import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AusStateSelector, type State } from '../src';

describe('Mouse Hover', () => {
    function hoverSetup(id: string): State {
        let s: State = null!;
        const onHover = jest.fn((state: State) => {
            s = state;
        });

        const dom = render(
            <AusStateSelector onHover={onHover} />
        );

        const field = dom.container.querySelector(`#${id}`) as HTMLElement | undefined;
        if(field)
            fireEvent.mouseOver(field);

        expect(onHover).toHaveBeenCalledTimes(1);
        return s;
    }

    test('WA', () => {
        const state = hoverSetup('g-wa');
        expect(state).toBe('WA');
    });

    test('NT', () => {
        const state = hoverSetup('g-nt');
        expect(state).toBe('NT');
    });

    test('SA', () => {
        const state = hoverSetup('g-sa');
        expect(state).toBe('SA');
    });

    test('QLD', () => {
        const state = hoverSetup('g-qld');
        expect(state).toBe('QLD');
    });

    test('NSW', () => {
        const state = hoverSetup('g-nsw');
        expect(state).toBe('NSW');
    });

    test('ACT', () => {
        const state = hoverSetup('g-act');
        expect(state).toBe('ACT');
    });

    test('VIC', () => {
        const state = hoverSetup('g-vic');
        expect(state).toBe('VIC');
    });

    test('TAS', () => {
        const state = hoverSetup('g-tas');
        expect(state).toBe('TAS');
    });
});

describe('Mouse Click', () => {
    function clickSetup(id: string): State {
        let s: State = null!;
        const onClick = jest.fn((state: State) => {
            s = state;
        });

        const dom = render(
            <AusStateSelector onClick={onClick} />
        );

        const field = dom.container.querySelector(`#${id}`) as HTMLElement | undefined;
        if(field)
            fireEvent.click(field);

        expect(onClick).toHaveBeenCalledTimes(1);
        return s;
    }

    test('WA', () => {
        const state = clickSetup('g-wa');
        expect(state).toBe('WA');
    });

    test('NT', () => {
        const state = clickSetup('g-nt');
        expect(state).toBe('NT');
    });

    test('SA', () => {
        const state = clickSetup('g-sa');
        expect(state).toBe('SA');
    });

    test('QLD', () => {
        const state = clickSetup('g-qld');
        expect(state).toBe('QLD');
    });

    test('NSW', () => {
        const state = clickSetup('g-nsw');
        expect(state).toBe('NSW');
    });

    test('ACT', () => {
        const state = clickSetup('g-act');
        expect(state).toBe('ACT');
    });

    test('VIC', () => {
        const state = clickSetup('g-vic');
        expect(state).toBe('VIC');
    });

    test('TAS', () => {
        const state = clickSetup('g-tas');
        expect(state).toBe('TAS');
    });
});