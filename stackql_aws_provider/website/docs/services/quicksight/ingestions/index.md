--- 
title: ingestions
hide_title: false
hide_table_of_contents: false
keywords:
  - ingestions
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>ingestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.ingestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ingestion"
    values={[
        { label: 'describe_ingestion', value: 'describe_ingestion' },
        { label: 'list_ingestions', value: 'list_ingestions' }
    ]}
>
<TabItem value="describe_ingestion">

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
    <td><CopyableCode code="Ingestion" /></td>
    <td><code>object</code></td>
    <td>Information about the ingestion.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingestions">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this ingestion started.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorInfo" /></td>
    <td><code>object</code></td>
    <td>Error information for this ingestion.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionId" /></td>
    <td><code>string</code></td>
    <td>Ingestion ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the data ingested, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionStatus" /></td>
    <td><code>string</code></td>
    <td>Ingestion status. (INITIALIZED, QUEUED, RUNNING, FAILED, COMPLETED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time that this ingestion took, measured in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="QueueInfo" /></td>
    <td><code>object</code></td>
    <td>Information about a queued dataset SPICE ingestion.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestSource" /></td>
    <td><code>string</code></td>
    <td>Event source for this ingestion. (MANUAL, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestType" /></td>
    <td><code>string</code></td>
    <td>Type of this ingestion. (INITIAL_INGESTION, EDIT, INCREMENTAL_REFRESH, FULL_REFRESH)</td>
</tr>
<tr>
    <td><CopyableCode code="RowInfo" /></td>
    <td><code>object</code></td>
    <td>Information about rows for a data set SPICE ingestion.</td>
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
    <td><a href="#describe_ingestion"><CopyableCode code="describe_ingestion" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-ingestion_id"><code>ingestion_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a SPICE ingestion.</td>
</tr>
<tr>
    <td><a href="#list_ingestions"><CopyableCode code="list_ingestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the history of SPICE ingestions for a dataset. Limited to 5 TPS per user and 25 TPS per account.</td>
</tr>
<tr>
    <td><a href="#create_ingestion"><CopyableCode code="create_ingestion" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-ingestion_id"><code>ingestion_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in an Enterprise edition account 32 times in a 24-hour period. You can manually refresh datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period is measured starting 24 hours before the current date and time. Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</td>
</tr>
<tr>
    <td><a href="#cancel_ingestion"><CopyableCode code="cancel_ingestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-ingestion_id"><code>ingestion_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an ongoing ingestion of data into SPICE.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset used in the ingestion.</td>
</tr>
<tr id="parameter-ingestion_id">
    <td><CopyableCode code="ingestion_id" /></td>
    <td><code>string</code></td>
    <td>An ID for the ingestion.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ingestion"
    values={[
        { label: 'describe_ingestion', value: 'describe_ingestion' },
        { label: 'list_ingestions', value: 'list_ingestions' }
    ]}
>
<TabItem value="describe_ingestion">

Describes a SPICE ingestion.

```sql
SELECT
Ingestion,
RequestId,
Status
FROM aws.quicksight.ingestions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_set_id = '{{ data_set_id }}' -- required
AND ingestion_id = '{{ ingestion_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingestions">

Lists the history of SPICE ingestions for a dataset. Limited to 5 TPS per user and 25 TPS per account.

```sql
SELECT
Arn,
CreatedTime,
ErrorInfo,
IngestionId,
IngestionSizeInBytes,
IngestionStatus,
IngestionTimeInSeconds,
QueueInfo,
RequestSource,
RequestType,
RowInfo
FROM aws.quicksight.ingestions
WHERE data_set_id = '{{ data_set_id }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ingestion"
    values={[
        { label: 'create_ingestion', value: 'create_ingestion' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ingestion">

Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in an Enterprise edition account 32 times in a 24-hour period. You can manually refresh datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period is measured starting 24 hours before the current date and time. Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.

```sql
INSERT INTO aws.quicksight.ingestions (
IngestionType,
data_set_id,
ingestion_id,
aws_account_id,
region
)
SELECT 
'{{ IngestionType }}',
'{{ data_set_id }}',
'{{ ingestion_id }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
Arn,
IngestionId,
IngestionStatus,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingestions
  props:
    - name: data_set_id
      value: "{{ data_set_id }}"
      description: Required parameter for the ingestions resource.
    - name: ingestion_id
      value: "{{ ingestion_id }}"
      description: Required parameter for the ingestions resource.
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the ingestions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingestions resource.
    - name: IngestionType
      value: "{{ IngestionType }}"
      description: |
        This defines the type of ingestion user wants to trigger. This is part of create ingestion request.
      valid_values: ['INCREMENTAL_REFRESH', 'FULL_REFRESH']
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_ingestion"
    values={[
        { label: 'cancel_ingestion', value: 'cancel_ingestion' }
    ]}
>
<TabItem value="cancel_ingestion">

Cancels an ongoing ingestion of data into SPICE.

```sql
EXEC aws.quicksight.ingestions.cancel_ingestion 
@aws_account_id='{{ aws_account_id }}' --required, 
@data_set_id='{{ data_set_id }}' --required, 
@ingestion_id='{{ ingestion_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
