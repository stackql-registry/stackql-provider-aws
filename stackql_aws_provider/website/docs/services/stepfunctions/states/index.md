--- 
title: states
hide_title: false
hide_table_of_contents: false
keywords:
  - states
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

Creates, updates, deletes, gets or lists a <code>states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#test_state"><CopyableCode code="test_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following: A state's input and output processing data flow An Amazon Web Services service integration request and response An HTTP Task request and response You can call this API on only one state at a time. The states that you can test include the following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error. TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="test_state"
    values={[
        { label: 'test_state', value: 'test_state' }
    ]}
>
<TabItem value="test_state">

Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following: A state's input and output processing data flow An Amazon Web Services service integration request and response An HTTP Task request and response You can call this API on only one state at a time. The states that you can test include the following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error. TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states.

```sql
EXEC aws.stepfunctions.states.test_state 
@region='{{ region }}' --required 
@@json=
'{
"definition": "{{ definition }}", 
"roleArn": "{{ roleArn }}", 
"input": "{{ input }}", 
"inspectionLevel": "{{ inspectionLevel }}", 
"revealSecrets": {{ revealSecrets }}, 
"variables": "{{ variables }}", 
"stateName": "{{ stateName }}", 
"mock": "{{ mock }}", 
"context": "{{ context }}", 
"stateConfiguration": "{{ stateConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
