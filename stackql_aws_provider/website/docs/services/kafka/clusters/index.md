--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - kafka
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="active_operation_arn" /></td>
    <td><code>string</code></td>
    <td>Arn of active cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_node_group_info" /></td>
    <td><code>object</code></td>
    <td>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="client_authentication" /></td>
    <td><code>object</code></td>
    <td>Includes all client authentication information.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_broker_software_info" /></td>
    <td><code>object</code></td>
    <td>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_action_status" /></td>
    <td><code>string</code></td>
    <td>Determines if there is an action required from the customer. (CRITICAL_ACTION_REQUIRED, ACTION_RECOMMENDED, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_info" /></td>
    <td><code>object</code></td>
    <td>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_monitoring" /></td>
    <td><code>string</code></td>
    <td>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see Monitoring. (DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, PER_TOPIC_PER_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number_of_broker_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of broker nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="open_monitoring" /></td>
    <td><code>object</code></td>
    <td>Settings for open monitoring using Prometheus.</td>
</tr>
<tr>
    <td><CopyableCode code="rebalancing" /></td>
    <td><code>object</code></td>
    <td>Specifies whether or not intelligent rebalancing is turned on for a newly created MSK Provisioned cluster with Express brokers. Intelligent rebalancing performs automatic partition balancing operations when you scale your clusters up or down. By default, intelligent rebalancing is ACTIVE for all new Express-based clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="storage_mode" /></td>
    <td><code>string</code></td>
    <td>Controls storage mode for various supported storage tiers. (LOCAL, TIERED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zookeeper_connect_string" /></td>
    <td><code>string</code></td>
    <td>The connection string to use to connect to the Apache ZooKeeper cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zookeeper_connect_string_tls" /></td>
    <td><code>string</code></td>
    <td>The connection string to use to connect to zookeeper cluster on Tls port.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="active_operation_arn" /></td>
    <td><code>string</code></td>
    <td>Arn of active cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_node_group_info" /></td>
    <td><code>object</code></td>
    <td>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="client_authentication" /></td>
    <td><code>object</code></td>
    <td>Includes all client authentication information.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_broker_software_info" /></td>
    <td><code>object</code></td>
    <td>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_action_status" /></td>
    <td><code>string</code></td>
    <td>Determines if there is an action required from the customer. (CRITICAL_ACTION_REQUIRED, ACTION_RECOMMENDED, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_info" /></td>
    <td><code>object</code></td>
    <td>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_monitoring" /></td>
    <td><code>string</code></td>
    <td>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see Monitoring. (DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, PER_TOPIC_PER_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number_of_broker_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of broker nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="open_monitoring" /></td>
    <td><code>object</code></td>
    <td>Settings for open monitoring using Prometheus.</td>
</tr>
<tr>
    <td><CopyableCode code="rebalancing" /></td>
    <td><code>object</code></td>
    <td>Specifies whether or not intelligent rebalancing is turned on for a newly created MSK Provisioned cluster with Express brokers. Intelligent rebalancing performs automatic partition balancing operations when you scale your clusters up or down. By default, intelligent rebalancing is ACTIVE for all new Express-based clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="storage_mode" /></td>
    <td><code>string</code></td>
    <td>Controls storage mode for various supported storage tiers. (LOCAL, TIERED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zookeeper_connect_string" /></td>
    <td><code>string</code></td>
    <td>The connection string to use to connect to the Apache ZooKeeper cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zookeeper_connect_string_tls" /></td>
    <td><code>string</code></td>
    <td>The connection string to use to connect to zookeeper cluster on Tls port.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterNameFilter"><code>clusterNameFilter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the MSK clusters in the current Region.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BrokerNodeGroupInfo"><code>BrokerNodeGroupInfo</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-KafkaVersion"><code>KafkaVersion</code></a>, <a href="#parameter-NumberOfBrokerNodes"><code>NumberOfBrokerNodes</code></a></td>
    <td></td>
    <td>Creates a new MSK cluster.</td>
</tr>
<tr>
    <td><a href="#update_broker_count"><CopyableCode code="update_broker_count" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-TargetNumberOfBrokerNodes"><code>TargetNumberOfBrokerNodes</code></a></td>
    <td></td>
    <td>Updates the number of broker nodes in the cluster.</td>
</tr>
<tr>
    <td><a href="#update_broker_storage"><CopyableCode code="update_broker_storage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-TargetBrokerEBSVolumeInfo"><code>TargetBrokerEBSVolumeInfo</code></a></td>
    <td></td>
    <td>Updates the EBS storage associated with MSK brokers.</td>
</tr>
<tr>
    <td><a href="#update_broker_type"><CopyableCode code="update_broker_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-TargetInstanceType"><code>TargetInstanceType</code></a></td>
    <td></td>
    <td>Updates EC2 instance type.</td>
</tr>
<tr>
    <td><a href="#update_connectivity"><CopyableCode code="update_connectivity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates the cluster's connectivity configuration.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-currentVersion"><code>currentVersion</code></a></td>
    <td>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</td>
</tr>
<tr>
    <td><a href="#batch_associate_scram_secret"><CopyableCode code="batch_associate_scram_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretArnList"><code>SecretArnList</code></a></td>
    <td></td>
    <td>Associates one or more Scram Secrets with an Amazon MSK cluster.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_scram_secret"><CopyableCode code="batch_disassociate_scram_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretArnList"><code>SecretArnList</code></a></td>
    <td></td>
    <td>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_broker"><CopyableCode code="reboot_broker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BrokerIds"><code>BrokerIds</code></a></td>
    <td></td>
    <td>Reboots brokers.</td>
</tr>
<tr>
    <td><a href="#update_monitoring"><CopyableCode code="update_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</td>
</tr>
<tr>
    <td><a href="#update_rebalancing"><CopyableCode code="update_rebalancing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Use this resource to update the intelligent rebalancing status of an Amazon MSK Provisioned cluster with Express brokers.</td>
</tr>
<tr>
    <td><a href="#update_security"><CopyableCode code="update_security" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</td>
</tr>
<tr>
    <td><a href="#update_storage"><CopyableCode code="update_storage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates cluster broker volume size (or) sets cluster storage mode to TIERED.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster to be updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clusterNameFilter">
    <td><CopyableCode code="clusterNameFilter" /></td>
    <td><code>string</code></td>
    <td>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</td>
</tr>
<tr id="parameter-currentVersion">
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.

```sql
SELECT
active_operation_arn,
broker_node_group_info,
client_authentication,
cluster_arn,
cluster_name,
creation_time,
current_broker_software_info,
current_version,
customer_action_status,
encryption_info,
enhanced_monitoring,
logging_info,
number_of_broker_nodes,
open_monitoring,
rebalancing,
state,
state_info,
storage_mode,
tags,
zookeeper_connect_string,
zookeeper_connect_string_tls
FROM aws.kafka.clusters
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Returns a list of all the MSK clusters in the current Region.

```sql
SELECT
active_operation_arn,
broker_node_group_info,
client_authentication,
cluster_arn,
cluster_name,
creation_time,
current_broker_software_info,
current_version,
customer_action_status,
encryption_info,
enhanced_monitoring,
logging_info,
number_of_broker_nodes,
open_monitoring,
rebalancing,
state,
state_info,
storage_mode,
tags,
zookeeper_connect_string,
zookeeper_connect_string_tls
FROM aws.kafka.clusters
WHERE region = '{{ region }}' -- required
AND clusterNameFilter = '{{ clusterNameFilter }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a new MSK cluster.

```sql
INSERT INTO aws.kafka.clusters (
BrokerNodeGroupInfo,
Rebalancing,
ClientAuthentication,
ClusterName,
ConfigurationInfo,
EncryptionInfo,
EnhancedMonitoring,
OpenMonitoring,
KafkaVersion,
LoggingInfo,
NumberOfBrokerNodes,
Tags,
StorageMode,
region
)
SELECT 
'{{ BrokerNodeGroupInfo }}' /* required */,
'{{ Rebalancing }}',
'{{ ClientAuthentication }}',
'{{ ClusterName }}' /* required */,
'{{ ConfigurationInfo }}',
'{{ EncryptionInfo }}',
'{{ EnhancedMonitoring }}',
'{{ OpenMonitoring }}',
'{{ KafkaVersion }}' /* required */,
'{{ LoggingInfo }}',
{{ NumberOfBrokerNodes }} /* required */,
'{{ Tags }}',
'{{ StorageMode }}',
'{{ region }}'
RETURNING
cluster_arn,
cluster_name,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: BrokerNodeGroupInfo
      description: |
        Describes the setup to be used for Apache Kafka broker nodes in the cluster.
      value:
        BrokerAZDistribution: "{{ BrokerAZDistribution }}"
        ClientSubnets:
          - "{{ ClientSubnets }}"
        InstanceType: "{{ InstanceType }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        StorageInfo:
          EbsStorageInfo:
            ProvisionedThroughput:
              Enabled: {{ Enabled }}
              VolumeThroughput: {{ VolumeThroughput }}
            VolumeSize: {{ VolumeSize }}
        ConnectivityInfo:
          PublicAccess:
            Type: "{{ Type }}"
          VpcConnectivity:
            ClientAuthentication:
              Sasl:
                Scram: "{{ Scram }}"
                Iam: "{{ Iam }}"
              Tls:
                Enabled: {{ Enabled }}
          NetworkType: "{{ NetworkType }}"
        ZoneIds:
          - "{{ ZoneIds }}"
    - name: Rebalancing
      description: |
        Specifies whether or not intelligent rebalancing is turned on for a newly created MSK Provisioned cluster with Express brokers. Intelligent rebalancing performs automatic partition balancing operations when you scale your clusters up or down. By default, intelligent rebalancing is ACTIVE for all new Express-based clusters.
      value:
        Status: "{{ Status }}"
    - name: ClientAuthentication
      description: |
        Includes all client authentication information.
      value:
        Sasl:
          Scram:
            Enabled: {{ Enabled }}
          Iam:
            Enabled: {{ Enabled }}
        Tls:
          CertificateAuthorityArnList:
            - "{{ CertificateAuthorityArnList }}"
          Enabled: {{ Enabled }}
        Unauthenticated:
          Enabled: {{ Enabled }}
    - name: ClusterName
      value: "{{ ClusterName }}"
    - name: ConfigurationInfo
      description: |
        Specifies the configuration to use for the brokers.
      value:
        Arn: "{{ Arn }}"
        Revision: {{ Revision }}
    - name: EncryptionInfo
      description: |
        Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
      value:
        EncryptionAtRest:
          DataVolumeKMSKeyId: "{{ DataVolumeKMSKeyId }}"
        EncryptionInTransit:
          ClientBroker: "{{ ClientBroker }}"
          InCluster: {{ InCluster }}
    - name: EnhancedMonitoring
      value: "{{ EnhancedMonitoring }}"
      description: |
        Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see Monitoring.
      valid_values: ['DEFAULT', 'PER_BROKER', 'PER_TOPIC_PER_BROKER', 'PER_TOPIC_PER_PARTITION']
    - name: OpenMonitoring
      description: |
        JMX and Node monitoring for the MSK cluster.
      value:
        Prometheus:
          JmxExporter:
            EnabledInBroker: {{ EnabledInBroker }}
          NodeExporter:
            EnabledInBroker: {{ EnabledInBroker }}
    - name: KafkaVersion
      value: "{{ KafkaVersion }}"
    - name: LoggingInfo
      value:
        BrokerLogs:
          CloudWatchLogs:
            Enabled: {{ Enabled }}
            LogGroup: "{{ LogGroup }}"
          Firehose:
            DeliveryStream: "{{ DeliveryStream }}"
            Enabled: {{ Enabled }}
          S3:
            Bucket: "{{ Bucket }}"
            Enabled: {{ Enabled }}
            Prefix: "{{ Prefix }}"
    - name: NumberOfBrokerNodes
      value: {{ NumberOfBrokerNodes }}
    - name: Tags
      value: "{{ Tags }}"
    - name: StorageMode
      value: "{{ StorageMode }}"
      description: |
        Controls storage mode for various supported storage tiers.
      valid_values: ['LOCAL', 'TIERED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_broker_count"
    values={[
        { label: 'update_broker_count', value: 'update_broker_count' },
        { label: 'update_broker_storage', value: 'update_broker_storage' },
        { label: 'update_broker_type', value: 'update_broker_type' },
        { label: 'update_connectivity', value: 'update_connectivity' }
    ]}
>
<TabItem value="update_broker_count">

Updates the number of broker nodes in the cluster.

```sql
UPDATE aws.kafka.clusters
SET 
CurrentVersion = '{{ CurrentVersion }}',
TargetNumberOfBrokerNodes = {{ TargetNumberOfBrokerNodes }}
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
AND TargetNumberOfBrokerNodes = '{{ TargetNumberOfBrokerNodes }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
<TabItem value="update_broker_storage">

Updates the EBS storage associated with MSK brokers.

```sql
UPDATE aws.kafka.clusters
SET 
CurrentVersion = '{{ CurrentVersion }}',
TargetBrokerEBSVolumeInfo = '{{ TargetBrokerEBSVolumeInfo }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
AND TargetBrokerEBSVolumeInfo = '{{ TargetBrokerEBSVolumeInfo }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
<TabItem value="update_broker_type">

Updates EC2 instance type.

```sql
UPDATE aws.kafka.clusters
SET 
CurrentVersion = '{{ CurrentVersion }}',
TargetInstanceType = '{{ TargetInstanceType }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
AND TargetInstanceType = '{{ TargetInstanceType }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
<TabItem value="update_connectivity">

Updates the cluster's connectivity configuration.

```sql
UPDATE aws.kafka.clusters
SET 
ConnectivityInfo = '{{ ConnectivityInfo }}',
CurrentVersion = '{{ CurrentVersion }}',
ZookeeperAccess = '{{ ZookeeperAccess }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.

```sql
DELETE FROM aws.kafka.clusters
WHERE cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND currentVersion = '{{ currentVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_scram_secret"
    values={[
        { label: 'batch_associate_scram_secret', value: 'batch_associate_scram_secret' },
        { label: 'batch_disassociate_scram_secret', value: 'batch_disassociate_scram_secret' },
        { label: 'reboot_broker', value: 'reboot_broker' },
        { label: 'update_monitoring', value: 'update_monitoring' },
        { label: 'update_rebalancing', value: 'update_rebalancing' },
        { label: 'update_security', value: 'update_security' },
        { label: 'update_storage', value: 'update_storage' }
    ]}
>
<TabItem value="batch_associate_scram_secret">

Associates one or more Scram Secrets with an Amazon MSK cluster.

```sql
EXEC aws.kafka.clusters.batch_associate_scram_secret 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SecretArnList": "{{ SecretArnList }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_scram_secret">

Disassociates one or more Scram Secrets from an Amazon MSK cluster.

```sql
EXEC aws.kafka.clusters.batch_disassociate_scram_secret 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SecretArnList": "{{ SecretArnList }}"
}'
;
```
</TabItem>
<TabItem value="reboot_broker">

Reboots brokers.

```sql
EXEC aws.kafka.clusters.reboot_broker 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"BrokerIds": "{{ BrokerIds }}"
}'
;
```
</TabItem>
<TabItem value="update_monitoring">

Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.

```sql
EXEC aws.kafka.clusters.update_monitoring 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CurrentVersion": "{{ CurrentVersion }}", 
"EnhancedMonitoring": "{{ EnhancedMonitoring }}", 
"OpenMonitoring": "{{ OpenMonitoring }}", 
"LoggingInfo": "{{ LoggingInfo }}"
}'
;
```
</TabItem>
<TabItem value="update_rebalancing">

Use this resource to update the intelligent rebalancing status of an Amazon MSK Provisioned cluster with Express brokers.

```sql
EXEC aws.kafka.clusters.update_rebalancing 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CurrentVersion": "{{ CurrentVersion }}", 
"Rebalancing": "{{ Rebalancing }}"
}'
;
```
</TabItem>
<TabItem value="update_security">

Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.

```sql
EXEC aws.kafka.clusters.update_security 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientAuthentication": "{{ ClientAuthentication }}", 
"CurrentVersion": "{{ CurrentVersion }}", 
"EncryptionInfo": "{{ EncryptionInfo }}"
}'
;
```
</TabItem>
<TabItem value="update_storage">

Updates cluster broker volume size (or) sets cluster storage mode to TIERED.

```sql
EXEC aws.kafka.clusters.update_storage 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CurrentVersion": "{{ CurrentVersion }}", 
"ProvisionedThroughput": "{{ ProvisionedThroughput }}", 
"StorageMode": "{{ StorageMode }}", 
"VolumeSizeGB": {{ VolumeSizeGB }}
}'
;
```
</TabItem>
</Tabs>
