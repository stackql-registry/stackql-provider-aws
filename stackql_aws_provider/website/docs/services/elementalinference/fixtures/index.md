--- 
title: fixtures
hide_title: false
hide_table_of_contents: false
keywords:
  - fixtures
  - elementalinference
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

Creates, updates, deletes, gets or lists a <code>fixtures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fixtures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elementalinference.fixtures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_fixtures"
    values={[
        { label: 'search_fixtures', value: 'search_fixtures' }
    ]}
>
<TabItem value="search_fixtures">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the fixture, as provided by the data source. For example, the names of the two competing teams.</td>
</tr>
<tr>
    <td><CopyableCode code="competitors" /></td>
    <td><code>array</code></td>
    <td>An array of the competitors (the teams or individuals) in the fixture.</td>
</tr>
<tr>
    <td><CopyableCode code="fixture_group" /></td>
    <td><code>string</code></td>
    <td>The group that the fixture belongs to, such as the competition, league, or tournament. The data source doesn't provide this information for every fixture.</td>
</tr>
<tr>
    <td><CopyableCode code="fixture_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the fixture. Specify this ID in the clipping output of a feed, to identify the fixture whose event data you want Elemental Inference to map onto the clipping metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The scheduled start time of the fixture, as provided by the data source. The actual start time might differ.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fixture in its lifecycle, as provided by the data source. For example, Scheduled or Completed.</td>
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
    <td><a href="#search_fixtures"><CopyableCode code="search_fixtures" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for the fixtures (sports events, such as a specific basketball game) that are available for a sport in a date window. Each fixture in the response includes a fixtureId that you specify in the clipping output of a feed, so that Elemental Inference maps the event data for that fixture onto the clipping metadata. This operation is paginated: if there are more fixtures than fit in one page, the response includes a nextToken that you pass in a subsequent request.</td>
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
    defaultValue="search_fixtures"
    values={[
        { label: 'search_fixtures', value: 'search_fixtures' }
    ]}
>
<TabItem value="search_fixtures">

Searches for the fixtures (sports events, such as a specific basketball game) that are available for a sport in a date window. Each fixture in the response includes a fixtureId that you specify in the clipping output of a feed, so that Elemental Inference maps the event data for that fixture onto the clipping metadata. This operation is paginated: if there are more fixtures than fit in one page, the response includes a nextToken that you pass in a subsequent request.

```sql
SELECT
name,
competitors,
fixture_group,
fixture_id,
scheduled_start,
status
FROM aws.elementalinference.fixtures
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
