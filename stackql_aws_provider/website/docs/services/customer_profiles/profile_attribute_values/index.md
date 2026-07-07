--- 
title: profile_attribute_values
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_attribute_values
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

Creates, updates, deletes, gets or lists a <code>profile_attribute_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_attribute_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.profile_attribute_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_profile_attribute_values"
    values={[
        { label: 'list_profile_attribute_values', value: 'list_profile_attribute_values' }
    ]}
>
<TabItem value="list_profile_attribute_values">

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
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>The attribute name.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The items returned as part of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>integer</code></td>
    <td>The status code for the response.</td>
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
    <td><a href="#list_profile_attribute_values"><CopyableCode code="list_profile_attribute_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-attribute_name"><code>attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch the possible attribute values given the attribute name.</td>
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
    <td>The unique identifier of the domain.</td>
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
    defaultValue="list_profile_attribute_values"
    values={[
        { label: 'list_profile_attribute_values', value: 'list_profile_attribute_values' }
    ]}
>
<TabItem value="list_profile_attribute_values">

Fetch the possible attribute values given the attribute name.

```sql
SELECT
AttributeName,
DomainName,
Items,
StatusCode
FROM aws.customer_profiles.profile_attribute_values
WHERE domain_name = '{{ domain_name }}' -- required
AND attribute_name = '{{ attribute_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
