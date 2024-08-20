import React, { useState } from "react";

const TrainBotSection = () => {
  const [problem, setProblem] = useState("");
  const [target, setTarget] = useState("");
  const [solution, setSolution] = useState("");

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setter(value);
    }
  };

  return (
    <>
      <div className="text-white p-8 rounded-lg shadow-lg ">
        <div className="mb-4">
          <label htmlFor="project" className="text-2xl font-bold text-white mb-6 ">
            Current Project
          </label>
          <div className="flex justify-between items-center">
            <select
              id="project"
              className="w-2/3 px-4 py-2 rounded-md bg-customgrad focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" // Changed here
            >
              <option>Weightlifting Products</option>
              <option>Test Products</option>

              {/* Other options would be mapped here if they come from a state or props */}
            </select>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl">
              + Create a New Project
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-5">Train your Bot</h2>
        <p className="text-secondary mb-4">
          What would you like to know about you to provide better responses?
        </p>
        <div className="bg-custom p-8 rounded-md">
          {" "}
          <form>
            <div className="mb-4">
              <label htmlFor="problem" className="block font-bold mb-2">
                What problem do you solve?
              </label>
              <textarea
                id="problem"
                className="w-full p-4 text-white bg-customgrad border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-md"
                placeholder="Type here"
                value={problem}
                onChange={handleInputChange(setProblem)}
                rows="2"
              />
              <span className="ml-2 text-gray-400">{problem.length}/200</span>
            </div>

            <div className="mb-4">
              <label htmlFor="target" className="block font-bold mb-2">
                Who do you help?
              </label>
              <textarea
                id="target"
                className="w-full p-4 text-white bg-customgrad rounded-md border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Type here"
                value={target}
                onChange={handleInputChange(setTarget)}
                rows="2"
              />
              <span className="ml-2 text-gray-400">{target.length}/200</span>
            </div>

            <div className="mb-8">
              <label htmlFor="solution" className="block font-bold  mb-2 ">
                How do you help solve this problem?
              </label>
              <textarea
                id="solution"
                className="w-full p-4 text-white bg-customgrad border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-md"
                placeholder="Type here"
                value={solution}
                onChange={handleInputChange(setSolution)}
                rows="2"
              />
              <span className="ml-2 text-gray-400">{solution.length}/200</span>
            </div>

            <div className="flex justify-end">
              {" "}
              {/* This div will align the button to the right */}
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-custom">
        {/* Content for the custom background container */}
      </div>
    </>
  );
};

export default TrainBotSection;
