export type SuccessStory = {
  client: string;
  sector: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
  metrics: { label: string; value: number; suffix: string }[];
};

export const successStories: SuccessStory[] = [
  {
    client: "Pertamina",
    sector: "Energy & State-Owned Oil",
    problem:
      "Unauthorized occupancy (PTH) across Pertamina's vast land assets — oil fields, refineries, and storage facilities — was difficult to monitor manually at scale and in real time.",
    solution:
      "Developed an object detection system using DETR (Detection Transformer, PyTorch) integrated with Pertamina's internal satellite and drone surveillance infrastructure to automatically detect and flag unauthorized occupants.",
    technology: ["PyTorch", "OpenCV", "DETR", "ArcGIS", "QGIS", "Satellite Imagery", "Drone Surveillance"],
    outcome:
      "Enhanced asset security with real-time detection across strategic sites, reducing unauthorized access risks and cutting manual monitoring effort significantly.",
    metrics: [
      { label: "Detection Accuracy", value: 92, suffix: "%" },
      { label: "Manual Effort Saved", value: 80, suffix: "%" },
      { label: "Monitoring Speed", value: 70, suffix: "% faster" },
    ],
  },
  {
    client: "Bukalapak",
    sector: "E-commerce & Marketplace",
    problem:
      "Pharmacy and warehouse staff struggled to locate medical stock manually, while patients frequently missed medication schedules after purchase — impacting service quality and adherence.",
    solution:
      "Built a Healthcare Stock Management system with a centralized tracker, an AI Assistant for staff queries, and an automated WhatsApp alert engine that sends personalized dosage reminders to customers after every purchase.",
    technology: ["Python", "Pandas", "SQL", "Streamlit", "WhatsApp API"],
    outcome:
      "Staff can instantly locate any item by position, while automated WhatsApp reminders improved patient medication adherence and pharmacy service quality.",
    metrics: [
      { label: "Stock Query Time", value: 85, suffix: "% faster" },
      { label: "Alert Delivery Rate", value: 98, suffix: "%" },
      { label: "Adherence Improvement", value: 60, suffix: "%" },
    ],
  },
  {
    client: "Nojorono",
    sector: "Manufacturing & FMCG",
    problem:
      "Distributors relied on gut-feel for daily ordering decisions, leading to frequent stockouts, overstocking, and inefficient inventory replenishment across distribution channels.",
    solution:
      "Developed a machine learning–based Daily Order Suggestion system using multi-label classification and demand forecasting models to recommend optimal SKU selection and order quantities per distributor.",
    technology: ["Python", "Pandas", "Scikit-learn", "SQL", "Streamlit"],
    outcome:
      "Distributors and sales teams gained data-driven daily order recommendations, reducing stockout and overstock risks while improving distribution efficiency.",
    metrics: [
      { label: "Forecast Accuracy", value: 88, suffix: "%" },
      { label: "Stockout Reduction", value: 45, suffix: "%" },
      { label: "Overstock Reduction", value: 38, suffix: "%" },
    ],
  },
  {
    client: "Amman Mineral",
    sector: "Mining & Resources",
    problem:
      "Unplanned breakdowns of Crusher and Flotation machines caused significant downtime and costly emergency maintenance with no early warning system in place.",
    solution:
      "Implemented an ML-powered anomaly detection system using time-series analysis to continuously monitor machine operational data (temperature, lubricant flow, component position) and trigger alerts before failures occur.",
    technology: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Time-Series Analysis"],
    outcome:
      "Early anomaly detection enabled proactive maintenance, significantly reducing unplanned downtime and emergency repair costs across critical mining equipment.",
    metrics: [
      { label: "Anomaly Detection", value: 91, suffix: "%" },
      { label: "Downtime Reduction", value: 50, suffix: "%" },
      { label: "Maintenance Cost Saved", value: 40, suffix: "%" },
    ],
  },
  {
    client: "Asian Agri",
    sector: "Agribusiness",
    problem:
      "Fragmented IT infrastructure and manual processes limited operational visibility and slowed decision-making across Asian Agri's agricultural operations.",
    solution:
      "Provided end-to-end IT consulting covering infrastructure assessment, cloud migration roadmap, data strategy, and operational technology modernization aligned with business objectives.",
    technology: ["Cloud Architecture", "Data Strategy", "Enterprise Consulting", "Digital Transformation"],
    outcome:
      "Delivered a clear modernization roadmap that improved operational visibility, streamlined reporting, and laid the foundation for scalable data-driven operations.",
    metrics: [
      { label: "Efficiency Increase", value: 40, suffix: "%" },
      { label: "Cost Reduction", value: 30, suffix: "%" },
      { label: "Decision Speed", value: 3, suffix: "x" },
    ],
  },
];
