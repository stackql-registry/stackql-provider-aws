--- 
title: instance_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profiles
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

Creates, updates, deletes, gets or lists an <code>instance_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.instance_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_profile"
    values={[
        { label: 'get_instance_profile', value: 'get_instance_profile' },
        { label: 'list_instance_profiles', value: 'list_instance_profiles' }
    ]}
>
<TabItem value="get_instance_profile">

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
    <td>The Amazon Resource Name (ARN) specifying the instance profile. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date when the instance profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceProfileId" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the instance profile. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name identifying the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the instance profile. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Roles" /></td>
    <td><code>string</code></td>
    <td>The role associated with the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instance_profiles">

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
    <td>The Amazon Resource Name (ARN) specifying the instance profile. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date when the instance profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceProfileId" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the instance profile. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name identifying the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the instance profile. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Roles" /></td>
    <td><code>string</code></td>
    <td>The role associated with the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
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
    <td><a href="#get_instance_profile"><CopyableCode code="get_instance_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see Using instance profiles in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#list_instance_profiles"><CopyableCode code="list_instance_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see Using instance profiles in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see GetInstanceProfile. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#create_instance_profile"><CopyableCode code="create_instance_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new instance profile. For information about instance profiles, see Using roles for applications on Amazon EC2 in the IAM User Guide, and Instance profiles in the Amazon EC2 User Guide. For information about the number of instance profiles you can create, see IAM object quotas in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#add_role_to_instance_profile"><CopyableCode code="add_role_to_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of eventual consistency. To force the change, you must disassociate the instance profile and then associate the instance profile, or you can stop your instance and then restart it. The caller of this operation must be granted the PassRole permission on the IAM role by a permissions policy. When using the iam:AssociatedResourceArn condition in a policy to restrict the PassRole IAM action, special considerations apply if the policy is intended to define access for the AddRoleToInstanceProfile action. In this case, you cannot specify a Region or instance ID in the EC2 instance ARN. The ARN value must be arn:aws:ec2:*:CallerAccountId:instance/*. Using any other ARN value may lead to unexpected evaluation results. For more information about roles, see IAM roles in the IAM User Guide. For more information about instance profiles, see Using instance profiles in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance_profile"><CopyableCode code="delete_instance_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified instance profile. The instance profile must not have an associated role. Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance. For more information about instance profiles, see Using instance profiles in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#remove_role_from_instance_profile"><CopyableCode code="remove_role_from_instance_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified IAM role from the specified Amazon EC2 instance profile. Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance. For more information about roles, see IAM roles in the IAM User Guide. For more information about instance profiles, see Using instance profiles in the IAM User Guide.</td>
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
<tr id="parameter-InstanceProfileName">
    <td><CopyableCode code="InstanceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the instance profile to update. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-RoleName">
    <td><CopyableCode code="RoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the role to remove. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
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
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the instance profile. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. For example, the prefix /application_abc/component_xyz/ gets all instance profiles whose path starts with /application_abc/component_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all instance profiles. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the newly created IAM instance profile. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_instance_profile"
    values={[
        { label: 'get_instance_profile', value: 'get_instance_profile' },
        { label: 'list_instance_profiles', value: 'list_instance_profiles' }
    ]}
>
<TabItem value="get_instance_profile">

Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see Using instance profiles in the IAM User Guide.

```sql
SELECT
Arn,
CreateDate,
InstanceProfileId,
InstanceProfileName,
Path,
Roles,
Tags
FROM aws.iam.instance_profiles
WHERE InstanceProfileName = '{{ InstanceProfileName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instance_profiles">

Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see Using instance profiles in the IAM User Guide. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see GetInstanceProfile. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
Arn,
CreateDate,
InstanceProfileId,
InstanceProfileName,
Path,
Roles,
Tags
FROM aws.iam.instance_profiles
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
    defaultValue="create_instance_profile"
    values={[
        { label: 'create_instance_profile', value: 'create_instance_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_profile">

Creates a new instance profile. For information about instance profiles, see Using roles for applications on Amazon EC2 in the IAM User Guide, and Instance profiles in the Amazon EC2 User Guide. For information about the number of instance profiles you can create, see IAM object quotas in the IAM User Guide.

```sql
INSERT INTO aws.iam.instance_profiles (
InstanceProfileName,
region,
Path,
Tags
)
SELECT 
'{{ InstanceProfileName }}',
'{{ region }}',
'{{ Path }}',
'{{ Tags }}'
RETURNING
Arn,
CreateDate,
InstanceProfileId,
InstanceProfileName,
Path,
Roles,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_profiles
  props:
    - name: InstanceProfileName
      value: "{{ InstanceProfileName }}"
      description: Required parameter for the instance_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_profiles resource.
    - name: Path
      value: "{{ Path }}"
      description: The path to the instance profile. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
      description: The path to the instance profile. For more information about paths, see IAM Identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the newly created IAM instance profile. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the newly created IAM instance profile. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_role_to_instance_profile"
    values={[
        { label: 'add_role_to_instance_profile', value: 'add_role_to_instance_profile' }
    ]}
>
<TabItem value="add_role_to_instance_profile">

Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of eventual consistency. To force the change, you must disassociate the instance profile and then associate the instance profile, or you can stop your instance and then restart it. The caller of this operation must be granted the PassRole permission on the IAM role by a permissions policy. When using the iam:AssociatedResourceArn condition in a policy to restrict the PassRole IAM action, special considerations apply if the policy is intended to define access for the AddRoleToInstanceProfile action. In this case, you cannot specify a Region or instance ID in the EC2 instance ARN. The ARN value must be arn:aws:ec2:*:CallerAccountId:instance/*. Using any other ARN value may lead to unexpected evaluation results. For more information about roles, see IAM roles in the IAM User Guide. For more information about instance profiles, see Using instance profiles in the IAM User Guide.

```sql
UPDATE aws.iam.instance_profiles
SET 
-- No updatable properties
WHERE 
InstanceProfileName = '{{ InstanceProfileName }}' --required
AND RoleName = '{{ RoleName }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_profile"
    values={[
        { label: 'delete_instance_profile', value: 'delete_instance_profile' }
    ]}
>
<TabItem value="delete_instance_profile">

Deletes the specified instance profile. The instance profile must not have an associated role. Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance. For more information about instance profiles, see Using instance profiles in the IAM User Guide.

```sql
DELETE FROM aws.iam.instance_profiles
WHERE InstanceProfileName = '{{ InstanceProfileName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_role_from_instance_profile"
    values={[
        { label: 'remove_role_from_instance_profile', value: 'remove_role_from_instance_profile' }
    ]}
>
<TabItem value="remove_role_from_instance_profile">

Removes the specified IAM role from the specified Amazon EC2 instance profile. Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance. For more information about roles, see IAM roles in the IAM User Guide. For more information about instance profiles, see Using instance profiles in the IAM User Guide.

```sql
EXEC aws.iam.instance_profiles.remove_role_from_instance_profile 
@InstanceProfileName='{{ InstanceProfileName }}' --required, 
@RoleName='{{ RoleName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
