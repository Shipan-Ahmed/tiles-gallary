"use client";

import { useState } from "react";
import TilesCard from "@/Components/TilesCard";
import { SearchField, Label, Button, Card } from "@heroui/react";
import { MdOutlineHourglassEmpty } from "react-icons/md";

export default function TilesClient({ tiles }) {
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");

    // 🔍 filter only using "search"
    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    // 👉 when button clicked
    const handleSearch = () => {
        setSearch(inputValue);
    };

    return (
        <div className="m-10">

            {/* 🔷 Search */}
            <div className="flex justify-end items-center mt-10 gap-2">
                <SearchField>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            className="w-[250px]"
                            placeholder="Search..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <SearchField.ClearButton onClick={() => {
                            setInputValue("");
                            setSearch("");
                        }} />
                    </SearchField.Group>
                </SearchField>

                {/* Search Button */}
                <Button color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>

            {/* 🔷 Tiles */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTiles.length > 0 ? (
                    filteredTiles.map((tile) => (
                        <TilesCard key={tile.id} feature={tile} />
                    ))
                ) : (
                        <Card className="text-center col-span-full flex flex-col items-center gap-4 p-10">
                            <MdOutlineHourglassEmpty className="text-5xl text-gray-400" />
                            <p className="text-gray-400">No tiles found matching "{search}"</p>
                        </Card>
                    
                )}
            </div>
        </div>
    );
}