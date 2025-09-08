import React, { useState } from "react";
import CarViewer from "../components/CarViewer";

const carData = {
  Toyota: {
    Supra: ["Wheel", "Engine", "Door"],
    Camry: ["Wheel", "Engine", "Trunk"],
    Corolla: ["Wheel", "Engine", "Hood"],
  },
  BMW: {
    M3: ["Wheel", "Engine", "Door"],
    X5: ["Wheel", "Engine", "Roof"],
    i8: ["Wheel", "Battery", "Door"],
  },
};

export default function HomePage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [highlightedPart, setHighlightedPart] = useState("");

  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="col-span-1 border-r pr-4">
        <h2 className="text-xl font-semibold mb-2">Select Car</h2>

        {/* Brand selector */}
        <select
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            setSelectedModel("");
            setHighlightedPart("");
          }}
          className="border rounded p-2 w-full mb-2"
        >
          <option value="">-- Select Brand --</option>
          {Object.keys(carData).map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Model selector */}
        <select
          value={selectedModel}
          onChange={(e) => {
            setSelectedModel(e.target.value);
            setHighlightedPart("");
          }}
          className="border rounded p-2 w-full mb-4"
          disabled={!selectedBrand}
        >
          <option value="">-- Select Model --</option>
          {selectedBrand &&
            Object.keys(carData[selectedBrand]).map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>

        {/* Parts list */}
        {selectedBrand && selectedModel && (
          <>
            <h2 className="text-lg font-semibold mb-2">Parts</h2>
            <ul className="space-y-2">
              {carData[selectedBrand][selectedModel].map((part) => (
                <li
                  key={part}
                  onClick={() => setHighlightedPart(part)}
                  className={`cursor-pointer p-2 rounded ${
                    highlightedPart === part ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {part}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Main Viewer */}
      <div className="col-span-3">
        <CarViewer
          brand={selectedBrand}
          model={selectedModel}
          highlightedPart={highlightedPart}
        />
      </div>
    </div>
  );
}
