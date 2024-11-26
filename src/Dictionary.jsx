import magnifyingGlass2x from './assets/magnifying-glass-2x.png';
import character from './assets/character.png';
import dictionary from './assets/dictionary.png';

function Dictionary() {
  return (
    <>
      <div className="TD-outer-frame">
        <a href="https://www.techcareer.net/dictionary">
          <div className="TD-inner-frame">
              <div className="TD-header">
                  <h1>TEKNİK SÖZLÜK</h1>
              </div>
              <div className="TD-SearchBar">
                  <div className="TD-SearchBar-icon"></div>
                      <img src={magnifyingGlass2x} alt="mag-glass"/>
                  <div className="TD-SearchBar-background">
                      <div className="TD-SearchBar-Input">
                          <input type="text" placeholder="Arama"/>
                      </div>
                  </div>
              </div>
              <div className="TD-Span">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorem a quibusdam.ficia voluptatem quidem.
              </div>
              <div className="TD-Pictures">
                  <div className="TD-Left-Pic">
                      <img src={character} alt="left pic"/>
                  </div>
                  <div className="TD-Right-Pic">
                      <img src={dictionary} alt="right pic"/>
                  </div>
              </div>
          </div>
        </a>
    </div>
    </>
  );
}

export default Dictionary