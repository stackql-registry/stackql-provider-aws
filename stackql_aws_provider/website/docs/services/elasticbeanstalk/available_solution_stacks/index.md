--- 
title: available_solution_stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - available_solution_stacks
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>available_solution_stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_solution_stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.available_solution_stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_available_solution_stacks"
    values={[
        { label: 'list_available_solution_stacks', value: 'list_available_solution_stacks' }
    ]}
>
<TabItem value="list_available_solution_stacks">

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
    <td><CopyableCode code="PermittedFileTypes" /></td>
    <td><code>string</code></td>
    <td>The permitted file types allowed for a solution stack.</td>
</tr>
<tr>
    <td><CopyableCode code="SolutionStackName" /></td>
    <td><code>string</code></td>
    <td>The name of the solution stack.</td>
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
    <td><a href="#list_available_solution_stacks"><CopyableCode code="list_available_solution_stacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.</td>
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
    defaultValue="list_available_solution_stacks"
    values={[
        { label: 'list_available_solution_stacks', value: 'list_available_solution_stacks' }
    ]}
>
<TabItem value="list_available_solution_stacks">

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

```sql
SELECT
PermittedFileTypes,
SolutionStackName
FROM aws.elasticbeanstalk.available_solution_stacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
