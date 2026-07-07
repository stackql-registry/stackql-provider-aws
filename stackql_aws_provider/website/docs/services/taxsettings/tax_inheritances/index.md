--- 
title: tax_inheritances
hide_title: false
hide_table_of_contents: false
keywords:
  - tax_inheritances
  - taxsettings
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

Creates, updates, deletes, gets or lists a <code>tax_inheritances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tax_inheritances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.tax_inheritances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tax_inheritance"
    values={[
        { label: 'get_tax_inheritance', value: 'get_tax_inheritance' }
    ]}
>
<TabItem value="get_tax_inheritance">

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
    <td><CopyableCode code="heritageStatus" /></td>
    <td><code>string</code></td>
    <td>The tax inheritance status. (OptIn, OptOut)</td>
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
    <td><a href="#get_tax_inheritance"><CopyableCode code="get_tax_inheritance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The get account tax inheritance status.</td>
</tr>
<tr>
    <td><a href="#put_tax_inheritance"><CopyableCode code="put_tax_inheritance" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The updated tax inheritance status.</td>
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
    defaultValue="get_tax_inheritance"
    values={[
        { label: 'get_tax_inheritance', value: 'get_tax_inheritance' }
    ]}
>
<TabItem value="get_tax_inheritance">

The get account tax inheritance status.

```sql
SELECT
heritageStatus
FROM aws.taxsettings.tax_inheritances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_tax_inheritance"
    values={[
        { label: 'put_tax_inheritance', value: 'put_tax_inheritance' }
    ]}
>
<TabItem value="put_tax_inheritance">

The updated tax inheritance status.

```sql
REPLACE aws.taxsettings.tax_inheritances
SET 
heritageStatus = '{{ heritageStatus }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
