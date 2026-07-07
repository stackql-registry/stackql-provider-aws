--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
  - dynamodb
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export"
    values={[
        { label: 'describe_export', value: 'describe_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="describe_export">

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
    <td><CopyableCode code="BilledSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The billable size of the table export.</td>
</tr>
<tr>
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>The client token that was provided for the export task. A client token makes calls to ExportTableToPointInTimeInput idempotent, meaning that multiple identical calls have the same effect as one single call. (pattern: &lt;code&gt;^&#91;^\$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the export task completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table export.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the exported data. Valid values for ExportFormat are DYNAMODB_JSON or ION. (DYNAMODB_JSON, ION)</td>
</tr>
<tr>
    <td><CopyableCode code="ExportManifest" /></td>
    <td><code>string</code></td>
    <td>The name of the manifest file for the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportStatus" /></td>
    <td><code>string</code></td>
    <td>Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED. (IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="ExportTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Point in time from which table data was exported.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportType" /></td>
    <td><code>string</code></td>
    <td>The type of export that was performed. Valid values are FULL_EXPORT or INCREMENTAL_EXPORT. (FULL_EXPORT, INCREMENTAL_EXPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureCode" /></td>
    <td><code>string</code></td>
    <td>Status code for the result of the failed export.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureMessage" /></td>
    <td><code>string</code></td>
    <td>Export failure reason description.</td>
</tr>
<tr>
    <td><CopyableCode code="IncrementalExportSpecification" /></td>
    <td><code>object</code></td>
    <td>Optional object containing the parameters specific to an incremental export.</td>
</tr>
<tr>
    <td><CopyableCode code="ItemCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items exported.</td>
</tr>
<tr>
    <td><CopyableCode code="S3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket containing the export. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z&#93;+&#91;\.\-\w&#93;*&#91;a-z0-9A-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="S3BucketOwner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the bucket containing the export. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="S3Prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket prefix used as the file name and path of the exported snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="S3SseAlgorithm" /></td>
    <td><code>string</code></td>
    <td>Type of encryption used on the bucket where export data is stored. Valid values for S3SseAlgorithm are: AES256 - server-side encryption with Amazon S3 managed keys KMS - server-side encryption with KMS managed keys (AES256, KMS)</td>
</tr>
<tr>
    <td><CopyableCode code="S3SseKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS managed key used to encrypt the S3 bucket where export data is stored (if applicable).</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the export task began.</td>
</tr>
<tr>
    <td><CopyableCode code="TableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table that was exported.</td>
</tr>
<tr>
    <td><CopyableCode code="TableId" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the table that was exported. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exports">

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
    <td><CopyableCode code="ExportSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of ExportSummary objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If this value is returned, there are additional results to be displayed. To retrieve them, call ListExports again, with NextToken set to this value.</td>
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
    <td><a href="#describe_export"><CopyableCode code="describe_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing table export.</td>
</tr>
<tr>
    <td><a href="#list_exports"><CopyableCode code="list_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists completed exports within the past 90 days, in reverse alphanumeric order of ExportArn.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_export"
    values={[
        { label: 'describe_export', value: 'describe_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="describe_export">

Describes an existing table export.

```sql
SELECT
BilledSizeBytes,
ClientToken,
EndTime,
ExportArn,
ExportFormat,
ExportManifest,
ExportStatus,
ExportTime,
ExportType,
FailureCode,
FailureMessage,
IncrementalExportSpecification,
ItemCount,
S3Bucket,
S3BucketOwner,
S3Prefix,
S3SseAlgorithm,
S3SseKmsKeyId,
StartTime,
TableArn,
TableId
FROM aws.dynamodb.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exports">

Lists completed exports within the past 90 days, in reverse alphanumeric order of ExportArn.

```sql
SELECT
ExportSummaries,
NextToken
FROM aws.dynamodb.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
