--- 
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
  - repostspace
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

Creates, updates, deletes, gets or lists a <code>spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.repostspace.spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_space"
    values={[
        { label: 'get_space', value: 'get_space' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="get_space">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The Identity Center identifier for the Application Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_status" /></td>
    <td><code>string</code></td>
    <td>The configuration status of the private re:Post. (CONFIGURED, UNCONFIGURED)</td>
</tr>
<tr>
    <td><CopyableCode code="content_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The content size of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the private re:Post was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the private re:Post was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="group_admins" /></td>
    <td><code>array</code></td>
    <td>The list of groups that are administrators of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="random_domain" /></td>
    <td><code>string</code></td>
    <td>The AWS generated subdomain of the private re:Post</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>object</code></td>
    <td>A map of accessor identifiers and their roles.</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The creation or deletion status of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The storage limit of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_email_domains" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The pricing tier of the private re:Post. (BASIC, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="user_admins" /></td>
    <td><code>array</code></td>
    <td>The list of users that are administrators of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users that have onboarded to the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="user_kms_key" /></td>
    <td><code>string</code></td>
    <td>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="vanity_domain" /></td>
    <td><code>string</code></td>
    <td>The custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</td>
</tr>
<tr>
    <td><CopyableCode code="vanity_domain_status" /></td>
    <td><code>string</code></td>
    <td>The approval status of the custom subdomain. (PENDING, APPROVED, UNAPPROVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_spaces">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_status" /></td>
    <td><code>string</code></td>
    <td>The configuration status of the private re:Post. (CONFIGURED, UNCONFIGURED)</td>
</tr>
<tr>
    <td><CopyableCode code="content_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The content size of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the private re:Post was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the private re:Post was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the private re:Post. This is used only to help you identify this private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="random_domain" /></td>
    <td><code>string</code></td>
    <td>The AWS generated subdomain of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The creation/deletion status of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The storage limit of the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_email_domains" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The pricing tier of the private re:Post. (BASIC, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>The number of onboarded users to the private re:Post.</td>
</tr>
<tr>
    <td><CopyableCode code="user_kms_key" /></td>
    <td><code>string</code></td>
    <td>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="vanity_domain" /></td>
    <td><code>string</code></td>
    <td>This custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</td>
</tr>
<tr>
    <td><CopyableCode code="vanity_domain_status" /></td>
    <td><code>string</code></td>
    <td>This approval status of the custom subdomain. (PENDING, APPROVED, UNAPPROVED)</td>
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
    <td><a href="#get_space"><CopyableCode code="get_space" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays information about the AWS re:Post Private private re:Post.</td>
</tr>
<tr>
    <td><a href="#list_spaces"><CopyableCode code="list_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.</td>
</tr>
<tr>
    <td><a href="#create_space"><CopyableCode code="create_space" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subdomain"><code>subdomain</code></a>, <a href="#parameter-tier"><code>tier</code></a></td>
    <td></td>
    <td>Creates an AWS re:Post Private private re:Post.</td>
</tr>
<tr>
    <td><a href="#register_admin"><CopyableCode code="register_admin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-admin_id"><code>admin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a user or group to the list of administrators of the private re:Post.</td>
</tr>
<tr>
    <td><a href="#update_space"><CopyableCode code="update_space" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an existing AWS re:Post Private private re:Post.</td>
</tr>
<tr>
    <td><a href="#deregister_admin"><CopyableCode code="deregister_admin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-admin_id"><code>admin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the user or group from the list of administrators of the private re:Post.</td>
</tr>
<tr>
    <td><a href="#delete_space"><CopyableCode code="delete_space" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AWS re:Post Private private re:Post.</td>
</tr>
<tr>
    <td><a href="#batch_add_role"><CopyableCode code="batch_add_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessorIds"><code>accessorIds</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Add a role to multiple users or groups in a private re:Post.</td>
</tr>
<tr>
    <td><a href="#batch_remove_role"><CopyableCode code="batch_remove_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessorIds"><code>accessorIds</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Remove a role from multiple users or groups in a private re:Post.</td>
</tr>
<tr>
    <td><a href="#send_invites"><CopyableCode code="send_invites" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessorIds"><code>accessorIds</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Sends an invitation email to selected users and groups.</td>
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
<tr id="parameter-admin_id">
    <td><CopyableCode code="admin_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the admin to remove.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_id">
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the private re:Post.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of private re:Posts to include in the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of private re:Posts to return. You receive this token from a previous ListSpaces operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_space"
    values={[
        { label: 'get_space', value: 'get_space' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="get_space">

Displays information about the AWS re:Post Private private re:Post.

```sql
SELECT
name,
application_arn,
arn,
client_id,
configuration_status,
content_size,
create_date_time,
customer_role_arn,
delete_date_time,
description,
group_admins,
identity_store_id,
random_domain,
roles,
space_id,
status,
storage_limit,
supported_email_domains,
tier,
user_admins,
user_count,
user_kms_key,
vanity_domain,
vanity_domain_status
FROM aws.repostspace.spaces
WHERE space_id = '{{ space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_spaces">

Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.

```sql
SELECT
name,
arn,
configuration_status,
content_size,
create_date_time,
delete_date_time,
description,
random_domain,
space_id,
status,
storage_limit,
supported_email_domains,
tier,
user_count,
user_kms_key,
vanity_domain,
vanity_domain_status
FROM aws.repostspace.spaces
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_space"
    values={[
        { label: 'create_space', value: 'create_space' },
        { label: 'register_admin', value: 'register_admin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_space">

Creates an AWS re:Post Private private re:Post.

```sql
INSERT INTO aws.repostspace.spaces (
name,
subdomain,
tier,
description,
userKMSKey,
tags,
roleArn,
supportedEmailDomains,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ subdomain }}' /* required */,
'{{ tier }}' /* required */,
'{{ description }}',
'{{ userKMSKey }}',
'{{ tags }}',
'{{ roleArn }}',
'{{ supportedEmailDomains }}',
'{{ region }}'
RETURNING
space_id
;
```
</TabItem>
<TabItem value="register_admin">

Adds a user or group to the list of administrators of the private re:Post.

```sql
INSERT INTO aws.repostspace.spaces (
space_id,
admin_id,
region
)
SELECT 
'{{ space_id }}',
'{{ admin_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the spaces resource.
    - name: space_id
      value: "{{ space_id }}"
      description: Required parameter for the spaces resource.
    - name: admin_id
      value: "{{ admin_id }}"
      description: Required parameter for the spaces resource.
    - name: name
      value: "{{ name }}"
    - name: subdomain
      value: "{{ subdomain }}"
    - name: tier
      value: "{{ tier }}"
      valid_values: ['BASIC', 'STANDARD']
    - name: description
      value: "{{ description }}"
    - name: userKMSKey
      value: "{{ userKMSKey }}"
    - name: tags
      value: "{{ tags }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: supportedEmailDomains
      value:
        enabled: "{{ enabled }}"
        allowedDomains:
          - "{{ allowedDomains }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_space"
    values={[
        { label: 'update_space', value: 'update_space' }
    ]}
>
<TabItem value="update_space">

Modifies an existing AWS re:Post Private private re:Post.

```sql
UPDATE aws.repostspace.spaces
SET 
description = '{{ description }}',
tier = '{{ tier }}',
roleArn = '{{ roleArn }}',
supportedEmailDomains = '{{ supportedEmailDomains }}'
WHERE 
space_id = '{{ space_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_admin"
    values={[
        { label: 'deregister_admin', value: 'deregister_admin' },
        { label: 'delete_space', value: 'delete_space' }
    ]}
>
<TabItem value="deregister_admin">

Removes the user or group from the list of administrators of the private re:Post.

```sql
DELETE FROM aws.repostspace.spaces
WHERE space_id = '{{ space_id }}' --required
AND admin_id = '{{ admin_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_space">

Deletes an AWS re:Post Private private re:Post.

```sql
DELETE FROM aws.repostspace.spaces
WHERE space_id = '{{ space_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_add_role"
    values={[
        { label: 'batch_add_role', value: 'batch_add_role' },
        { label: 'batch_remove_role', value: 'batch_remove_role' },
        { label: 'send_invites', value: 'send_invites' }
    ]}
>
<TabItem value="batch_add_role">

Add a role to multiple users or groups in a private re:Post.

```sql
EXEC aws.repostspace.spaces.batch_add_role 
@space_id='{{ space_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"accessorIds": "{{ accessorIds }}", 
"role": "{{ role }}"
}'
;
```
</TabItem>
<TabItem value="batch_remove_role">

Remove a role from multiple users or groups in a private re:Post.

```sql
EXEC aws.repostspace.spaces.batch_remove_role 
@space_id='{{ space_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"accessorIds": "{{ accessorIds }}", 
"role": "{{ role }}"
}'
;
```
</TabItem>
<TabItem value="send_invites">

Sends an invitation email to selected users and groups.

```sql
EXEC aws.repostspace.spaces.send_invites 
@space_id='{{ space_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"accessorIds": "{{ accessorIds }}", 
"title": "{{ title }}", 
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
