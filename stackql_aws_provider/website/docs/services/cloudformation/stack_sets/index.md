--- 
title: stack_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_sets
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

Creates, updates, deletes, gets or lists a <code>stack_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_set"
    values={[
        { label: 'describe_stack_set', value: 'describe_stack_set' },
        { label: 'list_stack_sets', value: 'list_stack_sets' }
    ]}
>
<TabItem value="describe_stack_set">

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
    <td><CopyableCode code="administration_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used to create or update the stack set. Use customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see Prerequisites for using CloudFormation StackSets in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_deployment" /></td>
    <td><code>string</code></td>
    <td>Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). Valid only if the StackSet uses service-managed permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>string</code></td>
    <td>The capabilities that are allowed in the StackSet. Some StackSet templates might include resources that can affect permissions in your Amazon Web Services account—for example, by creating new Identity and Access Management (IAM) users. For more information, see Acknowledging IAM resources in CloudFormation templates.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the StackSet that you specify when the StackSet is created or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM execution role used to create or update the StackSet. Use customized execution roles to control which stack resources users and groups can include in their StackSets.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_execution" /></td>
    <td><code>string</code></td>
    <td>Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.</td>
</tr>
<tr>
    <td><CopyableCode code="organizational_unit_ids" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; The organization root ID or organizational unit (OU) IDs that you specified for DeploymentTargets.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>A list of input parameters for a StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_model" /></td>
    <td><code>string</code></td>
    <td>Describes how the IAM roles required for StackSet operations are created. With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant self-managed permissions. With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Activate trusted access for StackSets with Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>string</code></td>
    <td>Returns a list of all Amazon Web Services Regions the given StackSet has stack instances deployed in. The Amazon Web Services Regions list output is in no particular order.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_drift_detection_details" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the drift status of the StackSet. For StackSets, contains information about the last completed drift operation performed on the StackSet. Information about drift operations currently in progress isn't included.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_name" /></td>
    <td><code>string</code></td>
    <td>The name that's associated with the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that specify information about the StackSet. A maximum number of 50 tags can be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="template_body" /></td>
    <td><code>string</code></td>
    <td>The structure that contains the body of the template that was used to create or update the StackSet.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stack_sets">

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
    <td><CopyableCode code="auto_deployment" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organizational unit (OU).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the StackSet that you specify when the StackSet is created or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_status" /></td>
    <td><code>string</code></td>
    <td>Status of the StackSet's actual configuration compared to its expected template and parameter configuration. DRIFTED: One or more of the stack instances belonging to the StackSet differs from the expected template and parameter configuration. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted. NOT_CHECKED: CloudFormation hasn't checked the StackSet for drift. IN_SYNC: All the stack instances belonging to the StackSet match the expected template and parameter configuration. UNKNOWN: This value is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="last_drift_check_timestamp" /></td>
    <td><code>string</code></td>
    <td>Most recent time when CloudFormation performed a drift detection operation on the StackSet. This value will be NULL for any StackSet that drift detection hasn't yet been performed on.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_execution" /></td>
    <td><code>string</code></td>
    <td>Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_model" /></td>
    <td><code>string</code></td>
    <td>Describes how the IAM roles required for StackSet operations are created. With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant self-managed permissions. With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Activate trusted access for StackSets with Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the StackSet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the StackSet.</td>
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
    <td><a href="#describe_stack_set"><CopyableCode code="describe_stack_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns the description of the specified StackSet. This API provides strongly consistent reads meaning it will always return the most up-to-date data.</td>
</tr>
<tr>
    <td><a href="#list_stack_sets"><CopyableCode code="list_stack_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns summary information about StackSets that are associated with the user. This API provides strongly consistent reads meaning it will always return the most up-to-date data. &#91;Self-managed permissions&#93; If you set the CallAs parameter to SELF while signed in to your Amazon Web Services account, ListStackSets returns all self-managed StackSets in your Amazon Web Services account. &#91;Service-managed permissions&#93; If you set the CallAs parameter to SELF while signed in to the organization's management account, ListStackSets returns all StackSets in the management account. &#91;Service-managed permissions&#93; If you set the CallAs parameter to DELEGATED_ADMIN while signed in to your member account, ListStackSets returns all StackSets with service-managed permissions in the management account.</td>
</tr>
<tr>
    <td><a href="#create_stack_set"><CopyableCode code="create_stack_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-StackId"><code>StackId</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-AdministrationRoleARN"><code>AdministrationRoleARN</code></a>, <a href="#parameter-ExecutionRoleName"><code>ExecutionRoleName</code></a>, <a href="#parameter-PermissionModel"><code>PermissionModel</code></a>, <a href="#parameter-AutoDeployment"><code>AutoDeployment</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-ManagedExecution"><code>ManagedExecution</code></a></td>
    <td>Creates a StackSet.</td>
</tr>
<tr>
    <td><a href="#update_stack_set"><CopyableCode code="update_stack_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-UsePreviousTemplate"><code>UsePreviousTemplate</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-AdministrationRoleARN"><code>AdministrationRoleARN</code></a>, <a href="#parameter-ExecutionRoleName"><code>ExecutionRoleName</code></a>, <a href="#parameter-DeploymentTargets"><code>DeploymentTargets</code></a>, <a href="#parameter-PermissionModel"><code>PermissionModel</code></a>, <a href="#parameter-AutoDeployment"><code>AutoDeployment</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-Accounts"><code>Accounts</code></a>, <a href="#parameter-Regions"><code>Regions</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a>, <a href="#parameter-ManagedExecution"><code>ManagedExecution</code></a></td>
    <td>Updates the StackSet and associated stack instances in the specified accounts and Amazon Web Services Regions. Even if the StackSet operation created by updating the StackSet fails (completely or partially, below or above a specified failure tolerance), the StackSet is updated with your changes. Subsequent CreateStackInstances calls on the specified StackSet use the updated StackSet. The maximum number of organizational unit (OUs) supported by a UpdateStackSet operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.</td>
</tr>
<tr>
    <td><a href="#delete_stack_set"><CopyableCode code="delete_stack_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Deletes a StackSet. Before you can delete a StackSet, all its member stack instances must be deleted. For more information about how to complete this, see DeleteStackInstances.</td>
</tr>
<tr>
    <td><a href="#detect_stack_set_drift"><CopyableCode code="detect_stack_set_drift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OperationPreferences"><code>OperationPreferences</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Detect drift on a StackSet. When CloudFormation performs drift detection on a StackSet, it performs drift detection on the stack associated with each stack instance in the StackSet. For more information, see Performing drift detection on CloudFormation StackSets. DetectStackSetDrift returns the OperationId of the StackSet drift detection operation. Use this operation id with DescribeStackSetOperation to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the StackSet, in addition to the number of resources included in each stack. Once the operation has completed, use the following actions to return drift information: Use DescribeStackSet to return detailed information about the stack set, including detailed information about the last completed drift operation performed on the StackSet. (Information about drift operations that are in progress isn't included.) Use ListStackInstances to return a list of stack instances belonging to the StackSet, including the drift status and last drift time checked of each instance. Use DescribeStackInstance to return detailed information about a specific stack instance, including its drift status and last drift time checked. You can only run a single drift detection operation on a given StackSet at one time. To stop a drift detection StackSet operation, use StopStackSetOperation.</td>
</tr>
<tr>
    <td><a href="#stop_stack_set_operation"><CopyableCode code="stop_stack_set_operation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Stops an in-progress operation on a StackSet and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.</td>
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
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack operation.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to stop the operation for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accounts">
    <td><CopyableCode code="Accounts" /></td>
    <td><code>array</code></td>
    <td>&#91;Self-managed permissions&#93; The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Amazon Web Services Regions in which to update StackSet instances. To update all the stack instances associated with this StackSet, don't specify the Accounts or Regions properties. If the StackSet update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the StackSet update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack instances with their existing stack instance status.</td>
</tr>
<tr id="parameter-AdministrationRoleARN">
    <td><CopyableCode code="AdministrationRoleARN" /></td>
    <td><code>string</code></td>
    <td>&#91;Self-managed permissions&#93; The Amazon Resource Name (ARN) of the IAM role to use to update this StackSet. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see Grant self-managed permissions in the CloudFormation User Guide. If you specified a customized administrator role when you created the StackSet, you must specify a customized administrator role, even if it is the same customized administrator role used with this StackSet previously.</td>
</tr>
<tr id="parameter-AutoDeployment">
    <td><CopyableCode code="AutoDeployment" /></td>
    <td><code>object</code></td>
    <td>&#91;Service-managed permissions&#93; Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). For more information, see Enable or disable automatic deployments for StackSets in Organizations in the CloudFormation User Guide. If you specify AutoDeployment, don't specify DeploymentTargets or Regions.</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid only if the StackSet uses service-managed permissions. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-Capabilities">
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>array</code></td>
    <td>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the StackSet and its associated stack instances. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some templates reference macros. If your StackSet template references one or more macros, you must update the StackSet directly from the processed template, without first reviewing the resulting changes in a change set. To update the StackSet directly, you must acknowledge this capability. For more information, see Perform custom processing on CloudFormation templates with template macros. StackSets with service-managed permissions do not currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a StackSet with service-managed permissions, if you reference a macro in your template the StackSet operation will fail.</td>
</tr>
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this CreateStackSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another StackSet with the same name. You might retry CreateStackSet requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically.</td>
</tr>
<tr id="parameter-DeploymentTargets">
    <td><CopyableCode code="DeploymentTargets" /></td>
    <td><code>object</code></td>
    <td>&#91;Service-managed permissions&#93; The Organizations accounts in which to update associated stack instances. To update all the stack instances associated with this StackSet, do not specify DeploymentTargets or Regions. If the StackSet update includes changes to the template (that is, if TemplateBody or TemplateURL is specified), or the Parameters, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the StackSet update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A brief description of updates that you are making.</td>
</tr>
<tr id="parameter-ExecutionRoleName">
    <td><CopyableCode code="ExecutionRoleName" /></td>
    <td><code>string</code></td>
    <td>&#91;Self-managed permissions&#93; The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the StackSet operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their StackSets. If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a customized execution role, CloudFormation performs the update using the role previously associated with the StackSet, so long as you have permissions to perform operations on the StackSet.</td>
</tr>
<tr id="parameter-ManagedExecution">
    <td><CopyableCode code="ManagedExecution" /></td>
    <td><code>object</code></td>
    <td>Describes whether CloudFormation performs non-conflicting operations concurrently and queues conflicting operations.</td>
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
    <td>The ID of the StackSet operation.</td>
</tr>
<tr id="parameter-OperationPreferences">
    <td><CopyableCode code="OperationPreferences" /></td>
    <td><code>object</code></td>
    <td>The user-specified preferences for how CloudFormation performs a StackSet operation. For more information about maximum concurrent accounts and failure tolerance, see StackSet operation options.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of input parameters for the StackSet template.</td>
</tr>
<tr id="parameter-PermissionModel">
    <td><CopyableCode code="PermissionModel" /></td>
    <td><code>string</code></td>
    <td>Describes how the IAM roles required for StackSet operations are created. You cannot modify PermissionModel if there are stack instances associated with your stack set. With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant self-managed permissions. With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Activate trusted access for StackSets with Organizations.</td>
</tr>
<tr id="parameter-Regions">
    <td><CopyableCode code="Regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update StackSet instances. To update all the stack instances associated with this StackSet, do not specify the Accounts or Regions properties. If the StackSet update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Regions. If the StackSet update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</td>
</tr>
<tr id="parameter-StackId">
    <td><CopyableCode code="StackId" /></td>
    <td><code>string</code></td>
    <td>The stack ID you are importing into a new StackSet. Specify the Amazon Resource Name (ARN) of the stack.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the StackSets that you want to get summary information about.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The key-value pairs to associate with this StackSet and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags. If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this StackSet. This means: If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify any tags using this parameter, you must specify all the tags that you want associated with this StackSet, even tags you've specified before (for example, when creating the StackSet or during a previous update of the StackSet.). Any tags that you don't include in the updated list of tags are removed from the StackSet, and therefore from the stacks and resources as well. If you specify an empty value, CloudFormation removes all currently associated tags. If you specify new tags as part of an UpdateStackSet action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the StackSet from the list of tags you specify, CloudFormation assumes that you want to remove those tags from the StackSet, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire UpdateStackSet action fails with an access denied error, and the StackSet is not updated.</td>
</tr>
<tr id="parameter-TemplateBody">
    <td><CopyableCode code="TemplateBody" /></td>
    <td><code>string</code></td>
    <td>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL—or set UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-TemplateURL">
    <td><CopyableCode code="TemplateURL" /></td>
    <td><code>string</code></td>
    <td>The URL of a file that contains the template body. The URL must point to a template (maximum size: 1 MB) that is located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https:​//. S3 static website URLs are not supported. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL—or set UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-UsePreviousTemplate">
    <td><CopyableCode code="UsePreviousTemplate" /></td>
    <td><code>boolean</code></td>
    <td>Use the existing template that's associated with the StackSet that you're updating. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL—or set UsePreviousTemplate to true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_set"
    values={[
        { label: 'describe_stack_set', value: 'describe_stack_set' },
        { label: 'list_stack_sets', value: 'list_stack_sets' }
    ]}
>
<TabItem value="describe_stack_set">

Returns the description of the specified StackSet. This API provides strongly consistent reads meaning it will always return the most up-to-date data.

```sql
SELECT
administration_role_arn,
auto_deployment,
capabilities,
description,
execution_role_name,
managed_execution,
organizational_unit_ids,
parameters,
permission_model,
regions,
stack_set_arn,
stack_set_drift_detection_details,
stack_set_id,
stack_set_name,
status,
tags,
template_body
FROM aws.cloudformation.stack_sets
WHERE StackSetName = '{{ StackSetName }}' -- required
AND region = '{{ region }}' -- required
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
<TabItem value="list_stack_sets">

Returns summary information about StackSets that are associated with the user. This API provides strongly consistent reads meaning it will always return the most up-to-date data. [Self-managed permissions] If you set the CallAs parameter to SELF while signed in to your Amazon Web Services account, ListStackSets returns all self-managed StackSets in your Amazon Web Services account. [Service-managed permissions] If you set the CallAs parameter to SELF while signed in to the organization's management account, ListStackSets returns all StackSets in the management account. [Service-managed permissions] If you set the CallAs parameter to DELEGATED_ADMIN while signed in to your member account, ListStackSets returns all StackSets with service-managed permissions in the management account.

```sql
SELECT
auto_deployment,
description,
drift_status,
last_drift_check_timestamp,
managed_execution,
permission_model,
stack_set_id,
stack_set_name,
status
FROM aws.cloudformation.stack_sets
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Status = '{{ Status }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stack_set"
    values={[
        { label: 'create_stack_set', value: 'create_stack_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stack_set">

Creates a StackSet.

```sql
INSERT INTO aws.cloudformation.stack_sets (
StackSetName,
region,
Description,
TemplateBody,
TemplateURL,
StackId,
Parameters,
Capabilities,
Tags,
AdministrationRoleARN,
ExecutionRoleName,
PermissionModel,
AutoDeployment,
CallAs,
ClientRequestToken,
ManagedExecution
)
SELECT 
'{{ StackSetName }}',
'{{ region }}',
'{{ Description }}',
'{{ TemplateBody }}',
'{{ TemplateURL }}',
'{{ StackId }}',
'{{ Parameters }}',
'{{ Capabilities }}',
'{{ Tags }}',
'{{ AdministrationRoleARN }}',
'{{ ExecutionRoleName }}',
'{{ PermissionModel }}',
'{{ AutoDeployment }}',
'{{ CallAs }}',
'{{ ClientRequestToken }}',
'{{ ManagedExecution }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stack_sets
  props:
    - name: StackSetName
      value: "{{ StackSetName }}"
      description: Required parameter for the stack_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stack_sets resource.
    - name: Description
      value: "{{ Description }}"
      description: A description of the StackSet. You can use the description to identify the StackSet's purpose or other important information.
      description: A description of the StackSet. You can use the description to identify the StackSet's purpose or other important information.
    - name: TemplateBody
      value: "{{ TemplateBody }}"
      description: The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
      description: The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
    - name: TemplateURL
      value: "{{ TemplateURL }}"
      description: The URL of a file that contains the template body. The URL must point to a template (maximum size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. S3 static website URLs are not supported. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
      description: The URL of a file that contains the template body. The URL must point to a template (maximum size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. S3 static website URLs are not supported. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
    - name: StackId
      value: "{{ StackId }}"
      description: The stack ID you are importing into a new StackSet. Specify the Amazon Resource Name (ARN) of the stack.
      description: The stack ID you are importing into a new StackSet. Specify the Amazon Resource Name (ARN) of the stack.
    - name: Parameters
      value: "{{ Parameters }}"
      description: The input parameters for the StackSet template.
      description: The input parameters for the StackSet template.
    - name: Capabilities
      value: "{{ Capabilities }}"
      description: In some cases, you must explicitly acknowledge that your StackSet template contains certain capabilities in order for CloudFormation to create the StackSet and related stack instances. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those StackSets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some templates reference macros. If your StackSet template references one or more macros, you must create the StackSet directly from the processed template, without first reviewing the resulting changes in a change set. To create the StackSet directly, you must acknowledge this capability. For more information, see Perform custom processing on CloudFormation templates with template macros. StackSets with service-managed permissions don't currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a StackSet with service-managed permissions, if you reference a macro in your template the StackSet operation will fail.
      description: In some cases, you must explicitly acknowledge that your StackSet template contains certain capabilities in order for CloudFormation to create the StackSet and related stack instances. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those StackSets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some templates reference macros. If your StackSet template references one or more macros, you must create the StackSet directly from the processed template, without first reviewing the resulting changes in a change set. To create the StackSet directly, you must acknowledge this capability. For more information, see Perform custom processing on CloudFormation templates with template macros. StackSets with service-managed permissions don't currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a StackSet with service-managed permissions, if you reference a macro in your template the StackSet operation will fail.
    - name: Tags
      value: "{{ Tags }}"
      description: The key-value pairs to associate with this StackSet and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified. If you specify tags as part of a CreateStackSet action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire CreateStackSet action fails with an access denied error, and the StackSet is not created.
      description: The key-value pairs to associate with this StackSet and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified. If you specify tags as part of a CreateStackSet action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire CreateStackSet action fails with an access denied error, and the StackSet is not created.
    - name: AdministrationRoleARN
      value: "{{ AdministrationRoleARN }}"
      description: The Amazon Resource Name (ARN) of the IAM role to use to create this StackSet. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see Grant self-managed permissions in the CloudFormation User Guide. Valid only if the permissions model is SELF_MANAGED.
      description: The Amazon Resource Name (ARN) of the IAM role to use to create this StackSet. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see Grant self-managed permissions in the CloudFormation User Guide. Valid only if the permissions model is SELF_MANAGED.
    - name: ExecutionRoleName
      value: "{{ ExecutionRoleName }}"
      description: The name of the IAM execution role to use to create the StackSet. If you do not specify an execution role, CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the StackSet operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their StackSets. Valid only if the permissions model is SELF_MANAGED.
      description: The name of the IAM execution role to use to create the StackSet. If you do not specify an execution role, CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the StackSet operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their StackSets. Valid only if the permissions model is SELF_MANAGED.
    - name: PermissionModel
      value: "{{ PermissionModel }}"
      description: Describes how the IAM roles required for StackSet operations are created. By default, SELF-MANAGED is specified. With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant self-managed permissions. With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Activate trusted access for StackSets with Organizations.
      description: Describes how the IAM roles required for StackSet operations are created. By default, SELF-MANAGED is specified. With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant self-managed permissions. With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Activate trusted access for StackSets with Organizations.
    - name: AutoDeployment
      value: "{{ AutoDeployment }}"
      description: Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). For more information, see Enable or disable automatic deployments for StackSets in Organizations in the CloudFormation User Guide. Required if the permissions model is SERVICE_MANAGED. (Not used with self-managed permissions.)
      description: Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). For more information, see Enable or disable automatic deployments for StackSets in Organizations in the CloudFormation User Guide. Required if the permissions model is SERVICE_MANAGED. (Not used with self-managed permissions.)
    - name: CallAs
      value: "{{ CallAs }}"
      description: Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. To create a StackSet with service-managed permissions while signed in to the management account, specify SELF. To create a StackSet with service-managed permissions while signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide. StackSets with service-managed permissions are created in the management account, including StackSets that are created by delegated administrators. Valid only if the permissions model is SERVICE_MANAGED.
      description: Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. To create a StackSet with service-managed permissions while signed in to the management account, specify SELF. To create a StackSet with service-managed permissions while signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide. StackSets with service-managed permissions are created in the management account, including StackSets that are created by delegated administrators. Valid only if the permissions model is SERVICE_MANAGED.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: A unique identifier for this CreateStackSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another StackSet with the same name. You might retry CreateStackSet requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically.
      description: A unique identifier for this CreateStackSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another StackSet with the same name. You might retry CreateStackSet requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically.
    - name: ManagedExecution
      value: "{{ ManagedExecution }}"
      description: Describes whether CloudFormation performs non-conflicting operations concurrently and queues conflicting operations.
      description: Describes whether CloudFormation performs non-conflicting operations concurrently and queues conflicting operations.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stack_set"
    values={[
        { label: 'update_stack_set', value: 'update_stack_set' }
    ]}
>
<TabItem value="update_stack_set">

Updates the StackSet and associated stack instances in the specified accounts and Amazon Web Services Regions. Even if the StackSet operation created by updating the StackSet fails (completely or partially, below or above a specified failure tolerance), the StackSet is updated with your changes. Subsequent CreateStackInstances calls on the specified StackSet use the updated StackSet. The maximum number of organizational unit (OUs) supported by a UpdateStackSet operation is 50. If you need more than 50, consider the following options: Batch processing: If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each. Parent OU strategy: If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.

```sql
UPDATE aws.cloudformation.stack_sets
SET 
-- No updatable properties
WHERE 
StackSetName = '{{ StackSetName }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND TemplateBody = '{{ TemplateBody}}'
AND TemplateURL = '{{ TemplateURL}}'
AND UsePreviousTemplate = {{ UsePreviousTemplate}}
AND Parameters = '{{ Parameters}}'
AND Capabilities = '{{ Capabilities}}'
AND Tags = '{{ Tags}}'
AND OperationPreferences = '{{ OperationPreferences}}'
AND AdministrationRoleARN = '{{ AdministrationRoleARN}}'
AND ExecutionRoleName = '{{ ExecutionRoleName}}'
AND DeploymentTargets = '{{ DeploymentTargets}}'
AND PermissionModel = '{{ PermissionModel}}'
AND AutoDeployment = '{{ AutoDeployment}}'
AND OperationId = '{{ OperationId}}'
AND Accounts = '{{ Accounts}}'
AND Regions = '{{ Regions}}'
AND CallAs = '{{ CallAs}}'
AND ManagedExecution = '{{ ManagedExecution}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stack_set"
    values={[
        { label: 'delete_stack_set', value: 'delete_stack_set' }
    ]}
>
<TabItem value="delete_stack_set">

Deletes a StackSet. Before you can delete a StackSet, all its member stack instances must be deleted. For more information about how to complete this, see DeleteStackInstances.

```sql
DELETE FROM aws.cloudformation.stack_sets
WHERE StackSetName = '{{ StackSetName }}' --required
AND region = '{{ region }}' --required
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detect_stack_set_drift"
    values={[
        { label: 'detect_stack_set_drift', value: 'detect_stack_set_drift' },
        { label: 'stop_stack_set_operation', value: 'stop_stack_set_operation' }
    ]}
>
<TabItem value="detect_stack_set_drift">

Detect drift on a StackSet. When CloudFormation performs drift detection on a StackSet, it performs drift detection on the stack associated with each stack instance in the StackSet. For more information, see Performing drift detection on CloudFormation StackSets. DetectStackSetDrift returns the OperationId of the StackSet drift detection operation. Use this operation id with DescribeStackSetOperation to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the StackSet, in addition to the number of resources included in each stack. Once the operation has completed, use the following actions to return drift information: Use DescribeStackSet to return detailed information about the stack set, including detailed information about the last completed drift operation performed on the StackSet. (Information about drift operations that are in progress isn't included.) Use ListStackInstances to return a list of stack instances belonging to the StackSet, including the drift status and last drift time checked of each instance. Use DescribeStackInstance to return detailed information about a specific stack instance, including its drift status and last drift time checked. You can only run a single drift detection operation on a given StackSet at one time. To stop a drift detection StackSet operation, use StopStackSetOperation.

```sql
EXEC aws.cloudformation.stack_sets.detect_stack_set_drift 
@StackSetName='{{ StackSetName }}' --required, 
@region='{{ region }}' --required, 
@OperationPreferences='{{ OperationPreferences }}', 
@OperationId='{{ OperationId }}', 
@CallAs='{{ CallAs }}'
;
```
</TabItem>
<TabItem value="stop_stack_set_operation">

Stops an in-progress operation on a StackSet and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

```sql
EXEC aws.cloudformation.stack_sets.stop_stack_set_operation 
@StackSetName='{{ StackSetName }}' --required, 
@OperationId='{{ OperationId }}' --required, 
@region='{{ region }}' --required, 
@CallAs='{{ CallAs }}'
;
```
</TabItem>
</Tabs>
