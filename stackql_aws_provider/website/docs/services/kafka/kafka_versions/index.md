--- 
title: kafka_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_versions
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

Creates, updates, deletes, gets or lists a <code>kafka_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.kafka_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_kafka_versions"
    values={[
        { label: 'list_kafka_versions', value: 'list_kafka_versions' }
    ]}
>
<TabItem value="list_kafka_versions">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#list_kafka_versions"><CopyableCode code="list_kafka_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Apache Kafka versions.</td>
</tr>
<tr>
    <td><a href="#update_cluster_kafka_version"><CopyableCode code="update_cluster_kafka_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-TargetKafkaVersion"><code>TargetKafkaVersion</code></a></td>
    <td></td>
    <td>Updates the Apache Kafka version for the cluster.</td>
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
    defaultValue="list_kafka_versions"
    values={[
        { label: 'list_kafka_versions', value: 'list_kafka_versions' }
    ]}
>
<TabItem value="list_kafka_versions">

Returns a list of Apache Kafka versions.

```sql
SELECT
status,
version
FROM aws.kafka.kafka_versions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_kafka_version"
    values={[
        { label: 'update_cluster_kafka_version', value: 'update_cluster_kafka_version' }
    ]}
>
<TabItem value="update_cluster_kafka_version">

Updates the Apache Kafka version for the cluster.

```sql
UPDATE aws.kafka.kafka_versions
SET 
ConfigurationInfo = '{{ ConfigurationInfo }}',
CurrentVersion = '{{ CurrentVersion }}',
TargetKafkaVersion = '{{ TargetKafkaVersion }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
AND TargetKafkaVersion = '{{ TargetKafkaVersion }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
</Tabs>
