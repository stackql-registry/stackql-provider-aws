--- 
title: member_of_address_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - member_of_address_lists
  - mailmanager
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

Creates, updates, deletes, gets or lists a <code>member_of_address_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_of_address_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.member_of_address_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_member_of_address_list"
    values={[
        { label: 'get_member_of_address_list', value: 'get_member_of_address_list' }
    ]}
>
<TabItem value="get_member_of_address_list">

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
    <td><CopyableCode code="Address" /></td>
    <td><code>string</code></td>
    <td>The address retrieved from the address list.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the address was created.</td>
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
    <td><a href="#get_member_of_address_list"><CopyableCode code="get_member_of_address_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch attributes of a member in an address list.</td>
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
    defaultValue="get_member_of_address_list"
    values={[
        { label: 'get_member_of_address_list', value: 'get_member_of_address_list' }
    ]}
>
<TabItem value="get_member_of_address_list">

Fetch attributes of a member in an address list.

```sql
SELECT
Address,
CreatedTimestamp
FROM aws.mailmanager.member_of_address_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
