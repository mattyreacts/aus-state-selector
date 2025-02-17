import * as React from 'react';
import { css } from '@emotion/css';

export type State = 'WA' | 'NT' | 'SA' | 'QLD' | 'NSW' | 'ACT' | 'VIC' | 'TAS';

interface AusStateSelectorProps {
    /**
     * A callback for when a state is clicked
     * @param state The state that was clicked
     * @returns 
     */
    onClick?: (state: State) => void | Promise<void>,
    /**
     * A callback for when the user is hovering over a state
     * @param state The state that is being hovered over
     * @returns 
     */
    onHover?: (state: State) => void | Promise<void>,
    /**
     * The default colour for each state 
     * @default #bbdefb Blue100 */
    defaultColour?: string,
    /**
     * The colour to use when hovering over a state 
     * @default #1976d2 Blue700 */
    defaultHoverColour?: string,
    /**
     * If true then states will be hightlighted in their hover colour and the hover callback triggered
     * @default true
     */
    hover?: boolean,
    /**
     * The width of the borders on the map
     * @default 5.9
     */
    borderWidth?: number,
    /**
     * The colour of the borders on the map
     * @default #ffffff
     */
    borderColour?: string,
    /**
     * Colour for Western Australia, defaultColour used if not provided
     */
    waColour?: string
    /**
     * Hover colour for Western Australia, defaultHoverColour used if not provided
     */
    waHoverColour?: string,
    /**
     * Colour for Northern Territory, defaultColour used if not provided
     */
    ntColour?: string,
    /**
     * Hover colour for Northern Territory, defaultHoverColour used if not provided
     */
    ntHoverColour?: string
    /**
     * Colour for South Australia, defaultColour used if not provided
     */
    saColour?: string,
    /**
     * Hover colour for South Australia, defaultHoverColour used if not provided
     */
    saHoverColour?: string,
    /**
     * Colour for Queensland, defaultColour used if not provided
     */
    qldColour?: string,
    /**
     * Hover colour for Queensland, defaultHoverColour used if not provided
     */
    qldHoverColour?: string,
    /**
     * Colour for New South Wales, defaultColour used if not provided
     */
    nswColour?: string,
    /**
     * Hover colour for New South Wales, defaultHoverColour used if not provided
     */
    nswHoverColour?: string,
    /**
     * Colour for Australian Capital Territory, defaultColour used if not provided
     */
    actColour?: string,
    /**
     * Hover colour for Australian Capital Territory, defaultHoverColour used if not provided
     */
    actHoverColour?: string,
    /**
     * Colour for Victoria, defaultColour used if not provided
     */
    vicColour?: string,
    /**
     * Hover colour for Victoria, defaultHoverColour used if not provided
     */
    vicHoverColour?: string,
    /**
     * Colour for Tasmania, defaultColour used if not provided
     */
    tasColour?: string,
    /**
     * Hover colour for Tasmania, defaultHoverColour used if not provided
     */
    tasHoverColour?: string,
    /**
     * Text to display in Western Australia on the map
     */
    waText?: string,
    /**
     * Colour for the text in Western Australia, borderColour used if not provided
     */
    waTextColour?: string,
    /**
     * Text to display in Northern Territory on the map
     */
    ntText?: string,
    /**
     * Colour for the text in Northern Territory, borderColour used if not provided
     */
    ntTextColour?: string,
    /**
     * Text to display in South Australia on the map
     */
    saText?: string,
    /**
     * Colour for the text in South Australia, borderColour used if not provided
     */
    saTextColour?: string,
    /**
     * Text to display in Queensland on the map
     */
    qldText?: string,
    /**
     * Colour for the text in Queensland, borderColour used if not provided
     */
    qldTextColour?: string,
    /**
     * Text to display in New South Wales on the map
     */
    nswText?: string,
    /**
     * Colour for the text in New South Wales, borderColour used if not provided
     */
    nswTextColour?: string,
    /**
     * Text to display in Australian Capital Territory on the map
     */
    actText?: string,
    /**
     * Colour for the text in Australian Capital Territory, borderColour used if not provided
     */
    actTextColour?: string,
    /**
     * Text to display in Victoria on the map
     */
    vicText?: string,
    /**
     * Colour for the text in Victoria, borderColour used if not provided
     */
    vicTextColour?: string,
    /**
     * Text to display in Tasmania on the map
     */
    tasText?: string,
    /**
     * Colour for the text in Tasmania, borderColour used if not provided
     */
    tasTextColour?: string
}

export const AusStateSelector = React.memo(function({
    onClick, 
    onHover, 
    defaultColour = '#bbdefb', 
    defaultHoverColour = '#1976d2',
    hover = true,
    borderWidth = 5.9,
    borderColour = '#ffffff',
    waColour,
    waHoverColour,
    ntColour,
    ntHoverColour,
    saColour,
    saHoverColour,
    qldColour,
    qldHoverColour,
    nswColour,
    nswHoverColour,
    actColour,
    actHoverColour,
    vicColour,
    vicHoverColour,
    tasColour,
    tasHoverColour,
    waText,
    waTextColour,
    ntText,
    ntTextColour,
    saText,
    saTextColour,
    qldText,
    qldTextColour,
    nswText,
    nswTextColour,
    actText,
    actTextColour,
    vicText,
    vicTextColour,
    tasText,
    tasTextColour
}: AusStateSelectorProps): React.JSX.Element {
    const onWAClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('WA');
    }, [onClick]);
    const onNTClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('NT');
    }, [onClick]);
    const onSAClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('SA');
    }, [onClick]);
    const onQLDClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('QLD');
    }, [onClick]);
    const onNSWClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('NSW');
    }, [onClick]);
    const onACTClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('ACT');
    }, [onClick]);
    const onVICClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('VIC');
    }, [onClick]);
    const onTASClick = React.useCallback(() => {
        if(typeof onClick === 'function')
            onClick('TAS');
    }, [onClick]);

    const onWAHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('WA');
    }, [onHover]);
    const onNTHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('NT');
    }, [onHover]);
    const onSAHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('SA');
    }, [onHover]);
    const onQLDHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('QLD');
    }, [onHover]);
    const onNSWHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('NSW');
    }, [onHover]);
    const onACTHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('ACT');
    }, [onHover]);
    const onVICHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('VIC');
    }, [onHover]);
    const onTASHover = React.useCallback(() => {
        if(typeof onHover === 'function')
            onHover('TAS');
    }, [onHover]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 2193.0847 2008.031"
            version="1.2"
            height="100%"
            id="svg261"
        >
            <defs id="defs54">
                <rect x="136.24274" y="284.3797" width="69.555091" height="14.75199" id="rect601" />
                <mask x="0" width="8" stroke="none" y="0" patternUnits="userSpaceOnUse" id="patternmask6" height="8" fill="#ffffff">
                    <rect x="1" width="1" y="0" height="1" id="rect2" />
                    <rect x="3" width="1" y="0" height="1" id="rect4" />
                    <rect x="5" width="1" y="0" height="1" id="rect6" />
                    <rect x="7" width="1" y="0" height="1" id="rect8" />
                    <rect x="2" width="1" y="1" height="1" id="rect10" />
                    <rect x="6" width="1" y="1" height="1" id="rect12" />
                    <rect x="1" width="1" y="2" height="1" id="rect14" />
                    <rect x="3" width="1" y="2" height="1" id="rect16" />
                    <rect x="5" width="1" y="2" height="1" id="rect18" />
                    <rect x="7" width="1" y="2" height="1" id="rect20" />
                    <rect x="0" width="1" y="3" height="1" id="rect22" />
                    <rect x="4" width="1" y="3" height="1" id="rect24" />
                    <rect x="1" width="1" y="4" height="1" id="rect26" />
                    <rect x="3" width="1" y="4" height="1" id="rect28" />
                    <rect x="5" width="1" y="4" height="1" id="rect30" />
                    <rect x="7" width="1" y="4" height="1" id="rect32" />
                    <rect x="2" width="1" y="5" height="1" id="rect34" />
                    <rect x="6" width="1" y="5" height="1" id="rect36" />
                    <rect x="1" width="1" y="6" height="1" id="rect38" />
                    <rect x="3" width="1" y="6" height="1" id="rect40" />
                    <rect x="5" width="1" y="6" height="1" id="rect42" />
                    <rect x="7" width="1" y="6" height="1" id="rect44" />
                    <rect x="0" width="1" y="7" height="1" id="rect46" />
                    <rect x="4" width="1" y="7" height="1" id="rect48" />
                </mask>
                <pattern x="0" width="8" y="0" patternUnits="userSpaceOnUse" id="fillpattern6_ffd700" height="8">
                    <rect mask="url(#patternmask6);" x="0" width="8" stroke="none" y="0" height="8" fill="#ffd700" id="rect51" />
                </pattern>
                <pattern x="0" width="8" y="0" patternUnits="userSpaceOnUse" id="fillpattern6_ffd700-3" height="8">
                    <rect mask="url(#patternmask6-7)" x="0" width="8" stroke="none" y="0" height="8" fill="#ffd700" id="rect51-5" />
                </pattern>
                <mask x="0" width="8" stroke="none" y="0" patternUnits="userSpaceOnUse" id="patternmask6-7" height="8" fill="#ffffff">
                    <rect x="1" width="1" y="0" height="1" id="rect2-0" />
                    <rect x="3" width="1" y="0" height="1" id="rect4-8" />
                    <rect x="5" width="1" y="0" height="1" id="rect6-1" />
                    <rect x="7" width="1" y="0" height="1" id="rect8-9" />
                    <rect x="2" width="1" y="1" height="1" id="rect10-9" />
                    <rect x="6" width="1" y="1" height="1" id="rect12-7" />
                    <rect x="1" width="1" y="2" height="1" id="rect14-8" />
                    <rect x="3" width="1" y="2" height="1" id="rect16-2" />
                    <rect x="5" width="1" y="2" height="1" id="rect18-5" />
                    <rect x="7" width="1" y="2" height="1" id="rect20-3" />
                    <rect x="0" width="1" y="3" height="1" id="rect22-4" />
                    <rect x="4" width="1" y="3" height="1" id="rect24-9" />
                    <rect x="1" width="1" y="4" height="1" id="rect26-0" />
                    <rect x="3" width="1" y="4" height="1" id="rect28-2" />
                    <rect x="5" width="1" y="4" height="1" id="rect30-0" />
                    <rect x="7" width="1" y="4" height="1" id="rect32-1" />
                    <rect x="2" width="1" y="5" height="1" id="rect34-9" />
                    <rect x="6" width="1" y="5" height="1" id="rect36-6" />
                    <rect x="1" width="1" y="6" height="1" id="rect38-2" />
                    <rect x="3" width="1" y="6" height="1" id="rect40-1" />
                    <rect x="5" width="1" y="6" height="1" id="rect42-2" />
                    <rect x="7" width="1" y="6" height="1" id="rect44-0" />
                    <rect x="0" width="1" y="7" height="1" id="rect46-7" />
                    <rect x="4" width="1" y="7" height="1" id="rect48-3" />
                </mask>
                <pattern x="0" width="8" y="0" patternUnits="userSpaceOnUse" id="pattern1208" height="8">
                    <rect mask="url(#patternmask6-7)" x="0" width="8" stroke="none" y="0" height="8" fill="#ffd700" id="rect1206" />
                </pattern>
                <mask x="0" width="8" stroke="none" y="0" patternUnits="userSpaceOnUse" id="mask1258" height="8" fill="#ffffff">
                    <rect x="1" width="1" y="0" height="1" id="rect1210" />
                    <rect x="3" width="1" y="0" height="1" id="rect1212" />
                    <rect x="5" width="1" y="0" height="1" id="rect1214" />
                    <rect x="7" width="1" y="0" height="1" id="rect1216" />
                    <rect x="2" width="1" y="1" height="1" id="rect1218" />
                    <rect x="6" width="1" y="1" height="1" id="rect1220" />
                    <rect x="1" width="1" y="2" height="1" id="rect1222" />
                    <rect x="3" width="1" y="2" height="1" id="rect1224" />
                    <rect x="5" width="1" y="2" height="1" id="rect1226" />
                    <rect x="7" width="1" y="2" height="1" id="rect1228" />
                    <rect x="0" width="1" y="3" height="1" id="rect1230" />
                    <rect x="4" width="1" y="3" height="1" id="rect1232" />
                    <rect x="1" width="1" y="4" height="1" id="rect1234" />
                    <rect x="3" width="1" y="4" height="1" id="rect1236" />
                    <rect x="5" width="1" y="4" height="1" id="rect1238" />
                    <rect x="7" width="1" y="4" height="1" id="rect1240" />
                    <rect x="2" width="1" y="5" height="1" id="rect1242" />
                    <rect x="6" width="1" y="5" height="1" id="rect1244" />
                    <rect x="1" width="1" y="6" height="1" id="rect1246" />
                    <rect x="3" width="1" y="6" height="1" id="rect1248" />
                    <rect x="5" width="1" y="6" height="1" id="rect1250" />
                    <rect x="7" width="1" y="6" height="1" id="rect1252" />
                    <rect x="0" width="1" y="7" height="1" id="rect1254" />
                    <rect x="4" width="1" y="7" height="1" id="rect1256" />
                </mask>
            </defs>
            <g
                onClick={onNSWClick}
                onMouseOver={onNSWHover}
                className={css({ fontStyle: 'normal', fontWeight:400, fontSize: '37.5px', fontFamily: 'Sans Serif', fill: nswColour || defaultColour, fillOpacity: 1, fillRule: 'evenodd', stroke: borderColour, strokeWidth:borderWidth, strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeOpacity: 1,
                    '&:hover': {fill: hover ? nswHoverColour || defaultHoverColour : nswColour || defaultColour}
                })}
                id="g-nsw"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path100"
                d="m 2633.12,1368.54 3.93,0.41 1.79,5.32 -1.8,14.23 1.5,5.77 3.05,1.29 -2.25,8.06 0.69,3.86 -7.62,9.99 -1.64,4.68 1.26,2.24 -5.82,8.62 -0.12,2.92 1.73,1.32 -0.41,6.76 -5.05,24.75 -3.98,7.08 0.52,6.64 -3.51,5.71 0.67,3.08 -6.46,10.95 -2.18,13.36 1.32,7.39 3.28,1.02 0.77,2.48 -2.68,4.48 0.84,4.58 -4.94,8.56 0.77,5.04 -3.24,5.65 1.21,3.69 -4.86,5.63 0.22,3.96 -5.96,9.83 0.97,1.97 -6.36,4.49 -4.72,6.6 -2.03,6.69 3.45,3.74 -2.48,4.58 1.47,2.34 -1.86,4.3 1.24,2.04 -9.23,3.8 -7.88,6.93 -2.19,7.82 -11.64,2.99 -7.93,4.25 0.19,1.75 -7.5,8.58 -1.21,6.67 -3.77,3.97 0.65,2.22 -3.76,3.01 -3.34,6.11 0.01,3.11 -5.05,2.91 -5.16,27.09 -1.54,2.25 -3.14,0.32 -0.48,4.14 -8.57,6.88 -3.33,5.29 -1.34,7.31 1.16,2.86 -2.82,3.61 1.9,2.49 -2.56,1.05 -1.61,9.94 -2.26,0.52 -1.72,3.78 1.85,7.79 3.42,1.56 -0.84,3.65 -4.67,3.67 -4.41,-1.09 -3.54,1.56 0.19,2.75 -6.41,6.33 0.9,4.15 -5.24,5.83 0.71,4.13 -5.63,6.76 0.39,2.31 -3.99,5.24 0.24,3.67 -2.53,-0.16 -1.74,2.86 0.55,7.91 -2.11,7.68 0.81,9.78 -3.72,5.29 -0.04,9.67 -6.71,15.48 -0.13,5.46 -1.75,0.73 2.16,2.08 -0.07,6.32 -3.79,1.76 6.96,3.5 0.31,4.26 2.16,3.05 -3.42,-1.35 -2.25,2.28 1.35,1.93 -1.05,3.93 1.41,7.9 -93.66,-42.78 -4.52,0.28 5.71,-12.18 -4.43,-1.89 -0.46,-6.13 -4.57,-4.47 1.12,-4.21 -1.26,-0.56 0.14,-10.17 -2.47,-1.17 0.47,-4.49 -3.98,-0.22 -0.61,-2.83 -10.72,-3.98 -5.62,3.02 -2.75,-0.87 1.83,1.2 -1.69,1.16 -3.03,-3.62 h -4.71 l -4.45,7.02 -9.23,-1.38 -1.1,-2.59 -3.7,6.78 -5.06,-1.78 -0.69,2.26 -3.72,-2.53 -6.47,-0.74 -0.96,-2.24 -2.41,1 -3.85,-4.05 -3.31,1.18 -2.47,-2.05 -0.15,1.95 -4.1,-1.5 -2.79,5.09 -1.56,-1.46 -2.94,0.9 -0.01,-1.82 -5.09,1.85 -2.69,-2.36 -8.56,0.79 -3.64,-3.78 -4.81,2.34 -7.22,-3.93 -7.28,-7.4 -9.47,3.88 -11.97,-2.76 -7.12,1.88 -3.61,8.16 3.07,4.99 -6.23,-0.79 -2.92,3.86 -4.25,-0.34 -0.42,-1.92 -1.85,0.56 0.27,-2.02 -1.79,0.83 -1.17,-1.63 -0.79,1.74 -0.11,-2.72 -5.24,-2.23 0.23,-1.47 -5.9,-3.93 0.18,-2.69 -1.58,-0.39 -1.7,-5.09 -4.45,-0.94 -8.38,-9.58 -6.05,-2.15 -1.04,-3.25 -5.85,-1.2 -5.67,-5.48 -6.86,-0.01 -3.07,-3 1.51,-3.31 -1.05,-4.44 -5.22,0.74 -1.16,-1.8 -2.88,0.2 -3.82,-9.24 1.36,-14.53 -3.74,0.03 -1.3,-1.15 1.16,-1.19 -2.61,0.36 -0.3,-1.73 -5.87,-1.66 0.28,-1.22 -3.84,1.29 -2.63,-2.37 -0.87,1.93 -2.57,-2.81 -1.95,1.9 -0.97,-3.1 -4.28,-2.26 1.22,-1.68 -0.98,-0.86 -0.41,1.94 -1.86,-0.14 0.57,1.38 -3.11,-0.04 0.56,4.52 -1.67,0.3 1.08,2.58 -4.27,0.25 1.11,3.05 -6.05,-1.23 -1.3,-1.2 0.86,-4.47 -2.12,0.53 0.43,-2.14 -1.65,-0.17 0.82,-4.1 -0.86,1.18 -4.41,-3.18 1.7,-0.48 -1.32,-0.41 1.04,-1.29 -1.85,0.31 1.3,-1.22 -1.63,-0.51 -0.12,-4.31 2.4,-3.47 -8.45,-1.82 -0.42,-6.93 -3.25,-0.39 -0.91,-2.01 -3.47,1.46 -0.37,-2.48 -2.43,-0.31 0.44,-1.55 -5.46,2.26 -1.6,-1.6 -1.42,1.55 -10.47,-2.13 -3.09,3.24 -1.82,-0.25 1.01,2.31 -4.9,1.49 -0.69,-3.59 -2.75,0.74 -4.5,-3.38 -1.79,1.65 -4.37,-4.56 -2.99,1.8 -1.67,-2.2 -3.1,-0.23 -0.26,1.53 -4.59,-2.2 -0.14,-291.73 418.41,-0.01 3.91,-2.45 2.53,-6.5 11.37,-7.49 4.74,-0.8 3.43,-5.74 2.65,-1.17 4.47,-0.08 6.05,3.45 0.95,-1.39 13.45,0.24 2.06,-1.86 7.16,-1.73 3.15,1.36 4.07,-2.1 8.19,7.27 9.83,0.65 6.3,-2.45 13.58,6.1 1.82,5.9 3.02,-0.47 9.05,5.84 0.25,9.22 1.85,3.69 4.15,0.7 5.71,-6.1 -0.22,-2.9 2.49,-3.81 8.46,-4.62 1.44,-0.01 2.31,5.02 h 2.86 l 0.9,-2.96 3.51,1.22 4.92,-1.23 1.5,-2.44 -1.22,-0.8 1.46,-6.77 1.75,-1.33 -3.46,-2.46 -2.87,-8.3 3.22,0.37 7.55,-5.23 2.98,0.91 4.86,-4.88 4.02,0.3 4.07,-6.19 3.72,0.19 -0.44,2.47 2.8,1.86 1.86,-3.94 1.25,2.35 5.93,3 6.77,-3.08 12.03,2.72 3.64,-6.24 9.63,0.05 6.11,-5.17 m -229.06,403.76 -16.36,10.9 -2.44,11.13 1.5,12.39 3.49,3.46 1.53,-2.52 1.2,7.99 7.18,4.04 2.63,-4.56 0.71,-8.82 -1.66,-6.58 3.39,0.38 0.2,-10.55 3.22,-4.17 7.6,0.36 2.48,-1.92 -6.69,-2.7 -1.76,-3.06 -1.77,0.44 -1.02,-4.06 -3.43,-2.15" />
                {Boolean(nswText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '80px', whiteSpace: 'pre', display: 'inline', fill: nswTextColour || borderColour, stroke: nswTextColour || borderColour, strokeWidth: 1.00157})}
                    x="2280"
                    y="1640">
                        <tspan
                            x="2280"
                            y="1640"
                        >
                            {nswText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onACTClick}
                onMouseOver={onACTHover}
                className={css({
                    fontStyle: 'normal', fontWeight:400, fontSize: '37.5px', fontFamily: 'Sans Serif', fill: actColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour, strokeWidth: borderWidth, strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeOpacity: 1,
                    '&:hover': {fill: hover ? actHoverColour || defaultHoverColour : actColour || defaultColour}
                })}
                id="g-act"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                
                id="path92"
                d="m 2386.16,1801.97 -0.9,-7.64 2.38,-11.06 16.02,-10.81 3.83,1.99 1.02,4.06 1.77,-0.44 1.76,3.06 6.46,1.75 -2.03,2.83 -7.84,-0.31 -3.6,4.93 0.2,9.78 -3.39,-0.38 1.66,6.58 -0.47,7.05 -2.72,6.31 -7.33,-4.02 -1,-7.67 -1.73,2.2 -3.2,-3.1 -0.89,-5.11" />
                {Boolean(actText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '50px', whiteSpace: 'pre', display: 'inline', fill: actTextColour || borderColour, stroke: actTextColour || borderColour, strokeWidth: 1.00157})}
                    x="2380"
                    y="1640">
                        <tspan
                            x="2440"
                            y="1760"
                        >
                            {actText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onNTClick}
                onMouseOver={onNTHover}
                className={css({fontStyle: 'normal', fontWeight:400, fontSize: '37.5px', fontFamily: 'Sans Serif', fill: ntColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour, strokeWidth: borderWidth, strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeOpacity: 1,
                    '&:hover': {fill: hover ? ntHoverColour || defaultHoverColour : ntColour || defaultColour}
                })}
                id="g-nt"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path104"
                d="m 1746.82,686.454 1.37,-3.539 4.23,1.303 -2.2,4.343 -3.4,-2.107" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path106"
                d="m 1721.48,564.484 -0.42,-4.062 -1.86,-0.951 3.04,1.403 2.91,3.727 -2.12,1.625 -1.23,-0.797 1.35,2.101 -1.39,2.891 -0.28,-5.937" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path108"
                d="m 1578.38,465.467 2.8,0.277 0.7,1.658 -4.85,0.569 0.74,1.396 -1.69,1.153 -1.09,-3.076 3.39,-1.977" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path110"
                d="m 1758.82,681.563 -0.25,-5.609 2.06,-1.967 1.27,4.522 -3.08,3.054" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path112"
                d="m 1657.76,493.177 -1.16,1.566 -1.72,-0.684 -1.13,-4.399 3.31,1.335 0.7,2.182" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path114"
                d="m 1346.4,640.52 5.42,2.076 0.22,3.786 5.31,9.248 2.9,-6.94 -1.64,-1.29 -0.06,-3.245 1.86,-4.442 2.61,-0.262 8.54,4.243 2.46,4.788 5,-1.496 1.22,-8.861 6.49,0.366 -1.02,-1.564 2.99,-2.35 -0.68,-1.756 -0.95,2.551 -2.29,0.582 -3.44,-2.05 0.91,-2.001 -3.19,-1.653 9.77,-8.228 -7.3,2.54 -7.53,-1.505 -6.54,-6.583 -2.37,-0.279 0.54,-4.56 2.76,-2.505 -0.54,-2.941 4.58,-5.757 3.32,1.928 -0.04,-3.655 2.75,-1.702 -1.07,-1.634 0.39,-1.161 2.25,1.925 5.53,-3.838 -1.61,-5.126 4.17,-4.757 -0.24,-6.525 2.35,-5.625 -0.93,-3.161 3.29,0.11 0.93,-3.373 0.65,3.932 5.18,1.011 7,-4.054 6.5,-6.615 -2.82,-5.384 -5.01,-3.576 0.63,-10.117 2.5,-3.368 3.75,2.023 4.79,-3.093 0.72,-11.667 2.03,0.826 3.7,-2.48 2.77,1.517 -0.65,2.664 0.94,1.708 -0.41,-2.117 2.41,-0.438 0.67,2.217 3.13,-0.848 0.08,0.93 -0.31,0.437 -0.04,1.144 1.01,-1.667 -1.16,-2.043 3.56,2.457 2.6,-2.173 -2.55,0.492 -0.58,-0.335 1.24,-0.949 -0.04,-0.273 -1.47,0.922 -3.02,-2.077 -1.61,0.834 -2.12,-2.661 1.96,-0.601 0.19,1.989 1.09,-2.979 1.85,1.863 -2.02,-3.238 -1.87,0.621 1.96,-4.703 -1.3,-2.059 2.22,-0.789 -2.33,-2.273 2.12,-1.248 7.67,2.97 -2,4.713 2.72,-2.73 -0.23,3.758 -2.37,1.91 v 0.484 l 0.14,0.329 2.45,-2.005 -0.59,2.258 0.51,-0.111 0.15,1.054 0.63,0.129 -0.2,-3.906 1.16,-0.445 -0.27,1.253 1.25,1.307 -0.67,-1.59 1.33,-0.151 2.83,6.747 -0.68,-4.048 3.31,1.68 1.14,-0.428 -4.33,-2.918 -0.35,-1.187 0.81,0.43 0.35,-0.042 0.08,-0.184 -2.22,-2.635 2.56,1.811 0.77,-1.67 1.64,2.434 -0.37,-4.461 -2.6,0.881 1.03,-1.59 -3.45,-1.032 -0.02,1.562 -1.57,-0.307 -0.24,-2.904 1.28,0.297 2.9,-4.384 6.45,2.206 1.91,-1.266 -1.32,-0.073 1.63,-0.757 -1.71,-1.412 -0.81,0.943 0.92,-4.866 -1.88,-2.409 1.89,-2.1 7.28,1.419 2.78,2.861 -1.51,0.559 0.67,1.731 1.37,-0.19 -0.53,0.594 0.02,0.234 0.14,0.139 0.47,-0.991 -1.14,-1.387 2.03,-1.068 -1.16,-0.676 3.59,-8.727 1.35,7.993 5.46,4.346 13.46,0.494 10.33,-3.721 3.16,3.095 6.85,1.623 8.86,-7.092 2.12,2.886 3.92,-1.345 1.91,1.992 2.77,-4.767 6,-3.217 3.84,-0.019 1.37,-10.363 -0.99,-3.59 -2.93,-1.907 3.58,-3.366 0.47,-3.903 -5.78,-2.12 0.27,-2.845 -3.09,-3.832 -7.4,-2.182 -6.03,0.737 -6.57,4.483 -4.2,-3.058 1.34,-2.645 -6.15,-1.706 2.22,-1.231 -0.98,-1.806 -2.58,0.794 1.4,-1.991 -4.4,-1.432 -5.07,1.269 2.27,-1.068 -0.64,-1.495 3.2,0.445 -2.13,-3.439 3.4,1.228 -0.2,-2.21 0.36,-0.614 2.5,4.144 1.64,-0.361 1.33,-1.823 -1.27,-2.217 0.4,-0.309 0.65,0.49 0.59,-0.23 -1.09,-2.51 1.99,0.085 1.86,3.681 1.51,-1.096 0.51,2.79 1.53,-1.078 -0.72,6.236 1.2,1.07 0.74,-2.809 1.76,6.573 0.3,-1.247 1.69,0.876 -0.94,-3.304 1.68,0.989 0.75,-1.574 -2.05,-2.047 -1.31,1.177 1.44,-5.247 -3.38,-5.386 2.69,0.419 5.08,7.742 -0.97,-5.358 3.01,-0.518 0.58,-2.637 2.58,4.878 -0.46,4.626 4.07,-4.092 2.93,2.866 -0.26,3.05 6.32,4.25 2.47,5.573 3.36,0.184 6.06,-6.682 2.53,1.752 0.67,-2.18 -2.32,-2.361 2.79,-0.441 8.35,10.013 1.51,5.935 3.92,4.637 3.76,0.593 4.82,-2.022 0.58,1.281 -2.44,1.116 0.68,1.634 2.56,0.332 1.75,-2.332 -0.22,1.891 3.17,1.81 3.93,-2.205 -0.19,2.788 3.78,-0.202 0.47,1.78 4.26,-2.579 -1.15,-1.066 3.59,0.457 2.91,-3.066 6.4,0.941 1.3,1.478 -4.93,2.284 -1.23,1.303 0.34,1.425 4.11,3.317 6.47,-3.848 2.5,2.289 -0.65,1.914 0.46,0.397 2.75,-2.359 3.53,6.961 -1.36,4.562 4.48,-4.272 -0.41,-2.618 2.15,-0.05 3.53,3.538 7.21,1.413 6,-1.497 4.35,-4.565 3.14,-0.714 2.66,5.215 2.42,0.733 0.66,3.678 6.04,1.45 4.43,5.578 4.66,-1.425 6.38,4.134 1.16,-0.925 -1.34,0.031 0.36,-2.325 3.84,-0.404 2.68,-3.539 7.44,-1.543 6.24,-5.882 13.47,-4.615 -4.11,1.69 -9.35,9.125 -0.08,2.457 3.65,4.427 -2.93,1.554 2.29,-0.126 8.35,-8.343 1.39,1.538 0.91,-1.864 2.47,0.116 4.53,-4.721 -6.16,8.439 1.15,3.019 4.24,-1.571 -0.58,-0.172 -0.32,-0.683 2.62,0.804 -4.78,6.823 2.26,1.058 -1.39,3.462 3.29,0.901 0.69,-2.616 1.11,1.454 3.41,-1.175 0.41,1.869 3.85,-0.254 3.84,-3.535 3.09,-7.92 -1.39,-2.865 -5.72,0.929 0.2,-1.618 -3.15,0.498 -0.25,-1.539 2.62,-0.563 2.62,-4.631 3.8,-0.309 3.97,-5.325 7.7,-2.181 0.08,-2.166 0.92,2.061 -7.07,4.415 2.26,1.334 -1.27,1.424 1.29,0.283 0.72,-3.092 1.48,-0.342 6.18,14.813 4.92,0.046 0.52,-3.057 -1.52,0.829 -2.2,-2.303 5.31,-1.444 1.88,2.78 4.57,1.824 1.79,4.142 -3.15,2.24 -0.34,0.76 5.58,-1.867 -4.16,2.492 -7.25,9.811 -3.04,1.715 -0.53,5.38 -4.34,0.201 0.54,6.613 -3.78,-5.26 -1.28,0.95 0.92,2.574 -4.16,-1.843 0.78,3.691 3.88,1.732 -0.32,2.236 4.82,1.828 1.57,2.846 -2.03,0.695 -0.61,-2.644 -1.75,2.699 -1.35,-2.838 -1.42,1.43 -4.02,-0.727 5.86,4.281 -1.87,5.079 -1.64,-0.814 -1.01,1.453 -0.68,4.31 -1.48,-1.603 -5.69,5.704 -0.17,-3.969 3.15,-1.221 -1.68,-4.249 0.81,-4.073 -2,-1.928 -2.21,3.901 1.56,0.666 -0.29,2.099 -3.12,-0.263 -0.19,-1.774 -1.82,0.903 1.43,3.942 -4.38,1.575 1.04,2.057 -2.5,-3.906 0.58,-4.61 -2.42,2.021 -0.78,3.935 -1.63,0.095 -0.32,4.009 -1.84,-5.046 -1.74,0.411 -0.81,3.835 -0.81,-2.198 -1.56,0.797 -2.03,5.031 2.14,0.77 0.3,2.137 2.45,-0.82 -2.2,3.43 -1.94,-2.215 -1.82,0.801 0.51,6.462 -1.79,1.548 2.31,4.103 2.23,0.427 -2.22,1.919 4.04,1.667 4.07,-3.24 -0.41,-1.619 3.01,0.181 -3.66,5.714 -1.29,7.096 -4.17,5.023 -1.62,9.396 1.3,1.263 -9.73,5.011 -2.53,7.455 -2.67,-0.068 -4.33,7.29 -0.99,3.505 1.19,1.454 -4,1.231 -2.55,3.161 -1.81,-0.495 1.52,7.868 3.13,5.185 5.76,4.011 4.06,0.386 17.05,12.531 13.57,6.903 2.66,8.361 6.86,3.124 7.08,6.406 6.05,2.342 2.27,3.356 -0.39,3.987 3.43,-2.239 -0.57,1.437 3.27,-0.912 6.85,2.094 -2.13,-2.07 4.5,-1.611 3.07,3.189 10.39,4.458 2.13,3.686 6.01,3.388 16.85,4.715 6.96,10.217 7.31,6.537 -0.11,517.258 -473.05,0.1 0.03,-606.5" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path116"
                d="m 1465.64,444.909 2.41,1.624 -0.53,2.452 2.53,-1.302 1.45,2.552 1.07,-2.111 1.82,0.402 1.54,6.339 3.1,0.442 0.89,3.426 -4,2.064 0.26,5.835 -4.76,-0.895 -5.2,7.866 -10.44,5.106 -6.06,5.395 -24.77,-14.809 -0.08,-4.993 -3.26,-3.256 -2.51,-8.267 1.32,-2.197 -2.4,-2.833 0.48,-4.244 1.52,-0.255 5.83,6.285 2.17,-0.98 2.16,1.204 -1.92,5.228 3.2,-0.025 1.96,-2.73 0.05,3.422 3.05,4.722 2.84,-1.279 -3.82,-2.067 0.41,-2.187 7.31,-1.435 2.71,-2.583 7.17,3.064 0.49,-2.62 3.41,-0.299 0.36,-2.805 1.88,-0.487 3.2,4.982 -0.26,-5.743 3.42,-2.008" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path118"
                d="m 1756.48,585.914 2.1,-1.203 -0.48,-1.619 -1.87,1.77 2.23,-4.798 3.55,1.075 0.92,2.178 -3.51,5.66 -2.37,-0.463 -1.97,1.974 -0.65,3.285 2.35,1.756 -2.49,0.563 -0.42,2.158 -1.66,-0.907 -0.71,5.278 4.12,1.286 -0.45,-2.587 1.23,0.128 4.22,3.315 1.57,-3.783 1.07,0.303 1.75,1.139 -1.57,2.05 0.92,5.307 -7.2,-0.476 -3.12,-1.935 -5.55,2.034 -11.17,-5.325 -5.92,2.654 -0.01,-1.747 6.21,-4.788 -1.76,-15.577 4.54,0.524 1.91,-2.971 1.8,2.392 0.42,-1.671 3.36,-0.799 -3.17,-5.117 3.08,0.059 -1.01,0.931 0.79,0.775 2.32,-0.978 0.92,-2.661 1.83,-10e-4 -0.46,3.49 -2.01,1.334 0.81,1.709 2.02,-0.211 -0.61,3.723 4.1,0.767" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path120"
                d="m 1417.28,452.598 2.86,5.493 -1.46,3.19 4.61,3.599 0.24,4.826 9.07,4.666 -1.49,3.54 -5.74,0.487 -10.05,-3.149 -13.84,2.817 -1.5,-2.554 2.76,-0.656 0.07,-4.918 4.07,1.913 2.63,-3.038 1.26,2.301 1.54,-0.847 -3.35,-1.806 0.51,-3.023 -1.37,-1.467 1.47,-2.491 -2.8,-1.86 5.03,-5.768 -0.34,1.155 0.48,0.513 0.2,-2.733 4.51,-1.474 0.85,1.056 -0.01,0.4 -0.28,-0.674 -0.21,-0.155 -0.05,-0.239 -0.12,-0.083 -0.27,-0.048 -0.71,0.522 1.43,0.505" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path122"
                d="m 1535.13,433.698 1.22,7.627 -1.76,1.908 2.64,1.078 -1.5,0.981 0.88,4.232 -1.65,3.758 -6.21,-10.518 2.11,-0.99 0.17,-2.417 -2.72,-2.924 3.12,0.865 2.06,-1.288 0.42,-2.872 1.22,0.56" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path124"
                d="m 1694.12,485.821 3.27,-1.999 0.84,0.343 1.12,-0.352 0.46,0.354 1.78,-0.122 -1.25,0.052 8.74,-6.871 -1.79,-1.349 0.55,-1.435 2.9,1.308 -7.05,9.764 -12.21,5.604 0.85,-5.786 1.79,0.489" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path126"
                d="m 1688.96,495.214 -7.76,1.742 -2.43,3.257 -5.27,-2.829 4.19,-1.367 0.15,-2.043 3.17,-2.1 4.64,1.555 3.39,-2.875 2.8,2.517 -2.88,2.143" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path128"
                d="m 1763.84,682.942 1.01,-1.759 1.56,1.755 0.08,-4.757 2.18,2.739 1.76,-0.343 0.33,6.267 1.72,1.508 -1.64,3.864 -4.33,-2.894 -0.75,-4.267 -2.55,0.751 -0.61,-2.286 1.24,-0.578" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path130"
                d="m 1723.37,580.267 0.5,-3.808 1.66,-0.819 4.66,3.84 -2.51,0.706 1.54,2.17 -1.22,-0.226 -0.64,3.503 -1.91,0.342 -1.36,-4.699 -2.15,0.916 1.23,2.62 -3.29,-0.999 0.7,-4.945 2.79,1.399" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path132"
                d="m 1740.67,458.562 -1.4,-0.345 1.23,-3.007 4.47,-3.577 2.32,-6.329 4.03,-1.709 -0.52,-2.798 1.49,-0.522 -1.13,-0.929 1.94,-0.861 -1.3,-1.127 2.47,-1.952 -2.09,9.308 -4.99,4.787 -1.91,5.247 -4.61,3.814" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path134"
                d="m 1740.67,681.369 0.57,-5.359 5.18,-1.049 -1.09,6.501 -4.66,-0.093" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path136"
                d="m 1531.57,471.236 -0.85,-3.142 7.73,0.879 -1.52,3.768 -5.36,-1.505" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path138"
                d="m 1726.51,469.811 -3.79,1.315 0.52,-2.751 3.22,0.246 1.81,-3.87 2.62,1.656 -0.99,-1.292 2.34,0.491 1.3,-1.819 -0.02,2.308 -3.58,2.31 -1.7,-1.088 -0.01,2.027 -1.72,0.467" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path140"
                d="m 1378.05,626.416 4.61,-0.11 2.93,-1.382 -6.8,4.873 -1.9,-2.001 1.16,-1.38" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path142"
                d="m 1753.22,687.745 -0.23,-6.21 4.87,0.818 0.43,1.428 -2.55,-0.101 0.88,1.984 -3.4,2.081" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path144"
                d="m 1723.1,491.075 -2.55,-0.444 0.06,-0.551 0.98,0.513 1.22,-0.376 -1.47,-1.498 3.11,0.102 0.55,-1.639 0.77,2.107 5.06,-3.24 -1.91,3.181 -5.82,1.845" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path146"
                d="m 1352.51,646.525 0.7,-2.294 3.06,2.041 -0.46,5.262 -3.3,-5.009" />
                {Boolean(ntText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '80px', whiteSpace: 'pre', display: 'inline', fill: ntTextColour || borderColour, stroke: ntTextColour || borderColour, strokeWidth: 1.00157})}
                    x="1580"
                    y="920">
                        <tspan
                            x="1580"
                            y="920"
                        >
                            {ntText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onQLDClick}
                onMouseOver={onQLDHover}
                className={css({fontStyle:'normal',fontWeight:400,fontSize: '37.5px', fontFamily:'Sans Serif', fill: qldColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour, strokeWidth:borderWidth, strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeOpacity:1,
                    '&:hover': {fill: hover ? qldHoverColour || defaultHoverColour : qldColour || defaultColour}
                })}
                id="g-qld"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path150"
                d="m 2475.26,1040.94 1.36,-0.59 -1.59,-2.64 1.01,-0.82 3.75,4.85 -3.95,3.03 0.76,-2.58 -1.95,-0.13 0.61,-1.12" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path152"
                d="m 2042.21,344.104 -4.01,-0.322 -1.52,-0.885 4.76,-1.836 3.76,1.605 -2.99,1.438" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path154"
                d="m 2271.89,849.031 -1.97,0.191 0.22,-4.641 3.63,3.923 2.29,-0.622 0.47,1.257 -4.64,-0.108" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path156"
                d="m 2393.26,923.59 -1.43,1.938 1.01,-5.324 2.76,-0.626 -1.41,6.464 -0.07,-2.491 -0.84,2.251 -0.68,-0.44 0.66,-1.772" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path158"
                d="m 1819.26,861.974 0.27,-132.312 9.18,7.606 7.77,3.453 8.2,1.781 7.85,-0.842 13.4,6.278 8.14,1.487 2.53,4.627 3.74,1.652 -0.15,7.243 4.34,8.388 3.59,2.426 8.99,1.941 8.93,7.391 9.2,1.75 0.64,1.875 5.46,1.377 3.63,4.549 11.03,-0.334 14.87,-3.847 17.29,-9.291 3.1,-4.47 3.93,-15.577 -0.22,-5.093 5.62,-6.875 0.92,-3.604 6.42,-5.972 4.84,-10.512 -0.55,-4.725 7.71,-17.88 -3.12,-8.459 1.89,-2.444 1.33,-11.442 7.08,-19.313 0.33,-4.874 2.98,-2.335 1.83,-7.384 -4.04,-8.877 -3.4,-19.757 4,-13.045 -0.09,-6.844 -6.21,-8.557 -0.77,-4.743 2.32,-13.183 2.07,-5.831 0.4,-0.504 -1.41,3.594 0.32,0.722 1.93,-0.733 -1.58,-1.414 4.53,-8.936 1.61,1.305 2.15,-0.998 0.47,3.038 1.24,-2.786 -2.72,-1.988 2.83,-2.296 -4.34,2.067 2.21,-4.079 -3.52,-5.532 -0.59,-6.282 -1.82,-2.271 0.87,-2.397 7.37,-5.236 4.71,-11.134 7.12,-3.133 -1.77,-1.335 -5.86,2.226 -6.69,-4.576 2.38,-2.451 -4.15,-0.51 -0.75,2.416 2.64,2.761 -3.64,1.395 -1.77,-1.29 6.46,-17.195 7.13,-13.263 3.04,-1.596 -1.16,1.555 1.61,4.971 5.01,-2.034 -3.68,-4.958 9.7,-30.497 -0.55,-7.657 1.86,-5.111 0.21,2.408 0.5,-1.538 -1.7,-10.363 9.93,-2.298 6.02,-10.29 3.26,0.349 1.72,-1.546 4.12,3.248 -4.77,4.892 -0.86,4.108 4.68,-2.664 1.24,3.855 5.34,1.014 3.76,6.315 0.3,10.471 3.95,5.45 -2.2,5.022 1.55,19.535 6.21,4.629 4.82,-0.246 1.69,-1.911 3.63,4.297 4.03,-0.242 -3.07,1.17 -5.62,8.924 0.05,9.629 5.29,0.118 3.52,1.911 2.94,9.148 7.11,3.195 -4.24,9.9 -0.34,5.346 2.63,0.063 2.53,-2.73 4.97,-0.321 -2.39,5.674 0.91,16.453 0.92,4.359 3.41,4.307 -3.5,17.675 4.77,11.34 3.08,2.505 1.2,10.335 3.84,9.84 5.65,4.743 7.62,-0.042 7.31,-5.327 1.46,-6.421 7.55,2.418 5,-2.485 4.28,-4.96 4.21,5.008 -0.49,5.337 3.37,-0.126 -1.7,6.24 3.36,4.047 4.81,-0.307 0.45,2.567 6.7,1.09 2.26,6.515 2.69,0.833 1.04,2.315 7.65,2.513 3.15,-0.575 -0.5,2.745 3.27,3.863 3.66,-0.221 -6.21,10.045 1.55,5.987 2.71,0.414 1.3,-1.732 0.87,2.68 -3.7,2.123 0.08,3.16 -3.09,4.634 1.74,-0.127 0.55,4.371 2.67,1.55 -0.53,4.096 2.55,3.897 -0.5,4.666 1.31,1.72 -1.01,3.836 2.97,2.172 3.31,6.703 -1.87,5.284 2.5,5.471 -3.72,3.305 -0.45,6.359 3.1,1.24 5.96,11.13 4.69,2.693 5.44,7.11 0.18,2.723 3.73,-2.641 1.09,1.905 2.6,-2.276 2.02,1.735 -3.58,8.657 3.95,5.963 -0.54,3.28 6.25,8.897 -0.44,6.081 4.43,7.591 -3.06,8.163 1.51,3.01 -0.96,6.531 -4.91,7.753 0.43,6.723 6.57,6.431 2.54,5.931 7.8,2.854 -0.97,6.46 1.01,-0.852 -3.79,12.431 9.87,11.57 11.79,6.335 4.7,-0.317 1.21,3.021 2.35,0.129 2.43,3.275 5.07,-1.008 2,-5.55 2.33,4.012 -1.13,2.206 4.11,6.089 17.01,0.646 0.27,-3.035 -3.23,-3.401 1.6,0.577 7.58,12.879 0.78,4.278 2.17,2.378 -0.74,4.582 3.7,3.865 4.68,0.686 1.14,-1.948 -1.97,-1.97 0.39,-3.396 3.74,0.166 2.18,7.679 2.78,3.116 3.91,1.05 4.62,-2.488 1.68,3.246 7.79,1.916 0.38,2.548 -1.94,1.178 6.41,6.386 4.33,0.313 1.64,-1.636 -0.65,-4.261 3.14,1.806 2.6,-1.443 1.04,7.122 1.96,-1.139 -0.99,1.863 1.52,0.467 0.49,-2.645 0.72,2.461 1.31,-2.038 -0.25,5.641 3.44,-0.031 -0.29,-1.523 1.9,-0.97 1.71,2.288 -1.72,1.183 3.77,2.844 -1.28,1.795 1.17,2.509 3.37,1.966 -0.98,1.147 2.42,2.49 -3.85,-0.321 -1.86,-1.697 0.13,-3.85 -1.74,-0.592 -0.16,0.744 0.48,0.993 -0.17,0.357 -0.41,-1.268 -1.57,-0.625 1.39,2.431 -3.55,1.706 -2.79,4.955 2,2.942 1.43,-0.366 -1.1,2.054 1.29,2.508 5.78,4.061 -2.29,1.059 2.19,0.765 0.22,2.807 2.24,-1.011 1.71,1.942 6.73,0.545 0.75,1.273 -2.49,0.43 0.06,3.151 3.93,-0.874 1.77,3.135 0.54,-2.03 1.32,0.228 2.64,4.101 -0.45,-0.312 -0.26,-0.049 -0.04,0.216 -0.31,-0.097 h -0.05 l -0.04,0.062 1.25,0.266 0.89,-0.775 -1.64,8.099 -0.92,-0.798 -1.44,1.218 -0.25,-0.258 -0.11,10e-4 -0.07,0.091 -0.28,-0.406 -0.15,0.16 -0.03,0.222 0.98,0.255 1.51,-1.012 1.72,2.195 -1.9,2.409 -0.13,-0.728 -0.69,-0.153 0.83,1.005 1.24,-0.555 -1.86,2.841 4.77,-4.638 -0.42,2.328 2.6,-0.772 0.98,6.532 -2.16,-0.199 0.31,0.425 -1.06,0.135 -0.15,0.303 0.28,0.128 -1.07,0.302 -0.05,0.124 2.29,-0.802 2.35,0.543 0.36,0.912 -2.12,-0.038 0.03,2.439 -2,-0.089 -0.2,1.107 0.25,0.505 0.65,-1.306 1.23,2 2.23,-2.013 0.55,1.906 2.41,-0.89 -1.17,2.302 3.38,1.02 -0.83,1.17 1.12,1 2.17,-3.379 -2.42,5.929 2.16,5.64 -1.27,-0.91 -1.04,-0.24 1.09,0.44 -1.65,0.74 -0.18,1.54 0.48,-1.41 0.18,3.96 1.52,0.22 -1.39,1.06 -0.65,-0.39 -0.51,0.62 3,-0.39 -0.61,3.78 5.62,14.51 -1.14,1.26 5.94,8.78 3.82,-0.39 3.98,1.9 8.16,-2.12 -2.47,-1.24 0.16,-2.57 2.42,-5.5 4.15,-2.64 7.85,10.93 -0.78,1.94 2.08,1.84 4.39,0.2 7.79,7.54 2.18,0.3 0.14,0.76 0.93,1 -0.46,0.06 -0.76,0.89 0.75,-0.79 0.37,0.02 0.19,-0.26 -1.29,-2.76 3,2.24 -1.58,-0.21 1.68,3.23 0.26,-2.73 2.23,0.33 -2.19,-4.87 2.87,1.01 -0.27,-0.89 -3.66,-2.21 3.04,0.99 -2.68,-1.16 -0.48,-2.22 1.71,-4.73 5.61,1.69 1.26,4.58 3.16,0.87 -1.54,3.97 -2.4,-2.49 -0.21,1.18 -0.84,-0.89 -0.56,-0.37 -0.18,0.13 1.86,5.46 2.33,-0.69 0.42,3.44 2.22,-3.91 -1.04,-1.58 1.55,0.3 -0.3,6.11 3,2.42 -1.85,13.7 -3.38,-0.24 2.23,1.96 -1.44,9.44 4.08,5.55 -1.93,6.87 4.19,6.64 -4.28,1.62 4.64,2.33 -0.34,1.6 3.47,-2.08 4.67,1.57 0.33,3.31 2.35,0.72 -0.1,0.21 -0.13,-0.11 -0.23,0.06 0.07,-0.11 -0.02,-0.03 h -0.07 l -0.8,0.44 3.6,1 -0.39,0.4 -0.41,-0.34 -0.78,-0.08 -0.35,0.13 2.58,1.19 -1.29,0.51 1.45,0.73 -0.59,0.65 0.43,-0.02 -0.41,0.51 0.21,0.04 -0.3,0.64 0.14,0.54 0.67,-2.31 1.73,5.4 3.35,0.12 0.78,1.06 -0.44,-0.12 -1.08,0.79 0.62,0.56 -0.05,-0.94 0.89,-0.03 0.28,-0.57 2.45,1.52 -0.92,2.19 0.75,-0.71 -0.66,1.64 0.62,-0.18 -0.42,0.91 0.14,0.03 -0.13,0.4 0.04,0.31 0.14,0.08 h -0.09 l -0.17,0.09 0.13,0.37 2.82,1.07 -1.2,0.32 -0.29,0.18 -0.03,0.23 1.28,1.1 -1.08,1.56 1.84,-1.35 -1.95,-1.53 1.48,-0.44 1.07,-1.93 3.62,4.89 -1.42,-0.05 -0.3,0.91 1.31,-0.24 -0.08,0.56 -0.37,0.03 v 0.05 l 1.42,2.26 0.47,0.25 0.18,-0.17 v 0.07 l -0.1,0.09 0.01,0.07 0.73,0.3 0.07,0.93 -0.07,-0.94 -0.63,-0.56 -0.68,-0.24 -0.1,-3.31 0.12,1.83 2.48,1.62 -0.78,-2.21 2.3,0.25 1.23,3.35 0.8,-2.2 1.03,0.75 -1.31,-0.95 0.97,-1.9 5.5,4.13 -0.04,-3.36 -2.1,-0.93 0.49,-0.29 -0.74,-0.9 0.46,-0.48 -0.18,-0.32 -1.78,0.66 0.33,-1.64 6.29,2.4 -1.35,0.96 0.59,2.63 1.19,-4.66 1.38,0.67 1.16,5.67 -2.63,-0.39 5.22,3.67 2.09,-0.29 -0.52,0.43 -0.88,2.17 1.57,-1.38 0.39,-2.45 8.28,20.84 6.18,6.21 9.79,5.62 -0.27,0.12 -0.15,-0.16 -0.06,0.02 -0.4,-0.12 h -0.04 l -0.03,0.01 0.45,0.16 -0.11,0.04 -0.13,0.2 -0.04,-0.02 0.02,-0.12 -0.03,-0.04 -0.11,0.07 -0.03,0.05 -0.07,-0.05 -0.03,0.01 -0.02,0.04 0.13,0.1 0.13,-0.2 -0.01,0.14 0.06,0.04 -0.02,0.14 0.03,0.02 h 0.1 l -0.01,0.11 -0.05,-0.09 h -0.08 l -0.02,0.02 0.03,0.15 -0.03,0.02 -0.01,-0.06 -0.02,-0.02 h -0.03 l -0.02,0.01 -0.06,0.06 -0.02,0.03 0.01,0.03 0.02,0.04 0.11,0.11 -0.02,0.12 v 0.03 l 0.08,0.17 2.15,-1.25 -0.17,1.22 0.12,0.65 0.23,-0.12 0.24,-1.77 -2.03,-0.07 1.77,-0.22 4.77,4.72 1.39,5.57 -0.7,3.29 0.01,0.06 0.06,0.11 0.08,0.02 -0.06,0.05 -0.01,0.04 0.17,0.37 -0.2,0.09 v 0.03 l 0.08,0.03 -0.02,0.04 -0.21,-0.01 -0.04,0.04 0.24,-0.01 0.13,-0.14 0.02,-0.07 -0.04,-0.15 0.05,-0.04 -0.13,-0.09 0.04,-0.19 -0.16,-0.19 0.35,-0.28 3.81,7.33 3.81,2.78 -0.93,1.78 1.79,2.57 4.16,2.08 4.57,-1.3 1.63,2.15 3.26,0.31 0.36,6.69 2.16,1.49 -1.01,1.84 -0.88,-0.57 -0.49,0.52 0.02,-0.34 -0.13,-0.17 -0.74,0.48 0.72,-0.41 0.02,0.48 0.96,-0.19 -1.7,2.14 -0.44,0.17 -0.18,-0.36 -0.14,-0.02 -0.11,0.08 -0.09,-0.13 -0.07,-0.02 v -0.06 l -0.02,-0.01 -0.14,0.01 -0.06,0.06 1.22,0.92 -1.79,-0.53 -0.52,0.36 2.26,0.52 0.51,-1.07 0.36,1.59 -2.42,-0.06 1.44,1.05 -1.37,0.38 2.43,6.75 -1.54,-0.15 -0.38,1.12 5.31,4.78 -4.11,2.29 1.66,1.65 -0.37,-1.58 0.88,-0.74 0.6,1.72 -0.34,-1.5 1.39,1.01 0.88,-1.41 1.67,1.31 -0.22,2.26 -0.65,0.52 -0.64,-0.92 -0.66,-0.05 -0.17,0.18 0.76,1.27 2.25,-0.43 -1.82,3.2 1.8,-0.04 -0.37,0.39 -0.99,0.61 -0.19,-0.07 -0.01,0.04 -0.06,0.02 0.01,0.01 -0.12,0.08 -0.02,0.04 0.56,0.11 -0.5,0.68 -0.04,0.19 0.13,0.13 -0.08,0.04 -0.03,0.06 0.93,1.21 2.12,-3.79 -1.53,-0.41 -0.16,-0.81 1.77,0.37 0.41,-1.61 -1.04,-2.03 1.28,-1.66 -1.33,-0.63 1.41,0.19 2.5,6.81 3.81,-0.03 -6.88,21.29 0.83,3.71 2.25,-0.01 -1.44,8.52 2.35,12.87 -0.75,-1.63 -0.83,1.92 2.32,2.07 -1.7,1.65 -0.72,-1.02 0.36,3.15 -3.63,4.3 1.19,1.63 -2.16,0.74 1.86,0.04 4.42,4.88 -6.21,3.92 0.19,2.12 3.57,1.83 0.9,-1.34 -0.36,3.96 -2.01,-0.64 -0.77,0.79 0.77,2.79 4.55,2.79 -0.98,1.84 2.85,4.5 2.59,-0.61 1.09,2.89 1.52,-0.29 1.6,10.45 1.69,0.18 0.42,4.26 2.65,0.82 -1.08,4.6 1.58,5.88 0.01,-1.9 0.16,-0.24 0.54,-0.15 0.75,8.27 3.44,4.58 1.99,0.19 -0.92,0.75 -3.04,-1.17 -6.31,5.25 -9.4,-0.12 -3.64,6.24 -12.03,-2.72 -6.77,3.08 -5.93,-3 -1.25,-2.35 -1.86,3.94 -2.8,-1.86 0.44,-2.47 -3.72,-0.19 -4.07,6.19 -4.02,-0.3 -4.86,4.88 -2.98,-0.91 -7.55,5.23 -3.22,-0.37 2.87,8.3 3.46,2.46 -1.75,1.33 -1.46,6.77 1.22,0.8 -1.5,2.44 -4.92,1.23 -3.51,-1.22 -0.9,2.96 h -2.86 l -2.31,-5.02 -1.44,0.01 -8.46,4.62 -2.49,3.81 0.22,2.9 -5.71,6.1 -4.15,-0.7 -1.85,-3.69 -0.25,-9.22 -9.05,-5.84 -3.02,0.47 -1.82,-5.9 -13.58,-6.1 -6.3,2.45 -9.83,-0.65 -8.19,-7.27 -4.07,2.1 -3.15,-1.36 -7.16,1.73 -2.06,1.86 -13.45,-0.24 -0.95,1.39 -6.05,-3.45 -4.47,0.08 -2.65,1.17 -3.43,5.74 -4.74,0.8 -11.37,7.49 -2.53,6.5 -3.91,2.45 -418.41,0.01 0.01,-169.46 -157.73,0.02 -0.16,-384.946" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path160"
                d="m 2621.99,1174.53 0.12,10.44 4.85,6.69 -12.86,29.73 -1.99,7.44 0.61,4.74 -2.11,2.13 -2.82,-3.59 -1.45,-8.66 -1.34,0.5 6.09,-13.52 -0.65,-6.76 -2.82,-0.09 11.66,-11.64 0.81,-5.2 -3,-4.62 -2.82,-1.12 3.39,-4.3 4.33,-2.17" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path162"
                d="m 1900.06,727.952 -3.05,0.728 2.17,1.599 -3.32,0.724 1.05,0.733 -1.78,2.553 0.63,1.91 -3.96,-1.301 -0.1,2.379 -3.2,2.358 -4.37,0.049 -4.15,-5.196 8.05,-9.211 8.48,-0.899 4.34,-2.971 6.75,3.214 1.88,4.344 -2.89,-0.652 -3.22,1.869 -1.97,-3.818 -1.34,1.588" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path164"
                d="m 2503.82,1111.21 -2.06,-3.56 2.02,-2.17 9.59,3.21 -0.85,1.71 2.72,-3.18 -0.5,6.95 4.69,8.35 -1.59,2.03 -1.15,-1.25 0.63,-1.22 -0.66,-0.19 -0.89,2.49 -1.61,0.01 -2.23,-2.75 3.36,-0.78 1.33,-1.66 -2.11,1.27 0.63,-1.16 -0.48,0.31 0.21,-0.46 -0.09,0.12 0.04,-0.16 -0.18,-0.3 -0.07,-0.03 -0.03,0.11 h -0.02 l -0.06,-0.07 -0.02,-0.01 0.05,-0.08 0.01,-0.12 -0.02,-0.11 0.01,-0.01 0.05,0.02 0.02,-0.01 0.02,-0.05 -0.01,-0.06 -0.06,-0.1 -0.05,-0.04 -0.04,0.56 0.35,0.35 -0.33,1.27 -2.81,0.64 -1.71,-4.82 -4.53,-1.35 -1.57,-3.7" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path166"
                d="m 2252.11,820.833 -0.33,-2.355 1.42,2.316 2.9,0.171 -1.58,4.172 4.35,5.447 -2.79,4.074 -4.39,-0.913 -1.6,-5.95 -6.35,-6.442 2.97,-0.694 6.31,3.309 -0.91,-3.135" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path168"
                d="m 2634.44,1326.89 2.32,0.91 -4.87,16.5 -2.29,0.48 -0.63,-13.6 2.19,-5.84 3.28,1.55" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path170"
                d="m 2035.71,418.491 0.34,-2.757 4.02,-2.708 4.26,5.931 -3.71,1.054 -1.52,2.348 -3.39,-3.868" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path172"
                d="m 2629.28,1305.21 -0.82,0.83 4.19,-1.23 -2.57,9.86 0.44,9.02 -3.29,-9.2 -0.21,-7.84 2.26,-1.44" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path174"
                d="m 2047.57,390.437 -3,4.911 -3.36,-1.079 -1.79,-2.607 1.89,-3.198 2.42,-0.69 3.84,2.663" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path176"
                d="m 2614.71,1294.85 0.15,-2.1 3.48,15.92 -1.63,0.12 -1,-3.64 -3.53,-3.49 -0.1,-3.5 0.76,-0.46 0.21,0.65 0.38,0.06 1.28,-3.56" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path178"
                d="m 1898.11,754.111 -0.11,-1.074 3.29,2.94 1.13,3.204 -3.11,1.575 -4.3,-1.161 -0.13,2.037 -2.1,-3.111 5.33,-4.41" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path180"
                d="m 2394.98,928.496 1.29,-3.593 1.03,5.046 1.8,-0.842 -0.57,1.895 2.44,1.519 -5.16,1.695 0.61,-3.262 -1.96,2.084 -1.31,-0.88 2.6,-2.51 -0.77,-1.152" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path182"
                d="m 2064.28,351.549 -2.96,-2.261 10.53,-0.532 -3.09,2.325 -4.48,0.468" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path184"
                d="m 2034.51,387.958 1.24,-2.678 3.6,-0.454 -1.01,6.387 -3.83,-3.255" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path186"
                d="m 2444.85,1038.44 -1.57,-0.7 -0.24,-3.14 2.19,-6.22 1.4,4.51 -1.78,5.55" />
                {Boolean(qldText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '80px', whiteSpace: 'pre', display: 'inline', fill: qldTextColour || borderColour, stroke: qldTextColour || borderColour, strokeWidth: 1.00157})}
                    x="2200"
                    y="1120">
                        <tspan
                            x="2200"
                            y="1120"
                        >
                            {qldText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onSAClick}
                onMouseOver={onSAHover}
                className={css({fontStyle:'normal', fontWeight:400,fontSize: '37.5px',fontFamily:'Sans Serif',fill: saColour || defaultColour, fillOpacity:1,fillRule:'evenodd',stroke:borderColour,strokeWidth:borderWidth, strokeLinecap:'square', strokeLinejoin: 'bevel', strokeOpacity:1,
                    '&:hover': {fill: hover ? saHoverColour || defaultHoverColour : saColour || defaultColour}
                })}
                id="g-sa"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path190"
                d="m 1796.49,1798.91 3.75,-0.4 -3.42,3.22 3.92,2.03 -3.27,4.53 11.09,0.46 0.54,1.29 -3.08,2.78 0.54,2.23 3.17,-1.25 -2.96,-0.96 0.99,-1.29 3.94,0.63 2.54,-4.49 2.12,-0.21 5.53,1.59 1.62,3.17 2.57,0.38 0.45,2.46 -4.91,3.63 -6.82,-2.66 -8.94,-0.4 -6.79,3.58 -0.49,5.75 -7.46,3.93 -4.72,-4.58 -8.49,-1.46 -4.13,3.59 -7.02,-1 -4.31,1.57 -3.22,-1.61 -7.83,2.84 -2.08,-5.28 -3.7,-0.89 -3.2,-4.45 2.79,-8.21 25.35,-4.76 12.82,-5.36 10.79,0.98 2.32,-1.38" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path192"
                d="m 1806.65,1617.24 -0.33,12.89 3.13,2.29 -0.59,8.47 -2.56,1.63 1.95,4.58 -7.86,-2.7 -5.31,8.25 -4.42,2.1 -0.94,5.82 -3.14,3.67 -0.73,8.58 -2.41,1.9 -5.33,11.13 -11.72,3.82 0.92,-1.99 -2.06,0.55 0.49,-1.3 -2.32,-0.65 -3.32,5.67 5.08,-1.71 -0.76,1.09 -18.93,8.53 -0.95,2.59 -11.12,7.41 -5.43,11.77 -7.96,5.68 1.14,2.47 -2.01,1.33 1.3,-0.23 0.27,2.47 -1.56,4.45 -1.88,-3.77 -1.81,2.2 -4.71,0.73 -2.63,3.78 2.69,1.03 0.21,2.31 -2.43,-1.97 -1.96,2.94 -0.01,2.96 1.98,2.14 -2.37,0.08 -3.19,3.34 5.67,-0.22 3.31,-2.87 1.27,1.63 -0.07,-3.2 1.43,0.32 0.49,3.45 -2.94,3.22 2.35,7.81 -2.63,1.54 -1.35,-3.44 -3.83,-1.24 -0.12,-2.41 -3.24,-1.53 -4.17,0.25 -1.41,4.73 -3.53,-0.03 -0.75,-3.9 -6.84,-7.97 -7.85,-3.42 0.87,-3.38 -4.69,-4.57 -7.53,2.15 5.11,-9.39 0.79,4.09 6.96,1.39 -2.96,1.78 5.5,4.8 -1.91,0.51 7.93,-1.72 -4.47,-0.56 0.74,-3.92 -1.86,0.1 -0.28,-1.87 -0.71,1.58 1.61,0.88 -1.36,2.61 1.37,0.5 -1.74,-0.38 -2.26,-19.34 -2.25,-4.93 -3.27,-2 2.01,-1.79 -1.43,-8.15 -11.14,-13.32 -11.49,-7.74 2.19,-4.5 -0.89,-6.16 -2.34,-6.61 -7.55,-5.58 3.19,-0.21 -0.89,-3.23 -5.62,-2.1 -1.94,1.32 2.1,2.06 2.23,-0.81 -0.5,1.81 1.71,0.55 -1.73,1.29 -9.46,-5.88 -4.31,1.83 -0.55,-2.96 -4.36,-5.88 0.17,4.83 4.19,2.39 -1.58,3 -3.58,-2.74 -1.58,-6.4 -3.27,0.72 -1.55,-2.19 2.89,-0.27 0.44,-2.91 -1.81,-2.16 -1.38,1.02 -4.24,-2.12 4.1,-3.99 -4.11,-6.84 1.07,-0.75 6.53,0.91 -2.74,-0.07 2.49,1.32 -0.18,2.84 1.32,-0.32 3.6,-5.66 -1.26,-6.94 -4.33,-5.31 -4.27,-1.9 -13.34,5.34 0.94,-8.3 2.76,1.7 1.67,-2.32 -6.82,-8.99 -2.72,1.73 -0.68,-3.37 -4.08,-0.18 0.72,-2.76 -2.63,-0.62 1.27,-2.37 -3.93,-0.96 -2.04,4.78 -1.48,-2.44 -1.5,1.34 -1.26,-2.93 -1.12,2.08 -2.96,0.33 0.87,2.1 2.77,-0.33 1.44,1.37 -0.21,0.61 -2.18,-1.61 -2.97,1.26 -3.52,-1.18 -3.66,1.8 -4.66,-2.37 -2.04,2.25 0.65,-1.97 -2.62,-2.78 -4.29,-2.53 -1.43,1.34 -0.83,-2.4 -11.41,-6.73 -11.32,-0.83 -4.46,2.07 -0.45,1.76 1.86,1.69 -3.04,-1.82 -11.3,1.66 -23.23,-17.81 -32.07,-14.86 -6.42,4.28 -11.58,3.94 -34.38,-1.68 -60.5,6.4 0.03,-323.69 630.71,-0.12 0.19,460.17 -2.07,-2.43 0.11,243.73 -15.95,0.32 -13.98,-8.66 -7.81,-14.12 -7.11,-6.53 0.33,-3.01 -3.63,-3.03 -2.82,0.59 -8.17,-10.04 -5.3,-8.47 0.16,-1.58 2.39,0.12 0.14,-2.79 -6.37,-9.29 9.47,-7.98 0.62,-7.97 -2.13,-8.14 -11.96,-25.42 -15.45,-18.42 -16.46,-12.78 -13.07,-5.63 -5.62,1.67 -5.73,5.9 -12.95,-0.21 -4.45,1.53 -5.01,-2.37 3.65,-6.31 4.15,-1.1 5.09,-6.43 5.25,-2.55 1.47,-14.3 2.55,-4.59 -2.18,-10.4 0.76,-3.79 -1.26,-0.23 2.33,-1.41 0.04,3.1 2.64,0.58 -0.69,-1.2 1.53,-0.83 -16.37,-18.63 -2.29,-9.84 -4.03,-2.7 1.02,-2.61 -3.33,-4.86 -3.08,2.09 -2.22,4.88 0.29,5.42 -4.71,4.68 -1.57,4.68 -0.62,5.34 1.68,1.07 -2.25,9.59 -3.41,5.91 -1.9,9.67 -2.06,0.78 1.78,3.62 -6.37,3.17 -4.34,-3.01 -6.94,-1.15 -4.63,4.14 -5.1,-0.2 -3.35,4.33 -9.08,-0.84 -6.22,4.58 -3.21,-3.27 1.25,-3.28 5.01,-3.62 1.05,-2.78 -1.62,-3.16 4.38,-8.07 4.2,1.6 9.62,-1.54 5.18,3.54 3.88,-2.57 3.19,-17.31 -1.38,-10.57 -3.58,1.2 4.48,-8.71 -0.02,-5.05 -2.63,-5.36 3.81,-0.37 2.37,-5.05 -2.12,-2.3 5.44,-4.87 -1.59,-2.64 14.65,-16.46 2.14,-0.56 -1.39,2.25 1.27,-0.04 0.94,-4.24 2.21,0.36 -2,-0.64 0.51,-2.08 -4.13,-6.8 0.57,-4.3 -1.55,0.18 -2.14,-3.51 2.23,-4.07 3.86,-0.52 3.88,-3.29 0.92,1.62 1.9,-2.59 -1.57,-0.55 1.12,-1.11 -1.42,-2.99 -3.51,-1.73 -2.69,-13.34 2.29,-1.17 -5.62,-3.61 1.58,-1.86 -3.41,-3.26 1,-1.59 0.19,1.34 h 0.72 l -0.17,-1.69 -2.82,-1.42 -1.2,-3.23 0.6,-1.05 -0.25,-2.17 -0.82,-1.71 0.3,4.54" />
                {Boolean(saText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '80px', whiteSpace: 'pre', display: 'inline', fill: saTextColour || borderColour, stroke: saTextColour || borderColour, strokeWidth: 1.00157})}
                    x="1680"
                    y="1480">
                        <tspan
                            x="1680"
                            y="1480"
                        >
                            {saText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onTASClick}
                onMouseOver={onTASHover}
                className={css({fontStyle:'normal',fontWeight:400,fontSize: '37.5px', fontFamily:'Sans Serif', fill: tasColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour, strokeWidth: borderWidth, strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeOpacity:1,
                    '&:hover': {fill: hover ? tasHoverColour || defaultHoverColour : tasColour || defaultColour}
                })}
                id="g-tas"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path196"
                d="m 2126.13,2062.3 1.78,-5.08 -1.2,-7.3 4.13,-2.87 0.12,-4.63 4.21,0.2 5.46,4.49 0.98,9.41 -1.2,4.27 1.75,2.63 -1.7,6.81 -8.21,4.26 -1.51,1.31 0.46,0.76 -0.15,0.69 -0.19,-0.01 -2.53,-2.51 -0.9,-3.36 1.68,-0.52 0.08,-3.74 -3.06,-4.81" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path198"
                d="m 2359.25,2088.33 3.43,-2.74 4.06,5.01 2.17,0.23 1.59,3.62 -6.87,3.59 -2.14,-4 -4.4,2.34 -1.49,-1.8 -5.92,1.26 -5.19,-2.38 0.1,-2.07 4.87,-2.88 9.79,-0.18" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path200"
                d="m 2300,2286.96 -2.29,-5.17 4.35,2.93 -0.04,-6.74 1.77,1.9 4.1,-8.97 1.41,3.38 2.11,-2.48 -0.87,-2.34 2.21,-0.78 -0.29,-1.93 -5.35,-0.64 1.8,-2.05 2.4,0.41 0.28,-1.73 -2.87,-0.01 2.67,-3.17 3.97,11.2 -5.82,4.11 0.32,3.58 2.82,0.74 -2.88,8 -1.71,1.22 -2.48,-1.46 0.29,-2.76 -1.85,-0.86 -2.04,3.55 -2.01,0.07" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path202"
                d="m 2353.76,2233.31 -4.38,0.8 0.68,3.7 -4.18,1.33 2.78,-4.11 -3,-1 3.05,-5.74 2.78,0.91 2.27,4.11" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path204"
                d="m 2180.49,2112.31 3.26,-6.22 7.28,5.72 -4.78,-0.42 -4.38,2.04 -1.38,-1.12" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path206"
                d="m 2353.6,2103.26 -2.46,-0.73 -0.8,-2.44 7.77,-2.94 -2.5,6.93 -2.01,-0.82" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path208"
                d="m 2172.29,2099.15 v -1.77 l 3.18,-1.02 -0.28,-1.34 0.94,-1.47 -0.14,-0.87 0.12,-0.42 0.11,0.02 0.26,6.66 -1.73,6.11 -2.46,-5.9" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path210"
                d="m 2178.83,2095.02 2.7,-3.44 3.55,0.16 0.8,2.14 -3.85,3.6 -3.2,-2.46" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path212"
                d="m 2331.99,2059.81 5.08,-2.7 1.25,-2.77 -1.14,-2.23 6.07,-1.45 -0.4,0.3 0.01,0.8 0.56,1.72 1.26,0.4 -1.58,-3.03 10.94,12.78 6.44,1.72 -0.13,7.76 2.38,7.35 -2.67,1.37 -3.83,-1.28 -4.64,3.92 -4,-1.52 -2.05,-8.92 -2.27,-1.87 -0.54,1.47 -1.04,-3.98 -3.93,-0.69 2.32,-1.95 -0.94,-4.52 -1.48,-1.31 -2.79,1.17 -2.88,-2.54" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path214"
                d="m 2362.25,2197.62 1.07,2.29 -2.5,2.84 3.05,1.7 -3.06,5.66 -2.46,-3.26 2.09,-2.07 -1.64,-2.07 2.08,-2.45 -6.88,-2.23 -5,1.32 0.59,3.47 -3.7,4.53 -0.71,4.11 1.4,2.85 -2.43,3.53 1.61,6.59 -3.27,2.76 -1.47,-3.41 -0.28,2.96 -1.98,0.7 3.55,3.11 0.88,4.61 -0.83,3.1 -3.54,2.65 0.26,4.8 -1.14,-1.65 -2.65,4.47 5.03,1.2 -2.45,-2.14 1.61,-2.07 2.53,2.2 1.63,-0.82 1.51,6.35 -3.85,3.63 2.88,5.48 -1.41,1.86 2.71,0.14 -2.23,3.33 2.31,2.17 -5.82,-2.18 -1.75,-5.29 -0.94,2.95 1.3,-0.15 0.23,3.47 -1.59,-1.2 -3.09,3.21 -3.89,-2.78 -1.39,-3.54 2.92,-2.69 -5.98,-1.47 -0.45,-4.14 3.28,-1.16 -0.27,-3.51 2.65,0.94 -0.97,3.64 3.48,3.06 3.45,0.38 -0.18,-1.26 0.5,-0.66 0.77,1.7 0.65,-2.17 2.76,-0.36 -4.11,-0.29 0.52,-1.94 -2.39,-1.29 2.87,-0.97 -2.76,-0.67 0.06,-2.38 -7.64,0.18 -3.32,-2.07 0.59,-1.16 -0.2,-0.32 -4.17,-0.04 -2.08,4.07 2.2,2.04 -1.37,1.77 0.99,1 0.66,-1.64 0.65,1.68 -1.72,2.23 -5.56,1.84 -1.24,-4.71 0.88,-0.81 1.12,4.11 2.02,-0.04 0.54,-2.79 -1.76,-0.3 0.18,-1.8 2.39,-2.46 -3.04,-0.19 -1.44,1.94 -0.22,-3.47 -2.75,-0.54 0.32,-1.72 -5.82,-6.47 -2.57,-1.35 -2.58,1.68 -0.53,0.97 -1.1,0.19 -0.7,0.69 -1.74,-0.72 -0.84,0.57 2.6,0.24 5.04,-2.67 4.24,3.09 -1.41,1.64 2.23,0.24 1.26,0.85 0.54,4.33 1.51,0.88 -1.94,4.4 1.07,4.34 -1.6,0.5 -1.51,-3.16 -1.04,0.94 -0.43,3.01 2.31,1.02 -2.84,2.16 -0.42,9.5 -8.22,1.27 -0.92,2.67 -2.81,-1.09 2.51,2.55 -2.21,5.6 -3.54,0.24 -1.56,-2.1 -0.26,2.09 4.53,2.08 -4.45,4.26 -0.87,-1.94 -0.71,3.99 1.75,-0.53 0.06,1.86 -2.66,2.52 -2.33,0.28 0.24,-1.79 -2.42,-0.94 -4.19,2.11 -8.58,-7.04 -4.29,1.26 -6.11,-1.82 -2.87,1.93 -2.09,-3.5 -1.88,0.35 -0.8,2.81 -2.69,-2.42 -2,3.55 -1.6,-1.03 -2.5,1.94 0.57,-4.01 -2.4,-6.39 -8.31,-6.01 -2.37,-7.76 -1.87,-0.12 -1.43,-4.88 -3.04,-0.46 0.64,-3.28 -4.93,-5.06 -5.09,1.02 -0.56,-4.78 -5.34,-9.37 -0.87,-7.11 -5.43,-2.21 2.08,-3.17 -2.61,-3.13 0.06,-4.97 -3.04,-7.31 0.93,-3.16 -1.25,-4.4 -0.85,0.12 -0.36,-0.88 2.12,0.26 2.43,5.57 3.37,-0.19 -0.4,2.21 7.53,5.31 -0.35,2.09 1.46,5.6 -0.03,-5.41 -1.13,0.06 1.79,-1.2 2.35,1.71 4.07,0.22 0.51,-0.48 -0.32,-0.62 0.71,0.65 2.52,-0.18 -3.27,-0.55 -1.01,1.03 -4.11,-0.95 2.29,-4.97 -2.37,1.09 -0.96,-3.31 -0.71,2.69 -6.09,-7.12 0.4,-3.11 -1.37,0.32 -0.66,-3.51 -3.45,3.19 1.19,-0.32 -0.12,1.94 -3.43,-0.58 2.16,-5.76 -2.61,-9.01 -12.89,-16.22 -2.51,-0.65 -1.72,-7.93 -7.53,-10.55 1.72,-3.11 -4.99,-8.54 -1.07,-11.32 -2.94,-2.82 1.34,-0.93 -1.11,-3.63 3.89,-1.87 1.44,-3.26 -1.49,-11.12 2.19,-2.06 2.11,6.17 1.01,-2.01 7.21,3.53 2.98,-1.35 2.44,3.01 1.1,-2.54 5.87,3.26 5.56,-1.15 -0.21,-4.52 2.54,3.23 -1.78,1.44 2.01,3.09 7.28,2.19 1.58,-0.21 1.1,-1.06 0.48,0.12 2.2,3.71 9.24,1.98 0.41,2.66 3.69,2.62 18.93,7.3 -0.79,0.98 -1.96,-0.68 -0.27,0.04 -0.25,0.17 -0.15,0.25 -0.53,-0.07 -0.37,0.18 3.38,0.35 1.04,-1.3 9.83,0.81 -0.5,3.3 0.97,-0.08 0.21,1.07 1.62,0.39 -1.98,-2.03 0.39,-0.43 -0.24,-1.01 0.2,-0.23 -0.04,-0.24 0.03,-0.08 0.05,-0.08 5.02,-0.5 3.5,-2.57 2.16,4.42 -0.62,3.08 1.26,-2.08 0.46,2.89 0.58,0.41 -1.39,-4.58 1.54,-1.83 -2.15,0.53 -0.13,-1.08 7.53,-5.17 2.32,1.29 14.15,-6.5 8.18,1.81 5.43,-4.21 3.46,-0.14 2.68,3.95 h 2.35 l 4.43,-3.25 3.64,-6.33 3.94,-1.75 1.93,2.45 6.76,1.67 5.14,-4.48 1.42,-3.52 -1.07,-1.22 7.35,1.86 3.11,3.75 4.43,1.05 6.67,9.18 -2.77,4.28 -0.16,-2.06 -1.8,1.26 2.02,0.91 -1.35,8.6 3.47,3.66 -1.61,2.64 -1.39,-1.59 -0.23,2.4 -2.17,0.47 1.89,1.06 4.6,-3.95 -4.91,12.26 2.9,8.69 -1.93,6.75 1.08,1.86 -2.12,3.71 3.11,6.92 -2.11,7.27 2.18,3.29" />
                {Boolean(tasText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '50px', whiteSpace: 'pre', display: 'inline', fill: tasTextColour || borderColour, stroke: tasTextColour || borderColour, strokeWidth: 1.00157})}
                    x="2275"
                    y="2210">
                        <tspan
                            x="2275"
                            y="2210"
                        >
                            {tasText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onVICClick}
                onMouseOver={onVICHover}
                className={css({fontStyle:'normal',fontWeight:400,fontSize:'37.5px',fontFamily:'Sans Serif',fill: vicColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour, strokeWidth:borderWidth,strokeLinecap:'square',strokeLinejoin: 'bevel', strokeOpacity:1,
                    '&:hover': {fill: hover ? vicHoverColour || defaultHoverColour : vicColour || defaultColour}
                })}
                id="g-vic"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path218"
                d="m 2202.3,1964.58 1.03,-2.46 2.64,1.77 5.32,-0.25 1.01,1.53 0.92,0.42 0.12,0.24 0.58,0.61 0.01,0.07 -5.12,1.13 -2.82,2.87 -4.21,-0.63 0.52,-5.3" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path220"
                d="m 2170.79,1957.09 -3.14,3.16 1.93,1.36 -12.16,0.47 -9.18,6.94 -11.43,4.9 -10.3,13.13 -8.16,2.72 -1.24,2.89 -7.91,4.59 -7.27,-5.99 -7.36,0.41 -10.32,-8.23 -5.31,-0.29 -3.33,-3.1 0.63,1.58 -1.4,0.19 -15.48,-11.18 -10.03,-4.42 -5.83,0.92 -0.88,1.94 -5.21,-0.3 -11.37,-6.9 -9.85,-1.53 -7.38,3.66 2.55,4.86 -1.25,0.81 -2.8,-1.01 -1.6,2.64 -4.29,-4.32 -4.56,1.5 0.93,-4.09 -5.09,-6.03 -17.32,-9.99 -0.11,-243.74 3.13,4.65 0.58,-1.41 2.89,2.41 0.26,-1.53 3.1,0.23 1.74,2.2 2.92,-1.8 4.37,4.56 1.79,-1.65 4.5,3.38 2.65,-0.79 0.79,3.64 4.9,-1.49 -0.98,-2.34 7.63,-3.57 7.72,2.74 1.27,-1.54 1.7,1.59 4.69,-0.77 0.82,-1.49 -0.44,1.55 2.43,0.31 0.37,2.48 4.37,-1.25 0.01,1.8 4.08,1.59 -0.41,5.73 8.46,1.84 -2.41,3.45 0.12,4.31 1.63,0.51 -1.3,1.22 1.85,-0.31 -1.04,1.29 1.32,0.41 -1.7,0.48 4.41,3.18 0.86,-1.18 -0.82,4.1 1.65,0.17 -0.43,2.14 2.12,-0.53 -0.86,4.47 3.01,2.14 3.97,0.52 -0.74,-3.28 4.24,-0.21 -0.5,-6.42 3.81,-1.08 -0.71,-1.28 1.86,0.14 0.41,-1.94 0.98,0.86 -1.22,1.68 4.28,2.26 0.97,3.1 1.95,-1.9 2.57,2.81 0.87,-1.93 2.63,2.37 3.84,-1.29 -0.28,1.22 5.87,1.66 0.3,1.73 0.85,-0.79 1.76,0.43 -1.16,1.19 1.3,1.15 3.74,-0.03 -1.36,14.53 3.82,9.24 2.88,-0.2 1.16,1.8 5.22,-0.74 1.05,4.44 -1.51,3.31 3.07,3 6.86,0.01 5.67,5.48 5.85,1.2 1.04,3.25 6.05,2.15 8.38,9.58 4.45,0.94 1.7,5.09 1.58,0.39 -0.18,2.69 5.9,3.93 -0.23,1.47 5.24,2.23 0.11,2.72 0.79,-1.74 1.17,1.63 1.79,-0.83 -0.27,2.02 1.85,-0.56 0.42,1.92 4.25,0.34 2.92,-3.86 6.23,0.79 -3.07,-4.99 3.61,-8.16 7.12,-1.88 11.97,2.76 9.47,-3.88 7.28,7.4 7.22,3.93 4.81,-2.34 3.64,3.78 8.56,-0.79 2.69,2.36 5.09,-1.85 0.01,1.82 2.94,-0.9 1.56,1.46 2.79,-5.09 4.1,1.5 0.15,-1.95 2.47,2.05 3.31,-1.18 3.85,4.05 2.41,-1 0.96,2.24 6.47,0.74 3.72,2.53 0.69,-2.26 5.06,1.78 3.7,-6.78 1.1,2.59 9.23,1.38 4.45,-7.02 h 4.71 l 3.03,3.62 1.69,-1.16 -1.91,-0.36 0.08,-0.84 2.75,0.87 5.62,-3.02 10.72,3.98 0.61,2.83 3.98,0.22 -0.47,4.49 2.47,1.17 -0.14,10.17 1.26,0.56 -1.12,4.21 4.57,4.47 0.46,6.13 4.43,1.89 -5.71,12.18 4.52,-0.28 93.66,42.78 -11.25,3.65 2.59,-4.67 -3.64,2.37 0.03,-2.26 -1.3,0.82 -0.39,-0.68 -0.11,0.35 -0.65,-0.6 -0.84,0.22 0.56,-0.26 0.35,-0.87 -1.15,-0.19 -0.18,1.56 2.86,1.14 -1.03,0.52 -0.71,-0.11 -0.09,0.07 -0.04,0.1 1.6,0.15 0.38,-0.5 1.91,3.34 -4.63,6.73 -8.46,3.88 -1.07,-1.3 0.87,1.21 -1.45,1.69 -11.02,1.72 -6.99,-1.57 -1.02,-2.32 0.82,2.31 -7.13,-0.02 0.25,-0.88 -1.22,-1.01 -2.05,1.77 3.83,0.33 -15.28,2.1 -23.03,-0.27 -26.36,8.76 -16.4,11.94 -31.18,29.43 2.23,-2.46 -7.41,1.74 -2.23,2.57 -1.54,-1.04 -0.8,1.68 -2.11,-0.23 -0.23,-1.75 -5.36,3.72 -2.97,-1.47 -5.66,2.51 -1.91,-2.93 -7.31,1.47 -1.37,2.84 2.49,4.02 2.09,-0.19 1.04,6.03 6.43,-3.21 1.21,-4.48 2.14,0.79 0.56,7.26 -3.02,6.16 2.71,3.05 -2.76,0.31 -0.32,4 -4.15,-0.35 -1.32,-2.75 1.22,-1.22 -4.8,-4.09 0.89,-1.28 -5.56,-10.67 -2.4,-0.29 3.61,4.23 -7.69,-3.15 -2.23,2.1 0.43,1.96 -4.47,1.94 -2.72,-8.17 -7.39,-8.12 6.1,3.21 -1.05,-3.2 -4.7,-0.56 -6.78,2.72 -6.46,-7.5 -5.87,-1.2 3.28,-2.6 -0.95,-5.29 5.21,0.52 1.76,-2.67 -3.15,-8.42 -6.15,-1.4 -2.79,1.99 -0.61,-1.74 -0.87,-0.3 0.26,2.37 -1.16,-0.34 0.78,-1.51 -1.78,0.3 -1.67,5.08 -1.58,-0.61 1.53,4.95 -2,-0.19 2.66,2.14 -5.5,-1.17 -4.19,2.41 -1,3.48 -4.93,0.61 -2.64,0.1 -2.56,-4.17 -9.81,-7.7 8.56,3.93 5.7,-1.18 3.43,-1.98 2.31,-6.33 4.3,-3.84 -0.32,-6.54 -4.74,-3.66 -2.87,-7.67 -3.04,-0.93 -0.06,1.96 -4.57,0.06 -1.26,3.25 -14.6,7.2 -0.46,2.79 -4.95,-0.44 0.11,-1.45 -2.83,2.8 0.4,2.44 2.52,0.56 0.47,-1.94 2.77,2.47 10.03,-3.15 2.69,2.07 -0.03,1.62 -0.98,2.82 -0.95,-1.22 m 0,0 v -0.01 l -0.01,-0.03 v 0.02 l 0.01,0.02" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path222"
                d="m 2204.34,1975.93 0.62,-0.24 1.58,0.44 -1.16,1.4 1.04,1.91 -4.71,-3.75 -2.62,1.53 -5.52,-0.71 2.59,-3.23 3.73,-1.11 2.81,0.18 0.46,0.08 0.2,0.14 -1.43,0.03 -0.1,0.38 1.92,-0.04 -0.99,1.63 1.58,1.36" />
                {Boolean(vicText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '65px', whiteSpace: 'pre', display: 'inline', fill: vicTextColour || borderColour, stroke: vicTextColour || borderColour, strokeWidth: 1.00157})}
                    x="1200"
                    y="1200">
                        <tspan
                            x="2175"
                            y="1910"
                        >
                            {vicText}
                        </tspan>
                    </text>
                }
            </g>
            <g
                onClick={onWAClick}
                onMouseOver={onWAHover}
                className={css({fontStyle:'normal',fontWeight:400,fontSize: '37.5px', fontFamily: 'Sans Serif',fill:waColour || defaultColour, fillOpacity:1, fillRule: 'evenodd', stroke: borderColour,strokeWidth:borderWidth,strokeLinecap:'square',strokeLinejoin: 'bevel', strokeOpacity:1,
                    '&:hover': {fill: hover ? waHoverColour || defaultHoverColour : waColour || defaultColour}
                })}
                id="g-wa"
                transform="matrix(0.999812,0,0,0.999812,-474.47341,-314.62043)">
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path226"
                d="m 1104.09,664.725 -2.56,-1.422 5.18,-2.999 1.01,2.879 -1.4,0.963 -1.13,-1.538 -1.1,2.117" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path-228"
                d="m 1238.99,579.866 3.71,3.123 -1.18,1.247 2.15,-0.962 -0.14,2.298 1.95,-0.474 -1.1,3.617 2.22,-1.257 -0.47,2.294 2.55,2.915 2.54,-4.16 0.9,3.705 0.14,-1.542 1.91,-2.354 3.75,3.234 1.54,-2.906 3.33,2.919 1.02,-0.982 1.95,3.085 -0.77,3.084 1.59,1.4 2.15,-0.841 0.01,2.691 1.73,-0.807 5.94,4.577 0.7,2.817 4.18,3.187 1.06,4.205 2.4,1.092 1.14,4.369 1.58,-0.727 2.58,1.707 1.23,4.438 2.12,-1.594 4.01,5.019 7.58,3.215 0.16,1.612 8.73,3.921 8.83,-2.466 1.92,2.122 4.83,-0.636 5.72,3.455 11.22,1.014 0.01,930.19 -36.12,16.95 -51.96,16.1 -34.33,3.01 -24.69,-4.42 -13.26,3.39 -22.02,15.06 -26.6,10.47 -11.15,8.41 -22.1,4.45 -8.15,4.01 -7.22,9.27 -5.43,14.66 -1.15,7.76 -5.31,2.37 0.14,2.01 -5.43,3.81 -0.54,5.71 -10.03,5.44 -2.06,3.08 -8.56,-2.6 -4.44,4.94 -6.51,2.17 -1.53,-6.61 -5.85,-2.81 -2.46,2.69 -18.78,-0.56 -2.48,4.04 -0.73,-1.46 -2.52,0.98 -7.647,-2.34 -4.716,2.7 0.148,2.43 -8.608,0.97 -1.482,-6.73 -4.436,-4.33 -4.515,0.53 -0.769,2.4 -5.815,1.76 -4.983,-2.81 -2.649,2.17 -5.157,-4.13 -9.731,-0.73 -8.558,1.71 -1.133,1.94 -4.064,-1.71 -4.832,1.43 -7.328,-0.97 -2.894,2.14 -11.566,-0.38 -8.248,5.04 -10.803,-2.32 -5.493,1.3 -4.338,-1.85 -5.24,3.22 -4.93,-0.47 -10.923,7.24 -5.879,7.91 -1.536,7.07 3.916,2.39 -3.867,1.43 -1.062,-2.14 -3.511,-0.11 -1.308,2.72 1.46,2.33 -1.917,1.57 -1.88,-2.32 -2.972,0.34 -1.859,4.89 -1.695,-0.2 -0.23,-1.97 -7.821,-2.31 -8.27,0.24 0.125,2.38 -5.392,0.37 -2.957,2.14 -0.521,2.84 1.907,0.91 -3.119,2.83 -14.838,6.15 -2.087,3.73 -0.177,3.13 1.613,1.31 -1.35,1.11 -3.576,-1.54 -8.218,2.79 -0.286,1.71 2.096,1.27 -0.331,1.22 -0.87,0.94 -4.44,-2.33 -3.682,2.05 -4.546,-1.3 -1.523,2.22 -3.527,-0.29 1.872,2.76 1.846,0.17 -0.663,-1.6 0.513,-0.75 1.233,3.02 3.084,-0.25 0.996,1.21 -2.366,-0.55 -1.364,1.74 -13.913,-5.02 -2.155,1.11 -0.258,4.3 -1.496,-0.07 -2.577,-2.68 -4.046,0.05 -6.488,-4.13 -1.96,1.45 -7.245,-1.53 -1.907,2.58 -10.137,-2.48 -1.914,2.65 -8.041,-2.95 -7.283,2.73 -5.093,-3.34 -2.691,0.7 -12.14,-8.31 -13.069,-2.01 -2.541,-6.77 -7.108,-7.44 -10.976,-9.54 -10.088,-5.81 -10.465,-1.91 -4.48,3.89 -5.776,-7.25 0.805,-3.26 -2.521,-5.85 -0.797,-13.8 1.27,-4.11 -1.338,-5.45 2.821,-4.02 -1.304,-5.96 10.612,7.78 8.937,-1.61 10.035,-10.22 3.657,-9.01 2.132,-0.86 0.377,-13.07 -4.036,-22.79 1.106,-4.73 6.23,-7.22 -1.759,-6.14 1.549,-2.48 -3.028,-3.58 2.732,0.21 1.991,-4.41 -2.643,-8.14 1.395,-1.82 -0.03,-10.59 -3.39,-10.79 -12.863,-21.74 -6.744,-17.58 -6.469,-8.54 -6.929,-18.11 -1.97,-11.08 1.165,-2.5 -2.541,-2.44 0.393,-5.68 -2.467,-4.78 1.466,-7.9 -1.303,-13 2.083,-10.87 -6.597,-21.49 -15.556,-18.91 2.03,-1.25 -0.124,-5.63 -4.281,-9.51 -10.918,-14.92 -7.812,-6.92 -3.644,-14.74 3.039,-8.12 -0.637,-3.22 -9.774,-23.64 -20.019,-31.46 -15.123,-15.22 -1.007,-5.95 -6.375,-7.98 5.5,2.22 0.477,2.83 1.541,-12.65 1.442,18 1.541,-0.35 0.65,3.82 1.657,1.07 -2.378,-6.58 -0.961,-0.03 2.635,-4.91 -1.197,-10.93 7.51,19.4 -1.558,6.35 1.384,-0.46 1.314,-5.98 -1.807,-2.91 2.277,-1.73 2.101,12.63 -0.997,3.89 2.57,1.81 -0.721,-5.29 1.088,-1.27 0.121,2.5 0.27,0.27 0.475,-4.23 -0.26,6.05 0.863,2.71 0.624,-1.39 0.515,0.09 0.016,4.39 2.151,-0.69 -0.952,-3.4 2.714,0.9 1.625,-1.7 2.017,1.33 3.951,-5.76 -0.116,-9.71 -4.359,-4.65 -5.767,-1.95 -3.535,-6.53 -2.129,-0.21 -1.114,-8.44 -5.155,-7.66 0.927,-1.46 -0.329,-4.13 -1.46,0.01 1.298,4.24 -2.885,-3.39 0.921,-5.53 4.158,-6.84 0.744,5.84 2.948,0.72 1.332,5.23 6.052,4.43 -0.003,4.16 2.11,0.59 -1.447,7.55 -1.809,1.76 1.49,7.96 -1.317,0.7 2.645,-0.82 1.076,1.67 2.065,-2.02 1.153,-3.54 0.129,1.29 0.404,-1.07 0.936,-1.16 1.082,-2.16 -0.342,-6.44 1.956,2.09 -1.099,2.95 0.911,4.88 1.93,1.15 -0.697,3.42 2.027,7.76 5.463,6.96 7.018,-5.3 1.439,-3.32 -2.595,-7.43 1.851,-3.43 0.097,2.58 1.543,-1.13 -3.156,-9.03 1.25,-0.82 0.271,1.03 1.128,0.29 1.065,-0.58 0.08,-5.28 -13.808,-15.05 -9.836,-24.81 -7.509,-7.27 -0.635,-4.25 1.565,-2.13 -3.797,-3.12 0.186,-7.03 -10.284,-12.8 -1.477,-5.78 -0.492,-10.4 2.796,-2.34 -1.114,-7.69 1.921,-1.62 0.61,-6.37 7.513,-14.81 8.669,-8.44 0.858,-10.05 -1.785,-9.64 2.734,-2.13 0.72,-6.98 -3.729,-11.01 -4.456,-2.15 0.838,-2.9 -1.701,-4.71 8.765,-15 5.93,-18.26 4.748,-6.69 7.662,-3.4 1.122,1.44 -2.215,2.81 -3.607,15.77 2.773,5.9 -0.904,3.82 3.293,-1.42 -2.96,9.29 3.146,2.68 2.294,-3.61 4.386,-1.24 0.766,3.88 0.021,-1.42 2.789,1.02 1.406,-1.58 -1.237,-1.55 1.641,-6.67 1.278,-2.98 1.931,-0.07 -1.554,-1.15 2.512,-3.07 -1.846,-1.53 3.089,-0.12 0.153,-4.99 h 1.801 l 0.999,-3.55 2.196,-0.93 1.877,-7.69 13.993,-8.56 7.08,-0.35 3.035,-2.71 1.939,0.53 3.18,-2.42 0.831,1 1.181,-2.16 3.407,0.8 7.036,-5.016 3.542,-0.308 0.392,-2.431 7.189,-7.334 10.111,-4.799 -0.558,-1.305 4.41,-6.845 13.788,-5.579 1.27,-7.798 4.68,2.386 2.722,-2.109 7.505,-1.276 1.985,-3.414 12.577,-6.53 -0.986,-0.644 3.405,-5.023 2.961,-0.165 -3.904,7.575 4.026,3.117 11.804,-5.359 1.899,1.612 0.359,-1.4 2.392,-1.938 0.863,2.148 -1.25,1.602 5.703,4.048 13.699,-1.505 -0.117,1.553 0.54,-1.757 4.898,-2.307 -1.412,0.936 -0.121,0.459 1.321,-0.507 -0.705,1.697 1.473,0.348 1.268,-2.665 1.245,1.524 5.652,-1.175 -1.963,-0.516 6.503,-4.268 -0.854,-1.816 1.6,1.344 0.403,-1.8 1.153,1.276 1.749,-0.9 -0.214,-1.378 -1.485,0.634 0.997,-1.645 -1.586,1.087 0.494,-2.544 1.282,0.611 11.369,-8.428 0.98,1.288 -0.811,-0.789 -0.621,0.293 -0.035,0.445 0.6,-0.676 0.022,0.506 0.707,0.283 0.118,0.422 -1.824,0.762 2.12,-0.355 -0.344,0.494 -0.145,0.995 1.016,-1.787 5.407,-0.302 -1.554,-0.913 3.015,-1.021 0.918,2.4 2.8,-1.873 3.807,0.622 -0.519,-1.189 4.34,-1.893 0.318,2.428 2.679,0.182 -2.415,-1.423 1.313,-1.613 3.558,3.065 4.517,-3.03 3.705,0.017 1.05,-3.096 6.155,-5.639 1.824,-4.963 3.917,-1.11 1.649,-3.049 3.203,2.871 2.441,0.629 -1.836,-0.867 -0.029,-2.782 15.74,2.67 5.169,4.061 6.915,-4.636 -0.515,2.499 3.303,-1.058 -1.253,-2.47 1.792,-1.121 5.366,0.763 19.419,-3.63 20.785,-7.216 23.145,-11.069 13.327,-11.683 9.421,-13.269 2.586,-8.813 1.316,0.402 1.15,-0.553 -1.268,0.363 1.407,-4.234 2.1,-2.77 0.461,0.057 -0.14,0.849 0.232,0.064 0.123,-3.719 -1.965,-3.295 6.464,-0.085 2.699,-2.518 -0.086,-2.647 -3.23,-1.816 3.236,-3.884 -0.148,1.833 0.537,-0.421 0.887,-4.261 2.986,1.111 3.925,-1.753 6.143,-6.13 7.165,-4.112 0.778,-2.466 5.28,-1.712 2.903,-3.017 0.41,-6.834 -6.699,-2.022 -2.287,3.051 -1.672,-1.882 1.973,-5.409 -0.695,-10.185 -2.864,-6.707 1.474,-15.979 1.99,-1.25 0.805,-2.901 1.327,-1.552 3.542,0.072 -1.621,-1.042 1.353,-0.039 0.29,-0.189 -0.837,-1.232 -2.644,0.399 5.949,-6.572 5.434,-3.298 -2.03,2.532 2.63,-0.11 -0.05,-4.664 1.46,3.214 1.03,-0.36 1.39,0.791 0.96,-0.361 1.57,0.84 0.53,-0.325 -4.12,-6.896 1.97,-0.043 -0.95,-1.654 1.38,-2.323 3.05,2.072 6.3,-2.936 -0.77,1.405 1.62,-1.117 0.69,1.089 -0.26,-1.303 1.48,1.444 1.88,0.952 -0.38,-2.554 -3.3,-0.484 0.45,-2.122 -2.23,-0.675 1.55,-4.999 2.04,-2.417 -0.8,1.417 4.7,-2.225 -1.59,-0.942 2.65,-1.297 1.1,-5.317 3.28,-0.459 -0.28,1.342 0.49,-1.385 2.48,-1.12 -1.27,2.498 3.26,1.855 -1.67,1.795 -3.26,-0.465 -0.62,2.736 1.94,0.662 -2.82,2.776 2.21,1.165 -0.04,2.095 1.45,-1.949 0.81,0.902 0.63,3.728 1.74,-1.394 0.54,2.379 2.36,-1.109 -1.91,5.116 3.09,1.838 -0.64,5.74 6,4.683 1.43,5.157 4.88,7.118 0.49,4.102 6.39,5.503 3.48,8.926 1.04,-3.696 -1.88,-5.912 4.3,-11.941 -3.3,-8.105 3.39,-1.802 11.28,11.662 2.63,-0.253 -4.36,-4.154 -1.74,-7.026 8.56,-8.148 -0.42,-1.843 -0.49,1.825 -7.67,3.211 -4.45,-8.55 -4.93,-3.933 -6.04,-1.11 3.74,-1.804 -0.56,-1.986 2.72,-1.821 -4.68,-0.532 0.85,1.482 -1.29,-0.316 -0.32,1.698 0.1,-1.576 -2.39,-2.694 -2.08,-0.377 0.01,-0.662 3.57,0.841 -1.21,-2.39 8.91,3.222 -3.16,-1.69 4.21,-0.401 -8.29,-3.815 4.04,0.412 -3.73,-1.95 -0.11,-0.595 8.22,3.026 1.67,-1.169 -3.57,-3.117 1.8,1.428 2.8,-0.589 -4.71,-4.394 -1.5,1.733 -2.55,-2.126 2.58,-1.023 -1.22,-1.008 2.13,0.886 -3.15,-4.508 7.19,-1.428 0.42,2.099 0.09,-1.95 1.33,0.157 -1.33,-1.508 3.55,2.247 2.31,2.63 -2.26,-0.188 1.23,1.217 0.1,1.298 -0.71,-1.073 -2.25,1.085 2.93,2.835 3.66,0.63 0.53,2.672 -2.08,-1.25 1.82,4.973 -0.21,-1.834 1.73,0.534 -0.82,-3.711 1.29,0.497 -1.22,-1.079 1.64,0.504 -1.27,-0.992 -0.47,-1.592 5.45,3.562 -2.83,-3.901 3.49,-0.316 -4.42,-3.237 -0.32,-1.136 4.73,2.919 9.42,2.376 1.22,5.167 6.45,0.515 -0.3,2.885 3.62,-1.346 1.43,3.561 -1.21,1.238 1.56,0.188 0.41,-2.041 1.98,-0.161 -3.4,-1.387 -0.73,-2.921 -2.23,0.511 -0.56,-0.415 3.94,-6.619 -1.35,-0.941 1.2,-1.363 -1.53,-1.269 0.52,-2.233 2.42,-0.352 0.53,-6.092 1.71,0.717 -0.99,1.285 2.93,3.332 -0.32,2.218 2.76,-4.642 2.03,0.426 2.45,-1.474 -3.04,0.515 -0.45,-5.841 2.45,-4.267 -1.08,-1.239 2.58,-2.366 1.42,1.892 1.2,-4.009 1.95,0.44 -1.96,-3.859 -1.52,1.849 1.55,-2.339 -3.79,2.029 -7.16,11.683 0.84,-3.356 -1.88,0.383 -0.1,-2.994 0.21,0.412 1.08,-0.193 -2.02,-1.91 0.82,-1.813 -0.74,-1.895 -1.23,4.579 -1.57,-0.35 -1.22,-7.833 0.52,0.729 1.47,0.074 0.7,-1.13 -2.09,0.78 -1.5,-2.899 2.3,0.511 0.09,-2.366 0.38,1.613 0.46,0.345 1.41,-0.921 -1.23,-1.797 1.19,-0.444 -0.13,-1.223 -2.57,1.311 0.66,-3.611 3.62,-2.762 0.51,1.031 0.67,0.509 0.1,-0.152 -0.96,-1.981 -2.28,0.627 3.63,-1.56 5.81,3.045 -0.57,-3.187 1.46,-2.214 1.5,3.926 0.1,-5.21 3.61,-2.081 -4.35,-0.366 -0.01,-1.607 2.38,-0.218 -2.09,-1.292 0.38,-2.225 1.41,1.248 0.19,-1.335 3.45,2.602 -1.81,2.197 0.9,0.603 1.57,-3.207 2.53,1.682 -0.48,-0.75 1.29,-0.686 0.05,2.894 6.89,3.018 1.27,2.074 -2.67,1.436 0.04,0.749 2.28,-0.655 -0.49,1.543 0.66,0.247 0.99,-2.084 -0.85,2.475 0.79,1.44 2.95,-4.573 0.92,-5.574 2.94,-0.477 0.74,-1.899 -3.76,1.501 1.56,-4.438 -0.98,1.621 -1.2,-2.045 0.44,3.425 -2.91,-1.973 -6.03,4.323 -2.08,-2.694 1.42,-2.59 1.03,0.728 0.24,-2.205 2.05,-0.906 2.06,1.585 2.65,-4.142 -2.22,-0.531 -1.1,2.316 -1.19,-1.795 0.05,2.354 -1.89,-1.116 0.45,1.375 -3.57,2.607 0.84,-1.688 -1.21,0.711 -0.24,-2.603 1.69,-1.149 -3.08,0.519 -0.2,-1.297 4.02,-2.783 3.36,1.523 1.93,-2.234 0.99,1.057 0.93,-1.932 -1.68,-5.181 3.96,0.235 -1.65,2.777 0.91,1.62 2.56,-1.247 1.98,5.763 6.19,-2.876 0.07,2.462 2.76,1.032 7.7,-0.434 -6.5,-2.481 2.24,-1.037 0.1,-1.347 -1.83,-0.069 2.82,-2.181 -1.84,0.583 -2.44,-2.444 -2.76,0.718 0.92,-2.062 -2.57,0.938 -0.16,-1.882 -2.07,1.355 2.26,-3.712 2.02,2.037 2.06,-2.981 -2.48,-1.558 -2.69,0.779 0.71,-1.763 -0.26,-0.152 -1.79,1.772 -1.36,-2.026 0.92,-2.232 -2.95,-0.976 0.68,-1.817 1.93,0.297 -0.72,-1.709 1.57,0.82 0.08,-2.832 2.59,1.304 -0.07,-1.884 2.5,-0.419 -2.71,-1.035 0.06,-1.956 2.3,-1.919 1.26,1.414 0.86,-3.352 1.29,-0.88 -0.63,4.213 2.93,-2.05 1.03,5.115 0.38,-2.502 1.38,0.57 -0.58,-1.393 1.63,-0.595 -0.89,-1.734 1.31,1.323 -0.15,-2.192 1.67,-1.013 2.12,0.777 -1.74,2.102 0.38,0.517 3.39,-0.067 -1.4,-1.046 2.16,-1.728 -1.34,-0.262 1.81,-6.4 -1.79,-0.842 0.54,-5.125 -1.32,-0.648 2.91,-1.496 2.03,2.947 3.28,-0.354 -1.73,2.301 1.53,0.876 -2.99,-0.536 -0.94,2.892 1.95,6.048 -2.19,7.937 3.14,-8.471 5.09,-2.411 -0.05,1.86 2.97,-0.218 -2.2,1.206 1.72,2.044 -1.02,2.623 4.37,4.022 1.21,-0.934 -1.79,-3.547 0.94,-2.093 2.32,-0.961 1.87,1.907 0.8,-1.894 1.86,0.542 -1.64,-6.307 -1.8,0.435 -0.46,-1.399 5.88,-2.244 -1.85,-5.171 4.2,-1.213 1.42,-2.929 -1,-0.997 1.5,-0.618 -3.43,-3.752 -3.78,1.031 -2.08,-1.433 -0.88,-1.522 0.4,-2.654 1.38,4.028 0.87,-2.595 1.54,0.527 -1.79,-1.584 0.85,-0.817 3.39,3.159 0.24,-3.413 -5.11,-2.664 2.78,0.864 1.68,-2.536 -0.48,2.681 2.46,-0.063 0.09,-1.359 1.27,-0.21 -1.69,2.608 1.71,0.327 -1.46,0.894 -1.11,2.203 4.06,-3.205 1.51,-0.029 -3.76,2.525 2.97,-0.748 0.88,2.236 -3.01,0.779 -0.56,0.531 0.07,0.674 2.15,-0.74 -1.13,0.845 -0.24,1.71 2.55,-2.011 -1.49,4.819 3.02,0.468 -1.44,3.243 1.98,0.139 0.99,-1.707 -0.14,1.566 1.63,-0.155 3.15,-2.328 -3.32,-2.723 0.89,-2.212 1.6,0.036 -0.56,-2.555 3.14,0.104 2.33,-3.689 1.27,1.262 1.74,-2.611 3.98,-0.899 -6.4,7.628 1.54,1.381 2.45,-1.491 -1.38,2.59 0.85,1.446 2.86,-0.939 -0.25,4.101 1.93,1.016 0.28,-2.97 2.33,-0.354 -0.34,-5.134 2.34,0.754 0.23,2.317 1.54,-3.704 2.08,-0.805 -0.46,-2.063 -2.74,0.525 0.22,-2.55 5.47,1.308 2.4,-1.401 -1.69,-1.091 2.54,0.822 -3.48,-1.921 -3.25,-7.482 3.86,-1.131 1.36,2.562 1.57,-0.95 -1.14,-2.169 3.7,0.953 1.19,-0.454 -1.57,-1.403 2.29,0.024" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path230"
                d="m 506.999,1225.53 4.023,14.29 2.395,1 -1.552,1.94 0.535,3.08 1.65,-1.91 2.719,5.22 0.953,3.9 -1.137,3.15 -13.084,-21.22 -2.433,-10.82 2.225,-5.9 3.112,0.84 -0.89,2.25 1.484,4.18" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path232"
                d="m 630.069,965.078 -1.436,-1.638 -1.401,1.461 -0.628,-2.624 6.923,-9.678 1.49,0.823 0.357,4.63 -5.305,7.026" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path234"
                d="m 1110.03,664.418 1.61,-1.235 -2.14,-0.61 4.02,-2.504 -0.79,3.684 1.77,-0.109 -0.52,1.628 3.93,3.049 -6.98,2.568 -0.43,-1.142 1.44,0.367 -0.12,-1.088 2.67,-1.656 0.07,-0.69 -1.92,1.045 -1.4,-1.669 0.38,1.381 -1.6,0.672 0.29,-1.625 -1.25,2.023 -1.07,0.029 0.93,-2.255 -1.19,-0.335 2.3,-1.528" />
                <path
                style={{vectorEffect: 'none', fillRule: 'evenodd'}}
                id="path236"
                d="m 1145.44,617.73 1.98,2.309 -1.87,3.413 1.77,2.537 -3.6,2.624 -2.79,-1.627 0.18,-4.253 2.92,1.044 -1.77,-3.833 3.18,-2.214" />
                {Boolean(waText) &&
                    <text
                    xmlSpace="preserve"
                    className={css({textAnchor: "middle", fontFamily: 'sans-serif', fontSize: '80px', whiteSpace: 'pre', display: 'inline', fill: waTextColour || borderColour, stroke: waTextColour || borderColour, strokeWidth: 1.00157})}
                    x="970"
                    y="1200">
                        <tspan
                            x="970"
                            y="1200"
                        >
                            {waText}
                        </tspan>
                    </text>
                }
            </g>
        </svg>
    );
});