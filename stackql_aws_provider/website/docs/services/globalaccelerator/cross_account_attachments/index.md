--- 
title: cross_account_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_account_attachments
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>cross_account_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_account_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.cross_account_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cross_account_attachment"
    values={[
        { label: 'describe_cross_account_attachment', value: 'describe_cross_account_attachment' },
        { label: 'list_cross_account_attachments', value: 'list_cross_account_attachments' }
    ]}
>
<TabItem value="describe_cross_account_attachment">

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
    <td><CopyableCode code="attachment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cross-account attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cross-account attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cross-account attachment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cross-account attachment. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principals" /></td>
    <td><code>array</code></td>
    <td>The principals included in the cross-account attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources included in the cross-account attachment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cross_account_attachments">

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
    <td><CopyableCode code="attachment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cross-account attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cross-account attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cross-account attachment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cross-account attachment. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principals" /></td>
    <td><code>array</code></td>
    <td>The principals included in the cross-account attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources included in the cross-account attachment.</td>
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
    <td><a href="#describe_cross_account_attachment"><CopyableCode code="describe_cross_account_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets configuration information about a cross-account attachment.</td>
</tr>
<tr>
    <td><a href="#list_cross_account_attachments"><CopyableCode code="list_cross_account_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the cross-account attachments that have been created in Global Accelerator.</td>
</tr>
<tr>
    <td><a href="#create_cross_account_attachment"><CopyableCode code="create_cross_account_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create a cross-account attachment in Global Accelerator. You create a cross-account attachment to specify the principals who have permission to work with resources in accelerators in their own account. You specify, in the same attachment, the resources that are shared. A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment, you must sign in to an account specified as a principal. Then, you can work with resources that are listed, with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal, anyone with permission to make updates to the accelerator can work with resources that are listed in the attachment. Specify each principal and resource separately. To specify two CIDR address pools, list them individually under Resources, and so on. For a command line operation, for example, you might use a statement like the following: "Resources": &#91;&#123;"Cidr": "169.254.60.0/24"&#125;,&#123;"Cidr": "169.254.59.0/24"&#125;&#93; For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_cross_account_attachment"><CopyableCode code="update_cross_account_attachment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AttachmentArn"><code>AttachmentArn</code></a></td>
    <td></td>
    <td>Update a cross-account attachment to add or remove principals or resources. When you update an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator revokes the permission for specific resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_cross_account_attachment"><CopyableCode code="delete_cross_account_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a cross-account attachment. When you delete an attachment, Global Accelerator revokes the permission to use the resources in the attachment from all principals in the list of principals. Global Accelerator revokes the permission for specific resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.</td>
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
    defaultValue="describe_cross_account_attachment"
    values={[
        { label: 'describe_cross_account_attachment', value: 'describe_cross_account_attachment' },
        { label: 'list_cross_account_attachments', value: 'list_cross_account_attachments' }
    ]}
>
<TabItem value="describe_cross_account_attachment">

Gets configuration information about a cross-account attachment.

```sql
SELECT
attachment_arn,
created_time,
last_modified_time,
name,
principals,
resources
FROM aws.globalaccelerator.cross_account_attachments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cross_account_attachments">

List the cross-account attachments that have been created in Global Accelerator.

```sql
SELECT
attachment_arn,
created_time,
last_modified_time,
name,
principals,
resources
FROM aws.globalaccelerator.cross_account_attachments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cross_account_attachment"
    values={[
        { label: 'create_cross_account_attachment', value: 'create_cross_account_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cross_account_attachment">

Create a cross-account attachment in Global Accelerator. You create a cross-account attachment to specify the principals who have permission to work with resources in accelerators in their own account. You specify, in the same attachment, the resources that are shared. A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment, you must sign in to an account specified as a principal. Then, you can work with resources that are listed, with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal, anyone with permission to make updates to the accelerator can work with resources that are listed in the attachment. Specify each principal and resource separately. To specify two CIDR address pools, list them individually under Resources, and so on. For a command line operation, for example, you might use a statement like the following: "Resources": [&#123;"Cidr": "169.254.60.0/24"&#125;,&#123;"Cidr": "169.254.59.0/24"&#125;] For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.

```sql
INSERT INTO aws.globalaccelerator.cross_account_attachments (
Name,
Principals,
Resources,
IdempotencyToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Principals }}',
'{{ Resources }}',
'{{ IdempotencyToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
cross_account_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cross_account_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cross_account_attachments resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the cross-account attachment.
    - name: Principals
      value:
        - "{{ Principals }}"
      description: |
        The principals to include in the cross-account attachment. A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an accelerator.
    - name: Resources
      description: |
        The Amazon Resource Names (ARNs) for the resources to include in the cross-account attachment. A resource can be any supported Amazon Web Services resource type for Global Accelerator or a CIDR range for a bring your own IP address (BYOIP) address pool.
      value:
        - EndpointId: "{{ EndpointId }}"
          Cidr: "{{ Cidr }}"
          Region: "{{ Region }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
    - name: Tags
      description: |
        Add tags for a cross-account attachment. For more information, see Tagging in Global Accelerator in the Global Accelerator Developer Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cross_account_attachment"
    values={[
        { label: 'update_cross_account_attachment', value: 'update_cross_account_attachment' }
    ]}
>
<TabItem value="update_cross_account_attachment">

Update a cross-account attachment to add or remove principals or resources. When you update an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator revokes the permission for specific resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.

```sql
UPDATE aws.globalaccelerator.cross_account_attachments
SET 
AttachmentArn = '{{ AttachmentArn }}',
Name = '{{ Name }}',
AddPrincipals = '{{ AddPrincipals }}',
RemovePrincipals = '{{ RemovePrincipals }}',
AddResources = '{{ AddResources }}',
RemoveResources = '{{ RemoveResources }}'
WHERE 
region = '{{ region }}' --required
AND AttachmentArn = '{{ AttachmentArn }}' --required
RETURNING
cross_account_attachment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cross_account_attachment"
    values={[
        { label: 'delete_cross_account_attachment', value: 'delete_cross_account_attachment' }
    ]}
>
<TabItem value="delete_cross_account_attachment">

Delete a cross-account attachment. When you delete an attachment, Global Accelerator revokes the permission to use the resources in the attachment from all principals in the list of principals. Global Accelerator revokes the permission for specific resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.

```sql
DELETE FROM aws.globalaccelerator.cross_account_attachments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
