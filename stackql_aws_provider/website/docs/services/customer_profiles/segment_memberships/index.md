--- 
title: segment_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_memberships
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

Creates, updates, deletes, gets or lists a <code>segment_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_membership"
    values={[
        { label: 'get_segment_membership', value: 'get_segment_membership' }
    ]}
>
<TabItem value="get_segment_membership">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>An array of maps where each contains a response per profile failed for the request.</td>
</tr>
<tr>
    <td><CopyableCode code="last_computed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the segment membership was last computed or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profiles" /></td>
    <td><code>array</code></td>
    <td>An array of maps where each contains a response per profile requested.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the segment definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_segment_membership"><CopyableCode code="get_segment_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Determines if the given profiles are within a segment.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-segment_definition_name">
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The Id of the wanted segment. Needs to be a valid, and existing segment Id.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment_membership"
    values={[
        { label: 'get_segment_membership', value: 'get_segment_membership' }
    ]}
>
<TabItem value="get_segment_membership">

Determines if the given profiles are within a segment.

```sql
SELECT
failures,
last_computed_at,
profiles,
segment_definition_name
FROM aws.customer_profiles.segment_memberships
WHERE domain_name = '{{ domain_name }}' -- required
AND segment_definition_name = '{{ segment_definition_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
