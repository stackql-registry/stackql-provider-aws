--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - kafkaconnect
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafkaconnect.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="describe_connector">

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
    <td><CopyableCode code="capacity" /></td>
    <td><code>object</code></td>
    <td>Information about the capacity of the connector, whether it is auto scaled or provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_configuration" /></td>
    <td><code>object</code></td>
    <td>A map of keys to values that represent the configuration for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_description" /></td>
    <td><code>string</code></td>
    <td>A summary description of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_name" /></td>
    <td><code>string</code></td>
    <td>The name of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connector. (RUNNING, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster" /></td>
    <td><code>object</code></td>
    <td>The Apache Kafka cluster that the connector is connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster_client_authentication" /></td>
    <td><code>object</code></td>
    <td>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster_encryption_in_transit" /></td>
    <td><code>object</code></td>
    <td>Details of encryption in transit to the Apache Kafka cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_connect_version" /></td>
    <td><code>string</code></td>
    <td>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery" /></td>
    <td><code>object</code></td>
    <td>Details about delivering logs to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of a connector. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="plugins" /></td>
    <td><code>array</code></td>
    <td>Specifies which plugins were used for this connector.</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="state_description" /></td>
    <td><code>object</code></td>
    <td>Details about the state of a connector.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies which worker configuration was used for the connector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="capacity" /></td>
    <td><code>object</code></td>
    <td>The connector's compute capacity settings.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_description" /></td>
    <td><code>string</code></td>
    <td>The description of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_name" /></td>
    <td><code>string</code></td>
    <td>The name of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connector. (RUNNING, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster" /></td>
    <td><code>object</code></td>
    <td>The details of the Apache Kafka cluster to which the connector is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster_client_authentication" /></td>
    <td><code>object</code></td>
    <td>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster_encryption_in_transit" /></td>
    <td><code>object</code></td>
    <td>Details of encryption in transit to the Apache Kafka cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_connect_version" /></td>
    <td><code>string</code></td>
    <td>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery" /></td>
    <td><code>object</code></td>
    <td>The settings for delivering connector logs to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of a connector. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="plugins" /></td>
    <td><code>array</code></td>
    <td>Specifies which plugins were used for this connector.</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration" /></td>
    <td><code>object</code></td>
    <td>The worker configurations that are in use with the connector.</td>
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
    <td><a href="#describe_connector"><CopyableCode code="describe_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns summary information about the connector.</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-connectorNamePrefix"><code>connectorNamePrefix</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capacity"><code>capacity</code></a>, <a href="#parameter-connectorConfiguration"><code>connectorConfiguration</code></a>, <a href="#parameter-connectorName"><code>connectorName</code></a>, <a href="#parameter-kafkaCluster"><code>kafkaCluster</code></a>, <a href="#parameter-kafkaClusterClientAuthentication"><code>kafkaClusterClientAuthentication</code></a>, <a href="#parameter-kafkaClusterEncryptionInTransit"><code>kafkaClusterEncryptionInTransit</code></a>, <a href="#parameter-kafkaConnectVersion"><code>kafkaConnectVersion</code></a>, <a href="#parameter-plugins"><code>plugins</code></a>, <a href="#parameter-serviceExecutionRoleArn"><code>serviceExecutionRoleArn</code></a></td>
    <td></td>
    <td>Creates a connector using the specified properties.</td>
</tr>
<tr>
    <td><a href="#update_connector"><CopyableCode code="update_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-currentVersion"><code>currentVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified connector. For request body, specify only one parameter: either capacity or connectorConfiguration.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-currentVersion"><code>currentVersion</code></a></td>
    <td>Deletes the specified connector.</td>
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
<tr id="parameter-connector_arn">
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector that you want to delete.</td>
</tr>
<tr id="parameter-currentVersion">
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>string</code></td>
    <td>The current version of the connector that you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-connectorNamePrefix">
    <td><CopyableCode code="connectorNamePrefix" /></td>
    <td><code>string</code></td>
    <td>The name prefix that you want to use to search for and list connectors.</td>
</tr>
<tr id="parameter-currentVersion">
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>string</code></td>
    <td>The current version of the connector that you want to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of connectors to list in one response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="describe_connector">

Returns summary information about the connector.

```sql
SELECT
capacity,
connector_arn,
connector_configuration,
connector_description,
connector_name,
connector_state,
creation_time,
current_version,
kafka_cluster,
kafka_cluster_client_authentication,
kafka_cluster_encryption_in_transit,
kafka_connect_version,
log_delivery,
network_type,
plugins,
service_execution_role_arn,
state_description,
worker_configuration
FROM aws.kafkaconnect.connectors
WHERE connector_arn = '{{ connector_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connectors">

Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.

```sql
SELECT
capacity,
connector_arn,
connector_description,
connector_name,
connector_state,
creation_time,
current_version,
kafka_cluster,
kafka_cluster_client_authentication,
kafka_cluster_encryption_in_transit,
kafka_connect_version,
log_delivery,
network_type,
plugins,
service_execution_role_arn,
worker_configuration
FROM aws.kafkaconnect.connectors
WHERE region = '{{ region }}' -- required
AND connectorNamePrefix = '{{ connectorNamePrefix }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Creates a connector using the specified properties.

```sql
INSERT INTO aws.kafkaconnect.connectors (
capacity,
connectorConfiguration,
connectorDescription,
connectorName,
kafkaCluster,
kafkaClusterClientAuthentication,
kafkaClusterEncryptionInTransit,
kafkaConnectVersion,
logDelivery,
networkType,
plugins,
serviceExecutionRoleArn,
workerConfiguration,
tags,
region
)
SELECT 
'{{ capacity }}' /* required */,
'{{ connectorConfiguration }}' /* required */,
'{{ connectorDescription }}',
'{{ connectorName }}' /* required */,
'{{ kafkaCluster }}' /* required */,
'{{ kafkaClusterClientAuthentication }}' /* required */,
'{{ kafkaClusterEncryptionInTransit }}' /* required */,
'{{ kafkaConnectVersion }}' /* required */,
'{{ logDelivery }}',
'{{ networkType }}',
'{{ plugins }}' /* required */,
'{{ serviceExecutionRoleArn }}' /* required */,
'{{ workerConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
connector_arn,
connector_name,
connector_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: capacity
      description: |
        Information about the capacity of the connector, whether it is auto scaled or provisioned.
      value:
        autoScaling:
          maxWorkerCount: {{ maxWorkerCount }}
          mcuCount: {{ mcuCount }}
          minWorkerCount: {{ minWorkerCount }}
          scaleInPolicy:
            cpuUtilizationPercentage: {{ cpuUtilizationPercentage }}
          scaleOutPolicy:
            cpuUtilizationPercentage: {{ cpuUtilizationPercentage }}
          maxAutoscalingTaskCount: {{ maxAutoscalingTaskCount }}
        provisionedCapacity:
          mcuCount: {{ mcuCount }}
          workerCount: {{ workerCount }}
    - name: connectorConfiguration
      value: "{{ connectorConfiguration }}"
    - name: connectorDescription
      value: "{{ connectorDescription }}"
    - name: connectorName
      value: "{{ connectorName }}"
    - name: kafkaCluster
      description: |
        The details of the Apache Kafka cluster to which the connector is connected.
      value:
        apacheKafkaCluster:
          bootstrapServers: "{{ bootstrapServers }}"
          vpc:
            securityGroups:
              - "{{ securityGroups }}"
            subnets:
              - "{{ subnets }}"
    - name: kafkaClusterClientAuthentication
      description: |
        The client authentication information used in order to authenticate with the Apache Kafka cluster.
      value:
        authenticationType: "{{ authenticationType }}"
    - name: kafkaClusterEncryptionInTransit
      description: |
        Details of encryption in transit to the Apache Kafka cluster.
      value:
        encryptionType: "{{ encryptionType }}"
    - name: kafkaConnectVersion
      value: "{{ kafkaConnectVersion }}"
    - name: logDelivery
      description: |
        Details about log delivery.
      value:
        workerLogDelivery:
          cloudWatchLogs:
            enabled: {{ enabled }}
            logGroup: "{{ logGroup }}"
          firehose:
            deliveryStream: "{{ deliveryStream }}"
            enabled: {{ enabled }}
          s3:
            bucket: "{{ bucket }}"
            enabled: {{ enabled }}
            prefix: "{{ prefix }}"
    - name: networkType
      value: "{{ networkType }}"
      description: |
        The network type of a connector.
      valid_values: ['IPV4', 'DUAL']
    - name: plugins
      value:
        - customPlugin:
            customPluginArn: "{{ customPluginArn }}"
            revision: {{ revision }}
    - name: serviceExecutionRoleArn
      value: "{{ serviceExecutionRoleArn }}"
    - name: workerConfiguration
      description: |
        The configuration of the workers, which are the processes that run the connector logic.
      value:
        revision: {{ revision }}
        workerConfigurationArn: "{{ workerConfigurationArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector"
    values={[
        { label: 'update_connector', value: 'update_connector' }
    ]}
>
<TabItem value="update_connector">

Updates the specified connector. For request body, specify only one parameter: either capacity or connectorConfiguration.

```sql
UPDATE aws.kafkaconnect.connectors
SET 
capacity = '{{ capacity }}',
connectorConfiguration = '{{ connectorConfiguration }}'
WHERE 
connector_arn = '{{ connector_arn }}' --required
AND currentVersion = '{{ currentVersion }}' --required
AND region = '{{ region }}' --required
RETURNING
connector_arn,
connector_operation_arn,
connector_state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes the specified connector.

```sql
DELETE FROM aws.kafkaconnect.connectors
WHERE connector_arn = '{{ connector_arn }}' --required
AND region = '{{ region }}' --required
AND currentVersion = '{{ currentVersion }}'
;
```
</TabItem>
</Tabs>
