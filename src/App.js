import { SectionWrapper, Form } from './components';
import assets from './assets';
import styles from './styles/Global';


const App = () => {
  return (
    <>
      <SectionWrapper
        title="Image Caption Generator"
        description="Click, Select & Upload. It's that simple and generate a caption. Join 25+ million people using our product."
        mockupImg={assets.statue}
        banner="banner"
      />

      <Form />


      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
          <span className="bold">Muhammad Hamza Faisal</span>
        </p>
      </div>
    </>
  );
}

export default App;