"use client";

import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";

type Product = {
  id: number;
  name: string;
  status: "Approved" | "Pending" | "Denied";
  sku: string;
  stock: number;
  price: number;
  cost: number;
  visibility: "Active" | "Inactive";
  image: string;
};

const productsData: Product[] = [
  {
    id: 1,
    name: "Lavender Soap Bars",
    status: "Approved",
    sku: "12345678",
    stock: 3,
    price: 6.78,
    cost: 3.55,
    visibility: "Active",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Cold-pressed Rosemary Oil",
    status: "Pending",
    sku: "12345678",
    stock: 5,
    price: 9.34,
    cost: 4.75,
    visibility: "Active",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Handmade Cocoa Butter",
    status: "Denied",
    sku: "12345678",
    stock: 3,
    price: 8.46,
    cost: 4.15,
    visibility: "Inactive",
    image: "https://via.placeholder.com/50",
  },
];

const statusColors: Record<Product["status"], string> = {
  Approved: "bg-green-700 text-white",
  Pending: "bg-gray-500 text-white",
  Denied: "bg-red-700 text-white",
};

const visibilityColors: Record<Product["visibility"], string> = {
  Active: "bg-green-800 text-white",
  Inactive: "bg-gray-400 text-white",
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelected(products.map(p => p.id));
  const deselectAll = () => setSelected([]);
  const deleteSelected = () => {
    setProducts(products.filter(p => !selected.includes(p.id)));
    setSelected([]);
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            placeholder="Search by product, tags, categories"
            type="search"
            className="py-[10px] pl-4 outline-0 border-2 border-[#274F45] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[700px]"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#274F45] h-[45px]"></div>
        </div>
        <div className="flex gap-x-8 items-center">
          <h4 className="text-black text-[14px] font-sans font-medium">
            Import
          </h4>
          <h4 className="text-black text-[14px] font-sans font-medium">
            Export
          </h4>
          <button className="h-[60px] rounded-[8px] bg-[#E48872] text-[18px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872] w-[190px]">
            Add Product
          </button>
        </div>
      </div>
      <div className="mt-10">
        {/* Bulk action bar */}
        {selected.length > 0 && (
          <div className="flex justify-between items-center bg-[#F4F4F4] p-3 mb-4 rounded">
            <span className="font-medium">{selected.length} Selected</span>
            <div className="flex gap-6">
              <button onClick={deselectAll} className="text-gray-700">
                Deselect All
              </button>
              <button onClick={selectAll} className="text-blue-600">
                Select All
              </button>
              <button className="text-gray-700">Export</button>
              <button onClick={deleteSelected} className="text-red-600">
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th />
              <th>Product</th>
              <th>Approval Status</th>
              <th>SKU</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Visibility</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(p => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => toggleSelect(p.id)}
                  />
                </td>
                <td className="flex items-center gap-3 py-2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 rounded"
                  />
                  {p.name}
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      statusColors[p.status]
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td>{p.sku}</td>
                <td>{p.stock}</td>
                <td>${p.price.toFixed(2)}</td>
                <td>${p.cost.toFixed(2)}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      visibilityColors[p.visibility]
                    }`}
                  >
                    {p.visibility}
                  </span>
                </td>
                <td className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === p.id ? null : p.id)}
                  >
                    <FiMoreVertical />
                  </button>
                  {openMenu === p.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 z-10"
                    >
                      <button
                        onClick={() => setOpenMenu(null)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setOpenMenu(null)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Duplicate
                      </button>
                      <button
                        onClick={() => setOpenMenu(null)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Edit Meta Tags
                      </button>
                      <button
                        onClick={() => {
                          setProducts(products.filter(x => x.id !== p.id));
                          setOpenMenu(null);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <span>
            {filteredProducts.length} of {products.length} products
          </span>
          <div className="flex gap-2">
            <button>{"<<"}</button>
            <button>{"<"}</button>
            <span>Page 1 of 1</span>
            <button>{">"}</button>
            <button>{">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
