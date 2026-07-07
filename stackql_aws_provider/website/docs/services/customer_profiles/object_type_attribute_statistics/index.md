--- 
title: object_type_attribute_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - object_type_attribute_statistics
  - customer_profiles
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

Creates, updates, deletes, gets or lists an <code>object_type_attribute_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_type_attribute_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.object_type_attribute_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object_type_attribute_statistics"
    values={[
        { label: 'get_object_type_attribute_statistics', value: 'get_object_type_attribute_statistics' }
    ]}
>
<TabItem value="get_object_type_attribute_statistics">

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
    <td><CopyableCode code="CalculatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when this statistics was calculated.</td>
</tr>
<tr>
    <td><CopyableCode code="Statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics.</td>
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
    <td><a href="#get_object_type_attribute_statistics"><CopyableCode code="get_object_type_attribute_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-attribute_name"><code>attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetObjectTypeAttributeValues API delivers statistical insights about attributes within a specific object type, but is exclusively available for domains with data store enabled. This API performs daily calculations to provide statistical information about your attribute values, helping you understand patterns and trends in your data. The statistical calculations are performed once per day, providing a consistent snapshot of your attribute data characteristics. You'll receive null values in two scenarios: During the first period after enabling data vault (unless a calculation cycle occurs, which happens once daily). For attributes that don't contain numeric values.</td>
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
<tr id="parameter-attribute_name">
    <td><CopyableCode code="attribute_name" /></td>
    <td><code>string</code></td>
    <td>The attribute name.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-object_type_name">
    <td><CopyableCode code="object_type_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain object type.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object_type_attribute_statistics"
    values={[
        { label: 'get_object_type_attribute_statistics', value: 'get_object_type_attribute_statistics' }
    ]}
>
<TabItem value="get_object_type_attribute_statistics">

The GetObjectTypeAttributeValues API delivers statistical insights about attributes within a specific object type, but is exclusively available for domains with data store enabled. This API performs daily calculations to provide statistical information about your attribute values, helping you understand patterns and trends in your data. The statistical calculations are performed once per day, providing a consistent snapshot of your attribute data characteristics. You'll receive null values in two scenarios: During the first period after enabling data vault (unless a calculation cycle occurs, which happens once daily). For attributes that don't contain numeric values.

```sql
SELECT
CalculatedAt,
Statistics
FROM aws.customer_profiles.object_type_attribute_statistics
WHERE domain_name = '{{ domain_name }}' -- required
AND object_type_name = '{{ object_type_name }}' -- required
AND attribute_name = '{{ attribute_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
