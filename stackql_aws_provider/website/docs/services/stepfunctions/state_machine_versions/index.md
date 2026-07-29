--- 
title: state_machine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_versions
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

Creates, updates, deletes, gets or lists a <code>state_machine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_machine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.state_machine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_state_machine_versions"
    values={[
        { label: 'list_state_machine_versions', value: 'list_state_machine_versions' }
    ]}
>
<TabItem value="list_state_machine_versions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
<tr>
    <td><CopyableCode code="state_machine_versions" /></td>
    <td><code>array</code></td>
    <td>Versions for the state machine.</td>
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
    <td><a href="#list_state_machine_versions"><CopyableCode code="list_state_machine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion DeleteStateMachineVersion</td>
</tr>
<tr>
    <td><a href="#delete_state_machine_version"><CopyableCode code="delete_state_machine_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a state machine version. After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate its in-progress executions. You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions</td>
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
    defaultValue="list_state_machine_versions"
    values={[
        { label: 'list_state_machine_versions', value: 'list_state_machine_versions' }
    ]}
>
<TabItem value="list_state_machine_versions">

Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion DeleteStateMachineVersion

```sql
SELECT
next_token,
state_machine_versions
FROM aws.stepfunctions.state_machine_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_state_machine_version"
    values={[
        { label: 'delete_state_machine_version', value: 'delete_state_machine_version' }
    ]}
>
<TabItem value="delete_state_machine_version">

Deletes a state machine version. After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate its in-progress executions. You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

```sql
DELETE FROM aws.stepfunctions.state_machine_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
