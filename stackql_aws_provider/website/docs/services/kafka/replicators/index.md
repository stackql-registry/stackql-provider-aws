--- 
title: replicators
hide_title: false
hide_table_of_contents: false
keywords:
  - replicators
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

Creates, updates, deletes, gets or lists a <code>replicators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replicators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.replicators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replicator"
    values={[
        { label: 'describe_replicator', value: 'describe_replicator' },
        { label: 'list_replicators', value: 'list_replicators' }
    ]}
>
<TabItem value="describe_replicator">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the replicator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version number of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="is_replicator_reference" /></td>
    <td><code>boolean</code></td>
    <td>Whether this resource is a replicator reference.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_clusters" /></td>
    <td><code>array</code></td>
    <td>Kafka Clusters used in setting up sources / targets for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery" /></td>
    <td><code>object</code></td>
    <td>Configuration for log delivery to customer destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_info_list" /></td>
    <td><code>array</code></td>
    <td>A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_description" /></td>
    <td><code>string</code></td>
    <td>The description of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_state" /></td>
    <td><code>string</code></td>
    <td>State of the replicator. (RUNNING, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td>Details about the state of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>List of tags attached to the Replicator.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_replicators">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the replicator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="is_replicator_reference" /></td>
    <td><code>boolean</code></td>
    <td>Whether this resource is a replicator reference.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_clusters_summary" /></td>
    <td><code>array</code></td>
    <td>Kafka Clusters used in setting up sources / targets for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_info_summary_list" /></td>
    <td><code>array</code></td>
    <td>A list of summarized information of replications between clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the replicator.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="replicator_state" /></td>
    <td><code>string</code></td>
    <td>State of the replicator. (RUNNING, CREATING, UPDATING, DELETING, FAILED)</td>
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
    <td><a href="#describe_replicator"><CopyableCode code="describe_replicator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-replicator_arn"><code>replicator_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a replicator.</td>
</tr>
<tr>
    <td><a href="#list_replicators"><CopyableCode code="list_replicators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-replicatorNameFilter"><code>replicatorNameFilter</code></a></td>
    <td>Lists the replicators.</td>
</tr>
<tr>
    <td><a href="#create_replicator"><CopyableCode code="create_replicator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KafkaClusters"><code>KafkaClusters</code></a>, <a href="#parameter-ReplicationInfoList"><code>ReplicationInfoList</code></a>, <a href="#parameter-ReplicatorName"><code>ReplicatorName</code></a>, <a href="#parameter-ServiceExecutionRoleArn"><code>ServiceExecutionRoleArn</code></a></td>
    <td></td>
    <td>Creates the replicator.</td>
</tr>
<tr>
    <td><a href="#update_replication_info"><CopyableCode code="update_replication_info" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-replicator_arn"><code>replicator_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates replication info of a replicator.</td>
</tr>
<tr>
    <td><a href="#delete_replicator"><CopyableCode code="delete_replicator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-replicator_arn"><code>replicator_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-currentVersion"><code>currentVersion</code></a></td>
    <td>Deletes a replicator.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-replicator_arn">
    <td><CopyableCode code="replicator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicator to be deleted.</td>
</tr>
<tr id="parameter-currentVersion">
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>string</code></td>
    <td>The current version of the replicator.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.</td>
</tr>
<tr id="parameter-replicatorNameFilter">
    <td><CopyableCode code="replicatorNameFilter" /></td>
    <td><code>string</code></td>
    <td>Returns replicators starting with given name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_replicator"
    values={[
        { label: 'describe_replicator', value: 'describe_replicator' },
        { label: 'list_replicators', value: 'list_replicators' }
    ]}
>
<TabItem value="describe_replicator">

Describes a replicator.

```sql
SELECT
creation_time,
current_version,
is_replicator_reference,
kafka_clusters,
log_delivery,
replication_info_list,
replicator_arn,
replicator_description,
replicator_name,
replicator_resource_arn,
replicator_state,
service_execution_role_arn,
state_info,
tags
FROM aws.kafka.replicators
WHERE replicator_arn = '{{ replicator_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_replicators">

Lists the replicators.

```sql
SELECT
creation_time,
current_version,
is_replicator_reference,
kafka_clusters_summary,
replication_info_summary_list,
replicator_arn,
replicator_name,
replicator_resource_arn,
replicator_state
FROM aws.kafka.replicators
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND replicatorNameFilter = '{{ replicatorNameFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replicator"
    values={[
        { label: 'create_replicator', value: 'create_replicator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replicator">

Creates the replicator.

```sql
INSERT INTO aws.kafka.replicators (
Description,
KafkaClusters,
ReplicationInfoList,
ReplicatorName,
ServiceExecutionRoleArn,
Tags,
LogDelivery,
region
)
SELECT 
'{{ Description }}',
'{{ KafkaClusters }}' /* required */,
'{{ ReplicationInfoList }}' /* required */,
'{{ ReplicatorName }}' /* required */,
'{{ ServiceExecutionRoleArn }}' /* required */,
'{{ Tags }}',
'{{ LogDelivery }}',
'{{ region }}'
RETURNING
replicator_arn,
replicator_name,
replicator_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replicators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replicators resource.
    - name: Description
      value: "{{ Description }}"
    - name: KafkaClusters
      value:
        - AmazonMskCluster:
            MskClusterArn: "{{ MskClusterArn }}"
          ApacheKafkaCluster:
            ApacheKafkaClusterId: "{{ ApacheKafkaClusterId }}"
            BootstrapBrokerString: "{{ BootstrapBrokerString }}"
          VpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            SubnetIds:
              - "{{ SubnetIds }}"
          ClientAuthentication:
            SaslScram:
              Mechanism: "{{ Mechanism }}"
              SecretArn: "{{ SecretArn }}"
          EncryptionInTransit:
            EncryptionType: "{{ EncryptionType }}"
            RootCaCertificate: "{{ RootCaCertificate }}"
    - name: ReplicationInfoList
      value:
        - ConsumerGroupReplication:
            ConsumerGroupsToExclude:
              - "{{ ConsumerGroupsToExclude }}"
            ConsumerGroupsToReplicate:
              - "{{ ConsumerGroupsToReplicate }}"
            DetectAndCopyNewConsumerGroups: {{ DetectAndCopyNewConsumerGroups }}
            SynchroniseConsumerGroupOffsets: {{ SynchroniseConsumerGroupOffsets }}
            ConsumerGroupOffsetSyncMode: "{{ ConsumerGroupOffsetSyncMode }}"
          SourceKafkaClusterArn: "{{ SourceKafkaClusterArn }}"
          SourceKafkaClusterId: "{{ SourceKafkaClusterId }}"
          TargetCompressionType: "{{ TargetCompressionType }}"
          TargetKafkaClusterArn: "{{ TargetKafkaClusterArn }}"
          TargetKafkaClusterId: "{{ TargetKafkaClusterId }}"
          TopicReplication:
            CopyAccessControlListsForTopics: {{ CopyAccessControlListsForTopics }}
            CopyTopicConfigurations: {{ CopyTopicConfigurations }}
            DetectAndCopyNewTopics: {{ DetectAndCopyNewTopics }}
            StartingPosition:
              Type: "{{ Type }}"
            TopicNameConfiguration:
              Type: "{{ Type }}"
            TopicsToExclude:
              - "{{ TopicsToExclude }}"
            TopicsToReplicate:
              - "{{ TopicsToReplicate }}"
    - name: ReplicatorName
      value: "{{ ReplicatorName }}"
    - name: ServiceExecutionRoleArn
      value: "{{ ServiceExecutionRoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: LogDelivery
      description: |
        Configuration for log delivery to customer destinations.
      value:
        ReplicatorLogDelivery:
          CloudWatchLogs:
            Enabled: {{ Enabled }}
            LogGroup: "{{ LogGroup }}"
          Firehose:
            Enabled: {{ Enabled }}
            DeliveryStream: "{{ DeliveryStream }}"
          S3:
            Enabled: {{ Enabled }}
            Bucket: "{{ Bucket }}"
            Prefix: "{{ Prefix }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_replication_info"
    values={[
        { label: 'update_replication_info', value: 'update_replication_info' }
    ]}
>
<TabItem value="update_replication_info">

Updates replication info of a replicator.

```sql
UPDATE aws.kafka.replicators
SET 
ConsumerGroupReplication = '{{ ConsumerGroupReplication }}',
CurrentVersion = '{{ CurrentVersion }}',
SourceKafkaClusterArn = '{{ SourceKafkaClusterArn }}',
SourceKafkaClusterId = '{{ SourceKafkaClusterId }}',
TargetKafkaClusterArn = '{{ TargetKafkaClusterArn }}',
TargetKafkaClusterId = '{{ TargetKafkaClusterId }}',
TopicReplication = '{{ TopicReplication }}',
LogDelivery = '{{ LogDelivery }}'
WHERE 
replicator_arn = '{{ replicator_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
RETURNING
replicator_arn,
replicator_state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replicator"
    values={[
        { label: 'delete_replicator', value: 'delete_replicator' }
    ]}
>
<TabItem value="delete_replicator">

Deletes a replicator.

```sql
DELETE FROM aws.kafka.replicators
WHERE replicator_arn = '{{ replicator_arn }}' --required
AND region = '{{ region }}' --required
AND currentVersion = '{{ currentVersion }}'
;
```
</TabItem>
</Tabs>
