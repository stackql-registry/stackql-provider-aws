--- 
title: ad_assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - ad_assessments
  - ds
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

Creates, updates, deletes, gets or lists an <code>ad_assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ad_assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.ad_assessments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ad_assessment"
    values={[
        { label: 'describe_ad_assessment', value: 'describe_ad_assessment' },
        { label: 'list_ad_assessments', value: 'list_ad_assessments' }
    ]}
>
<TabItem value="describe_ad_assessment">

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
    <td><CopyableCode code="assessment" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the self-managed instance settings (IDs and DNS IPs).</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_reports" /></td>
    <td><code>array</code></td>
    <td>A list of assessment reports containing validation results for each domain controller and test category. Each report includes specific validation details and outcomes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ad_assessments">

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
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the directory assessment. (pattern: &lt;code&gt;^da-&#91;0-9a-f&#93;&#123;18&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_dns_ips" /></td>
    <td><code>array</code></td>
    <td>The IP addresses of the DNS servers or domain controllers in your self-managed AD environment.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the directory associated with this assessment. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) of the Active Directory domain being assessed. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the assessment status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="report_type" /></td>
    <td><code>string</code></td>
    <td>The type of assessment report generated. Valid values include CUSTOMER and SYSTEM.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the assessment was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the assessment. Valid values include SUCCESS, FAILED, PENDING, and IN_PROGRESS.</td>
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
    <td><a href="#describe_ad_assessment"><CopyableCode code="describe_ad_assessment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a directory assessment, including its current status, validation results, and configuration details. Use this operation to monitor assessment progress and review results.</td>
</tr>
<tr>
    <td><a href="#list_ad_assessments"><CopyableCode code="list_ad_assessments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of directory assessments for the specified directory or all assessments in your account. Use this operation to monitor assessment status and manage multiple assessments.</td>
</tr>
<tr>
    <td><a href="#delete_ad_assessment"><CopyableCode code="delete_ad_assessment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a directory assessment and all associated data. This operation permanently removes the assessment results, validation reports, and configuration information. You cannot delete system-initiated assessments. You can delete customer-created assessments even if they are in progress.</td>
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
    defaultValue="describe_ad_assessment"
    values={[
        { label: 'describe_ad_assessment', value: 'describe_ad_assessment' },
        { label: 'list_ad_assessments', value: 'list_ad_assessments' }
    ]}
>
<TabItem value="describe_ad_assessment">

Retrieves detailed information about a directory assessment, including its current status, validation results, and configuration details. Use this operation to monitor assessment progress and review results.

```sql
SELECT
assessment,
assessment_reports
FROM aws.ds.ad_assessments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ad_assessments">

Retrieves a list of directory assessments for the specified directory or all assessments in your account. Use this operation to monitor assessment status and manage multiple assessments.

```sql
SELECT
assessment_id,
customer_dns_ips,
directory_id,
dns_name,
last_update_date_time,
report_type,
start_time,
status
FROM aws.ds.ad_assessments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ad_assessment"
    values={[
        { label: 'delete_ad_assessment', value: 'delete_ad_assessment' }
    ]}
>
<TabItem value="delete_ad_assessment">

Deletes a directory assessment and all associated data. This operation permanently removes the assessment results, validation reports, and configuration information. You cannot delete system-initiated assessments. You can delete customer-created assessments even if they are in progress.

```sql
DELETE FROM aws.ds.ad_assessments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
