--- 
title: related_items
hide_title: false
hide_table_of_contents: false
keywords:
  - related_items
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>related_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="related_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.related_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_related_items"
    values={[
        { label: 'search_related_items', value: 'search_related_items' }
    ]}
>
<TabItem value="search_related_items">

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
    <td><CopyableCode code="associationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which a related item was associated with a case.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Represents the content of a particular type of related item.</td>
</tr>
<tr>
    <td><CopyableCode code="performedBy" /></td>
    <td><code>object</code></td>
    <td>Represents the entity that performed the action.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedItemId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of a related item.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Type of a related item. (Contact, Comment, File, Sla, ConnectCase, Custom)</td>
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
    <td><a href="#search_related_items"><CopyableCode code="search_related_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for related items that are associated with a case. If no filters are provided, this returns all related items associated with a case.</td>
</tr>
<tr>
    <td><a href="#create_related_item"><CopyableCode code="create_related_item" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a related item (comments, tasks, and contacts) and associates it with a case. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas. Use cases Following are examples of related items that you may want to associate with a case: Related contacts, such as calls, chats, emails tasks Comments, for agent notes SLAs, to capture target resolution goals Cases, to capture related Amazon Connect Cases Files, such as policy documentation or customer-provided attachments Custom related items, which provide flexibility for you to define related items that such as bookings, orders, products, notices, and more Important things to know If you are associating a contact to a case by passing in Contact for a type, you must have DescribeContact permission on the ARN of the contact that you provide in content.contact.contactArn. A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a contactArn). All Related Items have their own internal identifier, the relatedItemArn. Examples of related items include comments and contacts. If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide. The type field is reserved for internal use only. Endpoints: See Amazon Connect endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#update_related_item"><CopyableCode code="update_related_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-related_item_id"><code>related_item_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Updates the content of a related item associated with a case. The following related item types are supported: Comment - Update the text content of an existing comment Custom - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas. Important things to know When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed. If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide. System case fields cannot be used in a custom related item. Endpoints: See Amazon Connect endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#delete_related_item"><CopyableCode code="delete_related_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-related_item_id"><code>related_item_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the related item resource under a case. This API cannot be used on a FILE type related attachment. To delete this type of file, use the DeleteAttachedFile API</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the case.</td>
</tr>
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the Cases domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-related_item_id">
    <td><CopyableCode code="related_item_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of a related item.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_related_items"
    values={[
        { label: 'search_related_items', value: 'search_related_items' }
    ]}
>
<TabItem value="search_related_items">

Searches for related items that are associated with a case. If no filters are provided, this returns all related items associated with a case.

```sql
SELECT
associationTime,
content,
performedBy,
relatedItemId,
tags,
type_
FROM aws.connectcases.related_items
WHERE domain_id = '{{ domain_id }}' -- required
AND case_id = '{{ case_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_related_item"
    values={[
        { label: 'create_related_item', value: 'create_related_item' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_related_item">

Creates a related item (comments, tasks, and contacts) and associates it with a case. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas. Use cases Following are examples of related items that you may want to associate with a case: Related contacts, such as calls, chats, emails tasks Comments, for agent notes SLAs, to capture target resolution goals Cases, to capture related Amazon Connect Cases Files, such as policy documentation or customer-provided attachments Custom related items, which provide flexibility for you to define related items that such as bookings, orders, products, notices, and more Important things to know If you are associating a contact to a case by passing in Contact for a type, you must have DescribeContact permission on the ARN of the contact that you provide in content.contact.contactArn. A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a contactArn). All Related Items have their own internal identifier, the relatedItemArn. Examples of related items include comments and contacts. If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide. The type field is reserved for internal use only. Endpoints: See Amazon Connect endpoints and quotas.

```sql
INSERT INTO aws.connectcases.related_items (
type,
content,
performedBy,
domain_id,
case_id,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ content }}' /* required */,
'{{ performedBy }}',
'{{ domain_id }}',
'{{ case_id }}',
'{{ region }}'
RETURNING
relatedItemArn,
relatedItemId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: related_items
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the related_items resource.
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the related_items resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the related_items resource.
    - name: type
      value: "{{ type }}"
      valid_values: ['Contact', 'Comment', 'File', 'Sla', 'ConnectCase', 'Custom']
    - name: content
      description: |
        Represents the content of a related item to be created.
      value:
        contact:
          contactArn: "{{ contactArn }}"
        comment:
          body: "{{ body }}"
          contentType: "{{ contentType }}"
        file:
          fileArn: "{{ fileArn }}"
        sla:
          slaInputConfiguration:
            name: "{{ name }}"
            type_: "{{ type_ }}"
            fieldId: "{{ fieldId }}"
            targetFieldValues:
              - stringValue: "{{ stringValue }}"
                doubleValue: {{ doubleValue }}
                booleanValue: {{ booleanValue }}
                emptyValue: "{{ emptyValue }}"
                userArnValue: "{{ userArnValue }}"
            targetSlaMinutes: {{ targetSlaMinutes }}
        connectCase:
          caseId: "{{ caseId }}"
        custom:
          fields:
            - id: "{{ id }}"
              value:
                stringValue: "{{ stringValue }}"
                doubleValue: {{ doubleValue }}
                booleanValue: {{ booleanValue }}
                emptyValue: "{{ emptyValue }}"
                userArnValue: "{{ userArnValue }}"
    - name: performedBy
      description: |
        Represents the entity that performed the action.
      value:
        userArn: "{{ userArn }}"
        customEntity: "{{ customEntity }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_related_item"
    values={[
        { label: 'update_related_item', value: 'update_related_item' }
    ]}
>
<TabItem value="update_related_item">

Updates the content of a related item associated with a case. The following related item types are supported: Comment - Update the text content of an existing comment Custom - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas. Important things to know When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed. If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide. System case fields cannot be used in a custom related item. Endpoints: See Amazon Connect endpoints and quotas.

```sql
UPDATE aws.connectcases.related_items
SET 
content = '{{ content }}',
performedBy = '{{ performedBy }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND case_id = '{{ case_id }}' --required
AND related_item_id = '{{ related_item_id }}' --required
AND region = '{{ region }}' --required
AND content = '{{ content }}' --required
RETURNING
associationTime,
content,
createdBy,
lastUpdatedUser,
relatedItemArn,
relatedItemId,
tags,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_related_item"
    values={[
        { label: 'delete_related_item', value: 'delete_related_item' }
    ]}
>
<TabItem value="delete_related_item">

Deletes the related item resource under a case. This API cannot be used on a FILE type related attachment. To delete this type of file, use the DeleteAttachedFile API

```sql
DELETE FROM aws.connectcases.related_items
WHERE domain_id = '{{ domain_id }}' --required
AND case_id = '{{ case_id }}' --required
AND related_item_id = '{{ related_item_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
