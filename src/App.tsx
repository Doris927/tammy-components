import React from 'react';
import Button, { ButtonType, ButtonSize} from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button>test</Button>
        </div>
        <div>
          <Button
            btnType={ButtonType.Primary}
            size={ButtonSize.Large}
          >test</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
