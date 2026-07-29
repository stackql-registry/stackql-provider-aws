--- 
title: standards_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - standards_controls
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

Creates, updates, deletes, gets or lists a <code>standards_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="standards_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.standards_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_standards_controls"
    values={[
        { label: 'describe_standards_controls', value: 'describe_standards_controls' }
    ]}
>
<TabItem value="describe_standards_controls">

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
    <td><CopyableCode code="control_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the security standard control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the security standard control. Indicates whether the control is enabled or disabled. Security Hub CSPM does not check against disabled controls. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="control_status_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the status of the security standard control was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The longer description of the security standard control. Provides information about what the control is checking for. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_reason" /></td>
    <td><code>string</code></td>
    <td>The reason provided for the most recent change in status for the control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="related_requirements" /></td>
    <td><code>array</code></td>
    <td>The list of requirements that are related to this control.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_url" /></td>
    <td><code>string</code></td>
    <td>A link to remediation information for the control in the Security Hub CSPM user documentation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="severity_rating" /></td>
    <td><code>string</code></td>
    <td>The severity of findings generated from this security standard control. The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services resources if the issue is detected. (LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_control_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security standard control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the security standard control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_standards_controls"><CopyableCode code="describe_standards_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-standards_subscription_arn"><code>standards_subscription_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns a list of security standards controls. For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information. This operation returns an empty list for standard subscriptions where StandardsControlsUpdatable has value NOT_READY_FOR_UPDATES.</td>
</tr>
<tr>
    <td><a href="#update_standards_control"><CopyableCode code="update_standards_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-standards_control_arn"><code>standards_control_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to control whether an individual security standard control is enabled or disabled. Calls to this operation return a RESOURCE_NOT_FOUND_EXCEPTION error when the standard subscription for the control has StandardsControlsUpdatable value NOT_READY_FOR_UPDATES.</td>
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
<tr id="parameter-standards_control_arn">
    <td><CopyableCode code="standards_control_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security standard control to enable or disable.</td>
</tr>
<tr id="parameter-standards_subscription_arn">
    <td><CopyableCode code="standards_subscription_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a resource that represents your subscription to a supported standard. To get the subscription ARNs of the standards you have enabled, use the GetEnabledStandards operation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of security standard controls to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that is required for pagination. On your first call to the DescribeStandardsControls operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_standards_controls"
    values={[
        { label: 'describe_standards_controls', value: 'describe_standards_controls' }
    ]}
>
<TabItem value="describe_standards_controls">

Returns a list of security standards controls. For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information. This operation returns an empty list for standard subscriptions where StandardsControlsUpdatable has value NOT_READY_FOR_UPDATES.

```sql
SELECT
control_id,
control_status,
control_status_updated_at,
description,
disabled_reason,
related_requirements,
remediation_url,
severity_rating,
standards_control_arn,
title
FROM aws.securityhub.standards_controls
WHERE standards_subscription_arn = '{{ standards_subscription_arn }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_standards_control"
    values={[
        { label: 'update_standards_control', value: 'update_standards_control' }
    ]}
>
<TabItem value="update_standards_control">

Used to control whether an individual security standard control is enabled or disabled. Calls to this operation return a RESOURCE_NOT_FOUND_EXCEPTION error when the standard subscription for the control has StandardsControlsUpdatable value NOT_READY_FOR_UPDATES.

```sql
UPDATE aws.securityhub.standards_controls
SET 
ControlStatus = '{{ ControlStatus }}',
DisabledReason = '{{ DisabledReason }}'
WHERE 
standards_control_arn = '{{ standards_control_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
