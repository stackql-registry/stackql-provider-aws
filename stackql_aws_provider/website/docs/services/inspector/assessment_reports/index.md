--- 
title: assessment_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_reports
  - inspector
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

Creates, updates, deletes, gets or lists an <code>assessment_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.assessment_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assessment_report"
    values={[
        { label: 'get_assessment_report', value: 'get_assessment_report' }
    ]}
>
<TabItem value="get_assessment_report">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the request to generate an assessment report. (WORK_IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Specifies the URL where you can find the generated assessment report. This parameter is only returned if the report is successfully generated.</td>
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
    <td><a href="#get_assessment_report"><CopyableCode code="get_assessment_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.</td>
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
    defaultValue="get_assessment_report"
    values={[
        { label: 'get_assessment_report', value: 'get_assessment_report' }
    ]}
>
<TabItem value="get_assessment_report">

Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.

```sql
SELECT
status,
url
FROM aws.inspector.assessment_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
