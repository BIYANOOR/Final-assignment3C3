import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    let name = " My name is : Sobia Furqan";
    let Age = "I am 36 years old";
    let myApp = " My App is about grid system ,use state ,Hooks and props parsing in next.js";

    return (
        <div className="mt-10 text-center">
            <ChildComponent name={name} />
            <ChildComponent Age={Age} />
            <ChildComponent myHobby={myApp} />
        </div>
    );
};

export default ParentComponent;
