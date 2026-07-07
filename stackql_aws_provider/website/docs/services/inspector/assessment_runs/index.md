--- 
title: assessment_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_runs
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

Creates, updates, deletes, gets or lists an <code>assessment_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.assessment_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_assessment_runs"
    values={[
        { label: 'describe_assessment_runs', value: 'describe_assessment_runs' },
        { label: 'list_assessment_runs', value: 'list_assessment_runs' }
    ]}
>
<TabItem value="describe_assessment_runs">

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
    <td><CopyableCode code="assessmentRuns" /></td>
    <td><code>array</code></td>
    <td>Information about the assessment run.</td>
</tr>
<tr>
    <td><CopyableCode code="failedItems" /></td>
    <td><code>object</code></td>
    <td>Assessment run details that cannot be described. An error code is provided for each failed item.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assessment_runs">

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
    <td><CopyableCode code="assessment_run_arn" /></td>
    <td><code>string</code></td>
    <td>A list of ARNs that specifies the assessment runs that are returned by the action.</td>
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
    <td><a href="#describe_assessment_runs"><CopyableCode code="describe_assessment_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the assessment runs that are specified by the ARNs of the assessment runs.</td>
</tr>
<tr>
    <td><a href="#list_assessment_runs"><CopyableCode code="list_assessment_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.</td>
</tr>
<tr>
    <td><a href="#delete_assessment_run"><CopyableCode code="delete_assessment_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the assessment run that is specified by the ARN of the assessment run.</td>
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
    defaultValue="describe_assessment_runs"
    values={[
        { label: 'describe_assessment_runs', value: 'describe_assessment_runs' },
        { label: 'list_assessment_runs', value: 'list_assessment_runs' }
    ]}
>
<TabItem value="describe_assessment_runs">

Describes the assessment runs that are specified by the ARNs of the assessment runs.

```sql
SELECT
assessmentRuns,
failedItems
FROM aws.inspector.assessment_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assessment_runs">

Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.

```sql
SELECT
assessment_run_arn
FROM aws.inspector.assessment_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assessment_run"
    values={[
        { label: 'delete_assessment_run', value: 'delete_assessment_run' }
    ]}
>
<TabItem value="delete_assessment_run">

Deletes the assessment run that is specified by the ARN of the assessment run.

```sql
DELETE FROM aws.inspector.assessment_runs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
