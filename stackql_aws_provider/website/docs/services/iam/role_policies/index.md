--- 
title: role_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - role_policies
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

Creates, updates, deletes, gets or lists a <code>role_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.role_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role_policy"
    values={[
        { label: 'get_role_policy', value: 'get_role_policy' },
        { label: 'list_role_policies', value: 'list_role_policies' }
    ]}
>
<TabItem value="get_role_policy">

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
    <td><CopyableCode code="policy_document" /></td>
    <td><code>string</code></td>
    <td>The policy document. IAM stores policies in JSON format. However, resources that were created using CloudFormation templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The role the policy is associated with.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_role_policies">

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
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>A list of policy names.</td>
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
    <td><a href="#get_role_policy"><CopyableCode code="get_role_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified inline policy document that is embedded with the specified IAM role. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed policies and inline policies in the IAM User Guide. For more information about roles, see IAM roles in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#list_role_policies"><CopyableCode code="list_role_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the names of the inline policies that are embedded in the specified IAM role. An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use ListAttachedRolePolicies. For more information about policies, see Managed policies and inline policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</td>
</tr>
<tr>
    <td><a href="#attach_role_policy"><CopyableCode code="attach_role_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy. You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using CreateRole . You can update a role's trust policy using UpdateAssumerolePolicy . Use this operation to attach a managed policy to a role. To embed an inline policy in a role, use PutRolePolicy . For more information about policies, see Managed policies and inline policies in the IAM User Guide. As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_assume_role_policy"><CopyableCode code="update_assume_role_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see Using roles to delegate permissions and federate identities.</td>
</tr>
<tr>
    <td><a href="#put_role_policy"><CopyableCode code="put_role_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates an inline policy document that is embedded in the specified IAM role. When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole . You can update a role's trust policy using UpdateAssumeRolePolicy . For more information about roles, see IAM roles in the IAM User Guide. A role can also have a managed policy attached to it. To attach a managed policy to a role, use AttachRolePolicy . To create a new managed policy, use CreatePolicy . For information about policies, see Managed policies and inline policies in the IAM User Guide. For information about the maximum number of inline policies that you can embed with a role, see IAM and STS quotas in the IAM User Guide. Because policy documents can be large, you should use POST rather than GET when calling PutRolePolicy. For general information about using the Query API with IAM, see Making query requests in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_role_policy"><CopyableCode code="delete_role_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified inline policy that is embedded in the specified IAM role. A role can also have managed policies attached to it. To detach a managed policy from a role, use DetachRolePolicy. For more information about policies, refer to Managed policies and inline policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#detach_role_policy"><CopyableCode code="detach_role_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified managed policy from the specified role. A role can also have inline policies embedded with it. To delete an inline policy, use DeleteRolePolicy. For information about policies, see Managed policies and inline policies in the IAM User Guide.</td>
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
    <td>The Amazon Resource Name (ARN) of the IAM policy you want to detach. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The policy document. You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the inline policy to delete from the specified IAM role. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-RoleName">
    <td><CopyableCode code="RoleName" /></td>
    <td><code>string</code></td>
    <td>The name (friendly name, not ARN) of the IAM role to detach the policy from. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_role_policy"
    values={[
        { label: 'get_role_policy', value: 'get_role_policy' },
        { label: 'list_role_policies', value: 'list_role_policies' }
    ]}
>
<TabItem value="get_role_policy">

Retrieves the specified inline policy document that is embedded with the specified IAM role. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use GetPolicy to determine the policy's default version, then use GetPolicyVersion to retrieve the policy document. For more information about policies, see Managed policies and inline policies in the IAM User Guide. For more information about roles, see IAM roles in the IAM User Guide.

```sql
SELECT
policy_document,
policy_name,
role_name
FROM aws.iam.role_policies
WHERE RoleName = '{{ RoleName }}' -- required
AND PolicyName = '{{ PolicyName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_role_policies">

Lists the names of the inline policies that are embedded in the specified IAM role. An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use ListAttachedRolePolicies. For more information about policies, see Managed policies and inline policies in the IAM User Guide. You can paginate the results using the MaxItems and Marker parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.

```sql
SELECT
policy_name
FROM aws.iam.role_policies
WHERE RoleName = '{{ RoleName }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_role_policy"
    values={[
        { label: 'attach_role_policy', value: 'attach_role_policy' },
        { label: 'update_assume_role_policy', value: 'update_assume_role_policy' }
    ]}
>
<TabItem value="attach_role_policy">

Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy. You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using CreateRole . You can update a role's trust policy using UpdateAssumerolePolicy . Use this operation to attach a managed policy to a role. To embed an inline policy in a role, use PutRolePolicy . For more information about policies, see Managed policies and inline policies in the IAM User Guide. As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the IAM User Guide.

```sql
UPDATE aws.iam.role_policies
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND PolicyArn = '{{ PolicyArn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_assume_role_policy">

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see Using roles to delegate permissions and federate identities.

```sql
UPDATE aws.iam.role_policies
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_role_policy"
    values={[
        { label: 'put_role_policy', value: 'put_role_policy' }
    ]}
>
<TabItem value="put_role_policy">

Adds or updates an inline policy document that is embedded in the specified IAM role. When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole . You can update a role's trust policy using UpdateAssumeRolePolicy . For more information about roles, see IAM roles in the IAM User Guide. A role can also have a managed policy attached to it. To attach a managed policy to a role, use AttachRolePolicy . To create a new managed policy, use CreatePolicy . For information about policies, see Managed policies and inline policies in the IAM User Guide. For information about the maximum number of inline policies that you can embed with a role, see IAM and STS quotas in the IAM User Guide. Because policy documents can be large, you should use POST rather than GET when calling PutRolePolicy. For general information about using the Query API with IAM, see Making query requests in the IAM User Guide.

```sql
REPLACE aws.iam.role_policies
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role_policy"
    values={[
        { label: 'delete_role_policy', value: 'delete_role_policy' }
    ]}
>
<TabItem value="delete_role_policy">

Deletes the specified inline policy that is embedded in the specified IAM role. A role can also have managed policies attached to it. To detach a managed policy from a role, use DetachRolePolicy. For more information about policies, refer to Managed policies and inline policies in the IAM User Guide.

```sql
DELETE FROM aws.iam.role_policies
WHERE RoleName = '{{ RoleName }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_role_policy"
    values={[
        { label: 'detach_role_policy', value: 'detach_role_policy' }
    ]}
>
<TabItem value="detach_role_policy">

Removes the specified managed policy from the specified role. A role can also have inline policies embedded with it. To delete an inline policy, use DeleteRolePolicy. For information about policies, see Managed policies and inline policies in the IAM User Guide.

```sql
EXEC aws.iam.role_policies.detach_role_policy 
@RoleName='{{ RoleName }}' --required, 
@PolicyArn='{{ PolicyArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
