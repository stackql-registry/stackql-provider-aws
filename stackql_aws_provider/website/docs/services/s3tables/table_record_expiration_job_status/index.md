--- 
title: table_record_expiration_job_status
hide_title: false
hide_table_of_contents: false
keywords:
  - table_record_expiration_job_status
  - s3tables
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

Creates, updates, deletes, gets or lists a <code>table_record_expiration_job_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_record_expiration_job_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_record_expiration_job_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_record_expiration_job_status"
    values={[
        { label: 'get_table_record_expiration_job_status', value: 'get_table_record_expiration_job_status' }
    ]}
>
<TabItem value="get_table_record_expiration_job_status">

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
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>If the job failed, this field contains an error message describing the failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the expiration job was last executed.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Metrics about the most recent expiration job execution, including the number of records and files deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the most recent expiration job. (NotYetRun, Successful, Failed, Disabled)</td>
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
    <td><a href="#get_table_record_expiration_job_status"><CopyableCode code="get_table_record_expiration_job_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status, metrics, and details of the latest record expiration job for a table. This includes when the job ran, and whether it succeeded or failed. If the job ran successfully, this also includes statistics about the records that were removed. Permissions You must have the s3tables:GetTableRecordExpirationJobStatus permission to use this operation.</td>
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
<tr id="parameter-tableArn">
    <td><CopyableCode code="tableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_record_expiration_job_status"
    values={[
        { label: 'get_table_record_expiration_job_status', value: 'get_table_record_expiration_job_status' }
    ]}
>
<TabItem value="get_table_record_expiration_job_status">

Retrieves the status, metrics, and details of the latest record expiration job for a table. This includes when the job ran, and whether it succeeded or failed. If the job ran successfully, this also includes statistics about the records that were removed. Permissions You must have the s3tables:GetTableRecordExpirationJobStatus permission to use this operation.

```sql
SELECT
failureMessage,
lastRunTimestamp,
metrics,
status
FROM aws.s3tables.table_record_expiration_job_status
WHERE tableArn = '{{ tableArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
