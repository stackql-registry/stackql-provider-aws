--- 
title: cost_category_resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_category_resource_associations
  - ce
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

Creates, updates, deletes, gets or lists a <code>cost_category_resource_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_category_resource_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_category_resource_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_category_resource_associations"
    values={[
        { label: 'list_cost_category_resource_associations', value: 'list_cost_category_resource_associations' }
    ]}
>
<TabItem value="list_cost_category_resource_associations">

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
    <td><CopyableCode code="CostCategoryArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for your cost category. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CostCategoryName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the cost category. (pattern: &lt;code&gt;^(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for an associated resource. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_cost_category_resource_associations"><CopyableCode code="list_cost_category_resource_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns resource associations of all cost categories defined in the account. You have the option to use CostCategoryArn to get the association for a specific cost category. ListCostCategoryResourceAssociations supports pagination. The request can have a MaxResults range up to 100.</td>
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
    defaultValue="list_cost_category_resource_associations"
    values={[
        { label: 'list_cost_category_resource_associations', value: 'list_cost_category_resource_associations' }
    ]}
>
<TabItem value="list_cost_category_resource_associations">

Returns resource associations of all cost categories defined in the account. You have the option to use CostCategoryArn to get the association for a specific cost category. ListCostCategoryResourceAssociations supports pagination. The request can have a MaxResults range up to 100.

```sql
SELECT
CostCategoryArn,
CostCategoryName,
ResourceArn
FROM aws.ce.cost_category_resource_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
