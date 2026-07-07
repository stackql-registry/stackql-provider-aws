--- 
title: email_address
hide_title: false
hide_table_of_contents: false
keywords:
  - email_address
  - connect
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

Creates, updates, deletes, gets or lists an <code>email_address</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_address" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.email_address" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_email_address"
    values={[
        { label: 'describe_email_address', value: 'describe_email_address' }
    ]}
>
<TabItem value="describe_email_address">

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
    <td><CopyableCode code="AliasConfigurations" /></td>
    <td><code>array</code></td>
    <td>A list of alias configurations associated with this email address. Contains details about email addresses that forward to this primary email address. The list can contain at most one alias configuration per email address.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTimestamp" /></td>
    <td><code>string</code></td>
    <td>The email address creation timestamp in ISO 8601 Datetime.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the email address.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of email address</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address, including the domain. (pattern: &lt;code&gt;&#91;^\s@&#93;+@&#91;^\s@&#93;+\.&#91;^\s@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddressArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the email address.</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddressId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the email address.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The email address last modification timestamp in ISO 8601 Datetime.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_email_address"><CopyableCode code="describe_email_address" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-email_address_id"><code>email_address_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe email address form the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#create_email_address"><CopyableCode code="create_email_address" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddress"><code>EmailAddress</code></a></td>
    <td></td>
    <td>Create new email address in the specified Amazon Connect instance. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#associate_email_address_alias"><CopyableCode code="associate_email_address_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email_address_id"><code>email_address_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasConfiguration"><code>AliasConfiguration</code></a></td>
    <td></td>
    <td>Associates an email address alias with an existing email address in an Amazon Connect instance. This creates a forwarding relationship where emails sent to the alias email address are automatically forwarded to the primary email address. Use cases Following are common uses cases for this API: Unified customer support: Create multiple entry points (for example, support@example.com, help@example.com, customercare@example.com) that all forward to a single agent queue for streamlined management. Department consolidation: Forward emails from legacy department addresses (for example, sales@example.com, info@example.com) to a centralized customer service email during organizational restructuring. Brand management: Enable you to use familiar brand-specific email addresses that forward to the appropriate Amazon Connect instance email address. Important things to know Each email address can have a maximum of one alias. You cannot create multiple aliases for the same email address. If the alias email address already receives direct emails, it continues to receive direct emails plus forwarded emails. You cannot chain email aliases together (that is, create an alias of an alias). AssociateEmailAddressAlias does not return the following information: A confirmation of the alias relationship details (you must call DescribeEmailAddress to verify). The timestamp of when the association occurred. The status of the forwarding configuration. Endpoints: See Amazon Connect endpoints and quotas. Related operations DisassociateEmailAddressAlias: Removes the alias association between two email addresses in an Amazon Connect instance. DescribeEmailAddress: View current alias configurations for an email address. SearchEmailAddresses: Find email addresses and their alias relationships across an instance. CreateEmailAddress: Create new email addresses that can participate in alias relationships. DeleteEmailAddress: Remove email addresses (automatically removes any alias relationships). UpdateEmailAddressMetadata: Modify email address properties (does not affect alias relationships).</td>
</tr>
<tr>
    <td><a href="#update_email_address_metadata"><CopyableCode code="update_email_address_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-email_address_id"><code>email_address_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an email address metadata. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#delete_email_address"><CopyableCode code="delete_email_address" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-email_address_id"><code>email_address_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes email address from the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#disassociate_email_address_alias"><CopyableCode code="disassociate_email_address_alias" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email_address_id"><code>email_address_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasConfiguration"><code>AliasConfiguration</code></a></td>
    <td></td>
    <td>Removes the alias association between two email addresses in an Amazon Connect instance. After disassociation, emails sent to the former alias email address are no longer forwarded to the primary email address. Both email addresses continue to exist independently and can receive emails directly. Use cases Following are common uses cases for this API: Department separation: Remove alias relationships when splitting a consolidated support queue back into separate department-specific queues. Email address retirement: Cleanly remove forwarding relationships before decommissioning old email addresses. Organizational restructuring: Reconfigure email routing when business processes change and aliases are no longer needed. Important things to know Concurrent operations: This API uses distributed locking, so concurrent operations on the same email addresses may be temporarily blocked. Emails sent to the former alias address are still delivered directly to that address if it exists. You do not need to delete the email addresses after disassociation. Both addresses remain active independently. After a successful disassociation, you can immediately create a new alias relationship with the same addresses. 200 status means alias was successfully disassociated. DisassociateEmailAddressAlias does not return the following information: Details in the response about the email that was disassociated. The response returns an empty body. The timestamp of when the disassociation occurred. Endpoints: See Amazon Connect endpoints and quotas. Related operations AssociateEmailAddressAlias: Associates an email address alias with an existing email address in an Amazon Connect instance. DescribeEmailAddress: View current alias configurations for an email address. SearchEmailAddresses: Find email addresses and their alias relationships across an instance. CreateEmailAddress: Create new email addresses that can participate in alias relationships. DeleteEmailAddress: Remove email addresses (automatically removes any alias relationships). UpdateEmailAddressMetadata: Modify email address properties (does not affect alias relationships).</td>
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
<tr id="parameter-email_address_id">
    <td><CopyableCode code="email_address_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the email address.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_email_address"
    values={[
        { label: 'describe_email_address', value: 'describe_email_address' }
    ]}
>
<TabItem value="describe_email_address">

Describe email address form the specified Amazon Connect instance.

```sql
SELECT
AliasConfigurations,
CreateTimestamp,
Description,
DisplayName,
EmailAddress,
EmailAddressArn,
EmailAddressId,
ModifiedTimestamp,
Tags
FROM aws.connect.email_address
WHERE instance_id = '{{ instance_id }}' -- required
AND email_address_id = '{{ email_address_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_email_address"
    values={[
        { label: 'create_email_address', value: 'create_email_address' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_email_address">

Create new email address in the specified Amazon Connect instance. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.connect.email_address (
Description,
EmailAddress,
DisplayName,
Tags,
ClientToken,
instance_id,
region
)
SELECT 
'{{ Description }}',
'{{ EmailAddress }}' /* required */,
'{{ DisplayName }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
EmailAddressArn,
EmailAddressId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_address
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the email_address resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_address resource.
    - name: Description
      value: "{{ Description }}"
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_email_address_alias"
    values={[
        { label: 'associate_email_address_alias', value: 'associate_email_address_alias' },
        { label: 'update_email_address_metadata', value: 'update_email_address_metadata' }
    ]}
>
<TabItem value="associate_email_address_alias">

Associates an email address alias with an existing email address in an Amazon Connect instance. This creates a forwarding relationship where emails sent to the alias email address are automatically forwarded to the primary email address. Use cases Following are common uses cases for this API: Unified customer support: Create multiple entry points (for example, support@example.com, help@example.com, customercare@example.com) that all forward to a single agent queue for streamlined management. Department consolidation: Forward emails from legacy department addresses (for example, sales@example.com, info@example.com) to a centralized customer service email during organizational restructuring. Brand management: Enable you to use familiar brand-specific email addresses that forward to the appropriate Amazon Connect instance email address. Important things to know Each email address can have a maximum of one alias. You cannot create multiple aliases for the same email address. If the alias email address already receives direct emails, it continues to receive direct emails plus forwarded emails. You cannot chain email aliases together (that is, create an alias of an alias). AssociateEmailAddressAlias does not return the following information: A confirmation of the alias relationship details (you must call DescribeEmailAddress to verify). The timestamp of when the association occurred. The status of the forwarding configuration. Endpoints: See Amazon Connect endpoints and quotas. Related operations DisassociateEmailAddressAlias: Removes the alias association between two email addresses in an Amazon Connect instance. DescribeEmailAddress: View current alias configurations for an email address. SearchEmailAddresses: Find email addresses and their alias relationships across an instance. CreateEmailAddress: Create new email addresses that can participate in alias relationships. DeleteEmailAddress: Remove email addresses (automatically removes any alias relationships). UpdateEmailAddressMetadata: Modify email address properties (does not affect alias relationships).

```sql
UPDATE aws.connect.email_address
SET 
AliasConfiguration = '{{ AliasConfiguration }}',
ClientToken = '{{ ClientToken }}'
WHERE 
email_address_id = '{{ email_address_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND AliasConfiguration = '{{ AliasConfiguration }}' --required;
```
</TabItem>
<TabItem value="update_email_address_metadata">

Updates an email address metadata. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide.

```sql
UPDATE aws.connect.email_address
SET 
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND email_address_id = '{{ email_address_id }}' --required
AND region = '{{ region }}' --required
RETURNING
EmailAddressArn,
EmailAddressId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_address"
    values={[
        { label: 'delete_email_address', value: 'delete_email_address' }
    ]}
>
<TabItem value="delete_email_address">

Deletes email address from the specified Amazon Connect instance.

```sql
DELETE FROM aws.connect.email_address
WHERE instance_id = '{{ instance_id }}' --required
AND email_address_id = '{{ email_address_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_email_address_alias"
    values={[
        { label: 'disassociate_email_address_alias', value: 'disassociate_email_address_alias' }
    ]}
>
<TabItem value="disassociate_email_address_alias">

Removes the alias association between two email addresses in an Amazon Connect instance. After disassociation, emails sent to the former alias email address are no longer forwarded to the primary email address. Both email addresses continue to exist independently and can receive emails directly. Use cases Following are common uses cases for this API: Department separation: Remove alias relationships when splitting a consolidated support queue back into separate department-specific queues. Email address retirement: Cleanly remove forwarding relationships before decommissioning old email addresses. Organizational restructuring: Reconfigure email routing when business processes change and aliases are no longer needed. Important things to know Concurrent operations: This API uses distributed locking, so concurrent operations on the same email addresses may be temporarily blocked. Emails sent to the former alias address are still delivered directly to that address if it exists. You do not need to delete the email addresses after disassociation. Both addresses remain active independently. After a successful disassociation, you can immediately create a new alias relationship with the same addresses. 200 status means alias was successfully disassociated. DisassociateEmailAddressAlias does not return the following information: Details in the response about the email that was disassociated. The response returns an empty body. The timestamp of when the disassociation occurred. Endpoints: See Amazon Connect endpoints and quotas. Related operations AssociateEmailAddressAlias: Associates an email address alias with an existing email address in an Amazon Connect instance. DescribeEmailAddress: View current alias configurations for an email address. SearchEmailAddresses: Find email addresses and their alias relationships across an instance. CreateEmailAddress: Create new email addresses that can participate in alias relationships. DeleteEmailAddress: Remove email addresses (automatically removes any alias relationships). UpdateEmailAddressMetadata: Modify email address properties (does not affect alias relationships).

```sql
EXEC aws.connect.email_address.disassociate_email_address_alias 
@email_address_id='{{ email_address_id }}' --required, 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AliasConfiguration": "{{ AliasConfiguration }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
