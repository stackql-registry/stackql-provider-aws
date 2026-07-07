--- 
title: ops_item_related_items
hide_title: false
hide_table_of_contents: false
keywords:
  - ops_item_related_items
  - ssm
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

Creates, updates, deletes, gets or lists an <code>ops_item_related_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ops_item_related_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.ops_item_related_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ops_item_related_items"
    values={[
        { label: 'list_ops_item_related_items', value: 'list_ops_item_related_items' }
    ]}
>
<TabItem value="list_ops_item_related_items">

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
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The association ID.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationType" /></td>
    <td><code>string</code></td>
    <td>The association type.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user or resource that created an OpsItem event.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the related-item association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user or resource that created an OpsItem event.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the related-item association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="OpsItemId" /></td>
    <td><code>string</code></td>
    <td>The OpsItem ID. (pattern: &lt;code&gt;^(oi)-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceUri" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the related-item resource.</td>
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
    <td><a href="#list_ops_item_related_items"><CopyableCode code="list_ops_item_related_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a tool in Amazon Web Services Systems Manager.</td>
</tr>
<tr>
    <td><a href="#associate_ops_item_related_item"><CopyableCode code="associate_ops_item_related_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpsItemId"><code>OpsItemId</code></a>, <a href="#parameter-AssociationType"><code>AssociationType</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceUri"><code>ResourceUri</code></a></td>
    <td></td>
    <td>Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are tools in Amazon Web Services Systems Manager.</td>
</tr>
<tr>
    <td><a href="#disassociate_ops_item_related_item"><CopyableCode code="disassociate_ops_item_related_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpsItemId"><code>OpsItemId</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a></td>
    <td></td>
    <td>Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a tool in Amazon Web Services Systems Manager.</td>
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
    defaultValue="list_ops_item_related_items"
    values={[
        { label: 'list_ops_item_related_items', value: 'list_ops_item_related_items' }
    ]}
>
<TabItem value="list_ops_item_related_items">

Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a tool in Amazon Web Services Systems Manager.

```sql
SELECT
AssociationId,
AssociationType,
CreatedBy,
CreatedTime,
LastModifiedBy,
LastModifiedTime,
OpsItemId,
ResourceType,
ResourceUri
FROM aws.ssm.ops_item_related_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_ops_item_related_item"
    values={[
        { label: 'associate_ops_item_related_item', value: 'associate_ops_item_related_item' },
        { label: 'disassociate_ops_item_related_item', value: 'disassociate_ops_item_related_item' }
    ]}
>
<TabItem value="associate_ops_item_related_item">

Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are tools in Amazon Web Services Systems Manager.

```sql
UPDATE aws.ssm.ops_item_related_items
SET 
OpsItemId = '{{ OpsItemId }}',
AssociationType = '{{ AssociationType }}',
ResourceType = '{{ ResourceType }}',
ResourceUri = '{{ ResourceUri }}'
WHERE 
region = '{{ region }}' --required
AND OpsItemId = '{{ OpsItemId }}' --required
AND AssociationType = '{{ AssociationType }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND ResourceUri = '{{ ResourceUri }}' --required
RETURNING
AssociationId;
```
</TabItem>
<TabItem value="disassociate_ops_item_related_item">

Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a tool in Amazon Web Services Systems Manager.

```sql
UPDATE aws.ssm.ops_item_related_items
SET 
OpsItemId = '{{ OpsItemId }}',
AssociationId = '{{ AssociationId }}'
WHERE 
region = '{{ region }}' --required
AND OpsItemId = '{{ OpsItemId }}' --required
AND AssociationId = '{{ AssociationId }}' --required;
```
</TabItem>
</Tabs>
