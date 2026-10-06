--- 
title: clusters_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_v2
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

Creates, updates, deletes, gets or lists a <code>clusters_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.clusters_v2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_v2"
    values={[
        { label: 'describe_cluster_v2', value: 'describe_cluster_v2' },
        { label: 'list_clusters_v2', value: 'list_clusters_v2' }
    ]}
>
<TabItem value="describe_cluster_v2">

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
    <td>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</td>
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
    <td><CopyableCode code="cluster_type" /></td>
    <td><code>string</code></td>
    <td>Cluster Type. (PROVISIONED, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned" /></td>
    <td><code>object</code></td>
    <td>Information about the provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless" /></td>
    <td><code>object</code></td>
    <td>Information about the serverless cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td>State Info for the Amazon MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters_v2">

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
    <td>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</td>
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
    <td><CopyableCode code="cluster_type" /></td>
    <td><code>string</code></td>
    <td>Cluster Type. (PROVISIONED, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned" /></td>
    <td><code>object</code></td>
    <td>Information about the provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless" /></td>
    <td><code>object</code></td>
    <td>Information about the serverless cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td>State Info for the Amazon MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the cluster.</td>
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
    <td><a href="#describe_cluster_v2"><CopyableCode code="describe_cluster_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</td>
</tr>
<tr>
    <td><a href="#list_clusters_v2"><CopyableCode code="list_clusters_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterNameFilter"><code>clusterNameFilter</code></a>, <a href="#parameter-clusterTypeFilter"><code>clusterTypeFilter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the MSK clusters in the current Region.</td>
</tr>
<tr>
    <td><a href="#create_cluster_v2"><CopyableCode code="create_cluster_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Creates a new MSK cluster.</td>
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
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clusterNameFilter">
    <td><CopyableCode code="clusterNameFilter" /></td>
    <td><code>string</code></td>
    <td>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</td>
</tr>
<tr id="parameter-clusterTypeFilter">
    <td><CopyableCode code="clusterTypeFilter" /></td>
    <td><code>string</code></td>
    <td>Specify either PROVISIONED or SERVERLESS.</td>
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
    defaultValue="describe_cluster_v2"
    values={[
        { label: 'describe_cluster_v2', value: 'describe_cluster_v2' },
        { label: 'list_clusters_v2', value: 'list_clusters_v2' }
    ]}
>
<TabItem value="describe_cluster_v2">

Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.

```sql
SELECT
active_operation_arn,
cluster_arn,
cluster_name,
cluster_type,
creation_time,
current_version,
provisioned,
serverless,
state,
state_info,
tags
FROM aws.kafka.clusters_v2
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters_v2">

Returns a list of all the MSK clusters in the current Region.

```sql
SELECT
active_operation_arn,
cluster_arn,
cluster_name,
cluster_type,
creation_time,
current_version,
provisioned,
serverless,
state,
state_info,
tags
FROM aws.kafka.clusters_v2
WHERE region = '{{ region }}' -- required
AND clusterNameFilter = '{{ clusterNameFilter }}'
AND clusterTypeFilter = '{{ clusterTypeFilter }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_v2"
    values={[
        { label: 'create_cluster_v2', value: 'create_cluster_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_v2">

Creates a new MSK cluster.

```sql
INSERT INTO aws.kafka.clusters_v2 (
ClusterName,
Tags,
Provisioned,
Serverless,
region
)
SELECT 
'{{ ClusterName }}' /* required */,
'{{ Tags }}',
'{{ Provisioned }}',
'{{ Serverless }}',
'{{ region }}'
RETURNING
cluster_arn,
cluster_name,
cluster_type,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters_v2
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters_v2 resource.
    - name: ClusterName
      value: "{{ ClusterName }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Provisioned
      description: |
        Provisioned cluster request.
      value:
        BrokerNodeGroupInfo:
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
                Sasl: "{{ Sasl }}"
                Tls: "{{ Tls }}"
            NetworkType: "{{ NetworkType }}"
          ZoneIds:
            - "{{ ZoneIds }}"
        Rebalancing:
          Status: "{{ Status }}"
        ClientAuthentication:
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
        ConfigurationInfo:
          Arn: "{{ Arn }}"
          Revision: {{ Revision }}
        EncryptionInfo:
          EncryptionAtRest:
            DataVolumeKMSKeyId: "{{ DataVolumeKMSKeyId }}"
          EncryptionInTransit:
            ClientBroker: "{{ ClientBroker }}"
            InCluster: {{ InCluster }}
        EnhancedMonitoring: "{{ EnhancedMonitoring }}"
        OpenMonitoring:
          Prometheus:
            JmxExporter:
              EnabledInBroker: {{ EnabledInBroker }}
            NodeExporter:
              EnabledInBroker: {{ EnabledInBroker }}
        KafkaVersion: "{{ KafkaVersion }}"
        LoggingInfo:
          AuthorizerLogs:
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
        NumberOfBrokerNodes: {{ NumberOfBrokerNodes }}
        StorageMode: "{{ StorageMode }}"
    - name: Serverless
      description: |
        Serverless cluster request.
      value:
        VpcConfigs:
          - SubnetIds: "{{ SubnetIds }}"
            SecurityGroupIds: "{{ SecurityGroupIds }}"
        ClientAuthentication:
          Sasl:
            Iam:
              Enabled: {{ Enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>
