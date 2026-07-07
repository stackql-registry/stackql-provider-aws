--- 
title: document_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - document_permissions
  - ssm
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

Creates, updates, deletes, gets or lists a <code>document_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.document_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_document_permission"
    values={[
        { label: 'describe_document_permission', value: 'describe_document_permission' }
    ]}
>
<TabItem value="describe_document_permission">

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
    <td><CopyableCode code="AccountIds" /></td>
    <td><code>array</code></td>
    <td>The account IDs that have permission to use this document. The ID can be either an Amazon Web Services account number or all.</td>
</tr>
<tr>
    <td><CopyableCode code="AccountSharingInfoList" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services accounts where the current document is shared and the version shared with each account.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. Use this token to get the next set of results.</td>
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
    <td><a href="#describe_document_permission"><CopyableCode code="describe_document_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (All).</td>
</tr>
<tr>
    <td><a href="#modify_document_permission"><CopyableCode code="modify_document_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-PermissionType"><code>PermissionType</code></a></td>
    <td></td>
    <td>Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.</td>
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
    defaultValue="describe_document_permission"
    values={[
        { label: 'describe_document_permission', value: 'describe_document_permission' }
    ]}
>
<TabItem value="describe_document_permission">

Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (All).

```sql
SELECT
AccountIds,
AccountSharingInfoList,
NextToken
FROM aws.ssm.document_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_document_permission"
    values={[
        { label: 'modify_document_permission', value: 'modify_document_permission' }
    ]}
>
<TabItem value="modify_document_permission">

Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.

```sql
UPDATE aws.ssm.document_permissions
SET 
Name = '{{ Name }}',
PermissionType = '{{ PermissionType }}',
AccountIdsToAdd = '{{ AccountIdsToAdd }}',
AccountIdsToRemove = '{{ AccountIdsToRemove }}',
SharedDocumentVersion = '{{ SharedDocumentVersion }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND PermissionType = '{{ PermissionType }}' --required;
```
</TabItem>
</Tabs>
