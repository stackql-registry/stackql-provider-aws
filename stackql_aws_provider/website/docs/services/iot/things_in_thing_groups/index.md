--- 
title: things_in_thing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - things_in_thing_groups
  - iot
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

Creates, updates, deletes, gets or lists a <code>things_in_thing_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="things_in_thing_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.things_in_thing_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_things_in_thing_group"
    values={[
        { label: 'list_things_in_thing_group', value: 'list_things_in_thing_group' }
    ]}
>
<TabItem value="list_things_in_thing_group">

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
    <td><CopyableCode code="thing" /></td>
    <td><code>string</code></td>
    <td>The things in the specified thing group.</td>
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
    <td><a href="#list_things_in_thing_group"><CopyableCode code="list_things_in_thing_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the things in the specified group. Requires permission to access the ListThingsInThingGroup action.</td>
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
<tr id="parameter-thing_group_name">
    <td><CopyableCode code="thing_group_name" /></td>
    <td><code>string</code></td>
    <td>The thing group name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td>When true, list things in this thing group and in all child groups as well.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_things_in_thing_group"
    values={[
        { label: 'list_things_in_thing_group', value: 'list_things_in_thing_group' }
    ]}
>
<TabItem value="list_things_in_thing_group">

Lists the things in the specified group. Requires permission to access the ListThingsInThingGroup action.

```sql
SELECT
thing
FROM aws.iot.things_in_thing_groups
WHERE thing_group_name = '{{ thing_group_name }}' -- required
AND region = '{{ region }}' -- required
AND recursive = '{{ recursive }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
