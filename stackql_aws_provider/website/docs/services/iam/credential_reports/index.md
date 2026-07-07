--- 
title: credential_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - credential_reports
  - iam
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

Creates, updates, deletes, gets or lists a <code>credential_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credential_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.credential_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_credential_report"
    values={[
        { label: 'get_credential_report', value: 'get_credential_report' }
    ]}
>
<TabItem value="get_credential_report">

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
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>Contains the credential report. The report is Base64-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="GeneratedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the credential report was created, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportFormat" /></td>
    <td><code>string</code></td>
    <td>The format (MIME type) of the credential report.</td>
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
    <td><a href="#get_credential_report"><CopyableCode code="get_credential_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see Getting credential reports in the IAM User Guide.</td>
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
    defaultValue="get_credential_report"
    values={[
        { label: 'get_credential_report', value: 'get_credential_report' }
    ]}
>
<TabItem value="get_credential_report">

Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see Getting credential reports in the IAM User Guide.

```sql
SELECT
Content,
GeneratedTime,
ReportFormat
FROM aws.iam.credential_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
