--- 
title: policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_versions
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

Creates, updates, deletes, gets or lists a <code>policy_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.policy_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Document" /></td>
    <td><code>string</code></td>
    <td>The policy document. The policy document is returned in the response to the GetPolicyVersion and GetAccountAuthorizationDetails operations. It is not returned in the response to the CreatePolicyVersion or ListPolicyVersions operations. The policy document returned in this structure is URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy version is set as the policy's default version.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the policy version. Policy version identifiers always begin with v (always lowercase). When a policy is created, the first policy version is v1.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_versions">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the policy version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Document" /></td>
    <td><code>string</code></td>
    <td>The policy document. The policy document is returned in the response to the GetPolicyVersion and GetAccountAuthorizationDetails operations. It is not returned in the response to the CreatePolicyVersion or ListPolicyVersions operations. The policy document returned in this structure is URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy version is set as the policy's default version.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the policy version. Policy version identifiers always begin with v (always lowercase). When a policy is created, the first policy version is v1.</td>
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
    <td><a href="#get_policy_version"><CopyableCode code="get_policy_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified version of the specified managed policy, including the policy document. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. To list the available versions for a policy, use ListPolicyVersions. This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use GetUserPolicy, GetGroupPolicy, or GetRolePolicy. For more information about the types of policies, see Managed policies and inline policies in the IAM User Guide. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#list_policy_versions"><CopyableCode code="list_policy_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version. For more information about managed policies, see Managed policies and inline policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#create_policy_version"><CopyableCode code="create_policy_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SetAsDefault"><code>SetAsDefault</code></a></td>
    <td>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using DeletePolicyVersion before you create a new version. Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#set_default_policy_version"><CopyableCode code="set_default_policy_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the specified version of the specified policy as the policy's default (operative) version. This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use ListEntitiesForPolicy. For information about managed policies, see Managed policies and inline policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_policy_version"><CopyableCode code="delete_policy_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified version from the specified managed policy. You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. For information about versions for managed policies, see Versioning for managed policies in the IAM User Guide.</td>
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
    <td>The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a version. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The JSON policy document that you want to use as the content for this new version of the policy. You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-VersionId">
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The policy version to delete. This parameter allows (through its regex pattern) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.</td>
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
<tr id="parameter-SetAsDefault">
    <td><CopyableCode code="SetAsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to set this version as the policy's default version. When this parameter is true, the new policy version becomes the operative version. That is, it becomes the version that is in effect for the IAM users, groups, and roles that the policy is attached to. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

Retrieves information about the specified version of the specified managed policy, including the policy document. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. To list the available versions for a policy, use ListPolicyVersions. This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use GetUserPolicy, GetGroupPolicy, or GetRolePolicy. For more information about the types of policies, see Managed policies and inline policies in the IAM User Guide. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.

```sql
SELECT
CreateDate,
Document,
IsDefaultVersion,
VersionId
FROM aws.iam.policy_versions
WHERE PolicyArn = '{{ PolicyArn }}' -- required
AND VersionId = '{{ VersionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_versions">

Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version. For more information about managed policies, see Managed policies and inline policies in the IAM User Guide.

```sql
SELECT
CreateDate,
Document,
IsDefaultVersion,
VersionId
FROM aws.iam.policy_versions
WHERE PolicyArn = '{{ PolicyArn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_version"
    values={[
        { label: 'create_policy_version', value: 'create_policy_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_version">

Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using DeletePolicyVersion before you create a new version. Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.

```sql
INSERT INTO aws.iam.policy_versions (
PolicyArn,
PolicyDocument,
region,
SetAsDefault
)
SELECT 
'{{ PolicyArn }}',
'{{ PolicyDocument }}',
'{{ region }}',
'{{ SetAsDefault }}'
RETURNING
CreateDate,
Document,
IsDefaultVersion,
VersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_versions
  props:
    - name: PolicyArn
      value: "{{ PolicyArn }}"
      description: Required parameter for the policy_versions resource.
    - name: PolicyDocument
      value: "{{ PolicyDocument }}"
      description: Required parameter for the policy_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_versions resource.
    - name: SetAsDefault
      value: {{ SetAsDefault }}
      description: Specifies whether to set this version as the policy's default version. When this parameter is true, the new policy version becomes the operative version. That is, it becomes the version that is in effect for the IAM users, groups, and roles that the policy is attached to. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.
      description: Specifies whether to set this version as the policy's default version. When this parameter is true, the new policy version becomes the operative version. That is, it becomes the version that is in effect for the IAM users, groups, and roles that the policy is attached to. For more information about managed policy versions, see Versioning for managed policies in the IAM User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_default_policy_version"
    values={[
        { label: 'set_default_policy_version', value: 'set_default_policy_version' }
    ]}
>
<TabItem value="set_default_policy_version">

Sets the specified version of the specified policy as the policy's default (operative) version. This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use ListEntitiesForPolicy. For information about managed policies, see Managed policies and inline policies in the IAM User Guide.

```sql
UPDATE aws.iam.policy_versions
SET 
-- No updatable properties
WHERE 
PolicyArn = '{{ PolicyArn }}' --required
AND VersionId = '{{ VersionId }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_version"
    values={[
        { label: 'delete_policy_version', value: 'delete_policy_version' }
    ]}
>
<TabItem value="delete_policy_version">

Deletes the specified version from the specified managed policy. You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. For information about versions for managed policies, see Versioning for managed policies in the IAM User Guide.

```sql
DELETE FROM aws.iam.policy_versions
WHERE PolicyArn = '{{ PolicyArn }}' --required
AND VersionId = '{{ VersionId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
