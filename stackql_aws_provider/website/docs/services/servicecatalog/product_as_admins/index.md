--- 
title: product_as_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - product_as_admins
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>product_as_admins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_as_admins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.product_as_admins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_product_as_admin"
    values={[
        { label: 'describe_product_as_admin', value: 'describe_product_as_admin' }
    ]}
>
<TabItem value="describe_product_as_admin">

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
    <td><CopyableCode code="budgets" /></td>
    <td><code>array</code></td>
    <td>Information about the associated budgets.</td>
</tr>
<tr>
    <td><CopyableCode code="product_view_detail" /></td>
    <td><code>object</code></td>
    <td>Information about the product view.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_summaries" /></td>
    <td><code>array</code></td>
    <td>Information about the provisioning artifacts (also known as versions) for the specified product.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_options" /></td>
    <td><code>array</code></td>
    <td>Information about the TagOptions associated with the product.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Information about the tags associated with the product.</td>
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
    <td><a href="#describe_product_as_admin"><CopyableCode code="describe_product_as_admin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified product. This operation is run with administrator access.</td>
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
    defaultValue="describe_product_as_admin"
    values={[
        { label: 'describe_product_as_admin', value: 'describe_product_as_admin' }
    ]}
>
<TabItem value="describe_product_as_admin">

Gets information about the specified product. This operation is run with administrator access.

```sql
SELECT
budgets,
product_view_detail,
provisioning_artifact_summaries,
tag_options,
tags
FROM aws.servicecatalog.product_as_admins
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
