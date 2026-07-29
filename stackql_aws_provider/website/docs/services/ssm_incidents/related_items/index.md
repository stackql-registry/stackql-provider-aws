--- 
title: related_items
hide_title: false
hide_table_of_contents: false
keywords:
  - related_items
  - ssm_incidents
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

Creates, updates, deletes, gets or lists a <code>related_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="related_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.related_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_related_items"
    values={[
        { label: 'list_related_items', value: 'list_related_items' }
    ]}
>
<TabItem value="list_related_items">

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
    <td><CopyableCode code="generated_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID for a RelatedItem. Don't specify this parameter when you add a RelatedItem by using the UpdateRelatedItems API action. (pattern: &lt;code&gt;^related-item/(ANALYSIS|INCIDENT|METRIC|PARENT|ATTACHMENT|OTHER|AUTOMATION|INVOLVED_RESOURCE|TASK)/(&#91;0-9&#93;|&#91;A-F&#93;)&#123;32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>object</code></td>
    <td>Details about the related item.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the related item.</td>
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
    <td><a href="#list_related_items"><CopyableCode code="list_related_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all related items for an incident record.</td>
</tr>
<tr>
    <td><a href="#update_related_items"><CopyableCode code="update_related_items" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-incidentRecordArn"><code>incidentRecordArn</code></a>, <a href="#parameter-relatedItemsUpdate"><code>relatedItemsUpdate</code></a></td>
    <td></td>
    <td>Add or remove related items from the related items tab of an incident record.</td>
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
    defaultValue="list_related_items"
    values={[
        { label: 'list_related_items', value: 'list_related_items' }
    ]}
>
<TabItem value="list_related_items">

List all related items for an incident record.

```sql
SELECT
generated_id,
identifier,
title_
FROM aws.ssm_incidents.related_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_related_items"
    values={[
        { label: 'update_related_items', value: 'update_related_items' }
    ]}
>
<TabItem value="update_related_items">

Add or remove related items from the related items tab of an incident record.

```sql
UPDATE aws.ssm_incidents.related_items
SET 
clientToken = '{{ clientToken }}',
incidentRecordArn = '{{ incidentRecordArn }}',
relatedItemsUpdate = '{{ relatedItemsUpdate }}'
WHERE 
region = '{{ region }}' --required
AND incidentRecordArn = '{{ incidentRecordArn }}' --required
AND relatedItemsUpdate = '{{ relatedItemsUpdate }}' --required;
```
</TabItem>
</Tabs>
