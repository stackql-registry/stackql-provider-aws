--- 
title: connection_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_alias
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>connection_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.connection_alias" /></td></tr>
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
    <td><a href="#create_connection_alias"><CopyableCode code="create_connection_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionString"><code>ConnectionString</code></a></td>
    <td></td>
    <td>Creates the specified connection alias for use with cross-Region redirection. For more information, see Cross-Region Redirection for Amazon WorkSpaces.</td>
</tr>
<tr>
    <td><a href="#associate_connection_alias"><CopyableCode code="associate_connection_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasId"><code>AliasId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED.</td>
</tr>
<tr>
    <td><a href="#disassociate_connection_alias"><CopyableCode code="disassociate_connection_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasId"><code>AliasId</code></a></td>
    <td></td>
    <td>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED.</td>
</tr>
<tr>
    <td><a href="#delete_connection_alias"><CopyableCode code="delete_connection_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified connection alias. For more information, see Cross-Region Redirection for Amazon WorkSpaces. If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues. For more information, see Security Considerations if You Stop Using Cross-Region Redirection. To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</td>
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
    defaultValue="create_connection_alias"
    values={[
        { label: 'create_connection_alias', value: 'create_connection_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection_alias">

Creates the specified connection alias for use with cross-Region redirection. For more information, see Cross-Region Redirection for Amazon WorkSpaces.

```sql
INSERT INTO aws.workspaces.connection_alias (
ConnectionString,
Tags,
region
)
SELECT 
'{{ ConnectionString }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
alias_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connection_alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connection_alias resource.
    - name: ConnectionString
      value: "{{ ConnectionString }}"
      description: |
        A connection string in the form of a fully qualified domain name (FQDN), such as www.example.com. After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different account, even if you delete all instances of it from the original account. The connection string is globally reserved for your account.
    - name: Tags
      description: |
        The tags to associate with the connection alias.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_connection_alias"
    values={[
        { label: 'associate_connection_alias', value: 'associate_connection_alias' },
        { label: 'disassociate_connection_alias', value: 'disassociate_connection_alias' }
    ]}
>
<TabItem value="associate_connection_alias">

Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED.

```sql
UPDATE aws.workspaces.connection_alias
SET 
AliasId = '{{ AliasId }}',
ResourceId = '{{ ResourceId }}'
WHERE 
region = '{{ region }}' --required
AND AliasId = '{{ AliasId }}' --required
AND ResourceId = '{{ ResourceId }}' --required
RETURNING
connection_identifier;
```
</TabItem>
<TabItem value="disassociate_connection_alias">

Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED.

```sql
UPDATE aws.workspaces.connection_alias
SET 
AliasId = '{{ AliasId }}'
WHERE 
region = '{{ region }}' --required
AND AliasId = '{{ AliasId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection_alias"
    values={[
        { label: 'delete_connection_alias', value: 'delete_connection_alias' }
    ]}
>
<TabItem value="delete_connection_alias">

Deletes the specified connection alias. For more information, see Cross-Region Redirection for Amazon WorkSpaces. If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues. For more information, see Security Considerations if You Stop Using Cross-Region Redirection. To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.

```sql
DELETE FROM aws.workspaces.connection_alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
