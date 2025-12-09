"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ProductFilterProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  category: string
  priceRange: [number, number]
  material: string
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [category, setCategory] = useState("todos")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [material, setMaterial] = useState("todos")
  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    price: true,
    material: true,
  })

  const handleFilterChange = () => {
    onFilterChange({ category, priceRange, material })
  }

  const toggleFilter = (filter: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="font-semibold text-foreground mb-4">Filtros</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <button onClick={() => toggleFilter("category")} className="flex items-center justify-between w-full mb-3">
          <span className="font-medium text-foreground">Categoria</span>
          <ChevronDown size={20} className={`transition-transform ${expandedFilters.category ? "rotate-180" : ""}`} />
        </button>
        {expandedFilters.category && (
          <div className="space-y-2">
            {["Todos", "Sofás", "Mesas", "Cadeiras", "Estantes"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat.toLowerCase()}
                  checked={category === cat.toLowerCase()}
                  onChange={(e) => {
                    setCategory(e.target.value)
                    handleFilterChange()
                  }}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm text-muted-foreground">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button onClick={() => toggleFilter("price")} className="flex items-center justify-between w-full mb-3">
          <span className="font-medium text-foreground">Preço</span>
          <ChevronDown size={20} className={`transition-transform ${expandedFilters.price ? "rotate-180" : ""}`} />
        </button>
        {expandedFilters.price && (
          <div className="space-y-3">
            <div>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange[1]}
                onChange={(e) => {
                  setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
                  handleFilterChange()
                }}
                className="w-full"
              />
            </div>
            <div className="text-sm text-muted-foreground">R$ 0 - R$ {priceRange[1].toLocaleString("pt-BR")}</div>
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div>
        <button onClick={() => toggleFilter("material")} className="flex items-center justify-between w-full mb-3">
          <span className="font-medium text-foreground">Material</span>
          <ChevronDown size={20} className={`transition-transform ${expandedFilters.material ? "rotate-180" : ""}`} />
        </button>
        {expandedFilters.material && (
          <div className="space-y-2">
            {["Todos", "Madeira", "Veludo", "Linho", "Misto"].map((mat) => (
              <label key={mat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="material"
                  value={mat.toLowerCase()}
                  checked={material === mat.toLowerCase()}
                  onChange={(e) => {
                    setMaterial(e.target.value)
                    handleFilterChange()
                  }}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm text-muted-foreground">{mat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setCategory("todos")
          setPriceRange([0, 5000])
          setMaterial("todos")
          handleFilterChange()
        }}
        className="w-full mt-6 py-2 text-sm text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
      >
        Limpar Filtros
      </button>
    </div>
  )
}
