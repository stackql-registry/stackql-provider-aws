--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentCount" /></td>
    <td><code>integer</code></td>
    <td>The number of entities (users, groups, and roles) that the policy is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultVersionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the version of the policy that is set as the default version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A friendly description of the policy. This element is included in the response to the GetPolicy operation. It is not included in the response to the ListPolicies operation.</td>
</tr>
<tr>
    <td><CopyableCode code="IsAttachable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy can be attached to an IAM user, group, or role.</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the policy. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionsBoundaryUsageCount" /></td>
    <td><code>integer</code></td>
    <td>The number of entities (users and roles) for which the policy is used to set the permissions boundary. For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyId" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the policy. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The friendly name (not ARN) identifying the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy was last updated. When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentCount" /></td>
    <td><code>integer</code></td>
    <td>The number of entities (users, groups, and roles) that the policy is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultVersionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the version of the policy that is set as the default version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A friendly description of the policy. This element is included in the response to the GetPolicy operation. It is not included in the response to the ListPolicies operation.</td>
</tr>
<tr>
    <td><CopyableCode code="IsAttachable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy can be attached to an IAM user, group, or role.</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the policy. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionsBoundaryUsageCount" /></td>
    <td><code>integer</code></td>
    <td>The number of entities (users and roles) for which the policy is used to set the permissions boundary. For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyId" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the policy. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The friendly name (not ARN) identifying the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy was last updated. When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use ListEntitiesForPolicy. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use GetPolicyVersion. This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use GetUserPolicy, GetGroupPolicy, or GetRolePolicy. For more information about policies, see Managed policies and inline policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-OnlyAttached"><code>OnlyAttached</code></a>, <a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-PolicyUsageFilter"><code>PolicyUsageFilter</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies. You can filter the list of policies that is returned using the optional OnlyAttached, Scope, and PathPrefix parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set Scope to Local. To list only Amazon Web Services managed policies, set Scope to AWS. You can paginate the results using the MaxItems and Marker parameters. For more information about managed policies, see Managed policies and inline policies in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see GetPolicy.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new managed policy for your Amazon Web Services account. This operation creates a policy version with a version identifier of v1 and sets v1 as the policy's default version. For more information about policy versions, see Versioning for managed policies in the IAM User Guide. As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the IAM User Guide. For more information about managed policies in general, see Managed policies and inline policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified managed policy. Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy: Detach the policy from all users, groups, and roles that the policy is attached to, using DetachUserPolicy, DetachGroupPolicy, or DetachRolePolicy. To list all the users, groups, and roles that a policy is attached to, use ListEntitiesForPolicy. Delete all versions of the policy using DeletePolicyVersion. To list the policy's versions, use ListPolicyVersions. You cannot use DeletePolicyVersion to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process. Delete the policy (this automatically deletes the policy's default version) using this operation. For information about managed policies, see Managed policies and inline policies in the IAM User Guide.</td>
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
<tr id="parameter-PolicyArn">
    <td><CopyableCode code="PolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM policy you want to delete. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The JSON policy document that you want to use as the content for the new policy. You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. To learn more about JSON policy grammar, see Grammar of the IAM JSON policy language in the IAM User Guide. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the policy. IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A friendly description of the policy. Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables." The policy description is immutable. After a value is assigned, it cannot be changed.</td>
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
<tr id="parameter-OnlyAttached">
    <td><CopyableCode code="OnlyAttached" /></td>
    <td><code>boolean</code></td>
    <td>A flag to filter the results to only the attached policies. When OnlyAttached is true, the returned list contains only the policies that are attached to an IAM user, group, or role. When OnlyAttached is false, or when the parameter is not included, all policies are returned.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path for the policy. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters. You cannot use an asterisk (*) in the path name.</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PolicyUsageFilter">
    <td><CopyableCode code="PolicyUsageFilter" /></td>
    <td><code>string</code></td>
    <td>The policy usage method to use for filtering the results. To list only permissions policies, set PolicyUsageFilter to PermissionsPolicy. To list only the policies used to set permissions boundaries, set the value to PermissionsBoundary. This parameter is optional. If it is not included, all policies are returned.</td>
</tr>
<tr id="parameter-Scope">
    <td><CopyableCode code="Scope" /></td>
    <td><code>string</code></td>
    <td>The scope to use for filtering the results. To list only Amazon Web Services managed policies, set Scope to AWS. To list only the customer managed policies in your Amazon Web Services account, set Scope to Local. This parameter is optional. If it is not included, or if it is set to All, all policies are returned.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new IAM customer managed policy. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use ListEntitiesForPolicy. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use GetPolicyVersion. This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use GetUserPolicy, GetGroupPolicy, or GetRolePolicy. For more information about policies, see Managed policies and inline policies in the IAM User Guide.

```sql
SELECT
Arn,
AttachmentCount,
CreateDate,
DefaultVersionId,
Description,
IsAttachable,
Path,
PermissionsBoundaryUsageCount,
PolicyId,
PolicyName,
Tags,
UpdateDate
FROM aws.iam.policies
WHERE PolicyArn = '{{ PolicyArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies. You can filter the list of policies that is returned using the optional OnlyAttached, Scope, and PathPrefix parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set Scope to Local. To list only Amazon Web Services managed policies, set Scope to AWS. You can paginate the results using the MaxItems and Marker parameters. For more information about managed policies, see Managed policies and inline policies in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see GetPolicy.

```sql
SELECT
Arn,
AttachmentCount,
CreateDate,
DefaultVersionId,
Description,
IsAttachable,
Path,
PermissionsBoundaryUsageCount,
PolicyId,
PolicyName,
Tags,
UpdateDate
FROM aws.iam.policies
WHERE region = '{{ region }}' -- required
AND Scope = '{{ Scope }}'
AND OnlyAttached = '{{ OnlyAttached }}'
AND PathPrefix = '{{ PathPrefix }}'
AND PolicyUsageFilter = '{{ PolicyUsageFilter }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates a new managed policy for your Amazon Web Services account. This operation creates a policy version with a version identifier of v1 and sets v1 as the policy's default version. For more information about policy versions, see Versioning for managed policies in the IAM User Guide. As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the IAM User Guide. For more information about managed policies in general, see Managed policies and inline policies in the IAM User Guide.

```sql
INSERT INTO aws.iam.policies (
PolicyName,
PolicyDocument,
region,
Path,
Description,
Tags
)
SELECT 
'{{ PolicyName }}',
'{{ PolicyDocument }}',
'{{ region }}',
'{{ Path }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
Arn,
AttachmentCount,
CreateDate,
DefaultVersionId,
Description,
IsAttachable,
Path,
PermissionsBoundaryUsageCount,
PolicyId,
PolicyName,
Tags,
UpdateDate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: PolicyName
      value: "{{ PolicyName }}"
      description: Required parameter for the policies resource.
    - name: PolicyDocument
      value: "{{ PolicyDocument }}"
      description: Required parameter for the policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: Path
      value: "{{ Path }}"
      description: The path for the policy. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters. You cannot use an asterisk (*) in the path name.
      description: The path for the policy. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters. You cannot use an asterisk (*) in the path name.
    - name: Description
      value: "{{ Description }}"
      description: A friendly description of the policy. Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables." The policy description is immutable. After a value is assigned, it cannot be changed.
      description: A friendly description of the policy. Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables." The policy description is immutable. After a value is assigned, it cannot be changed.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new IAM customer managed policy. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new IAM customer managed policy. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes the specified managed policy. Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy: Detach the policy from all users, groups, and roles that the policy is attached to, using DetachUserPolicy, DetachGroupPolicy, or DetachRolePolicy. To list all the users, groups, and roles that a policy is attached to, use ListEntitiesForPolicy. Delete all versions of the policy using DeletePolicyVersion. To list the policy's versions, use ListPolicyVersions. You cannot use DeletePolicyVersion to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process. Delete the policy (this automatically deletes the policy's default version) using this operation. For information about managed policies, see Managed policies and inline policies in the IAM User Guide.

```sql
DELETE FROM aws.iam.policies
WHERE PolicyArn = '{{ PolicyArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
