--- 
title: pull_request_approval_states
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_request_approval_states
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>pull_request_approval_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_request_approval_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.pull_request_approval_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request_approval_states"
    values={[
        { label: 'get_pull_request_approval_states', value: 'get_pull_request_approval_states' }
    ]}
>
<TabItem value="get_pull_request_approval_states">

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
    <td><CopyableCode code="approvals" /></td>
    <td><code>array</code></td>
    <td>Information about users who have approved the pull request.</td>
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
    <td><a href="#get_pull_request_approval_states"><CopyableCode code="get_pull_request_approval_states" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_approval_state"><CopyableCode code="update_pull_request_approval_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-approvalState"><code>approvalState</code></a></td>
    <td></td>
    <td>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</td>
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
    defaultValue="get_pull_request_approval_states"
    values={[
        { label: 'get_pull_request_approval_states', value: 'get_pull_request_approval_states' }
    ]}
>
<TabItem value="get_pull_request_approval_states">

Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.

```sql
SELECT
approvals
FROM aws.codecommit.pull_request_approval_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_request_approval_state"
    values={[
        { label: 'update_pull_request_approval_state', value: 'update_pull_request_approval_state' }
    ]}
>
<TabItem value="update_pull_request_approval_state">

Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.

```sql
UPDATE aws.codecommit.pull_request_approval_states
SET 
pullRequestId = '{{ pullRequestId }}',
revisionId = '{{ revisionId }}',
approvalState = '{{ approvalState }}'
WHERE 
region = '{{ region }}' --required
AND pullRequestId = '{{ pullRequestId }}' --required
AND revisionId = '{{ revisionId }}' --required
AND approvalState = '{{ approvalState }}' --required;
```
</TabItem>
</Tabs>
