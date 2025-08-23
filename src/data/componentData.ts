
import { Component, CategoryOption, SortOption } from "@/types/catalog";
import { useLanguage } from "@/components/LanguageProvider";

// Mock data
export const components: Component[] = [
  {
    id: "comp1",
    name: "ATmega328P",
    category: "microcontrollers",
    price: 2.5,
    description: "8-bit AVR microcontroller with 32KB flash memory",
    inStock: true,
  },
  {
    id: "comp2",
    name: "ESP32-WROOM-32",
    category: "microcontrollers",
    price: 4.8,
    description: "Powerful, generic Wi-Fi+BT+BLE MCU module",
    inStock: true,
  },
  {
    id: "comp3",
    name: "BC547",
    category: "transistors",
    price: 0.1,
    description: "NPN general purpose transistor",
    inStock: true,
  },
  {
    id: "comp4",
    name: "2N2222",
    category: "transistors",
    price: 0.15,
    description: "NPN switching transistor",
    inStock: false,
  },
  {
    id: "comp5",
    name: "10K Ohm",
    category: "resistors",
    price: 0.02,
    description: "1/4W 5% tolerance resistor",
    inStock: true,
  },
  {
    id: "comp6",
    name: "100 uF",
    category: "capacitors",
    price: 0.3,
    description: "Electrolytic capacitor, 25V",
    inStock: true,
  },
  {
    id: "comp7",
    name: "10 uH",
    category: "inductors",
    price: 0.25,
    description: "Radial lead inductor",
    inStock: false,
  },
  {
    id: "comp8",
    name: "STM32F103C8T6",
    category: "microcontrollers",
    price: 3.9,
    description: "ARM Cortex-M3 microcontroller",
    inStock: true,
  },
];

export const getCategories = (): CategoryOption[] => {
  const { t } = useLanguage();
  
  return [
    { id: "all", label: t("catalog.all") },
    { id: "microcontrollers", label: t("catalog.category1") },
    { id: "transistors", label: t("catalog.category2") },
    { id: "resistors", label: t("catalog.category3") },
    { id: "capacitors", label: t("catalog.category4") },
    { id: "inductors", label: t("catalog.category5") },
  ];
};

export const getSortOptions = (): SortOption[] => {
  const { t } = useLanguage();
  
  return [
    { id: "nameAsc", label: t("catalog.nameAsc") },
    { id: "nameDesc", label: t("catalog.nameDesc") },
    { id: "priceAsc", label: t("catalog.priceAsc") },
    { id: "priceDesc", label: t("catalog.priceDesc") },
  ];
};
