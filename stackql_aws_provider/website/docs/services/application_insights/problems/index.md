--- 
title: problems
hide_title: false
hide_table_of_contents: false
keywords:
  - problems
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>problems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="problems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.problems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_problem"
    values={[
        { label: 'describe_problem', value: 'describe_problem' },
        { label: 'list_problems', value: 'list_problems' }
    ]}
>
<TabItem value="describe_problem">

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
    <td><CopyableCode code="Problem" /></td>
    <td><code>object</code></td>
    <td>Information about the problem.</td>
</tr>
<tr>
    <td><CopyableCode code="SNSNotificationArn" /></td>
    <td><code>string</code></td>
    <td>The SNS notification topic ARN of the problem. (pattern: &lt;code&gt;^arn:aws(-\w+)*:&#91;\w\d-&#93;+:(&#91;\w\d-&#93;*)?:&#91;\w\d_-&#93;*(&#91;:/&#93;.+)*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_problems">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the resource group owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProblemList" /></td>
    <td><code>array</code></td>
    <td>The list of problems.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_problem"><CopyableCode code="describe_problem" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an application problem.</td>
</tr>
<tr>
    <td><a href="#list_problems"><CopyableCode code="list_problems" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the problems with your application.</td>
</tr>
<tr>
    <td><a href="#update_problem"><CopyableCode code="update_problem" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProblemId"><code>ProblemId</code></a></td>
    <td></td>
    <td>Updates the visibility of the problem or specifies the problem as RESOLVED.</td>
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
    defaultValue="describe_problem"
    values={[
        { label: 'describe_problem', value: 'describe_problem' },
        { label: 'list_problems', value: 'list_problems' }
    ]}
>
<TabItem value="describe_problem">

Describes an application problem.

```sql
SELECT
Problem,
SNSNotificationArn
FROM aws.application_insights.problems
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_problems">

Lists the problems with your application.

```sql
SELECT
AccountId,
NextToken,
ProblemList,
ResourceGroupName
FROM aws.application_insights.problems
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_problem"
    values={[
        { label: 'update_problem', value: 'update_problem' }
    ]}
>
<TabItem value="update_problem">

Updates the visibility of the problem or specifies the problem as RESOLVED.

```sql
UPDATE aws.application_insights.problems
SET 
ProblemId = '{{ ProblemId }}',
UpdateStatus = '{{ UpdateStatus }}',
Visibility = '{{ Visibility }}'
WHERE 
region = '{{ region }}' --required
AND ProblemId = '{{ ProblemId }}' --required;
```
</TabItem>
</Tabs>
