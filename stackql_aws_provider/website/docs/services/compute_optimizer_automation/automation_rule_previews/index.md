--- 
title: automation_rule_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rule_previews
  - compute_optimizer_automation
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

Creates, updates, deletes, gets or lists an <code>automation_rule_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_rule_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.automation_rule_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_automation_rule_preview"
    values={[
        { label: 'list_automation_rule_preview', value: 'list_automation_rule_preview' }
    ]}
>
<TabItem value="list_automation_rule_preview">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the resource. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_details" /></td>
    <td><code>object</code></td>
    <td>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_summary" /></td>
    <td><code>string</code></td>
    <td>A summary of the resource's current configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_savings" /></td>
    <td><code>object</code></td>
    <td>Contains information about estimated monthly cost savings.</td>
</tr>
<tr>
    <td><CopyableCode code="look_back_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days of historical data used to analyze the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the recommended action being previewed. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_type" /></td>
    <td><code>string</code></td>
    <td>Recommended action type enumeration (SnapshotAndDeleteUnattachedEbsVolume, UpgradeEbsVolumeType)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_details" /></td>
    <td><code>object</code></td>
    <td>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_summary" /></td>
    <td><code>string</code></td>
    <td>A summary of the resource's recommended configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource affected by the recommended action. (pattern: &lt;code&gt;arn:aws&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource affected by the recommended action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource being evaluated. (EbsVolume)</td>
</tr>
<tr>
    <td><CopyableCode code="restart_needed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether implementing the recommended action requires a resource restart.</td>
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
    <td><a href="#list_automation_rule_preview"><CopyableCode code="list_automation_rule_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a preview of the recommended actions that match your Automation rule's configuration and criteria.</td>
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
    defaultValue="list_automation_rule_preview"
    values={[
        { label: 'list_automation_rule_preview', value: 'list_automation_rule_preview' }
    ]}
>
<TabItem value="list_automation_rule_preview">

Returns a preview of the recommended actions that match your Automation rule's configuration and criteria.

```sql
SELECT
account_id,
current_resource_details,
current_resource_summary,
estimated_monthly_savings,
look_back_period_in_days,
recommended_action_id,
recommended_action_type,
recommended_resource_details,
recommended_resource_summary,
region,
resource_arn,
resource_id,
resource_tags,
resource_type,
restart_needed
FROM aws.compute_optimizer_automation.automation_rule_previews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
