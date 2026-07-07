--- 
title: groups_older_than_ordering_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_older_than_ordering_ids
  - kendra
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

Creates, updates, deletes, gets or lists a <code>groups_older_than_ordering_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups_older_than_ordering_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.groups_older_than_ordering_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_groups_older_than_ordering_id"
    values={[
        { label: 'list_groups_older_than_ordering_id', value: 'list_groups_older_than_ordering_id' }
    ]}
>
<TabItem value="list_groups_older_than_ordering_id">

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
    <td><CopyableCode code="GroupsSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for list of groups that are mapped to users before a given ordering or timestamp identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier.</td>
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
    <td><a href="#list_groups_older_than_ordering_id"><CopyableCode code="list_groups_older_than_ordering_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier. ListGroupsOlderThanOrderingId is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="list_groups_older_than_ordering_id"
    values={[
        { label: 'list_groups_older_than_ordering_id', value: 'list_groups_older_than_ordering_id' }
    ]}
>
<TabItem value="list_groups_older_than_ordering_id">

Provides a list of groups that are mapped to users before a given ordering or timestamp identifier. ListGroupsOlderThanOrderingId is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
SELECT
GroupsSummaries,
NextToken
FROM aws.kendra.groups_older_than_ordering_ids
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
