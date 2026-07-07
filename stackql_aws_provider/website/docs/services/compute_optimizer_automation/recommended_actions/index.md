--- 
title: recommended_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - recommended_actions
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

Creates, updates, deletes, gets or lists a <code>recommended_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommended_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.recommended_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommended_actions"
    values={[
        { label: 'list_recommended_actions', value: 'list_recommended_actions' }
    ]}
>
<TabItem value="list_recommended_actions">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="currentResourceDetails" /></td>
    <td><code>object</code></td>
    <td>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</td>
</tr>
<tr>
    <td><CopyableCode code="currentResourceSummary" /></td>
    <td><code>string</code></td>
    <td>A summary of the resource's current configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedMonthlySavings" /></td>
    <td><code>object</code></td>
    <td>Contains information about estimated monthly cost savings.</td>
</tr>
<tr>
    <td><CopyableCode code="lookBackPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days of historical data used to generate the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedActionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommended action. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedActionType" /></td>
    <td><code>string</code></td>
    <td>Recommended action type enumeration (SnapshotAndDeleteUnattachedEbsVolume, UpgradeEbsVolumeType)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedResourceDetails" /></td>
    <td><code>object</code></td>
    <td>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedResourceSummary" /></td>
    <td><code>string</code></td>
    <td>A summary of the resource's recommended configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource that the recommendation applies to. (pattern: &lt;code&gt;arn:aws&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource that the recommendation applies to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceTags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource being evaluated. (EbsVolume)</td>
</tr>
<tr>
    <td><CopyableCode code="restartNeeded" /></td>
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
    <td><a href="#list_recommended_actions"><CopyableCode code="list_recommended_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the recommended actions based that match specified filters. Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using AssociateAccounts.</td>
</tr>
<tr>
    <td><a href="#start_automation_event"><CopyableCode code="start_automation_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommendedActionId"><code>recommendedActionId</code></a></td>
    <td></td>
    <td>Initiates a one-time, on-demand automation for the specified recommended action. Management accounts and delegated administrators can only initiate recommended actions for associated member accounts. You can associate a member account using AssociateAccounts.</td>
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
    defaultValue="list_recommended_actions"
    values={[
        { label: 'list_recommended_actions', value: 'list_recommended_actions' }
    ]}
>
<TabItem value="list_recommended_actions">

Lists the recommended actions based that match specified filters. Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using AssociateAccounts.

```sql
SELECT
accountId,
currentResourceDetails,
currentResourceSummary,
estimatedMonthlySavings,
lookBackPeriodInDays,
recommendedActionId,
recommendedActionType,
recommendedResourceDetails,
recommendedResourceSummary,
region,
resourceArn,
resourceId,
resourceTags,
resourceType,
restartNeeded
FROM aws.compute_optimizer_automation.recommended_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_automation_event"
    values={[
        { label: 'start_automation_event', value: 'start_automation_event' }
    ]}
>
<TabItem value="start_automation_event">

Initiates a one-time, on-demand automation for the specified recommended action. Management accounts and delegated administrators can only initiate recommended actions for associated member accounts. You can associate a member account using AssociateAccounts.

```sql
EXEC aws.compute_optimizer_automation.recommended_actions.start_automation_event 
@region='{{ region }}' --required 
@@json=
'{
"recommendedActionId": "{{ recommendedActionId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
