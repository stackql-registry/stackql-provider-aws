--- 
title: calculated_attribute_for_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - calculated_attribute_for_profiles
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

Creates, updates, deletes, gets or lists a <code>calculated_attribute_for_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="calculated_attribute_for_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.calculated_attribute_for_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_calculated_attribute_for_profile"
    values={[
        { label: 'batch_get_calculated_attribute_for_profile', value: 'batch_get_calculated_attribute_for_profile' },
        { label: 'get_calculated_attribute_for_profile', value: 'get_calculated_attribute_for_profile' }
    ]}
>
<TabItem value="batch_get_calculated_attribute_for_profile">

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
    <td><CopyableCode code="CalculatedAttributeValues" /></td>
    <td><code>array</code></td>
    <td>List of calculated attribute values retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="ConditionOverrides" /></td>
    <td><code>object</code></td>
    <td>An object to override the original condition block of a calculated attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>List of errors for calculated attribute values that could not be retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_calculated_attribute_for_profile">

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
    <td><CopyableCode code="CalculatedAttributeName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the calculated attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the calculated attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-\s&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IsDataPartial" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the calculated attribute’s value is based on partial data. If data is partial, it is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="LastObjectTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the newest object included in the calculated attribute calculation.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the calculated attribute.</td>
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
    <td><a href="#batch_get_calculated_attribute_for_profile"><CopyableCode code="batch_get_calculated_attribute_for_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch the possible attribute values given the attribute name.</td>
</tr>
<tr>
    <td><a href="#get_calculated_attribute_for_profile"><CopyableCode code="get_calculated_attribute_for_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a calculated attribute for a customer profile.</td>
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
<tr id="parameter-calculated_attribute_name">
    <td><CopyableCode code="calculated_attribute_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the calculated attribute.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-profile_id">
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a customer profile.</td>
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
    defaultValue="batch_get_calculated_attribute_for_profile"
    values={[
        { label: 'batch_get_calculated_attribute_for_profile', value: 'batch_get_calculated_attribute_for_profile' },
        { label: 'get_calculated_attribute_for_profile', value: 'get_calculated_attribute_for_profile' }
    ]}
>
<TabItem value="batch_get_calculated_attribute_for_profile">

Fetch the possible attribute values given the attribute name.

```sql
SELECT
CalculatedAttributeValues,
ConditionOverrides,
Errors
FROM aws.customer_profiles.calculated_attribute_for_profiles
WHERE calculated_attribute_name = '{{ calculated_attribute_name }}' -- required
AND domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_calculated_attribute_for_profile">

Retrieve a calculated attribute for a customer profile.

```sql
SELECT
CalculatedAttributeName,
DisplayName,
IsDataPartial,
LastObjectTimestamp,
Value
FROM aws.customer_profiles.calculated_attribute_for_profiles
WHERE domain_name = '{{ domain_name }}' -- required
AND profile_id = '{{ profile_id }}' -- required
AND calculated_attribute_name = '{{ calculated_attribute_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
