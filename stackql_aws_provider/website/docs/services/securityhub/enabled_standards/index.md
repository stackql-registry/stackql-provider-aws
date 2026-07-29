--- 
title: enabled_standards
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_standards
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>enabled_standards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enabled_standards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.enabled_standards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enabled_standards"
    values={[
        { label: 'get_enabled_standards', value: 'get_enabled_standards' }
    ]}
>
<TabItem value="get_enabled_standards">

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
    <td><CopyableCode code="standards_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_controls_updatable" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you can retrieve information about and configure individual controls that apply to the standard. Possible values are: READY_FOR_UPDATES - Controls in the standard can be retrieved and configured. NOT_READY_FOR_UPDATES - Controls in the standard cannot be retrieved or configured. (READY_FOR_UPDATES, NOT_READY_FOR_UPDATES)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_input" /></td>
    <td><code>object</code></td>
    <td>A key-value pair of input for the standard.</td>
</tr>
<tr>
    <td><CopyableCode code="standards_status" /></td>
    <td><code>string</code></td>
    <td>The status of your subscription to the standard. Possible values are: PENDING - The standard is in the process of being enabled. Or the standard is already enabled and Security Hub CSPM is adding new controls to the standard. READY - The standard is enabled. INCOMPLETE - The standard could not be enabled completely. One or more errors (StandardsStatusReason) occurred when Security Hub CSPM attempted to enable the standard. DELETING - The standard is in the process of being disabled. FAILED - The standard could not be disabled. One or more errors (StandardsStatusReason) occurred when Security Hub CSPM attempted to disable the standard. (PENDING, READY, FAILED, DELETING, INCOMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_status_reason" /></td>
    <td><code>object</code></td>
    <td>The reason for the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="standards_subscription_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource that represents your subscription to the standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_enabled_standards"><CopyableCode code="get_enabled_standards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the standards that are currently enabled.</td>
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
    defaultValue="get_enabled_standards"
    values={[
        { label: 'get_enabled_standards', value: 'get_enabled_standards' }
    ]}
>
<TabItem value="get_enabled_standards">

Returns a list of the standards that are currently enabled.

```sql
SELECT
standards_arn,
standards_controls_updatable,
standards_input,
standards_status,
standards_status_reason,
standards_subscription_arn
FROM aws.securityhub.enabled_standards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
