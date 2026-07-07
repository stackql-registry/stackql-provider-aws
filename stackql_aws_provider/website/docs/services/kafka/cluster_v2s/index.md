--- 
title: cluster_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_v2s
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

Creates, updates, deletes, gets or lists a <code>cluster_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.cluster_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_v2"
    values={[
        { label: 'describe_cluster_v2', value: 'describe_cluster_v2' }
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
    <td><CopyableCode code="ActiveOperationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterType" /></td>
    <td><code>string</code></td>
    <td>Cluster Type. (PROVISIONED, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentVersion" /></td>
    <td><code>string</code></td>
    <td>The current version of the MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Provisioned" /></td>
    <td><code>object</code></td>
    <td>Information about the provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Serverless" /></td>
    <td><code>object</code></td>
    <td>Information about the serverless cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="StateInfo" /></td>
    <td><code>object</code></td>
    <td>State Info for the Amazon MSK cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_v2"
    values={[
        { label: 'describe_cluster_v2', value: 'describe_cluster_v2' }
    ]}
>
<TabItem value="describe_cluster_v2">

Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.

```sql
SELECT
ActiveOperationArn,
ClusterArn,
ClusterName,
ClusterType,
CreationTime,
CurrentVersion,
Provisioned,
Serverless,
State,
StateInfo,
Tags
FROM aws.kafka.cluster_v2s
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
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
INSERT INTO aws.kafka.cluster_v2s (
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
ClusterArn,
ClusterName,
ClusterType,
State
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_v2s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_v2s resource.
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
