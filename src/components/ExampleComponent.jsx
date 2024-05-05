import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Build Your Website With Easy Cloud", // Types 'One'
        3000, // Waits 1s
        "Build Your Website With Reliable Web Solutions", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "Build Your Website With Scalable Server Options", // Types 'Three' without deleting 'Two'
        3000,
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      //   style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};

export default ExampleComponent;
