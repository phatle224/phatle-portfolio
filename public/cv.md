# Lê Hồng Phát — Data Engineer

*   **Location:** Ho Chi Minh City, Vietnam
*   **Email:** dmphat224@gmail.com
*   **GitHub:** [github.com/phatle224](https://github.com/phatle224)
*   **LinkedIn:** [linkedin.com/in/phatle224](https://linkedin.com/in/phatle224)
*   **Availability:** July 2026 | Open to Full-time / Hybrid / Remote Roles

---

## 🚀 Professional Summary

A results-driven Data Engineer with production experience designing, building, and operating high-throughput event-streaming pipelines and analytical data platforms.
*   Specialized in building **dual-path (hot/cold) architectures** utilizing Apache Kafka, ClickHouse OLAP, MinIO/S3, and Apache Iceberg.
*   Expertise in CDC ingestion (Debezium + Kafka Connect) with sub-2s end-to-end latency and federated query engines (Trino).
*   Strong focus on data platform engineering, data governance (OpenMetadata, OpenLineage), data quality enforcement (dbt testing), and comprehensive real-time observability (Prometheus + Grafana).

---

## 🛠️ Technical Skills

*   **Languages:** Python, SQL, Java
*   **Pipeline & Streaming:** Apache Kafka, Debezium, Kafka Connect, FastAPI, gRPC, REST APIs
*   **OLAP & Databases:** ClickHouse (MergeTree, Kafka Engine, Materialized Views), PostgreSQL, Oracle, MySQL, MongoDB, Redis, Cassandra
*   **Lakehouse & Storage:** MinIO (S3-compatible), Apache Iceberg (Time-travel, Partition evolution), Parquet
*   **Transformation & Orchestration:** Apache Airflow, dbt (Medallion structure, automated tests), PySpark (batch processing)
*   **Semantic Layer & Governance:** Cube.js, OpenMetadata (Data catalog & discovery), OpenLineage
*   **Infra & DevOps:** Docker, Kubernetes (Minikube), Prometheus, Grafana, Linux, Git, CI/CD

---

## 💼 Work Experience

### **Data Engineer** | **AFFINA Insurance**
*Ho Chi Minh City, Vietnam | Oct 2025 - Present (9 months)*

*   **Real-time CDC Pipelines:** Built production CDC pipelines using Debezium + Kafka Connect, streaming database change events from 3 PostgreSQL source systems to the centralized analytics warehouse with end-to-end latency under 2 seconds and zero data loss.
*   **Data Warehouse & dbt Orchestration:** Designed and maintained a 4-layer dbt ELT pipeline (Bronze → Silver → Gold → Mart) consolidating data from 5+ heterogeneous sources (PostgreSQL databases, external REST APIs, and flat files); implemented 54 automated data quality tests, achieving 99%+ accuracy across all fact tables.
*   **Observability & SLA:** Built Kafka consumer lag and pipeline system metrics monitoring using Prometheus + Grafana, enabling real-time alerting and reducing pipeline incident detection and resolution time from hours to under 5 minutes.
*   **Collaboration:** Collaborated closely with Data Analysts and business teams to define analytics requirements, design optimized star schemas, and resolve data quality issues for monthly reporting workflows across 2 business units.

---

## 🏆 Key Projects

### **1. FMCG Real-Time Analytics Platform**
*Jun 2026 - Jul 2026*
*   **Architecture:** Designed a dual-path (hot/cold) analytical pipeline to stream simulated POS transaction data at 1,000 transactions/second.
*   **Ingestion:** Implemented FastAPI Ingest API acts as a Kafka producer, sending events to Kafka topics.
*   **Hot Path (OLAP):** Configured ClickHouse Kafka Engine to auto-ingest data from Kafka into ClickHouse MergeTree tables. Implemented 2 Materialized Views for hourly pre-aggregations, reducing OLAP query latency from 12s (PostgreSQL baseline) to sub-100ms on 10M+ records.
*   **Cold Path (Lakehouse):** Used Kafka Connect S3 Sink to archive raw transactional events to MinIO in Parquet format, structured into Apache Iceberg table layouts.
*   **Query Federation:** Integrated Trino as a federated query engine with dual catalogs (ClickHouse + Iceberg), enabling single-SQL JOIN queries across real-time and 30-day historical datasets without needing complex ETL routines.
*   **Semantic Layer:** Implemented Cube.js semantic layer defining 4 core metrics (revenue, units_sold, average_basket_size, and transaction_count) with hourly pre-aggregations, exposing standardized REST APIs to a Grafana dashboard.

### **2. Hybrid Data Ingestion & Streaming Platform**
*   **Ingestion:** Architected a hybrid ingestion platform combining real-time CDC (Debezium + Kafka) with REST batch APIs (FastAPI) to handle heterogeneous operational ingestion demands.
*   **Deduplication:** Implemented idempotent write logic using composite business keys and `ROW_NUMBER()` window functions to eliminate duplicates from CDC streams.
*   **Data Quality:** Designed a Medallion-structured dbt project, establishing schema and referential integrity tests across 5 dimension tables and 2 fact tables.
*   **Monitoring:** Set up active Grafana dashboards monitoring Kafka consumer group lag, consumer rates, and database I/O.

### **3. Retail Enterprise Data Platform**
*   **Consolidation:** Aggregated operational data from 12 source systems (ERP, CRM, POS) into a GCP BigQuery central data warehouse.
*   **Orchestration:** Authored complex Apache Airflow DAGs with custom operators to schedule and orchestrate dependency chains.
*   **Governance:** Deployed OpenMetadata to establish an enterprise data catalog, map end-to-end data lineage, and automate schema documentation.

### **4. Banking Lakehouse & Platform Migration**
*   **Migration:** Supported the migration of legacy ETL pipelines to Apache Spark (PySpark) and Delta Lake on Databricks.
*   **Security:** Configured row-level and column-level access control and integrated data governance controls to meet banking compliance standards.

---

## 🎓 Education

### **Bachelor of Science in Information Technology**
*Ho Chi Minh City, Vietnam | Expected Graduation: 2027 (Available for Full-time work from July 2026)*
*   **Academic Achievements:** Academic Excellence Scholarship for 3 consecutive semesters (HK1 2025, HK2 2025, HK1 2026).
*   **GPA:** 3.4/4.0 (Top 10% of class)

---

## 📜 Certifications & Languages

*   **IBM Data Engineering Professional Certificate** (Completed 2025)
*   **HackerRank SQL (Advanced) Certificate** (Completed 2025)
*   **Languages:** Vietnamese (Native), English (Professional Working Proficiency - B2)
