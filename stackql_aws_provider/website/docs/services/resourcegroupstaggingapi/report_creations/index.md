--- 
title: report_creations
hide_title: false
hide_table_of_contents: false
keywords:
  - report_creations
  - resourcegroupstaggingapi
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

Creates, updates, deletes, gets or lists a <code>report_creations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_creations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.report_creations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_report_creation"
    values={[
        { label: 'describe_report_creation', value: 'describe_report_creation' }
    ]}
>
<TabItem value="describe_report_creation">

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
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Details of the common errors that all operations return.</td>
</tr>
<tr>
    <td><CopyableCode code="S3Location" /></td>
    <td><code>string</code></td>
    <td>The path to the Amazon S3 bucket where the report was stored on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Reports the status of the operation. The operation status can be one of the following: RUNNING - Report creation is in progress. SUCCEEDED - Report creation is complete. You can open the report from the Amazon S3 bucket that you specified when you ran StartReportCreation. FAILED - Report creation timed out or the Amazon S3 bucket is not accessible. NO REPORT - No report was generated in the last 90 days.</td>
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
    <td><a href="#describe_report_creation"><CopyableCode code="describe_report_creation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the status of the StartReportCreation operation. You can call this operation only from the organization's management account and from the us-east-1 Region.</td>
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
    defaultValue="describe_report_creation"
    values={[
        { label: 'describe_report_creation', value: 'describe_report_creation' }
    ]}
>
<TabItem value="describe_report_creation">

Describes the status of the StartReportCreation operation. You can call this operation only from the organization's management account and from the us-east-1 Region.

```sql
SELECT
ErrorMessage,
S3Location,
Status
FROM aws.resourcegroupstaggingapi.report_creations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
