--- 
title: change_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - change_sets
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

Creates, updates, deletes, gets or lists a <code>change_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.change_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_change_set"
    values={[
        { label: 'describe_change_set', value: 'describe_change_set' },
        { label: 'list_change_sets', value: 'list_change_sets' }
    ]}
>
<TabItem value="describe_change_set">

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
    <td><CopyableCode code="hook_invocation_count" /></td>
    <td><code>integer</code></td>
    <td>Is either null, if no Hooks invoke for the resource, or contains the number of Hooks that will invoke for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_change" /></td>
    <td><code>string</code></td>
    <td>A ResourceChange structure that describes the resource and action that CloudFormation will perform.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of entity that CloudFormation changes. Resource This change is for a resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_change_sets">

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
    <td><CopyableCode code="change_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the change set.</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the change set.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The start time when the change set was created, in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Descriptive information about the change set.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>If the change set execution status is AVAILABLE, you can execute the change set. If you can't execute the change set, the status indicates why. For example, a change set might be in an UNAVAILABLE state because CloudFormation is still creating it or in an OBSOLETE state because the stack was already updated.</td>
</tr>
<tr>
    <td><CopyableCode code="import_existing_resources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the change set imports resources that already exist.</td>
</tr>
<tr>
    <td><CopyableCode code="include_nested_stacks" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the current setting of IncludeNestedStacks for the change set.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_change_set_id" /></td>
    <td><code>string</code></td>
    <td>The parent change set ID.</td>
</tr>
<tr>
    <td><CopyableCode code="root_change_set_id" /></td>
    <td><code>string</code></td>
    <td>The root change set ID.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the stack with which the change set is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stack with which the change set is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the change set, such as CREATE_PENDING, CREATE_COMPLETE, or FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A description of the change set's status. For example, if your change set is in the FAILED state, CloudFormation shows the error message.</td>
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
    <td><a href="#describe_change_set"><CopyableCode code="describe_change_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludePropertyValues"><code>IncludePropertyValues</code></a></td>
    <td>Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see Update CloudFormation stacks using change sets in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#list_change_sets"><CopyableCode code="list_change_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.</td>
</tr>
<tr>
    <td><a href="#create_change_set"><CopyableCode code="create_change_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-UsePreviousTemplate"><code>UsePreviousTemplate</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-RollbackConfiguration"><code>RollbackConfiguration</code></a>, <a href="#parameter-NotificationARNs"><code>NotificationARNs</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ChangeSetType"><code>ChangeSetType</code></a>, <a href="#parameter-ResourcesToImport"><code>ResourcesToImport</code></a>, <a href="#parameter-IncludeNestedStacks"><code>IncludeNestedStacks</code></a>, <a href="#parameter-OnStackFailure"><code>OnStackFailure</code></a>, <a href="#parameter-ImportExistingResources"><code>ImportExistingResources</code></a>, <a href="#parameter-DeploymentMode"><code>DeploymentMode</code></a></td>
    <td>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack. To create a change set for a stack that doesn't exist, for the ChangeSetType parameter, specify CREATE. To create a change set for an existing stack, specify UPDATE for the ChangeSetType parameter. To create a change set for an import operation, specify IMPORT for the ChangeSetType parameter. After the CreateChangeSet call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the DescribeChangeSet action. When you are satisfied with the changes the change set will make, execute the change set by using the ExecuteChangeSet action. CloudFormation doesn't make changes until you execute the change set. To create a change set for the entire stack hierarchy, set IncludeNestedStacks to True.</td>
</tr>
<tr>
    <td><a href="#delete_change_set"><CopyableCode code="delete_change_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a></td>
    <td>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, CloudFormation successfully deleted the change set. If IncludeNestedStacks specifies True during the creation of the nested change set, then DeleteChangeSet will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of REVIEW_IN_PROGRESS.</td>
</tr>
<tr>
    <td><a href="#execute_change_set"><CopyableCode code="execute_change_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-DisableRollback"><code>DisableRollback</code></a>, <a href="#parameter-RetainExceptOnCreate"><code>RetainExceptOnCreate</code></a></td>
    <td>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy. To create a change set for the entire stack hierarchy, IncludeNestedStacks must have been set to True.</td>
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
<tr id="parameter-ChangeSetName">
    <td><CopyableCode code="ChangeSetName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Capabilities">
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>array</code></td>
    <td>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect. If you want to create a stack from a stack template that contains macros and nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability. For more information about macros, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.</td>
</tr>
<tr id="parameter-ChangeSetType">
    <td><CopyableCode code="ChangeSetType" /></td>
    <td><code>string</code></td>
    <td>The type of change set operation. To create a change set for a new stack, specify CREATE. To create a change set for an existing stack, specify UPDATE. To create a change set for an import operation, specify IMPORT. If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the REVIEW_IN_PROGRESS state until you execute the change set. By default, CloudFormation specifies UPDATE. You can't use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack.</td>
</tr>
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this ExecuteChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry ExecuteChangeSet requests to ensure that CloudFormation successfully received them.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that CloudFormation successfully received them.</td>
</tr>
<tr id="parameter-DeploymentMode">
    <td><CopyableCode code="DeploymentMode" /></td>
    <td><code>string</code></td>
    <td>Determines how CloudFormation handles configuration drift during deployment. REVERT_DRIFT – Creates a drift-aware change set that brings actual resource states in line with template definitions. Provides a three-way comparison between actual state, previous deployment state, and desired state. For more information, see Using drift-aware change sets in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description to help you identify this change set.</td>
</tr>
<tr id="parameter-DisableRollback">
    <td><CopyableCode code="DisableRollback" /></td>
    <td><code>boolean</code></td>
    <td>Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the OnStackFailure parameter to the CreateChangeSet API operation was specified. True - if the stack creation fails, do nothing. This is equivalent to specifying DO_NOTHING for the OnStackFailure parameter to the CreateChangeSet API operation. False - if the stack creation fails, roll back the stack. This is equivalent to specifying ROLLBACK for the OnStackFailure parameter to the CreateChangeSet API operation. Default: True</td>
</tr>
<tr id="parameter-ImportExistingResources">
    <td><CopyableCode code="ImportExistingResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the change set auto-imports resources that already exist. For more information, see Import Amazon Web Services resources into a CloudFormation stack automatically in the CloudFormation User Guide. This parameter can only import resources that have custom names in templates. For more information, see name type in the CloudFormation User Guide. To import resources that do not accept custom names, such as EC2 instances, use the ResourcesToImport parameter instead.</td>
</tr>
<tr id="parameter-IncludeNestedStacks">
    <td><CopyableCode code="IncludeNestedStacks" /></td>
    <td><code>boolean</code></td>
    <td>Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to False. To include nested sets in a change set, specify True.</td>
</tr>
<tr id="parameter-IncludePropertyValues">
    <td><CopyableCode code="IncludePropertyValues" /></td>
    <td><code>boolean</code></td>
    <td>If true, the returned changes include detailed changes in the property values.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-NotificationARNs">
    <td><CopyableCode code="NotificationARNs" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.</td>
</tr>
<tr id="parameter-OnStackFailure">
    <td><CopyableCode code="OnStackFailure" /></td>
    <td><code>string</code></td>
    <td>Determines what action will be taken if stack creation fails. If this parameter is specified, the DisableRollback parameter to the ExecuteChangeSet API operation must not be specified. This must be one of these values: DELETE - Deletes the change set if the stack creation fails. This is only valid when the ChangeSetType parameter is set to CREATE. If the deletion of the stack fails, the status of the stack is DELETE_FAILED. DO_NOTHING - if the stack creation fails, do nothing. This is equivalent to specifying true for the DisableRollback parameter to the ExecuteChangeSet API operation. ROLLBACK - if the stack creation fails, roll back the stack. This is equivalent to specifying false for the DisableRollback parameter to the ExecuteChangeSet API operation. For nested stacks, when the OnStackFailure parameter is set to DELETE for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type.</td>
</tr>
<tr id="parameter-ResourceTypes">
    <td><CopyableCode code="ResourceTypes" /></td>
    <td><code>array</code></td>
    <td>Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see Control CloudFormation access with Identity and Access Management in the CloudFormation User Guide. Only one of the Capabilities and ResourceType parameters can be specified.</td>
</tr>
<tr id="parameter-ResourcesToImport">
    <td><CopyableCode code="ResourcesToImport" /></td>
    <td><code>array</code></td>
    <td>The resources to import into your stack.</td>
</tr>
<tr id="parameter-RetainExceptOnCreate">
    <td><CopyableCode code="RetainExceptOnCreate" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false</td>
</tr>
<tr id="parameter-RoleARN">
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.</td>
</tr>
<tr id="parameter-RollbackConfiguration">
    <td><CopyableCode code="RollbackConfiguration" /></td>
    <td><code>object</code></td>
    <td>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.</td>
</tr>
<tr id="parameter-TemplateBody">
    <td><CopyableCode code="TemplateBody" /></td>
    <td><code>string</code></td>
    <td>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-TemplateURL">
    <td><CopyableCode code="TemplateURL" /></td>
    <td><code>string</code></td>
    <td>The URL of the file that contains the revised template. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified. The location for an Amazon S3 bucket must start with https:​//. URLs from S3 static websites are not supported. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
<tr id="parameter-UsePreviousTemplate">
    <td><CopyableCode code="UsePreviousTemplate" /></td>
    <td><code>boolean</code></td>
    <td>Whether to reuse the template that's associated with the stack to create the change set. When using templates with the AWS::LanguageExtensions transform, provide the template instead of using UsePreviousTemplate to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see AWS::LanguageExtensions transform. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_change_set"
    values={[
        { label: 'describe_change_set', value: 'describe_change_set' },
        { label: 'list_change_sets', value: 'list_change_sets' }
    ]}
>
<TabItem value="describe_change_set">

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see Update CloudFormation stacks using change sets in the CloudFormation User Guide.

```sql
SELECT
hook_invocation_count,
resource_change,
type
FROM aws.cloudformation.change_sets
WHERE ChangeSetName = '{{ ChangeSetName }}' -- required
AND region = '{{ region }}' -- required
AND StackName = '{{ StackName }}'
AND NextToken = '{{ NextToken }}'
AND IncludePropertyValues = '{{ IncludePropertyValues }}'
;
```
</TabItem>
<TabItem value="list_change_sets">

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.

```sql
SELECT
change_set_id,
change_set_name,
creation_time,
description,
execution_status,
import_existing_resources,
include_nested_stacks,
parent_change_set_id,
root_change_set_id,
stack_id,
stack_name,
status,
status_reason
FROM aws.cloudformation.change_sets
WHERE StackName = '{{ StackName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_change_set"
    values={[
        { label: 'create_change_set', value: 'create_change_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_change_set">

Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack. To create a change set for a stack that doesn't exist, for the ChangeSetType parameter, specify CREATE. To create a change set for an existing stack, specify UPDATE for the ChangeSetType parameter. To create a change set for an import operation, specify IMPORT for the ChangeSetType parameter. After the CreateChangeSet call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the DescribeChangeSet action. When you are satisfied with the changes the change set will make, execute the change set by using the ExecuteChangeSet action. CloudFormation doesn't make changes until you execute the change set. To create a change set for the entire stack hierarchy, set IncludeNestedStacks to True.

```sql
INSERT INTO aws.cloudformation.change_sets (
StackName,
ChangeSetName,
region,
TemplateBody,
TemplateURL,
UsePreviousTemplate,
Parameters,
Capabilities,
ResourceTypes,
RoleARN,
RollbackConfiguration,
NotificationARNs,
Tags,
ClientToken,
Description,
ChangeSetType,
ResourcesToImport,
IncludeNestedStacks,
OnStackFailure,
ImportExistingResources,
DeploymentMode
)
SELECT 
'{{ StackName }}',
'{{ ChangeSetName }}',
'{{ region }}',
'{{ TemplateBody }}',
'{{ TemplateURL }}',
'{{ UsePreviousTemplate }}',
'{{ Parameters }}',
'{{ Capabilities }}',
'{{ ResourceTypes }}',
'{{ RoleARN }}',
'{{ RollbackConfiguration }}',
'{{ NotificationARNs }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ Description }}',
'{{ ChangeSetType }}',
'{{ ResourcesToImport }}',
'{{ IncludeNestedStacks }}',
'{{ OnStackFailure }}',
'{{ ImportExistingResources }}',
'{{ DeploymentMode }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: change_sets
  props:
    - name: StackName
      value: "{{ StackName }}"
      description: Required parameter for the change_sets resource.
    - name: ChangeSetName
      value: "{{ ChangeSetName }}"
      description: Required parameter for the change_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the change_sets resource.
    - name: TemplateBody
      value: "{{ TemplateBody }}"
      description: A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
      description: A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
    - name: TemplateURL
      value: "{{ TemplateURL }}"
      description: The URL of the file that contains the revised template. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
      description: The URL of the file that contains the revised template. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified. The location for an Amazon S3 bucket must start with https://. URLs from S3 static websites are not supported. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
    - name: UsePreviousTemplate
      value: {{ UsePreviousTemplate }}
      description: Whether to reuse the template that's associated with the stack to create the change set. When using templates with the AWS::LanguageExtensions transform, provide the template instead of using UsePreviousTemplate to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see AWS::LanguageExtensions transform. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
      description: Whether to reuse the template that's associated with the stack to create the change set. When using templates with the AWS::LanguageExtensions transform, provide the template instead of using UsePreviousTemplate to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see AWS::LanguageExtensions transform. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true.
    - name: Parameters
      value: "{{ Parameters }}"
      description: A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type.
      description: A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type.
    - name: Capabilities
      value: "{{ Capabilities }}"
      description: In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect. If you want to create a stack from a stack template that contains macros and nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability. For more information about macros, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.
      description: In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack. CAPABILITY_IAM and CAPABILITY_NAMED_IAM Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error. If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary. AWS::IAM::AccessKey AWS::IAM::Group AWS::IAM::InstanceProfile AWS::IAM::ManagedPolicy AWS::IAM::Policy AWS::IAM::Role AWS::IAM::User AWS::IAM::UserToGroupAddition For more information, see Acknowledging IAM resources in CloudFormation templates. CAPABILITY_AUTO_EXPAND Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect. If you want to create a stack from a stack template that contains macros and nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability. For more information about macros, see Perform custom processing on CloudFormation templates with template macros. Only one of the Capabilities and ResourceType parameters can be specified.
    - name: ResourceTypes
      value: "{{ ResourceTypes }}"
      description: Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see Control CloudFormation access with Identity and Access Management in the CloudFormation User Guide. Only one of the Capabilities and ResourceType parameters can be specified.
      description: Specifies which resource types you can work with, such as AWS::EC2::Instance or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see Control CloudFormation access with Identity and Access Management in the CloudFormation User Guide. Only one of the Capabilities and ResourceType parameters can be specified.
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
      description: The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
    - name: RollbackConfiguration
      value: "{{ RollbackConfiguration }}"
      description: The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
      description: The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
    - name: NotificationARNs
      value: "{{ NotificationARNs }}"
      description: The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
      description: The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
    - name: Tags
      value: "{{ Tags }}"
      description: Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
      description: Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that CloudFormation successfully received them.
      description: A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that CloudFormation successfully received them.
    - name: Description
      value: "{{ Description }}"
      description: A description to help you identify this change set.
      description: A description to help you identify this change set.
    - name: ChangeSetType
      value: "{{ ChangeSetType }}"
      description: The type of change set operation. To create a change set for a new stack, specify CREATE. To create a change set for an existing stack, specify UPDATE. To create a change set for an import operation, specify IMPORT. If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the REVIEW_IN_PROGRESS state until you execute the change set. By default, CloudFormation specifies UPDATE. You can't use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack.
      description: The type of change set operation. To create a change set for a new stack, specify CREATE. To create a change set for an existing stack, specify UPDATE. To create a change set for an import operation, specify IMPORT. If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the REVIEW_IN_PROGRESS state until you execute the change set. By default, CloudFormation specifies UPDATE. You can't use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack.
    - name: ResourcesToImport
      value: "{{ ResourcesToImport }}"
      description: The resources to import into your stack.
      description: The resources to import into your stack.
    - name: IncludeNestedStacks
      value: {{ IncludeNestedStacks }}
      description: Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to False. To include nested sets in a change set, specify True.
      description: Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to False. To include nested sets in a change set, specify True.
    - name: OnStackFailure
      value: "{{ OnStackFailure }}"
      description: Determines what action will be taken if stack creation fails. If this parameter is specified, the DisableRollback parameter to the ExecuteChangeSet API operation must not be specified. This must be one of these values: DELETE - Deletes the change set if the stack creation fails. This is only valid when the ChangeSetType parameter is set to CREATE. If the deletion of the stack fails, the status of the stack is DELETE_FAILED. DO_NOTHING - if the stack creation fails, do nothing. This is equivalent to specifying true for the DisableRollback parameter to the ExecuteChangeSet API operation. ROLLBACK - if the stack creation fails, roll back the stack. This is equivalent to specifying false for the DisableRollback parameter to the ExecuteChangeSet API operation. For nested stacks, when the OnStackFailure parameter is set to DELETE for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.
      description: Determines what action will be taken if stack creation fails. If this parameter is specified, the DisableRollback parameter to the ExecuteChangeSet API operation must not be specified. This must be one of these values: DELETE - Deletes the change set if the stack creation fails. This is only valid when the ChangeSetType parameter is set to CREATE. If the deletion of the stack fails, the status of the stack is DELETE_FAILED. DO_NOTHING - if the stack creation fails, do nothing. This is equivalent to specifying true for the DisableRollback parameter to the ExecuteChangeSet API operation. ROLLBACK - if the stack creation fails, roll back the stack. This is equivalent to specifying false for the DisableRollback parameter to the ExecuteChangeSet API operation. For nested stacks, when the OnStackFailure parameter is set to DELETE for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.
    - name: ImportExistingResources
      value: {{ ImportExistingResources }}
      description: Indicates if the change set auto-imports resources that already exist. For more information, see Import Amazon Web Services resources into a CloudFormation stack automatically in the CloudFormation User Guide. This parameter can only import resources that have custom names in templates. For more information, see name type in the CloudFormation User Guide. To import resources that do not accept custom names, such as EC2 instances, use the ResourcesToImport parameter instead.
      description: Indicates if the change set auto-imports resources that already exist. For more information, see Import Amazon Web Services resources into a CloudFormation stack automatically in the CloudFormation User Guide. This parameter can only import resources that have custom names in templates. For more information, see name type in the CloudFormation User Guide. To import resources that do not accept custom names, such as EC2 instances, use the ResourcesToImport parameter instead.
    - name: DeploymentMode
      value: "{{ DeploymentMode }}"
      description: Determines how CloudFormation handles configuration drift during deployment. REVERT_DRIFT – Creates a drift-aware change set that brings actual resource states in line with template definitions. Provides a three-way comparison between actual state, previous deployment state, and desired state. For more information, see Using drift-aware change sets in the CloudFormation User Guide.
      description: Determines how CloudFormation handles configuration drift during deployment. REVERT_DRIFT – Creates a drift-aware change set that brings actual resource states in line with template definitions. Provides a three-way comparison between actual state, previous deployment state, and desired state. For more information, see Using drift-aware change sets in the CloudFormation User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_change_set"
    values={[
        { label: 'delete_change_set', value: 'delete_change_set' }
    ]}
>
<TabItem value="delete_change_set">

Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, CloudFormation successfully deleted the change set. If IncludeNestedStacks specifies True during the creation of the nested change set, then DeleteChangeSet will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of REVIEW_IN_PROGRESS.

```sql
DELETE FROM aws.cloudformation.change_sets
WHERE ChangeSetName = '{{ ChangeSetName }}' --required
AND region = '{{ region }}' --required
AND StackName = '{{ StackName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_change_set"
    values={[
        { label: 'execute_change_set', value: 'execute_change_set' }
    ]}
>
<TabItem value="execute_change_set">

Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy. To create a change set for the entire stack hierarchy, IncludeNestedStacks must have been set to True.

```sql
EXEC aws.cloudformation.change_sets.execute_change_set 
@ChangeSetName='{{ ChangeSetName }}' --required, 
@region='{{ region }}' --required, 
@StackName='{{ StackName }}', 
@ClientRequestToken='{{ ClientRequestToken }}', 
@DisableRollback={{ DisableRollback }}, 
@RetainExceptOnCreate={{ RetainExceptOnCreate }}
;
```
</TabItem>
</Tabs>
