--- 
title: stack_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_instances
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>stack_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_instance"
    values={[
        { label: 'describe_stack_instance', value: 'describe_stack_instance' },
        { label: 'list_stack_instances', value: 'list_stack_instances' }
    ]}
>
<TabItem value="describe_stack_instance">

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
    <td><CopyableCode code="Account" /></td>
    <td><code>string</code></td>
    <td>&#91;Self-managed permissions&#93; The name of the Amazon Web Services account that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="DriftStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the stack instance's actual configuration compared to the expected template and parameter configuration of the StackSet it belongs to. DRIFTED: The stack differs from the expected template and parameter configuration of the StackSet it belongs to. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted. NOT_CHECKED: CloudFormation hasn't checked if the stack instance differs from its expected StackSet configuration. IN_SYNC: The stack instance's actual configuration matches its expected StackSset configuration. UNKNOWN: This value is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDriftCheckTimestamp" /></td>
    <td><code>string</code></td>
    <td>Most recent time when CloudFormation performed a drift detection operation on the stack instance. This value will be NULL for any stack instance that drift detection hasn't yet been performed on.</td>
</tr>
<tr>
    <td><CopyableCode code="LastOperationId" /></td>
    <td><code>string</code></td>
    <td>The last unique ID of a StackSet operation performed on a stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; The organization root ID or organizational unit (OU) IDs that you specified for DeploymentTargets.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterOverrides" /></td>
    <td><code>string</code></td>
    <td>A list of parameters from the StackSet template whose values have been overridden in this stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services Region that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="StackId" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StackInstanceStatus" /></td>
    <td><code>string</code></td>
    <td>The detailed status of the stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StackSetId" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the stack instance, in terms of its synchronization with its associated stack set. INOPERABLE: A DeleteStackInstances operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further UpdateStackSet operations. You might need to perform a DeleteStackInstances operation, with RetainStacks set to true, to delete the stack instance, and then delete the stack manually. INOPERABLE can be returned here when the cause is a failed import. If it's due to a failed import, the operation can be retried once the failures are fixed. To see if this is due to a failed import, look at the DetailedStatus member in the StackInstanceSummary member that is a peer to this Status member. OUTDATED: The stack isn't currently up to date with the StackSet because: The associated stack failed during a CreateStackSet or UpdateStackSet operation. The stack was part of a CreateStackSet or UpdateStackSet operation that failed or was stopped before the stack was created or updated. CURRENT: The stack is currently up to date with the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The explanation for the specific status code that's assigned to this stack instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stack_instances">

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
    <td><CopyableCode code="Account" /></td>
    <td><code>string</code></td>
    <td>&#91;Self-managed permissions&#93; The name of the Amazon Web Services account that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="DriftStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the stack instance's actual configuration compared to the expected template and parameter configuration of the StackSet it belongs to. DRIFTED: The stack differs from the expected template and parameter configuration of the StackSet it belongs to. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted. NOT_CHECKED: CloudFormation hasn't checked if the stack instance differs from its expected StackSet configuration. IN_SYNC: The stack instance's actual configuration matches its expected StackSet configuration. UNKNOWN: This value is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDriftCheckTimestamp" /></td>
    <td><code>string</code></td>
    <td>Most recent time when CloudFormation performed a drift detection operation on the stack instance. This value will be NULL for any stack instance that drift detection hasn't yet been performed on.</td>
</tr>
<tr>
    <td><CopyableCode code="LastOperationId" /></td>
    <td><code>string</code></td>
    <td>The last unique ID of a StackSet operation performed on a stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; The organization root ID or organizational unit (OU) IDs that you specified for DeploymentTargets.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services Region that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="StackId" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StackInstanceStatus" /></td>
    <td><code>string</code></td>
    <td>The detailed status of the stack instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StackSetId" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that the stack instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the stack instance, in terms of its synchronization with its associated stack set. INOPERABLE: A DeleteStackInstances operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further UpdateStackSet operations. You might need to perform a DeleteStackInstances operation, with RetainStacks set to true, to delete the stack instance, and then delete the stack manually. INOPERABLE can be returned here when the cause is a failed import. If it's due to a failed import, the operation can be retried once the failures are fixed. To see if this is due to a failed import, call the DescribeStackInstance API operation, look at the DetailedStatus member returned in the StackInstanceSummary member. OUTDATED: The stack isn't currently up to date with the StackSet because: The associated stack failed during a CreateStackSet or UpdateStackSet operation. The stack was part of a CreateStackSet or UpdateStackSet operation that failed or was stopped before the stack was created or updated. CURRENT: The stack is currently up to date with the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The explanation for the specific status code assigned to this stack instance.</td>
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
    <td><a href="#describe_stack_instance"><CopyableCode code="describe_stack_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-StackInstanceAccount"><code>StackInstanceAccount</code></a>, <a href="#parameter-StackInstanceRegion"><code>StackInstanceRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region. For a list of stack instances that are associated with a specific StackSet, use ListStackInstances.</td>
</tr>
<tr>
    <td><a href="#list_stack_instances"><CopyableCode code="list_stack_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-StackInstanceAccount"><code>StackInstanceAccount</code></a>, <a href="#parameter-StackInstanceRegion"><code>StackInstanceRegion</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns summary information about stack instances that are associated with the specified StackSet. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.</td>
</tr>
<tr>
    <td><a href="#create_stack_instances"><CopyableCode code="create_stack_instances" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Accounts"><code>Accounts</code></a>, <a href="#parameter-DeploymentTargets"><code>DeploymentTargets</code></a>, <a href="#parameter-Regions"><code>Regions</code></a>, <a href="#parameter-ParameterOverrides"><code>ParameterOverrides</code></a>, <a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either Accounts or DeploymentTargets, and you must specify at least one value for Regions. The maximum number of organizational unit (OUs) supported by a CreateStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.</td>
</tr>
<tr>
    <td><a href="#update_stack_instances"><CopyableCode code="update_stack_instances" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Accounts"><code>Accounts</code></a>, <a href="#parameter-DeploymentTargets"><code>DeploymentTargets</code></a>, <a href="#parameter-Regions"><code>Regions</code></a>, <a href="#parameter-ParameterOverrides"><code>ParameterOverrides</code></a>, <a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use CreateStackInstances. During StackSet updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value. You can only update the parameter values that are specified in the StackSet. To add or delete a parameter itself, use UpdateStackSet to update the StackSet template. If you add a parameter to a template, before you can override the parameter value specified in the StackSet you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the StackSet. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances. The maximum number of organizational unit (OUs) supported by a UpdateStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.</td>
</tr>
<tr>
    <td><a href="#delete_stack_instances"><CopyableCode code="delete_stack_instances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-RetainStacks"><code>RetainStacks</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Accounts"><code>Accounts</code></a>, <a href="#parameter-DeploymentTargets"><code>DeploymentTargets</code></a>, <a href="#parameter-Regions"><code>Regions</code></a>, <a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions. The maximum number of organizational unit (OUs) supported by a DeleteStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.</td>
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
<tr id="parameter-RetainStacks">
    <td><CopyableCode code="RetainStacks" /></td>
    <td><code>boolean</code></td>
    <td>Removes the stack instances from the specified StackSet, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set. For more information, see StackSet operation options.</td>
</tr>
<tr id="parameter-StackInstanceAccount">
    <td><CopyableCode code="StackInstanceAccount" /></td>
    <td><code>string</code></td>
    <td>The ID of an Amazon Web Services account that's associated with this stack instance.</td>
</tr>
<tr id="parameter-StackInstanceRegion">
    <td><CopyableCode code="StackInstanceRegion" /></td>
    <td><code>string</code></td>
    <td>The name of a Region that's associated with this stack instance.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to delete stack instances for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accounts">
    <td><CopyableCode code="Accounts" /></td>
    <td><code>array</code></td>
    <td>&#91;Self-managed permissions&#93; The account IDs of the Amazon Web Services accounts that you want to delete stack instances for. You can specify Accounts or DeploymentTargets, but not both.</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-DeploymentTargets">
    <td><CopyableCode code="DeploymentTargets" /></td>
    <td><code>object</code></td>
    <td>&#91;Service-managed permissions&#93; The Organizations accounts from which to delete stack instances. You can specify Accounts or DeploymentTargets, but not both.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>The filter to apply to stack instances</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this StackSet operation. If you don't specify an operation ID, the SDK generates one automatically. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You can retry StackSet operation requests to ensure that CloudFormation successfully received them. Repeating this StackSet operation with a new operation ID retries all stack instances whose status is OUTDATED.</td>
</tr>
<tr id="parameter-OperationPreferences">
    <td><CopyableCode code="OperationPreferences" /></td>
    <td><code>object</code></td>
    <td>Preferences for how CloudFormation performs this StackSet operation.</td>
</tr>
<tr id="parameter-ParameterOverrides">
    <td><CopyableCode code="ParameterOverrides" /></td>
    <td><code>array</code></td>
    <td>A list of input parameters whose values you want to update for the specified stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance update operations: To override the current value for a parameter, include the parameter and specify its value. To leave an overridden parameter set to its present value, include the parameter and specify UsePreviousValue as true. (You can't specify both a value and set UsePreviousValue to true.) To set an overridden parameter back to the value specified in the StackSet, specify a parameter list but don't include the parameter in the list. To leave all parameters set to their present values, don't specify this property at all. During StackSet updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value. You can only override the parameter values that are specified in the StackSet. To add or delete a parameter itself, use UpdateStackSet to update the StackSet template. If you add a parameter to a template, before you can override the parameter value specified in the StackSet you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the StackSet. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances.</td>
</tr>
<tr id="parameter-Regions">
    <td><CopyableCode code="Regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions where you want to delete StackSet instances.</td>
</tr>
<tr id="parameter-StackInstanceAccount">
    <td><CopyableCode code="StackInstanceAccount" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services account that you want to list stack instances for.</td>
</tr>
<tr id="parameter-StackInstanceRegion">
    <td><CopyableCode code="StackInstanceRegion" /></td>
    <td><code>string</code></td>
    <td>The name of the Region where you want to list stack instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_instance"
    values={[
        { label: 'describe_stack_instance', value: 'describe_stack_instance' },
        { label: 'list_stack_instances', value: 'list_stack_instances' }
    ]}
>
<TabItem value="describe_stack_instance">

Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region. For a list of stack instances that are associated with a specific StackSet, use ListStackInstances.

```sql
SELECT
Account,
DriftStatus,
LastDriftCheckTimestamp,
LastOperationId,
OrganizationalUnitId,
ParameterOverrides,
Region,
StackId,
StackInstanceStatus,
StackSetId,
Status,
StatusReason
FROM aws.cloudformation.stack_instances
WHERE StackSetName = '{{ StackSetName }}' -- required
AND StackInstanceAccount = '{{ StackInstanceAccount }}' -- required
AND StackInstanceRegion = '{{ StackInstanceRegion }}' -- required
AND region = '{{ region }}' -- required
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
<TabItem value="list_stack_instances">

Returns summary information about stack instances that are associated with the specified StackSet. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.

```sql
SELECT
Account,
DriftStatus,
LastDriftCheckTimestamp,
LastOperationId,
OrganizationalUnitId,
Region,
StackId,
StackInstanceStatus,
StackSetId,
Status,
StatusReason
FROM aws.cloudformation.stack_instances
WHERE StackSetName = '{{ StackSetName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filters = '{{ Filters }}'
AND StackInstanceAccount = '{{ StackInstanceAccount }}'
AND StackInstanceRegion = '{{ StackInstanceRegion }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stack_instances"
    values={[
        { label: 'create_stack_instances', value: 'create_stack_instances' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stack_instances">

Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either Accounts or DeploymentTargets, and you must specify at least one value for Regions. The maximum number of organizational unit (OUs) supported by a CreateStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.

```sql
INSERT INTO aws.cloudformation.stack_instances (
StackSetName,
region,
Accounts,
DeploymentTargets,
Regions,
ParameterOverrides,
OperationPreferences,
OperationId,
CallAs
)
SELECT 
'{{ StackSetName }}',
'{{ region }}',
'{{ Accounts }}',
'{{ DeploymentTargets }}',
'{{ Regions }}',
'{{ ParameterOverrides }}',
'{{ OperationPreferences }}',
'{{ OperationId }}',
'{{ CallAs }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stack_instances
  props:
    - name: StackSetName
      value: "{{ StackSetName }}"
      description: Required parameter for the stack_instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stack_instances resource.
    - name: Accounts
      value: "{{ Accounts }}"
      description: [Self-managed permissions] The account IDs of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for. You can specify Accounts or DeploymentTargets, but not both.
      description: [Self-managed permissions] The account IDs of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for. You can specify Accounts or DeploymentTargets, but not both.
    - name: DeploymentTargets
      value: "{{ DeploymentTargets }}"
      description: [Service-managed permissions] The Organizations accounts in which to create stack instances in the specified Amazon Web Services Regions. You can specify Accounts or DeploymentTargets, but not both.
      description: [Service-managed permissions] The Organizations accounts in which to create stack instances in the specified Amazon Web Services Regions. You can specify Accounts or DeploymentTargets, but not both.
    - name: Regions
      value: "{{ Regions }}"
      description: The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts.
      description: The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts.
    - name: ParameterOverrides
      value: "{{ ParameterOverrides }}"
      description: A list of StackSet parameters whose values you want to override in the selected stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations: To override the current value for a parameter, include the parameter and specify its value. To leave an overridden parameter set to its present value, include the parameter and specify UsePreviousValue as true. (You can't specify both a value and set UsePreviousValue to true.) To set an overridden parameter back to the value specified in the StackSet, specify a parameter list but don't include the parameter in the list. To leave all parameters set to their present values, don't specify this property at all. During StackSet updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value. You can only override the parameter values that are specified in the StackSet; to add or delete a parameter itself, use UpdateStackSet to update the StackSet template.
      description: A list of StackSet parameters whose values you want to override in the selected stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations: To override the current value for a parameter, include the parameter and specify its value. To leave an overridden parameter set to its present value, include the parameter and specify UsePreviousValue as true. (You can't specify both a value and set UsePreviousValue to true.) To set an overridden parameter back to the value specified in the StackSet, specify a parameter list but don't include the parameter in the list. To leave all parameters set to their present values, don't specify this property at all. During StackSet updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value. You can only override the parameter values that are specified in the StackSet; to add or delete a parameter itself, use UpdateStackSet to update the StackSet template.
    - name: OperationPreferences
      value: "{{ OperationPreferences }}"
      description: Preferences for how CloudFormation performs this StackSet operation.
      description: Preferences for how CloudFormation performs this StackSet operation.
    - name: OperationId
      value: "{{ OperationId }}"
      description: The unique identifier for this StackSet operation. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You might retry StackSet operation requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically. Repeating this StackSet operation with a new operation ID retries all stack instances whose status is OUTDATED.
      description: The unique identifier for this StackSet operation. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You might retry StackSet operation requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically. Repeating this StackSet operation with a new operation ID retries all stack instances whose status is OUTDATED.
    - name: CallAs
      value: "{{ CallAs }}"
      description: [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.
      description: [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stack_instances"
    values={[
        { label: 'update_stack_instances', value: 'update_stack_instances' }
    ]}
>
<TabItem value="update_stack_instances">

Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use CreateStackInstances. During StackSet updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value. You can only update the parameter values that are specified in the StackSet. To add or delete a parameter itself, use UpdateStackSet to update the StackSet template. If you add a parameter to a template, before you can override the parameter value specified in the StackSet you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the StackSet. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances. The maximum number of organizational unit (OUs) supported by a UpdateStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.

```sql
UPDATE aws.cloudformation.stack_instances
SET 
-- No updatable properties
WHERE 
StackSetName = '{{ StackSetName }}' --required
AND region = '{{ region }}' --required
AND Accounts = '{{ Accounts}}'
AND DeploymentTargets = '{{ DeploymentTargets}}'
AND Regions = '{{ Regions}}'
AND ParameterOverrides = '{{ ParameterOverrides}}'
AND OperationPreferences = '{{ OperationPreferences}}'
AND OperationId = '{{ OperationId}}'
AND CallAs = '{{ CallAs}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stack_instances"
    values={[
        { label: 'delete_stack_instances', value: 'delete_stack_instances' }
    ]}
>
<TabItem value="delete_stack_instances">

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions. The maximum number of organizational unit (OUs) supported by a DeleteStackInstances operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.

```sql
DELETE FROM aws.cloudformation.stack_instances
WHERE StackSetName = '{{ StackSetName }}' --required
AND RetainStacks = '{{ RetainStacks }}' --required
AND region = '{{ region }}' --required
AND Accounts = '{{ Accounts }}'
AND DeploymentTargets = '{{ DeploymentTargets }}'
AND Regions = '{{ Regions }}'
AND OperationPreferences = '{{ OperationPreferences }}'
AND OperationId = '{{ OperationId }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>
