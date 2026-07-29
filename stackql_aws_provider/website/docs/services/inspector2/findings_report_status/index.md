--- 
title: findings_report_status
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_report_status
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>findings_report_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_report_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.findings_report_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_report_status"
    values={[
        { label: 'get_findings_report_status', value: 'get_findings_report_status' }
    ]}
>
<TabItem value="get_findings_report_status">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Contains details of the Amazon S3 bucket and KMS key used to export findings.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code of the report. (INTERNAL_ERROR, INVALID_PERMISSIONS, NO_FINDINGS_FOUND, BUCKET_NOT_FOUND, INCOMPATIBLE_BUCKET_REGION, MALFORMED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria" /></td>
    <td><code>object</code></td>
    <td>Details on the criteria used to define the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the report. (pattern: &lt;code&gt;.*\b&#91;a-f0-9&#93;&#123;8&#125;\b-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-\b&#91;a-f0-9&#93;&#123;12&#125;\b.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the report. (SUCCEEDED, IN_PROGRESS, CANCELLED, FAILED)</td>
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
    <td><a href="#get_findings_report_status"><CopyableCode code="get_findings_report_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of a findings report.</td>
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
    defaultValue="get_findings_report_status"
    values={[
        { label: 'get_findings_report_status', value: 'get_findings_report_status' }
    ]}
>
<TabItem value="get_findings_report_status">

Gets the status of a findings report.

```sql
SELECT
destination,
error_code,
error_message,
filter_criteria,
report_id,
status
FROM aws.inspector2.findings_report_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
