--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
  - simpledbv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.simpledbv2.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="get_export">

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
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The client token provided for this export.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that was exported.</td>
</tr>
<tr>
    <td><CopyableCode code="export_arn" /></td>
    <td><code>string</code></td>
    <td>A unique ARN identifier for the export.</td>
</tr>
<tr>
    <td><CopyableCode code="export_data_cutoff_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating the cutoff point for data inclusion in the export. All data inserted or modified before this time will be present in the exported data. Data insertions or modifications after this timestamp may or may not be present in the export.</td>
</tr>
<tr>
    <td><CopyableCode code="export_manifest" /></td>
    <td><code>string</code></td>
    <td>The name of the manifest summary file for the export.</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the export. Current possible values include : PENDING - export request received, IN_PROGRESS - export is being processed, SUCCEEDED - export completed successfully, and FAILED - export encountered an error. (PENDING, IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>Failure code for the result of the failed export. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>Export failure reason description.</td>
</tr>
<tr>
    <td><CopyableCode code="items_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total number of exported items.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the export request was received by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket for this export. (pattern: &lt;code&gt;&#91;a-z0-9A-Z&#93;+&#91;\.\-\w&#93;*&#91;a-z0-9A-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_bucket_owner" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket owner account ID for this export. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_key_prefix" /></td>
    <td><code>string</code></td>
    <td>The S3 key prefix provided in the corresponding StartDomainExport request.</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_sse_algorithm" /></td>
    <td><code>string</code></td>
    <td>The S3 SSE encryption algorithm for this export. (AES256, KMS)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_sse_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key ID for this export.</td>
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
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name that uniquely identifies a SimpleDB domain within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="export_arn" /></td>
    <td><code>string</code></td>
    <td>A unique ARN identifier for the export.</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the export. Current possible values include : PENDING - export request received, IN_PROGRESS - export is being processed, SUCCEEDED - export completed successfully, and FAILED - export encountered an error. (PENDING, IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the export request was received by the service</td>
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
    <td><a href="#get_export"><CopyableCode code="get_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information for an existing domain export.</td>
</tr>
<tr>
    <td><a href="#list_exports"><CopyableCode code="list_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all exports that were created. The results are paginated and can be filtered by domain name.</td>
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
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="get_export">

Returns information for an existing domain export.

```sql
SELECT
client_token,
domain_name,
export_arn,
export_data_cutoff_time,
export_manifest,
export_status,
failure_code,
failure_message,
items_count,
requested_at,
s_3_bucket,
s_3_bucket_owner,
s_3_key_prefix,
s_3_sse_algorithm,
s_3_sse_kms_key_id
FROM aws.simpledbv2.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exports">

Lists all exports that were created. The results are paginated and can be filtered by domain name.

```sql
SELECT
domain_name,
export_arn,
export_status,
requested_at
FROM aws.simpledbv2.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
