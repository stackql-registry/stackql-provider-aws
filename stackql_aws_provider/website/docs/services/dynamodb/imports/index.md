--- 
title: imports
hide_title: false
hide_table_of_contents: false
keywords:
  - imports
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

Creates, updates, deletes, gets or lists an <code>imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import"
    values={[
        { label: 'describe_import', value: 'describe_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="describe_import">

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
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>The client token that was provided for the import task. Reusing the client token on retry makes a call to ImportTable idempotent. (pattern: &lt;code&gt;^&#91;^\$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchLogGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with the target table.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the creation of the table associated with this import task completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of errors occurred on importing the source file into the target table.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureCode" /></td>
    <td><code>string</code></td>
    <td>The error code corresponding to the failure that the import job ran into during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureMessage" /></td>
    <td><code>string</code></td>
    <td>The error message corresponding to the failure that the import job ran into during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) corresponding to the import request.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the import. (IN_PROGRESS, COMPLETED, CANCELLING, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="ImportedItemCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items successfully imported into the new table.</td>
</tr>
<tr>
    <td><CopyableCode code="InputCompressionType" /></td>
    <td><code>string</code></td>
    <td>The compression options for the data that has been imported into the target table. The values are NONE, GZIP, or ZSTD. (GZIP, ZSTD, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="InputFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the source data going into the target table. (DYNAMODB_JSON, ION, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="InputFormatOptions" /></td>
    <td><code>object</code></td>
    <td>The format options for the data that was imported into the target table. There is one value, CsvOption.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessedItemCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of items processed from the source file.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessedSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total size of data processed from the source file, in Bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="S3BucketSource" /></td>
    <td><code>object</code></td>
    <td>Values for the S3 bucket the source file is imported from. Includes bucket name (required), key prefix (optional) and bucket account owner ID (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when this import task started.</td>
</tr>
<tr>
    <td><CopyableCode code="TableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the table being imported into.</td>
</tr>
<tr>
    <td><CopyableCode code="TableCreationParameters" /></td>
    <td><code>object</code></td>
    <td>The parameters for the new table that is being imported into.</td>
</tr>
<tr>
    <td><CopyableCode code="TableId" /></td>
    <td><code>string</code></td>
    <td>The table id corresponding to the table created by import table process. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_imports">

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
    <td><CopyableCode code="ImportSummaryList" /></td>
    <td><code>array</code></td>
    <td>A list of ImportSummary objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If this value is returned, there are additional results to be displayed. To retrieve them, call ListImports again, with NextToken set to this value. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;16&#125;)+&lt;/code&gt;)</td>
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
    <td><a href="#describe_import"><CopyableCode code="describe_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents the properties of the import.</td>
</tr>
<tr>
    <td><a href="#list_imports"><CopyableCode code="list_imports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists completed imports within the past 90 days.</td>
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
    defaultValue="describe_import"
    values={[
        { label: 'describe_import', value: 'describe_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="describe_import">

Represents the properties of the import.

```sql
SELECT
ClientToken,
CloudWatchLogGroupArn,
EndTime,
ErrorCount,
FailureCode,
FailureMessage,
ImportArn,
ImportStatus,
ImportedItemCount,
InputCompressionType,
InputFormat,
InputFormatOptions,
ProcessedItemCount,
ProcessedSizeBytes,
S3BucketSource,
StartTime,
TableArn,
TableCreationParameters,
TableId
FROM aws.dynamodb.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_imports">

Lists completed imports within the past 90 days.

```sql
SELECT
ImportSummaryList,
NextToken
FROM aws.dynamodb.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
