--- 
title: affected_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - affected_entities
  - health
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

Creates, updates, deletes, gets or lists an <code>affected_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="affected_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.affected_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_affected_entities"
    values={[
        { label: 'describe_affected_entities', value: 'describe_affected_entities' }
    ]}
>
<TabItem value="describe_affected_entities">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit Amazon Web Services account number that contains the affected entity. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the entity. Format: arn:aws:health:entity-region:aws-account:entity/entity-id . Example: arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K (pattern: &lt;code&gt;.&#123;0,1600&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_metadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata about the affected entity.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the affected entity.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_value" /></td>
    <td><code>string</code></td>
    <td>The ID of the affected entity. (pattern: &lt;code&gt;.&#123;0,1224&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event. The event ARN has the arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID format. For example, an event ARN might look like the following: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456 (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+(-&#91;a-z&#93;+)?)?:health:&#91;^:&#93;*:&#91;^:&#93;*:event(?:/&#91;\w-&#93;+)&#123;3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time that the entity was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The most recent status of the entity affected by the event. The possible values are IMPAIRED, UNIMPAIRED, UNKNOWN, PENDING, and RESOLVED. (IMPAIRED, UNIMPAIRED, UNKNOWN, PENDING, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of entity tags attached to the affected entity. Currently, the tags property isn't supported.</td>
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
    <td><a href="#describe_affected_entities"><CopyableCode code="describe_affected_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this. At least one event ARN is required. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results. This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.</td>
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
    defaultValue="describe_affected_entities"
    values={[
        { label: 'describe_affected_entities', value: 'describe_affected_entities' }
    ]}
>
<TabItem value="describe_affected_entities">

Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this. At least one event ARN is required. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results. This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.

```sql
SELECT
aws_account_id,
entity_arn,
entity_metadata,
entity_url,
entity_value,
event_arn,
last_updated_time,
status_code,
tags
FROM aws.health.affected_entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
