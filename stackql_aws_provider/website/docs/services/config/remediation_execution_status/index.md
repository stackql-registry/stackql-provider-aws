--- 
title: remediation_execution_status
hide_title: false
hide_table_of_contents: false
keywords:
  - remediation_execution_status
  - config
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

Creates, updates, deletes, gets or lists a <code>remediation_execution_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remediation_execution_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.remediation_execution_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_remediation_execution_status"
    values={[
        { label: 'describe_remediation_execution_status', value: 'describe_remediation_execution_status' }
    ]}
>
<TabItem value="describe_remediation_execution_status">

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
    <td><CopyableCode code="invocation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time when the remediation was executed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the remediation execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_key" /></td>
    <td><code>object</code></td>
    <td>The details that identify a resource within Config, including the resource type and resource ID.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>ENUM of the values. (QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="step_details" /></td>
    <td><code>array</code></td>
    <td>Details of every step.</td>
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
    <td><a href="#describe_remediation_execution_status"><CopyableCode code="describe_remediation_execution_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.</td>
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
    defaultValue="describe_remediation_execution_status"
    values={[
        { label: 'describe_remediation_execution_status', value: 'describe_remediation_execution_status' }
    ]}
>
<TabItem value="describe_remediation_execution_status">

Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.

```sql
SELECT
invocation_time,
last_updated_time,
resource_key,
state,
step_details
FROM aws.config.remediation_execution_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
