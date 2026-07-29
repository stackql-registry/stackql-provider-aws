--- 
title: stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - stacks
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

Creates, updates, deletes, gets or lists a <code>stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stacks"
    values={[
        { label: 'describe_stacks', value: 'describe_stacks' },
        { label: 'list_stacks', value: 'list_stacks' }
    ]}
>
<TabItem value="describe_stacks">

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
    <td><CopyableCode code="capabilities" /></td>
    <td><code>string</code></td>
    <td>The capabilities allowed in the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the change set.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The time at which the stack was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the deletion mode for the stack. Possible values are: STANDARD - Use the standard behavior. Specifying this value is the same as not specifying this parameter. FORCE_DELETE_STACK - Delete the stack if it's stuck in a DELETE_FAILED state due to resource deletion failure.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_time" /></td>
    <td><code>string</code></td>
    <td>The time the stack was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A user-defined description associated with the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="detailed_status" /></td>
    <td><code>string</code></td>
    <td>The detailed status of the resource or stack. If CONFIGURATION_COMPLETE is present, the resource or resource configuration phase has completed and the stabilization of the resources is in progress. The StackSets CONFIGURATION_COMPLETE when all of the resources in the stack have reached that event. For more information, see Understand CloudFormation stack creation events in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_rollback" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to enable or disable rollback on stack creation failures: true: disable rollback. false: enable rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_information" /></td>
    <td><code>string</code></td>
    <td>Information about whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_termination_protection" /></td>
    <td><code>boolean</code></td>
    <td>Whether termination protection is enabled for the stack. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack. For more information, see Protect a CloudFormation stack from being deleted in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="last_operations" /></td>
    <td><code>string</code></td>
    <td>Information about the most recent operations performed on this stack.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_arns" /></td>
    <td><code>string</code></td>
    <td>Amazon SNS topic Amazon Resource Names (ARNs) to which stack related events are published.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>string</code></td>
    <td>A list of output structures.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>A list of Parameter structures.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>For nested stacks, the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack. For more information, see Nested stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="retain_except_on_create" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that's associated with the stack. During a stack operation, CloudFormation uses this role's credentials to make calls on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_configuration" /></td>
    <td><code>string</code></td>
    <td>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</td>
</tr>
<tr>
    <td><CopyableCode code="root_id" /></td>
    <td><code>string</code></td>
    <td>For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately belongs. For more information, see Nested stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_name" /></td>
    <td><code>string</code></td>
    <td>The name associated with the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_status" /></td>
    <td><code>string</code></td>
    <td>Current status of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_status_reason" /></td>
    <td><code>string</code></td>
    <td>Success/failure message associated with the stack status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of Tags that specify information about the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time within which stack creation should complete.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stacks">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The time the stack was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_time" /></td>
    <td><code>string</code></td>
    <td>The time the stack was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_information" /></td>
    <td><code>string</code></td>
    <td>Summarizes information about whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection.</td>
</tr>
<tr>
    <td><CopyableCode code="last_operations" /></td>
    <td><code>string</code></td>
    <td>Information about the most recent operations performed on this stack.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>For nested stacks, the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack. For more information, see Nested stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="root_id" /></td>
    <td><code>string</code></td>
    <td>For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately belongs. For more information, see Nested stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>Unique stack identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_name" /></td>
    <td><code>string</code></td>
    <td>The name associated with the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_status_reason" /></td>
    <td><code>string</code></td>
    <td>Success/Failure message associated with the stack status.</td>
</tr>
<tr>
    <td><CopyableCode code="template_description" /></td>
    <td><code>string</code></td>
    <td>The template description of the template used to create the stack.</td>
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
    <td><a href="#describe_stacks"><CopyableCode code="describe_stacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created. For more information about a stack's event history, see Understand CloudFormation stack creation events in the CloudFormation User Guide. If the stack doesn't exist, a ValidationError is returned.</td>
</tr>
<tr>
    <td><a href="#list_stacks"><CopyableCode code="list_stacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-StackStatusFilter"><code>StackStatusFilter</code></a></td>
    <td>Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).</td>
</tr>
<tr>
    <td><a href="#create_stack"><CopyableCode code="create_stack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-DisableRollback"><code>DisableRollback</code></a>, <a href="#parameter-RollbackConfiguration"><code>RollbackConfiguration</code></a>, <a href="#parameter-TimeoutInMinutes"><code>TimeoutInMinutes</code></a>, <a href="#parameter-NotificationARNs"><code>NotificationARNs</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-OnFailure"><code>OnFailure</code></a>, <a href="#parameter-StackPolicyBody"><code>StackPolicyBody</code></a>, <a href="#parameter-StackPolicyURL"><code>StackPolicyURL</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-EnableTerminationProtection"><code>EnableTerminationProtection</code></a>, <a href="#parameter-RetainExceptOnCreate"><code>RetainExceptOnCreate</code></a></td>
    <td>Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the DescribeStacks operation. For more information about creating a stack and monitoring stack progress, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#update_termination_protection"><CopyableCode code="update_termination_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EnableTerminationProtection"><code>EnableTerminationProtection</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect a CloudFormation stack from being deleted in the CloudFormation User Guide. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack.</td>
</tr>
<tr>
    <td><a href="#update_stack"><CopyableCode code="update_stack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-UsePreviousTemplate"><code>UsePreviousTemplate</code></a>, <a href="#parameter-StackPolicyDuringUpdateBody"><code>StackPolicyDuringUpdateBody</code></a>, <a href="#parameter-StackPolicyDuringUpdateURL"><code>StackPolicyDuringUpdateURL</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-RollbackConfiguration"><code>RollbackConfiguration</code></a>, <a href="#parameter-StackPolicyBody"><code>StackPolicyBody</code></a>, <a href="#parameter-StackPolicyURL"><code>StackPolicyURL</code></a>, <a href="#parameter-NotificationARNs"><code>NotificationARNs</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DisableRollback"><code>DisableRollback</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-RetainExceptOnCreate"><code>RetainExceptOnCreate</code></a></td>
    <td>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about updating a stack and monitoring the progress of the update, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_stack"><CopyableCode code="delete_stack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RetainResources"><code>RetainResources</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-DeletionMode"><code>DeletionMode</code></a></td>
    <td>Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the DescribeStacks operation if the deletion has been completed successfully. For more information about deleting a stack, see Delete a stack from the CloudFormation console in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_update_stack"><CopyableCode code="cancel_update_stack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration. You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</td>
</tr>
<tr>
    <td><a href="#continue_update_rollback"><CopyableCode code="continue_update_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-ResourcesToSkip"><code>ResourcesToSkip</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td>Continues rolling back a stack from UPDATE_ROLLBACK_FAILED to UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state) and then try to update the stack again. A stack enters the UPDATE_ROLLBACK_FAILED state when CloudFormation can't roll back all changes after a failed stack update. For example, this might occur when a stack attempts to roll back to an old database that was deleted outside of CloudFormation. Because CloudFormation doesn't know the instance was deleted, it assumes the instance still exists and attempts to roll back to it, causing the update rollback to fail. For more information, see Continue rolling back an update in the CloudFormation User Guide. For information for troubleshooting a failed update rollback, see Update rollback failed.</td>
</tr>
<tr>
    <td><a href="#detect_stack_drift"><CopyableCode code="detect_stack_drift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LogicalResourceIds"><code>LogicalResourceIds</code></a></td>
    <td>Detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to detect drift on all supported resources for a given stack, or DetectStackResourceDrift to detect drift on individual resources. For a list of stack resources that currently support drift detection, see Resource type support for imports and drift detection. DetectStackDrift can take up to several minutes, depending on the number of resources contained within the stack. Use DescribeStackDriftDetectionStatus to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources. When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform DetectStackDrift directly on the nested stack itself.</td>
</tr>
<tr>
    <td><a href="#detect_stack_resource_drift"><CopyableCode code="detect_stack_resource_drift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-LogicalResourceId"><code>LogicalResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about whether a resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all resources in a given stack that support drift detection. Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see Resource type support for imports and drift detection.</td>
</tr>
<tr>
    <td><a href="#import_stacks_to_stack_set"><CopyableCode code="import_stacks_to_stack_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackIds"><code>StackIds</code></a>, <a href="#parameter-StackIdsUrl"><code>StackIdsUrl</code></a>, <a href="#parameter-OrganizationalUnitIds"><code>OrganizationalUnitIds</code></a>, <a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Import existing stacks into a new StackSets. Use the stack import operation to import up to 10 stacks into a new StackSet in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</td>
</tr>
<tr>
    <td><a href="#rollback_stack"><CopyableCode code="rollback_stack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-RetainExceptOnCreate"><code>RetainExceptOnCreate</code></a></td>
    <td>When specifying RollbackStack, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the DescribeStacks operation. Rolls back the specified stack to the last known stable state from CREATE_FAILED or UPDATE_FAILED stack statuses. This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a *_COMPLETE. This includes the following stack statuses. CREATE_COMPLETE UPDATE_COMPLETE UPDATE_ROLLBACK_COMPLETE IMPORT_COMPLETE IMPORT_ROLLBACK_COMPLETE</td>
</tr>
<tr>
    <td><a href="#signal_resource"><CopyableCode code="signal_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-LogicalResourceId"><code>LogicalResourceId</code></a>, <a href="#parameter-UniqueId"><code>UniqueId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a></td>
    <td>Sends a signal to the specified resource with a success or failure status. You can use the SignalResource operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.</td>
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
<tr id="parameter-EnableTerminationProtection">
    <td><CopyableCode code="EnableTerminationProtection" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable termination protection on the specified stack.</td>
</tr>
<tr id="parameter-LogicalResourceId">
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The stack name or unique stack ID that includes the resource that you want to signal.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the StackSet. The name must be unique in the Region where you create your StackSet.</td>
</tr>
<tr id="parameter-UniqueId">
    <td><CopyableCode code="UniqueId" /></td>
    <td><code>string</code></td>
    <td>A unique ID of the signal. When you signal Amazon EC2 instances or Amazon EC2 Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. For service managed StackSets, specify DELEGATED_ADMIN.</td>
</tr>
<tr id="parameter-Capabilities">
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>array</code></td>
    <td>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. If you want to update a stack from a stack template that contains macros and nested stacks, you must update the stack directly from the template using this capability. You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified. For more information, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.</td>
</tr>
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this RollbackStack request.</td>
</tr>
<tr id="parameter-DeletionMode">
    <td><CopyableCode code="DeletionMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the deletion mode for the stack. Possible values are: STANDARD - Use the standard behavior. Specifying this value is the same as not specifying this parameter. FORCE_DELETE_STACK - Delete the stack if it's stuck in a DELETE_FAILED state due to resource deletion failure.</td>
</tr>
<tr id="parameter-DisableRollback">
    <td><CopyableCode code="DisableRollback" /></td>
    <td><code>boolean</code></td>
    <td>Preserve the state of previously provisioned resources when an operation fails. Default: False</td>
</tr>
<tr id="parameter-EnableTerminationProtection">
    <td><CopyableCode code="EnableTerminationProtection" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect CloudFormation stacks from being deleted in the CloudFormation User Guide. Termination protection is deactivated on stacks by default. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack.</td>
</tr>
<tr id="parameter-LogicalResourceIds">
    <td><CopyableCode code="LogicalResourceIds" /></td>
    <td><code>array</code></td>
    <td>The logical names of any resources you want to use as filters.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-NotificationARNs">
    <td><CopyableCode code="NotificationARNs" /></td>
    <td><code>array</code></td>
    <td>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack. Specify an empty list to remove all notification topics.</td>
</tr>
<tr id="parameter-OnFailure">
    <td><CopyableCode code="OnFailure" /></td>
    <td><code>string</code></td>
    <td>Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or DisableRollback, but not both. Although the default setting is ROLLBACK, there is one exception. This exception occurs when a StackSet attempts to deploy a stack instance and the stack instance fails to create successfully. In this case, the CreateStack call overrides the default setting and sets the value of OnFailure to DELETE. Default: ROLLBACK</td>
</tr>
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>A unique, user defined, identifier for the StackSet operation.</td>
</tr>
<tr id="parameter-OperationPreferences">
    <td><CopyableCode code="OperationPreferences" /></td>
    <td><code>object</code></td>
    <td>The user-specified preferences for how CloudFormation performs a StackSet operation. For more information about maximum concurrent accounts and failure tolerance, see StackSet operation options.</td>
</tr>
<tr id="parameter-OrganizationalUnitIds">
    <td><CopyableCode code="OrganizationalUnitIds" /></td>
    <td><code>array</code></td>
    <td>The list of OU ID's to which the imported stacks must be mapped as deployment targets.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type.</td>
</tr>
<tr id="parameter-ResourceTypes">
    <td><CopyableCode code="ResourceTypes" /></td>
    <td><code>array</code></td>
    <td>Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see Control CloudFormation access with Identity and Access Management. Only one of the Capabilities and ResourceType parameters can be specified.</td>
</tr>
<tr id="parameter-ResourcesToSkip">
    <td><CopyableCode code="ResourcesToSkip" /></td>
    <td><code>array</code></td>
    <td>A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the UPDATE_FAILED state because a rollback failed. You can't specify resources that are in the UPDATE_FAILED state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the DescribeStackResources action, and view the resource status reason. Specify this property to skip rolling back resources that CloudFormation can't successfully roll back. We recommend that you troubleshoot resources before skipping them. CloudFormation sets the status of the specified resources to UPDATE_COMPLETE and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable. Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources. To skip resources that are part of nested stacks, use the following format: NestedStackName.ResourceLogicalID. If you want to specify the logical ID of a stack resource (Type: AWS::CloudFormation::Stack) in the ResourcesToSkip list, then its corresponding embedded stack must be in one of the following states: DELETE_IN_PROGRESS, DELETE_COMPLETE, or DELETE_FAILED. Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see Continue rolling back from failed nested stack updates.</td>
</tr>
<tr id="parameter-RetainExceptOnCreate">
    <td><CopyableCode code="RetainExceptOnCreate" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false</td>
</tr>
<tr id="parameter-RetainResources">
    <td><CopyableCode code="RetainResources" /></td>
    <td><code>array</code></td>
    <td>For stacks in the DELETE_FAILED state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the retained resources. Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</td>
</tr>
<tr id="parameter-RoleARN">
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to rollback the stack.</td>
</tr>
<tr id="parameter-RollbackConfiguration">
    <td><CopyableCode code="RollbackConfiguration" /></td>
    <td><code>object</code></td>
    <td>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</td>
</tr>
<tr id="parameter-StackIds">
    <td><CopyableCode code="StackIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the stacks you are importing into a StackSet. You import up to 10 stacks per StackSet at a time. Specify either StackIds or StackIdsUrl.</td>
</tr>
<tr id="parameter-StackIdsUrl">
    <td><CopyableCode code="StackIdsUrl" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 URL which contains list of stack ids to be inputted. Specify either StackIds or StackIdsUrl.</td>
</tr>
<tr id="parameter-StackPolicyBody">
    <td><CopyableCode code="StackPolicyBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains a new stack policy body. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</td>
</tr>
<tr id="parameter-StackPolicyDuringUpdateBody">
    <td><CopyableCode code="StackPolicyDuringUpdateBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains the temporary overriding stack policy body. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</td>
</tr>
<tr id="parameter-StackPolicyDuringUpdateURL">
    <td><CopyableCode code="StackPolicyDuringUpdateURL" /></td>
    <td><code>string</code></td>
    <td>Location of a file that contains the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https:​//. URLs from S3 static websites are not supported. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</td>
</tr>
<tr id="parameter-StackPolicyURL">
    <td><CopyableCode code="StackPolicyURL" /></td>
    <td><code>string</code></td>
    <td>Location of a file that contains the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https:​//. URLs from S3 static websites are not supported. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</td>
</tr>
<tr id="parameter-StackStatusFilter">
    <td><CopyableCode code="StackStatusFilter" /></td>
    <td><code>array</code></td>
    <td>Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the StackStatus parameter of the Stack data type.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags. If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.</td>
</tr>
<tr id="parameter-TemplateBody">
    <td><CopyableCode code="TemplateBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-TemplateURL">
    <td><CopyableCode code="TemplateURL" /></td>
    <td><code>string</code></td>
    <td>The URL of a file that contains the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https:​//. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-TimeoutInMinutes">
    <td><CopyableCode code="TimeoutInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that can pass before the stack status becomes CREATE_FAILED; if DisableRollback is not set or is set to false, the stack will be rolled back.</td>
</tr>
<tr id="parameter-UsePreviousTemplate">
    <td><CopyableCode code="UsePreviousTemplate" /></td>
    <td><code>boolean</code></td>
    <td>Reuse the existing template that is associated with the stack that you are updating. When using templates with the AWS::LanguageExtensions transform, provide the template instead of using UsePreviousTemplate to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see AWS::LanguageExtensions transform. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stacks"
    values={[
        { label: 'describe_stacks', value: 'describe_stacks' },
        { label: 'list_stacks', value: 'list_stacks' }
    ]}
>
<TabItem value="describe_stacks">

Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created. For more information about a stack's event history, see Understand CloudFormation stack creation events in the CloudFormation User Guide. If the stack doesn't exist, a ValidationError is returned.

```sql
SELECT
capabilities,
change_set_id,
creation_time,
deletion_mode,
deletion_time,
description,
detailed_status,
disable_rollback,
drift_information,
enable_termination_protection,
last_operations,
last_updated_time,
notification_arns,
outputs,
parameters,
parent_id,
retain_except_on_create,
role_arn,
rollback_configuration,
root_id,
stack_id,
stack_name,
stack_status,
stack_status_reason,
tags,
timeout_in_minutes
FROM aws.cloudformation.stacks
WHERE StackName = '{{ StackName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="list_stacks">

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

```sql
SELECT
creation_time,
deletion_time,
drift_information,
last_operations,
last_updated_time,
parent_id,
root_id,
stack_id,
stack_name,
stack_status,
stack_status_reason,
template_description
FROM aws.cloudformation.stacks
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND StackStatusFilter = '{{ StackStatusFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stack"
    values={[
        { label: 'create_stack', value: 'create_stack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stack">

Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the DescribeStacks operation. For more information about creating a stack and monitoring stack progress, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide.

```sql
INSERT INTO aws.cloudformation.stacks (
StackName,
region,
TemplateBody,
TemplateURL,
Parameters,
DisableRollback,
RollbackConfiguration,
TimeoutInMinutes,
NotificationARNs,
Capabilities,
ResourceTypes,
RoleARN,
OnFailure,
StackPolicyBody,
StackPolicyURL,
Tags,
ClientRequestToken,
EnableTerminationProtection,
RetainExceptOnCreate
)
SELECT 
'{{ StackName }}',
'{{ region }}',
'{{ TemplateBody }}',
'{{ TemplateURL }}',
'{{ Parameters }}',
'{{ DisableRollback }}',
'{{ RollbackConfiguration }}',
'{{ TimeoutInMinutes }}',
'{{ NotificationARNs }}',
'{{ Capabilities }}',
'{{ ResourceTypes }}',
'{{ RoleARN }}',
'{{ OnFailure }}',
'{{ StackPolicyBody }}',
'{{ StackPolicyURL }}',
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ EnableTerminationProtection }}',
'{{ RetainExceptOnCreate }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stacks
  props:
    - name: StackName
      value: "{{ StackName }}"
      description: Required parameter for the stacks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stacks resource.
    - name: TemplateBody
      value: "{{ TemplateBody }}"
      description: Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either TemplateBody or TemplateURL, but not both.
      description: Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either TemplateBody or TemplateURL, but not both.
    - name: TemplateURL
      value: "{{ TemplateURL }}"
      description: The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
      description: The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
    - name: Parameters
      value: "{{ Parameters }}"
      description: A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type.
      description: A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type.
    - name: DisableRollback
      value: {{ DisableRollback }}
      description: Set to true to disable rollback of the stack if stack creation failed. You can specify either DisableRollback or OnFailure, but not both. Default: false
      description: Set to true to disable rollback of the stack if stack creation failed. You can specify either DisableRollback or OnFailure, but not both. Default: false
    - name: RollbackConfiguration
      value: "{{ RollbackConfiguration }}"
      description: The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
      description: The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
    - name: TimeoutInMinutes
      value: {{ TimeoutInMinutes }}
      description: The amount of time that can pass before the stack status becomes CREATE_FAILED; if DisableRollback is not set or is set to false, the stack will be rolled back.
      description: The amount of time that can pass before the stack status becomes CREATE_FAILED; if DisableRollback is not set or is set to false, the stack will be rolled back.
    - name: NotificationARNs
      value: "{{ NotificationARNs }}"
      description: The Amazon SNS topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).
      description: The Amazon SNS topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).
    - name: Capabilities
      value: "{{ Capabilities }}"
      description: In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. If you want to create a stack from a stack template that contains macros and nested stacks, you must create the stack directly from the template using this capability. You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified. For more information, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.
      description: In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. If you want to create a stack from a stack template that contains macros and nested stacks, you must create the stack directly from the template using this capability. You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified. For more information, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.
    - name: ResourceTypes
      value: "{{ ResourceTypes }}"
      description: Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see Control CloudFormation access with Identity and Access Management. Only one of the Capabilities and ResourceType parameters can be specified.
      description: Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see Control CloudFormation access with Identity and Access Management. Only one of the Capabilities and ResourceType parameters can be specified.
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.
      description: The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.
    - name: OnFailure
      value: "{{ OnFailure }}"
      description: Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or DisableRollback, but not both. Although the default setting is ROLLBACK, there is one exception. This exception occurs when a StackSet attempts to deploy a stack instance and the stack instance fails to create successfully. In this case, the CreateStack call overrides the default setting and sets the value of OnFailure to DELETE. Default: ROLLBACK
      description: Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or DisableRollback, but not both. Although the default setting is ROLLBACK, there is one exception. This exception occurs when a StackSet attempts to deploy a stack instance and the stack instance fails to create successfully. In this case, the CreateStack call overrides the default setting and sets the value of OnFailure to DELETE. Default: ROLLBACK
    - name: StackPolicyBody
      value: "{{ StackPolicyBody }}"
      description: Structure that contains the stack policy body. For more information, see Prevent updates to stack resources in the CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
      description: Structure that contains the stack policy body. For more information, see Prevent updates to stack resources in the CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
    - name: StackPolicyURL
      value: "{{ StackPolicyURL }}"
      description: Location of a file that contains the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
      description: Location of a file that contains the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
    - name: Tags
      value: "{{ Tags }}"
      description: Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
      description: Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: A unique identifier for this CreateStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry CreateStack requests to ensure that CloudFormation successfully received them. All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002.
      description: A unique identifier for this CreateStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry CreateStack requests to ensure that CloudFormation successfully received them. All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002.
    - name: EnableTerminationProtection
      value: {{ EnableTerminationProtection }}
      description: Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect CloudFormation stacks from being deleted in the CloudFormation User Guide. Termination protection is deactivated on stacks by default. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack.
      description: Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect CloudFormation stacks from being deleted in the CloudFormation User Guide. Termination protection is deactivated on stacks by default. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack.
    - name: RetainExceptOnCreate
      value: {{ RetainExceptOnCreate }}
      description: When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false
      description: When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_termination_protection"
    values={[
        { label: 'update_termination_protection', value: 'update_termination_protection' },
        { label: 'update_stack', value: 'update_stack' }
    ]}
>
<TabItem value="update_termination_protection">

Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect a CloudFormation stack from being deleted in the CloudFormation User Guide. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack.

```sql
UPDATE aws.cloudformation.stacks
SET 
-- No updatable properties
WHERE 
EnableTerminationProtection = '{{ EnableTerminationProtection }}' --required
AND StackName = '{{ StackName }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
<TabItem value="update_stack">

Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about updating a stack and monitoring the progress of the update, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide.

```sql
UPDATE aws.cloudformation.stacks
SET 
-- No updatable properties
WHERE 
StackName = '{{ StackName }}' --required
AND region = '{{ region }}' --required
AND TemplateBody = '{{ TemplateBody}}'
AND TemplateURL = '{{ TemplateURL}}'
AND UsePreviousTemplate = {{ UsePreviousTemplate}}
AND StackPolicyDuringUpdateBody = '{{ StackPolicyDuringUpdateBody}}'
AND StackPolicyDuringUpdateURL = '{{ StackPolicyDuringUpdateURL}}'
AND Parameters = '{{ Parameters}}'
AND Capabilities = '{{ Capabilities}}'
AND ResourceTypes = '{{ ResourceTypes}}'
AND RoleARN = '{{ RoleARN}}'
AND RollbackConfiguration = '{{ RollbackConfiguration}}'
AND StackPolicyBody = '{{ StackPolicyBody}}'
AND StackPolicyURL = '{{ StackPolicyURL}}'
AND NotificationARNs = '{{ NotificationARNs}}'
AND Tags = '{{ Tags}}'
AND DisableRollback = {{ DisableRollback}}
AND ClientRequestToken = '{{ ClientRequestToken}}'
AND RetainExceptOnCreate = {{ RetainExceptOnCreate}}
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stack"
    values={[
        { label: 'delete_stack', value: 'delete_stack' }
    ]}
>
<TabItem value="delete_stack">

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the DescribeStacks operation if the deletion has been completed successfully. For more information about deleting a stack, see Delete a stack from the CloudFormation console in the CloudFormation User Guide.

```sql
DELETE FROM aws.cloudformation.stacks
WHERE StackName = '{{ StackName }}' --required
AND region = '{{ region }}' --required
AND RetainResources = '{{ RetainResources }}'
AND RoleARN = '{{ RoleARN }}'
AND ClientRequestToken = '{{ ClientRequestToken }}'
AND DeletionMode = '{{ DeletionMode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_update_stack"
    values={[
        { label: 'cancel_update_stack', value: 'cancel_update_stack' },
        { label: 'continue_update_rollback', value: 'continue_update_rollback' },
        { label: 'detect_stack_drift', value: 'detect_stack_drift' },
        { label: 'detect_stack_resource_drift', value: 'detect_stack_resource_drift' },
        { label: 'import_stacks_to_stack_set', value: 'import_stacks_to_stack_set' },
        { label: 'rollback_stack', value: 'rollback_stack' },
        { label: 'signal_resource', value: 'signal_resource' }
    ]}
>
<TabItem value="cancel_update_stack">

Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration. You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.

```sql
EXEC aws.cloudformation.stacks.cancel_update_stack 
@StackName='{{ StackName }}' --required, 
@region='{{ region }}' --required, 
@ClientRequestToken='{{ ClientRequestToken }}'
;
```
</TabItem>
<TabItem value="continue_update_rollback">

Continues rolling back a stack from UPDATE_ROLLBACK_FAILED to UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state) and then try to update the stack again. A stack enters the UPDATE_ROLLBACK_FAILED state when CloudFormation can't roll back all changes after a failed stack update. For example, this might occur when a stack attempts to roll back to an old database that was deleted outside of CloudFormation. Because CloudFormation doesn't know the instance was deleted, it assumes the instance still exists and attempts to roll back to it, causing the update rollback to fail. For more information, see Continue rolling back an update in the CloudFormation User Guide. For information for troubleshooting a failed update rollback, see Update rollback failed.

```sql
EXEC aws.cloudformation.stacks.continue_update_rollback 
@StackName='{{ StackName }}' --required, 
@region='{{ region }}' --required, 
@RoleARN='{{ RoleARN }}', 
@ResourcesToSkip='{{ ResourcesToSkip }}', 
@ClientRequestToken='{{ ClientRequestToken }}'
;
```
</TabItem>
<TabItem value="detect_stack_drift">

Detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to detect drift on all supported resources for a given stack, or DetectStackResourceDrift to detect drift on individual resources. For a list of stack resources that currently support drift detection, see Resource type support for imports and drift detection. DetectStackDrift can take up to several minutes, depending on the number of resources contained within the stack. Use DescribeStackDriftDetectionStatus to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources. When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform DetectStackDrift directly on the nested stack itself.

```sql
EXEC aws.cloudformation.stacks.detect_stack_drift 
@StackName='{{ StackName }}' --required, 
@region='{{ region }}' --required, 
@LogicalResourceIds='{{ LogicalResourceIds }}'
;
```
</TabItem>
<TabItem value="detect_stack_resource_drift">

Returns information about whether a resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all resources in a given stack that support drift detection. Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see Resource type support for imports and drift detection.

```sql
EXEC aws.cloudformation.stacks.detect_stack_resource_drift 
@StackName='{{ StackName }}' --required, 
@LogicalResourceId='{{ LogicalResourceId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="import_stacks_to_stack_set">

Import existing stacks into a new StackSets. Use the stack import operation to import up to 10 stacks into a new StackSet in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.

```sql
EXEC aws.cloudformation.stacks.import_stacks_to_stack_set 
@StackSetName='{{ StackSetName }}' --required, 
@region='{{ region }}' --required, 
@StackIds='{{ StackIds }}', 
@StackIdsUrl='{{ StackIdsUrl }}', 
@OrganizationalUnitIds='{{ OrganizationalUnitIds }}', 
@OperationPreferences='{{ OperationPreferences }}', 
@OperationId='{{ OperationId }}', 
@CallAs='{{ CallAs }}'
;
```
</TabItem>
<TabItem value="rollback_stack">

When specifying RollbackStack, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the DescribeStacks operation. Rolls back the specified stack to the last known stable state from CREATE_FAILED or UPDATE_FAILED stack statuses. This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a *_COMPLETE. This includes the following stack statuses. CREATE_COMPLETE UPDATE_COMPLETE UPDATE_ROLLBACK_COMPLETE IMPORT_COMPLETE IMPORT_ROLLBACK_COMPLETE

```sql
EXEC aws.cloudformation.stacks.rollback_stack 
@StackName='{{ StackName }}' --required, 
@region='{{ region }}' --required, 
@RoleARN='{{ RoleARN }}', 
@ClientRequestToken='{{ ClientRequestToken }}', 
@RetainExceptOnCreate={{ RetainExceptOnCreate }}
;
```
</TabItem>
<TabItem value="signal_resource">

Sends a signal to the specified resource with a success or failure status. You can use the SignalResource operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

```sql
EXEC aws.cloudformation.stacks.signal_resource 
@StackName='{{ StackName }}' --required, 
@LogicalResourceId='{{ LogicalResourceId }}' --required, 
@UniqueId='{{ UniqueId }}' --required, 
@region='{{ region }}' --required, 
@Status='{{ Status }}'
;
```
</TabItem>
</Tabs>
