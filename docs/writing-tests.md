---
title: Writing Tests
---

## React
Be sure to add `@testing-library/react: 12.0.0` to package.json

### Helpful snippets

Render a component and check that the textContent is correct
```
import { render } from '@testing-library/react'

import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
    it('does something', () => {
        const { getByRole } = render(<MyComponent prop='' />)
        const role = getByRole('role')
        expect(role.textConten).toBe('All work and no play makes Jack a dull boy.')
    })
})
```