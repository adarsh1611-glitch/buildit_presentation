import React from "react"

export function LeanCanvasSection() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Lean Canvas — Delivery Route Optimization (Dijkstra-Based)
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Problem">
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivery routes are not optimized for minimum distance/time.</li>
            <li>Manual planning ignores road-level cost differences.</li>
            <li>Suboptimal paths increase fuel usage and delivery delays.</li>
          </ul>
        </Card>

        <Card title="Customer Segments">
          <ul className="list-disc pl-5 space-y-1">
            <li>Local courier & logistics companies</li>
            <li>Dispatch managers</li>
            <li>Last-mile delivery agents</li>
            <li>Small e-commerce businesses</li>
          </ul>
        </Card>

        <Card title="Unique Value Proposition">
          <p>
            Graph-based route optimization using Dijkstra’s Algorithm to guarantee
            the shortest delivery paths — reducing travel time, fuel cost, and late deliveries.
          </p>
        </Card>

        <Card title="Solution (Dijkstra-Based)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Model delivery area as a weighted graph (nodes = locations, edges = roads).</li>
            <li>Apply Dijkstra’s algorithm to find shortest paths from depot to stops.</li>
            <li>Edge weights represent distance, time, or fuel cost.</li>
            <li>Dispatcher dashboard visualizes optimal routes.</li>
            <li>Driver app follows computed shortest path.</li>
          </ul>
        </Card>

        <Card title="Key Metrics">
          <ul className="list-disc pl-5 space-y-1">
            <li>Total route cost (sum of edge weights)</li>
            <li>Average delivery time per stop</li>
            <li>Distance saved vs manual routing</li>
            <li>On-time delivery percentage</li>
          </ul>
        </Card>

        <Card title="Channels">
          <ul className="list-disc pl-5 space-y-1">
            <li>Direct sales to courier companies</li>
            <li>Logistics software partnerships</li>
            <li>Online demos & pilot programs</li>
          </ul>
        </Card>

        <Card title="Cost Structure">
          <ul className="list-disc pl-5 space-y-1">
            <li>Engineering & algorithm development</li>
            <li>Map and road-network data costs</li>
            <li>Infrastructure & compute</li>
            <li>Sales & customer onboarding</li>
          </ul>
        </Card>

        <Card title="Revenue Streams">
          <ul className="list-disc pl-5 space-y-1">
            <li>Monthly SaaS subscription</li>
            <li>Annual SaaS subscription</li>
            <li>Per-route optimization fee</li>
            <li>Enterprise customization</li>
          </ul>
        </Card>

        <Card title="Unfair Advantage">
          <ul className="list-disc pl-5 space-y-1">
            <li>Optimized graph models tuned for local delivery networks</li>
            <li>Historical edge-weight tuning (traffic patterns)</li>
            <li>Fast deployment for small fleets</li>
          </ul>
        </Card>

        <Card title="MVP (6 Weeks — Dijkstra)">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Graph creation from map data</li>
            <li>Single-source shortest path using Dijkstra</li>
            <li>Simple dispatcher UI (select source → compute route)</li>
            <li>Driver app showing shortest path</li>
          </ol>
        </Card>

        <Card title="Risks & Assumptions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Dijkstra assumes non-negative edge weights.</li>
            <li>Scales poorly for very large graphs without optimization.</li>
            <li>Traffic changes may require frequent recomputation.</li>
          </ul>
        </Card>

        <Card title="Validation Experiments">
          <ul className="list-disc pl-5 space-y-1">
            <li>Compare manual routes vs Dijkstra-optimized routes.</li>
            <li>Measure distance/time reduction.</li>
            <li>Driver feedback on route clarity.</li>
          </ul>
        </Card>

        <Card title="Next Steps">
          <ul className="list-disc pl-5 space-y-1">
            <li>Extend to multi-stop optimization.</li>
            <li>Add priority queue optimization.</li>
            <li>Explore A* for heuristic-based routing.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

export default LeanCanvasSection