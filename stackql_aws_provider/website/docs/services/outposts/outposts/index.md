--- 
title: outposts
hide_title: false
hide_table_of_contents: false
keywords:
  - outposts
  - outposts
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

Creates, updates, deletes, gets or lists an <code>outposts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outposts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.outposts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outpost"
    values={[
        { label: 'get_outpost', value: 'get_outpost' },
        { label: 'list_outposts', value: 'list_outposts' }
    ]}
>
<TabItem value="get_outpost">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone. (pattern: &lt;code&gt;^(&#91;a-zA-Z&#93;+-)&#123;1,3&#125;(&#91;a-zA-Z&#93;+)?(\d+&#91;a-zA-Z&#93;?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+\d-&#91;a-zA-Z&#93;+\d$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Outpost. (pattern: &lt;code&gt;^&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status. (pattern: &lt;code&gt;^&#91; A-Za-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Outpost. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/)?op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Outpost owner. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the site. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/)?(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_hardware_type" /></td>
    <td><code>string</code></td>
    <td>The hardware type. (RACK, SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The Outpost tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_outposts">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone. (pattern: &lt;code&gt;^(&#91;a-zA-Z&#93;+-)&#123;1,3&#125;(&#91;a-zA-Z&#93;+)?(\d+&#91;a-zA-Z&#93;?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+\d-&#91;a-zA-Z&#93;+\d$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Outpost. (pattern: &lt;code&gt;^&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status. (pattern: &lt;code&gt;^&#91; A-Za-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Outpost. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/)?op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Outpost owner. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the site. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/)?(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_hardware_type" /></td>
    <td><code>string</code></td>
    <td>The hardware type. (RACK, SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The Outpost tags.</td>
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
    <td><a href="#get_outpost"><CopyableCode code="get_outpost" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified Outpost.</td>
</tr>
<tr>
    <td><a href="#list_outposts"><CopyableCode code="list_outposts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-LifeCycleStatusFilter"><code>LifeCycleStatusFilter</code></a>, <a href="#parameter-AvailabilityZoneFilter"><code>AvailabilityZoneFilter</code></a>, <a href="#parameter-AvailabilityZoneIdFilter"><code>AvailabilityZoneIdFilter</code></a></td>
    <td>Lists the Outposts for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</td>
</tr>
<tr>
    <td><a href="#create_renewal"><CopyableCode code="create_renewal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PaymentOption"><code>PaymentOption</code></a>, <a href="#parameter-PaymentTerm"><code>PaymentTerm</code></a>, <a href="#parameter-OutpostIdentifier"><code>OutpostIdentifier</code></a></td>
    <td></td>
    <td>Creates a renewal contract for the specified Outpost.</td>
</tr>
<tr>
    <td><a href="#create_outpost"><CopyableCode code="create_outpost" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SiteId"><code>SiteId</code></a></td>
    <td></td>
    <td>Creates an Outpost. You can specify either an Availability one or an AZ ID.</td>
</tr>
<tr>
    <td><a href="#update_outpost"><CopyableCode code="update_outpost" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Outpost.</td>
</tr>
<tr>
    <td><a href="#delete_outpost"><CopyableCode code="delete_outpost" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Outpost.</td>
</tr>
<tr>
    <td><a href="#cancel_capacity_task"><CopyableCode code="cancel_capacity_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-capacity_task_id"><code>capacity_task_id</code></a>, <a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the capacity task.</td>
</tr>
<tr>
    <td><a href="#start_capacity_task"><CopyableCode code="start_capacity_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstancePools"><code>InstancePools</code></a></td>
    <td></td>
    <td>Starts the specified capacity task. You can have one active capacity task for each order and each Outpost.</td>
</tr>
<tr>
    <td><a href="#start_outpost_decommission"><CopyableCode code="start_outpost_decommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts the decommission process to return the Outposts racks or servers.</td>
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
<tr id="parameter-capacity_task_id">
    <td><CopyableCode code="capacity_task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the capacity task that you want to cancel.</td>
</tr>
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Outpost that you want to decommission.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AvailabilityZoneFilter">
    <td><CopyableCode code="AvailabilityZoneFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by Availability Zone (for example, us-east-1a).</td>
</tr>
<tr id="parameter-AvailabilityZoneIdFilter">
    <td><CopyableCode code="AvailabilityZoneIdFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by AZ ID (for example, use1-az1).</td>
</tr>
<tr id="parameter-LifeCycleStatusFilter">
    <td><CopyableCode code="LifeCycleStatusFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by the lifecycle status.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_outpost"
    values={[
        { label: 'get_outpost', value: 'get_outpost' },
        { label: 'list_outposts', value: 'list_outposts' }
    ]}
>
<TabItem value="get_outpost">

Gets information about the specified Outpost.

```sql
SELECT
availability_zone,
availability_zone_id,
description,
life_cycle_status,
name,
outpost_arn,
outpost_id,
owner_id,
site_arn,
site_id,
supported_hardware_type,
tags
FROM aws.outposts.outposts
WHERE outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_outposts">

Lists the Outposts for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.

```sql
SELECT
availability_zone,
availability_zone_id,
description,
life_cycle_status,
name,
outpost_arn,
outpost_id,
owner_id,
site_arn,
site_id,
supported_hardware_type,
tags
FROM aws.outposts.outposts
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND LifeCycleStatusFilter = '{{ LifeCycleStatusFilter }}'
AND AvailabilityZoneFilter = '{{ AvailabilityZoneFilter }}'
AND AvailabilityZoneIdFilter = '{{ AvailabilityZoneIdFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_renewal"
    values={[
        { label: 'create_renewal', value: 'create_renewal' },
        { label: 'create_outpost', value: 'create_outpost' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_renewal">

Creates a renewal contract for the specified Outpost.

```sql
INSERT INTO aws.outposts.outposts (
PaymentOption,
PaymentTerm,
OutpostIdentifier,
ClientToken,
region
)
SELECT 
'{{ PaymentOption }}' /* required */,
'{{ PaymentTerm }}' /* required */,
'{{ OutpostIdentifier }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
currency,
monthly_recurring_price,
outpost_id,
payment_option,
payment_term,
upfront_price
;
```
</TabItem>
<TabItem value="create_outpost">

Creates an Outpost. You can specify either an Availability one or an AZ ID.

```sql
INSERT INTO aws.outposts.outposts (
Name,
Description,
SiteId,
AvailabilityZone,
AvailabilityZoneId,
Tags,
SupportedHardwareType,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ SiteId }}' /* required */,
'{{ AvailabilityZone }}',
'{{ AvailabilityZoneId }}',
'{{ Tags }}',
'{{ SupportedHardwareType }}',
'{{ region }}'
RETURNING
outpost
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: outposts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the outposts resource.
    - name: PaymentOption
      value: "{{ PaymentOption }}"
      valid_values: ['ALL_UPFRONT', 'NO_UPFRONT', 'PARTIAL_UPFRONT']
    - name: PaymentTerm
      value: "{{ PaymentTerm }}"
      valid_values: ['THREE_YEARS', 'ONE_YEAR', 'FIVE_YEARS']
    - name: OutpostIdentifier
      value: "{{ OutpostIdentifier }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the Outpost.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the Outpost.
    - name: SiteId
      value: "{{ SiteId }}"
      description: |
        The ID of the site.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: |
        The Availability Zone.
    - name: AvailabilityZoneId
      value: "{{ AvailabilityZoneId }}"
      description: |
        The ID of the Availability Zone.
    - name: Tags
      value: "{{ Tags }}"
    - name: SupportedHardwareType
      value: "{{ SupportedHardwareType }}"
      valid_values: ['RACK', 'SERVER']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_outpost"
    values={[
        { label: 'update_outpost', value: 'update_outpost' }
    ]}
>
<TabItem value="update_outpost">

Updates an Outpost.

```sql
UPDATE aws.outposts.outposts
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
SupportedHardwareType = '{{ SupportedHardwareType }}'
WHERE 
outpost_id = '{{ outpost_id }}' --required
AND region = '{{ region }}' --required
RETURNING
outpost;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_outpost"
    values={[
        { label: 'delete_outpost', value: 'delete_outpost' }
    ]}
>
<TabItem value="delete_outpost">

Deletes the specified Outpost.

```sql
DELETE FROM aws.outposts.outposts
WHERE outpost_id = '{{ outpost_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_capacity_task"
    values={[
        { label: 'cancel_capacity_task', value: 'cancel_capacity_task' },
        { label: 'start_capacity_task', value: 'start_capacity_task' },
        { label: 'start_outpost_decommission', value: 'start_outpost_decommission' }
    ]}
>
<TabItem value="cancel_capacity_task">

Cancels the capacity task.

```sql
EXEC aws.outposts.outposts.cancel_capacity_task 
@capacity_task_id='{{ capacity_task_id }}' --required, 
@outpost_id='{{ outpost_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_capacity_task">

Starts the specified capacity task. You can have one active capacity task for each order and each Outpost.

```sql
EXEC aws.outposts.outposts.start_capacity_task 
@outpost_id='{{ outpost_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"OrderId": "{{ OrderId }}", 
"AssetId": "{{ AssetId }}", 
"InstancePools": "{{ InstancePools }}", 
"InstancesToExclude": "{{ InstancesToExclude }}", 
"DryRun": {{ DryRun }}, 
"TaskActionOnBlockingInstances": "{{ TaskActionOnBlockingInstances }}"
}'
;
```
</TabItem>
<TabItem value="start_outpost_decommission">

Starts the decommission process to return the Outposts racks or servers.

```sql
EXEC aws.outposts.outposts.start_outpost_decommission 
@outpost_id='{{ outpost_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ValidateOnly": {{ ValidateOnly }}
}'
;
```
</TabItem>
</Tabs>
