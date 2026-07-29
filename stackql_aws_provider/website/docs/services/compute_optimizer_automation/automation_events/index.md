--- 
title: automation_events
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_events
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

Creates, updates, deletes, gets or lists an <code>automation_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.automation_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_event"
    values={[
        { label: 'get_automation_event', value: 'get_automation_event' },
        { label: 'list_automation_events', value: 'list_automation_events' }
    ]}
>
<TabItem value="get_automation_event">

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
    <td>The Amazon Web Services account ID associated with the automation event. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation event completed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_savings" /></td>
    <td><code>object</code></td>
    <td>Contains information about estimated monthly cost savings.</td>
</tr>
<tr>
    <td><CopyableCode code="event_description" /></td>
    <td><code>string</code></td>
    <td>A description of the automation event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the automation event to retrieve. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the automation event. (Ready, InProgress, Complete, Failed, Cancelled, RollbackReady, RollbackInProgress, RollbackComplete, RollbackFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current event status.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of automation event. (SnapshotAndDeleteUnattachedEbsVolume, UpgradeEbsVolumeType)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the recommended action associated with this automation event. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the automation event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource affected by the automation event. (pattern: &lt;code&gt;arn:aws&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource affected by the automation event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource affected by the automation event. (EbsVolume)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the automation rule that triggered this event. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automation_events">

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
    <td>The Amazon Web Services account ID associated with the automation event. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation event completed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_savings" /></td>
    <td><code>object</code></td>
    <td>Contains information about estimated monthly cost savings.</td>
</tr>
<tr>
    <td><CopyableCode code="event_description" /></td>
    <td><code>string</code></td>
    <td>A description of the automation event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the automation event. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the automation event. (Ready, InProgress, Complete, Failed, Cancelled, RollbackReady, RollbackInProgress, RollbackComplete, RollbackFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current event status.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of automation event. (SnapshotAndDeleteUnattachedEbsVolume, UpgradeEbsVolumeType)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the recommended action associated with this automation event. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the automation event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource affected by the automation event. (pattern: &lt;code&gt;arn:aws&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource affected by the automation event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource affected by the automation event. (EbsVolume)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the automation rule that triggered this event. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_automation_event"><CopyableCode code="get_automation_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific automation event.</td>
</tr>
<tr>
    <td><a href="#list_automation_events"><CopyableCode code="list_automation_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists automation events based on specified filters. You can retrieve events that were created within the past year.</td>
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
    defaultValue="get_automation_event"
    values={[
        { label: 'get_automation_event', value: 'get_automation_event' },
        { label: 'list_automation_events', value: 'list_automation_events' }
    ]}
>
<TabItem value="get_automation_event">

Retrieves details about a specific automation event.

```sql
SELECT
account_id,
completed_timestamp,
created_timestamp,
estimated_monthly_savings,
event_description,
event_id,
event_status,
event_status_reason,
event_type,
recommended_action_id,
region,
resource_arn,
resource_id,
resource_type,
rule_id
FROM aws.compute_optimizer_automation.automation_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automation_events">

Lists automation events based on specified filters. You can retrieve events that were created within the past year.

```sql
SELECT
account_id,
completed_timestamp,
created_timestamp,
estimated_monthly_savings,
event_description,
event_id,
event_status,
event_status_reason,
event_type,
recommended_action_id,
region,
resource_arn,
resource_id,
resource_type,
rule_id
FROM aws.compute_optimizer_automation.automation_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
