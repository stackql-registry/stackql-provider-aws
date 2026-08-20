--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - iam
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

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role"
    values={[
        { label: 'get_role', value: 'get_role' },
        { label: 'list_roles', value: 'list_roles' }
    ]}
>
<TabItem value="get_role">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide guide.</td>
</tr>
<tr>
    <td><CopyableCode code="assume_role_policy_document" /></td>
    <td><code>string</code></td>
    <td>The policy that grants an entity permission to assume the role.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the role was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the role that you provide.</td>
</tr>
<tr>
    <td><CopyableCode code="max_session_duration" /></td>
    <td><code>integer</code></td>
    <td>The maximum session duration (in seconds) for the specified role. Anyone who uses the CLI, or API to assume the role can specify the duration using the optional DurationSeconds API parameter or duration-seconds CLI parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the role. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_boundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the policy used to set the permissions boundary for the role. For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the role. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_last_used" /></td>
    <td><code>string</code></td>
    <td>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see Regions where data is tracked in the IAM user Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the role.</td>
</tr>
<tr>
    <td><CopyableCode code="source_role_template" /></td>
    <td><code>string</code></td>
    <td>Contains information about the role template that this role was created from. This member is present only for roles created with AcquireRole.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the role. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_roles">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide guide.</td>
</tr>
<tr>
    <td><CopyableCode code="assume_role_policy_document" /></td>
    <td><code>string</code></td>
    <td>The policy that grants an entity permission to assume the role.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the role was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the role that you provide.</td>
</tr>
<tr>
    <td><CopyableCode code="max_session_duration" /></td>
    <td><code>integer</code></td>
    <td>The maximum session duration (in seconds) for the specified role. Anyone who uses the CLI, or API to assume the role can specify the duration using the optional DurationSeconds API parameter or duration-seconds CLI parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the role. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_boundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the policy used to set the permissions boundary for the role. For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the role. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_last_used" /></td>
    <td><code>string</code></td>
    <td>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see Regions where data is tracked in the IAM user Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the role.</td>
</tr>
<tr>
    <td><CopyableCode code="source_role_template" /></td>
    <td><code>string</code></td>
    <td>Contains information about the role template that this role was created from. This member is present only for roles created with AcquireRole.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the role. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
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
    <td><a href="#get_role"><CopyableCode code="get_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see IAM roles in the IAM User Guide. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically.</td>
</tr>
<tr>
    <td><a href="#list_roles"><CopyableCode code="list_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see IAM roles in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object: PermissionsBoundary RoleLastUsed Tags To view all of the information for a role, see GetRole. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#create_role"><CopyableCode code="create_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-AssumeRolePolicyDocument"><code>AssumeRolePolicyDocument</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-MaxSessionDuration"><code>MaxSessionDuration</code></a>, <a href="#parameter-PermissionsBoundary"><code>PermissionsBoundary</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new role for your Amazon Web Services account. For more information about roles, see IAM roles in the IAM User Guide. For information about quotas for role names and the number of roles you can create, see IAM and STS quotas in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#create_service_linked_role"><CopyableCode code="create_service_linked_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AWSServiceName"><code>AWSServiceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-CustomSuffix"><code>CustomSuffix</code></a></td>
    <td>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see Using service-linked roles in the IAM User Guide. To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</td>
</tr>
<tr>
    <td><a href="#update_role"><CopyableCode code="update_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-MaxSessionDuration"><code>MaxSessionDuration</code></a></td>
    <td>Updates the description or maximum session duration setting of a role.</td>
</tr>
<tr>
    <td><a href="#put_role_permissions_boundary"><CopyableCode code="put_role_permissions_boundary" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PermissionsBoundary"><code>PermissionsBoundary</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role. You cannot set the boundary for a service-linked role. Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see IAM JSON policy evaluation logic in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_role"><CopyableCode code="delete_role" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see Deleting an IAM role. Before attempting to delete a role, remove the following attached items: Inline policies (DeleteRolePolicy) Attached managed policies (DetachRolePolicy) Instance profile (RemoveRoleFromInstanceProfile) Optional – Delete instance profile after detaching from role for resource clean up (DeleteInstanceProfile) Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</td>
</tr>
<tr>
    <td><a href="#delete_role_permissions_boundary"><CopyableCode code="delete_role_permissions_boundary" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the permissions boundary for the specified IAM role. You cannot set the boundary for a service-linked role. Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</td>
</tr>
<tr>
    <td><a href="#delete_service_linked_role"><CopyableCode code="delete_service_linked_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the DeletionTaskId of the earlier request is returned. If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the GetServiceLinkedRoleDeletionStatus operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the Amazon Web Services documentation for your service. For more information about service-linked roles, see Roles terms and concepts: Amazon Web Services service-linked role in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_role_description"><CopyableCode code="update_role_description" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a></td>
    <td>Use UpdateRole instead. Modifies only the description of a role. This operation performs the same function as the Description parameter in the UpdateRole operation.</td>
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
<tr id="parameter-AWSServiceName">
    <td><CopyableCode code="AWSServiceName" /></td>
    <td><code>string</code></td>
    <td>The service principal for the Amazon Web Services service to which this role is attached. You use a string similar to a URL but without the http:​// in front. For example: elasticbeanstalk.amazonaws.com. Service principals are unique and case-sensitive. To find the exact service principal for your service-linked role, see Amazon Web Services services that work with IAM in the IAM User Guide. Look for the services that have Yes in the Service-Linked Role column. Choose the Yes link to view the service-linked role documentation for that service.</td>
</tr>
<tr id="parameter-AssumeRolePolicyDocument">
    <td><CopyableCode code="AssumeRolePolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The trust relationship policy document that grants an entity permission to assume the role. In IAM, you must provide a JSON policy that has been converted to a string. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D) Upon success, the response includes the same trust policy in JSON format.</td>
</tr>
<tr id="parameter-PermissionsBoundary">
    <td><CopyableCode code="PermissionsBoundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the managed policy that is used to set the permissions boundary for the role. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.</td>
</tr>
<tr id="parameter-RoleName">
    <td><CopyableCode code="RoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the role that you want to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CustomSuffix">
    <td><CopyableCode code="CustomSuffix" /></td>
    <td><code>string</code></td>
    <td>A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix. Some services do not support the CustomSuffix parameter. If you provide an optional suffix and the operation fails, try the operation again without the suffix.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The new description that you want to apply to the specified role.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-MaxSessionDuration">
    <td><CopyableCode code="MaxSessionDuration" /></td>
    <td><code>integer</code></td>
    <td>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours. Anyone who assumes the role from the CLI or API can use the DurationSeconds API parameter or the duration-seconds CLI parameter to request a longer session. The MaxSessionDuration setting determines the maximum duration that can be requested using the DurationSeconds parameter. If users don't specify a value for the DurationSeconds parameter, their security credentials are valid for one hour by default. This applies when you use the AssumeRole* API operations or the assume-role* CLI operations but does not apply when you use those operations to create a console URL. For more information, see Using IAM roles in the IAM User Guide. IAM role credentials provided by Amazon EC2 instances assigned to the role are not subject to the specified maximum session duration.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the role. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. For example, the prefix /application_abc/component_xyz/ gets all roles whose path starts with /application_abc/component_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all roles. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PermissionsBoundary">
    <td><CopyableCode code="PermissionsBoundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the managed policy that is used to set the permissions boundary for the role. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new role. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_role"
    values={[
        { label: 'get_role', value: 'get_role' },
        { label: 'list_roles', value: 'list_roles' }
    ]}
>
<TabItem value="get_role">

Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see IAM roles in the IAM User Guide. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically.

```sql
SELECT
arn,
assume_role_policy_document,
create_date,
description,
max_session_duration,
path,
permissions_boundary,
role_id,
role_last_used,
role_name,
source_role_template,
tags
FROM aws.iam.roles
WHERE RoleName = '{{ RoleName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_roles">

Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see IAM roles in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object: PermissionsBoundary RoleLastUsed Tags To view all of the information for a role, see GetRole. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
arn,
assume_role_policy_document,
create_date,
description,
max_session_duration,
path,
permissions_boundary,
role_id,
role_last_used,
role_name,
source_role_template,
tags
FROM aws.iam.roles
WHERE region = '{{ region }}' -- required
AND PathPrefix = '{{ PathPrefix }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_role"
    values={[
        { label: 'create_role', value: 'create_role' },
        { label: 'create_service_linked_role', value: 'create_service_linked_role' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_role">

Creates a new role for your Amazon Web Services account. For more information about roles, see IAM roles in the IAM User Guide. For information about quotas for role names and the number of roles you can create, see IAM and STS quotas in the IAM User Guide.

```sql
INSERT INTO aws.iam.roles (
RoleName,
AssumeRolePolicyDocument,
region,
Path,
Description,
MaxSessionDuration,
PermissionsBoundary,
Tags
)
SELECT 
'{{ RoleName }}',
'{{ AssumeRolePolicyDocument }}',
'{{ region }}',
'{{ Path }}',
'{{ Description }}',
'{{ MaxSessionDuration }}',
'{{ PermissionsBoundary }}',
'{{ Tags }}'
RETURNING
arn,
assume_role_policy_document,
create_date,
description,
max_session_duration,
path,
permissions_boundary,
role_id,
role_last_used,
role_name,
source_role_template,
tags
;
```
</TabItem>
<TabItem value="create_service_linked_role">

Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see Using service-linked roles in the IAM User Guide. To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.

```sql
INSERT INTO aws.iam.roles (
AWSServiceName,
region,
Description,
CustomSuffix
)
SELECT 
'{{ AWSServiceName }}',
'{{ region }}',
'{{ Description }}',
'{{ CustomSuffix }}'
RETURNING
arn,
assume_role_policy_document,
create_date,
description,
max_session_duration,
path,
permissions_boundary,
role_id,
role_last_used,
role_name,
source_role_template,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: roles
  props:
    - name: RoleName
      value: "{{ RoleName }}"
      description: Required parameter for the roles resource.
    - name: AssumeRolePolicyDocument
      value: "{{ AssumeRolePolicyDocument }}"
      description: Required parameter for the roles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the roles resource.
    - name: AWSServiceName
      value: "{{ AWSServiceName }}"
      description: Required parameter for the roles resource.
    - name: Path
      value: "{{ Path }}"
      description: The path to the role. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
      description: The path to the role. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
    - name: Description
      value: "{{ Description }}"
      description: A description of the role.
      description: A description of the role.
    - name: MaxSessionDuration
      value: {{ MaxSessionDuration }}
      description: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours. Anyone who assumes the role from the CLI or API can use the DurationSeconds API parameter or the duration-seconds CLI parameter to request a longer session. The MaxSessionDuration setting determines the maximum duration that can be requested using the DurationSeconds parameter. If users don't specify a value for the DurationSeconds parameter, their security credentials are valid for one hour by default. This applies when you use the AssumeRole* API operations or the assume-role* CLI operations but does not apply when you use those operations to create a console URL. For more information, see Using IAM roles in the IAM User Guide.
      description: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours. Anyone who assumes the role from the CLI or API can use the DurationSeconds API parameter or the duration-seconds CLI parameter to request a longer session. The MaxSessionDuration setting determines the maximum duration that can be requested using the DurationSeconds parameter. If users don't specify a value for the DurationSeconds parameter, their security credentials are valid for one hour by default. This applies when you use the AssumeRole* API operations or the assume-role* CLI operations but does not apply when you use those operations to create a console URL. For more information, see Using IAM roles in the IAM User Guide.
    - name: PermissionsBoundary
      value: "{{ PermissionsBoundary }}"
      description: The ARN of the managed policy that is used to set the permissions boundary for the role. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.
      description: The ARN of the managed policy that is used to set the permissions boundary for the role. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new role. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new role. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
    - name: CustomSuffix
      value: "{{ CustomSuffix }}"
      description: A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix. Some services do not support the CustomSuffix parameter. If you provide an optional suffix and the operation fails, try the operation again without the suffix.
      description: A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix. Some services do not support the CustomSuffix parameter. If you provide an optional suffix and the operation fails, try the operation again without the suffix.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_role"
    values={[
        { label: 'update_role', value: 'update_role' }
    ]}
>
<TabItem value="update_role">

Updates the description or maximum session duration setting of a role.

```sql
UPDATE aws.iam.roles
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND MaxSessionDuration = '{{ MaxSessionDuration}}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_role_permissions_boundary"
    values={[
        { label: 'put_role_permissions_boundary', value: 'put_role_permissions_boundary' }
    ]}
>
<TabItem value="put_role_permissions_boundary">

Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role. You cannot set the boundary for a service-linked role. Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see IAM JSON policy evaluation logic in the IAM User Guide.

```sql
REPLACE aws.iam.roles
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND PermissionsBoundary = '{{ PermissionsBoundary }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role"
    values={[
        { label: 'delete_role', value: 'delete_role' }
    ]}
>
<TabItem value="delete_role">

Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see Deleting an IAM role. Before attempting to delete a role, remove the following attached items: Inline policies (DeleteRolePolicy) Attached managed policies (DetachRolePolicy) Instance profile (RemoveRoleFromInstanceProfile) Optional – Delete instance profile after detaching from role for resource clean up (DeleteInstanceProfile) Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.

```sql
DELETE FROM aws.iam.roles
WHERE RoleName = '{{ RoleName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_role_permissions_boundary"
    values={[
        { label: 'delete_role_permissions_boundary', value: 'delete_role_permissions_boundary' },
        { label: 'delete_service_linked_role', value: 'delete_service_linked_role' },
        { label: 'update_role_description', value: 'update_role_description' }
    ]}
>
<TabItem value="delete_role_permissions_boundary">

Deletes the permissions boundary for the specified IAM role. You cannot set the boundary for a service-linked role. Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.

```sql
EXEC aws.iam.roles.delete_role_permissions_boundary 
@RoleName='{{ RoleName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_service_linked_role">

Submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the DeletionTaskId of the earlier request is returned. If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the GetServiceLinkedRoleDeletionStatus operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the Amazon Web Services documentation for your service. For more information about service-linked roles, see Roles terms and concepts: Amazon Web Services service-linked role in the IAM User Guide.

```sql
EXEC aws.iam.roles.delete_service_linked_role 
@RoleName='{{ RoleName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_role_description">

Use UpdateRole instead. Modifies only the description of a role. This operation performs the same function as the Description parameter in the UpdateRole operation.

```sql
EXEC aws.iam.roles.update_role_description 
@RoleName='{{ RoleName }}' --required, 
@region='{{ region }}' --required, 
@Description='{{ Description }}'
;
```
</TabItem>
</Tabs>
