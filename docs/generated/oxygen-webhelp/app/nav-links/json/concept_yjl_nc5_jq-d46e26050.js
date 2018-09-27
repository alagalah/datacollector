define({"topics" : [{"title":"Origins","shortdesc":"\n            <p class=\"shortdesc\">An origin stage represents the source for the pipeline. You can use a single origin     stage in a pipeline.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/Origins_overview.html#concept_hpr_twm_jq","attributes": {"data-id":"concept_hpr_twm_jq",},"menu": {"hasChildren":true,},"tocID":"concept_hpr_twm_jq-d46e26072","next":"concept_hpr_twm_jq-d46e26072",},{"title":"Amazon S3","href":"datacollector\/UserGuide\/Origins\/AmazonS3.html#concept_kvs_3hh_ht","attributes": {"data-id":"concept_kvs_3hh_ht",},"menu": {"hasChildren":true,},"tocID":"concept_kvs_3hh_ht-d46e26642","next":"concept_kvs_3hh_ht-d46e26642",},{"title":"Amazon SQS Consumer","href":"datacollector\/UserGuide\/Origins\/AmazonSQS.html#concept_xsh_knm_5bb","attributes": {"data-id":"concept_xsh_knm_5bb",},"menu": {"hasChildren":true,},"tocID":"concept_xsh_knm_5bb-d46e27582","next":"concept_xsh_knm_5bb-d46e27582",},{"title":"Azure IoT\/Event Hub Consumer","href":"datacollector\/UserGuide\/Origins\/AzureEventHub.html#concept_c1z_15q_1bb","attributes": {"data-id":"concept_c1z_15q_1bb",},"menu": {"hasChildren":true,},"tocID":"concept_c1z_15q_1bb-d46e28046","next":"concept_c1z_15q_1bb-d46e28046",},{"title":"CoAP Server","shortdesc":"\n            <p class=\"shortdesc\">Constrained Application Protocol (CoAP) is a web transfer protocol designed for         machine-to-machine devices. The CoAP\n               Server origin is a multithreaded origin that listens on         a CoAP endpoint and processes the contents of all authorized\n               CoAP requests. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/CoAPServer.html#concept_wfy_ghn_sz","attributes": {"data-id":"concept_wfy_ghn_sz",},"menu": {"hasChildren":true,},"tocID":"concept_wfy_ghn_sz-d46e28328","next":"concept_wfy_ghn_sz-d46e28328",},{"title":"Directory","shortdesc":"\n            <p class=\"shortdesc\">The Directory origin reads data from files in a directory. The origin can use         multiple threads to enable the parallel\n               processing of files. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Directory.html#concept_qcq_54n_jq","attributes": {"data-id":"concept_qcq_54n_jq",},"menu": {"hasChildren":true,},"tocID":"concept_qcq_54n_jq-d46e28623","next":"concept_qcq_54n_jq-d46e28623",},{"title":"Elasticsearch ","shortdesc":"\n            <p class=\"shortdesc\">The Elasticsearch origin is a multithreaded origin that reads data from an Elasticsearch         cluster, including Elastic\n               Cloud clusters (formerly Found clusters). The origin generates a         record for each Elasticsearch document.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Elasticsearch.html#concept_f1q_vpm_2z","attributes": {"data-id":"concept_f1q_vpm_2z",},"menu": {"hasChildren":true,},"tocID":"concept_f1q_vpm_2z-d46e29895","next":"concept_f1q_vpm_2z-d46e29895",},{"title":"File Tail","shortdesc":"\n            <p class=\"shortdesc\">The File Tail origin reads lines of data as they are written to an active file after         reading related archived files\n               in the same directory. File Tail generates a record for each         line of data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/FileTail.html#concept_n1y_qyp_5q","attributes": {"data-id":"concept_n1y_qyp_5q",},"menu": {"hasChildren":true,},"tocID":"concept_n1y_qyp_5q-d46e30279","next":"concept_n1y_qyp_5q-d46e30279",},{"title":"Google BigQuery","shortdesc":"\n            <p class=\"shortdesc\">The Google BigQuery origin executes a query job and reads the result from Google         BigQuery. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/BigQuery.html#concept_cg3_y3v_q1b","attributes": {"data-id":"concept_cg3_y3v_q1b",},"menu": {"hasChildren":true,},"tocID":"concept_cg3_y3v_q1b-d46e31528","next":"concept_cg3_y3v_q1b-d46e31528",},{"title":"Google Cloud Storage","href":"datacollector\/UserGuide\/Origins\/GCS.html#concept_iyd_wql_nbb","attributes": {"data-id":"concept_iyd_wql_nbb",},"menu": {"hasChildren":true,},"tocID":"concept_iyd_wql_nbb-d46e31998","next":"concept_iyd_wql_nbb-d46e31998",},{"title":"Google Pub\/Sub Subscriber","shortdesc":"\n            <p class=\"shortdesc\">The Google Pub\/Sub Subscriber origin consumes messages from a Google Pub\/Sub         subscription. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/PubSub.html#concept_pjw_qtl_r1b","attributes": {"data-id":"concept_pjw_qtl_r1b",},"menu": {"hasChildren":true,},"tocID":"concept_pjw_qtl_r1b-d46e32560","next":"concept_pjw_qtl_r1b-d46e32560",},{"title":"Hadoop FS","shortdesc":"\n            <p class=\"shortdesc\">The Hadoop FS origin reads data from the Hadoop Distributed File System (HDFS), Amazon     S3, or other file systems using\n               the Hadoop FileSystem interface. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HadoopFS-origin.html#concept_lw2_tnm_vs","attributes": {"data-id":"concept_lw2_tnm_vs",},"menu": {"hasChildren":true,},"tocID":"concept_lw2_tnm_vs-d46e33030","next":"concept_lw2_tnm_vs-d46e33030",},{"title":"Hadoop FS Standalone","shortdesc":"\n            <p class=\"shortdesc\">The Hadoop FS Standalone origin reads files in HDFS. The origin can use multiple         threads to enable the parallel processing\n               of files. The files to be processed must all share         a file name pattern and be fully written. You can also configure\n               the origin to read from         Azure HDInsight.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HDFSStandalone.html#concept_djz_pdm_hdb","attributes": {"data-id":"concept_djz_pdm_hdb",},"menu": {"hasChildren":true,},"tocID":"concept_djz_pdm_hdb-d46e33609","next":"concept_djz_pdm_hdb-d46e33609",},{"title":"HTTP Client","href":"datacollector\/UserGuide\/Origins\/HTTPClient.html#concept_wk4_bjz_5r","attributes": {"data-id":"concept_wk4_bjz_5r",},"menu": {"hasChildren":true,},"tocID":"concept_wk4_bjz_5r-d46e35398","next":"concept_wk4_bjz_5r-d46e35398",},{"title":"HTTP Server","shortdesc":"\n            <p class=\"shortdesc\">The HTTP Server origin is a multithreaded origin that listens on an HTTP endpoint and         processes the contents of all\n               authorized HTTP POST and PUT requests. Use the HTTP Server         origin to read high volumes of HTTP POST and PUT requests\n               using multiple threads. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HTTPServer.html#concept_s2p_5hb_4y","attributes": {"data-id":"concept_s2p_5hb_4y",},"menu": {"hasChildren":true,},"tocID":"concept_s2p_5hb_4y-d46e37796","next":"concept_s2p_5hb_4y-d46e37796",},{"title":"HTTP to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/HTTPtoKafka.html#concept_izh_mqd_dy","attributes": {"data-id":"concept_izh_mqd_dy",},"menu": {"hasChildren":true,},"tocID":"concept_izh_mqd_dy-d46e38263","next":"concept_izh_mqd_dy-d46e38263",},{"title":"JDBC Multitable Consumer","href":"datacollector\/UserGuide\/Origins\/MultiTableJDBCConsumer.html#concept_zp3_wnw_4y","attributes": {"data-id":"concept_zp3_wnw_4y",},"menu": {"hasChildren":true,},"tocID":"concept_zp3_wnw_4y-d46e38824","next":"concept_zp3_wnw_4y-d46e38824",},{"title":"JDBC Query Consumer","href":"datacollector\/UserGuide\/Origins\/JDBCConsumer.html#concept_qhf_hjr_bs","attributes": {"data-id":"concept_qhf_hjr_bs",},"menu": {"hasChildren":true,},"tocID":"concept_qhf_hjr_bs-d46e42690","next":"concept_qhf_hjr_bs-d46e42690",},{"title":"JMS Consumer","shortdesc":"\n            <p class=\"shortdesc\">The JMS Consumer origin reads data from a Java Messaging Service (JMS). </p>\n         ","href":"datacollector\/UserGuide\/Origins\/JMS.html#concept_rhh_4nj_dt","attributes": {"data-id":"concept_rhh_4nj_dt",},"menu": {"hasChildren":true,},"tocID":"concept_rhh_4nj_dt-d46e44452","next":"concept_rhh_4nj_dt-d46e44452",},{"title":"Kafka Consumer","href":"datacollector\/UserGuide\/Origins\/KConsumer.html#concept_msz_wnr_5q","attributes": {"data-id":"concept_msz_wnr_5q",},"menu": {"hasChildren":true,},"tocID":"concept_msz_wnr_5q-d46e44823","next":"concept_msz_wnr_5q-d46e44823",},{"title":"Kafka Multitopic Consumer","href":"datacollector\/UserGuide\/Origins\/KafkaMultiConsumer.html#concept_ccs_fn4_x1b","attributes": {"data-id":"concept_ccs_fn4_x1b",},"menu": {"hasChildren":true,},"tocID":"concept_ccs_fn4_x1b-d46e45632","next":"concept_ccs_fn4_x1b-d46e45632",},{"title":"Kinesis Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Kinesis Consumer origin reads data from Amazon Kinesis Streams. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/KinConsumer.html#concept_anh_4y3_yr","attributes": {"data-id":"concept_anh_4y3_yr",},"menu": {"hasChildren":true,},"tocID":"concept_anh_4y3_yr-d46e46572","next":"concept_anh_4y3_yr-d46e46572",},{"title":"MapR DB CDC","href":"datacollector\/UserGuide\/Origins\/MapRdbCDC.html#concept_qwj_5vm_pbb","attributes": {"data-id":"concept_qwj_5vm_pbb",},"menu": {"hasChildren":true,},"tocID":"concept_qwj_5vm_pbb-d46e47045","next":"concept_qwj_5vm_pbb-d46e47045",},{"title":"MapR DB JSON","shortdesc":"\n            <p class=\"shortdesc\">The MapR DB JSON origin reads JSON documents from MapR DB JSON tables. The origin         converts each document into a record.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRDBJSON.html#concept_ywh_k15_3y","attributes": {"data-id":"concept_ywh_k15_3y",},"menu": {"hasChildren":true,},"tocID":"concept_ywh_k15_3y-d46e47327","next":"concept_ywh_k15_3y-d46e47327",},{"title":"MapR FS","shortdesc":"\n            <p class=\"shortdesc\">The MapR FS origin reads files from MapR FS. Use this origin only in pipelines         configured for cluster batch pipeline\n               execution mode. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRFS.html#concept_psz_db4_lx","attributes": {"data-id":"concept_psz_db4_lx",},"menu": {"hasChildren":true,},"tocID":"concept_psz_db4_lx-d46e47429","next":"concept_psz_db4_lx-d46e47429",},{"title":"MapR FS Standalone","shortdesc":"\n            <p class=\"shortdesc\">The MapR FS Standalone origin reads files in MapR. The origin can use multiple         threads to enable the parallel processing\n               of files. The files to be processed must all share         a file name pattern and be fully written. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRFSStandalone.html#concept_b43_3qc_mdb","attributes": {"data-id":"concept_b43_3qc_mdb",},"menu": {"hasChildren":true,},"tocID":"concept_b43_3qc_mdb-d46e47815","next":"concept_b43_3qc_mdb-d46e47815",},{"title":"MapR Multitopic Streams Consumer","href":"datacollector\/UserGuide\/Origins\/MapRStreamsMultiConsumer.html#concept_hvd_hww_lbb","attributes": {"data-id":"concept_hvd_hww_lbb",},"menu": {"hasChildren":true,},"tocID":"concept_hvd_hww_lbb-d46e49428","next":"concept_hvd_hww_lbb-d46e49428",},{"title":"MapR Streams Consumer","shortdesc":"\n            <p class=\"shortdesc\">The MapR Streams Consumer origin reads messages from MapR Streams.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRStreamsCons.html#concept_cvy_xsf_2v","attributes": {"data-id":"concept_cvy_xsf_2v",},"menu": {"hasChildren":true,},"tocID":"concept_cvy_xsf_2v-d46e49889","next":"concept_cvy_xsf_2v-d46e49889",},{"title":"MongoDB","href":"datacollector\/UserGuide\/Origins\/MongoDB.html#concept_bk4_2rs_ns","attributes": {"data-id":"concept_bk4_2rs_ns",},"menu": {"hasChildren":true,},"tocID":"concept_bk4_2rs_ns-d46e50181","next":"concept_bk4_2rs_ns-d46e50181",},{"title":"MongoDB Oplog","href":"datacollector\/UserGuide\/Origins\/MongoDBOplog.html#concept_mjn_yqw_4y","attributes": {"data-id":"concept_mjn_yqw_4y",},"menu": {"hasChildren":true,},"tocID":"concept_mjn_yqw_4y-d46e50742","next":"concept_mjn_yqw_4y-d46e50742",},{"title":"MQTT Subscriber","shortdesc":"\n            <p class=\"shortdesc\">The MQTT Subscriber origin subscribes to topics on an MQTT broker to read messages         from the broker. The origin functions\n               as an MQTT client that receives messages, generating a         record for each message.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MQTTSubscriber.html#concept_ukz_3vt_lz","attributes": {"data-id":"concept_ukz_3vt_lz",},"menu": {"hasChildren":true,},"tocID":"concept_ukz_3vt_lz-d46e51200","next":"concept_ukz_3vt_lz-d46e51200",},{"title":"MySQL Binary Log","href":"datacollector\/UserGuide\/Origins\/MySQLBinaryLog.html#concept_kqg_1yh_xx","attributes": {"data-id":"concept_kqg_1yh_xx",},"menu": {"hasChildren":true,},"tocID":"concept_kqg_1yh_xx-d46e51419","next":"concept_kqg_1yh_xx-d46e51419",},{"title":"Omniture","shortdesc":"\n            <p class=\"shortdesc\">The Omniture origin processes JSON website usage reports generated by the Omniture   reporting APIs. Omniture is also known\n               as the Adobe Marketing Cloud.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Omniture.html#concept_dsr_xmw_1s","attributes": {"data-id":"concept_dsr_xmw_1s",},"menu": {"hasChildren":true,},"tocID":"concept_dsr_xmw_1s-d46e51990","next":"concept_dsr_xmw_1s-d46e51990",},{"title":"OPC UA Client ","href":"datacollector\/UserGuide\/Origins\/OPCUAClient.html#concept_nmf_1ly_f1b","attributes": {"data-id":"concept_nmf_1ly_f1b",},"menu": {"hasChildren":true,},"tocID":"concept_nmf_1ly_f1b-d46e52047","next":"concept_nmf_1ly_f1b-d46e52047",},{"title":"Oracle CDC Client","href":"datacollector\/UserGuide\/Origins\/OracleCDC.html#concept_rs5_hjj_tw","attributes": {"data-id":"concept_rs5_hjj_tw",},"menu": {"hasChildren":true,},"tocID":"concept_rs5_hjj_tw-d46e52259","next":"concept_rs5_hjj_tw-d46e52259",},{"title":"PostgreSQL CDC Client","shortdesc":"\n            <p class=\"shortdesc\">The PostgreSQL CDC Client origin processes Write-Ahead Logging (WAL) data to generate         change data capture records\n               for a PostgreSQL database. Use the PostgreSQL CDC Client origin         to process WAL data from PostgreSQL 9.4 or later.\n               Earlier versions do not support         WAL.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/PostgreSQL.html#concept_cfs_4m4_n2b","attributes": {"data-id":"concept_cfs_4m4_n2b",},"menu": {"hasChildren":true,},"tocID":"concept_cfs_4m4_n2b-d46e56401","next":"concept_cfs_4m4_n2b-d46e56401",},{"title":"Pulsar Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Pulsar Consumer origin reads messages from one or more topics in an Apache Pulsar         cluster.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/PulsarConsumer.html#concept_o2b_1pc_r2b","attributes": {"data-id":"concept_o2b_1pc_r2b",},"menu": {"hasChildren":true,},"tocID":"concept_o2b_1pc_r2b-d46e56870","next":"concept_o2b_1pc_r2b-d46e56870",},{"title":"RabbitMQ Consumer","shortdesc":"\n            <p class=\"shortdesc\">RabbitMQ Consumer reads AMQP messages from a single RabbitMQ queue.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/RabbitMQ.html#concept_dyg_lq1_h5","attributes": {"data-id":"concept_dyg_lq1_h5",},"menu": {"hasChildren":true,},"tocID":"concept_dyg_lq1_h5-d46e57347","next":"concept_dyg_lq1_h5-d46e57347",},{"title":"Redis Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Redis Consumer origin reads messages from Redis. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Redis.html#concept_plr_t3v_jw","attributes": {"data-id":"concept_plr_t3v_jw",},"menu": {"hasChildren":true,},"tocID":"concept_plr_t3v_jw-d46e57567","next":"concept_plr_t3v_jw-d46e57567",},{"title":"REST Service ","href":"datacollector\/UserGuide\/Origins\/RESTService.html#concept_hfg_2sn_p2b","attributes": {"data-id":"concept_hfg_2sn_p2b",},"menu": {"hasChildren":true,},"tocID":"concept_hfg_2sn_p2b-d46e57721","next":"concept_hfg_2sn_p2b-d46e57721",},{"title":"Salesforce","href":"datacollector\/UserGuide\/Origins\/Salesforce.html#concept_odf_vr3_rx","attributes": {"data-id":"concept_odf_vr3_rx",},"menu": {"hasChildren":true,},"tocID":"concept_odf_vr3_rx-d46e58288","next":"concept_odf_vr3_rx-d46e58288",},{"title":"SDC RPC ","shortdesc":"\n            <p class=\"shortdesc\"> The SDC RPC origin enables connectivity between two SDC RPC pipelines. The SDC RPC     origin reads data passed from an SDC\n               RPC destination. Use the SDC RPC origin as part of an SDC     RPC destination pipeline.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SDC_RPCorigin.html#concept_agb_5c1_ct","attributes": {"data-id":"concept_agb_5c1_ct",},"menu": {"hasChildren":true,},"tocID":"concept_agb_5c1_ct-d46e60886","next":"concept_agb_5c1_ct-d46e60886",},{"title":"SDC RPC to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/SDCRPCtoKafka.html#concept_tdk_slk_pw","attributes": {"data-id":"concept_tdk_slk_pw",},"menu": {"hasChildren":true,},"tocID":"concept_tdk_slk_pw-d46e60943","next":"concept_tdk_slk_pw-d46e60943",},{"title":"SFTP\/FTP Client","shortdesc":"\n            <p class=\"shortdesc\">The SFTP\/FTP Client origin reads files from a server using the Secure File Transfer         Protocol (SFTP) or the File Transfer\n               Protocol (FTP). \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SFTP.html#concept_ic5_bzd_5v","attributes": {"data-id":"concept_ic5_bzd_5v",},"menu": {"hasChildren":true,},"tocID":"concept_ic5_bzd_5v-d46e61624","next":"concept_ic5_bzd_5v-d46e61624",},{"title":"SQL Server CDC Client","href":"datacollector\/UserGuide\/Origins\/SQLServerCDC.html#concept_ut3_ywc_v1b","attributes": {"data-id":"concept_ut3_ywc_v1b",},"menu": {"hasChildren":true,},"tocID":"concept_ut3_ywc_v1b-d46e62191","next":"concept_ut3_ywc_v1b-d46e62191",},{"title":"SQL Server Change Tracking","href":"datacollector\/UserGuide\/Origins\/SQLServerChange.html#concept_ewq_b2s_r1b","attributes": {"data-id":"concept_ewq_b2s_r1b",},"menu": {"hasChildren":true,},"tocID":"concept_ewq_b2s_r1b-d46e63585","next":"concept_ewq_b2s_r1b-d46e63585",},{"title":"System Metrics","shortdesc":"\n            <p class=\"shortdesc\">The System Metrics origin reads system metrics from the edge device where <span class=\"ph\">StreamSets</span>         <span class=\"ph\">Data Collector Edge</span>             (<span class=\"ph\">SDC Edge</span>)         is installed. Use the System Metrics origin only in pipelines configured for edge execution         mode. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SystemMetrics.html#concept_gzy_gmv_32b","attributes": {"data-id":"concept_gzy_gmv_32b",},"menu": {"hasChildren":true,},"tocID":"concept_gzy_gmv_32b-d46e64662","next":"concept_gzy_gmv_32b-d46e64662",},{"title":"TCP Server","href":"datacollector\/UserGuide\/Origins\/TCPServer.html#concept_ppm_xb1_4z","attributes": {"data-id":"concept_ppm_xb1_4z",},"menu": {"hasChildren":true,},"tocID":"concept_ppm_xb1_4z-d46e64773","next":"concept_ppm_xb1_4z-d46e64773",},{"title":"UDP Multithreaded Source","href":"datacollector\/UserGuide\/Origins\/UDPMulti.html#concept_wng_g5f_5bb","attributes": {"data-id":"concept_wng_g5f_5bb",},"menu": {"hasChildren":true,},"tocID":"concept_wng_g5f_5bb-d46e65231","next":"concept_wng_g5f_5bb-d46e65231",},{"title":"UDP Source","href":"datacollector\/UserGuide\/Origins\/UDP.html#concept_rst_2y5_1s","attributes": {"data-id":"concept_rst_2y5_1s",},"menu": {"hasChildren":true,},"tocID":"concept_rst_2y5_1s-d46e65596","next":"concept_rst_2y5_1s-d46e65596",},{"title":"UDP to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/UDPtoKafka.html#concept_jzq_jcz_pw","attributes": {"data-id":"concept_jzq_jcz_pw",},"menu": {"hasChildren":true,},"tocID":"concept_jzq_jcz_pw-d46e65744","next":"concept_jzq_jcz_pw-d46e65744",},{"title":"WebSocket Client","shortdesc":"\n            <p class=\"shortdesc\">The WebSocket Client origin reads data from a WebSocket server endpoint. Use the origin         to read data from a WebSocket\n               resource URL. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/WebSocketClient.html#concept_unk_nzk_fbb","attributes": {"data-id":"concept_unk_nzk_fbb",},"menu": {"hasChildren":true,},"tocID":"concept_unk_nzk_fbb-d46e66205","next":"concept_unk_nzk_fbb-d46e66205",},{"title":"WebSocket Server","shortdesc":"\n            <p class=\"shortdesc\">The WebSocket Server origin is a multithreaded origin that listens on a WebSocket         endpoint and processes the contents\n               of all authorized WebSocket client requests. Use the         WebSocket Server origin to read high volumes of WebSocket client\n               requests using multiple         threads. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/WebSocketServer.html#concept_u2r_gpc_3z","attributes": {"data-id":"concept_u2r_gpc_3z",},"menu": {"hasChildren":true,},"tocID":"concept_u2r_gpc_3z-d46e66358","next":"concept_u2r_gpc_3z-d46e66358",},{"title":"Windows Event Log","shortdesc":"\n            <p class=\"shortdesc\">The Windows Event Log origin reads data from a Microsoft Windows event log located on a         Windows machine. The origin\n               generates a record for each event in the log. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/WindowsLog.html#concept_agf_5jv_sbb","attributes": {"data-id":"concept_agf_5jv_sbb",},"menu": {"hasChildren":true,},"tocID":"concept_agf_5jv_sbb-d46e66735","next":"concept_agf_5jv_sbb-d46e66735",}]});