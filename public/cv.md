**LE HONG PHAT**

**Data Engineer**

<hongphatle224@gmail.com> | +84 899 932 767 | Ho Chi Minh City | [LinkedIn](https://www.linkedin.com/in/phat-le-674640330/) | [Github](https://github.com/phatle224)

**SUMMARY**

Data Engineer with 9 months of production experience at AFFINA Insurance, specializing in real-time CDC pipelines (Debezium + Kafka), dbt ELT platforms, and FMCG analytics architecture. Built production systems reducing data ingestion latency from batch-daily to under 2 seconds; independently designed an FMCG analytics platform on ClickHouse + Trino that cut OLAP query time from 12s to sub-100ms on 10M+ records. Committed to engineering data infrastructure that transforms raw operational data into fast, reliable business insight at scale.

**TECHNICAL SKILLS**

- **Languages**: Python, SQL
- **Data Pipeline & Orchestration**: Airflow, Kafka, Spark, Debezium, dbt, Trino, ETL/ELT
- **Databases**: PostgreSQL, Oracle, MySQL, MongoDB, Redis, ClickHouse, Cassandra
- **Infrastructure & Monitoring**: Docker, Prometheus, Grafana, Linux, Git
- **Cloud Exposure**: AWS, GCP
- **Concepts:** CDC, ETL/ELT, Data Modeling, Stream/Batch Processing, Data Warehouse/Lakehouse

**WORK EXPERIENCE**

**Data Engineer Intern** _Sep 2025 - May 2026_

**AFFINA Insurance**

- Data Platform Architecture (Phase 1): Built the end-to-end data platform capturing real-time MySQL CDC events via Debezium and scheduled Excel data, consolidating them into staging tables and normalized marts with under 2-second ingestion latency.
- Enterprise Data Consolidation (Phase 2): Evolved the platform to resolve complex online-offline data integration issues; implemented custom Contract Pre-Processing and a Policy Parser to standardize schema discrepancies (e.g., splitting multi-insured contracts, mapping default beneficiaries), standardizing data across 50+ contract variants and enabling consistent policy reporting across business units.
- Idempotency & Deduplication: Designed a real-time deduplication component utilizing Redis Contract Caching to track and validate record uniqueness, ensuring zero data loss and exact-once insertion into the Operational Data Store.
- Event-Driven Architecture: Designed RabbitMQ event routing topology for 5 downstream consumer applications, implementing at-least-once delivery semantics and decoupling the core data platform from business-layer consumers - enabling independent scaling of each processing pipeline.

**PROJECTS**

**FMCG Real-Time Analytics Platform** _2026_

**github.com/phatle224/fmcg-real-time-analytics**

- Architected a dual-path (hot/cold) FMCG analytical platform processing 1,000 POS transactions/second using Apache Kafka as the message broker, ClickHouse Kafka Engine for real-time OLAP ingestion, and Kafka Connect S3 Sink for historical archival.
- Designed ClickHouse MergeTree schema with optimized ORDER BY index keys and monthly partitioning, implementing 2 Materialized Views for pre-aggregation, reducing OLAP query latency from 12s (PostgreSQL) to sub-100ms on 10M+ records.
- Deployed Trino as a federated query engine with dual catalogs (ClickHouse JDBC + Hive Metastore), enabling single-SQL joins across real-time and historical Parquet datasets on MinIO without custom ETL scripts.
- Implemented Cube.js semantic layer to define standardized business metrics (Revenue, Units Sold, Avg Basket) with caching, exposing a PostgreSQL-compatible interface consumed by Grafana dashboards.

**Tech:** _Python • FastAPI • Apache Kafka • ClickHouse • MinIO • Apache Iceberg • Trino • Cube.js • Grafana • Docker_

**Hybrid Data Ingestion & Streaming Platform** _2025 - 2026_

**github.com/phatle224/hybrid-data-ingestion-streaming-platform**

- Built a hybrid ELT platform combining real-time CDC (Debezium + Kafka) and batch ingestion (FastAPI portal) into PostgreSQL - processing ~120K insurance contracts with end-to-end CDC latency under 1.5 seconds and peak throughput of ~500 events/sec, solving the cold-start problem of offline-only data warehouses.
- Designed a 4-layer Medallion dbt pipeline (Staging → Intermediate → Warehouse → Mart) with 54 automated data quality tests across 5 dimension and 2 fact tables.
- Implemented idempotent deduplication using composite business keys and ROW_NUMBER() window functions to eliminate duplicate records from CDC streams.
- Built observability dashboards with Prometheus and Grafana to monitor Kafka consumer lag, PostgreSQL metrics, and pipeline health.

**Tech:** _Python • FastAPI • Apache Kafka • Debezium • dbt • PostgreSQL • Prometheus • Grafana • Docker_

**EDUCATION**

**Bachelor of Information Technology** _2022 - Present (Expected 2027)_

**Saigon University (SGU), Ho Chi Minh City**

- Academic Excellence Scholarship - 3 consecutive semesters (HK1 2025 - HK1 2026). GPA: 7.4/10.
- Relevant coursework: Database Systems, Data Structures & Algorithms, Big Data Technologies, Software Engineering.

**CERTIFICATIONS**

**IBM Data Engineering Professional Certificate - Coursera / IBM** _Apr 2025 - Present_

**IBM Data Analyst Professional Certificate - Coursera / IBM** _Feb 2025_

**SQL (Advanced) Certificate - HackerRank** _Dec_ _2025_

**LANGUAGES**

- **Vietnamese** Native
- **English** B2 (IELTS in progress)