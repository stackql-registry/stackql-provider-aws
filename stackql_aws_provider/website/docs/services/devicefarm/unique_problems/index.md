--- 
title: unique_problems
hide_title: false
hide_table_of_contents: false
keywords:
  - unique_problems
  - devicefarm
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

Creates, updates, deletes, gets or lists an <code>unique_problems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unique_problems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.unique_problems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_unique_problems"
    values={[
        { label: 'list_unique_problems', value: 'list_unique_problems' }
    ]}
>
<TabItem value="list_unique_problems">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueProblems" /></td>
    <td><code>object</code></td>
    <td>Information about the unique problems. Allowed values include: PENDING PASSED WARNED FAILED SKIPPED ERRORED STOPPED</td>
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
    <td><a href="#list_unique_problems"><CopyableCode code="list_unique_problems" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about unique problems, such as exceptions or crashes. Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (OutOfBoundsException in MyActivity.java:386), ListUniqueProblems returns a single entry instead of many individual entries for that exception.</td>
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
    defaultValue="list_unique_problems"
    values={[
        { label: 'list_unique_problems', value: 'list_unique_problems' }
    ]}
>
<TabItem value="list_unique_problems">

Gets information about unique problems, such as exceptions or crashes. Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (OutOfBoundsException in MyActivity.java:386), ListUniqueProblems returns a single entry instead of many individual entries for that exception.

```sql
SELECT
nextToken,
uniqueProblems
FROM aws.devicefarm.unique_problems
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
