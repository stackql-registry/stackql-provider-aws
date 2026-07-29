--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - workmail
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization"
    values={[
        { label: 'describe_organization', value: 'describe_organization' },
        { label: 'list_organizations', value: 'list_organizations' }
    ]}
>
<TabItem value="describe_organization">

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
    <td>The Amazon Resource Name (ARN) of the organization. (pattern: &lt;code&gt;arn:aws:workmail:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias for an organization. (pattern: &lt;code&gt;^(?!d-)(&#91;\da-zA-Z&#93;+)(&#91;-&#93;&#91;\da-zA-Z&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="default_mail_domain" /></td>
    <td><code>string</code></td>
    <td>The default mail domain associated with the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the directory associated with an WorkMail organization.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_type" /></td>
    <td><code>string</code></td>
    <td>The type of directory associated with the WorkMail organization.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>(Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="interoperability_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if interoperability is enabled for this organization.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_admin" /></td>
    <td><code>string</code></td>
    <td>The user ID of the migration admin if migration is enabled for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of an organization. (pattern: &lt;code&gt;^m-&#91;0-9a-f&#93;&#123;32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of an organization.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_organizations">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias associated with the organization. (pattern: &lt;code&gt;^(?!d-)(&#91;\da-zA-Z&#93;+)(&#91;-&#93;&#91;\da-zA-Z&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="default_mail_domain" /></td>
    <td><code>string</code></td>
    <td>The default email domain associated with the organization. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The identifier associated with the organization. (pattern: &lt;code&gt;^m-&#91;0-9a-f&#93;&#123;32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state associated with the organization.</td>
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
    <td><a href="#describe_organization"><CopyableCode code="describe_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides more information regarding a given organization based on its identifier.</td>
</tr>
<tr>
    <td><a href="#list_organizations"><CopyableCode code="list_organizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns summaries of the customer's organizations.</td>
</tr>
<tr>
    <td><a href="#register_to_work_mail"><CopyableCode code="register_to_work_mail" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a>, <a href="#parameter-Email"><code>Email</code></a></td>
    <td></td>
    <td>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing. The equivalent console functionality for this operation is Enable. Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.</td>
</tr>
<tr>
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a></td>
    <td></td>
    <td>Adds an alias to the set of a given member (user or group) of WorkMail.</td>
</tr>
<tr>
    <td><a href="#create_organization"><CopyableCode code="create_organization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the WorkMail Administrator Guide. You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see Adding a domain and Choosing the default domain in the WorkMail Administrator Guide. Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</td>
</tr>
<tr>
    <td><a href="#update_mailbox_quota"><CopyableCode code="update_mailbox_quota" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-MailboxQuota"><code>MailboxQuota</code></a></td>
    <td></td>
    <td>Updates a user's current mailbox quota for a specified organization and user.</td>
</tr>
<tr>
    <td><a href="#update_primary_email_address"><CopyableCode code="update_primary_email_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a>, <a href="#parameter-Email"><code>Email</code></a></td>
    <td></td>
    <td>Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.</td>
</tr>
<tr>
    <td><a href="#put_retention_policy"><CopyableCode code="put_retention_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-FolderConfigurations"><code>FolderConfigurations</code></a></td>
    <td></td>
    <td>Puts a retention policy to the specified organization.</td>
</tr>
<tr>
    <td><a href="#delete_alias"><CopyableCode code="delete_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove one or more specified aliases from a set of aliases for a given user.</td>
</tr>
<tr>
    <td><a href="#delete_organization"><CopyableCode code="delete_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the WorkMail Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#delete_retention_policy"><CopyableCode code="delete_retention_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified retention policy from the specified organization.</td>
</tr>
<tr>
    <td><a href="#cancel_mailbox_export_job"><CopyableCode code="cancel_mailbox_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Cancels a mailbox export job. If the mailbox export job is near completion, it might not be possible to cancel it.</td>
</tr>
<tr>
    <td><a href="#deregister_from_work_mail"><CopyableCode code="deregister_from_work_mail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a></td>
    <td></td>
    <td>Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable.</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Allows the administrator to reset the password for a user.</td>
</tr>
<tr>
    <td><a href="#start_mailbox_export_job"><CopyableCode code="start_mailbox_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-KmsKeyArn"><code>KmsKeyArn</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-S3Prefix"><code>S3Prefix</code></a></td>
    <td></td>
    <td>Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Exporting mailbox content in the WorkMail Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#test_availability_configuration"><CopyableCode code="test_availability_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a SourceArn or SourceAccount header. The request must contain either one provider definition (EwsProvider or LambdaProvider) or the DomainName parameter. If the DomainName parameter is provided, the configuration stored under the DomainName will be tested.</td>
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
    defaultValue="describe_organization"
    values={[
        { label: 'describe_organization', value: 'describe_organization' },
        { label: 'list_organizations', value: 'list_organizations' }
    ]}
>
<TabItem value="describe_organization">

Provides more information regarding a given organization based on its identifier.

```sql
SELECT
arn,
alias,
completed_date,
default_mail_domain,
directory_id,
directory_type,
error_message,
interoperability_enabled,
migration_admin,
organization_id,
state
FROM aws.workmail.organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_organizations">

Returns summaries of the customer's organizations.

```sql
SELECT
alias,
default_mail_domain,
error_message,
organization_id,
state
FROM aws.workmail.organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_to_work_mail"
    values={[
        { label: 'register_to_work_mail', value: 'register_to_work_mail' },
        { label: 'create_alias', value: 'create_alias' },
        { label: 'create_organization', value: 'create_organization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_to_work_mail">

Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing. The equivalent console functionality for this operation is Enable. Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.

```sql
INSERT INTO aws.workmail.organizations (
OrganizationId,
EntityId,
Email,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ EntityId }}' /* required */,
'{{ Email }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_alias">

Adds an alias to the set of a given member (user or group) of WorkMail.

```sql
INSERT INTO aws.workmail.organizations (
OrganizationId,
EntityId,
Alias,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ EntityId }}' /* required */,
'{{ Alias }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_organization">

Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the WorkMail Administrator Guide. You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see Adding a domain and Choosing the default domain in the WorkMail Administrator Guide. Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.

```sql
INSERT INTO aws.workmail.organizations (
DirectoryId,
Alias,
ClientToken,
Domains,
KmsKeyArn,
EnableInteroperability,
region
)
SELECT 
'{{ DirectoryId }}',
'{{ Alias }}',
'{{ ClientToken }}',
'{{ Domains }}',
'{{ KmsKeyArn }}',
{{ EnableInteroperability }},
'{{ region }}'
RETURNING
organization_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: organizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the organizations resource.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The organization under which the member (user or group) exists.
    - name: EntityId
      value: "{{ EntityId }}"
      description: |
        The member (user or group) to which this alias is added.
    - name: Email
      value: "{{ Email }}"
      description: |
        The email for the user, group, or resource to be updated.
    - name: Alias
      value: "{{ Alias }}"
      description: |
        The organization alias.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The AWS Directory Service directory ID.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        The idempotency token associated with the request.
    - name: Domains
      description: |
        The email domains to associate with the organization.
      value:
        - DomainName: "{{ DomainName }}"
          HostedZoneId: "{{ HostedZoneId }}"
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
      description: |
        The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.
    - name: EnableInteroperability
      value: {{ EnableInteroperability }}
      description: |
        When true, allows organization interoperability between WorkMail and Microsoft Exchange. If true, you must include a AD Connector directory ID in the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mailbox_quota"
    values={[
        { label: 'update_mailbox_quota', value: 'update_mailbox_quota' },
        { label: 'update_primary_email_address', value: 'update_primary_email_address' }
    ]}
>
<TabItem value="update_mailbox_quota">

Updates a user's current mailbox quota for a specified organization and user.

```sql
UPDATE aws.workmail.organizations
SET 
OrganizationId = '{{ OrganizationId }}',
UserId = '{{ UserId }}',
MailboxQuota = {{ MailboxQuota }}
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND UserId = '{{ UserId }}' --required
AND MailboxQuota = '{{ MailboxQuota }}' --required;
```
</TabItem>
<TabItem value="update_primary_email_address">

Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.

```sql
UPDATE aws.workmail.organizations
SET 
OrganizationId = '{{ OrganizationId }}',
EntityId = '{{ EntityId }}',
Email = '{{ Email }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND EntityId = '{{ EntityId }}' --required
AND Email = '{{ Email }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_retention_policy"
    values={[
        { label: 'put_retention_policy', value: 'put_retention_policy' }
    ]}
>
<TabItem value="put_retention_policy">

Puts a retention policy to the specified organization.

```sql
REPLACE aws.workmail.organizations
SET 
OrganizationId = '{{ OrganizationId }}',
Id = '{{ Id }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
FolderConfigurations = '{{ FolderConfigurations }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND Name = '{{ Name }}' --required
AND FolderConfigurations = '{{ FolderConfigurations }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alias"
    values={[
        { label: 'delete_alias', value: 'delete_alias' },
        { label: 'delete_organization', value: 'delete_organization' },
        { label: 'delete_retention_policy', value: 'delete_retention_policy' }
    ]}
>
<TabItem value="delete_alias">

Remove one or more specified aliases from a set of aliases for a given user.

```sql
DELETE FROM aws.workmail.organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_organization">

Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the WorkMail Administrator Guide.

```sql
DELETE FROM aws.workmail.organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_retention_policy">

Deletes the specified retention policy from the specified organization.

```sql
DELETE FROM aws.workmail.organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_mailbox_export_job"
    values={[
        { label: 'cancel_mailbox_export_job', value: 'cancel_mailbox_export_job' },
        { label: 'deregister_from_work_mail', value: 'deregister_from_work_mail' },
        { label: 'reset_password', value: 'reset_password' },
        { label: 'start_mailbox_export_job', value: 'start_mailbox_export_job' },
        { label: 'test_availability_configuration', value: 'test_availability_configuration' }
    ]}
>
<TabItem value="cancel_mailbox_export_job">

Cancels a mailbox export job. If the mailbox export job is near completion, it might not be possible to cancel it.

```sql
EXEC aws.workmail.organizations.cancel_mailbox_export_job 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"JobId": "{{ JobId }}", 
"OrganizationId": "{{ OrganizationId }}"
}'
;
```
</TabItem>
<TabItem value="deregister_from_work_mail">

Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable.

```sql
EXEC aws.workmail.organizations.deregister_from_work_mail 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"EntityId": "{{ EntityId }}"
}'
;
```
</TabItem>
<TabItem value="reset_password">

Allows the administrator to reset the password for a user.

```sql
EXEC aws.workmail.organizations.reset_password 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"UserId": "{{ UserId }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
<TabItem value="start_mailbox_export_job">

Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Exporting mailbox content in the WorkMail Administrator Guide.

```sql
EXEC aws.workmail.organizations.start_mailbox_export_job 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"OrganizationId": "{{ OrganizationId }}", 
"EntityId": "{{ EntityId }}", 
"Description": "{{ Description }}", 
"RoleArn": "{{ RoleArn }}", 
"KmsKeyArn": "{{ KmsKeyArn }}", 
"S3BucketName": "{{ S3BucketName }}", 
"S3Prefix": "{{ S3Prefix }}"
}'
;
```
</TabItem>
<TabItem value="test_availability_configuration">

Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a SourceArn or SourceAccount header. The request must contain either one provider definition (EwsProvider or LambdaProvider) or the DomainName parameter. If the DomainName parameter is provided, the configuration stored under the DomainName will be tested.

```sql
EXEC aws.workmail.organizations.test_availability_configuration 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"DomainName": "{{ DomainName }}", 
"EwsProvider": "{{ EwsProvider }}", 
"LambdaProvider": "{{ LambdaProvider }}"
}'
;
```
</TabItem>
</Tabs>
