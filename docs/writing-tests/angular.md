Be sure to add `@testing-library/angular: 10.9.0` to package.json

### Test a component is rendered

```ts
import { TestBed } from "@angular/core/testing";
import { render, screen, fireEvent } from "@testing-library/angular";
import { CounterComponent } from "./counter.component";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

describe("Counter", () => {
  beforeEach(() => {
    TestBed.resetTestEnvironment(); // new
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );

    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  });

  it("should render counter", async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 }
    });

    expect(screen.getByText("Current Count: 5")).toBeDefined();
  });
});

```