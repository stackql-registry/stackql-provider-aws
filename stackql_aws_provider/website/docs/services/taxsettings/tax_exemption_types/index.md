--- 
title: tax_exemption_types
hide_title: false
hide_table_of_contents: false
keywords:
  - tax_exemption_types
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

Creates, updates, deletes, gets or lists a <code>tax_exemption_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tax_exemption_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.tax_exemption_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tax_exemption_types"
    values={[
        { label: 'get_tax_exemption_types', value: 'get_tax_exemption_types' }
    ]}
>
<TabItem value="get_tax_exemption_types">

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
    <td><CopyableCode code="taxExemptionTypes" /></td>
    <td><code>array</code></td>
    <td>The supported types of tax exemptions.</td>
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
    <td><a href="#get_tax_exemption_types"><CopyableCode code="get_tax_exemption_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get supported tax exemption types. The IAM action is tax:GetExemptions.</td>
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
    defaultValue="get_tax_exemption_types"
    values={[
        { label: 'get_tax_exemption_types', value: 'get_tax_exemption_types' }
    ]}
>
<TabItem value="get_tax_exemption_types">

Get supported tax exemption types. The IAM action is tax:GetExemptions.

```sql
SELECT
taxExemptionTypes
FROM aws.taxsettings.tax_exemption_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
