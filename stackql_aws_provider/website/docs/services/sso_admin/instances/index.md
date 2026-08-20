--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance"
    values={[
        { label: 'describe_instance', value: 'describe_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="describe_instance">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration_details" /></td>
    <td><code>object</code></td>
    <td>Contains the encryption configuration for your IAM Identity Center instance, including the encryption status, KMS key type, and KMS key ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the identity store that is connected to the instance of IAM Identity Center. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the instance name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account for which the instance was created. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_sets_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether permission sets are enabled for this Identity Center instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the instance. (CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_IN_PROGRESS, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Provides additional context about the current status of the IAM Identity Center instance. This field is particularly useful when an instance is in a non-ACTIVE state, such as CREATE_FAILED. When an instance fails to create or update, this field contains information about the cause, which may include issues with KMS key configuration, permission problems with the specified KMS key, or service-related errors. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instances">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Identity Center instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the identity store that is connected to the Identity Center instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Identity Center instance. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID number of the owner of the Identity Center instance. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_region" /></td>
    <td><code>string</code></td>
    <td>The primary Region where the IAM Identity Center instance was originally enabled. The primary Region cannot be removed. (pattern: &lt;code&gt;(&#91;a-z&#93;+-)&#123;2,3&#125;\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The list of Regions enabled in the IAM Identity Center instance, including Regions with ACTIVE, ADDING, or REMOVING status.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this Identity Center instance. (CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_IN_PROGRESS, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Provides additional context about the current status of the IAM Identity Center instance. This field is particularly useful when an instance is in a non-ACTIVE state, such as CREATE_FAILED. When an instance creation fails, this field contains information about the cause, which may include issues with KMS key configuration or insufficient permissions. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_instance"><CopyableCode code="describe_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of an instance of IAM Identity Center. The status can be one of the following: CREATE_IN_PROGRESS - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of ACTIVE. While the instance is in the CREATE_IN_PROGRESS state, you can call only DescribeInstance and DeleteInstance operations. DELETE_IN_PROGRESS - The instance is being deleted. Returns AccessDeniedException after the delete operation completes. ACTIVE - The instance is active.</td>
</tr>
<tr>
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the details of the organization and account instances of IAM Identity Center that were created in or visible to the account calling this API.</td>
</tr>
<tr>
    <td><a href="#create_instance"><CopyableCode code="create_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an instance of IAM Identity Center for a standalone Amazon Web Services account that is not managed by Organizations or a member Amazon Web Services account in an organization. You can create only one instance per account and across all Amazon Web Services Regions. The CreateInstance request is rejected if the following apply: The instance is created within the organization management account. An instance already exists in the same account.</td>
</tr>
<tr>
    <td><a href="#update_instance"><CopyableCode code="update_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a></td>
    <td></td>
    <td>Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account. In a single UpdateInstance request, you can perform only one of the following operations: Update the encryption configuration of the instance by specifying EncryptionConfiguration. Enable permission sets for the instance by specifying PermissionSetsEnabled. A request that specifies both EncryptionConfiguration and PermissionSetsEnabled returns a ValidationException. To perform both operations, call UpdateInstance separately for each. The two calls can be made in parallel.</td>
</tr>
<tr>
    <td><a href="#delete_instance"><CopyableCode code="delete_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the instance of IAM Identity Center. Only the account that owns the instance can call this API. Neither the delegated administrator nor member account can delete the organization instance, but those roles can delete their own instance.</td>
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
    defaultValue="describe_instance"
    values={[
        { label: 'describe_instance', value: 'describe_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="describe_instance">

Returns the details of an instance of IAM Identity Center. The status can be one of the following: CREATE_IN_PROGRESS - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of ACTIVE. While the instance is in the CREATE_IN_PROGRESS state, you can call only DescribeInstance and DeleteInstance operations. DELETE_IN_PROGRESS - The instance is being deleted. Returns AccessDeniedException after the delete operation completes. ACTIVE - The instance is active.

```sql
SELECT
created_date,
encryption_configuration_details,
identity_store_id,
instance_arn,
name,
owner_account_id,
permission_sets_enabled,
status,
status_reason
FROM aws.sso_admin.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instances">

Lists the details of the organization and account instances of IAM Identity Center that were created in or visible to the account calling this API.

```sql
SELECT
created_date,
identity_store_id,
instance_arn,
name,
owner_account_id,
primary_region,
regions,
status,
status_reason
FROM aws.sso_admin.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance"
    values={[
        { label: 'create_instance', value: 'create_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance">

Creates an instance of IAM Identity Center for a standalone Amazon Web Services account that is not managed by Organizations or a member Amazon Web Services account in an organization. You can create only one instance per account and across all Amazon Web Services Regions. The CreateInstance request is rejected if the following apply: The instance is created within the organization management account. An instance already exists in the same account.

```sql
INSERT INTO aws.sso_admin.instances (
Name,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
instance_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the instance of IAM Identity Center.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
    - name: Tags
      description: |
        Specifies tags to be attached to the instance of IAM Identity Center.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance"
    values={[
        { label: 'update_instance', value: 'update_instance' }
    ]}
>
<TabItem value="update_instance">

Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account. In a single UpdateInstance request, you can perform only one of the following operations: Update the encryption configuration of the instance by specifying EncryptionConfiguration. Enable permission sets for the instance by specifying PermissionSetsEnabled. A request that specifies both EncryptionConfiguration and PermissionSetsEnabled returns a ValidationException. To perform both operations, call UpdateInstance separately for each. The two calls can be made in parallel.

```sql
UPDATE aws.sso_admin.instances
SET 
Name = '{{ Name }}',
InstanceArn = '{{ InstanceArn }}',
EncryptionConfiguration = '{{ EncryptionConfiguration }}',
PermissionSetsEnabled = {{ PermissionSetsEnabled }}
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance"
    values={[
        { label: 'delete_instance', value: 'delete_instance' }
    ]}
>
<TabItem value="delete_instance">

Deletes the instance of IAM Identity Center. Only the account that owns the instance can call this API. Neither the delegated administrator nor member account can delete the organization instance, but those roles can delete their own instance.

```sql
DELETE FROM aws.sso_admin.instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
