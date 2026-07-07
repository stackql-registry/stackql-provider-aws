--- 
title: resources_associated_to_custom_line_items
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_associated_to_custom_line_items
  - billingconductor
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

Creates, updates, deletes, gets or lists a <code>resources_associated_to_custom_line_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_associated_to_custom_line_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.resources_associated_to_custom_line_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resources_associated_to_custom_line_item"
    values={[
        { label: 'list_resources_associated_to_custom_line_item', value: 'list_resources_associated_to_custom_line_item' }
    ]}
>
<TabItem value="list_resources_associated_to_custom_line_item">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the associated resource. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:(customlineitem|billinggroup)/)?&#91;a-zA-Z0-9&#93;&#123;10,12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndBillingPeriod" /></td>
    <td><code>string</code></td>
    <td>The end billing period of the associated resource. (pattern: &lt;code&gt;\d&#123;4&#125;-(0?&#91;1-9&#93;|1&#91;012&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Relationship" /></td>
    <td><code>string</code></td>
    <td>The type of relationship between the custom line item and the associated resource. (PARENT, CHILD)</td>
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
    <td><a href="#list_resources_associated_to_custom_line_item"><CopyableCode code="list_resources_associated_to_custom_line_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the resources that are associated to a custom line item.</td>
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
    defaultValue="list_resources_associated_to_custom_line_item"
    values={[
        { label: 'list_resources_associated_to_custom_line_item', value: 'list_resources_associated_to_custom_line_item' }
    ]}
>
<TabItem value="list_resources_associated_to_custom_line_item">

List the resources that are associated to a custom line item.

```sql
SELECT
Arn,
EndBillingPeriod,
Relationship
FROM aws.billingconductor.resources_associated_to_custom_line_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
