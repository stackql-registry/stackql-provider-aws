--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - organizations
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_policy"
    values={[
        { label: 'describe_policy', value: 'describe_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="describe_policy">

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
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>The text content of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicySummary" /></td>
    <td><code>object</code></td>
    <td>A structure that contains additional details about the policy.</td>
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
    <td>The Amazon Resource Name (ARN) of the policy. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^(arn:aws:organizations::\d&#123;12&#125;:policy\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/&#91;0-9a-z_&#93;+\/p-&#91;0-9a-z&#93;&#123;10,32&#125;)|(arn:aws:organizations::aws:policy\/&#91;0-9a-z_&#93;+\/p-&#91;0-9a-zA-Z_&#93;&#123;10,128&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsManaged" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that indicates whether the specified policy is an Amazon Web Services managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the policy. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_). (pattern: &lt;code&gt;^p-&#91;0-9a-zA-Z_&#93;&#123;8,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (SERVICE_CONTROL_POLICY, RESOURCE_CONTROL_POLICY, TAG_POLICY, BACKUP_POLICY, AISERVICES_OPT_OUT_POLICY, CHATBOT_POLICY, DECLARATIVE_POLICY_EC2, SECURITYHUB_POLICY, INSPECTOR_POLICY, UPGRADE_ROLLOUT_POLICY, BEDROCK_POLICY, S3_POLICY, NETWORK_SECURITY_DIRECTOR_POLICY)</td>
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
    <td><a href="#describe_policy"><CopyableCode code="describe_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a policy. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of all policies in an organization of a specified type. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account. For more information about policies and their use, see Managing Organizations policies. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#attach_policy"><CopyableCode code="attach_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyId"><code>PolicyId</code></a>, <a href="#parameter-TargetId"><code>TargetId</code></a></td>
    <td></td>
    <td>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the Organizations User Guide for information about each policy type: SERVICE_CONTROL_POLICY RESOURCE_CONTROL_POLICY DECLARATIVE_POLICY_EC2 BACKUP_POLICY TAG_POLICY CHATBOT_POLICY AISERVICES_OPT_OUT_POLICY SECURITYHUB_POLICY UPGRADE_ROLLOUT_POLICY INSPECTOR_POLICY BEDROCK_POLICY S3_POLICY NETWORK_SECURITY_DIRECTOR_POLICY You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyId"><code>PolicyId</code></a></td>
    <td></td>
    <td>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#detach_policy"><CopyableCode code="detach_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyId"><code>PolicyId</code></a>, <a href="#parameter-TargetId"><code>TargetId</code></a></td>
    <td></td>
    <td>Detaches a policy from a target root, organizational unit (OU), or account. If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate. Every root, OU, and account must have at least one SCP attached. If you want to replace the default FullAWSAccess policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "allow list". If you instead attach a second SCP and leave the FullAWSAccess SCP still attached, and specify "Effect": "Deny" in the second SCP to override the "Effect": "Allow" in the FullAWSAccess policy (or any other attached SCP), you're using the authorization strategy of a "deny list". You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#disable_policy_type"><CopyableCode code="disable_policy_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RootId"><code>RootId</code></a>, <a href="#parameter-PolicyType"><code>PolicyType</code></a></td>
    <td></td>
    <td>Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the EnablePolicyType operation. This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if all features are enabled for the organization. Amazon Web Services recommends that you first use ListRoots to see the status of policy types for a specified root, and then use this operation. You can only call this operation from the management account or a member account that is a delegated administrator. To view the status of available policy types in the organization, use ListRoots.</td>
</tr>
<tr>
    <td><a href="#enable_policy_type"><CopyableCode code="enable_policy_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RootId"><code>RootId</code></a>, <a href="#parameter-PolicyType"><code>PolicyType</code></a></td>
    <td></td>
    <td>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the DisablePolicyType operation. This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use ListRoots to see the status of policy types for a specified root, and then use this operation. You can only call this operation from the management account or a member account that is a delegated administrator. You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use ListRoots.</td>
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
    defaultValue="describe_policy"
    values={[
        { label: 'describe_policy', value: 'describe_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="describe_policy">

Retrieves information about a policy. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Content,
PolicySummary
FROM aws.organizations.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Retrieves the list of all policies in an organization of a specified type. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
AwsManaged,
Description,
Id,
Name,
Type
FROM aws.organizations.policies
WHERE region = '{{ region }}' -- required
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

Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account. For more information about policies and their use, see Managing Organizations policies. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
INSERT INTO aws.organizations.policies (
Content,
Description,
Name,
Type,
Tags,
region
)
SELECT 
'{{ Content }}' /* required */,
'{{ Description }}',
'{{ Name }}',
'{{ Type }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Policy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: Content
      value: "{{ Content }}"
      description: |
        The policy text content to add to the new policy. The text that you supply must adhere to the rules of the policy type you specify in the Type parameter. The maximum size of a policy document depends on the policy's type. For more information, see Maximum and minimum values in the Organizations User Guide.
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description to assign to the policy.
    - name: Name
      value: "{{ Name }}"
      description: |
        The friendly name to assign to the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of policy to create. You can specify one of the following values: SERVICE_CONTROL_POLICY RESOURCE_CONTROL_POLICY DECLARATIVE_POLICY_EC2 BACKUP_POLICY TAG_POLICY CHATBOT_POLICY AISERVICES_OPT_OUT_POLICY SECURITYHUB_POLICY UPGRADE_ROLLOUT_POLICY INSPECTOR_POLICY BEDROCK_POLICY S3_POLICY NETWORK_SECURITY_DIRECTOR_POLICY
      valid_values: ['SERVICE_CONTROL_POLICY', 'RESOURCE_CONTROL_POLICY', 'TAG_POLICY', 'BACKUP_POLICY', 'AISERVICES_OPT_OUT_POLICY', 'CHATBOT_POLICY', 'DECLARATIVE_POLICY_EC2', 'SECURITYHUB_POLICY', 'INSPECTOR_POLICY', 'UPGRADE_ROLLOUT_POLICY', 'BEDROCK_POLICY', 'S3_POLICY', 'NETWORK_SECURITY_DIRECTOR_POLICY']
    - name: Tags
      description: |
        A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null. For more information about tagging, see Tagging Organizations resources in the Organizations User Guide. If any one of the tags is not valid or if you exceed the allowed number of tags for a policy, then the entire request fails and the policy is not created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_policy"
    values={[
        { label: 'attach_policy', value: 'attach_policy' },
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="attach_policy">

Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the Organizations User Guide for information about each policy type: SERVICE_CONTROL_POLICY RESOURCE_CONTROL_POLICY DECLARATIVE_POLICY_EC2 BACKUP_POLICY TAG_POLICY CHATBOT_POLICY AISERVICES_OPT_OUT_POLICY SECURITYHUB_POLICY UPGRADE_ROLLOUT_POLICY INSPECTOR_POLICY BEDROCK_POLICY S3_POLICY NETWORK_SECURITY_DIRECTOR_POLICY You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
UPDATE aws.organizations.policies
SET 
PolicyId = '{{ PolicyId }}',
TargetId = '{{ TargetId }}'
WHERE 
region = '{{ region }}' --required
AND PolicyId = '{{ PolicyId }}' --required
AND TargetId = '{{ TargetId }}' --required;
```
</TabItem>
<TabItem value="update_policy">

Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
UPDATE aws.organizations.policies
SET 
PolicyId = '{{ PolicyId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Content = '{{ Content }}'
WHERE 
region = '{{ region }}' --required
AND PolicyId = '{{ PolicyId }}' --required
RETURNING
Policy;
```
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

Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
DELETE FROM aws.organizations.policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_policy"
    values={[
        { label: 'detach_policy', value: 'detach_policy' },
        { label: 'disable_policy_type', value: 'disable_policy_type' },
        { label: 'enable_policy_type', value: 'enable_policy_type' }
    ]}
>
<TabItem value="detach_policy">

Detaches a policy from a target root, organizational unit (OU), or account. If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate. Every root, OU, and account must have at least one SCP attached. If you want to replace the default FullAWSAccess policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "allow list". If you instead attach a second SCP and leave the FullAWSAccess SCP still attached, and specify "Effect": "Deny" in the second SCP to override the "Effect": "Allow" in the FullAWSAccess policy (or any other attached SCP), you're using the authorization strategy of a "deny list". You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
EXEC aws.organizations.policies.detach_policy 
@region='{{ region }}' --required 
@@json=
'{
"PolicyId": "{{ PolicyId }}", 
"TargetId": "{{ TargetId }}"
}'
;
```
</TabItem>
<TabItem value="disable_policy_type">

Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the EnablePolicyType operation. This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if all features are enabled for the organization. Amazon Web Services recommends that you first use ListRoots to see the status of policy types for a specified root, and then use this operation. You can only call this operation from the management account or a member account that is a delegated administrator. To view the status of available policy types in the organization, use ListRoots.

```sql
EXEC aws.organizations.policies.disable_policy_type 
@region='{{ region }}' --required 
@@json=
'{
"RootId": "{{ RootId }}", 
"PolicyType": "{{ PolicyType }}"
}'
;
```
</TabItem>
<TabItem value="enable_policy_type">

Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the DisablePolicyType operation. This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use ListRoots to see the status of policy types for a specified root, and then use this operation. You can only call this operation from the management account or a member account that is a delegated administrator. You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use ListRoots.

```sql
EXEC aws.organizations.policies.enable_policy_type 
@region='{{ region }}' --required 
@@json=
'{
"RootId": "{{ RootId }}", 
"PolicyType": "{{ PolicyType }}"
}'
;
```
</TabItem>
</Tabs>
