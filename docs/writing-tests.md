---
title: Writing Tests
---

## React
Be sure to add `@testing-library/react: 12.0.0` to package.json

### Check that the textContent is correct

```jsx
import { render } from '@testing-library/react'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
    it('displays the correct text content.', () => {
        const { getByRole } = render(<MyComponent prop='' />)
        const role = getByRole('role')
        expect(role.textContent).toBe('All work and no play makes Jack a dull boy.')
    })
})
```

### Check that a prop is passed and rendered

```jsx
import { render } from '@testing-library/react'
import { Square } from './Game'

describe('Square', () => {
    it('renders a value', async () => {
        const { findByText } = render(<Square value={1} />)
        const myValue = await findByText(1)
        expect(myValue.textContent).toBe("1")
    })
})
```

### Check the state of a component

```jsx
import { Square } from './Game'

describe('Square', () => {
    it('has the correct state', () => {
        const mySquare = new Square()
        expect(Object.keys(mySquare.state)).toContain('value')
        expect(mySquare.state.value).toBe(null)
    })
})
```

### Check the value of a class function

```jsx
import { Board } from './Game'

describe('Board', () => {
    it('has the correct state', () => {
        const myBoard = new Board()
        const renderSquareString = myBoard.renderSquare.toString()
        expect(renderSquareString).toContain(`value: this.state.squares[i]`)
    })
})
```

### fireEvent example

```jsx
import { render, fireEvent } from '@testing-library/react'
import { Board } from './Game'

describe('Board, handleClick', () => {
	it('updates xIsNext boolean', () => {
		const { container, getByText } = render(<Board />)
		const boardRow = container.querySelector('.board-row')
		fireEvent.click(boardRow.firstChild)
		expect(getByText('X')).toBeDefined()
	})
})
```