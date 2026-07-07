--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - dsql
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dsql.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the retrieved stream. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:dsql:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;26&#125;/stream/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>Stream record format. JSON Stream records are formatted as JSON. (JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="ordering" /></td>
    <td><code>string</code></td>
    <td>Stream ordering mode. UNORDERED Changes are streamed without ordering guarantees. (UNORDERED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the retrieved stream. (CREATING, ACTIVE, DELETING, DELETED, FAILED, IMPAIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>object</code></td>
    <td>Stream status reason with error code and timestamp (if applicable).</td>
</tr>
<tr>
    <td><CopyableCode code="streamIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the stream. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of tags associated with the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDefinition" /></td>
    <td><code>object</code></td>
    <td>Target definition for stream destination.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streams">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the stream. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:dsql:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;26&#125;/stream/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream. (CREATING, ACTIVE, DELETING, DELETED, FAILED, IMPAIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="streamIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the stream. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_stream"><CopyableCode code="get_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_identifier"><code>cluster_identifier</code></a>, <a href="#parameter-stream_identifier"><code>stream_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a stream.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_identifier"><code>cluster_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Retrieves information about a list of streams for a cluster.</td>
</tr>
<tr>
    <td><a href="#create_stream"><CopyableCode code="create_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_identifier"><code>cluster_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetDefinition"><code>targetDefinition</code></a>, <a href="#parameter-ordering"><code>ordering</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td></td>
    <td>Creates a new change data capture (CDC) stream for a cluster. The stream captures database changes and delivers them to the specified target destination. Required permissions dsql:CreateStream Permission to create a new stream. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id iam:PassRole Permission to pass the IAM role specified in the target definition to the service. Resources: ARN of the IAM role specified in targetDefinition.kinesis.roleArn kms:Decrypt Required when the cluster uses a customer managed KMS key (CMK). Permission to decrypt data using the cluster's CMK. Resources: ARN of the KMS key used by the cluster</td>
</tr>
<tr>
    <td><a href="#delete_stream"><CopyableCode code="delete_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_identifier"><code>cluster_identifier</code></a>, <a href="#parameter-stream_identifier"><code>stream_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-client-token"><code>client-token</code></a></td>
    <td>Deletes a stream from a cluster.</td>
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
<tr id="parameter-cluster_identifier">
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster containing the stream to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stream_identifier">
    <td><CopyableCode code="stream_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the stream to delete.</td>
</tr>
<tr id="parameter-client-token">
    <td><CopyableCode code="client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results. Default: 10.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>If your initial ListStreams operation returns a nextToken, you can include the returned nextToken in following ListStreams operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

Retrieves information about a stream.

```sql
SELECT
arn,
clusterIdentifier,
creationTime,
format_,
ordering,
status,
statusReason,
streamIdentifier,
tags,
targetDefinition
FROM aws.dsql.streams
WHERE cluster_identifier = '{{ cluster_identifier }}' -- required
AND stream_identifier = '{{ stream_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Retrieves information about a list of streams for a cluster.

```sql
SELECT
arn,
clusterIdentifier,
creationTime,
status,
streamIdentifier
FROM aws.dsql.streams
WHERE cluster_identifier = '{{ cluster_identifier }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream"
    values={[
        { label: 'create_stream', value: 'create_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream">

Creates a new change data capture (CDC) stream for a cluster. The stream captures database changes and delivers them to the specified target destination. Required permissions dsql:CreateStream Permission to create a new stream. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id iam:PassRole Permission to pass the IAM role specified in the target definition to the service. Resources: ARN of the IAM role specified in targetDefinition.kinesis.roleArn kms:Decrypt Required when the cluster uses a customer managed KMS key (CMK). Permission to decrypt data using the cluster's CMK. Resources: ARN of the KMS key used by the cluster

```sql
INSERT INTO aws.dsql.streams (
targetDefinition,
ordering,
format,
tags,
clientToken,
cluster_identifier,
region
)
SELECT 
'{{ targetDefinition }}' /* required */,
'{{ ordering }}' /* required */,
'{{ format }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ cluster_identifier }}',
'{{ region }}'
RETURNING
arn,
clusterIdentifier,
creationTime,
format_,
ordering,
status,
streamIdentifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: streams
  props:
    - name: cluster_identifier
      value: "{{ cluster_identifier }}"
      description: Required parameter for the streams resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the streams resource.
    - name: targetDefinition
      description: |
        Target definition for stream destination.
      value:
        kinesis:
          streamArn: "{{ streamArn }}"
          roleArn: "{{ roleArn }}"
    - name: ordering
      value: "{{ ordering }}"
      description: |
        Stream ordering mode. UNORDERED Changes are streamed without ordering guarantees.
      valid_values: ['UNORDERED']
    - name: format
      value: "{{ format }}"
      description: |
        Stream record format. JSON Stream records are formatted as JSON.
      valid_values: ['JSON']
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token so a request is only processed once.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream"
    values={[
        { label: 'delete_stream', value: 'delete_stream' }
    ]}
>
<TabItem value="delete_stream">

Deletes a stream from a cluster.

```sql
DELETE FROM aws.dsql.streams
WHERE cluster_identifier = '{{ cluster_identifier }}' --required
AND stream_identifier = '{{ stream_identifier }}' --required
AND region = '{{ region }}' --required
AND `client-token` = '{{ client-token }}'
;
```
</TabItem>
</Tabs>
