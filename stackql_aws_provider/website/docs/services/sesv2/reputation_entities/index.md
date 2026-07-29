--- 
title: reputation_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - reputation_entities
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>reputation_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reputation_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.reputation_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reputation_entity"
    values={[
        { label: 'get_reputation_entity', value: 'get_reputation_entity' },
        { label: 'list_reputation_entities', value: 'list_reputation_entities' }
    ]}
>
<TabItem value="get_reputation_entity">

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
    <td><CopyableCode code="aws_ses_managed_status" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services Amazon SES-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_status" /></td>
    <td><code>object</code></td>
    <td>The customer-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_entity_reference" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of reputation entity. Currently, only RESOURCE type entities are supported, which represent resources in your Amazon SES account that have reputation tracking capabilities. (RESOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_impact" /></td>
    <td><code>string</code></td>
    <td>The reputation impact level for this entity, representing the highest impact reputation finding currently active. Reputation findings can be retrieved using the ListRecommendations operation. (LOW, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_management_policy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the reputation management policy applied to this entity. This is an Amazon Web Services Amazon SES-managed policy.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_status_aggregate" /></td>
    <td><code>string</code></td>
    <td>The aggregate sending status that determines whether the entity is allowed to send emails. This status is derived from both the customer-managed and Amazon Web Services Amazon SES-managed statuses. If either the customer-managed status or the Amazon Web Services Amazon SES-managed status is DISABLED, the aggregate status will be DISABLED and the entity will not be allowed to send emails. When the customer-managed status is set to REINSTATED, the entity can continue sending even if there are active reputation findings, provided the Amazon Web Services Amazon SES-managed status also permits sending. The entity can only send emails when both statuses permit sending. (ENABLED, REINSTATED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reputation_entities">

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
    <td><CopyableCode code="aws_ses_managed_status" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services Amazon SES-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_status" /></td>
    <td><code>object</code></td>
    <td>The customer-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_entity_reference" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of reputation entity. Currently, only RESOURCE type entities are supported, which represent resources in your Amazon SES account that have reputation tracking capabilities. (RESOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_impact" /></td>
    <td><code>string</code></td>
    <td>The reputation impact level for this entity, representing the highest impact reputation finding currently active. Reputation findings can be retrieved using the ListRecommendations operation. (LOW, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="reputation_management_policy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the reputation management policy applied to this entity. This is an Amazon Web Services Amazon SES-managed policy.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_status_aggregate" /></td>
    <td><code>string</code></td>
    <td>The aggregate sending status that determines whether the entity is allowed to send emails. This status is derived from both the customer-managed and Amazon Web Services Amazon SES-managed statuses. If either the customer-managed status or the Amazon Web Services Amazon SES-managed status is DISABLED, the aggregate status will be DISABLED and the entity will not be allowed to send emails. When the customer-managed status is set to REINSTATED, the entity can continue sending even if there are active reputation findings, provided the Amazon Web Services Amazon SES-managed status also permits sending. The entity can only send emails when both statuses permit sending. (ENABLED, REINSTATED, DISABLED)</td>
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
    <td><a href="#get_reputation_entity"><CopyableCode code="get_reputation_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reputation_entity_reference"><code>reputation_entity_reference</code></a>, <a href="#parameter-reputation_entity_type"><code>reputation_entity_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve information about a specific reputation entity, including its reputation management policy, customer-managed status, Amazon Web Services Amazon SES-managed status, and aggregate sending status. Reputation entities represent resources in your Amazon SES account that have reputation tracking and management capabilities. The reputation impact reflects the highest impact reputation finding for the entity. Reputation findings can be retrieved using the ListRecommendations operation.</td>
</tr>
<tr>
    <td><a href="#list_reputation_entities"><CopyableCode code="list_reputation_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List reputation entities in your Amazon SES account in the current Amazon Web Services Region. You can filter the results by entity type, reputation impact, sending status, or entity reference prefix. Reputation entities represent resources in your account that have reputation tracking and management capabilities. Use this operation to get an overview of all entities and their current reputation status.</td>
</tr>
<tr>
    <td><a href="#update_reputation_entity_customer_managed_status"><CopyableCode code="update_reputation_entity_customer_managed_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-reputation_entity_type"><code>reputation_entity_type</code></a>, <a href="#parameter-reputation_entity_reference"><code>reputation_entity_reference</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SendingStatus"><code>SendingStatus</code></a></td>
    <td></td>
    <td>Update the customer-managed sending status for a reputation entity. This allows you to enable, disable, or reinstate sending for the entity. The customer-managed status works in conjunction with the Amazon Web Services Amazon SES-managed status to determine the overall sending capability. When you update the customer-managed status, the Amazon Web Services Amazon SES-managed status remains unchanged. If Amazon Web Services Amazon SES has disabled the entity, it will not be allowed to send regardless of the customer-managed status setting. When you reinstate an entity through the customer-managed status, it can continue sending only if the Amazon Web Services Amazon SES-managed status also permits sending, even if there are active reputation findings, until the findings are resolved or new violations occur.</td>
</tr>
<tr>
    <td><a href="#update_reputation_entity_policy"><CopyableCode code="update_reputation_entity_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-reputation_entity_type"><code>reputation_entity_type</code></a>, <a href="#parameter-reputation_entity_reference"><code>reputation_entity_reference</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReputationEntityPolicy"><code>ReputationEntityPolicy</code></a></td>
    <td></td>
    <td>Update the reputation management policy for a reputation entity. The policy determines how the entity responds to reputation findings, such as automatically pausing sending when certain thresholds are exceeded. Reputation management policies are Amazon Web Services Amazon SES-managed (predefined policies). You can select from none, standard, and strict policies.</td>
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
<tr id="parameter-reputation_entity_reference">
    <td><CopyableCode code="reputation_entity_reference" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-reputation_entity_type">
    <td><CopyableCode code="reputation_entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of reputation entity. Currently, only RESOURCE type entities are supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reputation_entity"
    values={[
        { label: 'get_reputation_entity', value: 'get_reputation_entity' },
        { label: 'list_reputation_entities', value: 'list_reputation_entities' }
    ]}
>
<TabItem value="get_reputation_entity">

Retrieve information about a specific reputation entity, including its reputation management policy, customer-managed status, Amazon Web Services Amazon SES-managed status, and aggregate sending status. Reputation entities represent resources in your Amazon SES account that have reputation tracking and management capabilities. The reputation impact reflects the highest impact reputation finding for the entity. Reputation findings can be retrieved using the ListRecommendations operation.

```sql
SELECT
aws_ses_managed_status,
customer_managed_status,
reputation_entity_reference,
reputation_entity_type,
reputation_impact,
reputation_management_policy,
sending_status_aggregate
FROM aws.sesv2.reputation_entities
WHERE reputation_entity_reference = '{{ reputation_entity_reference }}' -- required
AND reputation_entity_type = '{{ reputation_entity_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reputation_entities">

List reputation entities in your Amazon SES account in the current Amazon Web Services Region. You can filter the results by entity type, reputation impact, sending status, or entity reference prefix. Reputation entities represent resources in your account that have reputation tracking and management capabilities. Use this operation to get an overview of all entities and their current reputation status.

```sql
SELECT
aws_ses_managed_status,
customer_managed_status,
reputation_entity_reference,
reputation_entity_type,
reputation_impact,
reputation_management_policy,
sending_status_aggregate
FROM aws.sesv2.reputation_entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_reputation_entity_customer_managed_status"
    values={[
        { label: 'update_reputation_entity_customer_managed_status', value: 'update_reputation_entity_customer_managed_status' },
        { label: 'update_reputation_entity_policy', value: 'update_reputation_entity_policy' }
    ]}
>
<TabItem value="update_reputation_entity_customer_managed_status">

Update the customer-managed sending status for a reputation entity. This allows you to enable, disable, or reinstate sending for the entity. The customer-managed status works in conjunction with the Amazon Web Services Amazon SES-managed status to determine the overall sending capability. When you update the customer-managed status, the Amazon Web Services Amazon SES-managed status remains unchanged. If Amazon Web Services Amazon SES has disabled the entity, it will not be allowed to send regardless of the customer-managed status setting. When you reinstate an entity through the customer-managed status, it can continue sending only if the Amazon Web Services Amazon SES-managed status also permits sending, even if there are active reputation findings, until the findings are resolved or new violations occur.

```sql
UPDATE aws.sesv2.reputation_entities
SET 
SendingStatus = '{{ SendingStatus }}'
WHERE 
reputation_entity_type = '{{ reputation_entity_type }}' --required
AND reputation_entity_reference = '{{ reputation_entity_reference }}' --required
AND region = '{{ region }}' --required
AND SendingStatus = '{{ SendingStatus }}' --required;
```
</TabItem>
<TabItem value="update_reputation_entity_policy">

Update the reputation management policy for a reputation entity. The policy determines how the entity responds to reputation findings, such as automatically pausing sending when certain thresholds are exceeded. Reputation management policies are Amazon Web Services Amazon SES-managed (predefined policies). You can select from none, standard, and strict policies.

```sql
UPDATE aws.sesv2.reputation_entities
SET 
ReputationEntityPolicy = '{{ ReputationEntityPolicy }}'
WHERE 
reputation_entity_type = '{{ reputation_entity_type }}' --required
AND reputation_entity_reference = '{{ reputation_entity_reference }}' --required
AND region = '{{ region }}' --required
AND ReputationEntityPolicy = '{{ ReputationEntityPolicy }}' --required;
```
</TabItem>
</Tabs>
