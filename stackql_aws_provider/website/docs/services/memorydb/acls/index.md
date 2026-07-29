--- 
title: acls
hide_title: false
hide_table_of_contents: false
keywords:
  - acls
  - memorydb
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

Creates, updates, deletes, gets or lists an <code>acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_acl"><CopyableCode code="create_acl" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ACLName"><code>ACLName</code></a></td>
    <td></td>
    <td>Creates an Access Control List. For more information, see Authenticating users with Access Contol Lists (ACLs).</td>
</tr>
<tr>
    <td><a href="#update_acl"><CopyableCode code="update_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ACLName"><code>ACLName</code></a></td>
    <td></td>
    <td>Changes the list of users that belong to the Access Control List.</td>
</tr>
<tr>
    <td><a href="#delete_acl"><CopyableCode code="delete_acl" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see Authenticating users with Access Contol Lists (ACLs).</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_acl"
    values={[
        { label: 'create_acl', value: 'create_acl' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_acl">

Creates an Access Control List. For more information, see Authenticating users with Access Contol Lists (ACLs).

```sql
INSERT INTO aws.memorydb.acls (
ACLName,
UserNames,
Tags,
region
)
SELECT 
'{{ ACLName }}' /* required */,
'{{ UserNames }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
acl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the acls resource.
    - name: ACLName
      value: "{{ ACLName }}"
      description: |
        The name of the Access Control List.
    - name: UserNames
      value:
        - "{{ UserNames }}"
      description: |
        The list of users that belong to the Access Control List.
    - name: Tags
      description: |
        A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_acl"
    values={[
        { label: 'update_acl', value: 'update_acl' }
    ]}
>
<TabItem value="update_acl">

Changes the list of users that belong to the Access Control List.

```sql
UPDATE aws.memorydb.acls
SET 
ACLName = '{{ ACLName }}',
UserNamesToAdd = '{{ UserNamesToAdd }}',
UserNamesToRemove = '{{ UserNamesToRemove }}'
WHERE 
region = '{{ region }}' --required
AND ACLName = '{{ ACLName }}' --required
RETURNING
acl;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_acl"
    values={[
        { label: 'delete_acl', value: 'delete_acl' }
    ]}
>
<TabItem value="delete_acl">

Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see Authenticating users with Access Contol Lists (ACLs).

```sql
DELETE FROM aws.memorydb.acls
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
