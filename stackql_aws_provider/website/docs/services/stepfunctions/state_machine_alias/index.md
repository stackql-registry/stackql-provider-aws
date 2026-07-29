--- 
title: state_machine_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_alias
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

Creates, updates, deletes, gets or lists a <code>state_machine_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_machine_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.state_machine_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_state_machine_alias"
    values={[
        { label: 'describe_state_machine_alias', value: 'describe_state_machine_alias' }
    ]}
>
<TabItem value="describe_state_machine_alias">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state machine alias.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the state machine alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_configuration" /></td>
    <td><code>array</code></td>
    <td>The routing configuration of the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="state_machine_alias_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine alias.</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the state machine alias was last updated. For a newly created state machine, this is the same as the creation date.</td>
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
    <td><a href="#describe_state_machine_alias"><CopyableCode code="describe_state_machine_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a state machine alias. Related operations: CreateStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias</td>
</tr>
<tr>
    <td><a href="#create_state_machine_alias"><CopyableCode code="create_state_machine_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-routingConfiguration"><code>routingConfiguration</code></a></td>
    <td></td>
    <td>Creates an alias for a state machine that points to one or two versions of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code. You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify. To create an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource. Related operations: DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias</td>
</tr>
<tr>
    <td><a href="#update_state_machine_alias"><CopyableCode code="update_state_machine_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stateMachineAliasArn"><code>stateMachineAliasArn</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias</td>
</tr>
<tr>
    <td><a href="#delete_state_machine_alias"><CopyableCode code="delete_state_machine_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias</td>
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
    defaultValue="describe_state_machine_alias"
    values={[
        { label: 'describe_state_machine_alias', value: 'describe_state_machine_alias' }
    ]}
>
<TabItem value="describe_state_machine_alias">

Returns details about a state machine alias. Related operations: CreateStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

```sql
SELECT
name,
creation_date,
description,
routing_configuration,
state_machine_alias_arn,
update_date
FROM aws.stepfunctions.state_machine_alias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_state_machine_alias"
    values={[
        { label: 'create_state_machine_alias', value: 'create_state_machine_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_state_machine_alias">

Creates an alias for a state machine that points to one or two versions of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code. You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify. To create an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource. Related operations: DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

```sql
INSERT INTO aws.stepfunctions.state_machine_alias (
description,
name,
routingConfiguration,
region
)
SELECT 
'{{ description }}',
'{{ name }}' /* required */,
'{{ routingConfiguration }}' /* required */,
'{{ region }}'
RETURNING
creation_date,
state_machine_alias_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: state_machine_alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the state_machine_alias resource.
    - name: description
      value: "{{ description }}"
      description: |
        A description for the state machine alias.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the state machine alias. To avoid conflict with version ARNs, don't use an integer in the name of the alias.
    - name: routingConfiguration
      description: |
        The routing configuration of a state machine alias. The routing configuration shifts execution traffic between two state machine versions. routingConfiguration contains an array of RoutingConfig objects that specify up to two state machine versions. Step Functions then randomly choses which version to run an execution with based on the weight assigned to each RoutingConfig.
      value:
        - stateMachineVersionArn: "{{ stateMachineVersionArn }}"
          weight: {{ weight }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_state_machine_alias"
    values={[
        { label: 'update_state_machine_alias', value: 'update_state_machine_alias' }
    ]}
>
<TabItem value="update_state_machine_alias">

Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

```sql
UPDATE aws.stepfunctions.state_machine_alias
SET 
stateMachineAliasArn = '{{ stateMachineAliasArn }}',
description = '{{ description }}',
routingConfiguration = '{{ routingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND stateMachineAliasArn = '{{ stateMachineAliasArn }}' --required
RETURNING
update_date;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_state_machine_alias"
    values={[
        { label: 'delete_state_machine_alias', value: 'delete_state_machine_alias' }
    ]}
>
<TabItem value="delete_state_machine_alias">

Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias

```sql
DELETE FROM aws.stepfunctions.state_machine_alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
