import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MSEVisualization = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 3.5 },
    { x: 4, y: 6 },
    { x: 5, y: 5.5 },
    { x: 2.5, y: 3 },
    { x: 4.5, y: 5 },
    { x: 1.5, y: 2.5 }
  ];

  const [slope, setSlope] = useState(1.0);
  const [intercept, setIntercept] = useState(0);
  const [mseGrid, setMseGrid] = useState([]);

  // Calculate MSE for given slope and intercept
  const calculateMSE = (m, b) => {
    return data.reduce((sum, point) => {
      const predicted = m * point.x + b;
      const error = predicted - point.y;
      return sum + error * error;
    }, 0) / data.length;
  };

  // Calculate metrics
  const calculateMetrics = () => {
    const errors = data.map(point => {
      const predicted = slope * point.x + intercept;
      return predicted - point.y;
    });
    
    const mse = errors.reduce((sum, error) => sum + error * error, 0) / data.length;
    const error = errors.reduce((sum, error) => sum + Math.abs(error), 0) / data.length;
    
    return { mse, error };
  };

  // Generate MSE grid for heatmap
  useEffect(() => {
    const grid = [];
    const steps = 40;
    const slopeRange = { min: 0, max: 2 };
    const interceptRange = { min: -2, max: 4 };
    
    for (let i = 0; i < steps; i++) {
      const row = [];
      const m = slopeRange.min + (i * (slopeRange.max - slopeRange.min) / (steps - 1));
      
      for (let j = 0; j < steps; j++) {
        const b = interceptRange.min + (j * (interceptRange.max - interceptRange.min) / (steps - 1));
        const mse = calculateMSE(m, b);
        row.push({ slope: m, intercept: b, mse });
      }
      grid.push(row);
    }
    setMseGrid(grid);
  }, []);

  // SVG parameters for line plot
  const width = 400;
  const height = 300;
  const padding = 40;
  
  // SVG parameters for heatmap
  const heatmapSize = 300;
  const heatmapPadding = 40;
  
  // Scale functions for line plot
  const xScale = (x) => (x * (width - 2 * padding) / 6) + padding;
  const yScale = (y) => height - ((y * (height - 2 * padding) / 8) + padding);

  // Scale functions for heatmap
  const slopeToX = (m) => (m / 2) * (heatmapSize - 2 * heatmapPadding) + heatmapPadding;
  const interceptToY = (b) => heatmapSize - (((b + 2) / 6) * (heatmapSize - 2 * heatmapPadding) + heatmapPadding);

  // Color scale for heatmap
  const maxMSE = mseGrid.length > 0 ? Math.max(...mseGrid.flat().map(p => p.mse)) : 0;

  const getHeatmapColor = (mse) => {
    if (mseGrid.length === 0) return '#fff';
    const normalizedMSE = mse / maxMSE;
    // Use viridis-like colormap
    const h = (1 - normalizedMSE) * 240;
    return `hsl(${h}, 70%, 50%)`;
  };

  // Generate line points
  const lineStart = { x: 0, y: intercept };
  const lineEnd = { x: 6, y: slope * 6 + intercept };

  const metrics = calculateMetrics();

  return (
    <Card className="w-full max-w-4xl bg-gradient-to-br from-slate-50 to-white shadow-lg">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-xl font-semibold text-slate-800">Mean Squared Error Visualization</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative">
              <svg width={width} height={height} className="bg-white rounded-lg shadow-sm">
                {/* Grid lines */}
                {[...Array(6)].map((_, i) => (
                  <line
                    key={`grid-x-${i}`}
                    x1={xScale(i)}
                    y1={padding}
                    x2={xScale(i)}
                    y2={height - padding}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`grid-y-${i}`}
                    x1={padding}
                    y1={yScale(i)}
                    x2={width - padding}
                    y2={yScale(i)}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                ))}

                {/* Coordinate axes */}
                <line 
                  x1={padding} 
                  y1={height - padding} 
                  x2={width - padding} 
                  y2={height - padding} 
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <line 
                  x1={padding} 
                  y1={height - padding} 
                  x2={padding} 
                  y2={padding} 
                  stroke="#94a3b8"
                  strokeWidth="2"
                />

                {/* Data points and error lines */}
                {data.map((point, i) => (
                  <g key={i}>
                    <line
                      x1={xScale(point.x)}
                      y1={yScale(point.y)}
                      x2={xScale(point.x)}
                      y2={yScale(slope * point.x + intercept)}
                      stroke="#f43f5e"
                      strokeOpacity="0.5"
                      strokeDasharray="2,2"
                    />
                    <circle 
                      cx={xScale(point.x)} 
                      cy={yScale(point.y)} 
                      r="4" 
                      fill="#3b82f6"
                    />
                  </g>
                ))}

                {/* Regression line */}
                <line
                  x1={xScale(lineStart.x)}
                  y1={yScale(lineStart.y)}
                  x2={xScale(lineEnd.x)}
                  y2={yScale(lineEnd.y)}
                  stroke="#10b981"
                  strokeWidth="2"
                />

                {/* Equation */}
                <text 
                  x={padding + 20} 
                  y={padding + 20} 
                  className="font-mono"
                  fill="#334155"
                >
                  y = {slope.toFixed(2)}x + {intercept.toFixed(2)}
                </text>
              </svg>
              <svg width="60" height={heatmapSize} className="flex-shrink-0">
                {/* Color bar */}
                <defs>
                  <linearGradient id="colorBarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    {[...Array(20)].map((_, i) => (
                      <stop
                        key={i}
                        offset={`${(i * 100) / 19}%`}
                        stopColor={getHeatmapColor(maxMSE * (i / 19))}
                      />
                    ))}
                  </linearGradient>
                </defs>
                
                {/* Color bar rectangle */}
                <rect
                  x="0"
                  y={heatmapPadding}
                  width="20"
                  height={heatmapSize - 2 * heatmapPadding}
                  fill="url(#colorBarGradient)"
                />

                {/* Labels */}
                <text
                  x="25"
                  y={heatmapPadding}
                  textAnchor="start"
                  alignmentBaseline="middle"
                  className="text-xs fill-slate-600"
                >
                  {maxMSE.toFixed(1)}
                </text>
                <text
                  x="25"
                  y={heatmapSize - heatmapPadding}
                  textAnchor="start"
                  alignmentBaseline="middle"
                  className="text-xs fill-slate-600"
                >
                  0.0
                </text>
                <text
                  x="25"
                  y={heatmapSize / 2}
                  textAnchor="start"
                  alignmentBaseline="middle"
                  className="text-xs fill-slate-600"
                >
                  {(maxMSE / 2).toFixed(1)}
                </text>
              </svg>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700">Slope</label>
                  <span className="text-sm text-slate-500">{slope.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={slope}
                  onChange={(e) => setSlope(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700">Intercept</label>
                  <span className="text-sm text-slate-500">{intercept.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="-2"
                  max="4"
                  step="0.1"
                  value={intercept}
                  onChange={(e) => setIntercept(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative flex items-start gap-2">
              <svg width={heatmapSize} height={heatmapSize} className="bg-white rounded-lg shadow-sm flex-shrink-0">
                {/* Heatmap cells */}
                {mseGrid.map((row, i) => 
                  row.map((cell, j) => (
                    <rect
                      key={`${i}-${j}`}
                      x={slopeToX(cell.slope) - 4}
                      y={interceptToY(cell.intercept) - 4}
                      width="8"
                      height="8"
                      fill={getHeatmapColor(cell.mse)}
                    />
                  ))
                )}

                {/* Current position marker */}
                <circle
                  cx={slopeToX(slope)}
                  cy={interceptToY(intercept)}
                  r="6"
                  fill="#10b981"
                  stroke="white"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="6;8;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Crosshair lines */}
                <line
                  x1={slopeToX(slope)}
                  y1={heatmapPadding}
                  x2={slopeToX(slope)}
                  y2={heatmapSize - heatmapPadding}
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.5"
                />
                <line
                  x1={heatmapPadding}
                  y1={interceptToY(intercept)}
                  x2={heatmapSize - heatmapPadding}
                  y2={interceptToY(intercept)}
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.5"
                />

                {/* Axes */}
                <line
                  x1={heatmapPadding}
                  y1={heatmapSize - heatmapPadding}
                  x2={heatmapSize - heatmapPadding}
                  y2={heatmapSize - heatmapPadding}
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <line
                  x1={heatmapPadding}
                  y1={heatmapPadding}
                  x2={heatmapPadding}
                  y2={heatmapSize - heatmapPadding}
                  stroke="#94a3b8"
                  strokeWidth="2"
                />

                {/* Axis labels */}
                <text
                  x={heatmapSize / 2}
                  y={heatmapSize - 10}
                  textAnchor="middle"
                  className="text-sm"
                  fill="#64748b"
                >
                  Slope
                </text>
                <text
                  x={10}
                  y={heatmapSize / 2}
                  textAnchor="middle"
                  transform={`rotate(-90, 10, ${heatmapSize / 2})`}
                  className="text-sm"
                  fill="#64748b"
                >
                  Intercept
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">Mean Squared Error</div>
                <div className="text-2xl font-semibold text-slate-800">{metrics.mse.toFixed(4)}</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">Mean Error</div>
                <div className="text-2xl font-semibold text-slate-800">{metrics.error.toFixed(4)}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MSEVisualization;