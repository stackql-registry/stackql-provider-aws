--- 
title: evaluation_form_validations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_form_validations
  - connect
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

Creates, updates, deletes, gets or lists an <code>evaluation_form_validations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_form_validations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.evaluation_form_validations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evaluation_form_validation"
    values={[
        { label: 'get_evaluation_form_validation', value: 'get_evaluation_form_validation' }
    ]}
>
<TabItem value="get_evaluation_form_validation">

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
    <td><CopyableCode code="evaluation_form_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_version" /></td>
    <td><code>integer</code></td>
    <td>A version of the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the validation failed. This field is populated only when the status is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>A list of findings from the validation process. Each finding identifies a structural issue or quality improvement for the evaluation form, and may include a suggested fix. This field is populated when the status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="started_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the validation process was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the validation process. Valid values: IN_PROGRESS, COMPLETED, FAILED. (IN_PROGRESS, COMPLETED, FAILED)</td>
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
    <td><a href="#get_evaluation_form_validation"><CopyableCode code="get_evaluation_form_validation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves the status and results of a validation process started by StartEvaluationFormValidation. Returns the current execution status (IN_PROGRESS, COMPLETED, or FAILED), the validated form version, and when completed, a list of findings that identify structural issues and quality improvements for the evaluation form, and may include suggested fixes. If the validation failed, a reason is provided indicating the cause of the failure.</td>
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
<tr id="parameter-evaluation_form_id">
    <td><CopyableCode code="evaluation_form_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the evaluation form to retrieve validation results for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_evaluation_form_validation"
    values={[
        { label: 'get_evaluation_form_validation', value: 'get_evaluation_form_validation' }
    ]}
>
<TabItem value="get_evaluation_form_validation">

Retrieves the status and results of a validation process started by StartEvaluationFormValidation. Returns the current execution status (IN_PROGRESS, COMPLETED, or FAILED), the validated form version, and when completed, a list of findings that identify structural issues and quality improvements for the evaluation form, and may include suggested fixes. If the validation failed, a reason is provided indicating the cause of the failure.

```sql
SELECT
evaluation_form_id,
evaluation_form_version,
failure_reason,
findings,
started_time,
status
FROM aws.connect.evaluation_form_validations
WHERE instance_id = '{{ instance_id }}' -- required
AND evaluation_form_id = '{{ evaluation_form_id }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>
