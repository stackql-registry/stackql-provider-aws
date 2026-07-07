--- 
title: enabled_products_for_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_products_for_imports
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>enabled_products_for_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enabled_products_for_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.enabled_products_for_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_enabled_products_for_import"
    values={[
        { label: 'list_enabled_products_for_import', value: 'list_enabled_products_for_import' }
    ]}
>
<TabItem value="list_enabled_products_for_import">

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
    <td><CopyableCode code="product_subscription" /></td>
    <td><code>string</code></td>
    <td>The list of ARNs for the resources that represent your subscriptions to products.</td>
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
    <td><a href="#list_enabled_products_for_import"><CopyableCode code="list_enabled_products_for_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub CSPM.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that is required for pagination. On your first call to the ListEnabledProductsForImport operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_enabled_products_for_import"
    values={[
        { label: 'list_enabled_products_for_import', value: 'list_enabled_products_for_import' }
    ]}
>
<TabItem value="list_enabled_products_for_import">

Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub CSPM.

```sql
SELECT
product_subscription
FROM aws.securityhub.enabled_products_for_imports
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
