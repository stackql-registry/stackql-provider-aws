--- 
title: state_machine_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_aliases
  - stepfunctions
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

Creates, updates, deletes, gets or lists a <code>state_machine_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_machine_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.state_machine_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_state_machine_aliases"
    values={[
        { label: 'list_state_machine_aliases', value: 'list_state_machine_aliases' }
    ]}
>
<TabItem value="list_state_machine_aliases">

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
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineAliases" /></td>
    <td><code>array</code></td>
    <td>Aliases for the state machine.</td>
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
    <td><a href="#list_state_machine_aliases"><CopyableCode code="list_state_machine_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias</td>
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
    defaultValue="list_state_machine_aliases"
    values={[
        { label: 'list_state_machine_aliases', value: 'list_state_machine_aliases' }
    ]}
>
<TabItem value="list_state_machine_aliases">

Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

```sql
SELECT
nextToken,
stateMachineAliases
FROM aws.stepfunctions.state_machine_aliases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
