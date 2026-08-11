"use client"

// Architecture diagrams for the flagship projects, adapted from the
// Mermaid diagram in the EvalOps README and the pipeline diagram in the
// Intelligent Candidate Discovery README. Built as inline SVG (not images)
// so they stay crisp and pick up the site's theme colors automatically.

const box = {
  fill: "var(--card)",
  stroke: "var(--border)",
}

const accentBox = {
  fill: "var(--primary)",
  fillOpacity: 0.08,
  stroke: "var(--primary)",
}

const dangerBox = {
  fill: "var(--destructive)",
  fillOpacity: 0.08,
  stroke: "var(--destructive)",
}

const label = {
  fill: "var(--foreground)",
  fontFamily: "var(--font-mono)",
}

const sublabel = {
  fill: "var(--muted-foreground)",
  fontFamily: "var(--font-mono)",
}

const arrow = {
  stroke: "var(--muted-foreground)",
  strokeWidth: 1.5,
  fill: "none",
}

export function EvalOpsDiagram() {
  return (
    <svg
      viewBox="0 0 760 460"
      className="w-full h-auto"
      role="img"
      aria-label="EvalOps architecture: SDK traces flow through FastAPI into two Celery queues, one for standard scoring and a dedicated priority queue for safety violations, both scored by an LLM judge, written to partitioned Postgres, and surfaced via a dashboard and a CI/CD quality gate."
    >
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--muted-foreground)" />
        </marker>
      </defs>

      {/* SDK */}
      <rect x="290" y="10" width="180" height="42" rx="6" style={box} />
      <text x="380" y="30" textAnchor="middle" fontSize="12" style={label}>Python / Node SDK</text>
      <text x="380" y="44" textAnchor="middle" fontSize="10" style={sublabel}>@trace decorator</text>
      <path d="M380,52 L380,78" style={arrow} markerEnd="url(#arrowhead)" />

      {/* FastAPI */}
      <rect x="270" y="80" width="220" height="42" rx="6" style={accentBox} />
      <text x="380" y="100" textAnchor="middle" fontSize="12" style={label}>FastAPI · POST /trace</text>
      <text x="380" y="114" textAnchor="middle" fontSize="10" style={sublabel}>instant, non-blocking</text>

      {/* split to two queues */}
      <path d="M340,122 L200,160" style={arrow} markerEnd="url(#arrowhead)" />
      <path d="M420,122 L560,160" style={arrow} markerEnd="url(#arrowhead)" />

      {/* Main queue */}
      <rect x="100" y="162" width="200" height="46" rx="6" style={box} />
      <text x="200" y="182" textAnchor="middle" fontSize="12" style={label}>Celery queue</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" style={sublabel}>4 averaged dimensions</text>

      {/* Safety queue */}
      <rect x="460" y="162" width="200" height="46" rx="6" style={dangerBox} />
      <text x="560" y="182" textAnchor="middle" fontSize="12" style={label}>Safety queue</text>
      <text x="560" y="196" textAnchor="middle" fontSize="10" style={sublabel}>hard gate · real-time alert</text>

      {/* both to judge */}
      <path d="M220,208 L340,248" style={arrow} markerEnd="url(#arrowhead)" />
      <path d="M540,208 L420,248" style={arrow} markerEnd="url(#arrowhead)" />

      {/* Judge */}
      <rect x="270" y="250" width="220" height="46" rx="6" style={accentBox} />
      <text x="380" y="270" textAnchor="middle" fontSize="12" style={label}>LLM-as-Judge</text>
      <text x="380" y="284" textAnchor="middle" fontSize="10" style={sublabel}>forced tool-calling · CoT before score</text>

      {/* judge to postgres */}
      <path d="M380,296 L380,322" style={arrow} markerEnd="url(#arrowhead)" />

      {/* Postgres */}
      <rect x="230" y="324" width="300" height="46" rx="6" style={box} />
      <text x="380" y="344" textAnchor="middle" fontSize="12" style={label}>PostgreSQL — traces / scores</text>
      <text x="380" y="358" textAnchor="middle" fontSize="10" style={sublabel}>partitioned · BRIN-indexed · pgvector · pg_cron</text>

      {/* safety violation side branch */}
      <path d="M560,208 L560,324" style={arrow} strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
      <text x="572" y="270" fontSize="9" style={sublabel}>violation →</text>
      <text x="572" y="282" fontSize="9" style={sublabel}>alert + auto-promote</text>
      <text x="572" y="294" fontSize="9" style={sublabel}>to regression suite</text>

      {/* postgres to dashboard + CI */}
      <path d="M310,370 L200,402" style={arrow} markerEnd="url(#arrowhead)" />
      <path d="M450,370 L560,402" style={arrow} markerEnd="url(#arrowhead)" />

      <rect x="100" y="404" width="200" height="46" rx="6" style={box} />
      <text x="200" y="424" textAnchor="middle" fontSize="12" style={label}>React Dashboard</text>
      <text x="200" y="438" textAnchor="middle" fontSize="10" style={sublabel}>trend · radar · flagged traces</text>

      <rect x="460" y="404" width="200" height="46" rx="6" style={box} />
      <text x="560" y="424" textAnchor="middle" fontSize="12" style={label}>CI/CD Quality Gate</text>
      <text x="560" y="438" textAnchor="middle" fontSize="10" style={sublabel}>vs. frozen golden baseline</text>
    </svg>
  )
}

export function ICDDiagram() {
  return (
    <svg
      viewBox="0 0 760 420"
      className="w-full h-auto"
      role="img"
      aria-label="Intelligent Candidate Discovery pipeline: a job description is decomposed by an LLM, matched against 100,000 candidates via parallel semantic and lexical retrieval, fused with Reciprocal Rank Fusion, scored by a 5-dimension rule scorer, and re-ranked by an LLM before producing a ranked shortlist."
    >
      <defs>
        <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--muted-foreground)" />
        </marker>
      </defs>

      {/* JD input */}
      <rect x="290" y="10" width="180" height="42" rx="6" style={box} />
      <text x="380" y="30" textAnchor="middle" fontSize="12" style={label}>Job Description</text>
      <text x="380" y="44" textAnchor="middle" fontSize="10" style={sublabel}>.docx</text>
      <path d="M380,52 L380,78" style={arrow} markerEnd="url(#arrowhead2)" />

      {/* JD decomposition */}
      <rect x="240" y="80" width="280" height="42" rx="6" style={accentBox} />
      <text x="380" y="100" textAnchor="middle" fontSize="12" style={label}>LLM Call 1 — JD Decomposition</text>
      <text x="380" y="114" textAnchor="middle" fontSize="10" style={sublabel}>hard skills · deal-breakers · culture signals</text>

      <path d="M330,122 L180,160" style={arrow} markerEnd="url(#arrowhead2)" />
      <path d="M430,122 L580,160" style={arrow} markerEnd="url(#arrowhead2)" />

      {/* semantic path */}
      <rect x="80" y="162" width="200" height="46" rx="6" style={box} />
      <text x="180" y="182" textAnchor="middle" fontSize="12" style={label}>TF-IDF + SVD → FAISS</text>
      <text x="180" y="196" textAnchor="middle" fontSize="10" style={sublabel}>semantic ANN · top-300</text>

      {/* lexical path */}
      <rect x="480" y="162" width="200" height="46" rx="6" style={box} />
      <text x="580" y="182" textAnchor="middle" fontSize="12" style={label}>BM25 (107-term)</text>
      <text x="580" y="196" textAnchor="middle" fontSize="10" style={sublabel}>lexical retrieval · top-300</text>

      <path d="M200,208 L340,246" style={arrow} markerEnd="url(#arrowhead2)" />
      <path d="M560,208 L420,246" style={arrow} markerEnd="url(#arrowhead2)" />

      {/* RRF fusion */}
      <rect x="270" y="248" width="220" height="42" rx="6" style={box} />
      <text x="380" y="268" textAnchor="middle" fontSize="12" style={label}>Reciprocal Rank Fusion</text>
      <text x="380" y="282" textAnchor="middle" fontSize="10" style={sublabel}>k=60 · top-300 merged</text>
      <path d="M380,290 L380,314" style={arrow} markerEnd="url(#arrowhead2)" />

      {/* rule scorer */}
      <rect x="220" y="316" width="335" height="46" rx="6" style={accentBox} />
      <text x="380" y="336" textAnchor="middle" fontSize="12" style={label}>D1–D5 Rule Scorer</text>
      <text x="385" y="350" textAnchor="middle" fontSize="10" style={sublabel}>skills · experience · descriptions · education · behavioral</text>
      <path d="M380,362 L380,386" style={arrow} markerEnd="url(#arrowhead2)" />

      {/* LLM re-rank */}
      <text x="380" y="404" textAnchor="middle" fontSize="11" style={sublabel}>↓ LLM Call 2 — CoT re-rank (40% LLM · 35% rule · 25% semantic)</text>
    </svg>
  )
}
