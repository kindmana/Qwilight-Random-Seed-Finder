# Qwilight Random Seed Finder

A specialized utility to find the hidden random seed used for **Qwilight** note arrangements. This tool helps you identify the seed that generated your specific random pattern.

## 🚀 Features
- **Rhythm Game Optimized**: Designed specifically for analyzing randomized note patterns in Qwilight.
- **Accurate Emulation**: Perfectly replicates the .NET `System.Random` (Knuth's subtractive) algorithm used by the game engine.
- **Fast Brute-forcing**: Quickly scans millions of seeds to find your match within seconds.
- **User Friendly**: Supports 'Enter' key to trigger search for seamless pattern analysis.

## 📖 How to Use
1. **Identify the Pattern**: Check the randomized note arrangement during your Qwilight gameplay.
2. **Input the Sequence**: Enter the specific note order you see (e.g., if you want to find the seed for a 'Denim-removed' layout, input the arrangement like `1357246`).
3. **Find the Seed**: Press **Enter** or click **Find Seed**.
4. **Result**: The tool will identify the exact seed that transforms the default `1234567` sequence into your input pattern.

## 🛠️ Technical Details
This tool emulates the .NET 8 `Random.Shuffle` behavior:
- **Algorithm**: Fisher-Yates Shuffle (Forward iteration logic).
- **Engine**: Ports C# `System.Random` logic directly to JavaScript for 100% compatibility.

## 🖼️ Reference
The interface includes a high-resolution reference image (`image.png`) to help you compare note placements while you search.
