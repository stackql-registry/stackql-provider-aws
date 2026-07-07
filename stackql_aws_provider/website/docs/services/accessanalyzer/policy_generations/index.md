--- 
title: policy_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_generations
  - accessanalyzer
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

Creates, updates, deletes, gets or lists a <code>policy_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.policy_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_generations"
    values={[
        { label: 'list_policy_generations', value: 'list_policy_generations' }
    ]}
>
<TabItem value="list_policy_generations">

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
    <td><CopyableCode code="completedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the policy generation was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.</td>
</tr>
<tr>
    <td><CopyableCode code="principalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM entity (user or role) for which you are generating a policy. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iam::&#91;^:&#93;*:(role|user)/.&#123;1,576&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the policy generation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the policy generation request. (IN_PROGRESS, SUCCEEDED, FAILED, CANCELED)</td>
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
    <td><a href="#list_policy_generations"><CopyableCode code="list_policy_generations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-principalArn"><code>principalArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all of the policy generations requested in the last seven days.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
<tr id="parameter-principalArn">
    <td><CopyableCode code="principalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with ListGeneratedPolicies to filter the results to only include results for a specific principal.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policy_generations"
    values={[
        { label: 'list_policy_generations', value: 'list_policy_generations' }
    ]}
>
<TabItem value="list_policy_generations">

Lists all of the policy generations requested in the last seven days.

```sql
SELECT
completedOn,
jobId,
principalArn,
startedOn,
status
FROM aws.accessanalyzer.policy_generations
WHERE region = '{{ region }}' -- required
AND principalArn = '{{ principalArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
