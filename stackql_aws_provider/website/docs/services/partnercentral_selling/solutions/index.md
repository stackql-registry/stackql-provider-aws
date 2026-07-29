--- 
title: solutions
hide_title: false
hide_table_of_contents: false
keywords:
  - solutions
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists a <code>solutions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="solutions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.solutions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_solutions"
    values={[
        { label: 'list_solutions', value: 'list_solutions' }
    ]}
>
<TabItem value="list_solutions">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The SolutionBase structure provides essential information about a solution. (pattern: &lt;code&gt;S-&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog in which the solution is hosted, either AWS or Sandbox. This helps partners differentiate between live solutions and those in testing environments. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Specifies the solution category, which helps to categorize and organize the solutions partners offer. Valid values: Software Product | Consulting Service | Hardware Product | Communications Product | Professional Service | Managed Service | Value-Added Resale Amazon Web Services Service | Distribution Service | Training Service | Merger and Acquisition Advising Service.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the solution creation date. This is useful to track and audit.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Enables the association of solutions (offerings) to opportunities. (pattern: &lt;code&gt;S-&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the solution name.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the solution's current status, which indicates its state in the system. Valid values: Active | Inactive | Draft. The status helps partners and Amazon Web Services track the solution's lifecycle and availability. Filter for Active solutions for association to an opportunity. (Active, Inactive, Draft)</td>
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
    <td><a href="#list_solutions"><CopyableCode code="list_solutions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of Partner Solutions that the partner registered on Partner Central. This API is used to generate a list of solutions that an end user selects from for association with an opportunity.</td>
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
    defaultValue="list_solutions"
    values={[
        { label: 'list_solutions', value: 'list_solutions' }
    ]}
>
<TabItem value="list_solutions">

Retrieves a list of Partner Solutions that the partner registered on Partner Central. This API is used to generate a list of solutions that an end user selects from for association with an opportunity.

```sql
SELECT
arn,
catalog,
category,
created_date,
id,
name,
status
FROM aws.partnercentral_selling.solutions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
