# AusStateSelector
## Description
This React component shows a map of Australia divided by states with the ability to click and hover over states. States can have 
separately defined colours and hover colours.

**NB:** the word *Colour* is spelt with a "u" throughout this package as that is how it
is spelt in Australia

## Installation
`npm install @mattyreacts/aus-state-selector`

## Acknowledgements
The SVG map of Australia used in this control has been adapted from [Wikimedia Commnons](https://commons.wikimedia.org)
[Australia States Map - Colours with White Borders](https://commons.wikimedia.org/wiki/File:Australia_States_Map_-_Colours_with_White_Borders.svg)
originally published by [DavidEye](https://commons.wikimedia.org/wiki/User:DavidEye) under the [Creative Commons](https://en.wikipedia.org/wiki/en:Creative_Commons)
[Attribution-Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license.

## Demo
Video - https://github.com/mattyreacts/publicimages/raw/refs/heads/main/AusStateSelector.mp4

![Screenshot](https://github.com/mattyreacts/publicimages/blob/e6e9517fb6e87ea47358ad114fe5e82a3c79c070/AusStateSelector.png "Screenshot")

## Usage
### Exported Types
#### State
```ts 
type State = 'WA' | 'NT' | 'SA' | 'QLD' | 'NSW' | 'ACT' | 'VIC' | 'TAS';
```

#### State Colours
These are the state colours that are used for sporting teams, representation, etc of each state in Australia

```ts
enum StateColours {
    WA = '#ffd700',
    NT = '#c25e03',
    SA = '#ff0000',
    QLD = '#73182c',
    NSW = '#87ceeb',
    ACT = '#232323',
    VIC = '#000080',
    TAS = '#006b54'
}
```
### Sizing
The component renders an SVG with width and height set to 100%, making its size dependent on its container. In the example below, it is contained within a div.

By default, the SVG has dimensions of 701px by 642px. While the aspect ratio doesn't need to be maintained, the SVG ensures the map's proportions remain consistent, adding extra margin as needed.

### Component Properties

All properties are optional.

| Property | Type | Description | Default Value |
|----------|------|-------------|---------------|
| onClick  | (state: State) => void \| Promise<void> | A callback for when a state is clicked | |
| onHover | (state: State) => void \| Promise<void> | A callback for when the user is hovering over a state | |
| defaultColor | string | The default colour for each state | #bbdefb (Blue100)|
| defaultHoverColour | string | The default colour to use when hovering over a state | #1976d2 (Blue700) |
| hover | boolean | If true then states will be hightlighted in their hover colour and the hover | true |
| borderWidth | number | The width of the borders on the map | 5.9 |
| borderColour | string | The colour of the borders on the map | #ffffff |
| waColour | string | Colour for Western Australia, defaultColour used if not provided | |
| waHoverColour | string | Hover colour for Western Australia, defaultHoverColour used if not provided | |
| ntColour | string | Colour for Northern Territory, defaultColour used if not provided | |
| ntHoverColour | string | Hover colour for Northern Territory, defaultHoverColour used if not provided | |
| saColour | string | Colour for South Australia, defaultColour used if not provided | |
| saHoverColour | string | Hover colour for South Australia, defaultHoverColour used if not provided | |
| qldColour | string | Colour for Queensland, defaultColour used if not provided | |
| qldHoverColour | string | Hover colour for Queensland, defaultHoverColour used if not provided | |
| nswColour | string | Colour for New South Wales, defaultColour used if not provided | |
| nswHoverColour | string | Hover colour for New South Wales, defaultHoverColour used if not provided | |
| actColour | string | Colour for Australian Capital Territory, defaultColour used if not provided | |
| actHoverColour | string | Hover colour for Australian Capital Territory, defaultHoverColour used if not provided | |
| vicColour | string | Colour for Victoria, defaultColour used if not provided | |
| vicHoverColour | string | Hover colour for Victoria, defaultHoverColour used if not provided | |
| tasColour | string | Colour for Tasmania, defaultColour used if not provided | |
| tasHoverColour | string | Hover colour for Tasmania, defaultHoverColour used if not provided | |

## Example
```tsx
"use client"
import { AusStateSelector, type State } from "@mattyreacts/aus-state-selector";
import { useCallback } from "react";

export default function Home() {
  const onHover = useCallback((state: State) => {
    console.log(`hover ${state}`);
  }, []);

  const onClick = useCallback((state: State) => {
    alert(`${state} Clicked`);
  }, []);

  return (
    <div style={{height: 900, width: 1000}}>
      <AusStateSelector onHover={onHover} onClick={onClick}/>
    </div>
  );
}
```