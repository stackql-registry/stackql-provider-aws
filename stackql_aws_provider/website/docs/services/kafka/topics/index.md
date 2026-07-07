--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_topic"
    values={[
        { label: 'describe_topic', value: 'describe_topic' },
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="describe_topic">

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
    <td><CopyableCode code="Configs" /></td>
    <td><code>string</code></td>
    <td>Topic configurations encoded as a Base64 string.</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionCount" /></td>
    <td><code>integer</code></td>
    <td>The partition count of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationFactor" /></td>
    <td><code>integer</code></td>
    <td>The replication factor of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the topic. (CREATING, UPDATING, DELETING, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicName" /></td>
    <td><code>string</code></td>
    <td>The Kafka topic name of the topic.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_topics">

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
    <td><CopyableCode code="OutOfSyncReplicaCount" /></td>
    <td><code>integer</code></td>
    <td>Number of out-of-sync replicas for a topic.</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionCount" /></td>
    <td><code>integer</code></td>
    <td>Partition count for a topic.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationFactor" /></td>
    <td><code>integer</code></td>
    <td>Replication factor for a topic.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicName" /></td>
    <td><code>string</code></td>
    <td>Name for a topic.</td>
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
    <td><a href="#describe_topic"><CopyableCode code="describe_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns topic details of this topic on a MSK cluster.</td>
</tr>
<tr>
    <td><a href="#list_topics"><CopyableCode code="list_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-topicNameFilter"><code>topicNameFilter</code></a></td>
    <td>List topics in a MSK cluster.</td>
</tr>
<tr>
    <td><a href="#create_topic"><CopyableCode code="create_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TopicName"><code>TopicName</code></a>, <a href="#parameter-PartitionCount"><code>PartitionCount</code></a>, <a href="#parameter-ReplicationFactor"><code>ReplicationFactor</code></a></td>
    <td></td>
    <td>Creates a topic in the specified MSK cluster.</td>
</tr>
<tr>
    <td><a href="#update_topic"><CopyableCode code="update_topic" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of the specified topic.</td>
</tr>
<tr>
    <td><a href="#delete_topic"><CopyableCode code="delete_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic in the specified MSK cluster.</td>
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
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The name of the topic to delete.</td>
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
<tr id="parameter-topicNameFilter">
    <td><CopyableCode code="topicNameFilter" /></td>
    <td><code>string</code></td>
    <td>Returns topics starting with given name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_topic"
    values={[
        { label: 'describe_topic', value: 'describe_topic' },
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="describe_topic">

Returns topic details of this topic on a MSK cluster.

```sql
SELECT
Configs,
PartitionCount,
ReplicationFactor,
Status,
TopicArn,
TopicName
FROM aws.kafka.topics
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND topic_name = '{{ topic_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_topics">

List topics in a MSK cluster.

```sql
SELECT
OutOfSyncReplicaCount,
PartitionCount,
ReplicationFactor,
TopicArn,
TopicName
FROM aws.kafka.topics
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND topicNameFilter = '{{ topicNameFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic"
    values={[
        { label: 'create_topic', value: 'create_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic">

Creates a topic in the specified MSK cluster.

```sql
INSERT INTO aws.kafka.topics (
TopicName,
PartitionCount,
ReplicationFactor,
Configs,
cluster_arn,
region
)
SELECT 
'{{ TopicName }}' /* required */,
{{ PartitionCount }} /* required */,
{{ ReplicationFactor }} /* required */,
'{{ Configs }}',
'{{ cluster_arn }}',
'{{ region }}'
RETURNING
Status,
TopicArn,
TopicName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topics
  props:
    - name: cluster_arn
      value: "{{ cluster_arn }}"
      description: Required parameter for the topics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topics resource.
    - name: TopicName
      value: "{{ TopicName }}"
    - name: PartitionCount
      value: {{ PartitionCount }}
    - name: ReplicationFactor
      value: {{ ReplicationFactor }}
    - name: Configs
      value: "{{ Configs }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_topic"
    values={[
        { label: 'update_topic', value: 'update_topic' }
    ]}
>
<TabItem value="update_topic">

Updates the configuration of the specified topic.

```sql
UPDATE aws.kafka.topics
SET 
Configs = '{{ Configs }}',
PartitionCount = {{ PartitionCount }}
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND topic_name = '{{ topic_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Status,
TopicArn,
TopicName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic"
    values={[
        { label: 'delete_topic', value: 'delete_topic' }
    ]}
>
<TabItem value="delete_topic">

Deletes a topic in the specified MSK cluster.

```sql
DELETE FROM aws.kafka.topics
WHERE cluster_arn = '{{ cluster_arn }}' --required
AND topic_name = '{{ topic_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
