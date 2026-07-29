--- 
title: thing_groups_for_things
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_groups_for_things
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

Creates, updates, deletes, gets or lists a <code>thing_groups_for_things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_groups_for_things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_groups_for_things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_thing_groups_for_thing"
    values={[
        { label: 'list_thing_groups_for_thing', value: 'list_thing_groups_for_thing' }
    ]}
>
<TabItem value="list_thing_groups_for_thing">

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
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The group ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The group name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_thing_groups_for_thing"><CopyableCode code="list_thing_groups_for_thing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the thing groups to which the specified thing belongs. Requires permission to access the ListThingGroupsForThing action.</td>
</tr>
<tr>
    <td><a href="#update_thing_groups_for_thing"><CopyableCode code="update_thing_groups_for_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the groups to which the thing belongs. Requires permission to access the UpdateThingGroupsForThing action.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The thing name.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_thing_groups_for_thing"
    values={[
        { label: 'list_thing_groups_for_thing', value: 'list_thing_groups_for_thing' }
    ]}
>
<TabItem value="list_thing_groups_for_thing">

List the thing groups to which the specified thing belongs. Requires permission to access the ListThingGroupsForThing action.

```sql
SELECT
group_arn,
group_name
FROM aws.iot.thing_groups_for_things
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing_groups_for_thing"
    values={[
        { label: 'update_thing_groups_for_thing', value: 'update_thing_groups_for_thing' }
    ]}
>
<TabItem value="update_thing_groups_for_thing">

Updates the groups to which the thing belongs. Requires permission to access the UpdateThingGroupsForThing action.

```sql
UPDATE aws.iot.thing_groups_for_things
SET 
thingName = '{{ thingName }}',
thingGroupsToAdd = '{{ thingGroupsToAdd }}',
thingGroupsToRemove = '{{ thingGroupsToRemove }}',
overrideDynamicGroups = {{ overrideDynamicGroups }}
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
